<template lang="html">
  <div>
    <Navbar/>
    <div class="container">
      <div class="card blogbodcont">
        <div class="" v-if="blogs.filter(blog => {return blog}).length === 0">
          <div class="alert alert-warning blogalert">
            No hay blogs en esta categoria.
          </div>
        </div>
        <div v-for="blog in blogs" v-else>
          <div class="blogcont col-sm-8 fadeIn">
            <div class="imgblog">
              <img v-bind:src="blog.image">
            </div>
            <div class="blogright">
              <h1>{{ blog.title }}</h1>
              <div class="author">
                <img src="https://c.disquscdn.com/uploads/users/13602/2678/avatar92.jpg?1523074710"/>
                <h2><b>Jonathin</b></h2>
              </div>
              <div class="separator"></div>
              <div class="blogparagraph">
                <p>
                  {{ blog.content }}
                </p>
              </div>
              <div class="fabiconbutton">
                <router-link :to="{ name: 'blog', params: {id: blog['.key'] } }"><i class="fa fa-plus-circle"></i></router-link>
              </div>
            </div>
            <div class="bot">
              <h6>{{ blog.date }}</h6>
            </div>
          </div>
        </div>
        <div class="blogcat col-sm-2  fadeIn delay-1">
          <h1>Categorias:</h1>
          <ul>
            <li><a href="#" v-on:click="todos">
              Todos {{conts.filter(blog => {return blog}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterActu(blogs)">
              Actualidad {{conts.filter(blog => {return blog.category==='Actualidad'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterApli(blogs)">
              Aplicaciones {{conts.filter(blog => {return blog.category==='Aplicaciones'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterHard()">
              Hardware {{conts.filter(blog => {return blog.category==='Hardware'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterJueg(blogs)">
              Juegos {{conts.filter(blog => {return blog.category==='Juegos'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterPelis(blogs)">
              Películas {{conts.filter(blog => {return blog.category==='Películas'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterProg()">
              Programación {{conts.filter(blog => {return blog.category==='Programación'}).length}}
            </a></li>
            <li><a href="#" v-on:click="filterSeri(blogs)">
              Series {{conts.filter(blog => {return blog.category==='Series'}).length}}
            </a></li>
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
let blogsCont = db.ref('blogs');

export default {
  components: {
    Navbar,
    Footer
  },
  firebase: {
    blogs: blogsRef,
    conts: blogsCont
  },
  methods:{
    filterActu(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Actualidad';
      })
      this.blogs=blogs;
    },
    filterApli(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Aplicaciones';
      })
      this.blogs=blogs;
    },
    filterHard(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Hardware';
      })
      this.blogs=blogs;
    },
    filterJueg(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Juegos';
      })
      this.blogs=blogs;
    },
    filterPelis(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Películas';
      })
      this.blogs=blogs;
    },
    filterProg(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Programación';
      })
      this.blogs=blogs;
    },
    filterSeri(){
      var blogs = this.conts;
      blogs = blogs.filter(blog => {
        return blog.category==='Series';
      })
      this.blogs=blogs;
    },
    todos(){
      this.blogs=this.conts
    }
  }
}
</script>

<style lang="css">
.blogalert{
  width: 70%;
}
.blogbodcont{
  margin-top: 50px;
  background: transparent;
  border: 0px;
}
.blogcat{
  text-align: justify;
  background: #fff;
  margin-top: 100px;
  margin-left: 800px;
  position: fixed;
  padding-left: 20px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  z-index: 1;
}
.blogcat ul{
  list-style: none;
}
.blogcont{
  text-align: justify;
  background: #fff;
  margin-top: 40px;
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
  padding-right: 10px;
  height: 180px;
  overflow: hidden;
}
.bot{
  position: absolute;
  top: 260px;
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
