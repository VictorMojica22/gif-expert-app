import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp"

export const AddCategory = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
