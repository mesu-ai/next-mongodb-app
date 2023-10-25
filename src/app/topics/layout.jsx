import React from 'react';

const TopicLayout = ({modal,children}) => {
  return (
    <div>
      {modal}
      {children}
      
    </div>
  );
};

export default TopicLayout;