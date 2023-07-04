<template>
  <div>
    <h5 class="text-center">Cadastrar</h5>
    <div class="formulario">
      <!-- Input Responsavel -->
      <q-select
        outlined
        color="teal-14"
        v-model="newItem.name"
        :options="responsaveis"
        label="Responsavel"
        class="inptResponsavel"
      />
      <!-- Input Data -->
      <q-input
        color="teal-14"
        v-model="newItem.data"
        label="Data"
        class="inptData"
        mask="##/##/####"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <!-- Input Local -->
      <q-input
        color="teal-14"
        v-model="newItem.local"
        label="Localidade"
        class="inptData"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-input>
      <!-- Input Valor -->
      <q-input
        type="number"
        color="teal-14"
        v-model.number="newItem.valor"
        label="Valor"
        class="inptData"
      >
        <template v-slot:prepend>
          <q-icon name="monetization_on" />
        </template>
      </q-input>
      <!-- Button Cadastrar -->
      <q-btn color="blue-9" label="Cadastrar" class="btnAdd" @click="addItem" />
    </div>
  </div>
</template>

<script>
import { MixinInserir } from "../utils/mixin-Inserir";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cadastrar",
  data() {
    return {
      responsaveis: ["Raphael", "Rhaíssa", "Ambos"],
      newItem: {
        name: "",
        data: "",
        local: "",
        valor: 0,
      },
    };
  },
  mixins: [MixinInserir],
});
</script>

<style>
.formulario {
  margin-left: 39%;
}
.inptResponsavel {
  width: 40%;
}
.inptData {
  width: 40%;
  margin-top: 3%;
}

.btnAdd {
  margin-top: 4%;
  margin-left: 5%;
  width: 30%;
}
</style>
