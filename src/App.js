import { BrowserRouter,Switch,Route, Link  } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Culture from './components/Culture/Culture';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/friend/:friendId'>
           <FriendDetails></FriendDetails>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route exact path='/about'>
           <About></About>
         </Route>
         <Route exact path='/about/culture'>
           <Culture></Culture>
         </Route>
        <Route path='/friends'>
          <Friends></Friends>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;