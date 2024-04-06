import NavBar from "@/components/NavBar";

export default function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center bg-white text-black ">
      <NavBar />
      <div className="w-full h-full" >{children}</div>
    </div>
  );
}