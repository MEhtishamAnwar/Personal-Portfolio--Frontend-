import React from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Button from '@/componenet/Button'
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mehtishamanwar52@gmail.com",
    href: "mailto:mehtishamanwar52@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "tel:+92 3105231533",
    href: "tel:+92 3105231533",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abbottabad, Pak",
    href: "#",
  },
];

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });
  const handleSubmit=async (e)=>{
    e.preventDefault();
     setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }

  }
  return (
   <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
 <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
     {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in animation-delay-200 px-2">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form action="" className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <label htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                <input id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"/>
              </div>

               <div className="">
                <label htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                 />
              </div>

              <div className="">
                <label  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                    <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm"
                />
              </div>
               <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
                {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 sm:gap-3
                     p-3 sm:p-4 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>

          </div>
          
            {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium text-xs sm:text-sm line-clamp-1">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-sm sm:text-base">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        
        </div>


      </div>
   </section>
  )
}

export default Contact