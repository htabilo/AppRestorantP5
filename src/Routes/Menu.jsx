// eslint-disable-next-line no-unused-vars
import React from 'react'
import './menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../assets/img/Savoy-Interior-7.jpeg';
import Lunchimg from '../assets/img/icono.png';
import DinnerImg from '../assets/img/icono.png';
import DessertImg from '../assets/img/icono.png';
// Elimina esta línea si no estás utilizando Input en tu código

const breakfast = [
  {
    id: 1,
    name: 'English Breaksfast',
    description: 'smoked bacon, sausage, tomato, mushrooms, blak pudding, baked beans, eggs',
    price: 'E12'
  },
  {
    id: 2,
    name: 'Taco Mexicano',
    description: 'smoked bacon, sausage, tomato, mushrooms, blak pudding, baked beans, eggs',
    price: 'E12'

  },
  {

    id: 3,
    name: 'Avocado Toast',
    description: 'smoked bacon, sausage, tomato, mushrooms, blak pudding, baked beans, eggs',
    price: 'E12'

  }

]

const lunch = [
  {
    id: 1,
    name: 'Caesar Salad',
    description: 'chicken breast, romaine lettuce',
    price: 'E12'

  },
  {
    id: 2,
    name: 'spaghetti, pancetta',
    description: 'smoked bacon, sausage, tomato, mushrooms, blak pudding, baked beans, eggs',
    price: 'E12'
  },
  {

    id: 3,
    name: 'Pizza',
    description: 'chorizo, italian salami, tomatoes',
    price: 'E12'

  }

];

const dinner = [
  {
    id: 1,
    name: 'Spicy Beef',
    description: 'spicy beef, potatoes, carrots, chesse',
    price: 'E17'
  },
  {
    id: 2,
    name: 'spaghetti, pancetta',
    description: 'onion, carrot, celery',
    price: 'E15'
  },
  {

    id: 3,
    name: 'Chickpea Curry',
    description: 'onion, chickpea, garlic, mushrooms',
    price: 'E12'
  }
];

const dessert = [
  {
    id: 1,
    name: 'Lemon Cake',
    description: 'flour, sugar backing powder, lemon',
    price: 'E19'
  },
  {
    id: 2,
    name: 'Clinnamon Rolls',
    description: 'flour, salt, sugar',
    price: 'E11'
  },
  {
    id: 3,
    name: 'Chickpea Curry',
    description: 'flour, sugar, baking powder',
    price: 'E8'
  }
];

export const Menu = () => {
   (
  <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'> Menu </h1>
        </div>
      </header>
    
      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>

            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'>
                        {breakfast.name}
                      </CardTitle>

                      <CardText className='text-center fs-5'>
                        {breakfast.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    <div className='dinner my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>

            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'>
                        {dinner.name}
                      </CardTitle>

                      <CardText className='text-center fs-5'>
                        {dinner.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dinner.price}
                      </CardText>


                    </CardBody>
                  </Card>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div> 


        <div className='dessert bg-dark text-light py-5'>
          <div className='container'>
            <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
            <div className='row flex-column-reverse flex-lg-row'>
              <div className='col-lg-6 d-flex justify-content-center'>
                <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>

              <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {dessert.map((dessert) => (
                  <div key={dessert.id}>
                    <Card className='border-0'>
                      <CardBody>
                        <CardTitle className='text-center fs-3'>
                          {dessert.name}
                        </CardTitle>

                        <CardText className='text-center fs-5'>
                          {dessert.description}
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success'>
                          {dessert.price}
                        </CardText>


                      </CardBody>
                    </Card>
                  </div>
                ))}

              </div>
              <div className='col-lg-6 d-flex justify-content-center'>
          <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                    </div> {/* Cierre del div que falta */}

            </div>
          </div>
        </div>




        <div className='lunch bg-dark text-light py-5'>
          <div className='container'>
            <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
            <div className='row flex-column-reverse flex-lg-row'>
              <div className='col-lg-6 d-flex justify-content-center'>
                <img src={Lunchimg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
              </div>

              <div className='col-lg-6 d-flex flex-column justify-content-around'>
                {lunch.map((lunch) => (
                  <div key={lunch.id}>
                    <Card className='border-0'>
                      <CardBody>
                        <CardTitle className='text-center fs-3'>
                          {lunch.name}
                        </CardTitle>

                        <CardText className='text-center fs-5'>
                          {lunch.description}
                        </CardText>
                        <CardText className='text-center fs-3 fw-bold text-success'>
                          {lunch.price}
                       
                        </CardText>


                      </CardBody>
                    </Card>
                  </div>
                ))}

              </div>
              <div className='col-lg-6 d-flex justify-content-center'>
          <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
                    </div> {/* Cierre del div que falta */}

            </div>
          </div>
        </div>
        </div>
         );
  }
      export default  Menu;






