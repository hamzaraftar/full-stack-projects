import React from "react";

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleSubmit = () => {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={ (e)=>setUsername(e.target.value) } type="text" placeholder="Username" />
        <input value={password} onChange={ (e)=>setPassword(e.target.value) } type="password" placeholder="Password" />
        <input type="submit" value={'Login'} />
      </form>
    </>
  );
}
