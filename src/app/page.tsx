import Image from "next/image";
import MainNewsCard, { INews } from "./Components/MainNewsCard";
import NewsCard from "./Components/NewsCard";
import Link from "next/link";
interface IFullNews{
   title: string,
      curationId: string,
      curationType: string,
      link: null|string,
      count: number,
      articles:INews[]
}

export default async function Home() {
  const res=await fetch('https://news-api-v2.vercel.app/api/news/sections')
    const data=await res.json()
    const news=data.data
    const mainNews=news[0].articles
    
  return (
    <div>
    <div className="grid grid-cols-3 gap-5">
     <div className="grid col-span-2">
      <div className="flex gap-3">
        <MainNewsCard mainNews={mainNews}></MainNewsCard>
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden divide-y divide-gray-200 shadow-sm">
  {mainNews.slice(0, 4).map((mn: INews) => (
    <div key={mn.id} className="p-5 hover:bg-gray-50 transition-colors">
   <Link href={`/article/${mn.id}`}>  <span className="block mb-2 text-sm font-bold text-red-600">
        {mn.category}
      </span>
      <h3 className="text-base font-bold leading-snug text-gray-900 hover:text-red-600 cursor-pointer">
        {mn.title}
      </h3>
      </Link> 
    </div>
  ))}
</div>
      </div>
     </div>
     <div className="grid col-span-1 gap-4 border border-gray-200 bg-white p-5 shadow-sm rounded-xl">
      <h2 className="font-semibold">সর্বাধিক পঠিত</h2>
{mainNews.map((mn: INews,index:number)=>
<div key={mn.id} >
  <Link className="flex gap-2" href={`/article/${mn.id}`}>
  <div className="text-red-600">{index+1}</div>
  <div>{mn.title}</div>
  </Link>
</div>

)}
     </div>
     
      
    </div>
    <div>{
      news.slice(1).map((ns:IFullNews,index:number)=><div key={index}>
        <div className="mb-4 border-b-2 border-red-600 pb-2 my-10">{ns.title}</div>
        <div className="grid grid-cols-3 gap-7">
          
        {ns.articles.map((nc:INews)=><Link key={nc.id} href={`/article/${nc.id}`}><NewsCard nc={nc}></NewsCard> </Link>)}
        </div>
        </div>
      
    )
      }
      
      
      </div>
    </div>
  );
}
