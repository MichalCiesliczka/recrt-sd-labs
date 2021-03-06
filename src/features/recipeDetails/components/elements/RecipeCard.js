// @flow
import React from 'react';
import type { Node } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { RecipeCardStyles } from '../recipeDetails.styles';

type Props = {
  title: string,
  classes: {
    title: string,
  },
  children: Node,
};

const RecipeCard = ({ title, children, classes }: Props) => (
  <Card>
    <CardContent>
      <Typography
        component="p"
        className={classes.title}
      >
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default withStyles(RecipeCardStyles)(RecipeCard);
