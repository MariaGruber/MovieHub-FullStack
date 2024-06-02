"use client"
import { useUser } from "@auth0/nextjs-auth0/client"

function Test() {
    const user = useUser()
    console.log(user.user)
    return  <p>this is the email {user.user.email} </p>
}

export default Test