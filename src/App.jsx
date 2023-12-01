
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Admin from './Component/Admin';
import Add from './Component/Add';
import Edit from './Component/Edit';
import View from './Component/View';
import PageNoteFound from './Component/PageNoteFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      {/* localhost:3000  'Admin'*/}
        <Route path='/' element={<Admin/>}/>
         {/* localhost:3000/Add  'Add'*/}
         <Route path='/add' element={<Add/>}/>
         {/* localhost:3000/edit 'Edit'*/}
         <Route path='/edit/:id' element={<Edit/>}/>
         {/* localhost:3000/view 'View'*/}
         <Route path='/view/:id' element={<View/>}/>
         {/* localhost:3000/dnfn 'PageNoteFound'*/}
         <Route path='/*' element={<PageNoteFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
