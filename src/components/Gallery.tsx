// components/Gallery.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CatImage {
  src: string;
  alt: string;
}

// Type for the imported images from glob
type GlobImage = {
  [path: string]: {
    default: string;
  };
};

// Import all images at build time
const globImages: GlobImage = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg,gif}', { 
  eager: true 
});

// Convert the glob imports to CatImage array
const importedCatImages: CatImage[] = Object.entries(globImages).map(([path, module]) => ({
  src: module.default,
  alt: path.split('/').pop()?.replace(/\.[^/.]+$/, "") || "cat-image", // Remove file extension
}));

interface Props {
  catImages?: CatImage[]; // Make it optional to use either prop or imported images
}

export default function CarouselOrientationDemo({ catImages = importedCatImages }: Props) {
  return (
    <div className="relative w-full md:max-w-xs"> {/* Added wrapper for better control */}

    <Carousel
      opts={{ align: "start", 
      slidesToScroll: 1,  // Only scroll one item at a time
    }}
      orientation="vertical"
      className="w-full mt-10 outline-black md:max-w-xs bg-blue-100"
    >
      <CarouselContent className="mt-6 h-[60vh] mb-10">
        {catImages.map((image, index) => (
          <CarouselItem key={index} className="pt-0 pb-2 mt-0">
            <div>
              <Card className="bg-blue-100">
                <CardContent className="flex aspect-square items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-h-[55vh] object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute w-20 h-20 -top-10 bg-blue-400" />
      <CarouselNext className="absolute -bottom-10 w-20 h-20 bg-amber-300 z-20" />
    </Carousel>
    </div>
  );
}



// // components/Gallery.tsx
// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"

// interface CatImage {
//     src: string;
//     alt: string;
// }

// interface Props {
//     catImages: CatImage[];
// }

// const catImages = import.meta.glob('/assets/images/*.{png,jpg,jpeg,svg,gif}', { eager: true });


// export function CarouselOrientationDemo({ catImages }: Props) {
//     return (
//         <Carousel
//             opts={{ align: "start" }}
//             orientation="vertical"
//             className="w-full mt-10 outline-black md:max-w-xs bg-blue-100"
//         >
//             <CarouselContent className="mt-6 h-[50vh] mb-10">
//                 {catImages.map((image, index) => (
//                     <CarouselItem key={index} className="pt-1 md:basis-1/2 mt-1 mb-1">
//                         <div>
//                             <Card className="bg-blue-100">
//                                 <CardContent className="flex aspect-square items-center justify-center">
//                                     <img
//                                         src={image.src}
//                                         alt={image.alt}
//                                         className="w-full h-full object-cover rounded-lg"
//                                     />
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             <CarouselPrevious className="absolute w-20 h-20 -top-10 bg-blue-400" />
//             <CarouselNext className="absolute -bottom-10 w-20 h-20 bg-amber-300 z-20" />
//         </Carousel>
//     )
// }





// function Gallery() {
//     return (
//       <div className="p-8">
//         <h1 className="text-3xl font-bold mb-4">Gallery</h1>
//         <p>Gallery content goes here...</p>
//       </div>
//     )
//   }
//   export default Gallery
  