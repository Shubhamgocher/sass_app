import Image from 'next/image'
import React from 'react'
import bookmark from '../public/icons/bookmark.svg'
import clock from '../public/icons/clock.svg'
import Link from 'next/link'
interface CompanionProps {
  id:string,
  name:string,
  topic:string,
  subject:string,
  duration:String,
  color:string,
}
const CompanionsCard = ({id,name,topic,subject,duration,color}:CompanionProps) => {
  return (
    <article className='companion-card' style={{backgroundColor:color}}>
        <div className='flex justify-between items-center'>
          <div className='subject-badge'>{subject}</div>
          <button className='companion-bookmark'>
            <Image src={bookmark} alt='bookmark' width={12.5} height={16}/>
          </button>

        </div>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-sm'>Topic:{topic}</p>
        <div className='flex items-center gap-2'>
          <Image src={clock} alt='duration' width={13.5} height={13.5}/>
          <p>{duration} minutes</p>
        </div>
        <Link href={`/companions/${id}`} className='w-full'>
         <button className='btn-primary w-full flex justify-center'>
          Lounch lesson
         </button>
        </Link>
    </article>
  )
}

export default CompanionsCard
