export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    // match regex /admin/ to check if user is admin
    if (to.path.match(/^\/admin/)) {
        // if route equal /admin and user is login then redirect to /admin/dashboard
        if (to.path === '/admin' && authStore.user) {
            return navigateTo('/admin/posts')
        } else if (to.path !== '/admin' && !authStore.user) {
            // if user is not login then redirect to /login
            return navigateTo('/admin')
        }
    }
})
