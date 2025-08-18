import { useParams, Link as LinkRouter } from 'react-router-dom';
import { Container, Box, Typography, Link, Chip, Paper, Divider, Avatar } from '@mui/material';
import { initialBranches } from '../../features/slices/branchesSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Branch() {
    const { name } = useParams();
    const decodedName = name ? decodeURIComponent(name) : 'Unknown';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    document.title = `Titan MMA - Branch ${decodedName}`;
    const currentBranch = initialBranches.find(branch => branch.name === decodedName);

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
        <Typography key="3" sx={{ color: 'white' }}>
          {decodedName} Branch
        </Typography>,
    ];

    return (
        <Box
            sx={{
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

                {currentBranch ? (
                    <AnimatePresence mode="sync">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            key={currentBranch.id}
                        >
                            <Paper
                                elevation={8}
                                sx={{
                                    textAlign: {
                                        xs: 'center',
                                        md: 'left'
                                    },
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
                                <Box sx={{ p: 6 }}>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                                        {/* Image Section */}
                                        <Box sx={{ flexShrink: 0 }}>
                                            <Box sx={{ position: 'relative' }}>
                                                <img 
                                                    loading="lazy" 
                                                    src={currentBranch.img}
                                                    alt={`${currentBranch.name} Branch`}
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
                                            </Box>
                                        </Box>

                                        {/* Content Section */}
                                        <Box sx={{ flex: 1 }}>
                                            {/* Header */}
                                            <Box>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: {xs: 'column', md: 'row'},
                                                    alignItems: 'center',
                                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                                    gap: {xs: 0, md: 2} }}
                                                >
                                                    <Typography 
                                                        variant="h2"
                                                        component="h1"
                                                        sx={{
                                                            fontSize: {xs: '25px', md: '32px'},
                                                            fontWeight: 900,
                                                            background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                            backgroundClip: 'text',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                        }}
                                                    >
                                                        {currentBranch.name} Branch
                                                    </Typography>
                                                    <Box component='img'
                                                        src={currentBranch.countryImg}
                                                        alt="country"
                                                        sx={{width: 50, height: 50}}
                                                    />
                                                </Box>
                                                <Typography 
                                                    variant='subtitle1'
                                                    sx={{mb: 4, color: '#999'}}
                                                >
                                                    {currentBranch.address}
                                                </Typography>
                                                <Box sx={{
                                                    mb: 3,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: {xs: 'center', md: 'flex-start'},
                                                    flexWrap: 'wrap',
                                                    gap: 1,
                                                }}>
                                                    <Typography variant="subtitle1">
                                                        Working Hours:
                                                    </Typography>
                                                    <Chip
                                                        label={currentBranch.workingHours}
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
                                                </Box>
                                            </Box>

                                            {/* Description */}
                                            <Typography variant="subtitle1">
                                                Phone: {currentBranch.phone}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Mail Us: {currentBranch.email}
                                            </Typography>

                                            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                                            
                                            {/* Coach Section */}
                                            <Typography 
                                                variant="h4" 
                                                component="h3"
                                                sx={{
                                                    mb: 2,
                                                    fontWeight: 900,
                                                    background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }}
                                            >
                                                Branch's Coach
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2.5
                                            }}>
                                                <Avatar src={currentBranch.coach.coachImg}
                                                    sx={{
                                                        width: 80,
                                                        height: 80,
                                                    }}
                                                />
                                                <Link component={LinkRouter} to={currentBranch.coach.coachUrl}>
                                                    <Typography variant='body1'>
                                                        Coach {currentBranch.coach.coachName}
                                                    </Typography>
                                                </Link>
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
                            Branch Not Found
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: '#b0b0b0',
                                mb: 4
                            }}
                        >
                            Branch "{decodedName}" was not found in our database.
                        </Typography>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
