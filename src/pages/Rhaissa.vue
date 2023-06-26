<template>
  <div>
    <h4 class="text-center">Registros de uso, Rhai</h4>
    <div class="principal">
      <q-list bordered padding class="lista">
        <q-item
          class="item"
          clickable
          v-ripple
          v-for="(user, indice) in cartao"
          :key="indice"
          @click="deleteItem(user.id)"
        >
          <q-item-section avatar top>
            <q-avatar class="meu-avatar">
              <img src="../assets/imgs/rhai.jpg" alt="Avatar" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="local">{{ user.local }}</q-item-label>
            <q-item-label class="data">{{ user.data }}</q-item-label>
            <q-item-label class="valor">R$ {{ user.valor }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-footer class="footer">
      Total Rhaíssa: {{ vlrCalculateRhai.toFixed(2) }}
      <q-space />
      Uso: {{ totalUso }} vezes
    </q-footer>
  </div>
</template>
<script>
import { MixinRhai } from "src/utils/mixin-Rhaissa";
export default {
  data() {
    return {
      cartao: [],
      cartaoAmbos: [],
      vlrTotal: 0,
      vlrAmbos: 0,
      vlrCalculateRhai: 0,
      totalUso: 0,
    };
  },
  mixins: [MixinRhai],
  async created() {
    this.cartao = await this.getData();
    this.cartaoAmbos = await this.getDataAmbos();
    this.vlrTotal = await this.getTotal();
    this.vlrAmbos = await this.getTotalAmbos();
    this.vlrCalculateRhai = (await this.vlrTotal) + this.vlrAmbos;
    this.totalUso = await this.cartao.length;
  },
};
</script>
<style scoped>
.principal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lista {
  width: 300px;
}

.item {
  margin-bottom: 3%;
  background-color: rgb(50, 148, 204);
  color: white;
}
.lista-title {
  text-align: center;
  background-color: grey;
  color: white;
  margin-bottom: 2%;
  font-size: 18px;
}

.meu-avatar {
  margin-top: 10%;
  height: 60px;
  width: 60px;
}

.local {
  text-align: center;
  font-size: 19px;
}

.data {
  text-align: center;
  margin-top: 4%;
  margin-bottom: 4%;
  font-family: "Times New Roman", Times, serif;
}

.valor {
  text-align: center;
}

.footer {
  text-align: center;
  background-color: rgb(50, 148, 204);
}
</style>
