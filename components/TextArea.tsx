export default function TextInput(props: any) {
  return (
    <>
      <label htmlFor={props.name} class="mb-2 block">{props.label}</label>
      <textarea class="rounded-[--brds] p-2 focus:outline active:outline hover:outline outline-2 outline-[--txt] mt-2 mb-4 resize-none block w-[300px]" />
    </>
  );
}
