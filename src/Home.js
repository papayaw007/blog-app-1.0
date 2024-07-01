//import { useState } from "react";
//import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data:blogs, isPending, error} = useFetch("http://https://blog-app-1-0-lilac.vercel.app/blogs");

    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
         { blogs && <BlogList blogs={blogs} title = "All blogs"/>}
        </div>
     );
}
 
export default Home;
