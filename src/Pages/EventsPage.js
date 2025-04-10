// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { motion } from "framer-motion"; // Import framer motion
// import { Autocomplete } from "@mui/material";

// import axios from "axios"; // Import axios for API calls

// const fieldsSx = {
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#aaa",
//     },
//     "&:hover fieldset": {
//       borderColor: "#6e7dff", // Hover effect color
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#6e7dff", // Focus effect color
//     },
//   },
// };

// const Locations = [
//   "Community Center",
//   "Local Park",
//   "City Stadium",
//   "Downtown",
//   "Library",
// ];

// const EventsPage = () => {
//   const [events, setEvents] = useState([]); // Start with an empty array
//   const [filterCategory, setFilterCategory] = useState("All");
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     date: null,
//     category: "",
//     location: "", // Add location to state
//   });
//   const [loading, setLoading] = useState(true); // Loading state for API call
//   const [error, setError] = useState(null); // Error state for API call

//   // Fetch events from the API on mount
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:7733/events");
//         setEvents(response.data); // Assuming the response data is an array of events
//         setLoading(false); // Set loading to false once the data is fetched
//       } catch (err) {
//         setError("Failed to fetch events.");
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   const filteredEvents =
//     filterCategory === "All"
//       ? events
//       : events.filter((event) => event.category === filterCategory);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDateChange = (newValue) => {
//     setNewEvent((prev) => ({ ...prev, date: newValue }));
//   };

//   const handleAddEvent = async (e) => {
//     e.preventDefault();
//     if (
//       !newEvent.title ||
//       !newEvent.date ||
//       !newEvent.category ||
//       !newEvent.location
//     ) {
//       alert("Please fill all the fields");
//       return;
//     }

//     const formattedDate = newEvent.date.toISOString().split("T")[0];

//     const eventToAdd = {
//       title: newEvent.title,
//       date: formattedDate,
//       category: newEvent.category,
//       location: newEvent.location, // Add location to event
//       description: "Details will be updated soon.",
//     };

//     try {
//       // POST request to add the event to the API
//       await axios.post("http://localhost:7733/events", eventToAdd);
//       alert("Event added successfully!");

//       // Refetch events after adding
//       const response = await axios.get("http://localhost:7733/events");
//       setEvents(response.data);

//       // Reset the form
//       setNewEvent({
//         title: "",
//         date: null,
//         category: "Religious",
//         location: "",
//       });
//     } catch (err) {
//       alert("Failed to add event.");
//     }
//   };

//   if (loading) return <Typography>Loading events...</Typography>;
//   if (error) return <Typography>{error}</Typography>;

//   return (
//     <Box
//       sx={{
//         minHeight: "82vh",
//         background: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         py: 4,
//       }}
//     >
//       <Container
//         maxWidth="lg"
//         sx={{
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}
//           >
//             Events Listing
//           </Typography>
//         </motion.div>

//         {/* Filter Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
//             <Grid item xs={12} sm="auto">
//               <Typography variant="subtitle1" sx={{ color: "#444" }}>
//                 Filter by Category:
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm="auto">
//               <FormControl fullWidth sx={{ minWidth: 150 }}>
//                 <InputLabel id="filter-category-label">Category</InputLabel>
//                 <Select
//                   labelId="filter-category-label"
//                   value={filterCategory}
//                   label="Category"
//                   onChange={(e) => setFilterCategory(e.target.value)}
//                   sx={fieldsSx}
//                 >
//                   <MenuItem value="All">All</MenuItem>
//                   <MenuItem value="Religious">Religious</MenuItem>
//                   <MenuItem value="Social">Social</MenuItem>
//                   <MenuItem value="Charity">Charity</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//         </motion.div>

//         {/* New Event Form */}
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <motion.form
//             onSubmit={handleAddEvent}
//             noValidate
//             autoComplete="off"
//             sx={{
//               mb: 4,
//               p: 2,
//               border: "1px solid #ccc",
//               borderRadius: 2,
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//               Add New Event
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={4}>
//                 <TextField
//                   fullWidth
//                   label="Title"
//                   name="title"
//                   value={newEvent.title}
//                   onChange={handleInputChange}
//                   required
//                   sx={fieldsSx}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={4}>
//                 <DatePicker
//                   label="Date"
//                   value={newEvent.date}
//                   onChange={handleDateChange}
//                   renderInput={(params) => (
//                     <TextField {...params} fullWidth required sx={fieldsSx} />
//                   )}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={4}>
//                 <FormControl fullWidth required sx={{ minWidth: "100%" }}>
//                   <Autocomplete
//                     id="category-autocomplete"
//                     name="category"
//                     value={newEvent.category}
//                     onChange={(event, newValue) =>
//                       handleInputChange({
//                         target: { name: "category", value: newValue },
//                       })
//                     }
//                     options={["Religious", "Social", "Charity"]}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Category"
//                         fullWidth
//                         required
//                         sx={{
//                           width: "100%", // 100% width of the parent container
//                           minWidth: "250px", // Set a minimum width for the field
//                           ...fieldsSx,
//                         }}
//                       />
//                     )}
//                     isOptionEqualToValue={(option, value) => option === value}
//                   />
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={4}>
//                 <FormControl fullWidth required sx={{ minWidth: "100%" }}>
//                   <Autocomplete
//                     id="location-autocomplete"
//                     name="location"
//                     value={newEvent.location}
//                     onChange={(event, newValue) =>
//                       handleInputChange({
//                         target: { name: "location", value: newValue },
//                       })
//                     }
//                     options={Locations} // Locations array
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Location"
//                         fullWidth
//                         required
//                         sx={{
//                           width: "100%", // 100% width of the parent container
//                           minWidth: "250px", // Set a minimum width for the field
//                           ...fieldsSx,
//                         }}
//                       />
//                     )}
//                     isOptionEqualToValue={(option, value) => option === value}
//                   />
//                 </FormControl>
//               </Grid>
//             </Grid>

//             <motion.div>
//               <Button
//                 variant="contained"
//                 type="submit"
//                 justifyContent="right"
//                 sx={{
//                   mt: 2,
//                   mb: 2,
//                   background: "#c93b14",
//                   ":hover": { backgroundColor: "#vamsiColor" },
//                 }}
//               >
//                 Add Event
//               </Button>
//             </motion.div>
//           </motion.form>
//         </LocalizationProvider>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <Grid container spacing={3}>
//             {filteredEvents.map((event) => (
//               <Grid item xs={12} md={4} key={event.id}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Card
//                     sx={{
//                       minWidth: 270,
//                       backgroundColor: "#f5f5f5",
//                       boxShadow: 3,
//                       borderRadius: 2,
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h5"
//                         component="div"
//                         gutterBottom
//                         sx={{ fontWeight: "bold" }}
//                       >
//                         {event.title}
//                       </Typography>
//                       <Typography color="text.secondary">
//                         Date: {event.date}
//                       </Typography>
//                       <Typography color="text.secondary">
//                         Location: {event.location}
//                       </Typography>
//                       <Typography sx={{ mt: 1.5 }}>
//                         {event.description}
//                       </Typography>
//                       <Typography variant="caption" sx={{ mt: 1 }}>
//                         Category: {event.category}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default EventsPage;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { motion } from "framer-motion";
import { Autocomplete } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fieldsSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#aaa",
    },
    "&:hover fieldset": {
      borderColor: "#6e7dff", // Hover effect color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6e7dff", // Focus effect color
    },
  },
};

const Locations = [
  "Community Center",
  "Local Park",
  "City Stadium",
  "Downtown",
  "Library",
];

const EventsPage = () => {
  const [events, setEvents] = useState([]); // Start with an empty array
  const [filterCategory, setFilterCategory] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: null,
    category: "",
    location: "",
  });
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [error, setError] = useState(null); // Error state for API call

  // Fetch events from the API on mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:7733/events");
        setEvents(response.data); // Assuming the response data is an array of events
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        setError("Failed to fetch events.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const filteredEvents =
    filterCategory === "All"
      ? events
      : events.filter((event) => event.category === filterCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (newValue) => {
    setNewEvent((prev) => ({ ...prev, date: newValue }));
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.category ||
      !newEvent.location
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const formattedDate = newEvent.date.toISOString().split("T")[0];

    const eventToAdd = {
      title: newEvent.title,
      date: formattedDate,
      category: newEvent.category,
      location: newEvent.location,
      description: "Details will be updated soon.",
    };

    try {
      // POST request to add the event to the API
      await axios.post("http://localhost:7733/events", eventToAdd);
      toast.success("Event added successfully!");

      // Refetch events after adding
      const response = await axios.get("http://localhost:7733/events");
      setEvents(response.data);

      // Reset the form
      setNewEvent({
        title: "",
        date: null,
        category: "Religious",
        location: "",
      });
    } catch (err) {
      toast.error("Failed to add event.");
    }
  };

  if (loading) return <Typography>Loading events...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <Box
      sx={{
        minHeight: "82vh",
        background: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 4,
      }}
    >
      {/* ToastContainer is required for toast notifications */}
      <ToastContainer />
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          p: 4,
          borderRadius: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}
          >
            Events Listing
          </Typography>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Grid item xs={12} sm="auto">
              <Typography variant="subtitle1" sx={{ color: "#444" }}>
                Filter by Category:
              </Typography>
            </Grid>
            <Grid item xs={12} sm="auto">
              <FormControl fullWidth sx={{ minWidth: 150 }}>
                <InputLabel id="filter-category-label">Category</InputLabel>
                <Select
                  labelId="filter-category-label"
                  value={filterCategory}
                  label="Category"
                  onChange={(e) => setFilterCategory(e.target.value)}
                  sx={fieldsSx}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Religious">Religious</MenuItem>
                  <MenuItem value="Social">Social</MenuItem>
                  <MenuItem value="Charity">Charity</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </motion.div>

        {/* New Event Form */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <motion.form
            onSubmit={handleAddEvent}
            noValidate
            autoComplete="off"
            sx={{
              mb: 4,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 2,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Add New Event
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                  sx={fieldsSx}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="Date"
                  value={newEvent.date}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth required sx={fieldsSx} />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required sx={{ minWidth: "100%" }}>
                  <Autocomplete
                    id="category-autocomplete"
                    name="category"
                    value={newEvent.category}
                    onChange={(event, newValue) =>
                      handleInputChange({
                        target: { name: "category", value: newValue },
                      })
                    }
                    options={["Religious", "Social", "Charity"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Category"
                        fullWidth
                        required
                        sx={{
                          width: "100%",
                          minWidth: "250px",
                          ...fieldsSx,
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) => option === value}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required sx={{ minWidth: "100%" }}>
                  <Autocomplete
                    id="location-autocomplete"
                    name="location"
                    value={newEvent.location}
                    onChange={(event, newValue) =>
                      handleInputChange({
                        target: { name: "location", value: newValue },
                      })
                    }
                    options={Locations} // Locations array
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Location"
                        fullWidth
                        required
                        sx={{
                          width: "100%",
                          minWidth: "250px",
                          ...fieldsSx,
                        }}
                      />
                    )}
                    isOptionEqualToValue={(option, value) => option === value}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <motion.div>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: 2,
                  mb: 2,
                  background: "#c93b14",
                  ":hover": { backgroundColor: "#vamsiColor" },
                }}
              >
                Add Event
              </Button>
            </motion.div>
          </motion.form>
        </LocalizationProvider>

        {/* Events Listing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Grid container spacing={3}>
            {filteredEvents.map((event) => (
              <Grid item xs={12} md={4} key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      minWidth: 270,
                      backgroundColor: "#f5f5f5",
                      boxShadow: 3,
                      borderRadius: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {event.title}
                      </Typography>
                      <Typography color="text.secondary">
                        Date: {event.date}
                      </Typography>
                      <Typography color="text.secondary">
                        Location: {event.location}
                      </Typography>
                      <Typography sx={{ mt: 1.5 }}>
                        {event.description}
                      </Typography>
                      <Typography variant="caption" sx={{ mt: 1 }}>
                        Category: {event.category}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EventsPage;
