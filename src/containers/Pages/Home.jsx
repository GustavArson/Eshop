import React, { useState } from "react";
import { useSelector } from "react-redux";
//import { loadAllProducts } from "../../redux/actions/product";



function Home() {
    const { products, error} = useSelector((state) => ({
        ...state.products,
        ...state.cart,
    }));
    
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);



    const prevPage = () => {
        if (min === 0) {
            setMin(products.length - 10);
            setMax(products.length);
        } else {
            setMin(min - 10);
            setMax(max - 10);
        }
    };

    const nextPage = () => {
        if (max >= products.length) {
            setMin(0);
            setMax(10);
        } else {
            setMin(min + 10);
            setMax(max + 10);
        }
    };

    return (
        <main id="home">
            <h2>Liste des produits blablabla</h2>

            <section>

                                <h3>Ici figureront les produits</h3>



                {error?.msg ? 
                    <p>{error.msg}</p> 
                    :
                    <div>
                           <button onClick={(e) => prevPage(e)}>prev</button>
                           <span>page {(min / 10) +1}</span>
                          <button onClick={(e) => nextPage(e)}>next</button>
                    </div>    
                }
                                     
            </section>
        </main>
    );
}

export default Home;
