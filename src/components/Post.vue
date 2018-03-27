<template lang="html">
  <div class="">
    <Navbar/>
      <div class="cardui fadeIn">
        <div class="thumbnail">
          <img class="left" src="/static/img/code-2558220_1920.jpg">
        </div>
        <div class="right">
          <h1>Javascript esta de moda!</h1>
          <div class="author">
            <img src="https://randomuser.me/api/portraits/men/95.jpg"/>
            <h2><b>Jonathin</b></h2>
          </div>
          <div class="separator"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                   anim id est laborum.</p>
        </div>
        <div class="bot">
          <h5>12</h5>
          <h6>JANUARY</h6>
          <ul>
            <li><i class="fa fa-eye fa-2x"></i></li>
            <li><i class="fa fa-heart-o fa-2x"></i></li>
            <li><i class="fa fa-share-alt fa-2x"></i></li>
          </ul>
          <div class="fab">
            <i class="fa fa-arrow-down fa-3x"></i>
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
.cardui{
  position : relative;
	height: 450px;
	width: 900px;
	margin : 100px auto;
	background-color : #FFF;
	-webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.thumbnail{
  float : left;
	position : relative;
	left : 30px;
	top : -30px;
	height : 320px;
	width : 530px;
	-webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
	overflow: hidden;
}
img.left{
  position: absolute;
  left: 50%;
  top: 50%;
  height: auto;
  width: 100%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.right{
  margin-left : 590px;
	margin-right : 20px;
}
.right h1{
  padding-top: 15px;
  font-size: 1.3rem;
  color: #4B4B4B;
}
.author{
  background-color : #9ECAFF;
	height : 30px;
	width : 110px;
	border-radius : 20px;
}
.author>img{
  padding-top: 5px;
  margin-left: 10px;
  float: left;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.separator{
  margin-top : 10px;
	border : 1px solid #C3C3C3;
}
.author h2{
  padding-top : 8px;
	margin-right : 6px;
	text-align : right;
	font-size : 0.8rem;
	color :#000;
}
.right p{
  text-align: justify;
  padding-top: 10px;
  font-size: 0.95rem;
  line-height: 150%;
  color: #4B4B4B;
}
.bot h5{
  position: absolute;
  top: 300px;
  left: 30px;
  bottom: -120px;
  font-size: 6rem;
  color: #C3C3C3;
}
.bot h6{
  position: absolute;
  top: 390px;
  left: 30px;
  bottom: -55px;
  font-size: 2rem;
  color: #C3C3C3;
}
.bot ul{
  position: absolute;
  top: 350px;
  left: 300px;
}
.bot li{
  display: inline;
  list-style: none;
  padding-right: 40px;
  color: #7B7B7B;
}
.fab {
  position: absolute;
  right: 50px;
  bottom: -40px;
  box-sizing: border-box;
  padding-top: 18px;
  background-color: #1875D0;
  width: 80px;
  height: 80px;
  color: white;
  text-align: center;
  border-radius: 50%;
  -webkit-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);
}
</style>
