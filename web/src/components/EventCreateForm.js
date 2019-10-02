import { Button, Col, DatePicker, Form, Icon, Input, Row, TimePicker, Upload } from "antd";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const EventCreateForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      description: '',
      date: null,
      time: null,
      location: '',
      image: null
    }}
    validate={values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.description) {
        errors.description = 'Required';
      }
      if (!values.date) {
        errors.date = 'Required';
      }
      if (!values.time) {
        errors.time = 'Required';
      }
      if (!values.location) {
        errors.location = 'Required';
      }
      if (!values.image) {
        errors.image = 'Required';
      }
      return errors;
    }}

    onSubmit={(values, { setSubmitting }) => {
      const startDate = values.date.set({
        hour: values.time.get('hour'),
        minute: values.time.get('minute'),
        second: 0,
        millisecond: 0,
      }).toISOString();
      onSubmit({
        name: values.name,
        description: values.description,
        location: values.location,
        startDate,
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
              label="Event Name"
              hasFeedback={!!errors.name}
              validateStatus={touched.name && errors.name && "error"}
              help={touched.name && errors.name}
            >
              <Input
                id="name"
                placeholder="Bite of Hong Kong"
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
              validateStatus={touched.description && errors.description && "error"}
              help={touched.description && errors.description}
            >
              <Input.TextArea
                id="description"
                placeholder="This time, we are going to have the vibrant and savory Indonesian cuisines. Let’s give your taste buds a delightful kick with tasty meat skewers bathed in flavorful peanut sauce (Satay), or the famous Javanese smashed fried chicken dish, served with spicy sambal (Ayam penyet). For drink?  how about the rich and creamy combination of coconut milk, palm sugar and jelly-like green noodles (Cendol)?"
                onChange={handleChange}
                value={values.description}
                autosize={{ minRows: 10 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Location"
              hasFeedback={!!errors.location}
              validateStatus={touched.location && errors.location && "error"}
              help={touched.location && errors.location}
            >
              <Input
                id="location"
                placeholder="Meet at 4/F Chi Sun Lobby"
                onChange={handleChange}
                value={values.location}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Form.Item
              label="Date"
              hasFeedback={!!errors.date}
              validateStatus={touched.date && errors.date && "error"}
              help={touched.date && errors.date}
            >
              <DatePicker
                defaultValue={moment().set({hour:0,minute:0,second:0,millisecond:0})}
                format={'MMM DD, YYYY'}
                onChange={date => setFieldValue('date', date)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              label="Time"
              hasFeedback={!!errors.time}
              validateStatus={touched.time && errors.time && "error"}
              help={touched.time && errors.time}
            >
              <TimePicker
                defaultValue={moment().set({hour:0,minute:0,second:0,millisecond:0})}
                use12Hours
                format='h:mm a'
                minuteStep={15}
                onChange={time => setFieldValue('time', time)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              label="Poster"
              hasFeedback={!!errors.image}
              validateStatus={touched.image && errors.image && "error"}
              help={touched.image && errors.image}
            >
              <Upload
                listType= 'picture'
                accept="image/*"
                beforeUpload={file => {
                  setFieldValue('image', file);
                  return false
                }}
                onRemove={() => setFieldValue('image', null)}
              >
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Create
        </Button>
      </Form>
    )}
  </Formik>
);

EventCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default EventCreateForm;
