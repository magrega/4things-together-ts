import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import NavAndFooter from '../components/Layout/Layout';
import Counter from './Counter';
import EmojiApp from './EmojiApp/EmojiApp';
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import PostsApp from './PostsApp/PostsApp';
import ToDoApp from './ToDoApp/ToDoApp';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<NavAndFooter />}>
        <Route index element={<Home />} />
        <Route path='counter' element={<Counter />} />
        <Route path='emojilist' element={<EmojiApp/>} />
        <Route path='postsbyusers' element={<PostsApp/>} />
        <Route path='todo' element={<ToDoApp/>} />
        <Route path="*" element={<NotFoundPage />} />
    </Route>
    
))