import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import Post from './features/posts/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />
    {/* <Counter/> */}
    <Post />

    
    </div>
  );
}

export default App;
