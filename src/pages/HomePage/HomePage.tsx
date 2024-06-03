import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store.ts';
import { RootState } from "../../store.ts";
import { fetchPosts } from '../../features/posts/postsSlice';
import './HomePage.css';
import PostCard from '../../features/PostCard/PostCard';
import NavBar from '../../features/NavBar/NavBar';

const HomePage: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts.posts);
  const postStatus = useAppSelector((state: RootState) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts('all'));
    }
  }, [postStatus, dispatch]);

  return (
    <div className="home-page">
      <NavBar />

      {postStatus === 'loading' && <p>Loading...</p>}
      {postStatus === 'succeeded' && (
        <div className="post-list flex flex-col">
          {posts.map((post) => (
            <PostCard post = {post} />
          ))}
        </div>
      )}
      {postStatus === 'failed' && <p>Error fetching posts</p>}
    </div>
  );
};

export default HomePage;
