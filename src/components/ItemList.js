import React from 'react'
import Card from './Card'
import img2 from "../images/tostilocos.webp";
import img3 from "../images/mangonadas.webp";
import img4 from "../images/popsicles.webp";

export default function ItemList() {
    return (
        <section className="menu-items-wrapper">
            <h1 className="title">Menu</h1>
            <div className="itemlist-container">
                <Card image={img2} text="nachos" price="$4.49" description="Nachos with cheese and japalapenos" alt="Nachos with Cheese"/>
                <Card image={img3} text="mango" price="$12.49" description="Drink with mango icecream and chamoy" alt="Mango drink"/>
                <Card image={img4} text="popsicle" price="$8.49" description="Lemon popsicle" alt="Popsticle"/>
            </div>
        </section>
    )
}
