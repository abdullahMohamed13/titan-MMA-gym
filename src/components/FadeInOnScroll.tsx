import { motion } from "framer-motion";

export default function FadeInOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }} // animate every time it enters/leaves
      transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      exit={{ opacity: 0, y: 40 }} // fades out when leaving
    >
      {children}
    </motion.section>
  );
}
