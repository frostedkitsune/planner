export default function Resource() {
  const arr: any = [];
  const add = () => {
    const input: any = document.getElementById("input");
    const ul: any = document.getElementById("ul");
    const ele = `<li><a href="${input.value}">${input.value}</a></li>`;
    if (input.value != "") {
      ul.innerHTML += ele;
      console.log(ele);
      arr.push(ele)
    }
  };

  return (
    <div className="bg-[--pri] w-[300px] rounded-[--brds]  mt-2 p-2">
      <label>Add Resources</label>
      <div className="bg-white items p-2 mt-2 rounded-[--brds] overflow-scroll max-h-24 h-24  hover:outline outline-2 outline-[--txt]">
        <ul id="ul">
        </ul>
      </div>
      <div className="mt-2 flex">
        <input
        placeholder="Enter here"
          type="text"
          id="input"
          className="w-9/12 p-1 pl-2 focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] mr-2"
        />
        <div className="ml-2 mt-2 flex w-3/12">
          <button
            onClick={add}
            className=" focus:outline active:outline hover:outline outline-2 outline-[--txt] rounded-[--brds] w-[25px] h-[25px]   mr-2"
          >
            +
          </button>
          {/* <button className=" rounded-[--brds] w-[25px] h-[25px] focus:outline active:outline hover:outline outline-2 outline-[--txt]   ">
            -
          </button> */}
        </div>
      </div>
    </div>
  );
}
