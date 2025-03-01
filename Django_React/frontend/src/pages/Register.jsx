import Form from "../components/Form";
export default function Register() {
  return <Form route="http://127.0.0.1:8000/api/user/register/" method="register" />;
}
