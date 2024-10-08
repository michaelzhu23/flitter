import React from 'react';

const Header = () => (
  <section className='col-12 border-bottom mb-4'>
    <div className='row heading col-12 p-0 d-flex justify-content-between align-items-center'>
      <h3 className='m-0 ml-5'>
        <i className='fab fa-earlybirds text-info h1 mr-2'></i>
        <b>Flitter</b>
      </h3>
      <div className='header-icons d-flex justify-content-between align-items-end'>
        <div className='header-picture d-flex align-items-end'>
          <img
            src='./images/michael-zhu.jpg'
            alt='Logged in User'
            className='mr-1'
          />
          <h5>
            <b>Michael</b>
          </h5>
        </div>
        <i class='fas fa-home h3 text-info'></i>
        <i class='fas fa-envelope h3 text-info'></i>
        <i class='fas fa-bookmark h3 text-info'></i>
        <i class='fas fa-bell h3 text-info'></i>
        <i class='fas fa-user h3 text-info'></i>
      </div>
    </div>
  </section>
);

export default Header;
