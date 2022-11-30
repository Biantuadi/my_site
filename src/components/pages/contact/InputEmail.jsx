import Input from "../../reutisable/Input";

export default function InputEmail( {email, setEmail} ) {
  return (
    <Input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      required={true}
    />
  );
}
