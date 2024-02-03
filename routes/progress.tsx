const progress = () => {
  return (
    <section
      className={"w-screen min-h-screen grid place-items-center bg-[--pri] py-20 overflow-x-hidden"}
    >
      <div className="w-3/4 min-h-[75%] py-12 bg-[--sec] plc-border rounded-[--brds] relative">
        <h1 class={"text-center text-3xl font-bold my-10"}>
          Your Module Progress
        </h1>

        <div class={"px-10"}>
          <h2 class={"text-xl font-semibold my-6"}>Module 1 Progress</h2>
          <div class={"bg-[--pri] rounded-[--brds] h-6 w-full my-4"}>
            <div class={"w-[33%] rounded-[--brds] left-0 bg-[--ace] h-full"}>
            </div>
          </div>
          <h2 class={"text-xl font-semibold my-6"}>Module 2 Progress</h2>
          <div class={"bg-[--pri] rounded-[--brds] h-6 w-full my-4"}>
            <div class={"w-[63%] rounded-[--brds] left-0 bg-[--ace] h-full"}>
            </div>
            </div>
          <h2 class={"text-xl font-semibold my-6"}>Module 3 Progress</h2>
          <div class={"bg-[--pri] rounded-[--brds] h-6 w-full my-4"}>
            <div class={"w-[43%] rounded-[--brds] left-0 bg-[--ace] h-full"}>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default progress;
