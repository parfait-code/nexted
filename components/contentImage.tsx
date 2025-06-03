import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

export default function ContentImage() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="space-y-24">
        {/* Feature 1 - Support en temps réel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-1 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Support client en temps réel
              <br />
              <span className="text-primary">Simple et efficace</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Obtenez une assistance instantanée grâce à notre système de chat
              en direct. Nos agents sont disponibles 24/7 pour répondre à vos
              questions et résoudre vos problèmes rapidement, sans attente ni
              transfert inutile.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Commencer maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="order-2 lg:order-2">
            <Card className="border-0 ">
              <CardContent className="p-12">
                <div className="relative">
                  {/* Illustration représentant une personne avec un dashboard */}
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-lg"></div>
                        <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cyan-500 rounded-lg"></div>
                        <div className="flex-1 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Personne illustration */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-4"></div>
                      <div className="w-20 h-12 bg-pink-300 rounded-t-full"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature 2 - Application mobile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className=" border-0 ">
              <CardContent className="p-12">
                <div className="relative">
                  {/* Smartphone illustration */}
                  <div className="bg-blue-600 rounded-3xl p-4 max-w-xs mx-auto">
                    <div className="bg-white rounded-2xl p-4 h-80">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="w-6 h-6 bg-pink-400 rounded"></div>
                          <div className="w-8 h-4 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="w-full h-24 bg-pink-200 rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                          <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-8 bg-blue-500 rounded"></div>
                          <div className="w-8 h-8 bg-blue-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-1 bg-white rounded-full mx-auto mt-2"></div>
                  </div>

                  {/* Personne avec le téléphone */}
                  <div className="absolute -bottom-8 -right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-2"></div>
                    <div className="w-16 h-10 bg-blue-300 rounded-t-full"></div>
                  </div>

                  {/* Éléments décoratifs */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-12 left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Suivi de vos demandes
              <br />
              <span className="text-primary">où que vous soyez</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Suivez l&apos;état de vos tickets et recevez des notifications en
              temps réel sur votre mobile. Consultez l&apos;historique de vos
              conversations et accédez à nos solutions même en déplacement.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Découvrir l&apos;application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
