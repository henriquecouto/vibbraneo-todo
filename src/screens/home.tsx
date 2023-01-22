import { Divider } from "@mui/material";
import { TodoList } from "../features/listing";
import { CreateTodo } from "../features/todo";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

const HomeScreen = () => (
  <PrivateRoute>
    <ScreenContainer>
      <CreateTodo />
      <Divider sx={{ my: 2 }} />
      <TodoList />
    </ScreenContainer>
  </PrivateRoute>
);

export default HomeScreen;
