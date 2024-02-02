import { Partial } from "$fresh/runtime.ts";

export default function Accounts() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-[--pri]">
      <div className="w-2/5 h-2/4 bg-[--sec] plc-border" f-client-nav>
        <Partial name="sign">
        </Partial>
      </div>
    </div>
  );
}
