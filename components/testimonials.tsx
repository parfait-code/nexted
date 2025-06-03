"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "TechCorp Cameroun",
    content:
      "Cette plateforme a révolutionné notre service client. Nos temps de réponse ont diminué de 70% et nos clients sont beaucoup plus satisfaits. L'équipe de support est exceptionnelle.",
    rating: 5,
    avatar: "MD",
    location: "Douala, Cameroun",
  },
  {
    id: 2,
    name: "Jean-Baptiste Nguema",
    role: "CEO",
    company: "StartupAfrica",
    content:
      "L'automatisation proposée nous a fait gagner un temps précieux. Nous pouvons maintenant nous concentrer sur notre croissance plutôt que sur les tâches répétitives. Excellent investissement !",
    rating: 5,
    avatar: "JN",
    location: "Yaoundé, Cameroun",
  },
  {
    id: 3,
    name: "Fatima Bello",
    role: "Responsable Client",
    company: "E-commerce Plus",
    content:
      "Interface intuitive et fonctionnalités avancées. Nos agents sont maintenant plus efficaces et nos clients reçoivent des réponses rapides 24h/24. Je recommande vivement !",
    rating: 5,
    avatar: "FB",
    location: "Garoua, Cameroun",
  },
  {
    id: 4,
    name: "David Onana",
    role: "Directeur Technique",
    company: "Solutions Digitales",
    content:
      "L'intégration s'est faite sans problème avec nos systèmes existants. L'API est bien documentée et le support technique répond rapidement. Parfait pour notre équipe de développement.",
    rating: 5,
    avatar: "DO",
    location: "Douala, Cameroun",
  },
  {
    id: 5,
    name: "Aminata Traore",
    role: "Manager Support",
    company: "FinTech Afrique",
    content:
      "Les rapports détaillés nous permettent d'analyser nos performances et d'améliorer continuellement notre service. Les widgets personnalisables s'adaptent parfaitement à notre site web.",
    rating: 5,
    avatar: "AT",
    location: "Yaoundé, Cameroun",
  },
  {
    id: 6,
    name: "Paul Ekotto",
    role: "Fondateur",
    company: "AgriTech Solutions",
    content:
      "Depuis que nous utilisons cette solution, notre satisfaction client a augmenté de 45%. L'outil est puissant mais reste simple à utiliser. Notre meilleur investissement cette année !",
    rating: 5,
    avatar: "PE",
    location: "Bamenda, Cameroun",
  },
];

const stats = [
  { value: "100+", label: "Entreprises satisfaites" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "24/7", label: "Support disponible" },
  { value: "5K+", label: "Messages traités" },
];

// Dupliquer les témoignages pour créer l'effet infini
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <Card className="flex-shrink-0 w-80 md:w-[320px] bg-white/90 backdrop-blur-sm border border-blue-100/50 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 mx-3">
    <CardContent className="p-6 md:p-8">
      <div className="flex justify-between items-start mb-6">
        <Quote className="w-8 h-8 text-blue-500/70" />
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8 text-base italic">
        &quot;{testimonial.content}&quot;
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-blue-600 font-medium">
            {testimonial.role}
          </div>
          <div className="text-sm text-gray-500">
            {testimonial.company} • {testimonial.location}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-blue-50 text-primary mb-6"
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            Témoignages clients
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Ce que disent nos clients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez comment nos solutions transforment l&apos;expérience
            client des entreprises africaines
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative mb-20 py-4 overflow-hidden">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-50 via-blue-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-50 via-purple-50/90 to-transparent z-10 pointer-events-none" />

          <div className="flex mb-5 animate-scroll hover:pause-animation">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
