<template lang="html">
  <div class="container handcont">
    <div class="row">
      <div class="col-sm-5 handmain">
        <img src="/static/img/logotatan.png" id="logo">
      </div>
      <div class="col-sm-7 handmain">
        <h1>Jonathan Simanca Desarrollador Full Stack Javascript.</h1>
        <div class="header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mx-auto order-0">
                <li class="nav-item">
                  <router-link to="/profile" class="nav-link">
                    <img src="/static/img/profile.png">
                    <br>
                    Perfil
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/work" class="nav-link">
                    <img src="/static/img/work.png">
                    <br>
                    Mi trabajo
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">
                    <img src="/static/img/contact.png">
                    <br>
                    Contacto
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  components: {
    Footer
  }
}
</script>

<style lang="css">
#logo{
  width: 413px;
  height: 413px;
  border-radius: 5px;
  display: flex;
}
.header{
  padding-top: 60px;
}
.handcont{
  background-color: #fff;
  border-radius: 5px;
}
.handmain{
  padding: 10px;
  overflow-x: auto;
  overflow:hidden;
}
</style>
