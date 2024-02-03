import { Button } from "../components/Button.tsx";

const dashboard = () => {
  return (
    <section
      className={"w-screen min-h-screen grid place-items-center bg-[--pri] py-20 overflow-x-hidden"}
    >
      <div className="w-3/4 min-h-[75%] pt-12 bg-[--sec] plc-border rounded-[--brds] relative">
        <h1 class={"text-center text-3xl font-bold my-10"}>
          Welcome to Planner
        </h1>

        <div class={"flex flex-col text-center px-28"}>
          <h2 class={"text-xl font-semibold my-6"}>Your current map</h2>
          <div
            class={"bg-[--ace] rounded-[--brds] h-10 p-2 text-center w-full my-4"}
          >
            My Map 1
          </div>
          <h2 class={"text-xl font-semibold my-6"}>Your other maps</h2>
          <div
            class={"bg-[--ace] rounded-[--brds] h-10 p-2 text-center w-full my-4"}
          >
            My Map 2
          </div>
          <div
            class={"bg-[--ace] rounded-[--brds] h-10 p-2 text-center w-full my-4"}
          >
            My Map 3
          </div>
          <div
            class={"bg-[--ace] rounded-[--brds] h-10 p-2 text-center w-full my-4"}
          >
            My Map 4
          </div>
        </div>
        <div class={"flex justify-center my-10"}>
          <Button>+ Add Map</Button>
        </div>
      </div>
    </section>
  );
};

export default dashboard;
