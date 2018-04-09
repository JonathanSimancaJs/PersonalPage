<template lang="html">
  <div>
    <Navbar/>
    <div v-for="blog in blogs">
      <div v-if="blog['.key'] == $route.params.id">
        <div class="container">
          <div class="blogcontexp col-sm-12 fadeIn">
            <div class="imgblogexp">
              <img v-bind:src="blog.image">
            </div>
            <div class="blogbody">
              <div class="authorexp">
                <img src="https://c.disquscdn.com/uploads/users/13602/2678/avatar92.jpg?1523074710"/>
                <h2><b>Jonathin</b></h2>
              </div>
              <div class="separator"></div>
              <div class="blogparagraphexp" id="contblog">
              </div>
              <div class="comments">
                 <VueDisqus shortname="deployblog"></VueDisqus>
               </div>
            </div>
            <div class="botexp">
              <h6 id="date">{{ blog.date }}</h6>
              <h1>{{ blog.title }}</h1>
              <ul>
                <li><router-link :to="{ name: 'post' }">
                  <i class="fa fa-arrow-circle-left fa-2x"></i>
                </router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import {db} from '../../firebase';
let blogsRef = db.ref('blogs');
export default {
  mounted(){
    var blogs = this.blogs;
    blogs = blogs.filter(blog => {
      return blog['.key'] === this.$route.params.id;
    })
    document.getElementById('contblog').innerHTML=blogs[0].content;
  },
  components: {
    Navbar,
    Footer,
    VueDisqus
  },
  firebase: {
    blogs: blogsRef
  },
  methods:{
    getparra:function(p){
    }
  }
}
</script>

<style lang="css">
.blogcontexp{
  background: #fff;
  text-align: justify;
  margin-top: 100px;
  height: auto;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.imgblogexp img{
  width: 60%;
  height: 400px;
  position: absolute;
  top: -30px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
}
.blogbody{
  padding-top: 400px;
  width: 100%;
}
.blogbody h1 {
  text-align: left;
  padding-top: 10px;
  font-size: 1.5rem;
}
.blogparagraphexp{
  padding-top: 10px;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 10px;
  overflow: hidden;
}
.authorexp{
  margin-left: 20%;
  background-color : #333;
	height : 30px;
	width : 110px;
	border-radius : 20px;
}
.authorexp h2 {
  padding-top : 8px;
	margin-right : 10px;
	text-align : right;
	font-size : 0.8rem;
	color :#fff;
}
.authorexp img {
  padding-top: 5px;
  margin-left: 10px;
  float: left;
  height: 25px;
  width: 25px;
  border-radius: 30%;
}
.botexp{
  position: absolute;
  top: 50px;
  left: 65%;
}
.botexp ul{
  position: relative;
  top: 20px;
}
.botexp li{
  display: inline;
  list-style: none;
}
.botexp h6{
  font-size: 2rem;
  color: #C3C3C3;
}
</style>
