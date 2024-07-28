<template>
  <div class="flex items-center justify-center min-h-screen">
    <Tabs default-value="login" class="w-96 min-h-[486px]">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="login"> Tizimga kirish </TabsTrigger>
        <TabsTrigger value="reg"> Ro'yxatdan o'tish </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Tizimga kirish</CardTitle>
            <CardDescription>
              Maydonlarni to'ldiring va tizimga kirish tugmasini bosing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reg">
        <Card>
          <CardHeader>
            <CardTitle>Ro'yxatdan o'tish</CardTitle>
            <CardDescription>
              Maydonlarni to'ldiring va ro'yxatdan o'tish tugmasini bosing
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <RegForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
import RegForm from '@/components/auth/RegForm.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>