import db from "src/service/conn";

export const MixinEditar = {
  methods: {
    async editar(id, userName) {
      const itemRefRapha = db.collection("cartaoRapha").doc(id);
      const itemRefRhai = db.collection("cartaoRhai").doc(id);
      const itemRefAmbos = db.collection("cartaoAmbos").doc(id);
      console.log(userName);
      if (userName == "Raphael") {
        await itemRefRapha.update({
          nome: this.itemEdit.name,
          local: this.itemEdit.local,
          data: this.itemEdit.data,
          valor: this.itemEdit.valor,
        });
        // Feche o modal após salvar
        this.showDialogEditar = false;
        // Limpe os campos do formulário após a edição
        this.novoLocal = "";
        this.novaData = "";
        this.novoValor = 0;
        location.reload();
      } else if (userName == "Rhaíssa") {
        await itemRefRhai.update({
          nome: this.itemEdit.name,
          local: this.itemEdit.local,
          data: this.itemEdit.data,
          valor: this.itemEdit.valor,
        });
        // Feche o modal após salvar
        this.showDialogEditar = false;
        // Limpe os campos do formulário após a edição
        this.novoLocal = "";
        this.novaData = "";
        this.novoValor = 0;
        location.reload();
      } else if (userName == "Ambos") {
        await itemRefAmbos.update({
          nome: this.itemEdit.name,
          local: this.itemEdit.local,
          data: this.itemEdit.data,
          valor: this.itemEdit.valor,
        });
        // Feche o modal após salvar
        this.showDialogEditar = false;
        // Limpe os campos do formulário após a edição
        this.novoLocal = "";
        this.novaData = "";
        this.novoValor = 0;
        location.reload();
      } else {
        console.log("ERROR");
      }
    },
  },
};
