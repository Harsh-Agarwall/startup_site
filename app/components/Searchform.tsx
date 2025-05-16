import React from 'react'
import Form from 'next/form'
import Searchformreset from './Searchformreset';
import { Search } from 'lucide-react';

const Searchform = ({query}:{query?:string}) => {
    ;
  return (
    
      <Form action='/' scroll={false} className='search-form'>
         <input name="query" placeholder="Search for startup" 
         defaultValue={query}className='search-input text-black ' />
         <div className='flex gap-2'>
            {query && <Searchformreset/>}
            <button className='search-btn text-white' type="submit">
                
                <Search/>
            </button>
         </div>
      </Form>
    
  )
}

export default Searchform
