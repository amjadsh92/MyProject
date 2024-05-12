import { signInWithGitHubAction} from "@/app/actions/auth"
import SignUpForm from "@/components/auth/SignUpForm"
import { signInWithCredentialsAction } from "@/app/actions/auth"

export default function SignIn(){



    return(
        <>
        <h2> Sign in with your GitHub</h2> 
        <form action={signInWithGitHubAction}>
            <input type={'submit'} value={'Sign in'} /> <br/><br/>
        </form>
        <h2> Sign in with your Credentials</h2>
        <form action={signInWithCredentialsAction}>
            Email Address: <input name={'email'} type={'text'} /> <br/>
            Password: <input name={'password'} type={'password'} /> <br/>
            <input type={'submit'} value={'Sign in'} /> <br/><br/>
        </form>

        <h2> Sign Up</h2>
        <SignUpForm />

        
        </>
        )
    }
    