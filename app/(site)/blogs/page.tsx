import BlogsHeroSection from "@/components/site/blogs/hero";
import BlogListSection from "@/components/site/blogs/blog-list";
import Footer from "@/components/site/Footer";

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
