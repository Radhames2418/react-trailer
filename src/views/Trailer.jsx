import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Trailer() {
  return (
    <div>
      <Header />

      <div className="w-11/12 mx-auto my-10 h-screen grid grid-rows-6">
        <div className="grid grid-rows-5 row-span-5 grid-cols-12 gap-3 mb-5 ">
          <div className="bg-red-900 row-span-5 col-span-8">
            <iframe
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/4X-DHZX9L7M"}
              allow="autoplay"
            ></iframe>
          </div>
          <div className="bg-gray-50 p-5 shadow-md rounded-lg row-span-5 col-span-4">
            <h2 className="text-lg font-semibold">Comentarios</h2>
            <div className="mt-4 h-80 overflow-y-auto">
              {/* Aquí puedes agregar lógica para mostrar los comentarios */}
              <div className="mb-4 border-b-2 pb-3">
                <h3 className="text-gray-800 font-semibold">
                  @manurodriguez8725
                </h3>
                <p className="text-gray-600">
                  Este es un comentario de ejemplo. Puedes personalizar esto
                  como desees.
                </p>
              </div>

              <div className="mb-4 border-b-2 pb-3">
                <h3 className="text-gray-800 font-semibold">
                  @manurodriguez8725
                </h3>
                <p className="text-gray-600">
                  Este es un comentario de ejemplo. Puedes personalizar esto
                  como desees.
                </p>
              </div>

              <div className="mb-4 border-b-2 pb-3">
                <h3 className="text-gray-800 font-semibold">
                  @manurodriguez8725
                </h3>
                <p className="text-gray-600">
                  Este es un comentario de ejemplo. Puedes personalizar esto
                  como desees.
                </p>
              </div>

              <div className="mb-4 border-b-2 pb-3">
                <h3 className="text-gray-800 font-semibold">
                  @manurodriguez8725
                </h3>
                <p className="text-gray-600">
                  Este es un comentario de ejemplo. Puedes personalizar esto
                  como desees.
                </p>
              </div>

              <div className="mb-4 border-b-2 pb-3">
                <h3 className="text-gray-800 font-semibold">
                  @manurodriguez8725
                </h3>
                <p className="text-gray-600">
                  Este es un comentario de ejemplo. Puedes personalizar esto
                  como desees.
                </p>
              </div>

              {/* Repite este bloque para más comentarios */}
              {/* ... */}
            </div>
            <div className="mt-10">
              {/* Aquí puedes agregar un formulario para que los usuarios dejen comentarios */}
              <h3 className="text-lg font-semibold mb-2">Deja un comentario</h3>
              <form>
                <div className="mb-2">
                  <label htmlFor="comentario" className="block text-gray-600">
                    Comentario:
                  </label>
                  <textarea
                    id="comentario"
                    rows="4"
                    className="w-full border py-2 px-3 text-gray-800"
                    placeholder="Escribe tu comentario aquí"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary-600 hover:bg-primary-800 text-white w-full"
                >
                  Enviar comentario
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row-span-1">
          <p className="text-4xl font-bold">Venom</p>
          <p className="ml-4 mt-3 up text-justify text-lg">
            El periodista Eddie Brock intenta desenmascarar al genio científico
            Carlton Drake, el célebre fundador de la Fundación Vida. Mientras
            investiga uno de los experimentos de Drake, Brock establece una
            simbiosis con un ente alienígena que le ofrece superpoderes, pero el
            ser se apodera de su personalidad y lo vuelve perverso.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
