<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-green-4 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">
            Mon Twitter Clone avec Quasar - {{ $route.name }}
          </span>

          <q-icon
            class="q-pa-md lt-md header-icon "
            name="fa-solid fa-dove"
            size="sm"
            color="white"
          />

        </q-toolbar-title>



      </q-toolbar>
    </q-header>

    <!-- left drawer content -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="200"
    >
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
          exact
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
          :to="{name: 'about'}"
          exact
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

    <!-- right drawer content -->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        class="q-ma-md"
        color="purple-12"
        outlined
        rounded
        placeholder="recherchez un tweet"
        dense
        icon="search"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>

      </q-input>

     <q-list
        padding
        separator
      >

        <q-item class="q-pa-md">

          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something magik happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">

          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something magik happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold">Something magik happened</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

    <q-page-container>
    
      <!-- <keep-alive>
        <router-view />
      </keep-alive> -->

      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

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

<style lang="scss" scoped>
  .header-icon {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

</style>
