import Vue from "vue";
import { MLInstaller, MLCreate, MLanguage } from "vue-multilanguage";
 
Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: 'En',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('En').create({
      name: 'Andrii Romanov',
      basement: 'Odesa, Ukraine',
      title: 'Hello!',
      msg: 'You have friends and likes',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      back: 'Back',
    }),
 
    new MLanguage('Укр').create({
      name: 'Андрій Романов',
      basement: 'Одеса, Україна',
      title: 'Oi!',
      msg: 'Você tem amigos e curtidas',
      about: 'Про мене',
      skills: 'Навички',
      projects: 'Проекти',
      back: 'Назад',

    })
  ]
})