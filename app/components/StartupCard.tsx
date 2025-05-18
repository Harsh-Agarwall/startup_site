import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Author ,Startup} from '@/sanity/types'
// import { Button } from "@/components/ui/button";
export type StartupTypeCard= Omit<Startup,"author"> & {author?:Author};

const StartupCard = ({post}:{post:StartupTypeCard}) => {
  // const { _createAt ,views, author:{}, _id, title, description, image, category } =post;
  return (
     <li className="startup-card !shadow-sm group">
      <div className="flex-between">
        <p className="startup_card_date text-black">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-black" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1 !font-sans">{post.author?.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-semibold line-clamp-1 !font-sans !font-bold" >{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={post.author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup-card_desc !font-mono">{post.description}</p>

        <img src={post.image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${post.category?.toLowerCase()}`}>
          <p className="text-16-medium !font-sans !font-weight-100">{post.category}</p>
        </Link>
         <button className="startup-card_btn" >
          <Link href={`/startup/${post._id}`}>Details</Link>
        </button>
       
      </div>
    </li>
  )
}

export default StartupCard
