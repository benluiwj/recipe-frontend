import { SearchAndAddReceipe } from "@/components/home/searchAndAddReceipe"
import "@/styles/home/index.scss"
import "bulma/css/bulma.css"
import { RecipesGrid } from "@/components/home/recipesGrid"

const Home = () => {
  return (
    <div className="container">
      <SearchAndAddReceipe />
      <RecipesGrid />
    </div>
  )
}
export default Home
