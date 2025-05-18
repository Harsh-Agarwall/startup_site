import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = 
defineQuery(`*[_type=="startup" && defined(slug.current)&& !defined($search) || author->name match $search || title match $search || category match $search  ] | order(_createdAt desc)  {
  _id,
    title,
    slug,
    _createdAt,
    author->{
      _id,name,image,bio
    },
    pitch,
    views,
    description,
    image,
    category
    
}`);