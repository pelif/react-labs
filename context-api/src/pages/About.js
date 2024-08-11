import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

    const { counter } = useCounterContext()

    return (
        <div>
            <h3>About</h3>
            <p>Counter: {counter}</p>
            <ChangeCounter />
        </div>
    )   
}

export default About