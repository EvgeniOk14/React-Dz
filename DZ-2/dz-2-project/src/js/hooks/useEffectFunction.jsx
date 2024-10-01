import { useEffect } from "react";

// пользовательская функция (хук), которая следит за видимостью и фокусирует поле ввода
export const useEffectFunction = (isInputVisible, inputRef) =>
{
    useEffect(() =>
    {
        if (isInputVisible && inputRef.current)
        {
            inputRef.current.focus(); // устанавливаем фокус на поле ввода
        }
    }, [isInputVisible, inputRef]); // добавляем зависимости
};
