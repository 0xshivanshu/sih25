import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Clock, 
  Users, 
  BookOpen,
  MessageSquare,
  BarChart3,
  Download,
  Star,
  ChevronRight,
  GraduationCap,
  Target,
  Award
} from "lucide-react";

const Tutorials = () => {
  const categories = [
    {
      id: "basics",
      title: "Getting Started",
      description: "Learn the fundamentals of FloatChat",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      tutorials: [
        {
          title: "Chat Interface Overview",
          description: "Navigate the FloatChat interface and understand key features",
          duration: "5 min",
          difficulty: "Beginner",
          completed: true
        },
        {
          title: "Your First Ocean Query",
          description: "Ask your first question about ocean data and interpret results",
          duration: "8 min", 
          difficulty: "Beginner",
          completed: true
        },
        {
          title: "Understanding ARGO Data",
          description: "Learn about ARGO floats and the data they collect",
          duration: "12 min",
          difficulty: "Beginner",
          completed: false
        }
      ]
    },
    {
      id: "queries",
      title: "Asking Effective Queries",
      description: "Master the art of conversational data exploration",
      icon: MessageSquare,
      color: "text-accent",
      bgColor: "bg-accent/10", 
      borderColor: "border-accent/20",
      tutorials: [
        {
          title: "Query Structure & Syntax",
          description: "Learn how to structure questions for best results",
          duration: "10 min",
          difficulty: "Intermediate",
          completed: false
        },
        {
          title: "Advanced Query Techniques",
          description: "Use filters, comparisons, and complex queries",
          duration: "15 min",
          difficulty: "Advanced",
          completed: false
        },
        {
          title: "Multi-parameter Analysis",
          description: "Combine temperature, salinity, and other measurements",
          duration: "18 min",
          difficulty: "Advanced",
          completed: false
        }
      ]
    },
    {
      id: "visualization",
      title: "Data Visualization",
      description: "Create and customize interactive visualizations",
      icon: BarChart3,
      color: "text-primary-light",
      bgColor: "bg-primary-light/10",
      borderColor: "border-primary-light/20",
      tutorials: [
        {
          title: "Reading Ocean Maps",
          description: "Interpret 2D and 3D ocean visualizations",
          duration: "12 min",
          difficulty: "Beginner", 
          completed: false
        },
        {
          title: "Customizing Charts",
          description: "Modify chart types, colors, and display options",
          duration: "14 min",
          difficulty: "Intermediate",
          completed: false
        },
        {
          title: "Creating Dashboards",
          description: "Build custom dashboards for your research",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false
        }
      ]
    },
    {
      id: "export",
      title: "Exporting & Sharing",
      description: "Save and share your discoveries",
      icon: Download,
      color: "text-ocean-surface",
      bgColor: "bg-ocean-surface/10",
      borderColor: "border-ocean-surface/20",
      tutorials: [
        {
          title: "Export Formats",
          description: "Learn about CSV, NetCDF, and image export options",
          duration: "8 min",
          difficulty: "Beginner",
          completed: false
        },
        {
          title: "Sharing Insights",
          description: "Collaborate with team members and share findings",
          duration: "10 min",
          difficulty: "Intermediate", 
          completed: false
        },
        {
          title: "API Integration",
          description: "Connect FloatChat data to external tools",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false
        }
      ]
    }
  ];

  const learningPaths = [
    {
      title: "Ocean Research Essentials",
      description: "Complete pathway for marine researchers",
      lessons: 8,
      duration: "2 hours",
      level: "Beginner to Intermediate",
      badge: "Researcher"
    },
    {
      title: "Educator's Guide",
      description: "Teaching ocean science with FloatChat",
      lessons: 6,
      duration: "90 minutes", 
      level: "Beginner",
      badge: "Educator"
    },
    {
      title: "Advanced Analytics",
      description: "Deep dive into complex ocean data analysis",
      lessons: 12,
      duration: "4 hours",
      level: "Advanced",
      badge: "Expert"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600 bg-green-50 border-green-200";
      case "Intermediate": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Advanced": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <GraduationCap className="w-4 h-4 mr-2" />
              Learning Center
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              FloatChat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Guided Tour
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Master ocean data exploration with step-by-step tutorials, 
              interactive lessons, and comprehensive learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ocean" size="lg" className="ocean-shadow">
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Join Study Group
              </Button>
            </div>
          </div>

          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <Target className="w-8 h-8 inline mr-3 text-primary" />
              Learning Paths
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        <Award className="w-3 h-3 mr-1" />
                        {path.badge}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{path.duration}</div>
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-muted-foreground">
                        {path.lessons} lessons • {path.level}
                      </div>
                      <div className="flex items-center text-sm text-accent">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        4.8
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group">
                      Start Path
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tutorial Categories */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <BookOpen className="w-8 h-8 inline mr-3 text-accent" />
              Tutorial Categories
            </h2>
            <div className="space-y-8">
              {categories.map((category) => (
                <Card key={category.id} className={`${category.borderColor} hover:shadow-lg transition-smooth`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-base">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.tutorials.map((tutorial, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-smooth ${
                            tutorial.completed ? 'bg-green-50 border-green-200' : 'bg-card border-border'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tutorial.completed 
                                ? 'bg-green-100 text-green-600' 
                                : `${category.bgColor} ${category.color}`
                            }`}>
                              {tutorial.completed ? (
                                <Star className="w-5 h-5 fill-current" />
                              ) : (
                                <Play className="w-5 h-5" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{tutorial.title}</h4>
                              <p className="text-sm text-muted-foreground">{tutorial.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={getDifficultyColor(tutorial.difficulty)}>
                              {tutorial.difficulty}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {tutorial.duration}
                            </div>
                            <Button 
                              variant={tutorial.completed ? "secondary" : "ocean"} 
                              size="sm"
                            >
                              {tutorial.completed ? "Review" : "Start"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Become an Ocean Data Expert?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of researchers, educators, and ocean enthusiasts 
                  who have mastered conversational ocean data exploration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="ocean" size="lg" className="ocean-shadow">
                    <Play className="w-5 h-5 mr-2" />
                    Begin Your Journey
                  </Button>
                  <Button variant="outline" size="lg">
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;