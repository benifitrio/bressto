import Home from '../views/page/list-restaurant';
import Favorite from '../views/page/favorite';
import Detail from '../views/page/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
