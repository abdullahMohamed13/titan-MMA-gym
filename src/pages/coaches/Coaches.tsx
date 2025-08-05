// import { Card } from "flowbite-react";
import { ToastComponent } from "../../components/Toast";
import ScrollReveal from "../../components/ScrollReveal";
import CoachesList from "./CoachesList";
import { Container } from "@mui/system";

export default function Coaches() {
    document.title = 'Titan MMA - Coaches';
    
    return <Container maxWidth="lg" sx={{ py: 4 }}>
        <h1>Titan GYM Expert Coaches</h1>
        <p>Our certified trainers follow a strict UFC approved curriculum, making them the best in the region.</p>
        <p>They offer personalised fitness plans, progress assessments, and hands-on coaching to help you achieve your fitness and MMA goals.</p>

        <div className="grid grid-cols-3 gap-6 p-4">
            <CoachesList />
        </div>

        {/* <Card imgSrc="images/coaches/abdallah-mohamed.png" imgAlt="Coach">Click</Card> */}
        {/* <ToastComponent /> */}
    </Container>
}
