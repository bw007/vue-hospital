<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Yangi palata</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Yangi palata</DialogTitle>
        <DialogDescription>
          Yangi palata nomini kiriting va saqlash tugmasini bosing.
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="addForm" class="space-y-4">
        <FormField v-slot="{ componentField }" name="department">
          <FormItem>
            <FormLabel>Bo'lim nomi</FormLabel>

            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Bo'limni tanlash" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item, i in departs" :key="i" :value="item._id">
                    {{ item.title }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="number">
          <FormItem>

            <FormLabel>Xona raqami</FormLabel>
            <NumberField id="age" :default-value="1" :min="1" v-bind="componentField">
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput/>
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>

            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="maxcount">
          <FormItem>
            <FormLabel>Xona sig'imi</FormLabel>
            <NumberField id="age" :default-value="1"  v-bind="componentField" :min="1">
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput/>
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
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
import { useForm } from 'vee-validate'
import { roomStore } from '@/stores/data/room'
import { departStore } from '@/stores/data/depart'
import { storeToRefs } from 'pinia'

const formSchema = toTypedSchema(
  z.object({
    department: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(30, "Ko'pi bilan 20 ta belgi"),
    number: z.number()
    .min(1, "Majburiy maydon")
    .min(1, "Majburiy maydon")
    .max(600, "10 dan 600 gacha"),
    maxcount: z.number()
    .min(1, "Majburiy maydon")
    .min(1, "Kamida 1 kishi")
    .max(6, "Ko'pi bilan 6 kishi"),
  }),
)

const room_store = roomStore()
const depart_store = departStore()
const { departs } = storeToRefs(depart_store)

const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  console.log(departs.value);
  dialogOpen.value = false
  room_store.addRoom(data)
})

</script>
