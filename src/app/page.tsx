
import {options} from './api/auth/[...nextauth]/options'
import {getServerSession} from "next-auth/next"

export default async function HomePage() {
  const session = await getServerSession(options)
  return (
    <main>

     <div>
      {session ? (<p>{session?.user?.name}</p>):(<h1>You cannot pass</h1>)}
     </div>
    </main>
  )
}
