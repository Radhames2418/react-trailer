import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center mt-2 px-3 py-3 lg:py-0 lg:px-7">
        <img src={"/logo.jpg"} alt="Logo de la app" className="w-32 lg:w-52" />

        <nav className="hidden sm:flex justify-center gap-3">
          <Link
            className="
            -tracking-tighter 
            border-2 
            border-yellow-400 
            p-2 uppercase font-bold 
            text-sm 
            hover:bg-yellow-400 
            hover:text-white 
            cursor-pointer"
            to="/auth/login"
          >
            Inicia Sesion
          </Link>

          <Link
            className="
            -tracking-tighter 
            border-2 
            border-yellow-400 
            p-2 uppercase font-bold 
            text-sm 
            hover:bg-yellow-400 
            hover:text-white 
            cursor-pointer"
            to="/auth/registro"
          >
            Registrate
          </Link>
        </nav>

        {/* Para pantallas pequeñas */}
        <nav className="sm:hidden">
          <div className="relative">
            <button
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => {
                // Agregar lógica para mostrar el menú en pantallas pequeñas
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {/* Aquí puedes agregar el menú desplegable para pantallas pequeñas */}
          </div>
        </nav>
      </header>
    </>
  );
}
