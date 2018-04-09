<template lang="html">
  <div class="">
    <Navbar/>
      <div class="container text-justify pbox fadeIn">
        <div class="">
          <h1>Places</h1>
        </div>
        <div class="row">
          <div class="col-sm-6 paragraph">
            <p>Es una REST API, me encontraba muy interesado en como servir datos mediante una aplicación
               y consumirlos mediante otra, entonces realice un curso en <a href="https://codigofacilito.com/" target="_blank">CodigoFacilito</a>, en donde aprendí
                todo los conceptos mas importante de este modelo de diseño web y como aplicarlo en una situación real.
                 El ejercicio realizado consiste en una aplicación web progresiva que permite al usuario registrarse
                  o consultar los negocios ubicados en su zona como: restaurantes, bares, comidas rápidas etc. En el
                   Backend mediante MongoDB y Node.js me encargue de servir los datos de la aplicación con procesos
                    seguros de autenticación. En el Frontend mediante React.js y Redux, me engarce de recibir los datos
                     y mostrarlos en una interfaz web..</p>
          </div>
          <div class="col-sm-4 text-left detaillist fadeIn delay-1">
            <ul>
              <li><b>Arquitectura:</b> MongoDb, NodeJs, ReactJs.</li>
              <li><b>Año:</b> 2017</li>
              <li><b>Repositorio GitHub:</b>
                <a href="https://github.com/JonathanSimancaJs/RestApiPlacesFront" target="_blank">
                https://github.com/JonathanSimancaJs/RestApiPlacesFront</a></li>
                <li><a href="https://github.com/JonathanSimancaJs/RestApiPlacesBack" target="_blank">
                  https://github.com/JonathanSimancaJs/RestApiPlacesBack</a></li>
                <li><router-link :to="{ name: 'work' }">
                    <i class="fa fa-arrow-circle-left fa-2x"></i>
                </router-link></li>
            </ul>
          </div>
        </div>
        <div class="galery fadeIn delay-2">
          <ul class="slides">
              <input type="radio" name="radio-btn" id="img-1" checked />
              <li class="slide-container">
          		<div class="slide">
          			<img src="/static/img/places01.png" />
                  </div>
          		<div class="nav">
          			<label for="img-6" class="prev">&#x2039;</label>
          			<label for="img-2" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-2" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/places02.png" />
                  </div>
          		<div class="nav">
          			<label for="img-1" class="prev">&#x2039;</label>
          			<label for="img-3" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-3" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/places03.png" />
                  </div>
          		<div class="nav">
          			<label for="img-2" class="prev">&#x2039;</label>
          			<label for="img-4" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-4" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/places04.png" />
                  </div>
          		<div class="nav">
          			<label for="img-3" class="prev">&#x2039;</label>
          			<label for="img-5" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-5" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/places05.png" />
                  </div>
          		<div class="nav">
          			<label for="img-4" class="prev">&#x2039;</label>
          			<label for="img-6" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-6" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/places06.png" />
                  </div>
          		<div class="nav">
          			<label for="img-5" class="prev">&#x2039;</label>
          			<label for="img-1" class="next">&#x203a;</label>
          		</div>
              </li>

              <li class="nav-dots">
                <label for="img-1" class="nav-dot" id="img-dot-1"></label>
                <label for="img-2" class="nav-dot" id="img-dot-2"></label>
                <label for="img-3" class="nav-dot" id="img-dot-3"></label>
                <label for="img-4" class="nav-dot" id="img-dot-4"></label>
                <label for="img-5" class="nav-dot" id="img-dot-5"></label>
                <label for="img-6" class="nav-dot" id="img-dot-6"></label>
              </li>
          </ul>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="css">
.pbox{
  margin-top: 40px;
}
.detaillist li{
  list-style: none;
}
.detaillist a{
  text-decoration: none;
}
.detaillist a:hover{
  text-decoration: none;
}
</style>
