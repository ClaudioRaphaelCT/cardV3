<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Rapha & Rhaí </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> O que você deseja fazer? </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Cadastrar",
    caption: "Cadastrar uso do cartão",
    icon: "local_grocery_store",
    link: "/#/cadastrar",
  },
  {
    title: "Raphael",
    caption: "Usos de Rapha",
    icon: "surfing",
    link: "/#/raphael",
  },
  {
    title: "Rhaíssa",
    caption: "Usos de Rhaí",
    icon: "star",
    link: "/#/rhaissa",
  },
  {
    title: "Ambos",
    caption: "Usos dividos por Rhaí e Rapha",
    icon: "travel_explore",
    link: "/#/ambos",
  },
  {
    title: "Buscar",
    caption: "Buscar utlização por data",
    icon: "search",
    link: "/#/buscar",
  },
  {
    title: "Voltar",
    caption: "Voltar para página principal",
    icon: "arrow_back_ios_new",
    link: "/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.header {
  background-color: ForestGreen;
}
</style>
