import { Navigate, useLocation } from 'react-router-dom';
import useAppContext from '../Hooks/useAppContext';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAppContext();
  const location = useLocation();

  if (loading) return <progress className="progress w-56" />;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
