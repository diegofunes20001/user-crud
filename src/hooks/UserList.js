import React from 'react';
import Button from '../components/Button';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-md-4 mb-4">
          <div className="card">
            <img src={user.avatar} className="card-img-top" alt={user.name} />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.email}</p>
              <div className="d-flex gap-2">
                <Button variant="warning" onClick={() => onEdit(user)}><i className="fa-duotone fa-regular fa-pen-to-square"/> Editar</Button>
                <Button variant="danger" onClick={() => onDelete(user.id)}><i className="fa-duotone fa-solid fa-trash"/> Eliminar</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
