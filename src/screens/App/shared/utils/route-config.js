import App from 'screens/App';

const AppRouteConfig = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: '*',
      component: App,
      name: 'default',
    },
  ],
};

export default AppRouteConfig;
