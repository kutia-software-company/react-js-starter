import React from "react"
import { FormGroup, Label, Form, Button } from "reactstrap"
import { useLoginFormik } from "../../../lib/hooks/formik/useLoginFormik"
import { Input } from "../../shared/Input/Input"

// import { useAuthContext } from '../../lib/context/AuthContext/AuthContext';

import * as API from "../../../api/Api"
import "./LoginForm.scss"

export const LoginForm = () => {
  // const authCtx = useAuthContext();

  const formik = useLoginFormik({
    onSubmit: async (values, formikHelpers) => {
      try {
        const res = await API.login({
          email: values.email,
          password: values.password
        })

        console.log("res", res)

        formikHelpers.resetForm()
      } catch (e) {}
    }
  })

  return (
    <div className="LoginForm">
      <Form inline onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            className="LoginForm-input"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormGroup>
        <Button type="button" color="secondary">
          Login
        </Button>
      </Form>
    </div>
  )
}
