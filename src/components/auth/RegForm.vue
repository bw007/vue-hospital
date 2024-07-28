<template>
  <form @submit.prevent="reg" class="space-y-3">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem v-auto-animate>
        <FormLabel>Ism, Familiya</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Foydalanuvchi nomi" v-bind="componentField" />
        </FormControl>
        <FormMessage class="text-xs" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="login">
      <FormItem v-auto-animate>
        <FormLabel>Foydalanuvchi nomi</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Foydalanuvchi nomi" v-bind="componentField" />
        </FormControl>
        <FormMessage class="text-xs" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem v-auto-animate>
        <FormLabel>Parol</FormLabel>
        <FormControl>
          <Input type="password" placeholder="Parol" v-bind="componentField" />
        </FormControl>
        <FormMessage class="text-xs" />
      </FormItem>
    </FormField>
    <Button type="submit">Ro'yxatdan o'tish</Button>
  </form>
</template>

<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { userStore } from '@/stores/auth/user'

const formSchema = toTypedSchema(z.object({
  name: z.string()
    .min(1, "Majburiy maydon")
    .min(2, "Kamida 2 ta belgi")
    .max(12, "Ko'pi bilan 12 ta belgi"),
  login: z.string()
    .min(1, "Majburiy maydon")
    .min(2, "Kamida 2 ta belgi")
    .max(12, "Ko'pi bilan 12 ta belgi"),
  password: z.string()
    .min(1, "Majburiy maydon")
    .min(2, "Kamida 2 ta belgi")
    .max(8, "Ko'pi bilan 8 ta belgi")
}))

const user_store = userStore()

const form = useForm({
  validationSchema: formSchema,
})

const reg = form.handleSubmit((data) => {
  user_store.reg(data)
  console.log('Form submitted!', data)
})

</script>

<style lang="">

</style>