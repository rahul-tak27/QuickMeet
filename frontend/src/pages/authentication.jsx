import * as React from "react";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Snackbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const navigate = useNavigate();
  

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);

        if (result) {
          navigate("/home");
        }
      }

      if (formState === 1) {
        let result = await handleRegister(name, username, password);

        console.log(result);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
        setUsername("");
      }
    } catch (err) {
      let message = err.response.data.message;
      setError(message);
    }
  };

  const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000a6",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#000000a8",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#000",
  },
};

  return (
    <>
      <CssBaseline />

      <Container
        component="main"
        maxWidth="xs"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: "100%",
            padding: 4,
            paddingBlock: 2.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              color:"black",
              fontWeight:700,
            }}
          >
            Back to Home
          </Button>

          <Avatar
            sx={{
              m: 1,
              mb: 3,
              bgcolor: "#091019",
              padding: 3,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <div>
            <Button
              variant={formState === 0 ? "contained" : " "}
              onClick={() => {
                setFormState(0);
              }}
              sx={{
                textTransform: "none",
                borderRadius:"20px 12px",
                paddingInline:3,
                paddingBlock:1.5,
                bgcolor: formState === 0 ? "#091019" : "transparent",
                color: formState === 0 ? "#fff" : "#091019",
                "&:hover": {
                  bgcolor: formState === 0 ? "#000" : "transparent",
                },
              }}
            >
              Sign In
            </Button>

            <Button
              variant={formState === 1 ? "contained" : " "}
              onClick={() => {
                setFormState(1);
              }}
              sx={{
                borderRadius:"20px 12px",
                paddingBlock:1.5,
                marginLeft:0.5,
                background:
                  formState === 1
                    ? "linear-gradient(90deg, #091019 0%, #091019 50%, #091019 100%)"
                    : "transparent",
                color: formState === 1 ? "#fff" : "#091019",
                textTransform: "none",
                px: 3,
              }}
            >
              Sign Up
            </Button>
          </div>

          <Box component="form" sx={{ mt: 3 }}>
            {formState === 1 ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Full Name"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                value={name}
                sx={textFieldStyle}
              />
            ) : (
              <></>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              value={username}
               sx={textFieldStyle}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               sx={textFieldStyle}
            />

            <p style={{ color: "red" }}>{error}</p>

            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                borderRadius:"20px 12px",
                mt: 2,
                mb: 2,
                bgcolor:"#091019",
                paddingBlock:1.5
              }}
              onClick={handleAuth}
            >
              {formState === 0 ? "sign in" : "Create Account"}
            </Button>
          </Box>
        </Paper>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          message={message}
          onClose={() => setOpen(false)}
        />
      </Container>
    </>
  );
}