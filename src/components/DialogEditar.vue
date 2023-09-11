<template>
  <q-dialog v-model="showDialogEditar">
    <q-card class="dialogo">
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
      <q-card-section>
        <!-- Botão de salvar -->
        <q-btn
          label="Editar"
          icon="edit"
          color="blue"
          v-close-popup
          @click="editar(id, userName)"
          class="btnEditar"
        />
      </q-card-section>

      <q-separator />
    </q-card>
  </q-dialog>
</template>

<script>
import { MixinEditar } from "src/utils/mixin-Editar";
export default {
  props: ["id", "userName"],
  data() {
    return {
      showDialogEditar: false,
      responsaveis: ["Raphael", "Rhaíssa", "Ambos"],
      itemEdit: {
        name: "",
        data: "",
        local: "",
        valor: 0,
      },
      idDoItemSelecionado: null,
    };
  },
  mixins: [ MixinEditar],
  methods: {
    openDialog() {
      this.$emit("showDialogEditar");
    },
  },
};
</script>

<style scoped>
.dialogo {
  width: 30%;
}
.inptResponsavel {
  width: 100%;
}

.inptData {
  width: 100%;
}
.btnEditar {
  margin-left: 30%;
}
</style>
