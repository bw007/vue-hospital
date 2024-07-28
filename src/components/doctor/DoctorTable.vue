<template>
  <Table>
    <TableCaption>Shifokorlar ro'yxati</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead />
        <TableHead class="w-[100px]">
          Ism, Familiya
        </TableHead>
        <TableHead class="w-[100px]">
          Bo'lim
        </TableHead>
        <TableHead class="w-[100px]">
          Mutaxassislik
        </TableHead>
        <TableHead>Yaratilgan vaqti</TableHead>
        <TableHead>Status</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="doctor, i in list" :key="doctor._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-32">
          {{ doctor.name }}
        </TableCell>
        <TableCell class="font-medium w-32">
          {{ doctor.department }}
        </TableCell>
        <TableCell class="w-32">
          <Badge class="justify-center bg-green-500">
            {{ doctor.spec }}
          </Badge>
        </TableCell>
        <TableCell>{{ doctor.createdTime }}</TableCell>
        <TableCell>{{ doctor.status == 1 ? "Faol" : "Nofaol" }}</TableCell>
        <TableCell class="text-right flex gap-2 justify-end">
          <AlertDialog >
            <AlertDialogTrigger as-child>
              <Button variant="destructive" size="icon">
                <Trash2 class="h-5 w-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Ma'lumot o'chirilsinmi?</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Yo'q</AlertDialogCancel>
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="doctor_store.deleteDoctor(doctor._id)">Ha</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="secondary" size="icon">
            <Pencil class="h-5 w-5" />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup>
import { Trash2, Pencil } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import { doctorStore } from '@/stores/data/doctor';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const doctor_store = doctorStore()
const { doctors } = storeToRefs(doctor_store)

const list = computed(() => {
  return doctors.value.map(doctor => {
    return {
      ...doctor,
      createdTime: convertDate(doctor.createdTime)
    }
  })
})

</script>