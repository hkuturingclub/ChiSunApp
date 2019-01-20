import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
        <FormGroup>
          <Label for="name">Event Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Bite of Hong Kong"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name &&
            touched.name && <FormText color="danger">{errors.name}</FormText>}
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
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
              <FormText color="danger">{errors.description}</FormText>
            )}
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label for="location">Location</Label>
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
                  <FormText color="danger">{errors.location}</FormText>
                )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="startTime">Start Time</Label>
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
                  <FormText color="danger">{errors.startDate}</FormText>
                )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="image">Image</Label>
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
            touched.image && <FormText color="danger">{errors.image}</FormText>}
        </FormGroup>
        <Button type="submit" disabled={isSubmitting}>
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
