import "@/styles/components/home/recipes/recipes.scss"
import { Recipe } from "@/components/home/recipes/recipe"
import { useState } from "react"
import Pagination from "@/components/home/recipes/pagination"

const test = [
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category2",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category3",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category4",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category5",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category6",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category7",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category7",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
  {
    category: "Category7",
    name: "Recipe Name",
    date: new Date(),
    image: "https://bulma.io/images/placeholders/480x640.png",
  },
]
export const Recipes = () => {
  const [recipes, setRecipes] = useState(test)
  const [page, setPage] = useState(0) // 0 indexed
  const PAGE_SIZE = 9
  const MAX_PAGE = Math.ceil(recipes.length / PAGE_SIZE) // not 0 indexed
  const selectPage = (pageNo: number) => {
    setPage(pageNo - 1)
  }
  const handleNext = () => {
    if (page + 1 >= MAX_PAGE) {
      return
    }
    setPage((prevState) => prevState + 1)
  }
  const handlePrev = () => {
    if (page - 1 < 0) {
      return
    }
    setPage((prevState) => prevState - 1)
  }
  return (
    <>
      <div className="level wrapper">
        <div className="level-left">
          <p className="header">Categories</p>
        </div>
        <div className="level-right">
          <div className="level">
            <div className="level-item">
              <p>All</p>
            </div>
            <div className="level-item">
              <p>Cakes</p>
            </div>
            <div className="level-item">
              <p>Bread</p>
            </div>
            <div className="level-item">
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-8 is-variable">
        {recipes
          .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
          .map((recipe, i) => (
            <Recipe
              key={i}
              category={recipe.category}
              name={recipe.name}
              date={recipe.date}
              image={recipe.image}
            />
          ))}
      </div>
      <Pagination
        pageNo={page + 1}
        maxPage={MAX_PAGE}
        selectPage={selectPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  )
}
