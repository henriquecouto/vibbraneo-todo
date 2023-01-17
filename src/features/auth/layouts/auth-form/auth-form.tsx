import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthFormInputs } from "./auth-form.types";
import { authFormSchema } from "./auth-form.validation";
import { loginAdapter, LoginAdapterResponse } from "../../adapters/login";
import { useAuth } from "../../context/auth-context";

export const AuthForm = () => {
  const { setAuthToken } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm<AuthFormInputs>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(authFormSchema),
  });

  const onSubmit: SubmitHandler<AuthFormInputs> = (data) => {
    const onFinish = ({ authToken }: LoginAdapterResponse) => {
      setAuthToken(authToken);
    };

    loginAdapter(data, onFinish);
  };

  const handleClickShowPassword = () => {
    setShowPassword((old) => !old);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={4}>
        <Grid item xs>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  variant="outlined"
                  placeholder="your.name@email.com"
                  label="Email"
                  error={!!fieldState.error}
                  {...field}
                />
                <FormHelperText error>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  variant="outlined"
                  placeholder="••••••••••"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  error={!!fieldState.error}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
                <FormHelperText error>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item xs>
          <Button fullWidth variant="contained" type="submit">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
