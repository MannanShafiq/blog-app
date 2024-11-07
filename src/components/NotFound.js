import { Link } from "react-router-dom"

const NotFound = () => {
    return (
    

<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<Link to={"/dashboard"}>Go TO dashboard</Link>
		</div>
	</div>
        
    );
};
export default NotFound;