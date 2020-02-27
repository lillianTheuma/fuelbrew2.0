import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pints: 128, timeOpen: new Moment()});
    _name = "";
    _brand = "";
    _price = "";
    _alcoholContent = "";
  }

  return (
    <div>
    <form onSubmit={handleNewKegFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Keg Name'
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='brand'
    placeholder='Brand Name'
    ref={(input) => {_brand = input;}}/>
    <input
    type='number'
    id='price'
    placeholder='Cost $'
    ref={(input) => {_price = input;}}/>
    <input
    type='number'
    id='alcoholContent'
    placeholder='Alcohol Content'
    ref={(input) => {_alcoholContent = input;}}/>
    <button type='submit'>Add Keg</button>
    </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
