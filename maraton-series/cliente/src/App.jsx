// App.jsx
// Arma el tablero con los componentes y los datos del club.

// IMPORTACIÓN DE REACT
import { useState } from 'react'

import { ESTADOS, seriesIniciales } from './data/series.js'

import { siguienteEstado } from './utils/series.js'
import Pagina from './componentes/layout/Pagina.jsx'
import Panel from './componentes/comunes/Panel.jsx'
import ListaSeries from './componentes/series/ListaSeries.jsx'

import Resumen from './componentes/resumen/Resumen.jsx'

import FormularioSerie from './componentes/formulario/FormularioSerie.jsx'

import Filtros from './componentes/filtros/Filtros.jsx'


function App() {
  // useState(seriesIniciales) = Crea el estado, iniciando con las 5 series
  // series = El valor actual del estado, se muestra el arreglo de series
  // setSeries = La función para cambiarlo
  // const [... , ...] = useState devuelve dos cosas en un arreglo
  const [series, setSeries] = useState(seriesIniciales)

  const [filtroEstado, setFiltroEstado] = useState('Todos')
  const [filtroMiembro, setFiltroMiembro] = useState('Todos')

  const visibles = series.filter(
    (serie) =>
      (filtroEstado === 'Todos' || serie.estado === filtroEstado) &&
      (filtroMiembro === 'Todos' || serie.miembro === filtroMiembro)
  )

  const conteos = ESTADOS.map((estado) => ({
    estado: estado,
    cantidad: series.filter((serie) => serie.estado === estado).length,
  }))

  function agregar(datos) {
    const nueva = { ...datos, id: Date.now(), estado: 'Por ver' }
    setSeries([...series, nueva])
  }

  // series.map((serie) => …) = Recorre las series y arma un arreglo nuevo del mismo tamaño
  // serie.id === id ? … : serie = Si es la serie tocada, devuelve una versión cambiada (lo que va después del ?). Si no, devuelve la misma serie (lo que va después del :)
  // { ...serie, … } = Crea un objeto nuevo con una copia de todas las propiedades de la serie
  // estado: siguienteEstado(serie.estado) = Después de copiar, cambia solo el estado por el siguiente
  // setSeries(nuevas) = Cambia el estado por el arreglo nuevo y React redibuja.
  function avanzar(id) {
    const nuevas = series.map((serie) =>
      serie.id === id ? { ...serie, estado: siguienteEstado(serie.estado) } :
        serie
    )
    setSeries(nuevas)
  }


  // Cambiamos la funcion quitar
  function quitar(id) {
    const nuevas = series.filter((serie) => serie.id !== id)
    setSeries(nuevas)
  }

  return (
    <Pagina>
      <div className="row g-4">
        <div className="col-lg-8">
          <Panel titulo="Filtros">
            <Filtros
              estado={filtroEstado}
              miembro={filtroMiembro}
              onCambiarEstado={setFiltroEstado}
              onCambiarMiembro={setFiltroMiembro}
            />
          </Panel>
          <Panel titulo={`Series del club (${visibles.length})`}>
            <ListaSeries series={visibles} onAvanzar={avanzar} onQuitar={quitar} />
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel titulo="Resumen">
            <Resumen conteos={conteos} />
          </Panel>
          <Panel titulo="Agregar una serie">
            <FormularioSerie onAgregar={agregar} />
          </Panel>
        </div>
      </div>
    </Pagina>
  )

}

export default App