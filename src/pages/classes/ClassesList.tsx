import { Link } from "react-router-dom";
import { initialClasses } from "../../features/slices/classesSlice";
// MUI Components
import { Avatar, Box, Card, CardContent, Chip, Container, Divider, Paper, Stack, Typography } from "@mui/material";
// MUI Icons
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LearnMorePopup from "./LearnMorePopup";
import StyledButton from "../../components/StyledButton";
// const hasPremiumAccess = has({ plan: 'gold' })

export default function ClassesList({isLoaded}: {isLoaded: boolean}) {

    const getClassIcon = (className: string) => {
        const name = className.toLowerCase();
        if (name.includes('mma') || name.includes('fundamentals')) return <SportsMmaIcon sx={{ fontSize: 40, color: '#e20000' }} />;
        if (name.includes('striking') || name.includes('muay thai')) return <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#ff6b35' }} />;
        if (name.includes('wrestling') || name.includes('bjj')) return <FitnessCenterIcon sx={{ fontSize: 40, color: '#2ecc71' }} />;
        return <EmojiEventsIcon sx={{ fontSize: 40, color: '#f1c40f' }} />;
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner': return '#27ae60';
            case 'Intermediate': return '#f39c12';
            case 'Advanced': return '#e74c3c';
            default: return '#95a5a6';
        }
    };

    return (
        <>
            <Container maxWidth="lg"
                sx={{
                    position: 'relative', zIndex: 10,
                    mb: {
                        xs: '48px',
                        md: '64px'
                    }
                }}
            >
                {/* Stats Row */}
                <Box 
                    sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: 3,
                        mb: 8,
                        transition: 'all 0.8s ease 0.4s',
                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isLoaded ? 1 : 0
                    }}
                >
                    {[
                        { icon: '🥊', label: 'Total Classes', value: initialClasses.length.toString() },
                        { icon: '⚡', label: 'Skill Levels', value: '3' },
                        { icon: '🔥', label: 'Active Students', value: '500+' }
                    ].map((stat, index) => (
                        <Paper
                            key={index}
                            elevation={8}
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 3,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(226, 0, 0, 0.3)'
                                }
                            }}
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                                {stat.value}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                                {stat.label}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
                {/* Classes Grid */}
                <Box 
                    sx={{
                        display: 'grid',
                        alignItems: {
                            xs: 'center',
                            md: 'flex-start'
                        },
                        justifyContent: {
                            xs: 'center',
                            md: 'flex-start'
                        },
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4
                    }}
                >
                    {initialClasses.map((c, index) => (
                        <Box key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                    opacity: isLoaded ? 1 : 0,
                                    animationDelay: `${index * 0.1}s`,
                                    '&:hover': {
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        border: '2px solid rgba(226, 0, 0, 0.3)'
                                    }
                                }}
                            >
                                {/* Image Section */}
                                <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                                    <img
                                        src={c.imgSrc}
                                        alt={c.name}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    />
                                    {/* Overlay with Level Badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            background: getLevelColor(c.level),
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: '0.875rem',
                                            fontWeight: 700,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        {c.level}
                                    </Box>
                                    {/* Price Badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            left: 16,
                                            background: 'rgba(0,0,0,0.8)',
                                            color: 'white',
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        ${c.price}
                                    </Box>
                                </Box>

                                <CardContent sx={{ p: 3 }}>
                                    {/* Header with Icon */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        {getClassIcon(c.name)}
                                        <Typography 
                                            variant="h5" 
                                            component="h2"
                                            sx={{ 
                                                fontWeight: 800,
                                                color: 'white',
                                                flex: 1
                                            }}
                                        >
                                            {c.name}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: '#e0e0e0',
                                            mb: 3,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {c.description}
                                    </Typography>

                                    {/* Coach Info */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography 
                                            component={Link} 
                                            to={c.coach.coachUrl}
                                            sx={{
                                                color: '#ff6b35',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                '&:hover': {
                                                    color: '#ff8c42',
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem' }}>
                                                <img
                                                src={c.coach.coachImg}
                                                alt={`${c.coach.coachName} Photo`}
                                                loading="lazy"
                                                className='hover:scale-[1.1]'
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                            </Avatar>
                                            {c.coach.coachName}
                                        </Typography>
                                    </Box>

                                    {/* Target Audience */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography 
                                            variant="subtitle2" 
                                            sx={{ 
                                                color: 'white', 
                                                mb: 1,
                                                fontWeight: 600
                                            }}
                                        >
                                            🎯 Perfect For:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {c.targetAudience.map((audience, index) => (
                                                <Chip 
                                                    key={index}
                                                    label={audience} 
                                                    size="small"
                                                    sx={{
                                                        color: 'white',
                                                        backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                                        border: '1px solid rgba(226, 0, 0, 0.5)',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(226, 0, 0, 0.5)'
                                                        }
                                                    }} 
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

                                    {/* Action Buttons */}
                                    <Stack direction="row" spacing={2}>
                                        <StyledButton
                                            href='/pricing'
                                            text='🥊 Book Class'
                                            borderRad={2}
                                            className="w-full text-center"
                                        />
                                        <LearnMorePopup card={c}/>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Container>
        </>
    );
}
