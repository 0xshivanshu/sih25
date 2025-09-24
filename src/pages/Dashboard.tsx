import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  BarChart3, 
  Globe, 
  Thermometer,
  Droplets,
  Wind,
  MapPin,
  Calendar,
  Download,
  Filter
} from "lucide-react";

const Dashboard = () => {
  // Sample data for demonstration
  const stats = [
    {
      title: "Active Floats",
      value: "3,987",
      change: "+12%",
      icon: Activity,
      color: "text-primary"
    },
    {
      title: "Data Points Collected", 
      value: "5.2M",
      change: "+8%",
      icon: BarChart3,
      color: "text-accent"
    },
    {
      title: "Avg. Surface Temp",
      value: "18.3°C",
      change: "-0.2°",
      icon: Thermometer,
      color: "text-primary-light"
    },
    {
      title: "Avg. Salinity",
      value: "34.7 PSU",
      change: "+0.1",
      icon: Droplets,
      color: "text-ocean-surface"
    }
  ];

  const regions = [
    { name: "Atlantic", salinity: 36, temperature: 20, floats: 1200 },
    { name: "Pacific", salinity: 34, temperature: 18, floats: 1800 },
    { name: "Indian", salinity: 35, temperature: 27, floats: 800 },
    { name: "Arctic", salinity: 32, temperature: 2, floats: 187 },
    { name: "Southern", salinity: 34, temperature: 15, floats: 300 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                ARGO Data Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time ocean monitoring and insights
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="ocean" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${stat.color}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} bg-current/10 rounded-full flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* ARGO Float Locations */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        ARGO Float Locations
                      </CardTitle>
                      <CardDescription>
                        Global distribution of active oceanographic floats
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      Live Data
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-ocean-surface/20 to-ocean-deep/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-semibold text-muted-foreground">
                        Interactive Global Map
                      </p>
                      <p className="text-sm text-muted-foreground">
                        3D visualization of ARGO float positions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Data Filters & Controls */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-accent" />
                    Data Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Date Range</label>
                    <div className="mt-1 p-3 border rounded-md bg-muted/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        2023-01-01 to 2024-01-01
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Region</label>
                    <div className="mt-1 p-3 border rounded-md bg-muted/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Global
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Parameters</label>
                    <div className="space-y-2">
                      {["Temperature", "Salinity", "Oxygen", "pH", "Chlorophyll-a"].map((param) => (
                        <Badge key={param} variant="secondary" className="mr-2 mb-2">
                          {param}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ocean" className="w-full">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="text-sm">
                        <p className="font-medium">New float deployed</p>
                        <p className="text-muted-foreground">North Atlantic • 2h ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <div className="text-sm">
                        <p className="font-medium">Data transmission received</p>
                        <p className="text-muted-foreground">Pacific Ocean • 4h ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-light rounded-full" />
                      <div className="text-sm">
                        <p className="font-medium">Quality check completed</p>
                        <p className="text-muted-foreground">Indian Ocean • 6h ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Regional Comparison */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Regional Parameter Comparison</CardTitle>
                <CardDescription>
                  Average salinity and temperature by ocean region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-medium">Region</th>
                        <th className="text-left py-3 font-medium">Active Floats</th>
                        <th className="text-left py-3 font-medium">Avg. Salinity (PSU)</th>
                        <th className="text-left py-3 font-medium">Avg. Temperature (°C)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regions.map((region, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50 transition-smooth">
                          <td className="py-3 font-medium">{region.name}</td>
                          <td className="py-3 text-muted-foreground">{region.floats}</td>
                          <td className="py-3">
                            <Badge variant="outline" className="text-accent border-accent">
                              {region.salinity}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <Badge variant="outline" className="text-primary border-primary">
                              {region.temperature}°
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;