<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Xizmat qo'shish</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Xizmat qo'shish</DialogTitle>
        <DialogDescription>
          Xizmat turini kiriting va saqlash tugmasini bosing.
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="addForm" class="space-y-4">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>Xizmat turi</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Misol: Fizioterapiya" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">Saqlash</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { serviceStore } from '@/stores/data/service'

const formSchema = toTypedSchema(
  z.object({
    title: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(20, "Ko'pi bilan 20 ta belgi")
  })
)

const service_store = serviceStore()

const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  dialogOpen.value = false
  service_store.addService(data)
})

</script>
