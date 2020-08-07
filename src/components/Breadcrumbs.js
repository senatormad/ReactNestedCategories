import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({ route }) => {
  if (!route.parent) return null;
  return (
    <>
      <Breadcrumbs route={route.parent} />
      <div className="item">
        {!route.routes ? (
          route.label
        ) : (
          <NavLink to={route.path}>{route.label}</NavLink>
        )}
      </div>
    </>
  );
};

export default Breadcrumbs;
