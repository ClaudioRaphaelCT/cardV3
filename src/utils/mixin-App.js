import db from "src/service/conn";
export const MixinApp = {
  methods: {
    async getDataRhai() {
      const snapshot = await db
        .collection("cartaoRhai")
        .orderBy("data", "asc")
        .get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },

    async getTotalRhai() {
      const sum = await this.cartaoRhai.reduce(
        (total, item) => total + item.valor,
        0
      );
      return sum;
    },
    async getDataRapha() {
      const snapshot = await db
        .collection("cartaoRapha")
        .orderBy("data", "asc")
        .get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    async getTotalRapha() {
      const sum = await this.cartaoRapha.reduce(
        (total, item) => total + item.valor,
        0
      );
      return sum;
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
      return sum;
    },
  },
};
