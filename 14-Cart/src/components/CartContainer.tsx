import { FC } from "react";
import { useGlobalContext } from "../context";
import { CartItem } from "./CartItem";


export const CartContainer: FC = () => {
    const { cart, total, clearCart } = useGlobalContext();

    if ( !cart.length ) {
        return (
            <section className="cart">
                <header>
                    <h2>Your bag</h2>
                    <h4 className="empty-cart">Is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>Your bag</h2>
            </header>

            <div>
                { cart.map( item => <CartItem key={ item.id } { ...item } /> ) }
            </div>

            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${ total }</span></h4>
                </div>

                <button className="btn clear-btn" onClick={ clearCart }>Clear cart</button>
            </footer>
        </section>
    );
};