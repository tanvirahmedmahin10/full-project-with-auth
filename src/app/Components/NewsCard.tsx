import React from 'react';
import { INews } from './MainNewsCard';
import Image from 'next/image';


const NewsCard = ({nc}:{nc:INews}) => {
    return (
           <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              src={nc.imageUrl}
              alt={nc.imageAlt} 
              width={400}
              height={400}
              />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{nc.title}</h2>
            <p>{nc.description}</p>
           
          </div>
        </div>
    );
};

export default NewsCard;