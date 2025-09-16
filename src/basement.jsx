import { useState } from "react"

export default function Batsman(){
    const [run, setRun] = useState(0)

    const handleSingle = () =>{
        const updatedRuns = run + 1;
        setRun(updatedRuns)
    }

    const handleFours = () =>{
        const updateFours = run + 4;
        setRun(updateFours)
    }

    const handleSix = () =>{
        const updateSix = run+ 6;
        setRun(updateSix)
    }
    return(
        <div>
            <h3>Player: Bangladeshi Player</h3>
            <p>Score: {run}</p>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFours}>fours</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}