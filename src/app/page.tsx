import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">
        Compare @apollo/experimental-nextjs-app-support & @apollo/client hooks
      </h1>
      <div className="grid grid-cols-2 gap-4 p-24">
        <Link href="/apollo-client-nextjs">
          @apollo/experimental-nextjs-app-support
        </Link>
        <Link href="/normal">@apollo/client</Link>
      </div>
    </main>
  );
}
