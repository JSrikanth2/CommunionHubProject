import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import communionImage from "./Asserts/communionImg.jpeg";

const AppBarHeader = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#ffffff", boxShadow: 4, height: 80 }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          {/* Logo Image */}
          <img
            src={communionImage}
            alt="Communion App Logo"
            style={{ height: 40, marginRight: 8 }}
          />
        </Box>
        <Box>
          <Button sx={{ color: "black" }} component={Link} to="/">
            Home
          </Button>
          <Button sx={{ color: "black" }} component={Link} to="/events">
            Events
          </Button>
          <Button sx={{ color: "black" }} component={Link} to="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
