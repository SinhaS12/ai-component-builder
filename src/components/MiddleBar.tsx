import { useState } from "react"
import spinnerLoader from "./spinnerLoader";


export function MiddleBar({ data }: any) {
    const [previw, setPreviw] = useState("");
    const [loading, setLoading] = useState(false);
    async function Loading() {
        setLoading(true);
        setTimeout(() => {
            setPreviw(data);
            setLoading(false);
        }, 1000)

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", color: "gray", maxWidth: "100%" }}>
            <div>{loading ? spinnerLoader() : "Preview"}</div>
        </div >
    )
}
