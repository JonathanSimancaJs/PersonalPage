<template lang="html">
  <div class="">
    <Navbar/>
      <div class="container text-justify pbox">
        <div class="">
          <h1>CallRegister</h1>
        </div>
        <div class="row">
          <div class="col-sm-6 paragraph">
            <p>Es la aplicación web más reciente que he desarrollado. En mi último empleo
               había estado trabajando con una mesa de ayuda, brindando soporte técnico y
               registrando solicitudes de servicio. El sistema que usábamos para la gestión
                no nos permitía validar de manera fácil la cantidad casos que habíamos
                gestionado, adicionalmente usábamos plantillas en Word o Excel para registrar
                 los datos de una llamada. Entonces decidí crear esta aplicación para usarla
                  con mis compañeros de trabajo, mediante el uso de un formulario web podíamos
                   registrar los datos de la llamada y del caso de manera más eficiente, permitía
                    guardar en un histórico el cual podíamos consultar fácilmente para ver
                    qué cantidad de casos habíamos creado.</p>
          </div>
          <div class="col-sm-4 text-left detaillist">
            <ul>
              <li><b>Técnologias:</b> MySql, PHP, Html.</li>
              <li><b>Año:</b> 2017</li>
              <li><b>Repositorio GitHub:</b><a href="https://github.com/JonathanSimancaJs/CoursePHP/tree/master/Medivhtest" target="_blank">
                https://github.com/JonathanSimancaJs/CoursePHP/tree/master/Medivhtest</a></li>
            </ul>
          </div>
        </div>
        <div class="galery">
          <img src="/static/img/ticket01.png">
          <img src="/static/img/ticket02.png">
          <img src="/static/img/ticket03.png">
          <img src="/static/img/ticket04.png">
          <img src="/static/img/ticket05.png">
          <img src="/static/img/ticket06.png">
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
.galery img{
  padding-top: 20px;
  width: 90%;
  box-shadow: -1px 18px 40px -16px rgba(0,0,0,0.75);
}
</style>
