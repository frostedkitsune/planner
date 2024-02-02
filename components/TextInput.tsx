export default function TextInput(props:any) {
  return (
    <>
    <label htmlFor={props.name} class="mb-2">{props.label}</label>
      <input
        name={props.name}
        type="text"
        class="rounded-[--brds] p-2 focus:outline active:outline hover:outline outline-2 outline-[--txt]"
      />
    </>
  );
}
