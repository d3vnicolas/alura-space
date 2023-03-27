import imgLogo from "../../assets/logo.png"
import imgSearch from "../../assets/search.png"

export default function Header() {
  return (
    <header>
      <img src={imgLogo} alt="Logo alura space" className="" />
      <div>
        <input type="search" placeholder="O que você procura?" />
        <img src={imgSearch} alt="Ícone de busca" />
      </div>
    </header>
  )
}
