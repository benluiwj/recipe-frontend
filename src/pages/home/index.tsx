import { Header } from "@/components/home/header"
import "@/styles/home/index.scss"
import "bulma/css/bulma.css"
import { Recipes } from "@/components/home/recipes"

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Recipes />
    </div>
  )
}
export default Home
