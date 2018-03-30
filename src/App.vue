<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

/*App general Style*/
#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #f6f6f6;
  /*
  background-image: url(/static/img/ricepaper.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;*/
}

/*Animation of elements*/

.fadeIn {
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
    visibility: visible !important;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
.delay-1 {
    animation-delay: 0.3s;
}
.delay-2 {
    animation-delay: 0.6s;
}
@keyframes fadeIn{
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}

/*Style of nav bar*/

.reviews{
  margin-top: 28px;
}

.navbuttons div{
  display: inline-block;
}

.fa.fa-user, .fa.fa-briefcase, .fa.fa-rss-square, .fa.fa-envelope{
  color: white;
  font-size: 50px;
  line-height: 60px;
  text-shadow: 2px 2px 10px black;
}

#hexagon {
	width: 100px;
	height: 60px;
	background: #333333;
	position: relative;
   top: 40px;
   text-align: center;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
}
#hexagon:before {
	content: "";
	position: absolute;
	top: -25px;
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 25px solid #333333;
    -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
#hexagon:after {
	content: "";
	position: absolute;
	bottom: -24px;
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 25px solid #333333;
    -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#hexagon:hover{
  background: #8cc84b;
}

#hexagon:hover:after{
  border-top: 25px solid #8cc84b;
}
#hexagon:hover:before{
  border-bottom: 25px solid #8cc84b;
}
</style>
