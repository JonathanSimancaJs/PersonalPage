<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container pcont">
      <div class="row">
        <div class="col-sm-6">
          <div class="card-body">
            <h3>Inf. Contactto</h3>
            <br>
            <label>Celular: 3202696672</label>
            <br>
            <label>Correo: jonathan.simanca@outlook.com</label>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <h3>Redes Sociales</h3>
            <ul class="redes text-justify">
              <a href="https://www.linkedin.com/in/jonathinsm/" target="_blank">
                <li>
                  <img src="/static/img/linkedin.png">
                  <b>Linkedin</b>
                </li>
              </a>
              <a href="https://www.facebook.com/jonathinsm" target="_blank">
                <li>
                  <img src="/static/img/facebook.png">
                  <b>Facebook</b>
                </li>
              </a>
              <a href="https://www.instagram.com/jonathinsm" target="_blank">
                <li>
                  <img src="/static/img/instagram.png">
                  <b>Istagram</b>
                </li>
              </a>
              <a href="https://twitter.com/Jonathinsm" target="_blank">
                <li>
                  <img src="/static/img/twitter.png">
                  <b>Twitter</b>
                </li>
              </a>
              <a href="https://github.com/JonathanSimancaJs" target="_blank">
                <li>
                  <img src="/static/img/github-signo.png">
                  <b>GitHub</b>
                </li>
              </a>
            </ul>
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
  }
}
</script>

<style lang="css">
.pcont{
  background: #ffff;
  margin-top: 20px;
}
.redes{
  list-style: none;
}
.redes li {
  padding: 10px;
}
.redes a:hover{
  text-decoration: none;
}
.redes a{
  text-decoration: none;
}
</style>
