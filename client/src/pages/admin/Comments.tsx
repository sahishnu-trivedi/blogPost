import React, { useEffect, useState } from 'react'
import {comments_data} from "../../assets/assets"
import CommentTableItem from './CommentTableItem';

const Comments = () => {

  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  const fetchComments = () => {
    setComments(comments_data)
  }

  useEffect(() => {
    fetchComments()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h2>Comments</h2>
        <div className='flex gap-4'>
          <button onClick={() => setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>
          <button onClick={() => setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
        </div>
      </div>
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
            {comments.filter((comment) => {
              if(filter === 'Approved') return comment.isApproved;
              return comment.isApproved === false;
            }).map((comment) => (
              <CommentTableItem key={comment._id} comment={comment} fetchComments={fetchComments} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
