import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const [searchParams] = useSearchParams();
    const url = "http://localhost:5000/products?" + searchParams

    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados disponíveis</h1>
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id} className="container-product">
                        <h2 className="product-title">{item.name}</h2>
                        <p className="product-price">{
                             new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL', 
                                minimumFractionDigits: 2, 
                                maximumFractionDigits: 2
                            }).format(item.price)                                 
                           }
                        </p>
                        <Link to={`/products/${item.id}`} className="product-link">Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search