import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="h-full flex flex-col justify-center items-center bg-slate-50 text-black min-w-80 w-1/2">
        <h1 className="text-xl font-semibold">Welcome to TheTodoList!</h1>
        <LoginForm />
        <p className="text-sm mt-2">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
      <div className="w-4/5 h-full relative overflow-hidden">
        <Image
          src="/main.jpg"
          alt="main"
          className="w-full h-full fit"
          placeholder="blur"
          blurDataURL={"/main.jpg"}
          width={1024}
          height={768}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
