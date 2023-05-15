import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  if (!component) {
    throw new Error('component is undefined');
  }

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={component} />;
};

export default PrivateRoute;
