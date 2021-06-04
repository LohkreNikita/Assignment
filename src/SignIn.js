import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import "./formStyle.css";

export default function SignIn(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const [validData, setValidData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const SignUpData = localStorage.getItem("myData");
    const data = JSON.parse(SignUpData);
    console.log("SignUpData ==>", data?.email);
    setValidData({
      email: data?.email,
      password: data?.password,
    });
  }, []);

  const onSubmit = (data) => {
    console.log("signIn ==>", data);
    props.history.push("/welcome");
  };

  return (
    <div className='form'>
      <Avatar className='form__avtar'>
        <LockOutlinedIcon />
      </Avatar>
      <h1>SignIN</h1>
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
              name='email'
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email", {
                required: "Email Address is required.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Email Address is not valid.",
                },
                validate: (value) =>
                  value !== validData.email ? "user doesn't exist" : undefined,
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
                validate: (value) =>
                  value !== validData.password ? "wrong password" : undefined,
              })}
              label='Password'
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
