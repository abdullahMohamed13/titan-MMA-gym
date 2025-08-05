import ScrollReveal from "../../components/ScrollReveal";
import ProfileCard from "./ProfileCard";
import { initialCoaches } from "../../features/slices/coachesSlice";

export default function CoachesList() {
    return <>
        {initialCoaches.map((coach, index) => {
            return <ScrollReveal key={index}>
                <ProfileCard
                    key={coach.id}
                    name={coach.name}
                    img={coach.img}
                    specials={coach.specials}
                />
            </ScrollReveal>
        })}
    </>
}
