<template>
  <Table>
    <TableCaption>Bo'limlar jadvali</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead />
        <TableHead class="w-[100px]">
          Raqami
        </TableHead>
        <TableHead class="w-[100px]">
          Sig'imi
        </TableHead>
        <TableHead class="w-[100px]">
          Tegishli bo'lim
        </TableHead>
        <TableHead>Yaratilgan vaqti</TableHead>
        <TableHead>Status</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="room, i in list" :key="room._id">
        <TableCell class="w-14 p-3">{{ i + 1 }}</TableCell>
        <TableCell class="font-medium w-32">
          <Badge class="justify-center bg-green-500">
            {{ room.number }}
          </Badge>
        </TableCell>
        <TableCell class="font-medium w-32">
          <Badge class="justify-center bg-green-500">
            {{ room.maxcount }}
          </Badge>
        </TableCell>
        <TableCell class="w-3/12">{{ room.department }}</TableCell>
        <TableCell>{{ room.createdTime }}</TableCell>
        <TableCell>{{ room.status == 1 ? "Faol" : "Nofaol" }}</TableCell>
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
                <AlertDialogAction class="bg-red-500 hover:bg-red-800" @click="room_store.deleteRoom(room._id)">Ha</AlertDialogAction>
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

import { roomStore } from '@/stores/data/room';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { convertDate } from '@/stores/utils/func';

const room_store = roomStore()
const { rooms } = storeToRefs(room_store)

const list = computed(() => {
  return rooms.value.map(room => {
    return {
      ...room,
      createdTime: convertDate(room.createdTime)
    }
  })
})

</script>