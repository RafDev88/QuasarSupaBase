<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        Quasae Estoque
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'	

export default defineComponent({
  name: 'LoginLayout'
})


</script>
