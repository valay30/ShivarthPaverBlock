import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Wrench, Users, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Manufacturing & Supply",
      description: "High-quality paver block manufacturing with timely delivery to your project site.",
      features: ["Premium Quality Materials", "Bulk Orders Available", "Timely Delivery", "Quality Assurance"]
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Professional installation by experienced teams ensuring perfect results every time.",
      features: ["Expert Installation", "Professional Tools", "Quality Workmanship", "Project Management"]
    },
    {
      icon: Users,
      title: "Design Consultation",
      description: "Comprehensive design consultation to help you choose the perfect pavers for your project.",
      features: ["Free Consultation", "Custom Designs", "3D Visualization", "Material Selection"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every paver meets our high standards.",
      features: ["Quality Testing", "Strength Verification", "Durability Tests", "Compliance Certification"]
    },
    {
      icon: Clock,
      title: "Maintenance Support",
      description: "Ongoing maintenance support and guidance to keep your pavers looking their best.",
      features: ["Maintenance Guidelines", "Repair Services", "Cleaning Solutions", "Long-term Support"]
    },
    {
      icon: Award,
      title: "Custom Solutions",
      description: "Tailored paver solutions for unique projects with specialized requirements.",
      features: ["Custom Shapes", "Special Colors", "Unique Patterns", "Technical Specifications"]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive paver block solutions from design to installation and beyond
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-border hover:shadow-glow transition-all duration-300 group bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Our Process
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              From initial consultation to project completion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-foreground mb-2">Consultation</h4>
              <p className="text-sm text-muted-foreground">
                Initial meeting to understand your requirements and project scope
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-foreground mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">
                Custom design and material selection based on your needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-foreground mb-2">Manufacturing</h4>
              <p className="text-sm text-muted-foreground">
                High-quality manufacturing with rigorous quality control
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold text-foreground mb-2">Installation</h4>
              <p className="text-sm text-muted-foreground">
                Professional installation and project completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;