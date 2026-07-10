import { Box, Container } from "@mui/material"
import HeaderComponent from "../../components/HeaderComponent"
import PricingList from "./PricingList"

// const hasPremiumAccess = has({ feature: 'widgets' })

export default function PricingPage() {
  return <Box
        component='main' 
        sx={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
            py: { xs: 6, md: 8 },
        }}
    >
    <HeaderComponent
        headingText='Choose your training plan'
        subHeadingText="Pick the training program that matches your goals, skill level, and fighting style.
        Each designed to build real MMA skills"
        subHeadingClassName="px-3"
    />
    <Container>
        <PricingList />
    </Container>
  </Box>
}
