import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import FirstParameter from '../views/FirstParameter.vue'
import Quizarray from '../views/QuizArray.vue'
import ThirdPartObjet from '../views/ThirdPartObjet.vue'
import Fourthpart from '../views/FourthPart.vue'
import FifthPart from '../views/FifthPart.vue'
import Sixthpart from '../views/SixthPart.vue'
import Quizarraytwo from '../views/Quizarray2.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/firstparam',
      name: 'firstparam',
      component: FirstParameter
    },
    {
      path: '/quizarray',
      name: 'quizarray',
      component: Quizarray
        
    },
    {
      path: '/thirdpart',
      name: 'thirdpart',
      component: ThirdPartObjet
        
    },
    {
      path: '/fourthpart',
      name: 'fourthpart',
      component: Fourthpart
        
    },
    {
      path: '/fifthpart',
      name: 'fifthpart',
      component: FifthPart
        
    },
    {
      path: '/sixthpart',
      name: 'sixthpart',
      component: Sixthpart
        
    },
    {
      path: '/quizarraytwo',
      name: 'quizarraytwo',
      component: Quizarraytwo
        
    },
  ]
})

export default router
