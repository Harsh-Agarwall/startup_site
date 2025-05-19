import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import markdownit from "markdown-it";
const md= markdownit();
export const experimental_ppr=true;

 
const page = async({params}:{params :Promise<{id:string}>}) => {
    const id=(await params).id;
    const post= await client.fetch(STARTUP_BY_ID_QUERY,{id});
    if(!post) return notFound();
    const parsedcontent=md.render(post?.pitch || "");
  return (


    
    <>
   <section className='pink_container !min-h-[230px]'>
    <p className='tag tag-tri'>{formatDate(post?._createdAt)}</p>
<h1 className='heading'>
    {post.title}
</h1>
<p className='sub-heading !max-w-5xl'>{post.description}</p>
   </section>

   <section className='section_container'>
    <img src={post.image} alt="image" className='w-full h-auto rounded-xl'/>

    <div className="space-y-5 mt-10 max-w-4xl mx-auto">
        <div className='flex-between gap-5'>
            <Link href={`/user/${post.author?._id}`} className="flex gap-2 items-centre mb-3">
               <Image src={post.author.image} alt="avatar" width={64} height={64} className="rounded-full drop-shadow-lg"/>
               <div>
                <p className="text-20-medium">{post.author.name} </p>
                <p className="text-16-medium !text-black">@{post.author.username} </p>
               </div>
            </Link>

            <p className='category-tag'>{post.category}</p>

        </div>
        <h3 className='text-30-bold'>Pitch Details</h3>
        {parsedcontent ? (
            <article
            className="custom-richtext max-w-4xl break-all"
              dangerouslySetInnerHTML={{__html:parsedcontent}}   />
        ):(
            <p className='no-result'> No Details Provided</p>
        )
        }
    </div>
    <hr className='divider'/>

   </section>
    </>
  )
}

export default page
