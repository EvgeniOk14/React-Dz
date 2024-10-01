import {useState} from "react";

// пользовательская функция, управляющая состоянием списка товаров
export  const useSetList = () =>
{
    const [list, setList] = useState([]); // пользовательская функция (хук), управляющая состоянием списка товаров

    // функция записи нового продукта в список продуктов
    const handlerUsesETlIST = (list, newItem) =>
    {
        setList([...list, newItem]);
    }

    // функция установки значение done при выборе чекбокса (перечеркнутый при выборе товара и обычный когда не выбран товар)
    const handlerListId = (id) =>
    {
       setList(list.map(item => item.id === id ? { ...item, done: !item.done } : item));
    }

    // функция обновления (редактирования) товара в списке
    const updateTitle = (id, newTitle) =>
    {
        setList(list.map(item => item.id === id ? { ...item, title: newTitle } : item ));
    }

    return {list, handlerUsesETlIST, handlerListId, updateTitle};
}