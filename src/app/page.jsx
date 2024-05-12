import { signOutAction } from "@/app/actions/auth"
import {Session} from "next-auth"
import { auth } from "../auth";


export async function HomePage() {

  const session = await auth();

  return <div> <h1> Homepage  {session?.user?.name} - {session?.user?.email} </h1>
                <form action={signOutAction}>
                <input type={'submit'} value={'Logout'} />
                </form>
        </div>

};

export default HomePage;
