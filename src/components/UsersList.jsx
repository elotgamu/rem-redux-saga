import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UsersList = ({ users = [] }) => {
  return (
    <ListGroup>
      {users.map((user) => {
        return (
          <ListGroupItem key={user.id}>
            <div className="d-flex">
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {user.firstName} {user.lastName}
              </div>
              <Button outline color="danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UsersList;
