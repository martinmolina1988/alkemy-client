import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";
import { signUpApi } from "../../../api/auth";

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required("Your name is required"),
      
      email: Yup.string()
        .email("The email is not valid")
        .required("Email is required"),
      password: Yup.string()
        .required("The password is required")
        .oneOf([Yup.ref("repeatPassword")], "Passwords are not the same"),
      repeatPassword: Yup.string()
        .required("The password is required")
        .oneOf([Yup.ref("password")], "Passwords are not the same"),
    }),
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.repeatPassword;
        signUpApi(newUser).then(result=>{
        })
      
        setShowLogin(true);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title">
      Sign up to manage your transactions.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Name and surname"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />
        
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
        <Form.Input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword && true}
        />
        <Button type="submit" className="btn-submit">
          Sign up
        </Button>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
