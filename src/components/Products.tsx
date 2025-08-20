import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import paverTypesImage from '@/assets/paver-types.png';

const Products = () => {
  const products = [
    {
      name: "Interlocking Pavers",
      description: "Durable interlocking concrete pavers perfect for driveways, walkways, and patios.",
      features: ["High Strength", "Easy Installation", "Various Colors", "Anti-Slip Surface"],
      sizes: ["200x100x60mm", "200x100x80mm", "300x150x60mm"],
      applications: ["Residential Driveways", "Walkways", "Parking Areas"]
    },
    {
      name: "Decorative Pavers",
      description: "Aesthetic paver blocks with beautiful patterns and textures for premium spaces.",
      features: ["Premium Finish", "Custom Patterns", "Weather Resistant", "Long Lasting"],
      sizes: ["400x400x50mm", "300x300x50mm", "600x300x50mm"],
      applications: ["Garden Paths", "Pool Decks", "Commercial Spaces"]
    },
    {
      name: "Permeable Pavers",
      description: "Eco-friendly permeable pavers for sustainable water management solutions.",
      features: ["Water Permeable", "Eco-Friendly", "Reduces Runoff", "LEED Certified"],
      sizes: ["200x100x80mm", "300x300x80mm"],
      applications: ["Parking Lots", "Green Buildings", "Sustainable Projects"]
    },
    {
      name: "Industrial Pavers",
      description: "Heavy-duty paver blocks designed for industrial and commercial applications.",
      features: ["Ultra High Strength", "Chemical Resistant", "Heavy Load Capacity", "Industrial Grade"],
      sizes: ["200x100x100mm", "250x125x100mm"],
      applications: ["Industrial Floors", "Loading Docks", "Heavy Traffic Areas"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality paver blocks designed for every application
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-elegant">
            <img 
              src={paverTypesImage}
              alt="Various types of paver blocks"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="text-primary-foreground p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Quality You Can Trust</h3>
                <p className="text-primary-foreground/90">Premium materials, superior craftsmanship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-border hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                  <Link 
                    to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:underline cursor-pointer"
                  >
                    {product.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Available Sizes:</h4>
                  <div className="text-sm text-muted-foreground">
                    {product.sizes.join(" • ")}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
                  <div className="text-sm text-muted-foreground">
                    {product.applications.join(" • ")}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-muted rounded-lg p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We also manufacture custom paver blocks according to your specific requirements
            </p>
            <Button 
              onClick={() => window.open(`https://wa.me/918200321064?text=Hello, I'm interested in your paver blocks. Can you provide more information?`, '_blank')}
              className="bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;