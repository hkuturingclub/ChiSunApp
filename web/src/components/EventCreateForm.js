import { Button, DatePicker, Form, Input, } from "antd";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const EventCreateForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      description: '',
      startDate: new Date(),
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
      if (!values.startDate) {
        errors.startDate = 'Required';
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
      console.log("Submit");
      onSubmit({
        name: values.name,
        description: values.description,
        location: values.location,
        startDate: values.startDate.toISOString(),
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
        <Form.Item
          label = "Event Name"
        >
          <Input
            type="text"
            id="name"
            placeholder="Bite of Hong Kong"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name &&
          touched.name && <Form.Item extra={errors.name} color="danger"/>
          }
        </Form.Item>
          <Form.Item
            label = "Description"
          >
          <Input
            type="textarea"
            id="description"
            placeholder="This time, we are going to have the vibrant and savory Indonesian cuisines. Let’s give your taste buds a delightful kick with tasty meat skewers bathed in flavorful peanut sauce (Satay), or the famous Javanese smashed fried chicken dish, served with spicy sambal (Ayam penyet). For drink?  how about the rich and creamy combination of coconut milk, palm sugar and jelly-like green noodles (Cendol)?"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            rows={10}
          />
          {errors.description &&
            touched.description && (
            <Form.Item extra={ errors.description } color="danger" />
            )}
          </Form.Item>
            <Form.Item
              label = "Location"
            >
              <Input
                type="text"
                id="location"
                placeholder="Meet at 4/F Chi Sun Lobby"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              />
              {errors.location &&
                touched.location && (
            <Form.Item extra={ errors.location } color="danger" />
            )}
            </Form.Item>
              <Form.Item
                label = "Start Date"
              >
              <br />
              <DatePicker
                selected={values.startDate}
                onChange={value => {
                  setFieldValue('startDate', value);
                }}
                onChangeRaw={e => {
                  // This stops the user from modifying the date picker manually
                  e.preventDefault();
                }}
                showTimeSelect
                dateFormat="MMM d, yyyy h:mm aa"
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                className="form-control"
              />
              {errors.startDate &&
                touched.startDate && (
                  <Form.Item extra={ errors.startDate } color="danger" />
              )}
              </Form.Item>
                <Form.Item
                  label = "Image"
                >
          <Input
            type="file"
            id="image"
            accept="image/*"
            onChange={e => {
              setFieldValue('image', e.target.files[0]);
            }}
            onBlur={handleBlur}
          />
          {errors.image &&
            touched.image && <Form.Item extra={ errors.image } color="danger" /> }
          </Form.Item>

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
