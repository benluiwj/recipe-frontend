import { Header } from "@/components/home/header"
import "@/styles/home/index.scss"
import "bulma/css/bulma.css"
import { RecipesGrid } from "@/components/home/recipesGrid"

const Home = () => {
  return (
    <div className="container">
      <Header />
      <RecipesGrid />
    </div>
  )
}
export default Home
