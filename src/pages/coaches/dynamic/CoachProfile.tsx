import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { initialCoaches } from '../../../features/slices/coachesSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion'

export default function CoachProfile() {
    const { name } = useParams();
    const decodedName = name ? decodeURIComponent(name) : 'Unknown';

    document.title = `Titan MMA - Coach ${decodedName}`;
    const currentCoach = initialCoaches.find(coach => coach.name === decodedName);

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/coaches"
        >
          Coaches
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
          {decodedName}
        </Typography>,
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                >
                {breadcrumbs}
            </Breadcrumbs>
            {currentCoach ?
                <AnimatePresence mode="sync">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                         key={currentCoach.id} className="mt-4 bg-card flex gap-3 justify-between rounded-2xl p-6 shadow-2xl"
                        // className="text-center text-3xl font-medium text-foreground my-4 min-h-[4rem]"
                        >
                            <div className='flex flex-col justify-evenly'>
                                <div className="text-3xl font-bold mb-4">
                                    <h1>Coach {decodedName}</h1>
                                    <div>
                                        {currentCoach.specials.map((s, index) => {
                                            return <span key={index} className='text-lg -mt-1 px-3 mx-2 rounded-lg bg-[#e20000]'>{s}</span>
                                        })}
                                    </div>
                                </div>
                                <p>{currentCoach.description}</p>
                                <a href={currentCoach.article}
                                    target='_blank'
                                    className='flex items-center gap-1.5'
                                    aria-label={`Read More About Coach ${currentCoach.name}`}
                                >
                                    Read More About {currentCoach.gender === false ? 'Her' : 'Him'} 
                                    <OpenInNewIcon />
                                </a>
                            </div>
                            <img loading="lazy" src={currentCoach.img} width={400} height={400}
                                className='rounded-lg border-2 border-white' alt={`Coach ${currentCoach.name} Photo`} />
                        </motion.div>
                    </AnimatePresence>
            :
                <Typography sx={{ mt: 4, color: 'error.main' }}>
                    Coach "{decodedName}" not found.
                </Typography>
            }
        </Container>
    );
}
