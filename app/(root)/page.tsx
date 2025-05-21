import Image from "next/image";
import Searchform from "../components/Searchform";
import StartupCard, { StartupTypeCard } from "../components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { sanityFetch ,SanityLive} from "@/sanity/lib/live";
import { auth } from "@/auth";
export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
   const query=(await searchParams).query;
   const params={search:query||null};

  const session =await auth();
  console.log(session?.id);

   const {data:posts}= await sanityFetch({query:STARTUPS_QUERY,params});

  // const posts=[
  //     {
  //       _createAt:new Date(),
  //       views:55,
  //       author:{_id:1,name:"Harsh"},
  //       _id:1,
  //       description:"this is a description",
  //       image:"https://placehold.co/600x400",
  //       category:"robot",
  //       title:"we robot",
  //     },
  //       {
  //       _createAt:new Date(),
  //       views:55,
  //       author:{_id:1,name:"Harsh"},
  //       _id:4,
  //       description:"this is a description",
  //       image:"https://placehold.co/600x400",
  //       category:"robot",
  //       title:"we robot",
  //     }, {
  //       _createAt:new Date(),
  //       views:55,
  //       author:{_id:1,name:"Harsh"},
  //       _id:2,
  //       description:"this is a description",
  //       image:"https://placehold.co/600x400",
  //       category:"robot",
  //       title:"we robot",
  //     }, {
  //       _createAt:new Date(),
  //       views:55,
  //       author:{_id:1,name:"Harsh"},
  //       _id:3,
  //       description:"this is a description",
  //       image:"https://placehold.co/600x400",
  //       category:"robot",
  //       title:"we robot",
  //     },
  //   ];
  return (
    
   <>
   <section className="pink_container pattern ">

   <h1 className="heading rounded-3xl">Shape Your Startup,<br/>Get recognized</h1>
   <p className="sub-heading !max-w-3xl !font-sans">Submit your ideas,Vote ideas,get noticed in Virtual Competitions</p>
   <Searchform query={query}/>
   </section>
   <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"`:"All startups"}

    </p>
    <ul className="mt-7 card_grid">
      {posts?.length>0?(
        posts.map((post:StartupTypeCard,index:number)=>(
          <StartupCard key={post?._id} post={post}/>
        ))
      ):(<p className="no-results">No startups Found </p>)}

    </ul>
   </section>
   <SanityLive/>
   </>
  );
}
