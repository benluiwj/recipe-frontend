import "@/styles/components/home/recipes/recipes.scss"
import { RecipeDetail } from "@/components/home/recipesGrid/recipeDetail"
import { useState } from "react"
import Pagination from "@/components/home/recipesGrid/pagination"
import {
  RECIPE_CATEGORIES,
  TEST_ARRAY,
} from "@/components/home/recipesGrid/constants"
import { RecipeDetails } from "@/types/Recipe"

export const RecipesGrid = () => {
  const [recipes, setRecipes] = useState<RecipeDetails[]>(TEST_ARRAY)
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
          <p className="header has-text-centered-mobile ">Categories</p>
        </div>
        <div className="level-right">
          <div className="level">
            <div className="level-item">
              <div className="columns is-mobile">
                {RECIPE_CATEGORIES.map((category, index) => (
                  <div key={index} className="column">
                    <p>{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-8 is-variable">
        {recipes
          .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
          .map((recipe: RecipeDetails, i) => {
            const { category, name, date, imageUrl } = recipe
            return (
              <RecipeDetail
                key={i}
                category={category}
                name={name}
                date={date}
                imageUrl={imageUrl}
              />
            )
          })}
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
