import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import "./formStyle.css";

export default function SIgnUp(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("myData", JSON.stringify(data));
    props.history.push("/signIn");
  };

  return (
    <div className='container'>
      <Avatar className='form__avtar'>
        <LockOutlinedIcon />
      </Avatar>
      <h1 className='hedaerText'>SignUp</h1>
      <form
        className='form__body'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className='form__input'
              name='firstName'
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
              {...register("firstName", {
                required: "FirstName is required.",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "FirstName is characters only.",
                },
              })}
              label='First Name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='form__input'
              name='lastName'
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
              {...register("lastName", {
                required: "LastName is required.",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "LastName is character only.",
                },
              })}
              label='Last Name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='form__input'
              name='email'
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email Address is required.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email Address is not valid.",
                },
              })}
              label='Email Address'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='form__input'
              name='password'
              type='password'
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register("password", {
                required: "password is required.",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:
                    "Minimum eight characters, at least one letter, one number and one special character.",
                },
              })}
              label='Password'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='form__input'
              name='confirmPassword'
              type='password'
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "confirmPassword is required.",
                validate: (value) =>
                  value !== watch("password")
                    ? "The password fields don't match"
                    : undefined,
              })}
              label='Confirm Password'
            />
          </Grid>
        </Grid>

        <Button
          className='form__button'
          variant='contained'
          color='primary'
          type='submit'
        >
          SignUp
        </Button>
      </form>
    </div>
  );
}
