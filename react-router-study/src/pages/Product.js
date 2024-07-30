import "./Product.css"; 
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Product = () => {

    const { id } = useParams();

    // of of product
    const url = `http://localhost:5000/products/${id}`

    const { data: product, loading, error } = useFetch(url)

    console.log(product)

    return (
        <div>
            <p>ID do Produto: {id}</p>

            {error && <p>Ocorreu um erro ... </p>}

            {loading && <p>Carregando ...</p>}

            {product && (
                <div>
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-price">{
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL', 
                                minimumFractionDigits: 2, 
                                maximumFractionDigits: 2
                            }).format(product.price)                        
                        }
                    </p>
                    <Link to={`/products/${product.id}/info`} className="product-link">Mais Informações</Link>
                </div>
            )}
        </div>
    );
}

export default Product; 