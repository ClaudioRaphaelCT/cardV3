<template>
  <q-footer class="footer">
    Total Raphael: {{ vlrTotal }}
    <q-space />
    Uso: {{ totalUso }} vezes
  </q-footer>
</template>
<script>
export default {
  props: ["vlrTotal", "totalUso"],
};
</script>
<style scoped>
.footer {
  text-align: center;
  background-color: rgb(50, 148, 204);
}
</style>
