<template>
  <div>
    <Title responsavel="Rhaíssa" />
    <div class="principal">
      <q-list bordered padding class="lista">
        <q-item
          class="item"
          :class="{ itemSelecionado: selected.includes(user.id) }"
          clickable
          v-ripple
          v-for="(user, indice) in cartao"
          :key="indice"
          @click="contarSelecionados(user.id)"
          @dblclick="capturar(user.id)"
        >
          <!-- DIALOG EDITAR -->
          <q-dialog v-model="showDialogEditar">
            <q-card>
              <q-card-section>
                <div class="text-h6 text-center">Editar</div>
              </q-card-section>

              <q-separator />
              <!-- Campos do formulário -->
              <q-select
                outlined
                color="teal-14"
                v-model="itemEdit.name"
                :options="responsaveis"
                label="Responsavel"
                class="inptResponsavel"
              />
              <q-input v-model="itemEdit.local" label="Local" />
              <q-input
                v-model="itemEdit.data"
                label="Data"
                class="inptData"
                mask="##/##/####"
              />
              <q-input v-model.number="itemEdit.valor" label="Valor" />

              <q-card-section style="max-height: 50vh" class="scroll">
                <!-- Botão de salvar -->
                <q-btn
                  label="Salvar"
                  icon="edit"
                  color="green"
                  v-close-popup
                  @click="editar"
                />
              </q-card-section>

              <q-separator />
            </q-card>
          </q-dialog>
          <!-- FIM DIALOG EDITAR -->
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
    <Footer
      :vlrTotal="vlrCalculateRhai.toFixed(2)"
      :totalUso="totalUso"
    ></Footer>
  </div>
</template>
<script>
import Title from "src/components/Title.vue";
import Footer from "src/components/Footer.vue";
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
    Footer,
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

.inptResponsavel {
  width: 100%;
}

.inptData {
  width: 100%;
}
.lista {
  width: 300px;
}

.item {
  margin-bottom: 3%;
  background-color: rgb(50, 148, 204);
  color: white;
}

.itemSelecionado {
  margin-bottom: 3%;
  background-color: orangered;
  color: white;
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
.btnDeletar {
  margin-left: 46%;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
