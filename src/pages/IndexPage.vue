<template>
  <q-page class="home">
    <img src="../assets/imgs/noix4.jpg" class="imagem-home" />
    <q-footer class="footer">
      Total: R${{ total.toFixed(2) }}
      <q-space />
      Uso: {{ totalUso }} vezes
    </q-footer>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { MixinApp } from "../utils/mixin-App.js";
export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      cartaoRhai: [],
      cartaoRapha: [],
      cartaoAmbos: [],
      valorTotalRhai: 0,
      valorTotalRapha: 0,
      valorTotalAmbos: 0,
      total: 0,
      totalUso: 0,
    };
  },
  mixins: [MixinApp],
  async created() {
    this.cartaoRhai = await this.getDataRhai();
    this.valorTotalRhai = await this.getTotalRhai();
    this.cartaoAmbos = await this.getDataAmbos();
    this.valorTotalAmbos = await this.getTotalAmbos();
    this.cartaoRapha = await this.getDataRapha();
    this.valorTotalRapha = await this.getTotalRapha();
    this.total =
      this.valorTotalRapha + this.valorTotalRhai + this.valorTotalAmbos;
    this.totalUso =
      this.cartaoAmbos.length +
      this.cartaoRapha.length +
      this.cartaoRhai.length;
  },
});
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 130vh;
  overflow: hidden;
}

.imagem-home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer {
  text-align: center;
  background-color: ForestGreen;
  color: whitesmoke;
}
</style>
