<template lang="html">
  <div class="container handcont">
    <div class="row">
      <div class="col-sm-7 handmain fadeIn">
        <h1>Jonathan Simanca Mora
          <br>
          Desarrollador Full Stack Javascript.</h1>
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
        </div>
      </div>
      <div class="col-sm-5 handmain fadeIn">
        <img src="/static/img/logotatan.png" id="logo">
      </div>
      <div class="conthex">
        <div class="hex1" v-on:mouseover="mouseOver">M</div>
        <div class="hex2" v-on:mouseover="mouseOver">N</div>
        <div class="hex3" v-on:mouseover="mouseOver">E</div>
        <div class="hex4" v-on:mouseover="mouseOver">V</div>
        <div id="marc" class="Text text-justify">
          <h3>Conocimientos</h3>
          <div id="mongo" class="hidecont">
            <p class="codti01">MongoDB</p>
            <p><span class="sp01">Descripción: </span>Me gusta trabajar principalmente
               con Mongo, me parece una base de datos no relacional muy eficiente,
                 pero también puedo adaptar proyectos con MySQL o Firebase, según
                  la necesidad.</p>
            <p><span class="sp01">Habilidades: </span>SQL, JSON + Diseño de DB</p>
          </div>
          <div id="nodejs" class="hidecont">
            <p class="codti02">Node.js</p>
            <p><span class="sp02">Descripción: </span>Me gusta trabajar principalmente
               con Mongo, me parece una base de datos no relacional muy eficiente,
                 pero también puedo adaptar proyectos con MySQL o Firebase, según
                  la necesidad.</p>
            <p><span class="sp02">Habilidades: </span>Javascript, npm</p>
          </div>
          <div id="express" class="hidecont">
            <p class="codti03">Express</p>
            <p><span class="sp03">Descripción: </span>Me gusta trabajar principalmente
               con Mongo, me parece una base de datos no relacional muy eficiente,
                 pero también puedo adaptar proyectos con MySQL o Firebase, según
                  la necesidad.</p>
            <p><span class="sp03">Habilidades: </span>Javascript, npm</p>
          </div>
          <div id="vuejs" class="hidecont">
            <p class="codti04">Vue.js</p>
            <p><span class="sp04">Descripción: </span>Me gusta trabajar principalmente
               con Mongo, me parece una base de datos no relacional muy eficiente,
                 pero también puedo adaptar proyectos con MySQL o Firebase, según
                  la necesidad.</p>
            <p><span class="sp04">Habilidades: </span>Javascript, npm</p>
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
  methods:{
  mouseOver: function(id){

    var elementA, elementB, elementC, elementD;

    elementA = document.getElementById('mongo');
    elementB = document.getElementById('nodejs');
    elementC = document.getElementById('express');
    elementD = document.getElementById('vuejs');

    if(id.target.className == "hex1"){
      elementA.className = "contbox fadeIn delay-1";
      elementB.className = "hidecont";
      elementC.className = "hidecont";
      elementD.className = "hidecont";
    }else if(id.target.className == "hex2"){
      elementA.className = "hidecont";
      elementB.className = "contbox fadeIn delay-1";
      elementC.className = "hidecont";
      elementD.className = "hidecont";
    }else if(id.target.className == "hex3"){
      elementA.className = "hidecont";
      elementB.className = "hidecont";
      elementC.className = "contbox fadeIn delay-1";
      elementD.className = "hidecont";
    }else if (id.target.className == "hex4") {
      elementA.className = "hidecont";
      elementB.className = "hidecont";
      elementC.className = "hidecont";
      elementD.className = "contbox fadeIn delay-1";
    }
    }
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
  padding-right: 5%;
  overflow-x: auto;
  overflow:hidden;
}


.conthex{
  margin-top: 60px;
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
/*hooooo*/
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

/*hooooo*/
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

/*hooooo*/
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
</style>
