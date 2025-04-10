import { Box, Typography, Button, Container, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// const buttonSx = {
//   mt: 3,
//   background: "linear-gradient(270deg, #000000, #007bff)",
//   backgroundSize: "400% 400%",
//   color: "#fff",
//   border: "none",
//   transition: "all 0.4s ease-in-out",
//   animation: "none",
//   "&:hover": {
//     animation: "gradientShift 3s ease infinite",
//     backgroundPosition: "right center",
//   },
//   "@keyframes gradientShift": {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
// };

const buttonSx = {
  mt: 3,
  background: "linear-gradient(270deg, #007bff, #000000)", // Smooth gradient from blue to black
  backgroundSize: "400% 400%", // Larger area for animation
  backgroundPosition: "0% 50%", // Initial gradient position
  color: "#fff",
  border: "none",
  transition: "all 0.4s ease-in-out",
  "&:hover": {
    animation: "animatedGradient 3s ease infinite",
  },
  "@keyframes animatedGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 4, textAlign: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to the Communion App
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Connecting people of all faiths through events and community
            support.
          </Typography>
        </Paper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            mt: 6,
            textAlign: "center",
            py: 8,
            background: "linear-gradient(to right, #e3f2fd, #fce4ec)",
            borderRadius: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Connecting People Across Faiths & Interests
          </Typography>
          <Typography variant="h6" gutterBottom>
            Join hands with a vibrant community to discover meaningful events
            and support networks.
          </Typography>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              sx={buttonSx}
              onClick={() => navigate("/events")}
              endIcon={<ArrowForwardIcon />} // 👈 This places the icon to the right
            >
              Explore Events
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default HomePage;
