import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const HomeScreen = () => (
  <PrivateRoute>
    <ScreenContainer>
      <Link to={routes.about}>about</Link>
    </ScreenContainer>
  </PrivateRoute>
);

export default HomeScreen;
