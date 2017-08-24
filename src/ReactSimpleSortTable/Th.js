import React from 'react';
import { Button, Icon } from './index';

const Th = ({ sortKey, sortDirection = 'up', sort, children, ...rest }) => {
  const handleSort = () => {
    sort(sortKey, sortDirection === 'up' ? 'down' : 'up');
  };
  return (
    <th {...rest}>
      {children}
      {sortKey && <Button onClick={handleSort}>
        <Icon name={`caret-${sortDirection}`} />
      </Button>}
    </th>
  );
};

export default Th;
