import { useState } from "preact/hooks";
import { FunctionalComponent, h } from "preact";

export default function Resource() {
  // array for storing the resources
  const [resources, setResources] = useState<h.JSX.Element[]>([]);

  // Input for the resources
  const [mapInput, setMapInput] = useState<string>("");

  // handling the input change
  const handleUserNameChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    setMapInput(target.value);
  };

  //  FUnCTION TO HANDLE THE SUBMIT
  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    console.log("submit", mapInput);
    const ele: h.JSX.Element = (
      <li className="plc-li bg-white rounded-lg my-2 py-2 px-4">
        <a href={mapInput}>{mapInput}</a>
      </li>
    );
    setResources((prevResources) => [...prevResources, ele]);
  };

  return (
    <div className="bg-[--pri] w-11/12 rounded-[--brds] mt-2 p-2">
      <label>Add Resources</label>
      <div className="items p-2 mt-2 rounded-[--brds] overflow-scroll h-40">
        <ul>
          {resources}
        </ul>
      </div>
      <div className="mt-2 flex">
        <input
          placeholder="Enter here"
          type="text"
          id="input"
          value={mapInput}
          onChange={handleUserNameChange}
          className="w-9/12 p-1 pl-2 focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] mr-2"
        />
        <div className="ml-2 mt-2 flex w-3/12">
          <button
            onClick={handleSubmit}
            className=" focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] w-[25px] h-[25px]   mr-2"
          >
            +
          </button>
          {
            /* <button className=" rounded-[--brds] w-[25px] h-[25px] focus:outline active:outline hover:outline outline-2 outline-[--txt]   ">
            -
          </button> */
          }
        </div>
      </div>
    </div>
  );
}
