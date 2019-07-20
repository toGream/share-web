import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import PersonLog from '@/pages/personLog'
import Message from '@/pages/message'
import Picture from '@/pages/picture'
import Technology from '@/pages/technology'
import Topic from '@/pages/topic'
import AboutMe from '@/pages/aboutMe'
import Vedio from '@/pages/vedio'
import articleDetail from '@/pages/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personLog',
      name: 'personLog',
      component: PersonLog
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/vedio',
      name: 'vedio',
      component: Vedio
    },
    {
      path: '/articleDetail',//path: '/articleDetail/:id',
      name: '/articleDetail',
      component: articleDetail
    }
  ]
})
