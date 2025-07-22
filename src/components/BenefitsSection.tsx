import { Calendar, Eye, Clock } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Gestión automática",
    description: "Asignación y reserva de horarios sin llamadas.",
  },
  {
    icon: Eye,
    title: "Visibilidad total",
    description: "Los alumnos ven horarios disponibles en tiempo real en un calendario interactivo.",
  },
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Reduce tareas administrativas del personal.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-inter text-primary-dark mb-4">
            Beneficios clave
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo AutoSlot revoluciona la gestión de tu autoescuela
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                  <Icon className="h-10 w-10 text-primary group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3 font-inter">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;