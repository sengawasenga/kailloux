"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

import { blogs, categories } from "@/lib/blog-data";

gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredBlogs =
    activeCategory === "Tous"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  useEffect(() => {
    // Re-animate when filter changes
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={containerRef}
      className="py-20 px-5 md:px-8 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm border ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="blog-card group flex flex-col bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Icon icon="solar:calendar-linear" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon="solar:clock-circle-linear" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-gudlak text-neutral-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-neutral-600 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-medium text-neutral-800">
                    {blog.author}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 text-neutral-500 text-xl font-medium">
            Aucun article trouvé dans cette catégorie.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogListSection;
