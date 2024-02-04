import TextArea from "../components/TextArea.tsx";
import TextInput from "../components/TextInput.tsx";
import Toogle from "../components/Toogle.tsx";
import Resource from "../islands/Resource.tsx";

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
          <Resource />
          <div className="project mt-2">
            <Toogle value="Project Showcase"/>
          </div>
        </div>
      </div>
    </>
  );
}
