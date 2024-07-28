<script setup>
import { CircleUser, Menu, Search, LogOut } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menu } from '@/stores/utils/menu'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <router-link to="/" class="flex items-center gap-2 font-semibold">
            <img src="@/assets/images/logo.png" alt="" width="32">
            <span class="">Hospital</span>
          </router-link>
        </div>
        <div class="flex-1">
          <nav class="flex flex-col px-2 py-1 text-sm font-medium lg:px-4 h-full">
            <router-link 
              v-for="(item, index) in menu" 
              :key="index"
              :to="{name: item.name}"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <component :is="item.icon" class="h-4 w-4" />
              {{ item.title }}
            </router-link>
            <router-link
              to="/auth"
              class="flex items-center gap-3 rounded-lg px-3 py-4 mt-auto text-red-500 transition-all hover:text-red-800"
            >
              <LogOut class="h-4 w-4" />
              Chiqish
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-sm font-medium">
              <router-link to="/" class="flex items-center gap-2 text-lg font-semibold">
                <img src="@/assets/images/logo.png" alt="" width="24">
                <span class="sr-only">Hospital</span>
              </router-link>
              <router-link v-for="(item, index) in menu" :key="index" :to="{ name: item.name }"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                <component :is="item.icon" class="h-4 w-4" />
                {{ item.title }}
              </router-link>
              <router-link
                to="/auth"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-red-400 hover:text-red-800"
              >
                <LogOut class="h-4 w-4" />
                Chiqish
              </router-link>
            </nav>
          </SheetContent>
        </Sheet>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>