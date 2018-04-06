<template lang="html">
  <div>
    <Navbar/>
      <h1 class="profile fadeIn delay-1" id="profile">
        ¿QUIEN
        <br>
        SOY?
      </h1>
        <p class="profdes text-justify fadeIn delay-2">San Carlos – Córdoba es mi tierra natal, más exactamente provengo de una vereda llamada “La coroza”.
          Han sido tantas las experiencias que me han llevado por la vida y heme aquí en Bogotá. Aunque llevo mi tierra en el corazón,
          también me he encariñado con esta ciudad.
          <br>
          Hace seis años decidí casarme, gracias a ello vivo feliz con mi esposa y dos hermosos retoños,
          Santiago mi niño travieso y Sofia la princesa de papá. Mi familia es el motor de mi vida y ellos me dan la
          fuerza para superar cualquier obstáculo.</p>
      <img src="/static/img/profile.jpg" class="avatar fadeIn">
      <div class="container text-justify cont2 handcont fadeIn">
        <div class="row">
            <div class="col-sm-6 card">
              <h4>Preparación</h4>
              <p>Soy técnico en sistemas egresado del SENA, anterior a ello estudie tres semestres de ingeniería de sistemas en la CUN,
                pero por motivos económicos no pude continuar mi carrera. Desde que finalice la formación técnica, he trabajado como
                analista de soporte técnico en varias compañías, gracias a ello he adquirido una vasta experiencia  y conocimientos
                en temas de: Redes, Servidores, Sistemas operativos, Ofimática, Software utilitario, Itil, entre otros.</p>
              <p>Con el tiempo descubrí que mi verdadera pasión era la programación así que por mi cuenta me dedique a estudiar
                y aprender tecnólogas referentes al desarrollo web tales como: Mysql, PHP, CSS, Javascript y otras que están
                adquiriendo gran importancia en el mercado. Actualmente me encuentro estudiando una tecnología en Análisis y desarrollo
                de sistemas de información en el SENA y cada día me dedico a aprender más de este apasionante mundo. </p>
              <p>En cuanto a la parte de idiomas, debo admitir que hace algunos años no me interesaba para nada aprender,
                pero descubrí durante mi experiencia como técnico y programador, que el idioma ingles es de vital importancia,
                te abre la puerta a un mar de conocimiento sin límites. Entonces emprendí una vez más el camino del autoaprendizaje,
                con la ayuda de aplicaciones móviles, audios, videos, libros, me fui enamorando del inglés y hoy en día he adquirido
                 un nivel intermedio, en este momento puedo leer textos, comprender audios, conversaciones y hablarlo solo un poco
                  pero aún sigo trabajando en ello. </p>
              <h4>Habilidades</h4>
              <p>Lo mío son las aplicaciones Web y cuando me entere que JavaScript corría del lado del servidor me pareció tan genial
                 que quise saber más al respecto, al ver todas las tecnologías que existen para construir aplicaciones con solo
                 JavaScript tanto en el Backend como en el Frontend, término por convertirse en mi lenguaje de programación favorito
                  y por ello me dedique a ser un desarrollador Full Stack en este lenguaje.</p>
            </div>
            <div class="col-sm-6 card">
              <p>Así que para el proceso de desarrollo de una aplicación Web me encanto trabajar con el Stack MEVN, ya que me pareció
                 sencillo, rápido y sin tantas complicaciones, a continuación describo como se compone este Stack y adicionalmente
                  menciono un conjunto de herramientas adicionales que suelo usar en el desarrollo de aplicaciones web :</p>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/mysql.png" class="logos">
                  <img src="/static/img/mongodb.png" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <br>
                  <br>
                  <br>
                  <p>Sistema de base de datos.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/nodejs.png" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <p>Entorno para ejecución de Javascript del lado del servidor.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/express.png" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <p>Infraextura de aplicación.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/vuejs.jpeg" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <p>Framework.</p>
                </div>
              </div>
              <h5>Extras:</h5>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/git.png" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <p>Sistema de control de versiones.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5">
                  <img src="/static/img/bootstrap.jpg" class="logos">
                </div>
                <div class="col-sm ctextlogo">
                  <p>Galería de elementos para el desarrollo y diseño Web.</p>
                </div>
              </div>
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
  },
  mounted() {
      let t = setInterval(() => {
          if (document.readyState === 'complete') {
              // run after page has finished loadin
              if (screen.width < 1024) {
                document.getElementById('profile').style.top="20%";
                document.getElementById('profile').style.left="10%";
              }
              clearInterval(t)
          }
      }, 500)
  }
}
</script>

<style lang="css">
.logos{
  width: 200px;
  height: 80px;
}
.avatar{
  transform: translate(90px,80px);
  width: 50%;
  height: 10%;
  z-index: 2;
  border-radius: 5px;
}
.profile{
  top: 40%;
  left: 20%;
  position: absolute;
  z-index: 1;
  font-size: 80px;
  color: #16A085;
}
.profdes{
  top: 62%;
  left: 20%;
  max-width: 400px;
  position: absolute;
  z-index: 1;
  background: #8cc84b;
  padding: 10px;
  border-radius: 5px;
}
.cont2{
margin-top: 85px;
-webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.ctextlogo{
  font-size: 15px;
  padding-top: 20px;
}
.card{
  padding-bottom: 50px;
}

</style>
