import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cart');
  }

  return (
    <nav className="navbar-expand-lg navbar bg-primary text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Redux</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to={"/cart"}>Cart</Link>
            </li>
          </ul>
          <span>
            <button type="button" className="btn btn-warning" onClick={handleNavigate}>Items : {items.length}</button>
          </span>
        </div>
      </div>
    </nav>
  )
}
