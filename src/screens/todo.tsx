import { FunctionComponent } from "react";
import { TodoName } from "../features/todo";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const TodoScreen: FunctionComponent = () => {
  return (
    <PrivateRoute>
      <ScreenContainer>
        <TodoName />
      </ScreenContainer>
    </PrivateRoute>
  );
};

export default TodoScreen;
