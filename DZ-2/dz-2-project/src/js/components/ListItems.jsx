import {CreateElement} from "./createElement.jsx"; // импорт создания элемента
import '../../styles/CreateList.css' // импорт css связанный с созданием списка
import {useRef} from "react" // импорт хуков из библиотеки React
import {useInputVisibility} from "../hooks/useInputVisibility.jsx"; // импорт пользовательской функции (хука) управления видимостью элемента поля ввода input
import {useInputValue} from "../hooks/useInputValue.jsx"; // импорт пользовательской функции (хука) управления значение ввода в поле ввода input
import {useSetList} from "../hooks/useSetList.jsx"; // импорт пользовательской функции (хука) управления списком товаров
import {useSetCurrentIndex} from "../hooks/useSetCurrentIndex.jsx"; // импорт пользовательской функции (хука) управления индексами товаров
import {useEffectFunction} from "../hooks/useEffectFunction.jsx"; // импорт пользовательской функции (хука) управления специальными эффектами


// функция создания списка продуктов
export const CreateList = () => {
    // описание функций (хуков):

    // встроенная функция из библиотеки React
    const inputRef = useRef(null); // функция (хук) управление ссылкой на элемент DOM

    // пользовательские функции (хуки)
    const {isInputVisible, toggleInputVisible} = useInputVisibility(); // пользовательский хук, для установки видимости элемента (поля ввода input), при нажатие на кнопку "новый элемент"
    const {inputValue, handlerSetValue, setNewValue, reset} = useInputValue(); // пользовательский хук для значения поля ввода
    const {list, handlerUsesETlIST, handlerListId} = useSetList(); // пользовательский хук для значений, добавленных пользователем
    const {currentIndex, handlerSetNewIndex} = useSetCurrentIndex(); // пользовательский хук для хранения текущего индекса


    // функция изменения состояния поля ввода:
    const handleInputChange = (event) => {
        // event.target.value - содержит текущее значение поля ввода
        handlerSetValue(event);
    }

    // обработчик события нажатия кнопки:
    const handleButtonClick = () => {

        if (inputValue.trim() !== "") // проверяем, если поле ввода input не пустое, то:
        {
            const newItem = {id: crypto.randomUUID(), title: inputValue}; // формируем новое значение списка
            handlerUsesETlIST(list, newItem) // устанавливаем с помощью функции setList в скопированный список list - новое значение newItem
            reset(); // сбросить значение в поле ввода input
            toggleInputVisible(); // cкрыть поле ввода input после добавления элемента (устанавливаем ему видимость false, т.е. скрываем поле ввода input)
        } else // если поле input пустое, то:
        {
            toggleInputVisible(); // устанавливаем видимость true для поля input, если оно скрыто (было false)
        }
    }


    // обработчик двух событий потери фокуса поля ввода input - объединяем два события в одно: 1) нет значения в поле ввода / 2) есть значение в поле ввода:
    const handleCombinedBlur = () => {
        if (inputValue.trim() === "") //  если поле ввода input - пустое, то:
        {
            toggleInputVisible(); // при потере фокуса отключаем видимость элемента поле ввода input, т.е. устанавливаем видимость элементу: setIsInputVisible(false)
        } else // если в поле ввода есть какое-либо значение, то:
        {
            reset(); // при потери фокуса сбросить значение в поле ввода input в пустую строку
        }
    };


    // onKeyDown - обработчик события нажатия клавиши клавиатуры ( 1) клавиша: "Enter", 2) клавиша: "Tab", или сочетание клавиш: "shift" + "Tab")
    const handleKeyDown = (event) =>
    {
        if (event.key === 'Enter')
        {
            handleButtonClick();
        }
        if (event.key === 'Tab') // если нажата клавиша 'Tab', то:
        {
            event.preventDefault(); // отключаем стандартное поведение при нажатие на клавишу "Tab"

            let currentTitle = ""; // инициализируем переменную для хранения заголовка

            if (event.shiftKey)  // если нажаты сочетание клавиш: 'shift' и 'Tab' одновременно, то:
            {
                if (currentIndex === 0) // если текущий индекс находиться на первом элементе (его индекс равен нулю)
                {
                    handlerSetNewIndex(list.length - 1); // если находимся на первом элементе, перемещаемся на последний
                } else // если текущий индекс не находится на первом элементе, то:
                {
                    handlerSetNewIndex(currentIndex - 1); // идём к предыдущему элементу
                }
            } else // если нажат один 'Tab', то:
            {
                if (currentIndex === list.length - 1) // если текущий индекс элемента равен значению длины списка, т.е. последнему элементу списка, то:
                {
                    handlerSetNewIndex(0); // сбрасываем текущий индекс на 0, т.к. достигли конца списка
                } else // если не достигли конца списка, то:
                {
                    handlerSetNewIndex(currentIndex + 1); // если не достигли конца списка, то идём к следующему элементу
                }
            }
            if (currentIndex >= 0 && currentIndex < list.length) // //  если индекс валиден (в пределах списка), то:
            {
                currentTitle = list[currentIndex].title; // получаем заголовок текущего элемента
            }
            setNewValue(currentTitle); // устанавливаем в поле ввода input - текущее значение из списка
        }
    }

    // следим за видимостью поля ввода и устанавливаем фокус, когда оно становится видимым
    useEffectFunction(isInputVisible, inputRef);

    return (
                <div className="div-container">

                    <div className="div-container__text">
                        <p>Список продуктов</p>
                    </div>

                    <div className="div-container__input">
                    {
                        isInputVisible && (<input className="div-container__input-input"
                            type="text" value={inputValue}    // устанавливаем значение в поле ввода input равное - inputValue
                            onChange={handleInputChange}      // обработчик события изменения в поле ввода input
                            placeholder="Введите элемент"     // устанавливаем текст подсказку в поле ввода input
                            ref={inputRef}                    // установка ссылки на элемент поле ввода input
                            onKeyDown={handleKeyDown}         // обработчик события при нажатие на клавишу
                            onBlur={handleCombinedBlur}       // объединённый обработчик событий при потери фокуса на поле ввода input
                        />)
                    }
                    </div>

                    {list.map((item) => (
                    <div className="div-container__list-item" key={item.id}>
                        <CreateElement
                            title = {item.title} // название товара - title
                            done={item.done}     //  состояние товара (done)
                            handleCheckboxChange={() => handlerListId(item.id)} // управление чекбоксами (выбран / не выбран)
                        />
                    </div>
                    ))}

                    <button className="div-container__button" type="submit" onClick={handleButtonClick}>Новый элемент</button>

                </div>
    );
}