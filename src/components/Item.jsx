
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';

const Item = ({ item, onDelete, onEdit }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <div className="d-flex justify-content-end">
          <Button 
            variant="outline-primary" 
            onClick={() => onEdit(item.id)} 
            className="me-2"
          >
            Editar
          </Button>
          <Button 
            variant="outline-danger" 
            onClick={() => onDelete(item.id)}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;
