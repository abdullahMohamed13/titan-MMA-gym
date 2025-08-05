import { useState } from "react";
// MUI components
import { Container } from "@mui/system";
import { Autocomplete, Tabs, Tab, Box, Typography,
  Button, Card, CardContent, CardHeader, CardMedia, Pagination, TextField } from "@mui/material";
// MUI icons
import Checkout from "../../components/Checkout";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
// Custom Components
import ProductsList from "./ProductsList";
import RequestProductSection from "./RequestProductSection";
// Slices
import { initialProducts } from "../../features/slices/productsSlice";

export default function ProductsPage() {
    const [category, setCategory] = useState(0)
    document.title = 'Titan MMA - Store';
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCategory(newValue)
    }
    
    return <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component="h1"
              fontWeight={700}
              gutterBottom
              sx={{
                background: 'linear-gradient(90deg, #e20000, #8E44AD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Fight Ready Gear & Essentials
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Elevate your training—browse top-rated products for every level.
            </Typography>
          </Box>
        </Box>

        <div className="w-full flex flex-col items-center gap-3 md:gap-0 md:flex-row justify-between p-5">
            <Tabs value={category} onChange={handleChange} aria-label="basic tabs">
                <Tab sx={{color: 'white'}} icon={<ManIcon />} label="Men" />
                <Tab sx={{color: 'white'}} icon={<ChildFriendlyIcon />} label="Kids" />
                <Tab sx={{color: 'white'}} icon={<WomanIcon />} label="Females" />
            </Tabs>
            <Autocomplete
                disablePortal
                options={initialProducts.map((product) => (product.title))}
                // productsResults
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search for a product" />}
                />
        </div>
            {/* <Box sx={{ p: 3 }}>
                {category === 0 && <Typography>Here is the product info.</Typography>}
                {category === 1 && <Typography>Here are the reviews.</Typography>}
                {category === 2 && <Typography>Shipping details go here.</Typography>}
            </Box> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <ProductsList />
        </div>
        <Pagination count={3} variant="outlined" shape="rounded" sx={{display: 'flex', justifyContent: 'center'}} />
        {/* <Checkout /> */}
        <RequestProductSection />
    </Container>
}
