import styles from './Search.module.css';
import React from 'react'; 

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

//Components
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {

    // const query = useQuery();
    // const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts");

    return (
        <div className={styles.search_container}>
            <h2>Search</h2>
            <div>
                {posts && posts.length === 0 && (
                    <>
                        <p>Não foram encontrados posts a partir da sua busca ...</p>
                        <Link to="/" className="btn btn-dark">Voltar</Link>
                    </>
                )}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            </div>
        </div>
    )
}; 

export default Search; 

