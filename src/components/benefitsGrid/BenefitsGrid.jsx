import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaPiggyBank,
  FaHandsHelping,
  FaDollarSign,
  FaLightbulb,
  FaUserShield,
  FaCommentsDollar,
  FaChartLine,
  FaPeopleCarry,
  FaBusinessTime,
  FaGavel,
  FaHeart,
} from "react-icons/fa";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const BenefitsGrid = ({ title, items }) => {

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (

    <section ref={ref} className="py-12 bg-light text-base-content">
      <div className="max-w-7xl mx-auto px-4">
      <motion.h2 
          className="section-title text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {items.map((item, index) => {
            const IconComponent = React.createElement(
              {
                FaHandshake,
                FaPiggyBank,
                FaHandsHelping,
                FaDollarSign,
                FaLightbulb,
                FaUserShield,
                FaCommentsDollar,
                FaChartLine,
                FaPeopleCarry,
                FaBusinessTime,
                FaGavel,
                FaHeart,
              }[item.src]
            );

            return (
              <motion.div
                key={index}
                className="text-center p-4 bg-light text-primary rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center text-size-20 mb-4">
                  {IconComponent}
                </div>
                <p className="text-primary font-primary font-normal text-size-1 sm:text-size-2">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
