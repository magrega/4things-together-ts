import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div>
            Sorry, page doesn't exist. Go back <Link to="/">Home</Link>
        </div>
    );
};

export default NotFoundPage;