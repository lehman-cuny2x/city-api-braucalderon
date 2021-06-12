import React from "react";
import { Card, Typography } from "@material-ui/core";

const cards = ({ state, location, population, wages, city, zip }) => {
  let card = null;
  card = !city ? (
    <Card variant="outlined">
      <Typography variant="h6" component="h1">
        State:{state}
      </Typography>
      <Typography>• Location: {location}</Typography>
      <Typography>• Population: {population}</Typography>
      <Typography>• Total Wages: {wages}</Typography>
    </Card>
  ) : (
    <Card variant="outlined">
      <Typography>• Zip Code: {zip}</Typography>
    </Card>
  );

  return card;
};
export default cards;
