<template lang="html">
  <div>
    <Navbar/>
      <div class="container pcont">
        <div class="row">
          <div class="project-header text-justify fadeIn">
            <h1>PROYECTOS</h1>
            <h3>Hechos con pasión. :)</h3>
            <hr>
            <p>Durante mi proceso de aprendizaje, he trabajado en algunos
               proyectos personales con el fin de practicar y mejorar mis
                habilidades de diseño y desarrollo. A continuación muestro
                 los trabajos mas completos que he realizado hasta el momento.
                  Sobraría un poco mencionar que esta pagina que estas visitando
                   también la hice yo XD.</p>
            <p>Actualmente me encuentro trabajando en otros proyectos que
               no aparecen aquí, a medida que lleve un progreso razonable
                o los haya terminado los daré a conocer. Mi proceso de
                aprendizaje nunca termina, es un mundo que se encuentra en constante
                  cambio e innovaciones y no quisiera quedarme atrás.</p>
          </div>
          <div class="project text-justify fadeIn">
            <router-link to="/callregister">
              <img src="/static/img/callregister01.png" class="imgcard">
            </router-link>
            <h3>CallRegister</h3>
            <p>Plantilla de registro de llamadas para mesa de ayuda.</p>
          </div>
          <div class="project text-justify fadeIn">
            <router-link to="/places">
              <img src="/static/img/places01.png" class="imgcard">
            </router-link>
            <h3>Places</h3>
            <p>Aplicación Web para publicitar sitios de comidas rapidas,
              restaurantes, bares y todo tipo de lugares comerciales.</p>
          </div>
          <div class="project text-justify fadeIn">
            <router-link to="/ticketit">
              <img src="/static/img/ticket01.png" class="imgcard">
            </router-link>
            <h3>Tickets IT</h3>
            <p>Aplicacion Web que permite gestionar solicitudes de
              serviccios e inventario de tecnologia, para areas de IT.</p>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="css">
.project-header{
  width: 45%;
  height: 440px;
  margin: 25px;
  border-radius: 10px;
  padding: 10px;
}
hr{
  background-color: #000;
}
.project{
  background: #ffff;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,0.05);
  border-radius: 2px 2px 2px 2px;
  -webkit-border-radius: 2px 2px 2px 2px;
  width: 45%;
  height: 440px;
  margin: 25px;
}
.project h3{
  padding-top: 10px;
  padding-left: 10px;
}
.project p{
  padding-left: 10px;
}
.project:hover{
  box-shadow:1px 9px 34px 0px rgba(0,0,0,0.75);
  transition: all 200ms cubic-bezier(.02, .01, .47, 1);
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
}
.pcont{
  padding-top: 20px;
  border-radius: 10px;
}
.imgcard{
  width: 100%;
  height: 75%;
}


.slides {
    padding: 0;
    width: 100%;
    height: 800px;
    display: block;
    margin: 0 auto;
    position: relative;
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input { display: none; }

.slide-container { display: block; }

.slide {
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;

    transform: scale(0);

    transition: all .7s ease-in-out;
}

.slide img {
    width: 100%;
    height: 100%;
}

.nav label {
    width: 200px;
    height: 100%;
    display: none;
    position: absolute;

	  opacity: 0;
    z-index: 9;
    cursor: pointer;

    transition: opacity .2s;

    color: #FFF;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    background-color: rgba(255, 255, 255, .3);
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

.slide:hover + .nav label { opacity: 0.5; }

.nav label:hover { opacity: 1; }

.nav .next { right: 0; }

input:checked + .slide-container  .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .nav label { display: block; }

.nav-dots {
	width: 100%;
	bottom: 9px;
	height: 11px;
	display: block;
	position: absolute;
	text-align: center;
}

.nav-dots .nav-dot {
	top: -5px;
	width: 11px;
	height: 11px;
	margin: 0 4px;
	position: relative;
	border-radius: 100%;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.6);
}

.nav-dots .nav-dot:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.8);
}

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3,
input#img-4:checked ~ .nav-dots label#img-dot-4,
input#img-5:checked ~ .nav-dots label#img-dot-5,
input#img-6:checked ~ .nav-dots label#img-dot-6 {
	background: rgba(0, 0, 0, 0.8);
}
</style>
