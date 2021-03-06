import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "recipesList" */ './RecipesList'),
  loading: () => null,
});

export default LoadableComponent;
