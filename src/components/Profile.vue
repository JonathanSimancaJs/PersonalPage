<template lang="html">
  <div>
    <Navbar/>
      <h1 class="profile">
        ¿QUIEN
        <br>
        SOY?
      </h1>
        <p class="profdes">Costeño viviendo en bogota hace mas de 10 años. Aunque amo mi tienrra natal tambien me he encariñado con Bogotá.</p>
      <img src="/static/img/IMG_20180317_140700.jpg" class="avatar">
      <div class="container text-justify cont2 handcont">
        <div class="row">
            <div class="col-sm-5">
              <h4>Perfil profesional</h4>
              <p>Técnico en sistemas del SENA con experiencia en soporte técnico en sitio, telefónico y servicios remotos. Tengo experiencia como independiente en mantenimiento y reparación de equipos. En algunas empresas he desarrollado actividades de servicio al cliente, por lo cual tengo buen manejo de cliente y atención al usuario. Soy una persona abierta, responsable, activa, con buen manejo de todo tipo de situaciones, con gran sentido de pertenencia y gusto de trabajar en equipo.</p>
            </div>
            <div class="col-sm-5">
              Ottra cosa
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
.avatar{
  transform: translate(120px,80px);
  width: 952px;
  height: 635px;
  z-index: 2;
  border-radius: 5px;
}
.profile{
  position: absolute;
  transform: translate(400px,200px);
  z-index: 1;
  font-size: 80px;
  color: #ffff;
  background: rgba(22, 130, 237, 0.5);
}
.profdes{
  width: 400px;
  position: absolute;
  transform: translate(400px,400px);
  z-index: 1;
  background: #A5A5A5;
  padding: 10px;
  border-radius: 5px;
}
.cont2{
margin-top: 85px;
}

</style>
