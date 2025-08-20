import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import constructionTeamImage from '@/assets/construction-team.png';

const About = () => {
  const stats = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "1+", label: "Years Experience", icon: Award },
    { number: "10+", label: "Team Members", icon: Users },
    { number: "24/7", label: "Customer Support", icon: Zap }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We never compromise on quality. Every paver block is manufactured to meet the highest industry standards."
    },
    {
      title: "Innovation",
      description: "Constantly innovating our manufacturing processes and designs to provide cutting-edge solutions."
    },
    {
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through trust and reliability."
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible manufacturing practices and sustainable building solutions."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            About Shivarth
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Leading manufacturer of premium paver blocks with a decade of excellence in construction materials
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Content */}
          <div>
            <div className="mb-6">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 mb-4">
                Established 2025
              </Badge>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Building the Future with 
                <span className="text-accent"> Premium Pavers</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Shivarth has been at the forefront of paver block manufacturing for over a decade. 
                We started with a simple vision: to provide high-quality, durable paving solutions 
                that stand the test of time.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we're proud to be one of the region's most trusted manufacturers, 
                serving residential, commercial, and industrial clients with our extensive 
                range of premium paver blocks.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">ISO Certified Quality</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">Advanced Manufacturing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">Expert Team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">Customer Satisfaction</span>
              </div>
            </div>

            <Button
              className="bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
              onClick={() => window.open("https://www.instagram.com/shivarthpaverblock/", "_blank")}
              >
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={constructionTeamImage}
                alt="Shivarth construction team"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center p-3 sm:p-4 lg:p-6 border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <IconComponent className="h-6 w-6 lg:h-8 lg:w-8 text-accent mx-auto mb-2 lg:mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Our Values
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              The principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;