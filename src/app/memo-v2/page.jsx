import  { useMemo } from 'react';

// DisplayComponent
const DisplayComponent = ({ inputArray }) => {
  const transformedArray = useMemo(() => {
    // Perform heavy array transformations here
    // Example:
    console.log('transforming ...') // this will print only when data has changed
    return inputArray.map(item => item.toUpperCase());
  }, [inputArray]);

  return (
    <div>
      {transformedArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

// Usage in another component
const ParentComponent = () => {
  const myStringArray = ['hello', 'world', 'react'];

  return (
    <div>
      <DisplayComponent inputArray={myStringArray} />
    </div>
  );
};

export default ParentComponent;