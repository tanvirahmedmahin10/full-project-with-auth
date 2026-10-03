import Image from 'next/image';
import React from 'react';

export type BodyTextBlock = {
  type: 'text';
  text: string;
};

export type BodySubheadingBlock = {
  type: 'subheading';
  text: string;
};

export type BodyImageBlock = {
  type: 'image';
  url: string;
  width: number;
  height: number;
  caption: string | null;
  altText: string | null;
  copyrightHolder?: string;
};
export type BodyItem = BodyTextBlock | BodySubheadingBlock | BodyImageBlock
export type Topic = {
  id: string;
  name: string;
};
const page = async({
  params,
}: {
  params: Promise<{ artId: string }>
}) => {
    const { artId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${artId}`)
    const data = await res.json()
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 font-sans antialiased text-gray-900">
  {/* Article Header */}
  <header className="mb-8 border-b border-gray-200 pb-6">
    <div className="mb-3 flex flex-wrap items-center gap-2">
      {data.data.topics.map((topic:Topic) => (
        <span
          key={topic.id}
          className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700"
        >
          {topic.name}
        </span>
      ))}
    </div>

    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
      {data.data.title}
    </h1>

    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
      <span>সূত্র: <strong className="text-gray-700">{data.data.source}</strong></span>
      <time dateTime={data.data.firstPublished}>
        {new Date(data.data.firstPublished).toLocaleDateString('bn-BD', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </div>
  </header>

  {/* Article Content */}
  <article className="space-y-6 text-base leading-relaxed text-gray-800 md:text-lg">
    {data.data.body.map((item:BodyItem, idx:number) => {
      if (item.type === 'text') {
        return (
          <p key={idx} className="whitespace-pre-line">
            {item.text}
          </p>
        );
      }

      if (item.type === 'subheading') {
        return (
          <h2 key={idx} className="pt-4 text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
            {item.text}
          </h2>
        );
      }

      if (item.type === 'image') {
        return (
          <figure key={idx} className="my-6 overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-200">
            <Image
  src={item.url}
  alt={item.altText || ''}
  width={item.width || 800}
  height={item.height || 450}
  className="h-auto w-full object-cover"
  loading="lazy"
/>
            {(item.caption || item.altText) && (
              <figcaption className="p-3 text-xs md:text-sm text-gray-600 bg-gray-50 border-t border-gray-100">
                {item.caption || item.altText}
                {item.copyrightHolder && (
                  <span className="block text-gray-400 mt-0.5">ছবি: {item.copyrightHolder}</span>
                )}
              </figcaption>
            )}
          </figure>
        );
      }

      return null;
    })}
  </article>

  {/* Footer Tags */}
  <footer className="mt-12 border-t border-gray-200 pt-6">
    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">সম্পর্কিত ট্যাগ</h3>
    <div className="flex flex-wrap gap-2">
      {data.data.tags.map((tag:string[], idx:number) => (
        <span
          key={idx}
          className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
        >
          #{tag}
        </span>
      ))}
    </div>
  </footer>
</div>
    );
};

export default page;