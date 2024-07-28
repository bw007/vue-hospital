<template>
  <Table>
    <TableCaption>Mutaxassisliklar jadvali</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead />
        <TableHead class="w-[100px]">
          Mutaxassislik nomi
        </TableHead>
        <TableHead>Yaratilgan vaqti</TableHead>
        <TableHead>Status</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="spec, i in list" :key="spec._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-3/12">
          {{ spec.title }}
        </TableCell>
        <TableCell>{{ spec.createdTime }}</TableCell>
        <TableCell>{{ spec.status == 1 ? "Faol" : "Nofaol" }}</TableCell>
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
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="spec_store.deleteSpec(spec._id)">Ha</AlertDialogAction>
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

import { specStore } from '@/stores/data/spec';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const spec_store = specStore()
const { specs } = storeToRefs(spec_store)

const list = computed(() => {
  return specs.value.map(spec => {
    return {
      ...spec,
      createdTime: convertDate(spec.createdTime)
    }
  })
})

</script>