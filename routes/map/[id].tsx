import { PageProps } from "$fresh/server.ts";
import Toogle from "../../components/Toogle.tsx";

export default function Map(props: PageProps) {
    const { id } = props.params;

    return (
        <>
        {id}
        <br />
        <Toogle value=""/>
        </>
    );
}