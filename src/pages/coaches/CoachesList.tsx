import { useState, useEffect } from 'react';
import { 
    Card, 
    CardContent, 
    Typography, 
    Box, 
    Chip, 
    Avatar,
    Button,
    Tooltip,
    Stack
} from '@mui/material';
import { initialCoaches } from '../../features/slices/coachesSlice';
import { Link } from 'react-router-dom';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import StyledButton from '../../components/StyledButton';

export default function CoachesList() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    
    const getCoachIcon = (coachName: string) => {
        const name = coachName.toLowerCase();
        if (name.includes('khabib') || name.includes('wrestling')) return <SportsMmaIcon sx={{ fontSize: 30, color: '#2ecc71' }} />;
        if (name.includes('kayla') || name.includes('judo')) return <EmojiEventsIcon sx={{ fontSize: 30, color: '#f1c40f' }} />;
        if (name.includes('javier') || name.includes('mendez')) return <StarIcon sx={{ fontSize: 30, color: '#e20000' }} />;
        return <SportsMmaIcon sx={{ fontSize: 30, color: '#ff6b35' }} />;
    };

    return (
        <>
            {initialCoaches.map((coach, index) => (
                <Card
                    key={coach.id}
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
                    <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                        <img
                            src={coach.img}
                            alt={coach.name}
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
                        {/* Overlay with Icon */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                background: 'rgba(0,0,0,0.8)',
                                color: 'white',
                                p: 1,
                                borderRadius: '50%',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {getCoachIcon(coach.name)}
                        </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                        {/* Header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Avatar
                                sx={{
                                    width: 50,
                                    height: 50,
                                    background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                                    fontSize: '1.2rem',
                                    fontWeight: 700
                                }}
                            >
                                {coach.name.split(' ').map(n => n[0]).join('')}
                            </Avatar>
                            <Box sx={{ flex: 1 }}>
                                <Typography 
                                    variant="h5" 
                                    component="h2"
                                    sx={{ 
                                        fontWeight: 800,
                                        color: 'white',
                                        mb: 0.5
                                    }}
                                >
                                    {coach.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#b0b0b0',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {coach.title}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Description */}
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: '#e0e0e0',
                                mb: 3,
                                lineHeight: 1.6,
                                fontSize: '0.95rem',
                                display: '-webkit-box',
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {coach.description}
                        </Typography>

                        {/* Specializations */}
                        <Box sx={{ mb: 3 }}>
                            <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                    color: 'white', 
                                    mb: 1,
                                    fontWeight: 600
                                }}
                            >
                                🎯 Specializations:
                            </Typography>
                            <Stack direction='row' sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {coach.specials.map((special, index) => (
                                    <Chip 
                                        key={index}
                                        label={special} 
                                        size="small"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: 'rgba(226, 0, 0, 0.3)',
                                            border: '1px solid rgba(226, 0, 0, 0.5)',
                                            fontWeight: 500,
                                            fontSize: '0.75rem',
                                            '&:hover': {
                                                backgroundColor: 'rgba(226, 0, 0, 0.5)'
                                            }
                                        }} 
                                    />
                                ))}
                            </Stack>
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', alignSelf: 'flex-end' , gap: 1 }}>
                            <StyledButton
                                component={Link}
                                to={`/coaches/${encodeURIComponent(coach.name)}`}
                                text='👨‍🏫 View Profile'
                                borderRad={2}
                                className="w-full"
                            />
                            <Tooltip title='Read about him'>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component="a"
                                    href={coach.article}
                                    target="_blank"
                                    sx={{
                                        borderColor: 'rgba(255,255,255,0.3)',
                                        color: 'white',
                                        fontWeight: 600,
                                        py: 1.5,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        minWidth: 'auto',
                                        px: 2,
                                        '&:hover': {
                                            borderColor: '#e20000',
                                            backgroundColor: 'rgba(226, 0, 0, 0.1)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    📖
                                </Button>
                            </Tooltip>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
