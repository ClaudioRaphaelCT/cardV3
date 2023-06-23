import db from "../service/conn";

export const MixinInserir = {
  methods: {
    async addItem() {
      if (this.newItem.name == "Rhaíssa") {
        await db.collection("cartaoRhai").doc().set(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rhaíssa`);
        location.reload();
      } else if (this.newItem.name == "Raphael") {
        await db.collection("cartaoRapha").add(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rapha`);
        location.reload();
      } else if (this.newItem.name == "Ambos") {
        await db.collection("cartaoAmbos").add(this.newItem);
        this.newItem = {
          data: "",
          local: "",
          valor: 0,
        };
        alert(`Cadastro Realizado para : Rapha & Rhaí`);
        location.reload();
      } else {
        alert("ERRO: Campos não preenchidos corretamente");
      }
    },
  },
};
