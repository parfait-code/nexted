"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AnimatedLines } from "./animations/AnimatedLines";

export function Hero() {
  return (
    <section className="relative h-[100%] max-h-[1000px] w-full flex items-center justify-center py-20 overflow-hidden">
      {/* Animated background lines */}
      <AnimatedLines />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-blue-50 text-primary mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Service client simplifié
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl"
            >
              Support client{" "}
              <span className="text-primary inline-block relative">
                intelligent et efficace
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed"
            >
              Gérez toutes vos demandes d&apos;assistance en un seul endroit.
              Automatisez les tâches répétitives et offrez un support
              exceptionnel à vos clients.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <Button
              asChild
              size="lg"
              className="w-full max-w-md mx-auto text-base relative overflow-hidden group"
            >
              <Link href="/signup" className="inline-flex items-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Commencer maintenant</span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4"
          >
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 1 }}
                    className="rounded-full"
                  >
                    <Avatar className="h-10 w-10 bg-gray-400 ring-2 ring-white">
                      <AvatarImage
                        src={`/images/avatar/${i}.png`}
                        alt={`User avatar ${i}`}
                      />
                    </Avatar>
                  </motion.div>
                ))}
              </div>
              <p className="ml-4 text-sm text-muted-foreground">
                Rejoint par{" "}
                <span className="font-semibold text-foreground">200+</span>{" "}
                utilisateurs
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
