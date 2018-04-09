import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Profile from '@/components/Profile'
import Work from '@/components/Work'
import Post from '@/components/Post'
import Contact from '@/components/Contact'
import CallRegister from '@/components/projects/callregister'
import Places from '@/components/projects/places'
import TicketIt from '@/components/projects/ticketsit'
import Createblog from '@/components/blog/Createblog'
import Blog from '@/components/blog/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/callregister',
      name: 'callregister',
      component: CallRegister
    },
    {
      path: '/places',
      name: 'places',
      component: Places
    },
    {
      path: '/ticketit',
      name: 'ticketit',
      component: TicketIt
    },
    {
      path: '/cmpb',
      name: 'createblog',
      component: Createblog
    },
    {
      path: '/blog:id',
      name: 'blog',
      component: Blog
    }
  ]
})
