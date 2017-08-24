import React from 'react';
import classnames from 'classnames';

export default ({ children, className, ...rest }) => {
  const classes = require('./Button.scss');
  return (
    <button className={classnames(classes.Button, className)} {...rest}>
      {children}
    </button>
  );
};
