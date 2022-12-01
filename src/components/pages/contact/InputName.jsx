import Input from "../../reutisable/Input";

export default function InputName({ name, setName }) {
  return (
    <Input
      type="name"
      id="name"
      name="name"
      placeholder="Nom"
      onChange={(e) => setName(e.target.value)}
      value={name}
      required={true}
    />
  );
}
