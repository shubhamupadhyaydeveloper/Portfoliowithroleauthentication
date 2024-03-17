import { Session } from "next-auth";
import { NextRequest } from "next/server";
import { auth as adminAuth } from "./auth"; 

export const authConfig = {

	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async authorized({ auth, request, }: { auth: Session | null; request: NextRequest }) {
			const user = auth?.user;
			const isVisitingUserPage = request.nextUrl.pathname.startsWith("/user");
			const isVisitingAuthPage = request.nextUrl.pathname.startsWith("/login");
            const session = await adminAuth()
			const isAdmin = session?.user.role === "ADMIN"
			const isVistingAdmin = request.nextUrl.pathname.startsWith("/admin")

			if(!isAdmin && isVistingAdmin) {
				return false
			}
			if(isAdmin && isVistingAdmin) {
				return true
			}

			if (!user && isVisitingUserPage) {
				return false;
			}

			if (user && isVisitingAuthPage) {
				return Response.redirect(new URL("/", request.nextUrl));
			}

			return true;
		},
	},
};

