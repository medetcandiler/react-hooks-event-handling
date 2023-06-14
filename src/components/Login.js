import React, { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [data, setData] = useState([]);

  console.log(input)
  console.log(data)

  function handleSubmit(event) {
    event.preventDefault();
    if (input.username && input.password) {
      setData(prev => [...prev, input])
    } else {
      return undefined
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username"
          onChange={handleChange} placeholder="Enter username..." />
        <input onChange={handleChange} type="password" name="password" placeholder="Enter password..." />
        <button type="submit">Login</button>
      </form>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            UserName:{item.username}
            Password:{item.password}
          </div>
        ))}
      </div>
    </>
  );
}

export default Login;
