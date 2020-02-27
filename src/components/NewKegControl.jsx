import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  render(){
    return (
      <div>
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
