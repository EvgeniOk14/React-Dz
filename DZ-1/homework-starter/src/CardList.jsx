import "./CardList.css"
import {Card} from "./Card.jsx";
import {products} from "./products.js";
export const CardList = () => {
    return(
        <div className="card-list__div" key={crypto.randomUUID()}>
                {products.map((product) => (
                <div className="term" key={product.id}>
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