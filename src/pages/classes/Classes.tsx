import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Classes() {
    document.title = 'Titan MMA - Classes';
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Classes
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Card>
                    <CardHeader title="MMA Training" />
                    <CardContent>
                        <Typography variant="body1">
                            Join our comprehensive MMA training classes designed for all skill levels.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
