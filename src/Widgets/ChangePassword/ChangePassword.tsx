import { Button, TextField } from "ui-components_innowise";
import "./changePassword.css";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");

  return (
    <form className="edit-password">
      <h4>Change your password:</h4>
      <TextField
        onChange={setPassword}
        values={password}
        type="password"
        label="Old password"
      />
      <TextField
        onChange={setPassword}
        values={password}
        type="password"
        label="New password"
      />
      <TextField
        onChange={setPassword}
        values={password}
        type="password"
        label="Confirm password"
      />
      <Button classes="edit-user--btn" children={"Change password"} />
    </form>
  );
};

export default ChangePassword;
