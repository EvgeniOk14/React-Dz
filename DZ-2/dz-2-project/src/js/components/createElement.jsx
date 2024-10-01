import '../../styles/CreateElement.css'

export const CreateElement = ({title, done, handleCheckboxChange}) =>
{
    // функция для отрисовки содержимого:
    const renderContent = () =>
    {
        return(
        <label>
            <div className="div-element">
                <div className="div-element__checkbox">
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="div-element__value">
                    <p style={{textDecoration: done ? 'line-through' : 'none'}}>{title}</p>
                </div>
            </div>
        </label>
        )
    }
    return renderContent();
}