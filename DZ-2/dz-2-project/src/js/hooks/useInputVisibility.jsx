import { useState } from "react"; // импорт useState из библиотеки React

// функция смены видимости элемента (описание пользовательского хука)
export const useInputVisibility = () =>
{
    const [isInputVisible, setIsInputVisible] = useState(false); // хук для установки видимости элемента, с начальным значением false

    // функция установки значения - смена видимости элемента
    const toggleInputVisible = () =>
    {
        setIsInputVisible((previous) => !previous) // меняем значение на противоположное (true на false и наоборот)
    };

    return { isInputVisible, setIsInputVisible, toggleInputVisible }; // возвращаем объект из трёх параметров
};
