export default function EcomerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className=" min-h-screen bg-emerald-50 text-black">
      <section className="bg-blue-800">
        <header className="font-black text-6xl p-2 text-center border-teal-300 border-4 ">
          <h1 className="bg-green-400 rounded-full tracking-tighter italic">
            Awesome <br />
            Restaurant
          </h1>
        </header>
      </section>
      <section className="justify-center flex flex-col items-center">
        <section className="container">{children}</section>
      </section>
    </article>
  );
}
