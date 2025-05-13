import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href="/posts"
        className="rounded-full bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
      >
        View Posts
      </Link>
    </>
  );
}
