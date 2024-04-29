import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      title="Chisteando"
      description="Web pensada para echarte unas risas en Internet."
    >

    </Layout>
  );
}
