import { Box, Input, InputAdornment } from "@mui/material";
import HeaderComponent from "../../../components/HeaderComponent";
import StyledButton from "../../../components/StyledButton";

export default function Contact() {
    return <Box component='section'
        sx={{
            py: { xs: 4, md: 6 },
            pb: {xs: 6, md: 9},
            background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}
        alignItems="center" justifyContent="center" display="flex" flexDirection="column">
                        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl transition-all duration-2000`}></div>
            <div className={`absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transition-all duration-2000 delay-500`}></div>
        </div>

        <HeaderComponent
            headingText="join titan's newsletter"
            subHeadingText="Join hands with 250000+ people to get your weekly dose of MMA and UFC news." />

        <Input placeholder="Enter your email"
            sx={{
                textAlign: 'center',
                width: {xs: '80%', md: '60%'},
                borderRadius: 1,
                padding: 1.5,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(226, 0, 0, 0.3)'
                },
                '&:focus': {
                    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(226, 0, 0, 0.3)',
                },
                // Target the actual <input> element inside
                '& input': {
                    outline: 'none',
                    boxShadow: 'none !important', // remove Chrome blue focus
                },
            }} />
        <InputAdornment position="end">
            <StyledButton text='SUBSCRIBE' sx={{mt: {xs: 9, md: 7}, mb: {xs: 3, md: 0}}} size="medium" />
        </InputAdornment>
    </Box>
}
