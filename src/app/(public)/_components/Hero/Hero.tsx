"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import pizzaHero from "../../../../../public/pizza.png";

export function Hero() {
  const handleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL!;
  };

  return (
    <section className="flex-1 flex items-center justify-center px-6 md:px-0">
      <main className="container flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <article className="text-center lg:text-left max-w-xl space-y-8">
          <h1 className="text-4xl font-bold">
            Peça a melhor pizza da cidade sem sair de casa!
          </h1>
          <p>
            Nós somos uma pizzaria delivery com foco em sabor, rapidez e qualidade.
            Escolha seu sabor favorito e receba quentinha na sua porta.
          </p>

          <Button onClick={handleLogin} className="mx-auto lg:mx-0">
            Peça sua pizza
          </Button>
        </article>

        <div className="hidden lg:block">
          <Image
            src={pizzaHero}
            width={500}
            height={500}
            className="object-contain"
            quality={100}
            priority
            alt="Imagem de uma pizza deliciosa"
          />
        </div>
      </main>
    </section >
  );
}
