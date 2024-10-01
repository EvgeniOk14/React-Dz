import {useState} from "react"; // импорт useState из библиотеки React

// функция установки текущего индекса списка товаров
export const useSetCurrentIndex = () =>
{

    const [currentIndex, setCurrentIndex] = useState(-1); // пользовательская функция (хук) управления индексами товаров

    // функция устанавливает переданный индекс в качестве текущего индекса
    const handlerSetNewIndex = (index) =>
    {
        setCurrentIndex(index);
    }

    return {currentIndex, handlerSetNewIndex};
}