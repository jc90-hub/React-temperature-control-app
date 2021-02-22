import{useState} from 'react'
const App = () =>{
  const[temp, setTemp] = useState(13)
  const [tempColor, setTempColor] = useState("cold")

  const increase = ()=>{ 
    if(temp === 30) return   
    const newTemp = temp+1;
    setTemp(temp+1);

    if(newTemp > 16){
      setTempColor("hot")
    }
  }
  
  const decrease = ()=>{
    if (temp === 10) return
    const newTemp = temp-1;
    setTemp(temp-1)

    if(newTemp <= 16){
      setTempColor("cold")
    }
  }  
  
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
      </div>
      <div className="button-container">        
        <button onMouseDown = {()=>decrease()}>-</button>
        <button onMouseDown = {()=>increase()}>+</button>
      </div>      
    </div>
  )
}

export default App;