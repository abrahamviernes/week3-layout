import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-[#203B60] text-white w-52 p-6">
      <nav className="flex flex-col gap-6">
        <Link href="/">⌂ Home</Link>
        <Link href="/about">● About</Link>
        <Link href="/contact">✉ Contact</Link>
      </nav>
    </aside>
  );
}