"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

import { blogs } from "@/lib/blog-data";
import Footer from "@/components/site/Footer";

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const blog = blogs.find((b) => b.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const relatedBlogs = blogs
    .filter((b) => b.slug !== slug && blog && b.category === blog.category)
    .slice(0, 3);

  const finalRelated =
    relatedBlogs.length >= 2
      ? relatedBlogs
      : blogs.filter((b) => b.slug !== slug).slice(0, 3);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".detail-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  const handleShare = async (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = blog?.title || "";

    switch (platform) {
      case "copy":
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-gudlak font-bold text-neutral-900 mb-4">
            Article introuvable
          </h1>
          <p className="text-neutral-600 mb-8">
            Cet article n&apos;existe pas ou a été supprimé.
          </p>
          <Link
            href="/blogs"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity inline-block"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full font-sans">
      <main ref={containerRef}>
        {/* Article Header — clean white layout like the reference */}
        <section className="pt-40 pb-6 px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blogs"
              className="detail-reveal inline-flex items-center gap-2 text-neutral-500 hover:text-primary transition-colors mb-10 text-sm font-medium"
            >
              <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
              Retour au blog
            </Link>

            {/* Title */}
            <h1 className="detail-reveal text-4xl sm:text-5xl md:text-6xl font-gudlak font-extrabold text-neutral-900 leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="detail-reveal text-xl md:text-2xl text-neutral-500 leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            {/* Author Row */}
            <div className="detail-reveal flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-gudlak text-lg shrink-0">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-neutral-900">{blog.author}</p>
                <p className="text-sm text-neutral-500">{blog.date}</p>
              </div>
            </div>

            {/* Engagement / Stats Bar */}
            <div className="detail-reveal flex items-center justify-between py-4 border-y border-neutral-200">
              <div className="flex items-center gap-6 text-neutral-500">
                {/* Likes */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 hover:text-red-500 transition-colors ${liked ? "text-red-500" : ""}`}
                >
                  <Icon
                    icon={liked ? "solar:heart-bold" : "solar:heart-linear"}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">
                    {blog.views > 100 ? Math.round(blog.views / 10) : 12}
                  </span>
                </button>

                {/* Comments */}
                <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Icon icon="solar:chat-round-linear" className="w-5 h-5" />
                  <span className="text-sm">{Math.round(blog.views / 60)}</span>
                </button>

                {/* Views */}
                <div className="flex items-center gap-1.5">
                  <Icon icon="solar:eye-linear" className="w-5 h-5" />
                  <span className="text-sm">{blog.views.toLocaleString()}</span>
                </div>
              </div>

              {/* Share Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare("copy")}
                  className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 transition-colors px-3 py-1.5 rounded-full hover:bg-neutral-100"
                >
                  <Icon
                    icon={
                      copied
                        ? "solar:check-circle-linear"
                        : "solar:share-linear"
                    }
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium hidden sm:inline">
                    {copied ? "Copié !" : "Partager"}
                  </span>
                </button>

                <button
                  onClick={() => handleShare("twitter")}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
                  aria-label="Twitter"
                >
                  <Icon
                    icon="solar:letter-linear"
                    className="w-[18px] h-[18px]"
                  />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
                  aria-label="LinkedIn"
                >
                  <Icon
                    icon="solar:link-linear"
                    className="w-[18px] h-[18px]"
                  />
                </button>
                <button
                  onClick={() => handleShare("facebook")}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
                  aria-label="Facebook"
                >
                  <Icon
                    icon="solar:share-linear"
                    className="w-[18px] h-[18px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-5 md:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="detail-reveal relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="px-5 md:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="detail-reveal text-lg md:text-xl text-neutral-700 leading-[1.8]">
              <p>{blog.content}</p>
            </div>
          </div>
        </section>

        {/* Bottom Share Bar */}
        <section className="px-5 md:px-8 pb-12">
          <div className="max-w-3xl mx-auto border-t border-neutral-200 pt-8 flex items-center justify-between">
            <div className="flex items-center gap-6 text-neutral-500">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-1.5 hover:text-red-500 transition-colors ${liked ? "text-red-500" : ""}`}
              >
                <Icon
                  icon={liked ? "solar:heart-bold" : "solar:heart-linear"}
                  className="w-5 h-5"
                />
                <span className="text-sm">
                  {blog.views > 100 ? Math.round(blog.views / 10) : 12}
                </span>
              </button>
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:eye-linear" className="w-5 h-5" />
                <span className="text-sm">{blog.views.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => handleShare("copy")}
              className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 transition-colors px-4 py-2 rounded-full hover:bg-neutral-100 border border-neutral-200"
            >
              <Icon
                icon={
                  copied ? "solar:check-circle-linear" : "solar:share-linear"
                }
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">
                {copied ? "Copié !" : "Partager"}
              </span>
            </button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-neutral-100 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-24">
            <h2 className="text-3xl sm:text-4xl font-gudlak font-extrabold text-neutral-900 mb-12">
              Articles à découvrir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {finalRelated.map((related) => (
                <Link
                  key={related.id}
                  href={`/blogs/${related.slug}`}
                  className="group flex flex-col bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-neutral-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Icon icon="solar:calendar-linear" />
                        <span>{related.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon icon="solar:eye-linear" />
                        <span>{related.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-gudlak text-neutral-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="mt-auto pt-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-700">
                        {related.author}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-neutral-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon
                          icon="solar:arrow-right-linear"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
