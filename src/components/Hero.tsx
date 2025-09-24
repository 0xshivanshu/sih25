import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Waves } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ARGO ocean data visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-animation">
        <div className="w-3 h-3 bg-accent rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: "1s" }}>
        <div className="w-2 h-2 bg-primary-light rounded-full opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: "2s" }}>
        <div className="w-4 h-4 bg-accent-light rounded-full opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-medium mb-8">
            <Waves className="w-4 h-4 mr-2" />
            AI-Powered Ocean Data Discovery
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            FloatChat –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Making Ocean Data
            </span>{" "}
            Conversational
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Interact with ARGO ocean data in natural language and visualize insights instantly. 
            Unlock the secrets of our planet's vast waters through AI and real-time measurements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group min-w-[200px] deep-shadow hover:scale-105 transition-smooth"
            >
              Try Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              variant="heroSecondary" 
              size="lg" 
              className="group min-w-[200px] float-shadow hover:scale-105 transition-smooth"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-smooth" />
              Watch Video
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">3-5x</div>
              <div className="text-primary-foreground/80">More Accessible</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">2x</div>
              <div className="text-primary-foreground/80">Higher Engagement</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-accent mb-2">30-60%</div>
              <div className="text-primary-foreground/80">Faster Insights</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Animation Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="wave-animation absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default Hero;