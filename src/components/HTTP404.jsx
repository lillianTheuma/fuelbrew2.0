import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HTTP404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <p>Would you like to return <Link to="/">home</Link></p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default HTTP404;
