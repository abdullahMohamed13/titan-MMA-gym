import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent';
import { CardHeader } from '@mui/material';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

const testimonials = [
    {
        name: 'Ilia Topuria', 
        text: 'High quality training and support. I had the honour to train under coach Khabib',
        UFCTitle: 'UFC Double Champ',
        ownedClass: 'Striking',
        img: '/images/fighters/ilia.webp',
        flag: '/images/fighters/flags/georgia.webp',
    },
    { 
        name: 'islam Mmakhachev',
        text: 'I love that they opened a branch in Dagestan. If you want your son good wrestling send him 2-3 years titan gym and forget bratha',
        UFCTitle: 'Former Lightweight Champ',
        img: '/images/fighters/islam.webp',
        flag: '/images/fighters/flags/russia.webp',
    },
    {
        name: 'Dricus Du Plessis', 
        text: 'Training with coach Rener Gracie was a pleasure for me. It helped a lot with my ground-game',
        UFCTitle: 'UFC Middleweight Champ',
        ownedClass: 'BJJ',
        img: '/images/fighters/dricus.webp',
        flag: '/images/fighters/flags/south-africa.webp',
    },
    {
        name: 'Alex Pereira', 
        text: 'Chama 🗿',
        UFCTitle: 'Former Light-Heavyweight Champ',
        img: '/images/fighters/pereira.webp',
        flag: '/images/fighters/flags/brazil.webp',
    },
    { 
        name: 'Jon Jones',
        text: 'After training with coach Mike, I plan to stop ducking Top Aspinall and give him his title shot. Thx Coach ❤', 
        UFCTitle: 'Former Heavyweight Champ',
        ownedClass: 'Kickboxing',
        img: '/images/fighters/jones.webp',
        flag: '/images/fighters/flags/us.webp',
    },
    { 
        name: 'GSP', 
        text: "It's more than just training here, it's a fight family. I feel ready for war.", 
        UFCTitle: 'UFC Double Champ',
        img: '/images/fighters/gsp.webp',
        flag: '/images/fighters/flags/canada.webp',
    },
    { 
        name: 'Dustin Poirier', 
        text: 'Explosive sessions, elite-level coaching, and the mindset of a champion.',
        UFCTitle: 'The Diamond',
        img: '/images/fighters/dustin.webp',
        flag: '/images/fighters/flags/us.webp',
    },
    { 
        name: 'Alexander Volkanovski', 
        text: 'Every session here feels like a step closer to domination. World-class facility.',
        UFCTitle: 'Former UFC Featherweight Champ',
        ownedClass: 'Judo',
        img: '/images/fighters/volk.webp',
        flag: '/images/fighters/flags/aus.webp',
    },
];

export default function Testimonials() {
  return <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'wrap',
        position: 'relative',
        width: '100%',
        py: 4,
      }}
    >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
            <HeaderComponent headingText='testimonials' subHeadingText='Fighters experience after asssad jsadh asjdjdsahj our classes' />
        </Box>
      <Box
        sx={{
            display: 'inline-flex',
            animation: {
                xs: 'scroll 190s linear infinite',
                sm: 'scroll 130s linear infinite'
            },
            '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            '&:hover': {
                animationPlayState: 'paused',
            }
        }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <Card
            key={index}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: {
                    xs: 250,
                    sm: 300
                },
                maxWidth: 350,
                textWrap: 'wrap',
                mx: 2,
                flexShrink: 0,
                backgroundColor: 'var(--background)',
                borderRadius: 2,
                boxShadow: 3,
                ":first-of-type": {
                    marginLeft: {
                        xs: '300px',
                        sm: '450px'
                }
                }
            }}
          >
            <CardHeader
                avatar={testimonial.img !== '' && <Avatar src={testimonial.img} sx={{ width: 56, height: 56 }}/>}
                action={testimonial.img !== '' && <Avatar src={testimonial.flag}/>}
                title={
                    <Typography variant="subtitle1">
                        {testimonial.name.toUpperCase()}
                    </Typography>}
                subheader={<Typography variant="caption" color="gray">
                        {testimonial.UFCTitle}
                    </Typography>}
            />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1 
                }}
            >
                <Typography variant="body1" gutterBottom>
                    "{testimonial.text}"
                </Typography>
                {testimonial.ownedClass &&
                    <Box
                        sx={{
                            background: 'linear-gradient(45deg, #e20000, #ff6b35)',
                            justifySelf: 'self-end',
                            marginTop: 'auto',
                            fontSize: {
                                xs: '12px',
                                md: '14px',
                            },
                            textAlign: 'center',
                            fontWeight: 700,
                            py: 1.2,
                            borderRadius: 1.5,
                            textTransform: 'none',
                            boxShadow: '0 8px 25px rgba(226, 0, 0, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #c10000, #e55a2b)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 12px 35px rgba(226, 0, 0, 0.4)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <SportsMartialArtsIcon sx={{ fontSize: 20, mr: 1 }} /> Bought the {testimonial.ownedClass} Class
                    </Box>
                }
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
}
