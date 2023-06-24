/* eslint-disable react/no-unescaped-entities */
import "@/styles/components/LoginForm.scss"

export const LoginForm = () => {
  return (
    <>
      <h1 className="title is-1 has-text-weight-bold has-text-centered">
        Hi there!
      </h1>
      <h3 className="subtitle is-3  has-text-centered has-text-weight-light">
        Ready to curate your recipes?
      </h3>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Your username" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input " type="text" placeholder="Password" />
        </div>
      </div>
      <div className=" field is-grouped is-grouped-centered ">
        <div className="control  ">
          <button className="button  is-rounded ">Submit</button>
        </div>
      </div>

      <h5 className="subtitle is-5  has-text-centered has-text-weight-light">
        Don't have an account? <a> Sign up</a>
      </h5>
    </>
  )
}
