<template>
  <div>
    <div class="container w-80">
      <h1 class="titulo-cobertura-especial">
        A continuación, te invitamos a completar la tabla con los mares!
      </h1>
      <Tabla></Tabla>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "../components/Footer";
import Tabla from "../components/Tabla";

export default {
  name: "",
  components: {
    Footer,
    Tabla,
  },
};
</script>
<style lang="css">
.titulo-cobertura-especial {
  color: blue;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3%;
  padding: 2% 0;
  font-size: 200%;
}
</style>