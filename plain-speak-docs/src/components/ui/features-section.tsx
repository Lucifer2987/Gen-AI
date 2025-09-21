import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MessageSquare, BarChart3, GitCompare, Shield, Globe } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart Document Upload",
      description: "Upload PDFs, DOCX, or text files. Our AI instantly processes and segments your legal documents.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Interactive Q&A",
      description: "Ask questions about your document in plain English. Get instant, clear explanations about any clause.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Risk Score Analysis",
      description: "Get a visual risk score (0-100) showing how favorable or risky your contract terms are.",
      color: "text-danger"
    },
    {
      icon: GitCompare,
      title: "Document Comparison",
      description: "Compare two contracts side-by-side to identify differences and better terms.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Privacy Guaranteed",
      description: "Your documents are processed securely with end-to-end encryption. We never share your data.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Get explanations in multiple languages including English, Spanish, Hindi, and more.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individuals to small businesses, our AI-powered tools make legal documents accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};