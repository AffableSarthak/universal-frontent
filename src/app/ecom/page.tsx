import Header, { HeaderTypes } from "./components/common/Header";
import Menu from "./components/menu";

function Home() {
  return (
    <>
      <section className="bg-amber-400 p-4 rounded-md flex flex-col items-center gap-4 justify-center my-10">
        <Header title="When life gives you lemon, make lemonade!" />

        <ul>
          <li>Step 1: Add some Water in a glass</li>
          <li>Step 2: Add some lemon juice and zest</li>
          <li>Step 3: Add some sugar and spice</li>
          <li>Step 4: MIX</li>
          <li>
            Step 5: Enjoy your drink!{" "}
            <span className="tracking-widest font-black text-3xl">~~</span>
          </li>
        </ul>
      </section>
      <section className="container bg-orange-400 rounded-md p-4 flex flex-col items-center gap-4 justify-center">
        <Menu />
      </section>
    </>
  );
}

export default Home;
