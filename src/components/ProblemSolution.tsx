import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Lightbulb, TrendingUp, Users, Zap, Globe } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-ocean-foam/20">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              The Challenge
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ocean Data is{" "}
              <span className="text-destructive">Vast, Complex</span>, and{" "}
              <span className="text-destructive">Inaccessible</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scientists and researchers struggle with complex interfaces, 
              while the public remains disconnected from crucial ocean insights 
              that affect our planet's future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/20 hover:border-destructive/40 transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  Technical Barriers
                </h3>
                <p className="text-muted-foreground">
                  Complex APIs and data formats require specialized knowledge
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 hover:border-destructive/40 transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  Limited Access
                </h3>
                <p className="text-muted-foreground">
                  Ocean data remains locked away from educators and the public
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 hover:border-destructive/40 transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  Slow Insights
                </h3>
                <p className="text-muted-foreground">
                  Traditional tools make data exploration time-consuming
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              FloatChat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Simplifies Exploration
              </span>{" "}
              with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Conversational AI meets interactive visualizations to make ocean data 
              accessible to everyone – from researchers to students to curious minds.
            </p>
            <Button variant="ocean" size="lg" className="ocean-shadow">
              Experience the Solution
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-smooth ocean-shadow hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Natural Language
                </h3>
                <p className="text-muted-foreground">
                  Ask questions in plain English and get instant, intelligent responses
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-smooth float-shadow hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  Interactive Visualizations
                </h3>
                <p className="text-muted-foreground">
                  Explore data through beautiful 2D/3D maps and dynamic charts
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-light/20 hover:border-primary-light/40 transition-smooth deep-shadow hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold text-primary-light mb-2">
                  Universal Access
                </h3>
                <p className="text-muted-foreground">
                  From classrooms to research labs, everyone can explore ocean data
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;