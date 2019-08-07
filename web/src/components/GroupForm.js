import { Button, Col, Form, Icon, Input, Row, Select, Upload } from "antd";
import { Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
const { Option } = Select;

const GroupForm = ({ onSubmit, initialValues = {} }) => (
  <Formik
    initialValues={{
      name: initialValues.name || "",
      description: initialValues.description || "",
      category: initialValues.category || "",
      contact_name: initialValues.contact_name || "",
      contact_number: initialValues.contact_number || "",
      link: initialValues.link || "",
      image: initialValues.image || null
    }}
    validate={values => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.description) {
        errors.description = "Required";
      }
      if (!values.category) {
        errors.category = "Required";
      }
      if (!values.contact_name) {
        errors.contact_name = "Required";
      }
      if (!values.contact_number) {
        errors.contact_number = "Required";
      }
      if (!values.link) {
        errors.link = "Required";
      }
      if (!values.image) {
        errors.image = "Required";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      onSubmit({
        name: values.name,
        description: values.description,
        category: values.category,
        contact_name: values.contact_name,
        contact_number: values.contact_number,
        link: values.link,
        image: values.image
      });
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
      /* and other goodies */
    }) => (
      <Form onSubmit={handleSubmit}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Name"
              hasFeedback={!!errors.name}
              validateStatus={touched.name && errors.name && "error"}
              help={touched.name && errors.name}
            >
              <Input
                id="name"
                placeholder="Chi Sun Turing Club"
                onChange={handleChange}
                value={values.name}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Description"
              hasFeedback={!!errors.description}
              validateStatus={
                touched.description && errors.description && "error"
              }
              help={touched.description && errors.description}
            >
              <Input.TextArea
                id="description"
                placeholder="Chi Sun Turing Club is a technology focused student initiative at Chi Sun College of University of Hong Kong aiming to improve student life using technology."
                onChange={handleChange}
                value={values.description}
                autosize={{ minRows: 10 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={16}>
            <Form.Item
              label="Category"
              hasFeedback={!!errors.category}
              validateStatus={touched.category && errors.category && "error"}
              help={touched.category && errors.category}
            >
              <Select
                id="category"
                style={{ width: 150 }}
                onChange={value => setFieldValue("category", value)}
                value={values.category}
              >
                <Option value="Sports">Sports</Option>
                <Option value="Initiative">Initiative</Option>
                <Option value="Arts">Arts</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              label="Image"
              hasFeedback={!!errors.image}
              validateStatus={touched.image && errors.image && "error"}
              help={touched.image && errors.image}
            >
              <Upload
                listType="picture"
                accept="image/*"
                beforeUpload={file => {
                  setFieldValue("image", file);
                  return false;
                }}
                onRemove={() => setFieldValue("image", null)}
              >
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Contact Name"
              hasFeedback={!!errors.contact_name}
              validateStatus={
                touched.contact_name && errors.contact_name && "error"
              }
              help={touched.contact_name && errors.contact_name}
            >
              <Input
                id="contact_name"
                placeholder="John Doe"
                onChange={handleChange}
                value={values.contact_name}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Contact Details"
              hasFeedback={!!errors.contact_number}
              validateStatus={
                touched.contact_number && errors.contact_number && "error"
              }
              help={touched.contact_number && errors.contact_number}
            >
              <Input.TextArea
                id="contact_number"
                placeholder="Contact +852 0000 0000 or email john.doe@gmail.com"
                onChange={handleChange}
                value={values.contact_number}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Link"
              hasFeedback={!!errors.link}
              validateStatus={touched.link && errors.link && "error"}
              help={touched.link && errors.link}
            >
              <Input
                id="link"
                placeholder="https://goo.gl"
                onChange={handleChange}
                value={values.link}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

GroupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default GroupForm;
