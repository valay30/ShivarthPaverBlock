import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the form data for WhatsApp message
    const message = `Hello! I'm interested in a quote for paver blocks.

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.project ? `Project Type: ${formData.project}` : ''}

${formData.message ? `*Project Details:*
${formData.message}` : ''}

Please provide me with a detailed quote. Thank you!`;
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/918200321064?text=${encodeURIComponent(message)}`, '_blank');
    
    // Clear the form
    setFormData({ name: '', email: '', phone: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "Near Perfect School, Opp. Indianoil Petrol Pump, Dhansura Road,Akodara, Himmatnagar, Gujarat - 383001 \n India",
      link: "https://maps.app.goo.gl/GEykPYpmfrFhRz3y7"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "+91 63558 11170\n+91 90000 83183",
      link: "tel:+916355811170"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@shivarth.com\nsales@shivarth.com\nsupport@shivarth.com",
      link: "mailto:info@shivarth.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Saturday\n9:00 AM - 6:00 PM\nSunday: Closed",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation and detailed quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <div className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.details}
                      </div>
                      {info.link && (
                        <a 
                          href={info.link}
                          className="text-accent hover:text-accent/80 text-sm font-medium inline-block mt-1 transition-colors duration-300"
                        >
                          {info.link.startsWith('tel:+916355811170') ? 'Call Now' : 
                           info.link.startsWith('mailto:') ? 'Send Email' : 'View on Map'}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact */}
            <Card className="mt-6 lg:mt-8 border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Need Immediate Assistance?</CardTitle>
                <CardDescription>
                  Call our sales team for immediate support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.open('tel:+916355811170')}
                >
                  Call Now: +91 63558 11170
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a detailed quote within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="project">Project Type</Label>
                      <Input
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="e.g., Residential Driveway, Commercial Parking"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your project requirements, area size, preferred paver type, timeline, etc."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-card rounded-lg p-6 lg:p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have chosen Shivarth for their paver block needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('tel:+919876543210')}
              >
                Call for Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;