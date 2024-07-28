<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Yangi bemor</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Yangi bemor</DialogTitle>
        <DialogDescription>
          Yangi bemor ma'lumotlarini kiriting va saqlash tugmasini bosing.
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="addForm" class="space-y-4">
        
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Ism Familiya</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Ism" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="department">
          <FormItem>
            <FormLabel>Bo'lim</FormLabel>
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

        <FormField v-slot="{ componentField }" name="doctor">
          <FormItem>
            <FormLabel>Shifokor</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Shifokor" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item, i in doctors" :key="i" :value="item._id">
                    {{ item.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
import { departStore } from '@/stores/data/depart'
import { storeToRefs } from 'pinia'
import { doctorStore } from '@/stores/data/doctor'
import { patsientStore } from '@/stores/data/patsient'

const formSchema = toTypedSchema(
  z.object({
    name: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(20, "Ko'pi bilan 20 ta belgi"),
    department: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(30, "Ko'pi bilan 20 ta belgi"),
    doctor: z.string()
    .min(1, "Majburiy maydon")
    .min(3, "Kamida 3 ta belgi")
    .max(30, "Ko'pi bilan 20 ta belgi")
  }),
)

const patsient_store = patsientStore()
const depart_store = departStore()
const doctor_store = doctorStore()
const { doctors } = storeToRefs(doctor_store)
const { departs } = storeToRefs(depart_store)


const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  dialogOpen.value = false
  patsient_store.addPatsient(data)
})

</script>
