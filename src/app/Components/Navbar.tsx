import Link from "next/link"
import MarqueeSetup from "./MarqueeSetup"

interface ICat {
  slug: string
  title: string
  topicId: null|string
  url: string
  scrapable: boolean
}


const Navbar = async() => {
    const res=await fetch('https://news-api-v2.vercel.app/api/categories')
    const data=await res.json()
    const categories=data.data
    const selCategories=categories.filter((sel:ICat)=>sel.scrapable)
    
    return (
        <div className="">
        <div className="max-w-7xl mx-auto flex gap-2 justify-center">
            <Link href='/'>হোম</Link>
            {
          selCategories.map((cat:ICat,index:number)=><Link href={`/category/${cat.slug}`} key={index} >{cat.title}</Link>)
            }
        </div>
      
        <MarqueeSetup></MarqueeSetup>
        </div>
    );
};

export default Navbar;