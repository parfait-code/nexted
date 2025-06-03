"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  Users,
  Settings,
  Zap,
  Shield,
} from "lucide-react";
import ContentImage from "./contentImage";
import { PatternLinesBackground } from "./animations/PatternLinesBackground ";

const features = [
  {
    title: "Support instantané",
    description:
      "Obtenez des réponses immédiates à vos questions via chat, email ou téléphone, 24h/24 et 7j/7.",
    icon: MessageSquare,
  },
  {
    title: "Suivi en temps réel",
    description:
      "Suivez l'état de vos demandes en temps réel et recevez des notifications à chaque mise à jour.",
    icon: BarChart3,
  },
  {
    title: "Contact personnalisé",
    description:
      "Communiquez toujours avec le même agent qui connaît votre historique et vos préférences.",
    icon: Users,
  },
  {
    title: "Solutions rapides",
    description:
      "Accédez à des réponses instantanées pour les questions fréquentes grâce à notre base de connaissances.",
    icon: Zap,
  },
  {
    title: "Interface intuitive",
    description:
      "Naviguez facilement dans une interface simple et adaptée à vos besoins.",
    icon: Settings,
  },
  {
    title: "Données sécurisées",
    description:
      "Vos informations personnelles sont protégées par un chiffrement de bout en bout.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <PatternLinesBackground />
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-8 inline-block">
            Fonctionalités
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  ">
            Toutes les fonctionnalités dont vous avez besoin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
            Des outils puissants pour gérer efficacement vos demandes de support
            client
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-background border border-transparent rounded-2xl p-6 h-full hover:shadow hover:border-primary/20 hover:border transition-all">
                <div className="mb-6 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ContentImage />
      </div>
    </section>
  );
}
