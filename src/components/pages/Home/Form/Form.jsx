import { Button, Grid, TextField, Typography, useForkRef } from "@mui/material";
import { useFormik } from "formik";
import "./Form.css";
import { userSchema } from "../../../../validations/userRegister";

export const Form = () => {
  let initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  };

  const enviarForm = (data) => {
    console.log(data);
  };
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues,
    onSubmit: enviarForm,
    validationSchema: userSchema,
  });

  return (
    <div>
      <Typography color="primary" variant="h2" textAlign={"center"}>
        Completa el Formulario
      </Typography>
      <hr />
      <form action="" className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={8}>
            <TextField
              name="nombre"
              type="text"
              label="nombre"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={values.nombre}
              error={!!errors?.nombre}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              name="apellido"
              type="text"
              label="apellido"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={values.apellido}
              error={!!errors?.apellido}
              helperText={errors.apellido}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              name="email"
              type="email"
              label="email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={values.email}
              error={!!errors?.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              name="telefono"
              type="text"
              label="telefono"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={values.telefono}
              error={!!errors?.telefono}
              helperText={errors.telefono}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
