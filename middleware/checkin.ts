export default defineNuxtRouteMiddleware((to) => {
  console.log('Middleware running on: ', to.fullPath)

  //instead of vue.cookie.get
  const token = useCookie('token').value;

  //redirect to login page if not logged in (token only exists after logging in)
  if (!token && to.name !== 'login') {
    return navigateTo('/login')
  }

}
)
// router.beforeEach((to, from, next) => {
//   if (!Vue.cookie.get('token') && (to.name !== 'login')) {
//     next({ name: 'login' });
//   } else {
//     next();
//   }
// });