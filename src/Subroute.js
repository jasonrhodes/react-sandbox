import React from 'react';
import { Route, withRouter } from 'react-router-dom';

function Subroute({ match, path, ...props }) {
  return <Route path={match.url + path} {...props} />;
}

export default withRouter(Subroute);