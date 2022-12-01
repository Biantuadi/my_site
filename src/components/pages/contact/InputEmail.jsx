import Input from "../../reutisable/Input";
export default function InputEmail({ email, setEmail }) {
  return (
    <>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required={true}
      />
    </>
  );
}
