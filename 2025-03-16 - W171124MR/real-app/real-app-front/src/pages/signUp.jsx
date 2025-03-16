import { useFormik } from "formik";
import Joi from "joi";

import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import httpService from "../services/httpService";
import usersService from "../services/usersService";

function SignUp() {
  const { getFieldProps, handleSubmit, touched, errors, isValid } = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        name: Joi.string().min(2).max(255).required().label("Name"),
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: false })
          .label("Email"),
        password: Joi.string().min(6).max(1024).required().label("Password"),
      });

      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }

      return errors;
    },
    onSubmit: (values) => {
      usersService.createUser();
      console.log("submit", values);
    },
  });

  return (
    <div className="container">
      <PageHeader title="Sign Up" description="Sign up with a new account" />

      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Input
              {...getFieldProps("name")}
              error={touched.name && errors.name}
              type="text"
              label="Name"
              placeholder="John Doe"
              required
            />
            <Input
              {...getFieldProps("email")}
              error={touched.email && errors.email}
              type="email"
              label="Email"
              placeholder="john@doe.com"
              required
            />
            <Input
              {...getFieldProps("password")}
              error={touched.password && errors.password}
              type="password"
              label="Password"
              required
            />

            <div className="my-2">
              <button
                disabled={!isValid}
                type="submit"
                className="btn btn-primary"
              >
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
