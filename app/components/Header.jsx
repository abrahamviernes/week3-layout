import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-[#203B60] text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Laurus Studio</h1>

      <div className="flex gap-3">
        <Button ctaText="Login" />
        <Button ctaText="Register" />
      </div>
    </header>
  );
}