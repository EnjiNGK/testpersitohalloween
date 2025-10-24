import React, { useState } from 'react';
import { Mail, Phone, MapPin, Users, Briefcase, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri" }),
  email: z.string().email({ message: "Inserisci un indirizzo email valido" }),
  position: z.string({ required_error: "Seleziona una posizione" }),
  message: z.string().min(10, { message: "Il messaggio deve contenere almeno 10 caratteri" }),
});

type FormValues = z.infer<typeof formSchema>;

const EMAILJS_SERVICE_ID = 'service_gq3q0im';
const EMAILJS_TEMPLATE_ID = 'template_054g8xt';
const EMAILJS_PUBLIC_KEY = 'yIkPy6kgvBrQUOeJy';

const WorkWithUsPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        position: data.position,
        message: data.message,
      };
      
      console.log("Sending email with params:", {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? "Set" : "Not set"
      });
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Email sent successfully:", response);
      
      toast({
        title: "Candidatura inviata",
        description: "Grazie per il tuo interesse! Ti contatteremo presto.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'invio della candidatura. Verifica nuovamente le credenziali.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-radial from-nexrank-purple/20 to-transparent opacity-30" />
          <div className="relative z-10 text-center">
            <h1 className="hero-text mb-6">Aiutaci a Crescere</h1>
            <p className="subtitle-text">
              Contribuisci a dare forma al futuro digitale
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-nexrank-purple">La Nostra Missione</h3>
              <p className="text-gray-300 leading-relaxed">
                In Singularity, crediamo nel potere della creatività e dell'innovazione. 
                Cerchiamo persone appassionate che vogliono fare la differenza nel mondo digitale.
              </p>
            </div>
            
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-nexrank-purple">Perché Unirsi a Noi</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-nexrank-purple mt-1" />
                  <span className="text-gray-300">Progetti stimolanti e innovativi</span>
                </li>
                <li className="flex items-start gap-3">
                  <HandHeart className="w-6 h-6 text-nexrank-purple mt-1" />
                  <span className="text-gray-300">Ambiente di lavoro inclusivo e collaborativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-nexrank-purple mt-1" />
                  <span className="text-gray-300">Opportunità di crescita e apprendimento</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contattaci</h3>
            <div className="space-y-6">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-nexrank-purple" />
                  <a href="mailto:info.singularityy@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    info.singularityy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-nexrank-purple" />
                  <span className="text-gray-300">+39 3488664662</span>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Nome completo</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Il tuo nome" 
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-nexrank-purple focus:border-transparent transition-all text-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="La tua email" 
                            type="email"
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-nexrank-purple focus:border-transparent transition-all text-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Posizione di interesse</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-white/10 border border-white/20 text-gray-300">
                              <SelectValue placeholder="Seleziona una posizione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-nexrank-dark-blue border border-white/20 text-white">
                            <SelectItem value="graphic" className="text-white focus:bg-nexrank-purple/20 focus:text-white">Graphic Designer</SelectItem>
                            <SelectItem value="developer" className="text-white focus:bg-nexrank-purple/20 focus:text-white">Developer</SelectItem>
                            <SelectItem value="video" className="text-white focus:bg-nexrank-purple/20 focus:text-white">Video Editor</SelectItem>
                            <SelectItem value="social" className="text-white focus:bg-nexrank-purple/20 focus:text-white">Impegno Sociale</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Messaggio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Raccontaci qualcosa di te e perché vuoi unirti a noi"
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-nexrank-purple focus:border-transparent transition-all resize-none min-h-[120px] text-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    className="w-full primary-button" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Candidatura"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUsPage;
