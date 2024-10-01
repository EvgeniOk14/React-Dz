import {useState} from "react";

export const useInputValue = (initialValue='') =>
{
    const [inputValue, setInputValue] = useState(initialValue);


    // устанавливает значение введённое пользователем в поле ввода input
    const handlerSetValue = (event) =>
    {
        setInputValue(event.target.value);
    }

    // устанавливает переданное в функцию значение newValue  в поле ввода input
    const setNewValue = (newValue) =>
    {
        setInputValue(newValue);
    }

    // обнуляет поле ввода input, сбрасывает значение inputValue (если оно есть),  в пустую строку
    const reset = () =>
    {
        setInputValue('');
    };

    return { inputValue, handlerSetValue, setNewValue, reset };
}