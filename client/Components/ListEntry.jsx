import React from 'react';

const ListEntry = (props) => (
  <div onClick={() => props.click( props.listItem )}>{ props.listItem } 
  <input 
  type='submit' 
  value='delete' 
  onClick={() => props.delete( props.index )} />
  <input 
  type='submit' 
  value='edit' 
  onClick={ () => props.update( props.index )} />
  </div>
)

export default ListEntry;