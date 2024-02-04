export default function index() {
  return (
    <div
      id="palette"
      class="py-44 px-24 flex flex-row justify-center items-center"
    >
      <div className={"w-[50%]"}>
        <h1 class="text-[3.50rem] font-bold text-gray-900">
          Welcome to{" "}
          <span className={"bg-[--sec] p-2 text-[--txt] rounded-[--brds]"}>
            Planner !
          </span>
        </h1>
        <p class={"mt-8 text-xl mr-36"}>
          Create learning paths, track your progress and collaborte with others
          to create a better learing environment
        </p>
      </div>
      <div className={"flex flex-col ml-20"}>
        <h2 class={"text-3xl font-bold my-6"}>Join Today !</h2>
        <a
          href="/accounts"
          class={"bg-[--ace] p-3 text-xl w-fit rounded-[--brds] text-[--pri] mx-auto"}
        >
          Sign up
        </a>
      </div>
    </div>
  );
}
