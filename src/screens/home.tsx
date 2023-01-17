import { Link } from "react-router-dom";
import { routes } from "../constants/routes";

const HomeScreen = () => <Link to={routes.about}>about</Link>;

export default HomeScreen;
