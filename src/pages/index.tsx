import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full text-center m-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className="my-2">To view Latest blogs click below !</p>
      <div>
        <Link className="text-blue-400 underline" href="/blogs">View blogs</Link>
      </div>
    </div>
  );
}
