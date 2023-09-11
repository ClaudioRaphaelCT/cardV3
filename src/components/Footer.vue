<template>
  <q-footer class="footer">
    Total {{ responsavel }}: {{ vlrTotal }}
    <q-space />
    Uso: {{ totalUso }} vezes
  </q-footer>
</template>
<script>
export default {
  props: ["vlrTotal", "totalUso", "responsavel"],
};
</script>
<style scoped>
.footer {
  text-align: center;
  background-color: ForestGreen;
}
</style>
