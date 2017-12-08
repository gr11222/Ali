import React from 'react';
import propTypes from 'prop-types'

function CeshiItem({list}) {
  // console.log(list)
  return (
    <div className='ceshi'>
      {
        <li>{list.menuName}</li>
      }
    </div>
  );
}


CeshiItem.propTypes = {
  list:propTypes.object
};

export default CeshiItem;
