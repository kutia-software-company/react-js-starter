import React from "react";
import { useRegisterFormik } from "../../../lib/hooks/formik/useRegisterFormik";

//Components
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  FormFeedback,
  Button,
} from "reactstrap";

//Style
import "./RegisterForm.scss";

export interface RegisterFields {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const formik = useRegisterFormik({
    onSubmit: async (values, formikHelpers) => {},
  });
  return (
    <div className="RegisterForm">
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col xs="12" sm="6">
            <FormGroup className="form-group-custom">
              <Label for="firstName">First name</Label>
              <Input
                type="text"
                id="firstName"
                className="form-control-custom"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                invalid={!!formik.errors.firstName && formik.touched.firstName}
              />
              <FormFeedback>{formik.errors.firstName}</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12" sm="6">
            <FormGroup className="form-group-custom">
              <Label for="lastName">Last name</Label>
              <Input
                type="text"
                id="lastName"
                onChange={formik.handleChange}
                className="form-control-custom"
                value={formik.values.lastName}
                invalid={!!formik.errors.lastName && formik.touched.lastName}
              />
              <FormFeedback>{formik.errors.lastName}</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12" sm="12">
            <FormGroup className="form-group-custom">
              <Label for="dateOfBirth">Date of Birth</Label>
              <Input
                type="date"
                id="dateOfBirth"
                onChange={formik.handleChange}
                className="form-control-custom"
                value={formik.values.dateOfBirth}
                invalid={
                  !!formik.errors.dateOfBirth && formik.touched.dateOfBirth
                }
              />
              <FormFeedback>{formik.errors.dateOfBirth}</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12" sm="12">
            <FormGroup className="form-group-custom">
              <Label for="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                onChange={formik.handleChange}
                className="form-control-custom"
                value={formik.values.email}
                invalid={!!formik.errors.email && formik.touched.email}
              />
              <FormFeedback>{formik.errors.email}</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12" sm="12">
            <FormGroup className="form-group-custom">
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                onChange={formik.handleChange}
                className="form-control-custom"
                value={formik.values.password}
                invalid={!!formik.errors.password && formik.touched.password}
              />
              <FormFeedback>{formik.errors.password}</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Button
                color="secondary"
                type="submit"
                onClick={formik.submitForm}
              >
                Create Account
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
