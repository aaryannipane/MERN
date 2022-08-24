import React from "react";
// it is used to get parameter from a link 
import { useParams } from "react-router-dom";
// to use query parameter we can use this hook
import { useSearchParams } from "react-router-dom";

const Post = ()=>{
    let {category, id} = useParams();
    let [searchParams, setSearchParam] = useSearchParams();

    console.log(searchParams) // get all parameters
    console.log(searchParams.get("price")) // get specified parameter value

    return (
        <>
            <h1>{category} post Page</h1>
            <h1>{id} post Page</h1>
        </>
    )
}

export default Post;