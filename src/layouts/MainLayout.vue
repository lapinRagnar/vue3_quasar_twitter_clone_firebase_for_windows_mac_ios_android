<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-green-4 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          Mon Twitter Clone avec Quasar
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      width="200"
    >
      <!-- left drawer content -->
      <q-icon
        class="q-pa-md"
        name="fa-solid fa-dove"
        size="lg"
        color="green-4"
      />

      <q-list>
        <q-item
          clickable
          v-ripple
          to="/"
        >
          <q-item-section avatar>
            <q-icon
              color="green-4"
              name="home"
              size="md"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/about"
        >
          <q-item-section avatar>
            <q-icon
              color="green-4"
              name="help"
              size="md"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
