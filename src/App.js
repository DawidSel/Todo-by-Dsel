import lReact,{useState} from 'react';
import './App.css';

function App() {
const [list, setListItem] = useState([]);
const [text,setText] = useState('');

const add = () =>{

  setListItem(prev => [text,...prev])
    setText('');
  
};



const setTextAction=(event)=>{
  const value = event.target.value;
  setText(value);
};

const removeItem=()=>{

}

console.log({text,list});

  return (
    <div className="main">
      
      <div className="header">
      <h1>TODO LIST</h1>
     <input name="name" value={text} onChange={setTextAction}/>
     <button onClick={add} className="Button">Dodaj</button>
     </div>
     
     <div>
          <ul>
{
list.map((el,index)=><li key={index} onClick={removeItem}>{el}</li>
)

}

          </ul>

     </div>
     
    </div>
  );
}

export default App;
