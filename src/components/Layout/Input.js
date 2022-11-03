import React from 'react';



const Input = React.forwardRef((props, ref) => {
  
  return (
      <input type="number" className="form-control"  placeholder="0" ref={ref} {...props.input}/>
  );
});

export default Input;
