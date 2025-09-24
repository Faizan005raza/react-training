import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: typeof initialValues, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Register</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form style={styles.form}>
              <div style={styles.fieldWrapper}>
                <label>First Name</label>
                <Field type="text" name="firstName" style={styles.input} />
              </div>

              <div style={styles.fieldWrapper}>
                <label>Last Name</label>
                <Field type="text" name="lastName" style={styles.input} />
                {/* <ErrorMessage name="lastName" component="div" style={styles.error} /> */}
              </div>

              <div style={styles.fieldWrapper}>
                <label>Email</label>
                <Field type="email" name="email" style={styles.input} />
                {/* <ErrorMessage name="email" component="div" style={styles.error} /> */}
              </div>

              <div style={styles.fieldWrapper}>
                <label>Password</label>
                <Field type="password" name="password" style={styles.input} />
                {/* <ErrorMessage name="password" component="div" style={styles.error} /> */}
              </div>

              <div style={styles.fieldWrapper}>
                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" style={styles.input} />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                //   style={styles.error}
                />
              </div>

              <button type="submit" disabled={isSubmitting} style={styles.button}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f7f2f7ff",
  },
  container: {
    backgroundColor: "#fafafaff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#3583d6ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Register;
