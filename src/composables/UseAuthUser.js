

import { ref } from 'vue'
import { useSupabase } from 'boot/supabase'

const user = ref(null)
export default function useAuthUser() {

    const {supabase} = useSupabase()

    const login = async ({email, password}) => {
        const {user, error} = await supabase.auth.signIn({email, password})
        if (error) throw error
        console.log('user:', user)
        return user
    }

    const loginWithSocialProvider = async (provider) => {
        const {user,error} = await supabase.auth.signIn({provider})
        if (error) throw error
        return user 
    }

    const logout = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) throw error
    }

    const isLoggedIn = () => {
        return !!user.value
    }

    const register = async ({email, password, ...meta}) => {
        const {user, error} = await supabase.auth.signUp(
            {email,password,},
            {
            data:meta,
            redirectTo:`${window.location.origin}/me?fromEmail=registrationConfirmation`
            }
        )
        if (error) throw error
            return user 
    }

    const update = async (data) => {
        const {error} = await supabase.from('users').upsert(data)
        if (error) throw error
        return user 
    }

    const sendPasswordResetEmail = async (email) => {
        const {error} = await supabase.auth.api.resetPasswordForEmail(email)
        if (error) throw error
        return user 
    }

    return {
        user,
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        update,
        sendPasswordResetEmail
    }
}