import React from "react";
import { Formik, 
         Form as MessageForm,
         Field as InputText, 
        } from "formik";
import { Button, InputText, MessageForm } from "../../utils/style/defaultStyles";

const Input = ({ onSendMessage }) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, actions) => {
        onSendMessage(values.message);
        actions.resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
         <Field
            type="text"
            name="message"
            placeholder="Enter your message here"
            value={values.message}
            onChange={handleChange}
          />
          <Button type="submit">Send</Button>
          </Form>
      )}
    </Formik>
  );
};

export default Input;
