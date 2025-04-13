import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

//example of a mutation to create a user

export function AddUserForm() {
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async () => {
    await createUser({
      variables: { name: "Karina", email: "karina@example.com" },
    });
  };

  return <button onClick={handleSubmit}>Add User</button>;
}
