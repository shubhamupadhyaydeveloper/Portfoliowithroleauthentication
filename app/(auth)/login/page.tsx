import React from 'react'
import { signIn } from '@/lib/auth'

const LoginPage = () => {
    async function authAction() {
        'use server'
        await signIn('github')
    }
    return (
        <div>
            <form action={authAction}>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
