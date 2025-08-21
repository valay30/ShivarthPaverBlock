import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-pavers.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-14 sm:pt-16 bg-gradient-hero">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 mt-4 leading-tight">
              Premium Paver Blocks for 
              <span className="text-accent"> Every Project</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
              Transform your spaces with high-quality, durable paver blocks. 
              From residential driveways to commercial complexes, we deliver excellence in every block.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Premium Quality Materials</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Weather Resistant</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Custom Designs Available</span>
              </div>
              <div className="flex items-center text-primary-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>Expert Installation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('products')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all duration-300 group"
              >
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={heroImage}
                alt="Premium paver block installation"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-card p-3 sm:p-4 lg:p-6 rounded-lg shadow-elegant">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-card p-3 sm:p-4 lg:p-6 rounded-lg shadow-elegant">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">1+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;