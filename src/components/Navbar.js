import { AppBar, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="mb-24">
        <AppBar position="fixed">
          <Toolbar className="flex gap-8 justify-center">
            <Link to="/">Home</Link>
            <Link to="/Postal">Postal Lookup</Link>
            <Link to="/University">Universities</Link>
          </Toolbar>
        </AppBar>
      </div>

      <Outlet />
    </>
  );
}
