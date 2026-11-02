import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Laurus Studio",
  description: "Week 3 reusable components assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-1">
          <Sidebar />

          <main className="flex-1 p-10">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}