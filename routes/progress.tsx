const progress = () => {
  return (
    // <section
    //   className={"w-screen min-h-screen grid place-items-center bg-[--pri] py-20 overflow-x-hidden"}
    // >
    <div className="w-screen min-h-screen py-12 bg-[--pri] relative">
      <h1 className={"text-center text-3xl font-bold mb-10"}>
        React Roadmap
      </h1>

      <div className={"px-24"}>
        <h2 className={"text-xl font-semibold my-4"}>
          Overall Roadmap Progress
        </h2>
        <div
          className={"bg-[--pri] plc-border rounded-[--brds] h-7 w-full my-4 flex justify-between"}
        >
          <div className={"w-[37%] rounded-[8px] left-0 bg-[--ace] h-full"}>
          </div>
          <p className={"font-bold mr-2"}>37%</p>
        </div>

        <div className="grid grid-cols-5 gap-y-12 w-full mt-24 px-44 text-xl">
          <div class="bg-[--sec] col-start-1 col-span-2 h-56 rounded-[--brds] w-full plc-border">
            <div
              className={"p-2 rounded-full bg-[--ace] text-white font-bold h-16 w-16 grid place-content-center -mt-6 -ml-6"}
            >
              01
            </div>
            <div className="grid place-content-center w-full mt-12">
              useState
            </div>
          </div>

          <div class="bg-[--sec] col-start-4 col-span-2 h-56 rounded-[--brds] w-full plc-border">
            <div
              className={"p-2 rounded-full bg-[--ace] text-white font-bold h-16 w-16 grid place-content-center -mt-6 -ml-6"}
            >
              02
            </div>
            <div className="grid place-content-center w-full mt-12">
              Custom Hooks
            </div>
          </div>
          <div class="bg-[--sec] col-start-2 col-span-2 h-56 w-full rounded-[--brds] plc-border">
            <div
              className={"p-2 rounded-full bg-[--ace] text-white font-bold h-16 w-16 grid place-content-center -mt-6 -ml-6"}
            >
              03
            </div>
            <div className="grid place-content-center w-full mt-12">
              State Management
            </div>
          </div>
          <div class="bg-[--sec] col-start-3 col-span-2 h-56 w-full rounded-[--brds] plc-border">
            <div
              className={"p-2 rounded-full bg-[--ace] text-white font-bold h-16 w-16 grid place-content-center -mt-6 -ml-6"}
            >
              04
            </div>
            <div className="grid place-content-center w-full mt-12">
              Api Calls
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default progress;
