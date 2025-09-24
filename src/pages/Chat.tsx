import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  MessageSquare,
  Sparkles,
  BarChart3,
  Download,
  RefreshCw,
  Bot,
  User,
  Waves
} from "lucide-react";

const Chat = () => {
  const exampleQueries = [
    "Show salinity near the equator",
    "What is the average salinity near the equator?", 
    "What is the deepest measurement by an ARGO float?",
    "Plot temperature change in the Pacific Ocean (50°N, 150°W)",
    "Summarize recent ARGO float deployments in the Indian Ocean",
    "Compare ocean currents in Atlantic and Pacific"
  ];

  const chatHistory = [
    {
      type: "bot",
      message: "Hello! I am FloatChat. How can I assist you with ARGO float data today?",
      timestamp: "Just now"
    },
    {
      type: "user", 
      message: "What is the average salinity near the equator?",
      timestamp: "2 minutes ago"
    },
    {
      type: "bot",
      message: "The average sea surface salinity near the equator (between 5°N and 5°S) typically ranges from 34.5 to 35.5 Practical Salinity Units (PSU). Here is a visualization of salinity over a recent period:",
      timestamp: "1 minute ago",
      hasVisualization: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8 h-[calc(100vh-8rem)]">
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Quick Start
                  </CardTitle>
                  <CardDescription>
                    Try these example queries to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {exampleQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 hover:bg-primary/5 hover:text-primary"
                      onClick={() => {/* Handle query selection */}}
                    >
                      <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{query}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Downloads
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Data Status
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3 flex flex-col">
              <Card className="flex-1 flex flex-col">
                <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Waves className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">FloatChat AI Assistant</CardTitle>
                        <CardDescription>
                          Ask questions about ocean data in natural language
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                      ● Online
                    </Badge>
                  </div>
                </CardHeader>

                {/* Chat Messages */}
                <CardContent className="flex-1 p-0 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {chatHistory.map((message, index) => (
                      <div key={index} className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'bot' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}>
                          {message.type === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                          <div className={`rounded-lg p-4 ${
                            message.type === 'bot'
                              ? 'bg-muted border border-border'
                              : 'bg-primary text-primary-foreground'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.message}</p>
                          </div>
                          {message.hasVisualization && (
                            <div className="mt-4 p-4 bg-gradient-to-br from-ocean-surface/20 to-ocean-deep/20 rounded-lg border-2 border-dashed border-border">
                              <div className="text-center">
                                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                                <p className="text-sm font-semibold text-muted-foreground mb-2">
                                  Average Salinity (PSU) near Equator
                                </p>
                                <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                                  <span>Jan: 34.7</span>
                                  <span>Feb: 34.9</span>
                                  <span>Mar: 35.1</span>
                                  <span>Apr: 35.3</span>
                                  <span>May: 35.2</span>
                                  <span>Jun: 34.8</span>
                                </div>
                                <div className="flex gap-2 justify-center mt-3">
                                  <Button variant="outline" size="sm">
                                    <Download className="w-3 h-3 mr-1" />
                                    CSV
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Download className="w-3 h-3 mr-1" />
                                    NetCDF
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="text-xs text-muted-foreground mt-2">
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Input Area */}
                <div className="border-t p-4 bg-muted/30">
                  <div className="flex gap-3">
                    <Input
                      placeholder="Ask about ocean data..."
                      className="flex-1"
                    />
                    <Button variant="ocean" size="icon" className="flex-shrink-0">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                    <div>Press Enter to send, Shift+Enter for new line</div>
                    <div className="flex gap-4">
                      <span>Support</span>
                      <span>Legal</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;