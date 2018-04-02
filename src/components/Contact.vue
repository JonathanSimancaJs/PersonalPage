<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container pcont fadeIn">
      <div class="mycard">
        <div class="containercard">
          <div class="cardbod">
            <div class="front">
              <h1>Jonathan Simanca<span>Desarrollador Full Satack Javascript</span></h1>
              <ul>
                <li>+57-3202696672</li>
                <li>jonathan.simanca@outlook.com</li>
              </ul>
            </div>
            <div class="back">
              <h1>Redes Sociales</h1>
              <div class="row">
                <div class="linkoption col-sm">
                  <a href="https://www.linkedin.com/in/jonathinsm/" target="_blank">
                      <img src="/static/img/linkedin.png">
                      <b>Linkedin</b>
                  </a>
                </div>
                <div class="linkoption col-sm">
                  <a href="https://www.facebook.com/jsmcoder/" target="_blank">
                      <img src="/static/img/facebook.png">
                      <b>Facebook</b>
                  </a>
                </div>
                <div class="linkoption col-sm">
                  <a href="https://www.instagram.com/jonathinsm" target="_blank">
                      <img src="/static/img/instagram.png">
                      <b>Istagram</b>
                  </a>
                </div>
                <div class="linkoption col-sm">
                  <a href="https://twitter.com/Jonathinsm" target="_blank">
                      <img src="/static/img/twitter.png">
                      <b>Twitter</b>
                  </a>
                </div>
                <div class="linkoption col-sm">
                  <a href="https://github.com/JonathanSimancaJs" target="_blank">
                      <img src="/static/img/github-signo.png">
                      <b>GitHub</b>
                  </a>
                </div>
              </div>
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
  }
}
</script>

<style lang="css">
.linkoption{
  padding: 10px;
}
.mycard{
  box-sizing:border-box;
  margin-top: 100px;
  margin-bottom: 200px;
}
.containercard {
  width: 600px;
  height: 340px;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  -webkit-perspective: 1000;
	-moz-perspective: 1000;
	perspective: 1000;
  -moz-transform: perspective(1400px);
	-ms-transform: perspective(1400px);
	-webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective-origin: right;
  -moz-perspective-origin: right;
  perspective-origin: right;
}
.cardbod {
  width: 600px;
  height: 340px;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, .7), 0 17px 17px 0 rgba(0, 0, 0, .5);
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: 100% 0%;
  -moz-transform-origin: 100% 0%;
  -ms-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: .8s ease-in-out;
}

.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.front {
  display:-webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  z-index: 2;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.containercard:hover .cardbod {
  -webkit-transform: rotateY(180deg) translateX(100%);
  -moz-transform: rotateY(180deg) translateX(100%);
  -ms-transform: rotateY(180deg) translateX(100%);
  transform: rotateY(180deg) translateX(100%);
  cursor: pointer;
}
.front ul {
  margin: 0;
  width: 100%;
  list-style: none;
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0 1%;
}
.front ul:after {
  content: '';
  display: table;
  clear: both;
}
.front h1 {
  color: #5A5A5A;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
}
.back h1 {
  color: #5A5A5A;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
}
.front h1 span {
  color: #4E203C;
  display: block;
  font-size: .45em;
  letter-spacing: 3px;
}
.front h1 i {
  font-style: normal;
  text-transform: none;
  font-family: 'Playfair Display', serif;
}
</style>
