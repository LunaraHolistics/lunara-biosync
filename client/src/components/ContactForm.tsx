import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    interest: 'individual',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.city) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    try {
      // Format WhatsApp number for sending
      const cleanPhone = formData.whatsapp.replace(/\D/g, '');
      const message = `Olá! Meu nome é ${formData.name}, sou de ${formData.city} e tenho interesse em ${formData.interest === 'individual' ? 'análise individual' : 'solução para empresa/clínica'}.`;
      
      const whatsappUrl = `https://wa.me/5516997934558?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success('Redirecionando para WhatsApp...');
      setFormData({ name: '', whatsapp: '', city: '', interest: 'individual' });
    } catch (error) {
      toast.error('Erro ao processar formulário');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
          Seu Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="João Silva"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-[#0F172A] mb-2">
          WhatsApp
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="(16) 99793-4558"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-[#0F172A] mb-2">
          Sua Cidade
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Araraquara, SP"
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-[#0F172A] mb-2">
          Interesse
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all"
        >
          <option value="individual">Para mim (cliente individual)</option>
          <option value="business">Para minha empresa/clínica/SPA</option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary"
      >
        {isLoading ? 'Processando...' : 'Quero Agendar Minha Análise'}
      </Button>
    </form>
  );
}
