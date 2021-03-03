import React from 'react';

const getStarring = (starring) => {
  const result = [];
  starring.forEach((name) => {
    result.push(`${name},`);
    result.push(<br key={name} />);
  });
  return result;
};

export default getStarring;
