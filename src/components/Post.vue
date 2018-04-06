<template lang="html">
  <div>
    <Navbar/>
      <div class="container">
        <div class="card bodyblog">
          <div v-for="blog in blogs">
            <div id="blogcont" class="blogcont col-sm-8">
              <div id="imgblog" class="imgblog">
                <img v-bind:src="blog.image">
              </div>
              <div id="blogright" class="blogright">
                <h1>{{ blog.title }}</h1>
                <div class="author">
                  <img src="https://randomuser.me/api/portraits/men/95.jpg"/>
                  <h2><b>Jonathin</b></h2>
                </div>
                <div class="separator"></div>
                <div class="blogparagraph">
                  <p>
                    {{ blog.content }}
                  </p>
                </div>
                <div class="fabiconbutton">
                  <router-link :to="{ name: 'blog', params: {id: blog.date } }"><i id="fa" class="fa fa-plus-circle"></i></router-link>
                </div>
              </div>
              <div id="bot" class="bot">
                <h6>{{ blog.date }}</h6>
                <ul>
                  <li><i class="fa fa-eye fa-2x"></i>  {{ blog.views }}  </li>
                  <li><i class="fa fa-thumbs-o-up fa-2x"></i>  {{ blog.likes }}  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="blogcat col-sm-2">
            <h1>Categorias:</h1>
            <ul>
              <li>Ultimos</li>
              <li>Hardware</li>
              <li>Programación</li>
              <li>Novedades</li>
            </ul>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import {db} from '../firebase';

let blogsRef = db.ref('blogs');

export default {
  components: {
    Navbar,
    Footer
  },
  firebase: {
    blogs: blogsRef
  },
  methods:{
  }
}
</script>

<style lang="css">
.bodyblog{
  background: transparent;
  border: 0px;
}
.blogcat{
  text-align: justify;
  margin-top: 100px;
  margin-left: 800px;
  position: fixed;
  padding-left: 20px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.blogcat ul{
  list-style: none;
}
.blogcont{
  text-align: justify;
  margin-top: 100px;
  margin-bottom: 50px;
  height: 320px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.imgblog img{
  width: 50%;
  height: 80%;
  position: absolute;
  top: -30px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
}
.blogright{
  width: 45%;
  margin-left: 400px;
}
.blogright h1 {
  text-align: center;
  padding-top: 10px;
  font-size: 1.5rem;
}
.author{
  background-color : #333;
	height : 30px;
	width : 110px;
	border-radius : 20px;
}
.author h2 {
  padding-top : 8px;
	margin-right : 10px;
	text-align : right;
	font-size : 0.8rem;
	color :#fff;
}
.author img {
  padding-top: 5px;
  margin-left: 10px;
  float: left;
  height: 25px;
  width: 25px;
  border-radius: 30%;
}
.separator{
  margin-top: 10px;
  border: 1px solid #3333;
}
.blogparagraph{
  padding-top: 10px;
  height: 180px;
  overflow: hidden;
}
.bot{
  position: absolute;
  top: 260px;
}
.bot ul{
  position: relative;
  top: -45px;
  left: 110%;
}
.bot li{
  display: inline;
  list-style: none;
}
.bot h6{
  font-size: 2rem;
  color: #C3C3C3;
}
.fabiconbutton{
  padding-top: 10px;
  padding-left: 60%;
}
.fa-plus-circle{
  color: #16A085;
  background-color: #fff;
  border-radius: 50%;
  font-size: 80px;
  line-height: 60px;
  text-shadow: 2px 2px 10px black;
}
</style>
