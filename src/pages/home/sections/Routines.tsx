import ScrollStack, { ScrollStackItem } from '../../../components/animated/ScrollStack'
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/system";
import { Link } from 'react-router-dom';
import { Chip, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { initialClasses } from '../../../features/slices/classesSlice';

export default function Routines() {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
    return <Box
              component="section"
              sx={{
                // bgcolor: "background.paper",
                py: { xs: 6, md: 8 },
              }}
            >
                <Container sx={{ py: 4, width: '100%' }}>
                    <Typography
                    variant={isSmUp ? "h3" : "h4"}
                    component="h2"
                    gutterBottom
                    fontWeight={700}
                    sx={{ mb: 4 }}
                    >
                    Our Routines
                    </Typography>
                    <div className="scroll-stack-container" style={{ height: '80vh', marginTop: '0.5rem' }}> {/* 80vh */}
                        <ScrollStack className='text-white'>
                            {initialClasses.map((routine, index) => {
                                return <ScrollStackItem key={index}
                                className="flex justify-between gap-4" style={{ backgroundColor: routine.cardBgColor }}>
                                        <div>
                                            <h2>{routine.name}</h2>
                                            <p>{routine.description}</p>
                                            <a href={routine.coachUrl}>Coach: {routine.coach}</a>
                                            <div className='mr-1'>Target Audience:
                                                {routine.targetAudience.map((ta, index) => {
                                                    return <Chip label={ta} key={index}
                                                    className='m-1' sx={{color: 'white'}} variant="filled" />
                                                })}
                                            </div>
                                            <div className='flex gap-4 items-center'>
                                                <p className='text-xl'>{routine.price}$</p>
                                                <Link to={routine.classUrl}>
                                                    <button
                                                    className="w-full sm:w-auto rounded-lg px-6 py-3 bg-primary hover:bg-white
                                                    hover:text-black font-semibold shadow-lg transition">
                                                    Book A Class
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <img
                                          loading="lazy"
                                          src={routine.imgSrc} className='rounded-lg border-2 border-primary'
                                          width={200} height={170} alt={`${routine.name} Routine`} />
                                    </ScrollStackItem>
                            })}
                        </ScrollStack>
                    </div>
                </Container>
            </Box>
}

{/*
            <Grid container spacing={2}>
            <Grid size={4}>
                <Stack spacing={2}>
                    <Item sx={{padding: '5px 10px'}}>Column 1 - Row 1</Item>
                    <Item sx={{padding: '5px 10px'}}>Column 1 - Row 2</Item>
                </Stack>
            </Grid>
            <Grid size={3}>
                <Item sx={{padding: '5px 10px'}}>Column 1 - Row 3</Item>
            </Grid>
            <Grid size={5}>
                <Item sx={{padding: '5px 10px'}}>Column 1 - Row 3</Item>
            </Grid>
            <Grid size={8}>
                <Item sx={{ height: '100%', padding: '5px 10px' }}>Column 2</Item>
            </Grid>
        </Grid>
     */} 