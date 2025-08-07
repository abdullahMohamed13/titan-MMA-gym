// custom components
import { initialFighters } from "../../features/slices/fightersSlice";
// MUI Components
import { Container } from "@mui/system";
// MUI Icons

export default function Students() {
    document.title = 'Titan MMA - Students';
    return <Container maxWidth="lg" sx={{ py: 4 }}>
        <h1>Students</h1>
        <div>
            {initialFighters.map((fighter) => (
                <div key={fighter.id}>
                    <h2>{fighter.name}</h2>
                    <p>{fighter.title}</p>
                </div>
            ))}
        </div>
    </Container>
}
