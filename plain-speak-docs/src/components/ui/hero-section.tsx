import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Brain, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Simplify Legal Documents with{" "}
            <span className="text-accent">AI</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform complex contracts into clear, actionable insights. 
            Understand your rights, identify risks, and make informed decisions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-medium"
            >
              Upload Document
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg"
            >
              See Demo
            </Button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Analysis</h3>
              <p className="text-sm">Advanced AI breaks down complex legal language</p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="bg-primary-foreground/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Risk Detection</h3>
              <p className="text-sm">Identify unfavorable terms and hidden risks</p>
            </div>
            
            <div className="flex flex-col items-center text-primary-foreground/80">
              <div className="bg-primary-foreground/10 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Plain English</h3>
              <p className="text-sm">Get clear summaries in everyday language</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};