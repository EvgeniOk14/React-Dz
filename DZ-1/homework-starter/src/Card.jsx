import "./Card.css";

// функция Card - карточка, передаём данные
export const Card = ({ imageSrc, title, price, discount }) => {

    /* вводим параметр скидки discountPrice и рассчитываем его: */
    const discountPrice = discount ? (price - (price * discount)).toFixed(2) : null;
    return (

        <div className="card">

            <img src={imageSrc} alt="Изображение" />

                {discountPrice ? (
                        <div className="price-conteiner">
                            <div className="price-container__discount">
                                <p className="discount-price">{discountPrice} ₽</p>
                            </div>
                            <div className="price-container__underlined-price">
                                <p className="old-price"><s>{price} ₽</s></p>
                            </div>
                        </div>
                        ) : (
                        <div className="price-container__price">
                            <p className="old-price">{price} ₽</p>
                        </div>
                      )}


                <h2 className="text">{title}</h2>

        </div>
    );
};