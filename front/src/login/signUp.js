import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, Grid, OutlinedInput } from "@mui/material";
import { Form, Link } from "react-router-dom";

function onSend(){
  console.log('dddddddddddd')
  alert("ddddddddd")
}
export default function SignUp() {
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
              Sign Up
            </Typography>
            <Typography sx={{ mb: 1.5, textAlign: "center" }}>
              Not registered yet? <Link to="/">Sign In</Link>
            </Typography>

            <Typography sx={{ mb: 1 }}>Full Name</Typography>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ height: 40, mb: 2.5 }}
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Full Name"
              />
            </FormControl>

            <Typography sx={{ mb: 1 }}>Email adress</Typography>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ height: 40, mb: 2.5 }}
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Email adress"
              />
            </FormControl>

            <Typography sx={{ mb: 1 }}>Password</Typography>

            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ height: 40, mb: 5.5 }}
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                placeholder="Password"
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
