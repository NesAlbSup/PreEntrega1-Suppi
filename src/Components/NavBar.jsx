import './NavBar.css'; 
import logo from '../assets/logo_df.jpg';  
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isCategoriasOpen, setIsCategoriasOpen] = useState(false);

  const handleProductosDropdownToggle = (e) => {
    e.preventDefault();
    setIsProductosOpen(!isProductosOpen);
    if (isProductosOpen) {
      setIsCategoriasOpen(false); 
    }
    e.stopPropagation();
  };

  const handleCategoriasDropdownToggle = (e) => {
    e.preventDefault();
    setIsCategoriasOpen(!isCategoriasOpen);
    e.stopPropagation();
  };

  const handleItemClick = (section) => {
    window.location.href = section; 
    if (isProductosOpen) {
        setIsProductosOpen(false); 
    }
  };

  const handleClickOutside = (event) => {
    if (
      productosRef.current &&
      !productosRef.current.contains(event.target)
    ) {
      setIsProductosOpen(false);
    }
    if (
      categoriasRef.current &&
      !categoriasRef.current.contains(event.target)
    ) {
      setIsCategoriasOpen(false);
    }
  };


  return (
    <div>
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-brand">Raftel Shop</div>
      <ul className="navbar-links">
      <li className={`dropdown ${isProductosOpen ? 'open' : ''}`} onClick={handleProductosDropdownToggle}>
        <button className="dropdown-toggle">Productos</button>
        <ul className="dropdown-menu">
          <li><button onClick={() => handleItemClick('#product1')}>Nuestros Productos</button></li>
          <li className={`dropdown ${isCategoriasOpen ? 'open' : ''}`} onClick={handleCategoriasDropdownToggle}>
          <button className="dropdown-toggle">Categorías</button>
          {isCategoriasOpen && (
                  <ul className="dropdown-submenu">
                    <li><button onClick={() => handleItemClick('#category1')}>Calzado Mujer</button></li>
                    <li><button onClick={() => handleItemClick('#category2')}>Calzado Hombre</button></li>
                    <li><button onClick={() => handleItemClick('#category3')}>Niños</button></li>
                  </ul>
                )}

            </li>
          <li><button onClick={() => handleItemClick('#product3')}>Proximamente</button></li>
        </ul>
      </li>
      <li><button  className="dropdown-toggle2" onClick={() => handleItemClick('#services')}>Ofertas y Promociones</button></li>
      <li><button  className="dropdown-toggle2" onClick={() => handleItemClick('#contact')}>Contacto</button></li>
    </ul>
      
      <ul className="navbar-links-left" >
        <li><button>Iniciar Sesión</button></li>
        <li><button>Registrarse</button></li>
        <a href="#cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-items">0</span> {}
        </a>
      </ul>
    <div>
    </div>  
    </nav>
  </div>
  );
};

export default NavBar;
