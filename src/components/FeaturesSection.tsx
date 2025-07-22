import { MessageSquare, Calendar, X, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Integración con WhatsApp",
    description: "Notificaciones automáticas y comunicación directa con tus alumnos.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Calendar,
    title: "Calendario visual sincronizado",
    description: "Ve todas las prácticas programadas en tiempo real desde cualquier dispositivo.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: X,
    title: "Gestión de cancelaciones",
    description: "Sistema inteligente que redistribuye automáticamente los horarios cancelados.",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: Users,
    title: "Perfil para instructores y alumnos",
    description: "Cada usuario tiene su espacio personalizado con información relevante.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-inter text-primary-dark mb-4">
            Características destacadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Herramientas diseñadas específicamente para las necesidades de tu autoescuela
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4 font-inter">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;