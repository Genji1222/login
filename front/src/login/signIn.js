import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FormControl, Grid, OutlinedInput } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const onSend = async (event) => {
    event.preventDefault();
    console.log([userName, password]);
    fetch("http://localhost:8000/login", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        if (data == "ok") {
          navigate("/table/view");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  /* React.useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((item) => setData(item));
  }, data);*/

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Card sx={{ minWidth: 400, padding: 5 }}>
        <CardContent>
          <form onSubmit={onSend}>
            <Typography
              component="div"
              sx={{ fontSize: 40, mb: 1.5, textAlign: "center" }}
            >
              Sign In
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: "center" }}>
              Not registered yet? <Link to="/login/signUp">Sign Up</Link>
            </Typography>
            <Typography sx={{ mb: 1 }}>Name</Typography>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ height: 40, mb: 2.5 }}
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <Typography sx={{ mb: 1 }}>Password</Typography>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ height: 40, mb: 2.5 }}
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "100%", height: 40, mb: 3 }}
            >
              Submit
            </Button>

            <Typography sx={{ textAlign: "center" }}>
              Forget <Link to="#">password</Link>
            </Typography>
          </form>
          
        </CardContent>
      </Card>
    </Grid>
  );
}
