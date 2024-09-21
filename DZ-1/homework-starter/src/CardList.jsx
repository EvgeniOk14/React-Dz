import "./CardList.css"
import {Card} from "./Card.jsx";
import {products} from "./products.js";
export const CardList = () => {
    return(
        <div className="card-list__div" key={crypto.randomUUID()}>
                {products.map((product, index) => (
                <div className="term" key={index}>
                    <Card imageSrc={product.imageUrl}
                          title={product.title}
                          price={product.price}
                          discount={product.discount}
                    />
                </div>
                ))};
        </div>
    );
};