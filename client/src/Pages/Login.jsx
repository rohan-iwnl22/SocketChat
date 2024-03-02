import React from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Login
              </h2>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Control type="Password" placeholder="Enter your password" />
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Alert variant="danger">
                <p>An error occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
