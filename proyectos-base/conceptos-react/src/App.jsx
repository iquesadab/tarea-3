// App.jsx  (viene en el zip de assets: reemplaza al App.jsx que crea Vite)
// Cada ejemplo y ejercicio tiene dos líneas comentadas: su import y su etiqueta.
// Cuando cree el archivo del ejemplo, quite el // del import y las llaves {/* */}
// de la etiqueta para verlo en la página.

import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import EjercicioGrupo3 from './investigacion/grupo-3/EjercicioGrupo3.jsx'

// import EjemploProps from './conceptos/01-props/EjemploProps.jsx'
// import EjercicioProps from './conceptos/01-props/EjercicioProps.jsx'
// import EjemploChildren from './conceptos/02-children/EjemploChildren.jsx'
// import EjercicioChildren from './conceptos/02-children/EjercicioChildren.jsx'
// import EjemploListas from './conceptos/03-listas/EjemploListas.jsx'
// import EjercicioListas from './conceptos/03-listas/EjercicioListas.jsx'
// import EjemploCondicional from './conceptos/04-condicional/EjemploCondicional.jsx'
// import EjercicioCondicional from './conceptos/04-condicional/EjercicioCondicional.jsx'
// import EjemploClic from './conceptos/05-eventos/EjemploClic.jsx'
// import EjemploFormulario from './conceptos/05-eventos/EjemploFormulario.jsx'
// import EjemploPropFuncion from './conceptos/05-eventos/EjemploPropFuncion.jsx'
// import EjercicioEventos from './conceptos/05-eventos/EjercicioEventos.jsx'
// import EjemploContador from './conceptos/06-usestate/EjemploContador.jsx'
// import EjemploMostrar from './conceptos/06-usestate/EjemploMostrar.jsx'
// import EjemploCampo from './conceptos/06-usestate/EjemploCampo.jsx'
// import EjercicioUseState from './conceptos/06-usestate/EjercicioUseState.jsx'
// import EjemploInmutabilidad from './conceptos/07-inmutabilidad/EjemploInmutabilidad.jsx'
// import EjercicioInmutabilidad from './conceptos/07-inmutabilidad/EjercicioInmutabilidad.jsx'
// import EjemploEstadoElevado from './conceptos/08-estado-elevado/EjemploEstadoElevado.jsx'
// import EjercicioEstadoElevado from './conceptos/08-estado-elevado/EjercicioEstadoElevado.jsx'
// import EjemploEstadoDerivado from './conceptos/09-estado-derivado/EjemploEstadoDerivado.jsx'
// import EjercicioEstadoDerivado from './conceptos/09-estado-derivado/EjercicioEstadoDerivado.jsx'

function App() {
  return (
    <div className="contenedor">
      <Header />
      <main>
        <section className="seccion" id="props">
          <h2 className="titulo-seccion">1. Props</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploProps /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioProps /> */}
        </section>

        <section className="seccion" id="children">
          <h2 className="titulo-seccion">2. children</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploChildren /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioChildren /> */}
        </section>

        <section className="seccion" id="listas">
          <h2 className="titulo-seccion">3. Listas con map y key</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploListas /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioListas /> */}
        </section>

        <section className="seccion" id="condicional">
          <h2 className="titulo-seccion">4. Renderizado condicional</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploCondicional /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioCondicional /> */}
        </section>

        <section className="seccion" id="eventos">
          <h2 className="titulo-seccion">5. Eventos</h2>
          <h3 className="subtitulo">Ejercicio</h3>

          {/* <EjercicioEventos /> */}
          <EjercicioGrupo3 />
        </section>

        <section className="seccion" id="usestate">
          <h2 className="titulo-seccion">6. useState</h2>
          <h3 className="subtitulo">Ejemplo A: número</h3>
          {/* <EjemploContador /> */}
          <h3 className="subtitulo">Ejemplo B: booleano</h3>
          {/* <EjemploMostrar /> */}
          <h3 className="subtitulo">Ejemplo C: texto</h3>
          {/* <EjemploCampo /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioUseState /> */}
        </section>

        <section className="seccion" id="inmutabilidad">
          <h2 className="titulo-seccion">7. Inmutabilidad</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploInmutabilidad /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioInmutabilidad /> */}
        </section>

        <section className="seccion" id="estado-elevado">
          <h2 className="titulo-seccion">8. Estado elevado</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploEstadoElevado /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioEstadoElevado /> */}
        </section>

        <section className="seccion" id="estado-derivado">
          <h2 className="titulo-seccion">9. Estado derivado</h2>
          <h3 className="subtitulo">Ejemplo</h3>
          {/* <EjemploEstadoDerivado /> */}
          <h3 className="subtitulo">Ejercicio</h3>
          {/* <EjercicioEstadoDerivado /> */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
