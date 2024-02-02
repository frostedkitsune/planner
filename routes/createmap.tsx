import TextInput from "../components/TextInput.tsx";

export default function createmap() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center p-[40px]">
        <div className="w-6/12 h-auto bg-[--pri] flex justify-center p-[10px]">
          <div className="name flex w-52 h-28 bg-[--sec] flex-col p-[10px] rounded-[--brds]">
            <p class="mb-2.5">Hi! What is your Name?</p>
            <TextInput name="mk" label="Enter a Course Name "/>
            <input type="text" placeholder="Enter name here" className="bg-[--sec] no-underline outline-0 border-none"/>
            <hr className="text-[--pri]"/>
          </div>
        </div>
      </div>
    </>
  );
}
