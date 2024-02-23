//Without a defined matcher, this one line applies next-auth
//to entire project
// All routes are secured

export{default} from "next-auth/middleware"


//Applies next-auth only to matching routes - can be regex
//Ref: https://nextjs.org/docs/app/building-you-application/routing/middleware#matcher

export const config = {matcher:["/Extra","/dashboard"]}