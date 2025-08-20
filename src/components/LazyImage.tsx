import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  placeholder?: React.ReactNode;
  lowQualitySrc?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  placeholder,
  lowQualitySrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate WebP fallback if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('lovable-uploads') && !originalSrc.includes('.webp')) {
      // Check if browser supports WebP
      if (typeof window !== 'undefined') {
        const canvas = document.createElement('canvas');
        const canSupportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        
        if (canSupportsWebP) {
          return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        }
      }
    }
    return originalSrc;
  };

  const imageSrc = hasError ? fallbackSrc : getOptimizedSrc(src);
  const shouldLoad = isInView || isLoaded;

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-muted/20",
        className
      )}
      style={{ aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : undefined }}
    >
      {/* Low quality placeholder or skeleton */}
      {!isLoaded && lowQualitySrc && shouldLoad && (
        <img
          src={lowQualitySrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Custom placeholder */}
      {!isLoaded && placeholder && !shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center">
          {placeholder}
        </div>
      )}

      {/* Main image */}
      {shouldLoad && (
        <img
          {...props}
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={{
            ...props.style,
            aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : undefined
          }}
        />
      )}

      {/* Loading overlay */}
      {shouldLoad && !isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 animate-pulse" />
      )}
    </div>
  );
};