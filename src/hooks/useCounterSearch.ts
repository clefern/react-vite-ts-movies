import React from 'react'

const useCounterSearch = () => {
  const [count, setCount] = React.useState<number>(0); // Tipando como número

  const increment = () => {
    setCount(count => count + 1);
  };

  return [count, increment]
}

export default useCounterSearch