import "@/styles/components/home/recipes/recipes.scss"
interface Recipe {
    category: string,
    name: string,
    date: Date,
    image: string
}
export const Recipe = ({category, name, date, image} : Recipe) => {
    return (
        <div className="column is-one-third has-text-centered">
            <div className="container recipe" style={{backgroundImage: `url(${image})`}}>
                <div className="container info">
                    <p className="heading">{category}</p>
                    <p className="heading">{name}</p>
                    <p className="heading">{date.toDateString()}</p>
                </div>
            </div>
        </div>
    )
}
