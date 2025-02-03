import Header from "../Widgets/Header/Header"
import Menu from "../Widgets/Menu/Menu"

const Layout = () => {
  return (
    <div className="layout">
      <h1 className="visually-hidden">Stack Overflow</h1>
      <Header/>
      <div className="outer-wrapper">
        <Menu/>
      </div>
    </div>
  )
}

export default Layout
