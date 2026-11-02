import Button from "./components/Button";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Laurus Studio
      </h1>

      <p className="text-lg mb-8">
        We create simple, modern, and user-friendly website designs.
      </p>

      <Button ctaText="Get Started" />
    </section>
  );
}