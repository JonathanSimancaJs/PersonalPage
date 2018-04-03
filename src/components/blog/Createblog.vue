<template lang="html">
  <div>
    <Navbar/>
      <div class="container">
        <h1>Crear Blog</h1>
        <div class="form-group row">
          <label for="example-date-input" class="col-2 col-form-label">Fecha</label>
          <div class="col-10">
            <input v-model="newBlog.date" class="form-control" type="date" value="19-08-2011" id="example-date-input">
          </div>
        </div>
        <form role="form" v-on:submit.prevent='addblog'>
          <div class="form-group">
            <input v-model="newBlog.title" type="text" class="form-control" placeholder="Titulo Blog">
          </div>
          <div class="form-group">
            <label for="ejemplo_password_1">Contenido</label>
            <textarea v-model="newBlog.content" name="name" rows="8" cols="80"></textarea>
          </div>
          <div class="form-group">
            <input v-model="newBlog.image" type="text" class="form-control" placeholder="Url imagen">
          </div>
          <div class="form-group">
            <label for="exampleSelect1">Categoria</label>
            <select v-model="newBlog.category" class="form-control" id="exampleSelect1">
              <option>Programación</option>
              <option>Hardware</option>
              <option>Peliculas</option>
              <option>Series</option>
              <option>Novedades</option>
            </select>
          </div>
          <button type="submit" class="btn btn-default">Enviar</button>
        </form>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import {db} from '../../firebase';
/*
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAci77L4h-ZrsrHweZp2v2-J5dR0yfkAMU",
  authDomain: "blogpersonal-54764.firebaseapp.com",
  databaseURL: "https://blogpersonal-54764.firebaseio.com",
  projectId: "blogpersonal-54764",
  storageBucket: "blogpersonal-54764.appspot.com",
  messagingSenderId: "406381016916"
};
let app = Firebase.initializeApp(config);
const db = app.database()
*/
let blogsRef = db.ref('blogs');

export default {
  components: {
    Navbar,
    Footer
  },
  firebase: {
    blogs: blogsRef
  },
  data(){
    return{
      newBlog: {
        title:'',
        content:'',
        category:'',
        image:'',
        views:0,
        likes:0,
        date:''
      }
    }
  },
  methods:{
    addblog: function(){
      blogsRef.push(this.newBlog)
    }
  }
}
</script>

<style lang="css">
</style>
