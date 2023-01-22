import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { TodoItems, TodoName, AddItem } from "../features/todo";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const TodoScreen: FunctionComponent = () => {
  const { slug = "" } = useParams();

  const permalink = `/list/${slug}`;

  return (
    <PrivateRoute>
      <ScreenContainer>
        <TodoName permalink={permalink} name={slug} />
        <TodoItems permalink={permalink} />
        <AddItem permalink={permalink} />
      </ScreenContainer>
    </PrivateRoute>
  );
};

export default TodoScreen;
