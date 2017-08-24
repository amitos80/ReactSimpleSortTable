import React from 'react';

const THead = ({ children, ...rest }) => {
  return (
    <thead {...rest}>
      {children}
    </thead>
  );
};

export default THead;
