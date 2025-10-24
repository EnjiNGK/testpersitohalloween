import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gq3q0im',
        'template_054g8xt',
        {
          from_name: formData.name,
          from_email: formData.email,
          service_type: formData.service,
          message: formData.message,
          to_email: 'info.singularityy@gmail.com'
        },
        'yIkPy6kgvBrQUOeJy'
      );

      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo al più presto per discutere del tuo progetto.",
      });

      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Cinematic Background */}
      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        {/* Animated Nebula Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexrank-violet/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-nexrank-purple/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-nexrank-violet/10 via-transparent to-blue-600/10 animated-gradient"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-nexrank-violet/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Contattaci
            </h1>
            
            <p className="subtitle-text mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              Hai un progetto in mente? Parliamone insieme. 
              Siamo qui per trasformare le tue idee in realtà.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-nexrank-violet/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-nexrank-violet/20 flex items-center justify-center text-nexrank-violet flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-gray-400 break-all">info.singularityy@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-nexrank-violet/20 flex items-center justify-center text-nexrank-violet flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">Telefono</h3>
                        <p className="text-gray-400">+39 3488664662</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-nexrank-violet/20 flex items-center justify-center text-nexrank-violet flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">Disponibilità</h3>
                        <p className="text-gray-400">Lun-Ven: 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card-enhanced animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Inizia il tuo progetto</CardTitle>
                  <CardDescription className="text-gray-400">
                    Compila il form e ti contatteremo entro 24 ore
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Il tuo nome"
                          className="
  bg-[rgba(255,255,255,0.05)] border border-white/10 text-white placeholder-gray-400
  focus:ring-2 focus:ring-orange-500/60 focus:border-orange-400
  rounded-md transition-all duration-300
  dark:bg-[rgba(0,0,0,0.3)] dark:border-white/20
"

                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="la.tua@email.com"
                          className="
  bg-[rgba(255,255,255,0.05)] border border-white/10 text-white placeholder-gray-400
  focus:ring-2 focus:ring-orange-500/60 focus:border-orange-400
  rounded-md transition-all duration-300
  dark:bg-[rgba(0,0,0,0.3)] dark:border-white/20
"

                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Servizio richiesto *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="
  bg-[rgba(255,255,255,0.05)] border border-white/10 text-white placeholder-gray-400
  focus:ring-2 focus:ring-orange-500/60 focus:border-orange-400
  rounded-md transition-all duration-300
  dark:bg-[rgba(0,0,0,0.3)] dark:border-white/20
"

                      >
                        <option value="">Seleziona un servizio</option>
                        <option value="grafica">Servizi di Grafica</option>
                        <option value="informatica">Servizi Informatici</option>
                        <option value="video">Video Editing</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Descrizione del progetto *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Raccontaci del tuo progetto, obiettivi e tempistiche..."
                        className="
  bg-[rgba(255,255,255,0.05)] border border-white/10 text-white placeholder-gray-400
  focus:ring-2 focus:ring-orange-500/60 focus:border-orange-400
  rounded-md transition-all duration-300
  dark:bg-[rgba(0,0,0,0.3)] dark:border-white/20
"

                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="primary-button-glow w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Invio in corso..."
                      ) : (
                        <>
                          <Send size={18} />
                          Invia richiesta
                        </>
                      )}
                    </Button>
                  </form>
                  <p className="text-sm text-gray-400 pt-6 text-center">
                    📍 <strong>Visita il nostro profilo Google Business</strong><br />
                    <a
                      href="https://share.google/z4vbNP75feo8vM9kS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nexrank-violet underline hover:text-nexrank-violet/80 transition"
                    >
                      Clicca qui per il profilo Google
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
