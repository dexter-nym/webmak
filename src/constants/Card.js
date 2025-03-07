import { motion, useMotionValue, useTransform } from "framer-motion";
import cardData from "@/constants/cardData";
import "@/components/SeventhSection/SeventhSection.css";

const Card = ({ id, url, cards, setCards, originalCards }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const lastCardIndex = cards.length - 1;
  const secondLastCardIndex = cards.length - 2;

  const isFront = id === cards[lastCardIndex]?.id;
  const isSecondFront = id === cards[secondLastCardIndex]?.id;

  const rotate = useTransform(() => {
    if (isFront || isSecondFront) return "0deg";
    return id % 2 ? "6deg" : "-6deg";
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prevCards) => {
        const updatedCards = prevCards.filter((v) => v.id !== id);

        if (updatedCards.length === 0) {
          setTimeout(() => {
            setCards([...cardData]); // Reset after a short delay
          }, 100); // Delay allows animation to complete
        }

        return updatedCards;
      });

      // Reset motion values
      x.set(0);
      opacity.set(1);
    }
  };

  return (
    <motion.img
      src={url}
      alt={`Card ${id}`}
      className="framer-image transition-all duration-500 ease-in-out"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "4px 20px 25px -5px rgb(0 0 0 / 0.6), 0px 8px 10px -6px rgb(0 0 0 / 0.6)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default Card;
