import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LinkPreviewExample = ({ title, description, img, href }) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium dark:text-darkTextColor underline"
      >
        {title}
      </Link>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: position.x - 100,
              y: position.y - 40,
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute z-50 w-64 rounded-lg border dark:bg-black dark:border-slate-700 bg-white p-3 shadow-lg pointer-events-none"
            style={{ bottom: 0, left: 0 }}
          >
            <h4 className="text-lg font-semibold dark:text-[#d2e5f5]">
              {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-[#abc2d3] mt-1">
              {description}
            </p>
            <Image
              width={200}
              height={200}
              src={img}
              alt="Preview"
              className="mt-2 w-fit rounded"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkPreviewExample;
