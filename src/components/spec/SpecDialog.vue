<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Yangi mutaxassislik</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Yangi mutaxassislik</DialogTitle>
        <DialogDescription>
          Yangi mutaxassislik nomini kiriting va saqlash tugmasini bosing.
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="addForm" class="space-y-4">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>Mutaxassislik nomi</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Misol: Stomatolog" v-bind="componentField" />
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
import { specStore } from '@/stores/data/spec'

const formSchema = toTypedSchema(
  z.object({
    title: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(20, "Ko'pi bilan 20 ta belgi")
  })
)

const spec_store = specStore()

const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  dialogOpen.value = false
  spec_store.addSpec(data)
})

</script>
