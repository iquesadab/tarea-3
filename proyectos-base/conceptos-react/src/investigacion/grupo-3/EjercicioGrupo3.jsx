import { productos } from '../data/productos';
import BotonCafeteria from './BotonCafeteria';

function EjercicioGrupo3() {

    return (
        <section>
            <h2>Pedido rápido</h2>

            {/* Evita que el formulario recargue la página al enviarse. */}
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log("Pedido enviado");
            }}>

                <h3>Productos</h3>

                {/* Recorre los productos y crea un botón para cada uno. */}
                {productos.map((producto) => (
                    <div key={producto.id}>
                        <span>{producto.nombre} </span>

                        <BotonCafeteria
                            texto="Agregar"
                            alHacerClic={() =>
                                console.log("Agregó: " + producto.nombre)
                            }
                        />
                    </div>
                ))}

                <label htmlFor="nota">Nota para la cocina:</label>

                {/* Muestra en consola lo que escribe el usuario. */}
                <input
                    id="nota"
                    type="text"
                    onChange={(event) =>
                        console.log(event.target.value)
                    }
                />

                <button type="submit">
                    Enviar pedido
                </button>

            </form>
        </section>
    );
}

export default EjercicioGrupo3;
