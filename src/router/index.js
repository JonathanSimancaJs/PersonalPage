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
import Showblog from '@/components/blog/Showblog'

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
    },
    {
      path: '/callregister',
      name: 'CallRegister',
      component: CallRegister
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '/ticketit',
      name: 'TicketIt',
      component: TicketIt
    },
    {
      path: '/createblog',
      name: 'Createblog',
      component: Createblog
    },
    {
      path: '/showblog:id',
      name: 'Showblog',
      component: Showblog
    }
  ]
})
