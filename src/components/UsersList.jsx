import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UsersList = ({ users = [], deleteUserAction }) => {
  const onUserDelete = (userId) => {
    deleteUserAction(userId);
  };

  return (
    <ListGroup>
      {users.map((user) => {
        return (
          <ListGroupItem key={user.id}>
            <div className="d-flex">
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {user.firstName} {user.lastName}
              </div>
              <Button
                type="button"
                outline
                color="danger"
                onClick={() => onUserDelete(user.id)}
              >
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
