import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Profile from '@/components/Profile'
import Work from '@/components/Work'
import Post from '@/components/Post'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
