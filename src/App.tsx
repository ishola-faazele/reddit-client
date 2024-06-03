import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import PostPage from './pages/PostPage/PostPage.tsx';
import SubredditPage from './pages/SubRedditsPage/SubRedditPage.tsx';

// Define your routes
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} >
      <Route path="post/:id" element={<PostPage />} />
      <Route path="r/:subreddit" element={<SubredditPage />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <div  className='App '>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
