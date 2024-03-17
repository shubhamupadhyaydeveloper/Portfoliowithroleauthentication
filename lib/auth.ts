import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./client"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub({
        clientId: process.env.AUTH_GITHUB_ID as string,
        clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    })],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token = { ...token, ...user }
            }
            return token
        },
       
        session({session ,token}) {
            session.user = {
                ...session.user,
                role : token.role
            }
        return session
        }

    }

})