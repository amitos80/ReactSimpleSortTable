import React from 'react';
import classnames from 'classnames';

const Icon = ({ name, className, ...rest }) => {
  return (
    <i
      className={classnames('fa', `fa-${name}`, className)}
      {...rest}
    >
    </i>
  );
};

export default Icon;
