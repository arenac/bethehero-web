import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

import { Item } from './styles';

function ListItem({ caseName, description, value, handleClick }) {
  return (
    <Item>
      <strong>CASE:</strong>
      <p>{caseName}</p>

      <strong>DESCRIPTION:</strong>
      <p>{description}</p>

      <strong>Value</strong>
      <p>{`$${value}`}</p>

      <button type="button" onClick={handleClick}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </Item>
  );
}

ListItem.propTypes = {
  caseName: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  caseName: '',
  description: '',
  value: 0,
};

export default ListItem;
