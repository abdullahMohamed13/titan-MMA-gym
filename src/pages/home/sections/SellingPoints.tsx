import { Link } from 'react-router-dom';
// MUI Components
import { Box, Container, Typography, Paper, Stack, Chip, Tooltip } from '@mui/material';
// MUI Icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
// custom components
import HeaderComponent from '../../../components/HeaderComponent';
import StyledButton from '../../../components/StyledButton';

export default function SellingPoints() {
  const sellingPoints = [
    {
      icon: <SportsMmaIcon sx={{ fontSize: 50, color: '#e20000' }} />,
      title: 'Elite UFC-Level Training',
      desc: 'Train with coaches who have produced UFC champions. Learn the same techniques used by the pros.',
      highlight: 'UFC Champions Trained',
      color: '#e20000'
    },
    {
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 50, color: '#ff6b35' }} />,
      title: 'Intense Fight Conditioning',
      desc: 'Build the endurance and strength of a professional fighter. Our conditioning programs are legendary.',
      highlight: 'Pro-Level Conditioning',
      color: '#ff6b35'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 50, color: '#009999' }} />,
      title: 'Fighter Brotherhood',
      desc: 'Join a community of dedicated fighters. Train with people who share your passion and drive.',
      highlight: 'Fighter Community',
      color: '#009999'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 50, color: '#2ecc71' }} />,
      title: 'Safe, Controlled Environment',
      desc: 'Learn proper technique in a safe environment. We prioritize your safety while pushing your limits.',
      highlight: 'Safety First',
      color: '#2ecc71'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: '#f1c40f' }} />,
      title: 'Competition Ready',
      desc: 'Whether you want to compete or just train like a fighter, we\'ll get you competition-ready.',
      highlight: 'Compete or Train',
      color: '#f1c40f',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 50, color: '#9b59b6' }} />,
      title: 'Rapid Skill Development',
      desc: 'See dramatic improvements in your technique, speed, and fight IQ within weeks, not months.',
      highlight: 'Fast Results',
      color: '#9b59b6'
    },
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <HeaderComponent
            headingText='why fighters choose titan gym'
            subHeadingText='Join the ranks of champions. Train where legends are made.' />

          {/* Social Proof */}
          <Stack direction={
            {
              xs: 'column',
              sm: 'row',
            }
          } spacing={2} justifyContent="center" alignItems="center" mb={4}>
            <Chip 
              icon={<StarIcon />} 
              label="500+ Active Fighters" 
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }} 
            />
            <Tooltip title="Click to see the fighters">
              <Link to='students'>
                <Chip 
                  icon={<EmojiEventsIcon />} 
                  label="15 UFC Fighters" 
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }} 
                  />
                </Link>
              </Tooltip>
              <Chip 
              icon={<FitnessCenterIcon />} 
              label="24/7 Access" 
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }} 
            />
          </Stack>
        </Box>

        {/* Selling Points Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            }, 
            gap: 4,
            mb: 8
          }}
        >
          {sellingPoints.map((point, index) => (
            <Paper 
              key={index} 
              elevation={8}
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%', 
                borderRadius: 3,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(226, 0, 0, 0.3)'
                }
              }}
            >
              <Box sx={{ mb: 3 }}>
                {point.icon}
              </Box>
              
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 2
                }}
              >
                {point.title}
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#b0b0b0',
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                {point.desc}
              </Typography>
              
              <Chip 
                label={point.highlight}
                sx={{ 
                  backgroundColor: `${point.color}20`,
                  color: point.color,
                  border: `1px solid ${point.color}`,
                  fontWeight: 600
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* CTA */}
        <Box textAlign="center">
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700,
              mb: 3,
            }}
          >
            READY TO BECOME A FIGHTER?
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#b0b0b0',
              mb: 4,
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            Book your first class today and experience the difference. 
            No experience required - we'll teach you everything from the ground up.
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <StyledButton
              text='BOOK YOUR FIRST CLASS'
              href='/classes'
              size='large'
              fontSize='1.1rem'
              borderRad={1}
            />
          </Stack>
          
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block',
              mt: 2,
              color: '#888',
              fontStyle: 'italic'
            }}
          >
            * Limited time offer. First class includes free gear rental.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
