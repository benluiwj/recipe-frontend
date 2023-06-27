import "@/styles/components/home/header/header.scss"

export const Header = () => {
  return (
    <div className="columns is-vcentered is-8 is-variable">
      <div className="column is-four-fifths">
        <p className="control">
          <input className="input" type="text" placeholder="Search" />
        </p>
      </div>
      <div className="column is-one-fifth">
        <div className="columns is-vcentered">
          <div className="column is-vcentered is-three-quarters">
            <button className="button new">
              <p>New Recipe</p>
            </button>
          </div>
          <div className="column is-vcentered is-one-quarter">
            <button className="button profile">
              <img src="" alt="p" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
