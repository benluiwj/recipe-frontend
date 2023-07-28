import "@/styles/components/LoginForm.scss"
import Link from "next/link"

const SignUpForm = () => {
  return (
    <div className="container mx-4">
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
          <button className="button  is-rounded ">Create Account</button>
        </div>
      </div>
      <h5 className="subtitle is-5  has-text-centered has-text-weight-light">
        Already have an account? <Link href="/">Login</Link>
      </h5>
    </div>
  )
}

export default SignUpForm
