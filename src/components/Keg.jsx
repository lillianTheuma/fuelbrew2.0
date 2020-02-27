
import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegInformation =
    <div>
      <h3>{props.name} - {props.brand}</h3>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
      <h4>{props.formattedWaitTime}</h4>
      <p>Pints Remaining: {props.pints}</p>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
