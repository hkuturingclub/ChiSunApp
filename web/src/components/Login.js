import { Alert, Button, Col, Form, Icon, Input, Row } from 'antd';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import React from "react";

import { signIn } from "../actions/user";

class Login extends React.Component {
  render() {
    const { user, error } = this.props.user;
    if (user) {
      return <Redirect push to='/' />
    }

    return (
      <Row type="flex" align='middle' justify='center' style={{padding: 50}}>
        <Col span={12}>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validate={values => {
              const errors = {};

              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

              if (!values.password) {
                errors.password = 'Required';
              }

              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
              this.props.signIn(values.email, values.password);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => (
              <Form onSubmit={handleSubmit}>
                <div style={{
                  textAlign: 'center',
                  padding: 30
                }}>
                  <img
                    src="http://www.chisuncollege.hku.hk/wp-content/uploads/2016/08/CSC-Logo-Regular.png"
                    alt="Chi Sun Logo"
                    style={{
                      maxWidth: "80%"
                    }}
                  />
                </div>
                {error && <div><Alert message={error} type="error" /></div>}
                <Form.Item
                  label="Email"
                  hasFeedback={!!errors.email}
                  validateStatus={touched.email && errors.email && "error"}
                  help={touched.email && errors.email}
                >
                  <Input
                    id="email"
                    prefix={<Icon type="user"/>}
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  hasFeedback={!!errors.password}
                  validateStatus={touched.password && errors.password && "error"}
                  help={touched.password && errors.password}
                >
                  <Input
                    id="password"
                    prefix={<Icon type="lock"/>}
                    placeholder="Password"
                    type="password"
                    autoComplete="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </Form.Item>
                <Button type="primary" icon="login" htmlType="submit" disabled={isSubmitting}>
                  Log in
                </Button>
                {/*<br />*/}
                {/*Or <a href="/signup">register now!</a>*/}
              </Form>
            )}
          </Formik>
      </Col>
    </Row>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { signIn })(Login);
