// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
    
    const { counter } = useCounterContext()

    const { color, dispatch } = useTitleColorContext()

    const setTitleColor = (color) => {
        dispatch({ type: color }); 
    }

    return (
        <div>
            <h3 style={{ color:color }}>Home</h3>
            <p>Counter: {counter}</p>
            <ChangeCounter />
            <div>
                <button onClick={() => setTitleColor("RED")}>RED</button>
                <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
            </div>
        </div>
    )
}

export default Home