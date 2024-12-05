import { createRouter, createWebHistory } from 'vue-router';
 const routers = [
    {
        path : "/home", 
        name : 'home', 
        component :()=> import('../views/HomeView.vue')
        
    }
 ];
 const router = createRouter({
    history: createWebHistory(),
    routes : routers , 
  });
  
  export default router;