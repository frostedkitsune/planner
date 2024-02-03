import { useState } from "preact/hooks";
import TextInput from "../components/TextInput.tsx";

export default function Sign() {
  const [newUser, setNewUser] = useState(false);
  function handleRegister() {
    setNewUser(!newUser);
  }
  return (
    <div className="w-2/5 h-2/4 bg-[--sec] plc-border rounded-[--brds] relative">
      <div
        className="absolute bottom-0 w-full text-center mb-4 text-[--txt]"
        onClick={handleRegister}
      >
        <TextInput name="username" label="Username"/>
        <TextInput name="password" label="Password"/>
        <br />
        {   newUser ? <b>new to planner? register now</b> : <b>part of the cult? login</b> }
      </div>
    </div>
  );
}
