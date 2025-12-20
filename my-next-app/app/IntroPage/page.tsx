"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const words = ["Welcome", "to", "My", "FolioHub"];

export default function IntroAnimation() {
  const [show, setShow] = useState(true);
  const router = useRouter();

  // Duration of loading bar in seconds
  const loadingDuration = 4.5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      router.push("/"); // Redirect to portfolio page
    }, loadingDuration * 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1c1b21] perspective-1000"
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Soft 3D Glow */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-25"
            style={{
              background:
                "radial-gradient(circle, var(--primary-color), transparent 70%)",
            }}
          />

          {/* Word-by-word 3D text */}
          <div className="flex flex-wrap justify-center gap-2 text-4xl font-bold font-unbounded text-white mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: i * 0.16,
                  duration: 1.5,
                  ease: "easeOut",
                }}
                style={{
                  color: word === "FolioHub" ? "var(--primary-color)" : "white",
                }}
              >
                {word}
              </motion.span>
            ))}

            {/* Cursor */}
            
          </div>

          {/* Loading bar container */}
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-1 bg-[var(--primary-color)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: loadingDuration, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
