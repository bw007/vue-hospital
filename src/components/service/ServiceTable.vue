<template>
  <Table>
    <TableCaption>Bo'limlar jadvali</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead />
        <TableHead class="w-[100px]">
          Xizmat turi
        </TableHead>
        <TableHead>Yaratilgan vaqti</TableHead>
        <TableHead>Status</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="service, i in list" :key="service._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-3/12">
          {{ service.title }}
        </TableCell>
        <TableCell>{{ service.createdTime }}</TableCell>
        <TableCell>{{ service.status == 1 ? "Faol" : "Nofaol" }}</TableCell>
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
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="service_store.deleteService(service._id)">Ha</AlertDialogAction>
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

import { serviceStore } from '@/stores/data/service';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const service_store = serviceStore()
const { services } = storeToRefs(service_store)

const list = computed(() => {
  return services.value.map(service => {
    return {
      ...service,
      createdTime: convertDate(service.createdTime)
    }
  })
})

</script>