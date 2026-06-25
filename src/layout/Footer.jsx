import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { AiFillHeart } from "react-icons/ai";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/MEhtishamAnwar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/m-ehtisham-anwar-391a2b330/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/MEhtishamAc44x", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 border-t border-border bg-black/80 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-gray-400 mt-2">
              © {currentYear} M Ehtisham Anwar. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};