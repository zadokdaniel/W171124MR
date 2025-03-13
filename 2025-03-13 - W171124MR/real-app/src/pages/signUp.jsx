
import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";

function SignUp() {
  return (
    <div className="container">
      <PageHeader title="Sign Up" description="Sign up with a new account" />

      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <form>
            <Input
              type="text"
              name="name"
              label="Name"
              placeholder="John Doe"
              required
            />
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="john@doe.com"
              required
            />
            <Input type="password" name="password" label="Password" required />

            <div className="my-2">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
