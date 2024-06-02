"use client"
import { useUser } from "@auth0/nextjs-auth0/client";



export default function User() {
    const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>this could not be charged</div>;
  }
  console.log(user)
  return (
    <main>
   <p>khgkjdfhskgjdfhgkjdfghkdfsjghdfkjg</p>
   
   {user && (
        <div>
          <p>User ID: {user.sub}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </main>
  );
}
