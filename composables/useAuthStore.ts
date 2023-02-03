import {UserMeta} from "~/entities/auth.entity";

interface State {
    token?: string
    user?: UserMeta
}

export const useAuthStore = defineStore<string, State>({
    id: 'auth',
    state: () => ({
        user: undefined,
        token: undefined
    }),

    getters: {
        auth: (state) => !!state.user,
    },

    actions: {
        async logOut() {
            try {
                this.user = undefined
                this.token = undefined
                await $fetch('/api/logout', { method: 'POST' })
            } catch (e) {
                //
            }
        }
    }
})
