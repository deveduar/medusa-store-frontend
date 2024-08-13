import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Image from 'next/image';

import heroImage from "../../../../../public/images/letter-black-verti.svg"; 
import heroLogo from "../../../../../public/logo.svg"; 

const Hero = () => {
  return (
    <div className=" relative h-[75vh] w-full border-b border-ui-border-base bg-ui-bg-subtle flex flex-col justify-center items-center p-8 gap-6">
      {/* Contenedor de imágenes */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={heroImage}
          width={300}
          height={200}
          alt="Visual Evoke image"
        />
        <Image
          src={heroLogo}
          width={160}
          height={200}
          alt="Visual Evoke logo"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col items-start text-left text-white gap-2">
        <a
          href="https://github.com/deveduar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="flex items-center gap-2">
            <Github />
            GitHub
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
