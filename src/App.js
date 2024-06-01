import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import Post from './features/posts/Post';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightBar from './components/RightBar';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div >
      <Navbar />
      <MobileNav />
    {/* <Counter/> */}
    <Sidebar />
    <RightBar />
    <Post />

    
    </div>
  );
}

export default App;
