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
        <TableHead>Status</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="patsient, i in list" :key="patsient._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-32">
          {{ patsient.name }}
        </TableCell>
        <TableCell class="font-medium w-32">
          <Badge class="justify-center bg-green-500">
            {{ patsient.department }}
          </Badge>
        </TableCell>
        <TableCell class="w-32">
          {{ patsient.doctor }}
        </TableCell>
        <TableCell>{{ patsient.createdTime }}</TableCell>
        <TableCell>{{ patsient.status == 1 ? "Faol" : "Nofaol" }}</TableCell>
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
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="patsient_store.deletePatsient(patsient._id)">Ha</AlertDialogAction>
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

import { patsientStore } from '@/stores/data/patsient';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const patsient_store = patsientStore()
const { patsients } = storeToRefs(patsient_store)

const list = computed(() => {
  return patsients.value.map(patsient => {
    return {
      ...patsient,
      createdTime: convertDate(patsient.createdTime)
    }
  })
})

</script>