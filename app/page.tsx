import { Header } from "@/components/general/header";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="about" className="my-[100vh]">
        <div className="size-48 bg-blue-700">
          <h2>About</h2>
        </div>
      </section>
      <section id="projects" className="my-[100vh]">
        <div className="size-48 bg-pink-500">
          <h2>Projects</h2>
        </div>
      </section>
      <section id="contact" className="my-[100vh]">
        <div className="size-48 bg-amber-700">
          <h2>Contact</h2>
        </div>
      </section>
    </div>
  );
}
