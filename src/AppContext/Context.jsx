import PropTypes from 'prop-types';

import { createContext } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const info = { name: 'shiham' };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
