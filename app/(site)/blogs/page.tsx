import { Metadata } from "next";
import BlogsHeroSection from "@/components/site/blogs/hero";
import BlogListSection from "@/components/site/blogs/blog-list";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Blog & Actualités",
  description:
    "Dernières actualités de Kailloux, conseils carrières et décryptages du marché du travail.",
};

const BlogsPage = () => {
  return (
    <div className="relative min-h-screen w-full font-sans">
      <main>
        <BlogsHeroSection />
        <BlogListSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
