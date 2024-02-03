import TextArea from "../components/TextArea.tsx";
import TextInput from "../components/TextInput.tsx";

export default function createmap() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center p-[40px]">
        <div className="w-6/12 h-auto bg-[--sec] p-[40px] rounded-[--brds]">
          <h1 className="text-3xl mb-2">New map creation</h1>
          <div className="w-8 h-8 bg-[--ace] flex justify-center rounded-[--brds] mb-2">
            1
          </div>
          <TextInput name="mapName" label="Map Name" required="required" />
          <TextArea name="tags" label="Provide Tags" />
          <div className="bg-[--pri] w-[300px] rounded-[--brds]  mt-2 p-2 ">
            <label>Add Resources</label>
            <div className="bg-white items p-2 mt-2 rounded-[--brds]">
              <ul>
                <li>ss</li>
                <li>ss</li>
                <li>ss</li>
              </ul>
            </div>
            <div className="mt-2 flex">
              <input
                type="text"
                className="w-9/12 p-1 focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] mr-2"
              />
              <div className="ml-2 mt-2 flex w-3/12">
                <button className=" focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] w-[25px] h-[25px]   mr-2">
                  +
                </button>
                <button className=" rounded-[--brds] w-[25px] h-[25px] focus:outline active:outline hover:outline outline-2 outline-[--txt]   ">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="project mt-2">
            <label>Project showcase</label>

            <input
              type="checkbox"
              className="w-4 h-4 ml-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
