import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Logo integrado en el hero */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/77045688-585a-446f-ba7f-6e292b8ee2a3.png" 
                alt="AutoSlot Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-inter text-primary-dark mb-6">
              Digitaliza tu Autoescuela con{" "}
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                AutoSlot
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Gestiona las prácticas de tus alumnos desde un solo lugar con un sistema 
              moderno, claro y automatizado.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 h-auto font-semibold"
            >
              Prueba la versión Beta
            </Button>
          </div>

          {/* Mockup */}
          <div className="relative animate-bounce-in">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="AutoSlot App Interface" 
                className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl shadow-card"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;