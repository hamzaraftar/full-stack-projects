export default function Login({ setAuth }) {
  return (
    <div>
      Login
      <button onClick={() => setAuth(true)}>Authenticated</button>
    </div>
  );
}
