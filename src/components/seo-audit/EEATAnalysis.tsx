import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Award, Shield, Star, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const EEATAnalysis = () => {
  const eeatScores = {
    experience: 75,
    expertise: 82,
    authoritativeness: 68,
    trustworthiness: 88,
  };

  const experienceFactors = [
    { factor: "First-hand Experience Demonstrated", status: "pass", description: "Content shows direct experience with examples" },
    { factor: "Visual Proof Provided", status: "warning", description: "Some screenshots provided, could add more" },
    { factor: "Personal Perspective Shared", status: "pass", description: "Author's personal insights and opinions included" },
    { factor: "Practical Application Examples", status: "pass", description: "Real-world use cases and scenarios provided" },
    { factor: "Process Documentation", status: "warning", description: "Step-by-step processes could be more detailed" },
  ];

  const expertiseFactors = [
    { factor: "Author Credentials Displayed", status: "pass", description: "Author bio with relevant qualifications" },
    { factor: "Subject Matter Expertise", status: "pass", description: "Deep knowledge demonstrated in content" },
    { factor: "Citations and References", status: "pass", description: "Proper citations to authoritative sources" },
    { factor: "Technical Accuracy", status: "pass", description: "Information is technically correct and current" },
    { factor: "Industry Recognition", status: "warning", description: "Could showcase more industry awards/recognition" },
  ];

  const authorityFactors = [
    { factor: "Domain Authority", status: "pass", description: "Strong domain authority in the industry" },
    { factor: "Backlink Quality", status: "pass", description: "High-quality inbound links from relevant sites" },
    { factor: "Industry Mentions", status: "warning", description: "Could increase mentions in industry publications" },
    { factor: "Social Media Presence", status: "pass", description: "Active and engaged social media following" },
    { factor: "Content Sharing", status: "pass", description: "Content frequently shared by industry experts" },
  ];

  const trustFactors = [
    { factor: "About Page Complete", status: "pass", description: "Comprehensive about page with team information" },
    { factor: "Contact Information", status: "pass", description: "Clear contact details and multiple contact methods" },
    { factor: "Privacy Policy", status: "pass", description: "Detailed privacy policy accessible from footer" },
    { factor: "Terms of Service", status: "pass", description: "Clear terms of service page available" },
    { factor: "SSL Certificate", status: "pass", description: "Valid SSL certificate with A+ rating" },
    { factor: "Professional Design", status: "pass", description: "Modern, professional website design" },
    { factor: "Error-free Content", status: "warning", description: "Minor grammar issues detected" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const overallEEAT = Math.round(
    (eeatScores.experience + eeatScores.expertise + eeatScores.authoritativeness + eeatScores.trustworthiness) / 4
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">E-E-A-T Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive evaluation of Experience, Expertise, Authoritativeness, and Trustworthiness
            </p>
          </div>

          {/* Overall E-E-A-T Score */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overall E-E-A-T Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                {/* Overall Score */}
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-muted"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - overallEEAT / 100)}`}
                        className={getScoreColor(overallEEAT)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-lg font-bold ${getScoreColor(overallEEAT)}`}>
                        {overallEEAT}
                      </span>
                    </div>
                  </div>
                  <p className="font-medium">Overall</p>
                </div>

                {/* Individual Scores */}
                {Object.entries(eeatScores).map(([category, score]) => {
                  const icons = {
                    experience: User,
                    expertise: Award,
                    authoritativeness: Star,
                    trustworthiness: Shield,
                  };
                  const IconComponent = icons[category as keyof typeof icons];
                  
                  return (
                    <div key={category} className="text-center">
                      <IconComponent className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <div className={`text-2xl font-bold mb-1 ${getScoreColor(score)}`}>
                        {score}
                      </div>
                      <p className="text-sm font-medium capitalize mb-2">{category}</p>
                      <Progress value={score} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
              <TabsTrigger value="authoritativeness">Authority</TabsTrigger>
              <TabsTrigger value="trustworthiness">Trust</TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <User className="w-6 h-6" />
                    <div>
                      <CardTitle>Experience Assessment</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Does the content demonstrate first-hand experience with the topic?
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {experienceFactors.map((factor, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                        {getStatusIcon(factor.status)}
                        <div className="flex-1">
                          <h4 className="font-medium">{factor.factor}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {factor.description}
                          </p>
                        </div>
                        <Badge variant={factor.status === "pass" ? "default" : factor.status === "warning" ? "secondary" : "destructive"}>
                          {factor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="expertise">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    <div>
                      <CardTitle>Expertise Assessment</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Does the content demonstrate high levels of knowledge and skill?
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {expertiseFactors.map((factor, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                        {getStatusIcon(factor.status)}
                        <div className="flex-1">
                          <h4 className="font-medium">{factor.factor}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {factor.description}
                          </p>
                        </div>
                        <Badge variant={factor.status === "pass" ? "default" : factor.status === "warning" ? "secondary" : "destructive"}>
                          {factor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="authoritativeness">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    <div>
                      <CardTitle>Authoritativeness Assessment</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Is the content creator or website recognized as an authority?
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {authorityFactors.map((factor, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                        {getStatusIcon(factor.status)}
                        <div className="flex-1">
                          <h4 className="font-medium">{factor.factor}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {factor.description}
                          </p>
                        </div>
                        <Badge variant={factor.status === "pass" ? "default" : factor.status === "warning" ? "secondary" : "destructive"}>
                          {factor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trustworthiness">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    <div>
                      <CardTitle>Trustworthiness Assessment</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Is the content creator or website legitimate and trustworthy?
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trustFactors.map((factor, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                        {getStatusIcon(factor.status)}
                        <div className="flex-1">
                          <h4 className="font-medium">{factor.factor}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {factor.description}
                          </p>
                        </div>
                        <Badge variant={factor.status === "pass" ? "default" : factor.status === "warning" ? "secondary" : "destructive"}>
                          {factor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EEATAnalysis;