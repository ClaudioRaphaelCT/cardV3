<template>
  <div>
    <h4 class="text-center">Registros de uso, Ambos</h4>
    <div class="principal">
      <q-list bordered padding class="lista">
        <q-item
          class="item"
          clickable
          v-ripple
          v-for="(user, indice) in cartaoAmbos"
          :key="indice"
          @click="deleteItem(user.id)"
        >
          <q-item-section avatar top>
            <q-avatar class="meu-avatar">
              <img src="../assets/imgs/noix.jpg" alt="Avatar" />
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
      Total Ambos: {{ vlrAmbos.toFixed(2) }}
      <q-space />
      Uso: {{ totalUso }} vezes
    </q-footer>
  </div>
</template>
<script>
import { MixinAmbos } from "src/utils/mixin-Ambos";
export default {
  data() {
    return {
      cartaoAmbos: [],
      vlrAmbos: 0,
      totalUso: 0,
    };
  },
  mixins: [MixinAmbos],
  async created() {
    this.cartaoAmbos = await this.getDataAmbos();
    this.vlrAmbos = await this.getTotalAmbos();
    this.totalUso = await this.cartaoAmbos.length;
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
