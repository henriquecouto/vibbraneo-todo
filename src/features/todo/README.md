# How to use

This feature allow management of one specified Todo List

### Todo Name

Use this to render a component that changes Todo name.

```jsx
import { TodoName } from "./features/todo";
import { useParams } from "react-router-dom";

const YourComponent = () => {
  const { slug } = useParams();
  const permalink = `/list/${slug}`;

  return <TodoName permalink={permalink} name={slug} />;
};
```

### Todo Items

Use this to render a component that shows Todo sub items.

```jsx
import { TodoItems } from "./features/todo";
import { useParams } from "react-router-dom";

const YourComponent = () => {
  const { slug } = useParams();
  const permalink = `/list/${slug}`;

  return <TodoItems permalink={permalink} />;
};
```

### Add Item

Use this to render a component that add new Todo sub items.

```jsx
import { AddItem } from "./features/todo";
import { useParams } from "react-router-dom";

const YourComponent = () => {
  const { slug } = useParams();
  const permalink = `/list/${slug}`;

  return <AddItem permalink={permalink} />;
};
```

### Create Todo

Use this to render a component that create a new Todo.

```jsx
import { CreateTodo } from "./features/todo";
import { useParams } from "react-router-dom";

const YourComponent = () => {
  const { slug } = useParams();
  const permalink = `/list/${slug}`;

  return <CreateTodo />;
};
```

### Delete Todo

Use this to render a component that delete a Todo.

```jsx
import { DeleteTodo } from "./features/todo";
import { useParams } from "react-router-dom";
import { deleteTodoApi } from "./adapters/delete-todo";

const YourComponent = () => {
  const { slug } = useParams();
  const permalink = `/list/${slug}`;

  const { data, mutate } = useTodo({ permalink });

  const handleDelete = async () => {
    await deleteTodoApi({ id: data.id });
    mutate();
  };

  }

  return <DeleteTodo onConfirm={handleDelete} name={data.name} />;
};
```
