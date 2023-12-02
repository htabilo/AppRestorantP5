// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MenuBtn } from '../Components/MenuBtn';
import "./home.css";
import AboutImg from '../assets/img/restaurante.webp';
import { Link } from 'react-router-dom';
import { ImgGallery } from '../Components/ImgGallery';
import { ContactInfo } from '../Components/ContactInfo';
//import { ContactImage } from '../assets/img/icono.png'



export const Home = () => {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
              <h2 className ='mb-0 text-black fw-bold'>Welcome to</h2>
              <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>
               
                React Restorant
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-50' alt="about img" /> 
          </div>
        </div>
        <div className='col-lg-6 d-flex flex-column aling-items-center justify-content-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore facere asperiores numquam eos fuga accusamus non, rerum distinctio est inventore accusantium laborum obcaecati nobis, saepe ex quas repellat, quod ipsam.</p>
        <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt adipisci culpa, totam tempora deleniti delectus nostrum facilis earum sed, perspiciatis quod pariatur. Delectus, provident consequuntur? In, minima doloremque? Possimus, nulla!</p>
        <Link to="/about">
          <button type='button' className='btn btn-outline-success btn-lg'>More about Us</button>
        </Link>
        </div>
      </div>
      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Our Fvorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-lg-0'>
              <h3 className='fs-2 mb-5'>Drinks</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>
                    Coffee </p>
                    <p className='fs-3 mx-2 text-success fw-nold'> E12</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>
                    Juice </p>
                    <p className='fs-3 mx-2 text-success fw-nold'> E1</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>
                    Spirits</p>
                    <p className='fs-3 mx-2 text-success fw-nold'> E5</p>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        <div>
            MenuBtn
          </div>
      </div>
      <ImgGallery/>
      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                <ContactInfo/>               
                </div> 

                <div>
               
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}


