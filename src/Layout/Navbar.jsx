import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#002228",
          boxShadow: "none",
          borderBottom: "2px solid #183A40",
          padding: "20px 0",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1320px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <img src={Logo} alt="Logo" />
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item}
                sx={{
                  cursor: "pointer",
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "16px",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          {/* Desktop Button */}
          <div className="flex gap-x-6">
            <Button
              variant="contained"
              sx={{
                padding: "10px 16px",
                display: { xs: "none", md: "block" },
                backgroundColor: "#0FF1F6",
                borderRadius: "100px",
                fontFamily: "'Work Sans', sans-serif",
                color: "#002228",
                fontSize: "14px",
                font: "bold",
                letterSpacing: "-1%",
                textTransform: "capitalize",
              }}
            >
              Book a Demo
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "10px 16px",
                display: { xs: "none", md: "block" },
                borderRadius: "100px",
                fontFamily: "'Work Sans', sans-serif",
                color: "#ffff",
                borderColor: "white",
                fontSize: "14px",
                font: "bold",
                letterSpacing: "-1%",
                textTransform: "capitalize",
              }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <Box
              key={item}
              sx={{
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {item}
            </Box>
          ))}

          <Button variant="contained">Book a Demo</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
