import { Divider, Grid, Typography } from "@mui/material";
import { PrivateRoute } from "../layouts/private-route";
import { ScreenContainer } from "../layouts/screen-container";

import SeeAllImage from "../assets/about/see-all.png";
import CreateImage from "../assets/about/create.png";
import AddItemImage from "../assets/about/add-items.png";
import ReorderImage from "../assets/about/reorder.png";

const features = [
  {
    title: "Just what you need!",
    description:
      "Vibbraneo Todo comes with a carefully considered set of features that cater to everyday tasks so you can spend more time solving your tasks and less time managing them.",
    imageElement: (
      <img
        src={SeeAllImage}
        width={300}
        height={300}
        alt="see all todo"
        style={{ objectFit: "cover", objectPosition: "left" }}
      />
    ),
  },
  {
    reverse: true,
    title: "Create new Todos easily",
    description:
      "Create new Todo lists with just a few simple clicks. Just type the name and you will be ready to add items.",
    imageElement: (
      <img
        src={CreateImage}
        width={300}
        alt="create a new todo"
        style={{ objectFit: "cover", objectPosition: "left" }}
      />
    ),
  },
  {
    title: "Create as many as you want!",
    description:
      "Divide your Todos into as many subitems as necessary to best perform your task.",
    imageElement: (
      <img
        src={AddItemImage}
        width={300}
        alt="create subitem in todo"
        style={{ objectFit: "cover" }}
      />
    ),
  },
  {
    reverse: true,
    title: "Do your job the way you want!",
    description: "Just drag and drop to reorder Todo items however you like.",
    imageElement: (
      <img
        src={ReorderImage}
        width={300}
        height={300}
        alt="reorder subitems in todo"
        style={{ objectFit: "cover", objectPosition: "left" }}
      />
    ),
  },
];

const AboutScreen = () => (
  <PrivateRoute>
    <ScreenContainer>
      <Typography variant="h4" component="h1">
        About Vibbraneo Todo
      </Typography>
      <Typography variant="caption">
        Make your tasks easier with Vibbraneo Todo!
      </Typography>
      <Divider sx={{ my: 2 }} />
      {features.map(({ title, reverse, description, imageElement }) => (
        <Grid
          container
          key={title}
          alignItems="center"
          gap={2}
          direction={reverse ? "row-reverse" : "row"}
          minHeight={200}
        >
          <Grid item xs>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </Grid>
          <Grid item>{imageElement}</Grid>
        </Grid>
      ))}
    </ScreenContainer>
  </PrivateRoute>
);

export default AboutScreen;
