<template lang="html">
  <div>
    <Navbar/>
      <div class="container pcont">
        <div class="row">
          <div class="project-header text-justify">
            <h1>PROYECTOS</h1>
            <h3>Hecho con pasión. :)</h3>
            <hr>
            <p>Durante el proceso de aprendizaje como desarrollador Web,
              he trabajado en algunos proyectos personales que han sido
              de gran ayuda para desarrollar habilidades de diseño y creación.
               A continuación muestro los trabajos mas completos que he
               realizado hasta el momento.</p>
          </div>
          <div class="project text-justify card-body">
            <router-link to="#" class="nav-link">
              <img src="/static/img/callregister01.png" class="imgcard">
            </router-link>
            <h3>CallRegister</h3>
            <p>Plantilla de registro de llamadas para mesa de ayuda.</p>
          </div>
          <div class="project text-justify card-body">
            <router-link to="#" class="nav-link">
              <img src="/static/img/paces01.png" class="imgcard">
            </router-link>
            <h3>Lugares</h3>
            <p>Aplicación Web para publicitar sitios de comidas rapidas,
              restaurantes, bares y todo tipo de lugares comerciales.</p>
          </div>
          <div class="project text-justify card-body">
            <router-link to="#" class="nav-link">
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
/*  box-shadow: 0px 8px 5px 0px rgba(77,77,77,1);*/
  border-radius: 10px;
  width: 45%;
  height: 440px;
  margin: 25px;
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
  width: 450px;
  height: 300px;
}
</style>
