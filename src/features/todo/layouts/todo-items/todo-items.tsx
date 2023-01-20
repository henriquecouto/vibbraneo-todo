import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment, FunctionComponent, useMemo } from "react";
import { useTodo } from "../../hooks/use-todo";
import { ItemProps, TodoItemsProps } from "./todo-items.types";

const Item: FunctionComponent<ItemProps> = ({ itens, item, opened }) => {
  const Wrapper = useMemo(() => (opened ? Paper : Accordion), [opened]);

  if (item) {
    return (
      <Paper sx={{ padding: 2 }}>
        <Typography>{item}</Typography>
      </Paper>
    );
  }

  return (
    <Wrapper>
      <AccordionSummary
        expandIcon={!opened && <ExpandMore />}
        sx={{ cursor: `${opened ? "default" : "pointer"} !important` }}
      >
        <Typography>{itens?.length} items</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "aliceblue" }}>
        {itens?.map(({ itens, id, item }) => (
          <Fragment key={id}>{<Item itens={itens} item={item} />}</Fragment>
        ))}
      </AccordionDetails>
    </Wrapper>
  );
};

export const TodoItems: FunctionComponent<TodoItemsProps> = ({ id }) => {
  const { data, mutate } = useTodo({ id });

  return (
    <Grid container gap={2} direction="column">
      <Item opened itens={data.itens} />
    </Grid>
  );
};
