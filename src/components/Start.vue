<template lang="html">
  <div class="container handcont">
    <div class="row">
      <div class="col-sm-7 handmain fadeIn">
        <h1 class="myname">Jonathan Simanca</h1>
        <div>
          <div id="home-news">
            <div class="home_header">
              <strong>Desarrollador</strong>
              <span>Backend</span>
            </div>
            <div class="home_header">
              <strong>Full Stack</strong>
              <span>Javascript</span>
            </div>
            <div class="home_header">
              <span>Analizo. Diseño.</span>
              <strong>Construyo</strong>
            </div>
          </div>
        </div>
        <div class="header">
          <div class="navbuttons">
            <div id="hexagon">
              <router-link to="/profile"><i class="fa fa-user" title="Perfil"></i></router-link>
            </div>
            <div id="hexagon">
              <router-link to="/work"><i class="fa fa-briefcase" title="Proyectos"></i></router-link>
            </div>
            <div id="hexagon">
              <router-link to="/contact"><i class="fa fa-phone-square" title="Contactame"></i></router-link>
            </div>
            </div>
        </div>
      </div>
      <div class="col-sm-5 handmain fadeIn">
        <img src="/static/img/logotatan.png" id="logo">
      </div>
      <div class="conthex">
        <div class="hex1 fadeIn coming01" v-on:mouseover="mouseOver">M</div>
        <div class="hex2 fadeIn coming04" v-on:mouseover="mouseOver">N</div>
        <div class="hex3 fadeIn coming02" v-on:mouseover="mouseOver">E</div>
        <div class="hex4 fadeIn coming03" v-on:mouseover="mouseOver">V</div>
        <div id="marc" class="Text text-justify fadeIn">
          <h3>Conocimientos</h3>
          <div id="mark" class="fadeIn">
            <br>
            <p class="sp01">Pasa el cursor</p>
            <ul>
              <i><img src="/static/img/handleft.png"></i>
            </ul>
          </div>
          <div id="mongo" class="hidecont">
            <p class="codti01">MongoDB</p>
            <p><span class="sp01">Descripción: </span>Me gusta trabajar principalmente
               con Mongo, me parece una base de datos no relacional muy eficiente,
                 pero también puedo adaptar proyectos con MySQL o Firebase, según
                  la necesidad.</p>
            <p><span class="sp01">Habilidades: </span>SQL, JSON + Modelación DB</p>
          </div>
          <div id="nodejs" class="hidecont">
            <p class="codti02">Node.js</p>
            <p><span class="sp02">Descripción: </span>Principalmente Node fue lo que
               me impulso a ser desarrollador Javascript, el veloz al momento de
               interpretar código, ofrece grandes ventajas mediante la programación
                asíncrona y esta soportado por una gran comunidad, permitiendo así
                 encontrar gran documentación y recursos que te ayudan a resolver problemas de forma ágil.</p>
            <p><span class="sp02">Habilidades: </span>Javascript, npm</p>
          </div>
          <div id="express" class="hidecont">
            <p class="codti03">Express</p>
            <p><span class="sp03">Descripción: </span>Es como un framework minimalista, pero a cambio de eso
               prefiero considerarlo como una librería que te permite agilizar el tiempo de desarrollo
                implementando un estándar al momento de estructurar un proyecto.</p>
            <p><span class="sp03">Habilidades: </span>Ariquitectura de aplicación, MVC</p>
          </div>
          <div id="vuejs" class="hidecont">
            <p class="codti04">Vue.js</p>
            <p><span class="sp04">Descripción: </span>Es un framework sencillo y fácil de interpretar,
               me permite usar los comceptos que ya conozco de desarrollo Frontend y aplicarlo sin tanto enrredo,
                aunque también se un poco de React.js, me llevo mejor con Vue, ambos son excelentes
                 para construir aplicaciones web progresivas.</p>
            <p><span class="sp04">Habilidades: </span>HTML5,CSS,Javascript</p>
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
  },
  mounted(){
    this.switchClass(-1);
  },
  methods:{
  mouseOver: function(id){

    var elementA, elementB, elementC, elementD, elementE;

    elementA = document.getElementById('mongo');
    elementB = document.getElementById('nodejs');
    elementC = document.getElementById('express');
    elementD = document.getElementById('vuejs');
    elementE = document.getElementById('mark');

    if(id.target.className == "hex1 fadeIn coming01"){
      elementA.className = "contbox fadeIn delay-1";
      elementB.className = "hidecont";
      elementC.className = "hidecont";
      elementD.className = "hidecont";
      elementE.className = "hidecont";
    }else if(id.target.className == "hex2 fadeIn coming04"){
      elementA.className = "hidecont";
      elementB.className = "contbox fadeIn delay-1";
      elementC.className = "hidecont";
      elementD.className = "hidecont";
      elementE.className = "hidecont";
    }else if(id.target.className == "hex3 fadeIn coming02"){
      elementA.className = "hidecont";
      elementB.className = "hidecont";
      elementC.className = "contbox fadeIn delay-1";
      elementD.className = "hidecont";
      elementE.className = "hidecont";
    }else if (id.target.className == "hex4 fadeIn coming03") {
      elementA.className = "hidecont";
      elementB.className = "hidecont";
      elementC.className = "hidecont";
      elementD.className = "contbox fadeIn delay-1";
      elementE.className = "hidecont";
    }
  },
  switchClass(i){
    let t = setInterval(() => {
        if (document.readyState === 'complete') {
            // run after page has finished loadin
            var lis = $('#home-news > div');
            lis.eq(i).removeClass('home_header_on');
            lis.eq(i).removeClass('home_header_out');
             lis.eq(i = ++i % lis.length).addClass('home_header_on');
             lis.eq(i = ++i % lis.length).addClass('home_header_out');
        }
    }, 3500)
  }
  }
}
</script>

<style lang="css">

/*Header Style*/
.myname{
  font-size: 3rem;
  color: #131313;
  letter-spacing: .10em;
  text-rendering: optimizeLegibility;
  text-shadow: 0px 1px 0px rgba(150, 150, 150, 1);
}
#logo{
  width: 300px;
  height: 300px;
  border-radius: 5px;
  display: flex;
}
.header{
  padding-top: 0px;
}
.handcont{
  border-radius: 5px;
}
.handmain{
  padding-right: 5%;
  overflow-x: auto;
  overflow:hidden;
}

/*Fadein animation*/
.coming01{
  animation-delay: 0.2s;
}
.coming02{
  animation-delay: 0.4s;
}
.coming03{
  animation-delay: 0.6s;
}
.coming04{
  animation-delay: 0.8s;
}

/*Styles of hexagons*/
.conthex{
  margin-top: 40px;
  margin-left: 15%;
  width: 900px;
  height: 450px;
}
.hex1{
  background: #333333;
  font-size: 3.0rem;
  color: #fff;
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
  border-top: 50px solid #333333;
  border-bottom: 50px solid transparent;
}
.hex1::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid #333333;
}

.hex2{
  margin-top: 60px;
  margin-left: 95px;
  background: #8cc84b;
  font-size: 3.0rem;
  color: #fff;
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
  border-top: 50px solid #8cc84b;
  border-bottom: 50px solid transparent;
}
.hex2::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid #8cc84b;
}


.hex3{
  margin-top: -100px;
  margin-left: -95px;
  background: #b3b3b3;
  font-size: 3.0rem;
  color: #fff;
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
  border-top: 50px solid #b3b3b3;
  border-bottom: 50px solid transparent;
}
.hex3::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid #b3b3b3;
}
.hex4{
  margin-top: 60px;
  margin-left: 0px;
  background: #16A085;
  font-size: 3.0rem;
  color: #fff;
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
  border-top: 50px solid #16A085;
  border-bottom: 50px solid transparent;
}
.hex4::before{
  top: -100px;
  border-top: 50px solid transparent;
  border-bottom: 50px solid #16A085;
}

/*Hexango text styles and efects*/
.Text{
  margin-top: -350px;
  padding-left: 400px;
  padding-right: 20px;
}

.Text h3{
  font-size: 3.0rem;
  color: #333;
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
.hidecont{
  display:none;
}
.contbox{
  border-left: 2px solid #dedede;
  padding-left: 5px;
}
.codti01{
  font-size: 6rem;
  color: #333333;

}
.sp01{
  color: #333333;
}
.codti02{
  font-size: 6rem;
  color: #8cc84b;

}
.sp02{
  color: #8cc84b;
}
.codti03{
  font-size: 6rem;
  color: #b3b3b3;

}
.sp03{
  color: #b3b3b3;
}
.codti04{
  font-size: 6rem;
  color: #16A085;

}
.sp04{
  color: #16A085;
}

.page{
  margin:0 auto;
  padding-top:20em;
  width: 800px;
}
.page{
  margin:0 auto;
  padding-top:20em;
  width: 800px;
}

/*Styles of animated text*/
#home-news{
  font-size: 30px;
	text-align:center;
	color:#464646;
	height: 45px;
	line-height: 45px;
	overflow:hidden;
	position:relative;
}.home_header {
	position:absolute;
	width:100%;
	z-index:99;
	color:#333;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.home_header_on {
	z-index:100;
}.home_header strong {
	color: #b3b3b3;
}.home_header span, .home_header strong {
	position:relative;
	top:-50px;
}.home_header_on *:nth-child(1) {
	 top: 0;
	-webkit-transition: top .6s ease-in-out;
	-moz-transition: top .6s ease-in-out;
	 transition: top .6s ease-in-out;
}.home_header_on *:nth-child(2) {
	top: 0;
	-webkit-transition: top .6s ease-in-out .15s;
	-moz-transition: top .6s ease-in-out .15s;
	transition: top .6s ease-in-out .15s;
}.home_header_on *:nth-child(3) {
	top: 0;
	-webkit-transition: top .6s ease-in-out .3s;
	-moz-transition: top .6s ease-in-out .3s;
	transition: top .6s ease-in-out .3s;
}.home_header_out *:nth-child(1) {
	top: 50px;
	-webkit-transition: top .6s ease-in-out;
	-webkit-transition: top .6s ease-in-out;
	-moz-transition: top .6s ease-in-out;
}.home_header_out *:nth-child(2) {
	top: 50px;
	-webkit-transition: top .6s ease-in-out .15s;
	-moz-transition: top .6s ease-in-out .15s;
	transition: top .6s ease-in-out .15s;
}.home_header_out *:nth-child(3) {
	top: 50px;
	-webkit-transition: top .6s ease-in-out .3s;
	-moz-transition: top .6s ease-in-out .3s;
	transition: top .6s ease-in-out .3s;
}
</style>
