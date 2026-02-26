import { Me } from "@/components/general/me";
import { Separator } from "@/components/general/separator";

export default function Home() {
  return (
    <main className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
      <Me />
      <Separator />
      <section id="about" className="my-[100vh]">
        <div className=" bg-blue-700">
          <h2>About</h2>
        </div>
        <Separator />
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
    </main>
  );
}
