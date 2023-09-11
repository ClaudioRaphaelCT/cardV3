<template>
  <div>
    <q-input
      color="teal-14"
      v-model="data"
      label="Pesquisar por data"
      mask="##/##/####"
    >
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </q-input>

    <div class="q-pa-md">
      <q-markup-table>
        <thead class="head">
          <tr>
            <th class="text-left">Responsavel</th>
            <th class="text-center">Data</th>
            <th class="text-center">Local</th>
            <th class="text-center">Valor</th>
          </tr>
        </thead>
        <tbody v-for="(user, indice) in filteredData" :key="indice">
          <tr id="texto">
            <td class="text-left">{{ user.name }}</td>
            <td class="text-center">{{ user.data }}</td>
            <td class="text-center">{{ user.local }}</td>
            <td class="text-center">R$ {{ user.valor }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>
<script>
import db from "src/service/conn";
export default {
  data() {
    return {
      data: "",
      responsaveis: ["Raphael", "Rhaíssa", "Ambos"],
      tabelasCombinadas: [],
    };
  },
  async created() {
    await this.getData();
  },
  computed: {
    filteredData() {
      // Use o método de filtro para filtrar com base na data digitada
      return this.tabelasCombinadas.filter((user) => {
        return user.data.includes(this.data);
      });
    },
  },
  methods: {
    async getData() {
      const tabelasCombinadas = [];
      const tabelaRapha = await db
        .collection("cartaoRapha")
        .orderBy("data", "asc");
      const tabelaRhai = await db
        .collection("cartaoRhai")
        .orderBy("data", "asc");
      const tabelaAmbos = await db
        .collection("cartaoAmbos")
        .orderBy("data", "asc");
      // Inserir a consulta de Rapha
      await tabelaRapha.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tabelasCombinadas.push(doc.data());
        });
      });

      // Inserir a consulta de Rhai
      await tabelaRhai.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tabelasCombinadas.push(doc.data());
        });
      });
      // Inserir a consulta de Ambos
      await tabelaAmbos.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tabelasCombinadas.push(doc.data());
        });
      });

      // Atualize a variável tabelasCombinadas com os dados combinados
      this.tabelasCombinadas = tabelasCombinadas;
      console.log(this.tabelasCombinadas);
    },
  },
};
</script>
<style scoped>
.head {
  background-color: grey;
  color: white;
}
#texto:hover {
  background-color: ForestGreen;
  color: whitesmoke;
}
</style>
