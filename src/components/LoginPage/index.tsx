import { useFormik } from "formik";
import * as Yup from "yup";
const BasicForm = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "Minimum 2 Characters Required")
      .required("Required First Name"),
    lastname: Yup.string()
      .min(2, "Minimium 2 Characters Required")
      .required("Required Last Name"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email Required"),
    password: Yup.string()
      .min(6, "Password must contain 6 characters")
      .required("Password Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password do not match")
      .required("Required Confirm Password"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        console.log("Registration Successful:", values);
      },
    });

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        name="firstname" // ✅ must be here
        value={values.firstname}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="firstname"
        placeholder="Enter First Name"
      />
      {touched.firstname && errors.firstname && (
        <div className="error">{errors.firstname}</div>
      )}
      <br />
      <br />
      <label htmlFor="lastname">Last Name:</label>
      <input
        name="lastname" // ✅ must be here
        value={values.lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        id="lastname"
        placeholder="Enter Last Name"
      />
      {touched.lastname && errors.lastname && (
        <div className="error">{errors.lastname}</div>
      )}
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        name="email" // ✅ must be here
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        id="email"
        placeholder="Enter Email"
      />
      {touched.email && errors.email && (
        <div className="email">{errors.email}</div>
      )}
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        name="password" // ✅ must be here
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        id="password"
        placeholder="Enter Password"
      />
      {touched.password && errors.password && (
        <div className="password">{errors.password}</div>
      )}
      <br />
      <br />
      <label htmlFor="confirmpassword">Confirm Password:</label>
      <input
        name="confirmpassword" // ✅ must be here
        value={values.confirmpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        id="confirmpassword"
        placeholder="Password must match"
      />
      {touched.confirmpassword && errors.confirmpassword && (
        <div className="confirmpassword">{errors.confirmpassword}</div>
      )}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
