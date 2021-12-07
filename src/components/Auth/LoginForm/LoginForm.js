import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInApi } from "../../../api/auth"
import { setToken, decodeToken } from "../../../utils/token";
import useAuth from "../../../hooks/useAuth";
import "./LoginForm.scss";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not valid")
        .required("The emial is mandatory"),
      password: Yup.string().required("Password is mandatory"),
    }),
    onSubmit: async (formData) => {
      try {
        signInApi(formData).then(response => {

          setError("");
          if (response?.data.auth) {
            const token = response?.data.token;
            setToken(token);
            setUser(decodeToken(token));
            window.location.reload()
          } else {

            setError("Invalid email or password");
          }

        })

      } catch (error) {
        setError(error.message);
      }
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2  className="error">{error}</h2>
      <h2>Enter to manage your transactions.</h2>
      <Form.Input
        type="text"
        placeholder="Email address"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email && true}
      />
      <Form.Input
        type="password"
        placeholder="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password && true}
      />
      <Button type="submit" className="btn-submit">
      Log in
      </Button>
      {error && <p className="submit-error">{error}</p>}
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
