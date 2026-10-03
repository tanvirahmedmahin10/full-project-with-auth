import { INews } from '@/app/Components/MainNewsCard';
import NewsCard from '@/app/Components/NewsCard';
import React from 'react';

const page = async ({ params }: {
    params: Promise<{ catID: string }>
}) => {
    const { catID } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${catID}`)
    const data = await res.json()
    const CatData = data.data
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-4 border-b-2 border-red-600 pb-2'>{data.title}</h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    CatData.map((nc:INews)=><NewsCard key={nc.id} nc={nc}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default page;