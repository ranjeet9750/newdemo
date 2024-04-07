import Nav from "./components/Nav";
export default function Home() {
  return (
    <main className="min-h-screen">
      <h2 className="text-center text-3xl md:text-4xl bg-blue-500 p-[20px] text-white bg-gradient-to-r from-cyan-500 to-blue-500">
        Utility
      </h2>
      <Nav />
    </main>
  );
}
