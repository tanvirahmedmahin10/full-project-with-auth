import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface INews{
      id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}
const MainNewsCard = ({mainNews}:{mainNews:INews[]}) => {
    const firstNews=mainNews[0]
    
    return (
      <Link href={`/article/${firstNews.id}`}>
       <div className="card bg-base-100 w-[400px] shadow-sm">
  <figure>
    <Image
      src={firstNews.imageUrl}
      alt={firstNews.imageAlt || "News Image"} 
      width={600}
      height={400}
  
    />
  </figure>
  <div className="card-body">
    <h2>{firstNews.category}</h2>
    <h2 className="card-title">
      {firstNews.title}</h2>
    <p>{firstNews.description}</p>
  </div>
</div>
</Link>
    );
};

export default MainNewsCard;