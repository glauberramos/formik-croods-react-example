import React from "react";
import { New } from "croods";
import { Formik } from "formik";

export default () => {
  const validate = values => {
    let errors = {};

    if (!values.title) {
      errors.title = "Required";
    }

    return errors;
  };

  return (
    <New
      name="todos"
      render={({ create }) => (
        <Formik
          initialValues={{ title: "" }}
          validate={validate}
          onSubmit={values => {
            create({
              title: values.title
            });
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                id="title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p>{errors.title && touched.title && errors.title}</p>
              <button type="submit">Submit</button>
            </form>
          )}
        />
      )}
      renderCreated={() => window.location.reload()}
    />
  );
};
