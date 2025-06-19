import { useState } from 'react';

// Image component with smooth loading
const SmoothImage = ({ src, alt, className, caption }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden rounded-xl" style={{ width: '300px', height: '400px' }}>
        {/* Skeleton/placeholder */}
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
        />

        {/* Actual image */}
        <img
          src={src}
          alt={alt}
          className={`${className} absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {caption && (
        <p className='text-[0.8rem] font-light mt-2'>{caption}</p>
      )}
    </div>
  );
};


export default SmoothImage;