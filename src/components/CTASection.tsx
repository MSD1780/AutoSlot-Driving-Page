import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos pronto para programar tu demo personalizada.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left text-primary-foreground">
            <h2 className="text-4xl lg:text-6xl font-bold font-inter mb-6">
              Empieza hoy a{" "}
              <span className="text-accent">
                automatizar
              </span>{" "}
              tu autoescuela
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Únete a las autoescuelas que ya han digitalizado su gestión con AutoSlot. 
              Solicita una demo personalizada y descubre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Demo gratuita</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Soporte completo</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-accent animate-slide-up">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center font-inter">
              Solicita tu demo personalizada
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <Input
                placeholder="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="h-12"
              />
              <Textarea
                placeholder="Cuéntanos sobre tu autoescuela (opcional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 resize-none"
              />
              <Button 
                type="submit" 
                variant="accent" 
                size="lg"
                className="w-full text-lg font-semibold h-12"
              >
                Solicitar Demo Gratuita
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;