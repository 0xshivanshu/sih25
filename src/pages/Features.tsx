import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  BarChart3, 
  Trophy, 
  Users, 
  Share2, 
  Lightbulb,
  GraduationCap,
  Languages,
  Brain,
  Map,
  Gamepad2,
  Eye,
  ArrowRight
} from "lucide-react";
import featuresImage from "@/assets/features-icons.jpg";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Interact with ocean data using natural language queries in multiple languages with contextual memory.",
      highlights: ["Multilingual Support", "Context Awareness", "Natural Language Processing"],
      impact: "3x more accessible to non-experts",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: BarChart3,
      title: "Interactive Visualization",
      description: "Explore data through beautiful 2D/3D maps, dynamic dashboards, and real-time charts.",
      highlights: ["3D Ocean Maps", "Real-time Charts", "Custom Dashboards"],
      impact: "60% faster data comprehension",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Engage users with interactive quizzes, achievement badges, and data storytelling features.",
      highlights: ["Achievement System", "Interactive Quizzes", "Progress Tracking"],
      impact: "2x higher user engagement",
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
      borderColor: "border-primary-light/20"
    },
    {
      icon: Eye,
      title: "Accessibility",
      description: "Simplified user interface with multilingual tutorials and inclusive design principles.",
      highlights: ["Simple UI", "Multi-language", "Screen Reader Support"],
      impact: "5x broader audience reach",
      color: "text-ocean-medium",
      bgColor: "bg-ocean-medium/10",
      borderColor: "border-ocean-medium/20"
    },
    {
      icon: Share2,
      title: "Collaboration",
      description: "Share insights with annotations, export data in multiple formats, and collaborate in real-time.",
      highlights: ["Shared Annotations", "Multiple Export Formats", "Team Collaboration"],
      impact: "40% improved team productivity",
      color: "text-accent-light",
      bgColor: "bg-accent-light/10",
      borderColor: "border-accent-light/20"
    },
    {
      icon: Lightbulb,
      title: "Personalized Insights",
      description: "AI-powered recommendations and tailored results based on user interests and research patterns.",
      highlights: ["Smart Recommendations", "Personal Dashboards", "Usage Analytics"],
      impact: "50% more relevant discoveries",
      color: "text-ocean-surface",
      bgColor: "bg-ocean-surface/10",
      borderColor: "border-ocean-surface/20"
    },
    {
      icon: GraduationCap,
      title: "Educational Modules",
      description: "Comprehensive learning resources for teachers, students, and public awareness campaigns.",
      highlights: ["Curriculum Integration", "Student Activities", "Public Education"],
      impact: "10x educational impact",
      color: "text-primary-dark",
      bgColor: "bg-primary-dark/10",
      borderColor: "border-primary-dark/20"
    }
  ];

  const capabilities = [
    { icon: Languages, title: "20+ Languages", description: "Global accessibility" },
    { icon: Brain, title: "AI-Powered", description: "Intelligent responses" },
    { icon: Map, title: "Global Coverage", description: "Worldwide ocean data" },
    { icon: Gamepad2, title: "Interactive", description: "Engaging experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-ocean-foam/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Platform Capabilities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ocean Discovery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              FloatChat combines cutting-edge AI with intuitive design to make ocean data 
              exploration accessible, engaging, and insightful for everyone.
            </p>
            
            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-smooth"
                >
                  <capability.icon className="w-8 h-8 text-primary mb-2" />
                  <div className="text-lg font-semibold text-foreground">{capability.title}</div>
                  <div className="text-sm text-muted-foreground">{capability.description}</div>
                </div>
              ))}
            </div>

            <Button variant="ocean" size="lg" className="ocean-shadow">
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group hover:scale-105 transition-wave ${feature.borderColor} hover:shadow-xl`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <Badge variant="secondary" className={`${feature.color} bg-transparent border-current`}>
                      {feature.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className={`${feature.color} ${feature.bgColor} border-current`}
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-ocean-foam/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ocean Data
              </span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join researchers, educators, and ocean enthusiasts in discovering 
              the power of conversational ocean data exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ocean" size="lg" className="ocean-shadow">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;