import { useParams } from 'react-router-dom';
import { Container, Box, Typography, Link, Chip, Button, Paper, Divider } from '@mui/material';
import { initialCoaches } from '../../../features/slices/coachesSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import StyledButton from '../../../components/StyledButton';
import Stack from './../../../components/animated/Stack';

export default function CoachProfile() {
    const { name } = useParams();
    const decodedName = name ? decodeURIComponent(name) : 'Unknown';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    document.title = `Titan MMA - Coach ${decodedName}`;
    const currentCoach = initialCoaches.find(coach => coach.name === decodedName);

    const breadcrumbs = [
        <Link 
            component={RouterLink}
            underline="hover" 
            key="1" 
            color="inherit" 
            to="/"
            sx={{ color: '#b0b0b0', '&:hover': { color: 'white' } }}
        >
            Home
        </Link>,
        <Link
            component={RouterLink}
            underline="hover"
            key="2"
            color="inherit"
            to="/coaches"
            sx={{ color: '#b0b0b0', '&:hover': { color: 'white' } }}
        >
          Coaches
        </Link>,
        <Typography key="3" sx={{ color: 'white' }}>
          {decodedName}
        </Typography>,
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
                py: 6,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                <div className={`absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transition-all duration-2000 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
            </div>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" sx={{ color: '#b0b0b0' }} />}
                    aria-label="breadcrumb"
                    sx={{ mb: 4 }}
                >
                    {breadcrumbs}
                </Breadcrumbs>

                {currentCoach ? (
                    <AnimatePresence mode="sync">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            key={currentCoach.id}
                        >
                            <Paper
                                elevation={8}
                                sx={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        border: '2px solid rgba(226, 0, 0, 0.3)'
                                    }
                                }}
                            >
                                <Box sx={{ p: 4 }} textAlign={{xs: 'center', md: 'left'}}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                                        {/* Image Section */}
                                        <Box sx={{ flexShrink: 0 }}>
                                            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                                                <img 
                                                    loading="lazy" 
                                                    src={currentCoach.img} 
                                                    alt={`Coach ${currentCoach.name} Photo`}
                                                    style={{
                                                        width: 400,
                                                        height: 400,
                                                        objectFit: 'cover',
                                                        borderRadius: 16,
                                                        border: '4px solid rgba(226, 0, 0, 0.3)',
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                        e.currentTarget.style.borderColor = 'rgba(226, 0, 0, 0.6)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                        e.currentTarget.style.borderColor = 'rgba(226, 0, 0, 0.3)';
                                                    }}
                                                />
                                                {/* Action Button */}
                                                <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
                                                    <StyledButton
                                                        href={currentCoach.article}
                                                        target='_blank'
                                                        text='Read More About Him'
                                                        borderRad={3}
                                                        icon={<OpenInNewIcon />}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>

                                        {/* Content Section */}
                                        <Box sx={{ flex: 1 }}>
                                            {/* Header */}
                                            <Box sx={{ mb: 4 }}>
                                                <Typography 
                                                    variant="h2" 
                                                    component="h1"
                                                    sx={{
                                                        fontWeight: 900,
                                                        background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                        backgroundClip: 'text',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }}
                                                >
                                                    Coach {currentCoach.name}
                                                </Typography>
                                                <Typography 
                                                    variant='caption'
                                                    fontSize={18}
                                                >
                                                    {currentCoach.title} - {currentCoach.age} Years old
                                                </Typography>
                                                <Typography component='h3' mt={4}>
                                                   🎯 Specializations:
                                                </Typography>
                                                <Box sx={{ 
                                                    mt: {xs: 1, md: 0},
                                                    mb: 3,
                                                    display: 'flex',
                                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                                    alignItems: {xs: 'center', md: 'flex-start'},
                                                    flexWrap: 'wrap',
                                                    gap: 1,
                                                }}
                                                >
                                                    {currentCoach.specials.map((special, index) => (
                                                        <Chip
                                                            key={index}
                                                            label={special}
                                                            sx={{
                                                                color: 'white',
                                                                backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                                                border: '1px solid rgba(226, 0, 0, 0.5)',
                                                                fontWeight: 600,
                                                                fontSize: '1rem',
                                                                py: 1,
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(226, 0, 0, 0.5)',
                                                                    transform: 'scale(1.05)'
                                                                },
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>

                                            {/* Description */}
                                            <Typography 
                                                variant="body1" 
                                                sx={{ 
                                                    color: '#e0e0e0',
                                                    mb: 4,
                                                    lineHeight: 1.8,
                                                    fontSize: '1.1rem'
                                                }}
                                            >
                                                {currentCoach.description}
                                            </Typography>

                                            <Divider className='bg-white' />

                                            <Typography component='h3' fontSize={20} mt={2} mb={1} align='center' width='100%'>
                                                   📸 Coach Gallery:
                                            </Typography>
                                            
                                            <Stack
                                                cardsData={currentCoach.gallery.map((img, index) => ({
                                                    id: index,
                                                    img,
                                                }))}
                                            />
                                            {/* .map((img, index) => {
                                                        return <img src={img} key={index} className='object-cover rounded-lg' />
                                                    }) */}

                                            {/* <Folder
                                                className='flex justify-center items-center bg-transparent'
                                                size={1}
                                                color='#e20000'
                                                items={
                                                    currentCoach.gallery.map((img, index) => {
                                                        return <img src={img} key={index} className='object-cover rounded-lg' />
                                                    })
                                            } /> */}

                                            <Divider sx={{ display: {xs: 'block', md: 'none'}, my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

                                            {/* Action Buttons on Mobile */}
                                            <Box sx={{ display: {xs: 'flex', md: 'none'}, justifyContent: 'center', alignItems: 'center' }}>
                                                <StyledButton
                                                    href={currentCoach.article}
                                                    target='_blank'
                                                    text='Read More About Him'
                                                    borderRad={3}
                                                    icon={<OpenInNewIcon />}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <Paper
                        elevation={8}
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 4
                        }}
                    >
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                color: 'white',
                                mb: 2
                            }}
                        >
                            Coach Not Found
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: '#b0b0b0',
                                mb: 4
                            }}
                        >
                            Coach "{decodedName}" was not found in our database.
                        </Typography>
                        <Button
                            component={RouterLink}
                            to="/coaches"
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                color: 'white',
                                fontWeight: 700,
                                px: 4,
                                py: 2,
                                borderRadius: 3,
                                textTransform: 'none',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #c10000, #e55a2b)'
                                }
                            }}
                        >
                            View All Coaches
                        </Button>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
