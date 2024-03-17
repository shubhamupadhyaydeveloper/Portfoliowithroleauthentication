import React from 'react'
import { signOut } from '@/lib/auth'

const LogoutPage = () => {
    async function authAction() {
        'use server'
        await signOut()
    }
    return (
        <div>
            <form action={authAction}>
                <button>logout</button>
            </form>
        </div>
    )
}

export default LogoutPage
