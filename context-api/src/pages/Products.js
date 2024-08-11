import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"

const Products = () => {

    const { counter } = useCounterContext()

    return (
        <div>
            <h3>Products</h3>
            <p>Counter: {counter}</p>
            <ChangeCounter />
        </div>
    )   
}

export default Products