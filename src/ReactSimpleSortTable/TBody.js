import React from 'react';

const TBody = ({ children, ...rest }) => {
  return (
    <tbody {...rest}>
      {children}
    </tbody>
  );
};

export default TBody;
