<template lang="html">
  <div>
    <Navbar/>
    <div v-for="blog in blogs">
      <div v-if="blog.date == $route.params.id">
        <div class="container">
          <div class="blogcontexp col-sm-12">
            <div class="imgblogexp">
              <img v-bind:src="blog.image">
            </div>
            <div class="blogbody">
              <h1>{{ blog.title }}</h1>
              <div class="author">
                <img src="https://randomuser.me/api/portraits/men/95.jpg"/>
                <h2><b>Jonathin</b></h2>
              </div>
              <div class="separator"></div>
              <div class="blogparagraphexp">
                <p>
                  {{ blog.content }}
                </p>
              </div>
            </div>
            <div class="botexp">
              <h6>{{ blog.date }}</h6>
              <ul>
                <li><router-link :to="{ name: 'post' }">
                  <i class="fa fa-arrow-circle-left fa-2x"></i>
                </router-link></li>
                <li><i class="fa fa-eye fa-2x"></i>  {{ blog.views }}  </li>
                <li><i class="fa fa-thumbs-o-up fa-2x"></i>  {{ blog.likes }}  </li>
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
import {db} from '../../firebase';
let blogsRef = db.ref('blogs');
export default {
  components: {
    Navbar,
    Footer
  },
  firebase: {
    blogs: blogsRef
  }
}
</script>

<style lang="css">
.blogcontexp{
  text-align: justify;
  margin-top: 100px;
  margin-botexptom: 50px;
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
  text-align: center;
  padding-top: 10px;
  font-size: 1.5rem;
}
.blogparagraphexp{
  padding-top: 10px;
  overflow: hidden;
}
.botexp{
  position: absolute;
  top: 50px;
  left: 70%;
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
