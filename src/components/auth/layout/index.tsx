import "@/styles/components/Landing.scss"

type Props = {
  children?: React.ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="container">
      <div className="columns ">
        <div className="column ">
          <figure className="image is-3by4 is-flex is-justify-content-center">
            <img
              src="https://bulma.io/images/placeholders/480x640.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="column">{children}</div>
      </div>
    </div>
  )
}
