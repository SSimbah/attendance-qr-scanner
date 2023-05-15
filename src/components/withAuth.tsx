import { Redirect } from 'react-router-dom';

function withAuth(Component: any) {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  return function WrappedComponent(props: any) {
    if (token) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  };
}
