import React from 'react';

const GroceryForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <input type="text" placeholder="name of grocery" />
      <input type="submit" value="Add to List" />
    </form>
  )
}

export default GroceryForm;
