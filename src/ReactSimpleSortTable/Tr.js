import React from 'react';

const Tr = ({ children, ...rest }) => {
  return (
    <tr {...rest}>
      {children}
    </tr>
  );
};

export default Tr;
