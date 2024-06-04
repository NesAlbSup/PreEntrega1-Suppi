import './itemListContainer.css';  // Asegúrate de tener los estilos necesarios en este archivo
import gears from '../assets/work in progress.jpg';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  const defaultGreeting = "Tu web para obtener los productos que necesitas";
  const finalGreeting = greeting || defaultGreeting;

  return (
    <div className="item-list-container">
      <div className="greeting">
        {finalGreeting.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="working-notice">
        <img src={gears} alt="Working..." />
        <p>Estamos trabajando en la web para darte un mejor servicio</p>
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string
};

export default ItemListContainer;