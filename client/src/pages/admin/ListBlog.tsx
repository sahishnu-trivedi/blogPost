import React, { useEffect, useState } from 'react'

import {blog_data} from "../../assets/assets"
import BlogTableItem from './BlogTableItem';

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = () => {
    setBlogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h2>All Blogs</h2>
        <div className='relative max-w-4xl mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th className='px-2 py-4 xl:px-6'>#</th>
                <th className='px-2 py-4'>Blog Title</th>
                <th className='px-2 py-4 max-sm:hidden'>Date</th>
                <th className='px-2 py-4 max-sm:hidden'>Status</th>
                <th className='px-2 py-4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ListBlog
