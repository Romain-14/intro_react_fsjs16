import { Link } from "react-router-dom";

function InternalLink(props) {
    console.log(props);
    return (
        <Link to={props.text}>
            {props.text === "/" ? "home" : props.text}
        </Link>
    );
}

export default InternalLink;
