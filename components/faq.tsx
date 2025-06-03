"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Combien de temps dure la période d'essai ?",
    answer:
      "Nous offrons une période d'essai gratuite de 14 jours pour tous nos plans. Aucune carte de crédit n'est requise pendant l'essai.",
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer:
      "Oui, vous pouvez facilement passer à un plan supérieur ou inférieur à tout moment. La facturation sera ajustée au prorata.",
  },
  {
    question: "Comment fonctionne le support technique ?",
    answer:
      "Notre équipe de support est disponible 24/7 via chat, email et téléphone pour les plans Pro et Enterprise. Le plan Starter bénéficie d'un support par email pendant les heures ouvrables.",
  },
  {
    question: "Les mises à jour sont-elles incluses ?",
    answer:
      "Oui, toutes les mises à jour de fonctionnalités et de sécurité sont incluses gratuitement dans votre abonnement.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment. Il n'y a pas d'engagement de durée ni de frais d'annulation.",
  },
  {
    question: "Proposez-vous des remises pour les ONG ?",
    answer:
      "Oui, nous offrons des remises spéciales pour les organisations à but non lucratif et les établissements d'enseignement. Contactez notre équipe commerciale pour plus d'informations.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container px-4 md:px-6 mx-auto max-w-[800px] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-8 inline-block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour bien démarrer avec notre
            plateforme de support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-white/50 rounded-2xl p-4 md:p-8 shadow-xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-gray-200 last:border-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 text-gray-900 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
