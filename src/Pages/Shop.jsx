import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ShopPage = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, p: 2 }}>
      {/* Sidebar */}
      <Box sx={{ width: "250px", bgcolor: "#f4f4f4", p: 2 }}>
        <FormControl fullWidth>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Seller</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Dropdown for Seller */}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <input type="number" placeholder="0" style={{ width: "100%" }} />
              <input
                type="number"
                placeholder="1000000"
                style={{ width: "100%", marginTop: "8px" }}
              />
              <Button variant="contained" sx={{ mt: 1 }}>Submit</Button>
              <Button variant="contained" color="secondary" sx={{ mt: 1 }}>Reset</Button>
              <RadioGroup>
                <FormControlLabel value="under5000" control={<Radio />} label="Under $5000" />
                <FormControlLabel value="5000-20000" control={<Radio />} label="$5000 to $20000" />
                <FormControlLabel value="20000-50000" control={<Radio />} label="$20000 to $50000" />
                <FormControlLabel value="50000-90000" control={<Radio />} label="$50000 to $90000" />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControlLabel control={<Checkbox />} label="Antarctica" />
              <FormControlLabel control={<Checkbox />} label="Antigua And Barbuda" />
              <FormControlLabel control={<Checkbox />} label="Albania" />
            </AccordionDetails>
          </Accordion>
        </FormControl>
      </Box>

      {/* Products Section */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {/* Product Card 1 */}
        <Card sx={{ width: "250px", position: "relative" }}>
          <CardMedia
            component="img"
            height="150"
            image="https://via.placeholder.com/250"
            alt="product"
          />
          <Button
            sx={{ position: "absolute", top: "10px", right: "10px" }}
            size="small"
          >
            <ShoppingCartIcon />
          </Button>
          <Button
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
            size="small"
          >
            <FavoriteBorderIcon />
          </Button>
          <CardContent>
            <Typography variant="h6">Test</Typography>
            <Typography sx={{ color: "green" }}>$90</Typography>
          </CardContent>
        </Card>

        {/* Product Card 2 */}
        <Card sx={{ width: "250px", position: "relative" }}>
          <CardMedia
            component="img"
            height="150"
            image="https://via.placeholder.com/250"
            alt="product"
          />
          <Button
            sx={{ position: "absolute", top: "10px", right: "10px" }}
            size="small"
          >
            <ShoppingCartIcon />
          </Button>
          <Button
            sx={{ position: "absolute", bottom: "10px", right: "10px" }}
            size="small"
          >
            <FavoriteBorderIcon />
          </Button>
          <CardContent>
            <Typography variant="h6">Dental Machinery</Typography>
            <Typography sx={{ color: "green" }}>$4500</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Pagination */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 2 }}>
        <Button>Previous</Button>
        <Pagination count={10} page={1} />
        <Button>Next</Button>
        <Select defaultValue={10} sx={{ ml: 1 }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default ShopPage;
