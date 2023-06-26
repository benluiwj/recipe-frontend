import "@/styles/components/home/recipes.scss"
const test = [
    {category: "Category", name: "Recipe Name", date: new Date(), image: "https://bulma.io/images/placeholders/480x640.png"},
    {category: "Category", name: "Recipe Name", date: new Date(), image: "https://bulma.io/images/placeholders/480x640.png"},
    {category: "Category", name: "Recipe Name", date: new Date(), image: "https://bulma.io/images/placeholders/480x640.png"},
    {category: "Category", name: "Recipe Name", date: new Date(), image: "https://bulma.io/images/placeholders/480x640.png"},
]
export const Recipes = () => {
    interface Recipe {
        category: string,
        name: string,
        date: Date,
        image: string
    }
    const Recipe = ({category, name, date, image} : Recipe) => {
        return (
            <div className="column is-one-third has-text-centered">
                <div className="container" style={{
                    backgroundImage: `url(${image})`, backgroundPosition: "center", height: "400px",
                    backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "20px", position: "relative"
                }}>
                    <div className="container" style={{position: "absolute", bottom: "20px", left: "0", width: "100%", color:"white"}}>
                        <p className="heading">{category}</p>
                        <p className="heading">{name}</p>
                        <p className="heading">{date.toDateString()}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="level" style={{borderBottom: "1px solid grey", padding: "10px"}}>
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
                {test.map((recipe, i) =>
                    <Recipe
                        key={i}
                        category={recipe.category}
                        name={recipe.name}
                        date={recipe.date}
                        image={recipe.image} />)
                }
            </div>
        </>
    )
}