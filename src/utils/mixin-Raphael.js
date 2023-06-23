import db from "src/service/conn";

export const MixinRapha = {
  methods: {
    async getData() {
      const snapshot = await db
        .collection("cartaoRapha")
        .orderBy("data", "asc")
        .get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    async getTotal() {
      const sum = await this.cartao.reduce(
        (total, item) => total + item.valor,
        0
      );
      return sum + this.vlrAmbos;
    },
    async deleteItem(itemId) {
      if (confirm("Tem certeza que deseja excluir esse item?")) {
        await db.collection("cartaoRapha").doc(itemId).delete();
        this.cartao = await this.getData();
        this.vlrTotal = await this.getTotal();
        location.reload();
      }
    },
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
      return sum / 2;
    },
  },
};
