import { RecipeDetails } from "@/types/Recipe"

export const RecipeDetail = ({
  category,
  name,
  date,
  imageUrl,
}: RecipeDetails) => {
  return (
    <div className="column is-one-third has-text-centered">
      <div
        className="container recipe"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container info">
          <p className="heading">{category}</p>
          <p className="heading">{name}</p>
          <p className="heading">{date.toDateString()}</p>
        </div>
      </div>
    </div>
  )
}
