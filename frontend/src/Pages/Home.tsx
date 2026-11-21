import { useState } from "react"

function Home(){
    const [file, setfile] = useState<File | null>(null);
    return(
        <>
        <h1 className="">Welcome to Resumely</h1>
        <input type="file" accept=".pdf, .docx" onChange={(e) => setfile(e.target.files?.[0] ?? null)}/>
        <p>{file?.name}</p>
        <p>{file?.size}</p>
        <button>SUBMIT</button>
        </>
    )
}
export default Home