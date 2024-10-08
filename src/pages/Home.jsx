import Popular from "../components/popular/Popular";
import Veggies from "../components/veggies/Veggies";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggies />
    </motion.div>
  );
}

export default Home;
