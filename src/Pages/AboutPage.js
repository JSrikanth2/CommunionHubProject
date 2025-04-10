import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">
        The Communion App is a platform to bring people of all faiths together
        for meaningful events and support.
      </Typography>
    </Box>
  );
};

export default AboutPage;
