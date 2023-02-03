import React from "react";
import { useLocation } from "react-router-dom";

const Collection = () => {

    const { state } = useLocation();

    return (
        <div> Collection</div>
    )
}

export default Collection;