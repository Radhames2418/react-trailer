import PropTypes from "prop-types";

export default function ButtonRedSocial({ children, enlace }) {
  return (
    <a
      className="menu-redes__enlace hover:bg-yellow-400 p-1 rounded-full hover:text-white"
      rel="noopener noreferrer"
      target="_blank"
      href={enlace}
    >
      {children}
    </a>
  );
}

ButtonRedSocial.propTypes = {
  enlace: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
