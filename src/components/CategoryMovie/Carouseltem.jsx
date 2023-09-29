import PropTypes from 'prop-types';
export default function Carouseltem({ imagen }) {
  return (
    <>
      <div className="border-2 p-1 h-52 mx-2 cursor-pointer transform transition-transform hover:scale-110">
        <img className="h-full w-full object-cover" src={imagen} alt="imagen pelicula" />
      </div>
    </>
  )
}

Carouseltem.propTypes = {
  imagen: PropTypes.string.isRequired
};
