import React from 'react'
import mangonada from '../images/mangonada.webp'
export default function AboutPage() {
  return (
    <div>
      <main className='about-wrapper'>
        <div className='about-container'>
          <h1>About Us</h1>
          <div className='img-container'>
            <img src={mangonada} alt="mangonada" />
          </div>
          <p>
            We are an ice cream store that offers a variety of Mexican-style frozen treats, such as paletas (popsicles), bolis (ice pops), cups (fruit sorbets), and nieves (ice creams). We also have other snacks like elotes (corn on the cob), mangonadas (mango slushies with chamoy and tajin), and tostilocos (tortilla chips with toppings). We are known for our authentic flavors, natural ingredients, and affordable prices. Some of our popular flavors include queso (cheese), nuez (walnut), arroz con leche (rice pudding), and fresas con crema (strawberries and cream).
          </p>
          <h2> La Michoacana locations in Inglewood</h2>
          <ul>
            <li>
              La Michoacana Superior, located at 10901 Crenshaw Blvd.
              open from 9:00 AM to 9:00 PM on weekdays, and from 9:00 AM to 10:00 PM on weekends.
            </li>
            <li>
              La Michoacana Ricas Nieves, located at 303 W Manchester Blvd.
              Open from 10:00 AM to 10:00 PM every day.
            </li>
            <li>
              La Michoacana 2020 Antojitos, located at 11101 S Prairie Ave.
              open from 10:00 AM to 9:00 PM every day.
            </li>
          </ul>

          <p>
            If you want to learn more about La Michoacana, you can visit our Facebook page.
          </p>
        </div>
      </main>
    </div>
  )
}
