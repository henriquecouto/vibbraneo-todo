import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const AboutScreen = () => (
  <PrivateRoute>
    <ScreenContainer>
      <h1>Hello about screen</h1>
    </ScreenContainer>
  </PrivateRoute>
);

export default AboutScreen;
