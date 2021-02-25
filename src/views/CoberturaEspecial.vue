<template>
  <div class="container w-80">
    <div class="row">
      <h1 class="titulo-cobertura-especial">
        Bienvenido a la cobertura especial, somos Florencia y Paloma
      </h1>
    </div>

    <div class="row">
      <h4 class="titulo-secundario">Dia Mundial de los Oceanos</h4>
    </div>

    <div class="row justify-content-center">
      <img
        class="imagen"
        src="../assets/diamundialdeloceano.jpg"
        alt="Dia de los oceanos"
      />
    </div>

    <div class="row color-parrafo">
      <p v-miDirectiva>
        El 5 de diciembre de 2008 la Asamblea General de las Naciones Unidas,
        por iniciativa de Canadá, resolvió en la Resolución 63/1111 que a partir
        de 2009 el 8 de junio sería el Día Mundial de los Océanos. A partir de
        2009 se celebra cada 8 de junio. Las razones por las que debemos
        celebrar el Día Mundial de los Océanos es para recordar a todos el papel
        importante que tienen los océanos en la vida cotidiana. Ellos son los
        pulmones de nuestro planeta, la mayor parte del oxígeno que respiramos.
        El propósito del Día es concienciar a la opinión pública sobre las
        consecuencias que la actividad humana tiene para los océanos y poner en
        marcha un movimiento mundial ciudadano a favor de los océanos. Este día
        quiere movilizar y unir a la población mundial entorno al objetivo de la
        gestión sostenible de los océanos, que son una fuente importante de
        alimentos y medicinas y una parte esencial de la biosfera. En
        deninitiva, esta celebración es un buen motivo para celebrar juntos la
        belleza, la riqueza y el potencial de los océanos.
      </p>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "",
  components: {
    Footer,
  },
};
</script>
<style lang="">
</style>