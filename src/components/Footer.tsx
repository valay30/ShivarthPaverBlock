import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const products = [
    "Interlocking Pavers",
    "Decorative Pavers",
    "Permeable Pavers",
    "Industrial Pavers",
    "Custom Solutions"
  ];

  const services = [
    "Manufacturing",
    "Installation",
    "Design Consultation",
    "Quality Assurance",
    "Maintenance Support"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shivarth</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading manufacturer of premium paver blocks with over a decade of excellence 
              in construction materials. Quality, durability, and customer satisfaction are our priorities.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {/* <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a> */}
              {/* <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://www.instagram.com/shivarthpaverblock/" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Near Perfect School, Opp. Indianoil Petrol Pump, Dhansura Road,Akodara, Himmatnagar, Gujarat - 383001</div>
                  <div>India</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>+91 63558 11170</div>
                  <div>+91 90000 83183</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>info@shivarth.com</div>
                  <div>sales@shivarth.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 lg:mb-0">
              © {currentYear} Shivarth. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4 lg:gap-6 text-sm justify-center lg:justify-start">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                Terms of Service
              </a>
              {/* <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                Quality Certification
              </a> */}
              {/* <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                Careers
              </a> */}
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-xs">
              Built with quality and craftsmanship | Trusted by 100+ satisfied customers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;