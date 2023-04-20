import { AppBar, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#3b82f6",
        }}
      >
        <Toolbar className="flex gap-8 justify-center">
          <Link to="/">Home</Link>
          <Link to="/postallookup">Postal Lookup</Link>
          <Link to="/university">University Lookup</Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
