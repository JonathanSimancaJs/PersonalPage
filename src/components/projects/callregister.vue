<template lang="html">
  <div class="">
    <Navbar/>
      <div class="container text-justify pbox">
        <div class="">
          <h1>CallRegister</h1>
        </div>
        <div class="row">
          <div class="col-sm-6 paragraph fadeIn">
            <p>Es la aplicación web más reciente que he desarrollado. En mi último empleo
               había estado trabajando con una mesa de ayuda, brindando soporte técnico y
               registrando solicitudes de servicio. El sistema que usábamos para la gestión
                no nos permitía validar de manera fácil la cantidad casos que habíamos
                gestionado, adicionalmente usábamos plantillas en Word o Excel para registrar
                 los datos de una llamada. Entonces decidí crear esta pagina para usarla
                  con mis compañeros de trabajo, mediante el uso de un formulario web podíamos
                   registrar los datos de la llamada y del caso de manera más eficiente, permitía
                    guardar en un histórico el cual podíamos consultar fácilmente para ver
                    qué cantidad de casos habíamos creado.</p>
          </div>
          <div class="col-sm-4 text-left detaillist fadeIn delay-1">
            <ul>
              <li><b>Arquitectura:</b> MongoDb, NodeJs, VueJs, Bootstrap.</li>
              <li><b>Año:</b> 2018</li>
              <li><b>Repositorio GitHub:</b><a href="https://github.com/JonathanSimancaJs/CallRegisterMongoDB" target="_blank">
                https://github.com/JonathanSimancaJs/CallRegisterMongoDB</a></li>
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
          			<img src="/static/img/callregister01.png" />
                  </div>
          		<div class="nav">
          			<label for="img-6" class="prev">&#x2039;</label>
          			<label for="img-2" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-2" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/callregister02.png" />
                  </div>
          		<div class="nav">
          			<label for="img-1" class="prev">&#x2039;</label>
          			<label for="img-3" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-3" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/callregister03.png" />
                  </div>
          		<div class="nav">
          			<label for="img-2" class="prev">&#x2039;</label>
          			<label for="img-4" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-4" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/callregister04.png" />
                  </div>
          		<div class="nav">
          			<label for="img-3" class="prev">&#x2039;</label>
          			<label for="img-5" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-5" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/callregister05.png" />
                  </div>
          		<div class="nav">
          			<label for="img-4" class="prev">&#x2039;</label>
          			<label for="img-6" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-6" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/callregister06.png" />
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

</style>
