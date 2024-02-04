export default function Toogle(props:{value:string}) {
  return (
    <>
      <label class="relative inline-flex items-center cursor-pointer my-2 flex-row-reverse">

        <input type="checkbox" value="" class="sr-only peer" />
        <div class=" relative w-11 h-[1.55rem] bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[--ace]">
        </div>
     
        <span class="ms-3 mr-4 font-medium text-[--txt]">
            {props.value}
        </span>
      </label>
    </>
  );
}
