import { useState, useRef, useEffect } from 'react';
import {
    Box,
    Paper,
    Typography,
    IconButton,
    Backdrop,
    Fade,
    Container,
    keyframes
} from "@mui/material";
import {
    Close,
    ZoomIn,
    ChevronLeft,
    ChevronRight
} from '@mui/icons-material';
import HeaderComponent from '../../components/HeaderComponent';

// Keyframe animations
const float = keyframes`
    0%, 100% { transform: translateY(0px); opacity: 0.3; }
    50% { transform: translateY(-20px); opacity: 1; }
`;

const pulse = keyframes`
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
`;

const images = [
    { src: "/images/gallery/helmet-guy.webp", cols: 1, rows: 3, title: 'Fighter Focus', category: 'Technique' },
    { src: "/images/gallery/khamzat.webp", cols: 1, rows: 2, title: 'Khamzat being Khamzat', category: 'Portrait' },
    { src: "/images/gallery/stance.jpeg", cols: 1, rows: 1, title: 'Combat Stance', category: 'Training' },
    { src: "/images/titan-gym.webp", cols: 1, rows: 1, title: 'Titan Gym', category: 'Facility' },
    { src: "/images/gallery/guard.webp", cols: 2, rows: 4, title: 'Boxing Session', category: 'Boxing' },
    { src: "/images/gallery/gym.webp", cols: 1, rows: 1, title: 'Titan Gym', category: 'Facility' },
    { src: "/images/gallery/bjj.webp", cols: 1, rows: 3, title: 'BJJ Session', category: 'BJJ' },
    { src: "/images/titan-gym-2.webp", cols: 1, rows: 3, title: 'Training Floor', category: 'Facility' },
    { src: "/images/gallery/islam-javier-mendez.webp", cols: 1, rows: 1, title: 'Coach With Champion', category: 'Portrait' },
    { src: "/images/gallery/preparation-for-the-fight.webp", cols: 1, rows: 2, title: 'Fight Prep', category: 'Training' },
    { src: "/images/gallery/muay-thai.webp", cols: 1, rows: 2, title: 'Muay Thai', category: 'Training' },
    { src: "/images/gallery/striking.webp", cols: 3, rows: 1, title: 'Striking Practice', category: 'Training' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const openLightbox = (img: any, index: number) => {
        setSelectedImage(img);
        setImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (imageIndex + 1) % images.length;
        setImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
        setImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <Box sx={{borderTop: '8px solid white'}}>
            <Box
                component="section"
                ref={containerRef}
                sx={{
                    minHeight: '100vh',
                    pt: { xs: 6, md: 8 },
                    pb: 6,
                    position: 'relative',
                    overflow: 'hidden',
                    // Minimal background with subtle red gradient
                    background: `
                        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                            rgba(226,0,0,0.08) 0%, 
                            transparent 50%),
                        linear-gradient(135deg, 
                            #0a0a0a 0%, 
                            #1a0a0a 50%, 
                            #000000 100%)
                    `,
                    // Flying Dots
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `
                            radial-gradient(circle at 1px 1px, rgba(226,0,0,0.1) 1px, transparent 0)
                        `,
                        backgroundSize: '60px 60px',
                        pointerEvents: 'none',
                        opacity: 0.3
                    }
                }}
            >
                {/* Minimal floating particles */}
                {[...Array(8)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            width: 2,
                            height: 2,
                            borderRadius: '50%',
                            background: '#e20000',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `${float} ${4 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: 0.4,
                            boxShadow: `0 0 8px rgba(226,0,0,0.3)`
                        }}
                    />
                ))}

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <HeaderComponent
                        headingText="Gallery"
                        subHeadingText="Inside the Cage: Moments from Our Fighters' Training"
                    />
                    
                    <Box
                        sx={{
                            display: "grid",
                            gap: { xs: 2, md: 3 },
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                md: "repeat(4, 1fr)",
                                lg: "repeat(6, 1fr)",
                            },
                            gridAutoRows: {
                                xs: "15vw",
                                sm: "12vw",
                                md: "10vw",
                                lg: "8vw"
                            },
                        }}
                    >
                        {images.map((img, index) => (
                            <Paper
                                key={index}
                                onClick={() => openLightbox(img, index)}
                                elevation={0}
                                sx={{
                                    gridColumn: `span ${Math.min(img.cols, 3)}`,
                                    gridRow: `span ${img.rows}`,
                                    overflow: "hidden",
                                    borderRadius: 3,
                                    cursor: 'pointer',
                                    position: 'relative',
                                    background: 'rgba(255,255,255,0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(45deg, rgba(226,0,0,0.1), rgba(226,0,0,0.05))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        zIndex: 2,
                                        borderRadius: 'inherit'
                                    },

                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -1,
                                        left: -1,
                                        right: -1,
                                        bottom: -1,
                                        background: 'linear-gradient(45deg, #e20000, transparent, #e20000)',
                                        borderRadius: 'inherit',
                                        zIndex: -1,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        animation: `${pulse} 4s linear infinite`
                                    },

                                    "&:hover": {
                                        transform: "scale(1.03) translateY(-4px)",
                                        boxShadow: `
                                            0 20px 40px rgba(0,0,0,0.3),
                                            0 0 30px rgba(226,0,0,0.2),
                                            inset 0 1px 0 rgba(255,255,255,0.1)
                                        `,
                                        '&::before': {
                                            opacity: 1
                                        },
                                        '&::after': {
                                            opacity: 0.5
                                        },
                                        '& .image-overlay': {
                                            opacity: 1,
                                            transform: 'translateY(0)'
                                        },
                                        '& .zoom-icon': {
                                            opacity: 1,
                                            transform: 'translate(-50%, -50%) scale(1)'
                                        },
                                        '& .category-chip': {
                                            transform: 'translateY(0)',
                                            opacity: 1
                                        },
                                        '& img': {
                                            transform: 'scale(1.05)'
                                        }
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={img.src}
                                    alt={img.title}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease',
                                        borderRadius: 'inherit'
                                    }}
                                />
                                
                                {/* Category chip */}
                                <Paper
                                    className="category-chip"
                                    elevation={0}
                                    sx={{
                                        position: 'absolute',
                                        top: 12,
                                        left: 12,
                                        px: 1.5,
                                        py: 0.5,
                                        background: 'rgba(0,0,0,0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(226,0,0,0.3)',
                                        borderRadius: 12,
                                        transform: 'translateY(-8px)',
                                        opacity: 0,
                                        transition: 'all 0.3s ease',
                                        zIndex: 3
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '0.7rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        {img.category}
                                    </Typography>
                                </Paper>

                                {/* Overlay */}
                                <Box
                                    className="image-overlay"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 100%)',
                                        p: 2.5,
                                        opacity: 0,
                                        transform: 'translateY(15px)',
                                        transition: 'all 0.3s ease',
                                        zIndex: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            mb: 0.5,
                                            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        {img.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        Click to view full size
                                    </Typography>
                                </Box>

                                {/* Zoom Icon */}
                                <IconButton
                                    className="zoom-icon"
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%) scale(0)',
                                        opacity: 0,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        background: 'rgba(0,0,0,0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '2px solid rgba(226,0,0,0.5)',
                                        color: 'white',
                                        zIndex: 4,
                                        width: 56,
                                        height: 56,
                                        '&:hover': {
                                            background: 'rgba(226,0,0,0.2)',
                                            borderColor: '#e20000',
                                            transform: 'translate(-50%, -50%) scale(1.1)'
                                        }
                                    }}
                                >
                                    <ZoomIn sx={{ fontSize: 24 }} />
                                </IconButton>

                                {/* Minimal corner accents */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 6,
                                    left: 6,
                                    width: 16,
                                    height: 16,
                                    borderLeft: '2px solid #e20000',
                                    borderTop: '2px solid #e20000',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 3,
                                    '.MuiPaper-root:hover &': { opacity: 0.8 }
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 6,
                                    right: 6,
                                    width: 16,
                                    height: 16,
                                    borderRight: '2px solid #e20000',
                                    borderBottom: '2px solid #e20000',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 3,
                                    '.MuiPaper-root:hover &': { opacity: 0.8 }
                                }} />
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Lightbox */}
            <Backdrop
                open={!!selectedImage}
                onClick={closeLightbox}
                sx={{ 
                    zIndex: 1300,
                    background: 'rgba(0,0,0,0.95)',
                    backdropFilter: 'blur(20px)'
                }}
            >
                <Fade in={!!selectedImage}>
                    <Box
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            position: 'relative',
                            maxWidth: '95vw',
                            maxHeight: '95vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -2,
                                left: -2,
                                right: -2,
                                bottom: -2,
                                background: 'linear-gradient(45deg, #e20000, transparent, #e20000)',
                                borderRadius: 12,
                                zIndex: -1,
                                filter: 'blur(4px)',
                                animation: `${pulse} 6s linear infinite`
                            }
                        }}
                    >
                        {selectedImage && (
                            <Paper
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    background: 'rgba(0,0,0,0.9)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(226,0,0,0.2)',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    maxWidth: '100%',
                                    maxHeight: '100%'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    sx={{
                                        display: 'block',
                                        maxWidth: '100%',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }}
                                />
                                
                                {/* Close button */}
                                <IconButton
                                    onClick={closeLightbox}
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        background: 'rgba(0,0,0,0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(226,0,0,0.3)',
                                        color: 'white',
                                        width: 44,
                                        height: 44,
                                        '&:hover': {
                                            background: 'rgba(226,0,0,0.2)',
                                            transform: 'rotate(90deg)',
                                            borderColor: '#e20000'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Close />
                                </IconButton>

                                {/* Navigation buttons */}
                                <IconButton
                                    onClick={prevImage}
                                    sx={{
                                        position: 'absolute',
                                        left: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(226,0,0,0.3)',
                                        color: 'white',
                                        width: 44,
                                        height: 44,
                                        '&:hover': {
                                            background: 'rgba(226,0,0,0.2)',
                                            transform: 'translateY(-50%) scale(1.1)',
                                            borderColor: '#e20000'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <ChevronLeft />
                                </IconButton>

                                <IconButton
                                    onClick={nextImage}
                                    sx={{
                                        position: 'absolute',
                                        right: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0,0,0,0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(226,0,0,0.3)',
                                        color: 'white',
                                        width: 44,
                                        height: 44,
                                        '&:hover': {
                                            background: 'rgba(226,0,0,0.2)',
                                            transform: 'translateY(-50%) scale(1.1)',
                                            borderColor: '#e20000'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <ChevronRight />
                                </IconButton>

                                {/* Image info */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                        p: 3,
                                        color: 'white'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: 'white'
                                        }}
                                    >
                                        {selectedImage.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                            {selectedImage.category}
                                        </Typography>
                                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: '#e20000' }} />
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                            {imageIndex + 1} of {images.length}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        )}
                    </Box>
                </Fade>
            </Backdrop>
        </Box>
    );
}
