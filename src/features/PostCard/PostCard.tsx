import React from 'react';
import { Post } from './postsSlice';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';
import ShareButton from '../ShareButton/ShareBtn';
import { Link } from 'react-router-dom';
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div 
      className="flex flex-col md:flex-row p-4 bg-white rounded-lg shadow-md mb-4 w-full max-w-xl mx-auto dark:bg-gray-800 dark:text-white">

      {/* Post Content */}
      <div className="flex-grow p-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{post.subreddit}</span>
          <span className="mx-2">•</span>
          <span>Posted by u/{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.created * 1000).toLocaleDateString()}</span>
        </div>
        <h3 className="text-[] font-bold mb-2">{post.title}</h3>

        {post.is_video ? (
          <div className="mb-2 max-h-64 overflow-hidden">
            <video controls className="w-full rounded-md max-h-64">
              <source src={post.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' && post.thumbnail !== 'nsfw' ? (
          <div className="mb-2 max-h-64 overflow-hidden">
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full rounded-md object-cover max-h-64" 
              loading="lazy" 
            />
          </div>
        ) : null}

        {/* Foot Section */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 gap-2">
          <FaCommentAlt className="mr-1" />
          <span>{post.num_comments} comments</span>
          <div className="flex gap-2 items-center justify-center p-2 rounded-t-md md:rounded-l-md md:rounded-tr-none md:rounded-br-none">
            <button className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500">
                <FaArrowDown />
            </button>
            <span className="my-2 font-bold text-gray-600 dark:text-gray-400">{post.score}</span>
            <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500">
                <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Read More */}
        <div className='flex items-center justify-between'>
          <Link to={post.url} rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Read more
          </Link>
          <ShareButton urlToCopy={post.url} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
