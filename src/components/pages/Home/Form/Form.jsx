import React, { Fragment } from 'react';
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import "./Form.css";
import { userSchema } from "../../../../validations/userRegister";

export const Formulario = () => {
  const enviarForm = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Typography color="primary" variant="h2" textAlign={"center"}>
        Completa el Formulario
      </Typography>
      <hr />
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
        }}
        validationSchema={userSchema}   >
        {({ errors, handleChange, handleBlur, touched, setFieldValue, values, isValid, dirty }) => {
          return (
            <>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-evenly"}
                spacing={1}
                sx={{ width: "100%" }}
              >
                <Grid item xs={12} md={8}>
                  <TextField
                    id="nombre"
                    name="nombre"
                    onChange={e => setFieldValue('nombre', e.target.value)}
                    label="Nombre"
                    type='text'
                    onBlur={handleBlur}
                    variant={"filled"}
                    error={!!(errors.nombre && touched.nombre)}
                    helperText={errors.nombre}
                    success={values.apellido && !errors.apellido ? 'Válido' : ''} />
                </Grid>

                <Grid item xs={12} md={8}>
                  <TextField
                    id="apellido"
                    name="apellido"
                    onChange={e => setFieldValue('apellido', e.target.value)}
                    label="Apellido"
                    helperText={errors.apellido}
                    type='text'
                    onBlur={handleBlur}
                    variant={"filled"}
                    error={!!(errors.apellido && touched.apellido)}
                    success={values.apellido && !errors.apellido ? 'Válido' : ''} />
                </Grid>

                <Grid item xs={12} md={8}>
                  <TextField
                    id="email"
                    name="email"
                    onChange={e => setFieldValue('email', e.target.value)}
                    label="email"
                    helperText={errors.email}
                    type='text'
                    onBlur={handleBlur}
                    variant={"filled"}
                    error={!!(errors.email && touched.email)}
                    success={values.apellido && !errors.apellido ? 'Válido' : ''} />
                </Grid>

                <Grid item xs={12} md={8}>
                  <TextField
                    id="telefono"
                    name="telefono"
                    onChange={e => setFieldValue('telefono', e.target.value)}
                    label="telefono"
                    helperText={errors.telefono}
                    type='text'
                    onBlur={handleBlur}
                    variant={"filled"}
                    error={!!(errors.numero && touched.numero)}
                    success={values.apellido && !errors.apellido ? 'Válido' : ''} />
                </Grid>

                <Grid item xs={12} md={8}>
                  <div className="buttonForm">
                    <Button
                      type='submit'
                      variant="contained"
                      disabled={!isValid || !dirty}
                      size="large"
                      onClick={() => enviarForm(values)}
                    >
                      {console.log(errors.nombre, errors.apellido, errors.email, errors.telefono)}
                      {console.log(isValid, dirty)}
                      {(!isValid && !dirty) ? "Completar todos los campos" : "Enviar"}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </>
          )
        }
        }
      </Formik >
    </Fragment >
  );
};


// import { Button, Grid, TextField, Typography, useForkRef } from "@mui/material";
// import { useFormik } from "formik";
// import "./Form.css";
// import { userSchema } from "../../../../validations/userRegister";

// export const Form = () => {
//   let initialValues = {
//     nombre: "",
//     apellido: "",
//     email: "",
//     telefono: "",
//   };

//   const enviarForm = (data) => {
//     console.log(data);
//   };
//   const { handleSubmit, handleChange, errors, values } = useFormik({
//     initialValues,
//     onSubmit: enviarForm,
//     validationSchema: userSchema,
//   });

//   return (
//     <div>
//       <Typography color="primary" variant="h2" textAlign={"center"}>
//         Completa el Formulario
//       </Typography>
//       <hr />
//       <form action="" className="form-container" onSubmit={handleSubmit}>
//         <Grid
//           container
//           alignItems={"center"}
//           justifyContent={"space-evenly"}
//           spacing={1}
//           sx={{ width: "100%" }}
//         >
//           <Grid item xs={12} md={8}>
//             <TextField
//               name="nombre"
//               type="text"
//               label="nombre"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={values.nombre}
//               error={!!errors?.nombre}
//               helperText={errors.nombre}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <TextField
//               name="apellido"
//               type="text"
//               label="apellido"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={values.apellido}
//               error={!!errors?.apellido}
//               helperText={errors.apellido}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <TextField
//               name="email"
//               type="email"
//               label="email"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={values.email}
//               error={!!errors?.email}
//               helperText={errors.email}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <TextField
//               name="telefono"
//               type="text"
//               label="telefono"
//               variant="outlined"
//               fullWidth
//               onChange={handleChange}
//               value={values.telefono}
//               error={!!errors?.telefono}
//               helperText={errors.telefono}
//             />
//           </Grid>
//         </Grid>
//         <Button type="submit" variant="contained">
//           Enviar
//         </Button>
//       </form>
//     </div>
//   );
// };
