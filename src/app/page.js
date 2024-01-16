import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    //   <Image
    //   src="/vercel.svg"
    //   alt="Vercel Logo"
    //   className="dark:invert"
    //   width={100}
    //   height={24}
    //   priority
    // />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/home" class="btn btn-accent btn-outline">Home</Link>
    </main>
  );
}
