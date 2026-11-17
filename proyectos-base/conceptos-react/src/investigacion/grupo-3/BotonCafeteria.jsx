// Recibe dos props: el texto del botón y la función que ejecutará.
function BotonCafeteria({ texto, alHacerClic }) {

    return (
        <button
            // Evita que el botón envíe el formulario.
            type="button"

            // Ejecuta la función recibida cuando el usuario hace clic.
            onClick={alHacerClic}
        >
            {/* Muestra el texto recibido mediante props. */}
            {texto}
        </button>
    );
}

export default BotonCafeteria;
