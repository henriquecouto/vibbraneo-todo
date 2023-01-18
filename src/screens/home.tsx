import { TodoList } from "../features/listing";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const HomeScreen = () => (
  <PrivateRoute>
    <ScreenContainer>
      <TodoList />
    </ScreenContainer>
  </PrivateRoute>
);

export default HomeScreen;
