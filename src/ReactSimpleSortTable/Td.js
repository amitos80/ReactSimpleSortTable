import React from 'react';

const Td = ({ value, children, sortValue, ...rest }) => {
  return (
    <td {...rest}>
      {children || value}
    </td>
  );
};

export default Td;
