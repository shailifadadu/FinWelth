import HeroSection from "@/components/hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuresData, howItWorksData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      {/* Features section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Everything You Need to Manage Your Finances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-white bg-opacity-80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl transition-transform duration-300 hover:scale-105"
              >
                <CardContent className="space-y-4 pt-4 text-center">
                  <div className="flex justify-center">
                    <span className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-500 shadow-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="relative text-center bg-white shadow-lg p-6 rounded-2xl border-t-4 border-blue-500 transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md text-white text-2xl font-bold">
                  {index + 1}
                </div>

                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Step Line (only between steps) */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-30px] transform translate-y-[-50%] w-12 h-[2px] bg-blue-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
