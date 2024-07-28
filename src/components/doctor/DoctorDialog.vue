<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Yangi shifokor</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Yangi shifokor</DialogTitle>
        <DialogDescription>
          Yangi shifokor ma'lumotlarini kiriting va saqlash tugmasini bosing.
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

        <FormField v-slot="{ componentField }" name="spec">
          <FormItem>
            <FormLabel>Mutaxassislik</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Mutaxassislik" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item, i in specs" :key="i" :value="item._id">
                    {{ item.title }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="phone">
          <FormItem>
            <FormLabel>Telefon</FormLabel>
            <FormControl>
              <Input type="text" placeholder="+998..." v-bind="componentField" />
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
import { specStore } from '@/stores/data/spec'
import { doctorStore } from '@/stores/data/doctor'

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
    spec: z.string()
    .min(1, "Majburiy maydon")
    .min(3, "Kamida 3 ta belgi")
    .max(30, "Ko'pi bilan 20 ta belgi"),
    phone: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(13, "Ko'pi bilan 12 ta raqam"),
  }),
)

const doctor_store = doctorStore()
const depart_store = departStore()
const spec_store = specStore()
const { specs } = storeToRefs(spec_store)
const { departs } = storeToRefs(depart_store)

const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  dialogOpen.value = false
  doctor_store.addDoctor(data)
})

</script>
