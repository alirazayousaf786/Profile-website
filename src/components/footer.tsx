import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "923186024630";
const WHATSAPP_MESSAGE = "Hi Ali Raza! I visited your portfolio and I'd like to discuss a project with you.";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
      <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.478.655 4.8 1.8 6.81L2 30l7.38-1.774A13.94 13.94 0 0 0 16.002 30C23.72 30 30 23.72 30 16.002 30 8.28 23.72 2 16.002 2zm0 25.6a11.55 11.55 0 0 1-5.88-1.6l-.42-.25-4.38 1.05 1.08-4.26-.28-.44A11.56 11.56 0 0 1 4.4 16.002C4.4 9.606 9.606 4.4 16.002 4.4S27.6 9.606 27.6 16.002 22.396 27.6 16.002 27.6zm6.34-8.66c-.348-.174-2.06-1.016-2.38-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.924-1.732-2.064-1.934-2.412-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.89-1.074-2.59-.284-.68-.572-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.436-.318.35-1.218 1.19-1.218 2.9 0 1.71 1.246 3.36 1.42 3.592.174.232 2.452 3.744 5.942 5.248.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.204-1.658-.086-.144-.318-.23-.666-.404z" />
    </svg>
  );
}

export function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-secondary/50 py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter inline-block mb-2">
            Ali<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/alirazayousaf786" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all border border-border">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ali-raza-6008aa289/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all border border-border">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all border border-border">
            <Twitter size={18} />
          </a>
          <a href="mailto:alirazayousaf420@gmail.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all border border-border">
            <Mail size={18} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-all border border-border"
            style={{ color: "#25D366" }}
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-border/30 text-center flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy;2025 – Present Ali Raza. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
