import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CreateUserForm = (props) => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUserData({ firstName: "", lastName: "" });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    resetForm();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormGroup>
        <Label htmlFor="firstName">First name:</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastName">Last name:</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" block outline color="primary">
          Create User
        </Button>
      </FormGroup>
    </Form>
  );
};

export default CreateUserForm;
