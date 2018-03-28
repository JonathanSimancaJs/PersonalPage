<template lang="html">
  <div class="container handcont">
    <div class="row">
      <div class="col-sm-5 handmain fadeIn delay-1">
        <img src="/static/img/logotatan.png" id="logo">
      </div>
      <div class="col-sm-7 handmain fadeIn">
        <h1>Jonathan Simanca Desarrollador Full Stack Javascript.</h1>
        <div class="header">

          <div class="socials">
            <div id="hexagon">
              <router-link to="/profile"><i class="fa fa-user"></i></router-link>
            </div>
            <div id="hexagon">
              <router-link to="/work"><i class="fa fa-briefcase"></i></router-link>
            </div>
            <div id="hexagon">
              <router-link to="/contact"><i class="fa fa-envelope"></i></router-link>
            </div>
            </div>
            <br>
            <br>
            <br>
          <!--
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
          </nav> -->

        </div>
        <Footer/>
      </div>
      <div class="conthex">
        <div class="hex1"></div>
        <div class="hex2"></div>
        <div class="hex3"></div>
        <div class="hex4"></div>
        <div class="Text text-justify">
          <h3>Habilidades</h3>
          <div class="descbox">
            <h1>MongoDB</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                   esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="descbox">
            <h1>MongoDB</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                   esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa
                     qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
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
  padding-top: 30px;
}
.handcont{
  border-radius: 5px;
}
.handmain{
  padding: 10px;
  overflow-x: auto;
  overflow:hidden;
}


.conthex{
  margin-top: 80px;
  margin-left: 20%;
  width: 800px;
  height: 450px;
  border: 1px solid;
}
.hex1{
  background: red;
  height: 100px;
  width: 173.2px;
  position: relative;
  z-index: 1;
}
.hex1::after,
.hex1::before{
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  border-left: 86.6px solid transparent;
  border-right: 86.6px solid transparent;
}
.hex1::after{
  bottom: -100px;
  border-top: 50px solid red;
  border-bottom: 50px solid transparent;
}
.hex1::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid red;
}
/*hooooo*/
.hex2{
  margin-top: 60px;
  margin-left: 95px;
  background: red;
  height: 100px;
  width: 173.2px;
  position: relative;
  z-index: 1;
}
.hex2::after,
.hex2::before{
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  border-left: 86.6px solid transparent;
  border-right: 86.6px solid transparent;
}
.hex2::after{
  bottom: -100px;
  border-top: 50px solid red;
  border-bottom: 50px solid transparent;
}
.hex2::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid red;
}

/*hooooo*/
.hex3{
  margin-top: -100px;
  margin-left: -95px;
  background: red;
  height: 100px;
  width: 173.2px;
  position: relative;
  z-index: 1;
}
.hex3::after,
.hex3::before{
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  border-left: 86.6px solid transparent;
  border-right: 86.6px solid transparent;
}
.hex3::after{
  bottom: -100px;
  border-top: 50px solid red;
  border-bottom: 50px solid transparent;
}
.hex3::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid red;
}

/*hooooo*/
.hex4{
  margin-top: 60px;
  margin-left: 0px;
  background: red;
  height: 100px;
  width: 173.2px;
  position: relative;
  z-index: 1;
}
.hex4::after,
.hex4::before{
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  border-left: 86.6px solid transparent;
  border-right: 86.6px solid transparent;
}
.hex4::after{
  bottom: -100px;
  border-top: 50px solid red;
  border-bottom: 50px solid transparent;
}
.hex4::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid red;
}

.Text{
  margin-top: -350px;
  padding-left: 300px;
  padding-right: 20px;
}

.hex1:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
.hex2:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
.hex3:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
.hex4:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
.descbox{
  display:none;
}
.descboxtrue{

}
</style>
