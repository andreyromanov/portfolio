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
      about: 'About',
      skills: 'Skills',
      back: 'Back',
      projects: 'Projects',
      other_skills: 'Other skills',
      other_exp: 'Other Experience',
      very_good: 'Very good',
      good: 'Good',
      okay: 'Okay',
    }),
 
    new MLanguage('Укр').create({
      name: 'Андрій Романов',
      basement: 'Одеса, Україна',
      about: 'Про мене',
      skills: 'Навички',
      back: 'Назад',
      projects: 'Проекти',
      other_skills: 'Інші навички',
      other_exp: 'Інший досвід',
      very_good: 'Дуже добре',
      good: 'Добре',
      okay: 'Нормально',
    })
  ]
})