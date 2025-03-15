
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';

const ItemList = ({ items, onDeleteItem, onEditItem }) => {
  if (items.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No hay artículos para mostrar.
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {items.map(item => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <Item 
              item={item} 
              onDelete={onDeleteItem} 
              onEdit={onEditItem} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;