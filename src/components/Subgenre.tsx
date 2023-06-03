import React from 'react';

interface SubgenreProps {
  name: string;
  description: string;
  linkPlaylist: string;
  colors: {
    background: string;
    title: string;
  };
  bpmRange: {
    min: number;
    max: number;
  };
  artist: string[];
}

export default function Subgenre(props: SubgenreProps) {
  const { name, description, linkPlaylist, colors, bpmRange, artist } = props;
  return (
    <div style={{background: colors.background.toLocaleLowerCase()}} className={`flex  flex-col justify-between h-[1024px] xl:w-[50vw] w-[100vw] p-12`}>
      <div>

        <h3 style={{color: colors.title.toLocaleLowerCase()}} className={`font-bold font-display  text-6xl pb-12`}>{name}</h3>
        <div className='flex justify-between align-middle'>
          <span className={`max-w-md min-h-max`}>{description}</span>
          <div className={`flex flex-col`}>
            <span>BPM range:</span>
            <span className={`font-display text-6xl`}>{bpmRange.min}</span>
            <span className={`font-display text-6xl`}>{bpmRange.max}</span>
          </div>
        </div>
      </div>
      <div className={`flex flex-col justify-center align-middle`}>

        <iframe style={{borderRadius:'12px'}} src={linkPlaylist} width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
        <span className={`font-bold pt-5`}>Notable Artist</span>
        <span>{artist.join(", ")}</span>
      </div>
    </div>
    )
}
