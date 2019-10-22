import React from 'react';

const Item = ({todo, index, handleRemoveClick, handleItemClick}) => (
    <div className="todo">
        <span className="" onClick={()=>handleItemClick(index)}>{todo.text}</span>
        <span className="" onClick={()=> handleRemoveClick(index)}>Remover</span>
    </div>
)

export default Item;