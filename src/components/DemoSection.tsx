import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import demoImage from "@/assets/demo-section.jpg";

const DemoSection = () => {
  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=179B3UfSUp0', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h2 className="text-3xl lg:text-5xl font-bold font-inter text-primary-dark mb-6">
              Así de fácil es organizar las prácticas con{" "}
              <span className="text-accent">AutoSlot</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Observa cómo un alumno puede reservar una práctica desde su móvil 
              en segundos, mientras tú mantienes el control total de tu autoescuela.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-6 py-3 h-auto"
                onClick={handleVideoClick}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-6 py-3 h-auto">
                Solicitar Información
              </Button>
            </div>
          </div>

          {/* Demo Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card group cursor-pointer" onClick={handleVideoClick}>
              <img 
                src={demoImage} 
                alt="Demostración de AutoSlot" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="bg-white/90 rounded-full p-6 shadow-accent group-hover:scale-110 transition-transform">
                  <Play className="h-12 w-12 text-primary ml-1" />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold shadow-accent animate-bounce-in">
              ¡Súper fácil!
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-primary">
              Sin llamadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;