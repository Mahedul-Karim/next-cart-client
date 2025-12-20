import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export const FAQs = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "Browse the products, add the items you want to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.",
  },
  {
    id: 2,
    question: "Do I need an account to make a purchase?",
    answer:
      "You can browse products without an account, but creating an account allows you to track orders, save addresses, and have a faster checkout experience.",
  },
  {
    id: 3,
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit and debit cards. Additional payment options may be added in the future.",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer:
      "Delivery times depend on your location and the product. Estimated delivery dates are shown during checkout.",
  },
  {
    id: 5,
    question: "Can I cancel or change my order?",
    answer:
      "Orders can only be canceled or changed before they are processed. Please contact support as soon as possible if you need help with an order.",
  },
  {
    id: 6,
    question: "What is your return policy?",
    answer:
      "Items can be returned within a specified period if they are unused and in their original condition. Please check our return policy page for more details.",
  },
  {
    id: 7,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive tracking information via email or in your account dashboard.",
  },
  {
    id: 8,
    question: "Are my personal details secure?",
    answer:
      "Yes. We take data security seriously and use industry-standard measures to protect your personal information.",
  },
  {
    id: 9,
    question: "Do you offer customer support?",
    answer:
      "Yes. If you have any questions or issues, you can contact our support team through the contact page.",
  },
];

const Page = () => {
  return (
    <Container sx={{ paddingBlock: 6 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {FAQs.map((faq) => (
          <Accordion
            key={faq.id}
            elevation={0}
            sx={{ "&::before": { display: "none" },bgcolor:"background.paper" }}
          >
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls={`panel${faq.id}-content`}
              id={`panel${faq.id}-header`}
            >
              <Typography
                component="span"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "text.secondary" }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default Page;
