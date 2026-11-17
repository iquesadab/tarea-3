// Header.jsx  (viene en el zip de assets)
// Barra superior con el nombre del sistema y un enlace a cada concepto.

function Header() {
  return (
    <header className="cabecera">
      <div className="marca">
        <span className="logo">MA</span>
        <strong>Mesa de ayuda · conceptos de React</strong>
      </div>
      <nav className="menu">
        <a href="#props">1</a>
        <a href="#children">2</a>
        <a href="#listas">3</a>
        <a href="#condicional">4</a>
        <a href="#eventos">5</a>
        <a href="#usestate">6</a>
        <a href="#inmutabilidad">7</a>
        <a href="#estado-elevado">8</a>
        <a href="#estado-derivado">9</a>
      </nav>
    </header>
  )
}

export default Header
