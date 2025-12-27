"use client";

import Box from "@mui/material/Box";
import CustomTextfield from "../ui/form/CustomTextfield";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { formReducer } from "@/store/reducer/reducer";
import Link from "../ui/Link";
import { FormEvent, useReducer } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useToast } from "@/hooks/useToast";
import { api } from "@/utils/utils";
import { userRequestSuccess } from "@/store/slicer/user";
import { useRouter } from "next/navigation";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
};

const LoginForm = () => {
  const [state, dispatchFn] = useReducer(formReducer, initialState);

  const dispatch = useAppDispatch();
  const { error } = useToast();
  const router = useRouter()

  const onSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatchFn({ type: "INPUT", field: "isLoading", payload: true });

      const data = await api({
        url:"user/login",
        options:{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({email: state.email, password: state.password})
        }
      });

      if(!data.success){
        throw new Error(data.message)
      }

      dispatchFn({type:"CLEAR_FORM",field:"",payload:""});
      dispatch(userRequestSuccess({user: data.user, token: data.token}));
      router.push("/");
      localStorage.setItem(
        "user",
        JSON.stringify({ user: data.user, token: data.token })
      );

    } catch (err: any) {
      error(err.message);
    } finally {
      dispatchFn({ type: "INPUT", field: "isLoading", payload: false });
    }
  };

  return (
    <>
      {state.isLoading && (
        <LinearProgress
          sx={{ position: "fixed", top: 0, left: 0, width: "100%" }}
        />
      )}

      <Box component={"form"} onSubmit={onSubmit}>
        <CustomTextfield
          label="Email"
          type="email"
          value={state.email}
          disabled={state.isLoading}
          onChange={(e) =>
            dispatchFn({
              type: "INPUT",
              field: "email",
              payload: e.target.value,
            })
          }
          fullWidth
          helperText="johndoe@gmail.com/test@gmail.com"
        />
        <Box sx={{ marginBlock: 1.5 }}>
          <CustomTextfield
            type="password"
            label="Password"
            fullWidth
            value={state.password}
            disabled={state.isLoading}
            onChange={(e) =>
              dispatchFn({
                type: "INPUT",
                field: "password",
                payload: e.target.value,
              })
            }
            helperText="test1234"
          />
        </Box>
        <Button fullWidth variant="contained" type="submit" disabled={state.isLoading} >
          Submit
        </Button>
      </Box>
      <Box sx={{ marginTop: 1.5 }}>
        <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          Don&apos;t have any account?{" "}
          <Link href={"/signup"} sx={{ color: "primary.main" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginForm;
