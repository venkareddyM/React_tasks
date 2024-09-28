import { useState } from 'react';
import './Parent.css';
import Child from './Child';

function Parent() {

  const [data, setData] = useState({
    name: '',
    password: ''
  })

  const [error, setError] = useState({
    name: '',
    password: ""
  })

  const handleChange = ((e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  })

  const handleSubmit = ((e) => {
    e.preventDefault();
    // Basic validation
    let validationError = {}
    if (!data.name) {
      validationError.name = 'Name is required';
    }
    if (!data.password) {
      validationError.password = 'Password is required';
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      console.log('Form has errors. Please fix them.');
    } else {
      console.log('Form submitted:', data);
      // Reset form fields after successful submission if needed
      setData({ name: '', password: '' });
      setError({ name: '', password: '' });
    }
  })

  return (
    <div className="App">
      <h1>Login Page</h1>
      <Child
        data={data}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Parent;