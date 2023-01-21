import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { TodoItems, TodoName, AddItem } from "../features/todo";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const TodoScreen: FunctionComponent = () => {
  const { id } = useParams();

  return (
    <PrivateRoute>
      <ScreenContainer>
        <TodoName id={Number(id)} />
        <TodoItems id={Number(id)} />
        <AddItem id={Number(id)} />
      </ScreenContainer>
    </PrivateRoute>
  );
};

export default TodoScreen;
