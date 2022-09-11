
import { useState } from 'react';


export const AddCategory = ( { onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ( event ) => {
      setInputValue( event.target.value);
      //console.log( event.target.value);
  }

  const onSubmit = ( event ) => {
    
    if ( inputValue.trim().length <= 1) return;
    
    event.preventDefault();
    
    //setCategories ( categories => [inputValue,...categories]);
    onNewCategory ( inputValue.trim())
    setInputValue('');
    //console.log( inputValue );
  }
   return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange (event) }
                onChange={ onInputChange }
            />
        </form>
    //<div>AddCategory</div>
  )
}
