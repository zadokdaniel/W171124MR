import { useState } from "react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router";
import Joi from "joi";

import { useAuth } from "../context/auth.context";
import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";

function SignIn() {
  const [serverError, setServerError] = useState("");

  const { login, user } = useAuth();

  const navigate = useNavigate();

  const { getFieldProps, handleSubmit, touched, errors, isValid } = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
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
    onSubmit: async (values) => {
      try {
        await login(values);
        navigate("/");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <PageHeader title="Sign In" description="Sign in with your account" />

      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {serverError && (
              <div className="alert alert-danger">{serverError}</div>
            )}

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
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
