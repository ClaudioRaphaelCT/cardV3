<template>
  <div>
    <h4 class="text-center">Registros de uso, Ambos</h4>
    <div class="principal">
      <q-list bordered padding class="lista">
        <q-item
          class="item"
          :class="{ itemSelecionado: selected.includes(user.id) }"
          clickable
          v-ripple
          v-for="(user, indice) in cartaoAmbos"
          :key="indice"
          @click="contarSelecionados(user.id)"
          @dblclick="capturar(user.id)"
        >
          <!-- DIALOG EDITAR -->
          <DialogEditar
            v-model="showDialogEditar"
            :id="idDoItemSelecionado"
            :userName="nameAmbos"
          ></DialogEditar>
          <!-- FIM DIALOG EDITAR -->
          <q-item-section avatar top>
            <q-avatar class="meu-avatar">
              <img
                src="../assets/imgs/noix.jpg"
                alt="Avatar"
                class="avatar-imagem"
              />
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
    <!-- BTN -->
    <q-btn
      v-show="selected.length >= 1"
      @click="deletar(selected)"
      class="btnDeletar"
      color="red"
      icon="delete"
      label="Apagar"
    />
    <!--BTN -->
    <Footer :vlrTotal="vlrAmbos.toFixed(2)" :totalUso="totalUso"></Footer>
  </div>
</template>
<script>
import DialogEditar from "src/components/DialogEditar.vue";
import Title from "src/components/Title.vue";
import Footer from "src/components/Footer.vue";
import { MixinAmbos } from "src/utils/mixin-Ambos";
export default {
  data() {
    return {
      nameAmbos: "Ambos",
      cartaoAmbos: [],
      vlrAmbos: 0,
      totalUso: 0,
      showDialog: false,
      showDialogDelete: false,
      showDialogEditar: false,
      selected: [],
      itemSelecionado: false,
      responsavelNome: "",
      confirmarExcluir: false,
      idDoItemSelecionado: null,
      responsaveis: ["Raphael", "Rhaíssa", "Ambos"],
      itemEdit: {
        name: "",
        data: "",
        local: "",
        valor: 0,
      },
    };
  },
  components: {
    Title,
    DialogEditar,
    Footer,
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
  background-color: ForestGreen;
  color: white;
}

.inptResponsavel {
  width: 100%;
}

.inptData {
  width: 100%;
}

.itemSelecionado {
  margin-bottom: 3%;
  background-color: orangered;
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
  height: 100px;
  width: 100px;
  border-radius: 0;
}
.avatar-imagem {
  width: 100%;
  height: 100%;
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

.btnDeletar {
  margin-left: 46%;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
