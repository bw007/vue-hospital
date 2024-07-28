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
          Shifokor
        </TableHead>
        <TableHead>Yaratilgan vaqti</TableHead>
        <TableHead>To'lov</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="treatment, i in list" :key="treatment._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-32">
          {{ treatment.patsient }}
        </TableCell>
        <TableCell class="font-medium w-32">
          <Badge class="justify-center bg-green-500">
            {{ treatment.service }}
          </Badge>
        </TableCell>
        <TableCell class="w-32">
          {{ treatment.comment }}
        </TableCell>
        <TableCell>{{ treatment.createdTime }}</TableCell>
        <TableCell>{{ treatment.price }}</TableCell>
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
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="treatment_store.deleteTreatment(treatment._id)">Ha</AlertDialogAction>
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

import { treatmentStore } from '@/stores/data/treatment';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const treatment_store = treatmentStore()
const { treatments } = storeToRefs(treatment_store)

const list = computed(() => {
  return treatments.value.map(treatment => {
    return {
      ...treatment,
      createdTime: convertDate(treatment.createdTime)
    }
  })
})

</script>