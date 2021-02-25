<template>
  <div id="home">
    <body>
      <div class="container w-80">
        <div class="row">
          <div class="titulo">
            <h2>
              El océano como nunca lo viste: gráfico interactivo te muestra su real profundidad.
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="copete">
            <h6>
              La playa es sin duda el destino predilecto de muchas personas en verano para pasar el calor, broncearse y disfrutar con amigos y familia. Pero realmente no lo conocemos en toda su plenitud y de seguro no comprendemos lo profundo que es. 
            </h6>
          </div>
        </div>

        <div class="row justify-content-center">
          <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="imagen" src="../assets/imagenoceano1.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                  <img class="imagen" src="../assets/imagenoceano2.jpg" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="imagen" src="../assets/imagenoceano3.jpg" alt="Third slide"/>
                </div>
                <div class="carousel-item">
                  <img class="imagen" src="../assets/imagenpceano4.jpg" alt="Fourth slide"/>
                </div>
                <div class="carousel-item">
                  <img class="imagen" src="../assets/imagenoceano5.jpg" alt="Fourth slide"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <p class="color-parrafo">
            En esa línea, Neal Agarwal, un ingeniero en computación de la Universidad de Virginia, quiso simplificar el aprendizaje y elaboró un interactivo gráfico con el cual podemos expandir nuestro conocimiento al respecto. A medida que bajas no solo puedes ir viendo las especies que habitan diferentes profundidades del océano, sino que igual puedes descubrir cómo el Sol alumbra cada vez menos, hasta el punto que la potente estrella es tan solo un recuerdo. A partir de ahí (351 metros), y en la oscuridad total, sigues bajando: es recién el comienzo de la aventura. 
          </p>
        </div>

        <div class="row">
          <div class="card">
            <div class="card-body">
              Puedes ver el gráfico haciendo click en este enlace:
              <a href="https://neal.fun/deep-sea/" target="https://neal.fun/deep-sea/">https://neal.fun/deep-sea/</a>
              y esperamos que lo recuerdes la próxima vez que decidas darte un chapuzón en la costa. Bon voyage.
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Dejanos tu comentario!</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Comentario"/>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    </body>
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
<style>
#home div.form-group {
  height: 200px;
  margin: 25px 0px;
  border-radius: 25px;
  padding: 15px;
  font-style: italic;
  background-color: #ececec;
  color: blueviolet;
  font-family: Lucida Console;
  font-size: small;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>