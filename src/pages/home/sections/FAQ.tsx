import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { InfoOutline } from "@mui/icons-material";
import HeaderComponent from "../../../components/HeaderComponent";

const faqs = [
  {
    question: "Do I need prior experience to join an MMA class?",
    answer:
      "Not at all! Our classes are beginner-friendly, and our coaches will guide you step by step. We also have advanced sessions for experienced fighters.",
  },
  {
    question: "What equipment do I need to bring?",
    answer:
      "We recommend bringing comfortable sportswear, a water bottle, and MMA gloves if you have them. If not, you can rent or buy gloves and gear from our gym shop.",
  },
  {
    question: "Can I try a class before subscribing?",
    answer:
      "Yes! We offer a free trial class so you can experience the training and environment before committing to a membership or package.",
  },
  {
    question: "What membership or subscription plans do you offer?",
    answer:
      "We provide flexible options, including single-class passes, monthly subscriptions, and yearly memberships. You can also access discounts for long-term plans.",
  },
  {
    question: "How do I book a class or manage my subscription?",
    answer:
      "Simply create an account on our website, log in, and you can book classes, subscribe to plans, and manage payments easily online.",
  },
  {
    question: "What happens if I miss a class?",
    answer:
      "If you miss a booked class, you can reschedule within the same week (subject to availability). Our system makes it easy to manage your bookings.",
  },
];

export default function FAQ() {

  return (
    <Box
      component="section"
      sx={{
        // bgcolor: "background.paper",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container>
        <HeaderComponent headingText="FAQ (Frequently Asked Questions)"/>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                "&:before": { display: "none" },
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
              }}
            >
              <AccordionSummary
                id={`panel-header-${index}`}
                expandIcon={<ExpandMoreIcon color="info" />}
                aria-controls={`panel-content-${index}`}
                sx={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                      border: '1px solid rgba(226, 0, 0, 0.3)'
                  }}}
              >
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <InfoOutline />
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
