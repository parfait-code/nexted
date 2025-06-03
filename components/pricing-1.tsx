"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Idéal pour les particuliers qui ont besoin d'un accès rapide aux fonctionnalités de base.",
    price: 0,
    popular: false,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },
  {
    name: "Professionnel",
    description:
      "Idéal pour les particuliers qui ont besoin de fonctionnalités avancées et d'outils pour le travail client.",
    price: 25500,
    popular: true,
    buttonText: "Commencer maintenant",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description:
      "Idéal pour les entreprises qui ont besoin de services personnalisés et de sécurité pour les grandes équipes.",
    price: 85000,
    popular: false,
    buttonText: "Commencer maintenant",
    buttonVariant: "outline" as const,
  },
];

const features = [
  {
    name: "20 000+ graphiques PNG & SVG",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: "Accès à 100 millions d'images stock",
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: "Télécharger des icônes et polices personnalisées",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Partage illimité",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Télécharger graphiques & vidéo jusqu'à 4k",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Projets illimités",
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: "Accès instantané à notre système de design",
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: "Créer des équipes pour collaborer sur les designs",
    starter: false,
    professional: false,
    enterprise: true,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (price: number) => {
    if (price === 0) return 0;
    if (isAnnual) {
      const annualPrice = price * 12;
      const discount = annualPrice * 0.25;
      return Math.round((annualPrice - discount) / 12);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    if (price === 0) return "0";
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fonctionnalités puissantes pour{" "}
            <span className="text-blue-600">créateurs puissants</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choisissez un plan qui vous convient
          </p>

          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 relative">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                !isAnnual ? "text-gray-900" : "text-gray-600"
              }`}
            >
              Paiement mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                isAnnual ? "text-gray-900" : "text-gray-600"
              }`}
            >
              Paiement annuel
            </button>
            <div
              className={`absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ${
                isAnnual
                  ? "right-1 left-auto w-[calc(50%-4px)]"
                  : "left-1 w-[calc(50%-4px)]"
              }`}
            />
            {isAnnual && (
              <div className="absolute -top-8 right-0">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium relative">
                  Économisez 25%
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`h-full ${
                  plan.popular
                    ? "bg-blue-600 text-white border-blue-600 shadow-2xl relative"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                }`}
              >
                <CardHeader className="text-center pb-8">
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`text-sm mb-6 leading-relaxed ${
                      plan.popular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      {formatPrice(calculatePrice(plan.price))} XAF
                    </span>
                    <span
                      className={`text-lg ml-2 ${
                        plan.popular ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {plan.price === 0 ? "" : "/ Mois"}
                    </span>
                  </div>

                  <Button
                    variant={plan.popular ? "secondary" : plan.buttonVariant}
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-gray-50"
                        : plan.buttonVariant === "outline"
                        ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                        : ""
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Fonctionnalités
              </h3>
            </div>
            <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Starter</h4>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Professionnel
                </h4>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise</h4>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid md:grid-cols-4 gap-4 items-center py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="md:col-span-1">
                  <p className="text-gray-700 font-medium">{feature.name}</p>
                </div>
                <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
                  <div className="flex justify-center">
                    {feature.starter ? (
                      <Check className="h-5 w-5 text-blue-600" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {feature.professional ? (
                      <Check className="h-5 w-5 text-blue-600" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-blue-600" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Besoin d&apos;aide pour choisir ? Contactez notre équipe
            commerciale.
          </p>
          <Button variant="outline" size="lg" className="mt-4">
            Parler à un expert
          </Button>
        </div>
      </div>
    </section>
  );
}
