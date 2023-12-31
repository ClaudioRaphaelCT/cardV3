import db from "src/service/conn";

export const MixinAmbos = {
  methods: {
    async getDataAmbos() {
      const snapshot = await db
        .collection("cartaoAmbos")
        .orderBy("data", "asc")
        .get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    async getTotalAmbos() {
      const sum = await this.cartaoAmbos.reduce(
        (total, item) => total + item.valor,
        0
      );
      return sum;
    },
    async deleteItem(itemId) {
      if (confirm("Tem certeza que deseja excluir esse item?")) {
        await db.collection("cartaoAmbos").doc(itemId).delete();
        this.cartaoAmbos = await this.getDataAmbos();
        this.vlrAmbos = await this.getTotalAmbos();
        location.reload();
      }
    },
    async deletar(selectedIds) {
      if (confirm("Tem certeza que deseja excluir esses itens?")) {
        await db.runTransaction(async (transaction) => {
          for (const id of selectedIds) {
            const docRef = db.collection("cartaoAmbos").doc(id);
            console.log(docRef);
            // Exclua o documento do Firestore
            transaction.delete(docRef);
          }
        });

        // Limpe a seleção após a exclusão de todos os itens
        this.selected = [];

        // Atualize a lista após a exclusão
        this.cartaoAmbos = await this.getDataAmbos();
        this.vlrAmbos = await this.getTotalAmbos();
      }
    },
    contarSelecionados(index) {
      const selectedIndex = this.selected.indexOf(index);
      if (selectedIndex === -1) {
        this.selected.push(index);
        console.log(this.selected);
      } else {
        this.selected.splice(selectedIndex, 1);
      }
    },
    capturar(id) {
      this.showDialogEditar = true;
      this.idDoItemSelecionado = id;
      console.log(this.idDoItemSelecionado);
    },
  },
};
