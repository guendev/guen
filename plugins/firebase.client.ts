import {defineNuxtPlugin} from "#imports"
import {initializeApp} from "@firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getAuth} from "firebase/auth";
import {useCookie, useRoute, useRouter} from "#app";
import {UserMeta} from "~/entities/auth.entity";

export default defineNuxtPlugin(nuxtApp => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCsvbX-cmCVe0VfCxVuNp1aNV-xDDqYrMg",
        authDomain: "guen-3b189.firebaseapp.com",
        projectId: "guen-3b189",
        storageBucket: "guen-3b189.appspot.com",
        messagingSenderId: "885306431413",
        appId: "1:885306431413:web:80ef79a32dc3c32b48ebfc",
        measurementId: "G-ZDS179STW7",
        databaseURL: "https://guen-3b189-default-rtdb.asia-southeast1.firebasedatabase.app"
    }

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app)
    // const kokiApp = useAppStore()
    //
    const route = useRoute()
    const router = useRouter()
    const authStore = useAuthStore()

    nuxtApp.hooks.hook('app:mounted', () => {
        // Listen to Supabase auth changes
        auth.onIdTokenChanged(async (user) => {
            if (user) {
                const firebaseToken = await user.getIdToken()

                const userMeta: UserMeta = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                }

                if(firebaseToken) {
                    try {
                        const { token } = await $fetch('/api/auth', {
                            method: 'POST',
                            body: {
                                token: firebaseToken,
                                meta: userMeta
                            }
                        })
                        if(token) {
                            authStore.token = token
                            authStore.user = userMeta
                        }
                        // if(route.path === '/auth') {
                        //     await router.push('/')
                        // }

                    } catch (e) {
                       // await kokiApp.logOut()
                    }
                }
            } else {
                // kokiApp.token = ''
            }
        })


        // listen user data change => update
    })

    return {
        provide: {
            firebase: app,
            analytics
        }
    }
})
