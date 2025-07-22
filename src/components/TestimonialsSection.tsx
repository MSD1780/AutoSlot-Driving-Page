import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Ruiz",
    role: "Director de Autoescuela Madrid Centro",
    content: "AutoSlot ha revolucionado nuestra gestión. Los alumnos están encantados con la facilidad de reserva y nosotros hemos reducido las llamadas en un 80%.",
    avatar: "CR",
    rating: 5,
  },
  {
    name: "Ana López",
    role: "Propietaria de Autoescuela Sevilla Sur",
    content: "Antes perdíamos mucho tiempo organizando horarios. Ahora todo es automático y podemos centrarnos en lo importante: enseñar a conducir.",
    avatar: "AL",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "Instructor jefe en Autoescuela Valencia",
    content: "Los instructores podemos ver nuestros horarios al instante y los alumnos ya no nos llaman constantemente. Es una herramienta imprescindible.",
    avatar: "MT",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-inter text-primary-dark mb-4">
            Autoescuelas satisfechas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre lo que dicen nuestros clientes sobre AutoSlot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-primary transition-all duration-300 animate-fade-in group hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-4 group-hover:bg-accent transition-colors">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;