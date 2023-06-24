import "@/styles/components/Landing.scss"
import { LoginForm } from "./loginForm"

export const Landing = () => {
  return (
    <div className="container">
      <div className="columns ">
        <div className="column ">
          <figure className="image is-3by4 	">
            <img
              src="https://bulma.io/images/placeholders/480x640.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="column">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
