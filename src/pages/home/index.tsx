import { SearchAndAddReceipe } from "@/components/searchAndAddReceipe"
import "bulma/css/bulma.css"
import { RecipesGrid } from "@/components/recipesGrid"

const Home = () => {
  return (
    <div className="container">
      <SearchAndAddReceipe />
      <RecipesGrid />
    </div>
  )
}
export default Home
