import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not found</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to Homepage ... </Link>
        </div>
     );
}
 
export default NotFound;