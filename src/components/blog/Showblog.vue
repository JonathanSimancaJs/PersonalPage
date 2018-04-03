<template lang="html">
  <div>
    <Navbar/>
    <div class="container">
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
          <div class="fabiconarrow">
            <router-link to=""><i id="fa" class="fa fa-plus-circle"></i></router-link>
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
  <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="css">
</style>
