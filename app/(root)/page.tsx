import Image from "next/image";
import Searchform from "../components/Searchform";
import StartupCard from "../components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {const query=(await searchParams).query

  const posts=[
      {
        _createAt:new Date(),
        views:55,
        author:{_id:1},
        _id:1,
        description:"this is a description",
        image:"https://images.unsplash.com/photo-1696140986791-4f2a0b5c3d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category:"robot",
        title:"we robot",
      },
       
    ];
  return (
    
   <>
   <section className="pink_container pattern ">

   <h1 className="heading rounded-3xl">Pitch Your Startup,<br/>Connect with investors</h1>
   <p className="sub-heading !max-w-3xl">Submit your ideas,Vote ideas,get noticed in Virtual Competitions</p>
   <Searchform query={query}/>
   </section>
   <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"`:"All startups"}

    </p>
    <ul className="mt-7 card_grid">
      {posts?.length>0?(
        posts.map((post:StartupCardType,index:number)=>(
          <StartupCard key={post?._id} post={post}/>
        ))
      ):(<p className="no-results">No startups Found </p>)}

    </ul>
   </section>
   </>
  );
}
