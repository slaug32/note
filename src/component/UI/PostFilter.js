import React from 'react'
import Input from './Input'
import Select from './Select'

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <Input value={filter.query}
            onChange={e => setFilter({ ...filter, query: e.target.value })}
            placeholder="поиск" />
         <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            defaultValue="сортировка" options={[
               { value: "title", name: "по описанию" },
               { value: "body", name: "по названию" },
            ]} />
      </div>
   )
}

export default PostFilter
