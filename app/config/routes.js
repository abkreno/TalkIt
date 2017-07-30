// Manage routes
import React from 'react';
import Home from '../routes/Home';
import Details from '../routes/Details';

export const routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },
    };
  },
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <Details navigator={navigator} />;
      },

      getTitle() {
        return 'Details';
      },
    };
  }
};

export default routes;
