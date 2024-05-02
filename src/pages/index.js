import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      title="Chisteando"
      description="Web pensada para echarte unas risas en Internet."
    >
      <main className="px-3 font-medium py-5 w-full xl:w-[1120px] mx-auto">
        <span className="text-center items-center">
          <h2 className="font-bold">¡Bienvenido a Chisteando!</h2>
          <p>Pagina donde te puedes echar unas risas con los chistes o hacer reir a tus amigos</p>
          <p className="font-extralight text-sm">(O para mejorar tu nivel de chistes ante tu cuñao)</p>
          <br />
          <br />
          <p>
            Para explicarte de forma breve. 
            <br />
            <br />
            En <Link href="/busqueda">Busqueda</Link> podrás buscar los chistes por su contenido,
            en <a href="#">Tematica</a> podrás buscarlos por diferentes tematicas que contengan y 
            en <a href="#">Censura</a> para buscar chistes que no contengan las palabras que quieras 
            <br />
            <br />
            Por último, si quieres aportar a esta pagina, ahi tienes la opcion de <a href="#"> Escribe un chiste</a> para tí.
            <br />
            <br />
          </p>
          <span className="flex items-center justify-center flex-col">
            <p>A Pepe lo tenemos currando por detrás, tranqui, que la pagina es gratis gracias a él</p>

            <Image src="/peepo-card.webp" width="250" height="250" alt="Pepe la rana con una tarjeta de credito"></Image>
          </span>
        </span>
      </main>
    </Layout>
  );
}
