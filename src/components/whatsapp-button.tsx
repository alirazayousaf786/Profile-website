import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "923186024630";
const WHATSAPP_MESSAGE = "Hi Ali Raza! I visited your portfolio and I'd like to discuss a project with you.";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulse ring animation */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        className="relative z-10"
      >
        <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.478.655 4.8 1.8 6.81L2 30l7.38-1.774A13.94 13.94 0 0 0 16.002 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.002 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.6l-.42-.25-4.38 1.05 1.08-4.26-.28-.44A11.56 11.56 0 0 1 4.4 16.002C4.4 9.606 9.606 4.4 16.002 4.4S27.6 9.606 27.6 16.002 22.396 27.6 16.002 27.6zm6.34-8.66c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.924-1.732-2.064-1.934-2.412-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.89-1.074-2.59-.284-.68-.572-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.436-.318.35-1.218 1.19-1.218 2.9 0 1.71 1.246 3.36 1.42 3.592.174.232 2.452 3.744 5.942 5.248.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.658-.086-.144-.318-.23-.666-.404z" />
      </svg>
    </motion.a>
  );
}
