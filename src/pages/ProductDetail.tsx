import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import paverTypesImage from '@/assets/paver-types.png';

import InterlockingPavers1 from '@/assets/Interlocking/InterlockingPavers1.jpeg';
import InterlockingPavers2 from '@/assets/Interlocking/InterlockingPavers2.jpeg';
import InterlockingPavers3 from '@/assets/Interlocking/InterlockingPavers3.jpeg';

import DecorativePavers1 from '@/assets/Decorative/DecorativePavers1.jpeg';
import DecorativePavers2 from '@/assets/Decorative/DecorativePavers2.jpeg';
import DecorativePavers3 from '@/assets/Decorative/DecorativePavers3.jpeg';


import PermeablePavers1 from '@/assets/Permeable/PermeablePavers1.jpeg';
import PermeablePavers2 from '@/assets/Permeable/PermeablePavers2.jpeg';
import PermeablePavers3 from '@/assets/Permeable/PermeablePavers3.jpeg';

import IndustrialPavers1 from '@/assets/Industrial/IndustrialPavers1.jpeg';
import IndustrialPavers2 from '@/assets/Industrial/IndustrialPavers2.jpeg';
import IndustrialPavers3 from '@/assets/Industrial/IndustrialPavers3.jpeg';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Product data - in a real app this would come from an API
  const productData = {
    'interlocking-pavers': {
      name: "Interlocking Pavers",
      description: "Durable interlocking concrete pavers perfect for driveways, walkways, and patios.",
      features: ["High Strength", "Easy Installation", "Various Colors", "Anti-Slip Surface"],
      sizes: ["200x100x60mm", "200x100x80mm", "300x150x60mm"],
      applications: ["Residential Driveways", "Walkways", "Parking Areas"],
      images: [InterlockingPavers3, InterlockingPavers2, InterlockingPavers1],
      specifications: {
        "Compressive Strength": "40-50 MPa",
        "Water Absorption": "< 6%",
        "Abrasion Resistance": "Class 4",
        "Freeze-Thaw Resistance": "Excellent"
      },
      benefits: [
        "Quick and easy installation",
        "Individual replacement possible",
        "Excellent load distribution",
        "Permeable joint design",
        "Long-lasting durability"
      ]
    },
    'decorative-pavers': {
      name: "Decorative Pavers",
      description: "Aesthetic paver blocks with beautiful patterns and textures for premium spaces.",
      features: ["Premium Finish", "Custom Patterns", "Weather Resistant", "Long Lasting"],
      sizes: ["400x400x50mm", "300x300x50mm", "600x300x50mm"],
      applications: ["Garden Paths", "Pool Decks", "Commercial Spaces"],
      images: [DecorativePavers2, DecorativePavers3, DecorativePavers1],
      specifications: {
        "Compressive Strength": "35-45 MPa",
        "Water Absorption": "< 5%",
        "Surface Finish": "Textured/Smooth",
        "Color Fastness": "Excellent"
      },
      benefits: [
        "Enhanced aesthetic appeal",
        "Multiple design options",
        "Weather resistant finish",
        "Easy maintenance",
        "Premium quality materials"
      ]
    },
    'permeable-pavers': {
      name: "Permeable Pavers",
      description: "Eco-friendly permeable pavers for sustainable water management solutions.",
      features: ["Water Permeable", "Eco-Friendly", "Reduces Runoff", "LEED Certified"],
      sizes: ["200x100x80mm", "300x300x80mm"],
      applications: ["Parking Lots", "Green Buildings", "Sustainable Projects"],
      images: [PermeablePavers2, PermeablePavers3, PermeablePavers1],
      specifications: {
        "Permeability Rate": "0.35 cm/sec",
        "Compressive Strength": "45-55 MPa",
        "Void Ratio": "15-20%",
        "Environmental Rating": "LEED Certified"
      },
      benefits: [
        "Sustainable water management",
        "Reduces surface runoff",
        "Prevents flooding",
        "Environmentally friendly",
        "LEED certification support"
      ]
    },
    'industrial-pavers': {
      name: "Industrial Pavers",
      description: "Heavy-duty paver blocks designed for industrial and commercial applications.",
      features: ["Ultra High Strength", "Chemical Resistant", "Heavy Load Capacity", "Industrial Grade"],
      sizes: ["200x100x100mm", "250x125x100mm"],
      applications: ["Industrial Floors", "Loading Docks", "Heavy Traffic Areas"],
      images: [IndustrialPavers1, IndustrialPavers2, IndustrialPavers3],
      specifications: {
        "Compressive Strength": "60-70 MPa",
        "Load Capacity": "500+ kN/m²",
        "Chemical Resistance": "High",
        "Abrasion Class": "Class 5"
      },
      benefits: [
        "Maximum load bearing capacity",
        "Chemical and oil resistant",
        "Industrial grade durability",
        "Heavy machinery compatible",
        "Long service life"
      ]
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)} // ✅ go back to previous page/position
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </button>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] max-h-96 overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-md">
                    <img 
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Available Sizes
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Available Sizes</h3>
                <div className="space-y-2">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="bg-muted px-3 py-2 rounded-md text-sm">
                      {size}
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Contact Buttons */}
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => window.open(`https://wa.me/918200321064?text=Hello, I'm interested in ${product.name}. Can you provide more information?`, '_blank')}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Request Quote via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Specifications
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Benefits */}
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.applications.map((application, index) => (
                <div key={index} className="text-center p-6 bg-muted rounded-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-md"></div>
                  </div>
                  <h4 className="font-semibold text-foreground">{application}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;