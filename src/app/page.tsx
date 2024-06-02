import Image from "next/image"
import Link from "next/link"



export default async function Home() {

  return (
    <main>
      <section>
        <h1 className="pb-1 pt-8">Welcome!</h1>
        <p className="pb-8">please log in or sign up to enjoy our service</p>
        <Image
          src="/assets/MovieHub.png"
          width={500}
          height={500}
          alt="logo"
        />
      </section>
      <section className="flex flex-row space-x-32 pl-14 pt-6">
        <div>
         <Link className="hover:cursor-pointer bg-yellow-500 p-2 text-lg text-black font-bold rounded-lg" href="/api/auth/login">Log in</Link>
        </div>
        <div>
         <Link className="hover:cursor-pointer bg-yellow-500 p-2 text-lg text-black font-bold rounded-lg" href="/api/auth/signup">Sign up</Link>
        </div>
      </section>
      
    </main>
  );
}
