import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { blogs } from "@/lib/blog-data";
import Footer from "@/components/site/Footer";
import BlogDetailClient from "@/app/(site)/blogs/[slug]/BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date, // Note: Should ideally be ISO format
      authors: [blog.author],
      images: [
        {
          url: blog.image.src,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image.src],
    },
  };
}

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

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

  return <BlogDetailClient blog={blog} allBlogs={blogs} />;
};

export default BlogDetailPage;
