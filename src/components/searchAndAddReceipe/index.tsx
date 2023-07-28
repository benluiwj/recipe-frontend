import "@/styles/components/searchAndAddReceipe/searchAndAddReceipe.scss"

export const SearchAndAddReceipe = () => {
  return (
    <div className="columns is-mobile is-vcentered is-centered">
      <div className="column is-four-fifths-desktop is-two-thirds-mobile is-two-thirds-tablet  ">
        <p className="control">
          <input className="input" type="text" placeholder="Search" />
        </p>
      </div>
      <div className="column  is-narrow is-vcentered">
        <div className="columns is-vcentered is-mobile">
          <div className="column ">
            <button className="button is-rounded">
              <p>New Recipe</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
