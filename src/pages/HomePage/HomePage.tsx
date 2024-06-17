import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { RootState } from "../../store/store.ts";
import { fetchPosts } from '../../features/PostCard/postsSlice.ts';
import './HomePage.css';
import PostCard from '../../features/PostCard/PostCard';
import NavBar from '../../features/NavBar/NavBar';

const HomePage: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.posts.posts);
  const postStatus = useAppSelector((state: RootState) => state.posts.status);
  const postFetchStatus = "flex justify-center items-center text-2xl font-bold capitalize";
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts('all'));
    }
  }, [postStatus, dispatch]);

  return (
    <div className="home-page">
      <NavBar />

      {postStatus === 'loading' && <h2 className={`${postFetchStatus}`}>Loading...</h2>}
      {postStatus === 'succeeded' && (
        <div className="post-list flex flex-col">
          {posts.map((post) => (
            <PostCard post = {post} />
          ))}
        </div>
      )}
      {postStatus === 'failed' && <h2 className={`${postFetchStatus}`}>Error fetching posts</h2>}
    </div>
  );
};

export default HomePage;
