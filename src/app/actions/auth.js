'use server'

import { signIn, signOut } from "@/auth"
import bcrypt from "bcryptjs"
import prisma from "@/prismaClient";
import { AuthError } from "next-auth";

export async function signInWithGitHubAction(formData){
    console.log("signInWithGitHubAction")
    await signIn("github", {redirectTo: "/"})


}



export async function signInWithCredentialsAction(formData){
  console.log("signInWithCredentialAction")
  const email= formData.get("email");
  const password= formData.get("password"); 
  console.log("password=", password)
  try{
  await signIn("credentials", {redirectTo: "/", email, password})
  }catch(error){
      if (error instanceof AuthError) {
          switch (error.type) {
            case "CredentialsSignin":
              return { error: "Invalid credentials" };
            default:
              return { error: "Something went wrong" };
          }
        }
    
        throw error;


  }
  

}



export async function signOutAction(formData){
    console.log("signOut")
    await signOut( {redirectTo: "/api/auth/signin"})
}



export const signUp = async (email, password) => {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
  
    if (user) {
      return "User with that email already exists."
    }
  
    const passwordhash = bcrypt.hashSync(password, 10)
  
    await prisma.user.create({
      data: {
        email,
        passwordhash
      }
    })
  
    return "Successfully Registered!"
  }
  
  