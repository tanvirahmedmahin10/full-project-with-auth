
import Link from 'next/link';
import MarqueeText from 'react-marquee-text';
 interface IHead {
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

const MarqueeSetup = async() => {
    
      const res=await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data=await res.json()
    const headlines=data.data
    return (
        <div className=' bg-red-600 my-5'>
        <div className='max-w-7xl mx-auto flex items-center text-white bg-red-600'>
        <h2 className=' bg-red-700 p-3 '>সর্বশেষ</h2>
         <MarqueeText 
         direction="right"
         duration={25}
         >
            
      {
      headlines.map((head:IHead)=><div key={head.id}><Link href={`/article/${head.id}`}><span>{head.title}</span></Link> <span className='mx-5'>•</span></div>)
      }
    </MarqueeText>
    </div>
    </div>
    );
};

export default MarqueeSetup;