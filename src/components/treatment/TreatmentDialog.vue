<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button>Bemor qo'shish</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Bemor qo'shish</DialogTitle>
        <DialogDescription>
          Bemor ma'lumotlarini kiriting va saqlash tugmasini bosing.
        </DialogDescription>
      </DialogHeader>

      <form @submit.prevent="addForm" class="space-y-4">

        <FormField v-slot="{ componentField }" name="patsient">
          <FormItem>
            <FormLabel>Bo'lim</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Bemorlar" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item, i in patsients" :key="i" :value="item._id">
                    {{ item.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="service">
          <FormItem>
            <FormLabel>Xizmatlar</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Xizmat turi" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item, i in services" :key="i" :value="item._id">
                    {{ item.title }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="comment">
          <FormItem>
            <FormLabel>Izoh</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Izoh" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="price">
          <FormItem>
            <FormLabel>Narx</FormLabel>
            <NumberField :default-value="1000"  v-bind="componentField" :min="1000">
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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
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
import { storeToRefs } from 'pinia'
import { patsientStore } from '@/stores/data/patsient'
import { serviceStore } from '@/stores/data/service'
import { treatmentStore } from '@/stores/data/treatment'

const formSchema = toTypedSchema(
  z.object({
    comment: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(20, "Ko'pi bilan 20 ta belgi"),
    patsient: z.string()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(30, "Ko'pi bilan 20 ta belgi"),
    service: z.string()
    .min(1, "Majburiy maydon")
    .min(3, "Kamida 3 ta belgi")
    .max(30, "Ko'pi bilan 20 ta belgi"),
    price: z.number()
      .min(1, "Majburiy maydon")
      .min(3, "Kamida 3 ta belgi")
      .max(60000000, "Ko'pi bilan 20 ta belgi"),
  }),
)

const patsient_store = patsientStore()
const service_store = serviceStore()
const { patsients } = storeToRefs(patsient_store)
const { services } = storeToRefs(service_store)
const treatment_store = treatmentStore()


const form = useForm({
  validationSchema: formSchema,
})

const dialogOpen = ref(false)

const addForm = form.handleSubmit((data) => {
  dialogOpen.value = false
  treatment_store.addTreatment(data)
})

</script>
