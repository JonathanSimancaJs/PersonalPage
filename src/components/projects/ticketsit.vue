<template lang="html">
  <div class="">
    <Navbar/>
      <div class="container text-justify pbox fadeIn">
        <div class="">
          <h1>Tickets IT</h1>
        </div>
        <div class="row">
          <div class="col-sm-6 paragraph">
            <p>Cuando inicie en los oscuros senderos de la programación, estaba probando muchas cosas,
               empecé con Java, luego pase a Python, vi un poco de Golang y me resigne a quedarme con PHP
                ya que no comprendía muy bien a los anteriores. Entonces decidí realizar mi primer proyecto
                 serio pasa saber si definitivamente servía para esto o no. Como siempre he trabajado en soporte,
                  pensé en crear una sistema de gestión de tickets de soporte técnico y el resultado fue sorprendente,
                   pude crear mi primera aplicación web funcional, domine algunos conceptos de bases de datos relacionales con Mysql,
                    el uso del Modelo Vista Controlador y construcción de interfaces web.</p>
          </div>
          <div class="col-sm-4 text-left detaillist fadeIn delay-1">
            <ul>
              <li><b>Técnologias:</b> MySql, PHP, Html, Css.</li>
              <li><b>Año:</b> 2017</li>
              <li><b>Repositorio GitHub:</b><a href="https://github.com/JonathanSimancaJs/CoursePHP/tree/master/Medivhtest" target="_blank">
                https://github.com/JonathanSimancaJs/CoursePHP/tree/master/Medivhtest</a></li>
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
          			<img src="/static/img/ticket01.png" />
                  </div>
          		<div class="nav">
          			<label for="img-6" class="prev">&#x2039;</label>
          			<label for="img-2" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-2" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/ticket02.png" />
                  </div>
          		<div class="nav">
          			<label for="img-1" class="prev">&#x2039;</label>
          			<label for="img-3" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-3" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/ticket03.png" />
                  </div>
          		<div class="nav">
          			<label for="img-2" class="prev">&#x2039;</label>
          			<label for="img-4" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-4" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/ticket04.png" />
                  </div>
          		<div class="nav">
          			<label for="img-3" class="prev">&#x2039;</label>
          			<label for="img-5" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-5" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/ticket05.png" />
                  </div>
          		<div class="nav">
          			<label for="img-4" class="prev">&#x2039;</label>
          			<label for="img-6" class="next">&#x203a;</label>
          		</div>
              </li>

              <input type="radio" name="radio-btn" id="img-6" />
              <li class="slide-container">
                  <div class="slide">
                    <img src="/static/img/ticket06.png" />
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
.detaillist a{
  font-size: 12px;
}
</style>
