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
  },
};
