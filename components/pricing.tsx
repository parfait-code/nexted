"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "Parfait pour les petites équipes",
    price: 5500,
    features: [
      "Jusqu'à 3 agents",
      "Support email et chat",
      "Base de connaissances",
      "Widgets personnalisables",
      "Rapports basiques",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Idéal pour les équipes en croissance",
    price: 17900,
    features: [
      "Jusqu'à 10 agents",
      "Support email, chat et téléphone",
      "Base de connaissances avancée",
      "Intégrations illimitées",
      "Automatisations avancées",
      "Support prioritaire",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Pour les grandes organisations",
    price: 61000,
    features: [
      "Agents illimités",
      "Support sur mesure",
      "SLA garantis",
      "Hébergement dédié",
      "API personnalisée",
      "Manager de compte dédié",
      "Support 24/7",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (price: number) => {
    if (isAnnual) {
      const annualPrice = price * 12;
      const discount = annualPrice * 0.1;
      return Math.round((annualPrice - discount) / 12);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-8 inline-block">
            Nos Forfaits
          </span>
          <h2 className="text-4xl font-bold  mb-3">Choisissez votre plan</h2>
          <p className=" text-lg mb-8">Pas de contrat, pas de frais cachés.</p>

          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-primary">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Annuel
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 gap-y-12 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-full"
            >
              <Card
                className={`flex flex-col h-full ${
                  plan.popular
                    ? "bg-blue-600 text-white border-blue-600 shadow-xl scale-105"
                    : "bg-white border-gray-200 hover:shadow-lg transition-shadow"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium shadow-2xl">
                      86% de nos clients choisissent ce plan
                    </div>
                  </div>
                )}

                <CardHeader className="pt-8 pb-4">
                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {formatPrice(calculatePrice(plan.price))} XAF
                    </span>
                    <span
                      className={`text-lg ml-2 ${
                        plan.popular ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      / Mois
                    </span>
                  </div>

                  <p
                    className={`text-sm ${
                      plan.popular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="px-6 py-4">
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check
                          className={`h-5 w-5 mr-3 flex-shrink-0 ${
                            plan.popular ? "text-blue-200" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto pt-6 pb-8 px-6">
                  <Button
                    className={`w-full py-3 font-medium ${
                      plan.popular
                        ? "bg-white hover:bg-white/90 text-blue-600 border-0"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    Choisir ce plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
