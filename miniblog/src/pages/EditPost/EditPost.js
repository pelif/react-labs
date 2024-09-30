import React, { useEffect } from "react";

import styles from "./EditPost.module.css"

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";


const EditPost = () => {

    const { id } = useParams();
    const { document: post } = useFetchDocument("posts", id);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");
    

    useEffect(() => {
        if(post) {
            setTitle(post.title);
            setImage(post.image);
            setBody(post.body);

            const textTags = post.tagsArray.join(", ");

            setTags(textTags);
        }
    }, [post]);

    const { user } = useAuthValue();

    const { updateDocument, response } = useUpdateDocument("posts");

    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");
                 
        //validar imagem
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.");
            return;
        }

        //criar array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        //checar todos os valores
        if(!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os valores");
            return;
        }

        if(formError) return;

        const data = {
            title,
            image,
            body,
            tagsArray, 
            uid: user.uid, 
            createdBy: user.displayName
        }; 
            
        updateDocument(id, data);

        //redirect to home page
        navigate('/dashboard'); 
    }

    return (
        <div className={styles.edit_post}>

            {post && (
                <>
                  <h2>Editando Post : {post.title}</h2>
            <p>
                Escreva o que quiser e compartilhe o seu conhecimento
            </p>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Título do post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="Insira a URL da imagem"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <p className={styles.preview_title}>Preview da Imagem Atual</p>
                <img className={styles.image_preview} src={post.image} alt={post.title} />
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body"
                        required
                        placeholder="Insira o conteúdo do post"
                        value={body}
                        onChange={(e) => setBody(e.target.value)} 
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name="tags"
                        required
                        placeholder="Insira as tags separadas por vírgula"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>
                
                {!response.loading && <button className="btn">Criar Post</button>}

                {response.loading && <button className="btn" disabled>Aguarde ... </button>}

                {response.error && <p className="error">{response.error}</p>}

                {formError && <p className="error">{formError}</p>}

            </form>
                </>
            )}

            
        </div>
    )
}

export default EditPost; 