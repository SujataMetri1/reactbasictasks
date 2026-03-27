// import React from 'react'

// import { useFormik } from "formik";

// function MyForm() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input
//         name="name"
//         onChange={formik.handleChange}
//         value={formik.values.name}
//       />

//       <input
//         name="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default MyForm