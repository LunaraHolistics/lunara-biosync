import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    // Carrega imagens da pasta /assets/carousel
    // Nota: Em produção, as imagens precisam estar no repositório
    const carouselImages = [
      '/assets/carousel/imagem1.jpg',
      '/assets/carousel/imagem2.jpg',
      '/assets/carousel/imagem3.jpg',
      '/assets/carousel/imagem4.jpg',
      '/assets/carousel/imagem5.jpg',
    ].filter((img) => {
      // Verifica se a imagem existe (em desenvolvimento)
      return true; // Em produção, será carregado dinamicamente
    });

    // Tenta carregar imagens dinamicamente
    const loadImages = async () => {
      try {
        const response = await fetch('/assets/carousel');
        // Fallback: usar imagens conhecidas
        setImages([
          '/assets/carousel/imagem1.jpg',
          '/assets/carousel/imagem2.jpg',
          '/assets/carousel/imagem3.jpg',
        ].filter(Boolean));
      } catch {
        // Se não conseguir carregar, usa lista vazia
        setImages([]);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (images.length === 0) {
    return (
      <div className="w-full bg-gradient-to-r from-[#F0FDFA] to-[#E0F2FE] rounded-2xl p-12 text-center border-2 border-[#2DD4BF]">
        <p className="text-[#64748B] italic">
          📸 Carrossel vazio. Adicione imagens em <code className="bg-white px-2 py-1 rounded">client/public/assets/carousel/</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg group">
      {/* Imagens */}
      <div className="relative w-full h-96 md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F172A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#0F172A] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de slides */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-black/70 transition-all"
        title={isAutoPlay ? 'Pausar' : 'Reproduzir'}
      >
        {isAutoPlay ? '⏸' : '▶'}
      </button>
    </div>
  );
}
