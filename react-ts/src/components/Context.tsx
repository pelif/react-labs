import React, { useContext} from "react";

import { AppContext } from "./../App";

interface Props {

}

const Context  = () => {
    
    const details = useContext(AppContext);

    return <>
        {details && (
            <div>
                <p>Linguagem: {details.language}</p>
                <p>Framework: {details.framework}</p>
                <p>QTD: {details.projects}</p>
            </div>
        )}
    </>; 
}

export default Context; 