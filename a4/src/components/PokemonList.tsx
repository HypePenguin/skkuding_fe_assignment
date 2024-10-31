import { data } from '../pokemon_data'

function PokemonList () {
  const cardList = data.map((name, index) => {
    <li key={index}>{}</li>
  })
  return (
  <>
    <header>
      <nav>
        <a href="./">
          <h1>Pokemon List</h1>
        </a>
      </nav>
    </header>
    <div className="card-wrapper">
      {
        // 이 위치에 map으로 card component 복사하는게 꿀일듯
      }
    </div>

  </>
  )
}

export default PokemonList;