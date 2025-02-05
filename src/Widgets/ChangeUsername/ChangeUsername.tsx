import { Button, TextField } from "ui-components_innowise";
import "./changeUsername.css";
import { useState } from "react";

const ChangeUsername = () => {
  const [username, setUsername] = useState("");

  return (
    <form className="edit-name">
      <h4>Change your username:</h4>
      <TextField
        values={username}
        onChange={setUsername}
        label="New username"
      />
      <Button classes="edit-user--btn" children={"Save"} />
    </form>
  );
};

export default ChangeUsername;
