import { useState } from 'react';
import Accordian from './components/Accordian';
import { apiData } from './api/Api';


function App() {
  
  const [data , setData] = useState(apiData);
  return (
    
    <div className="h-screen w-screen bg-sky-300 flex justify-center items-center">

      <div className="w-fit h-fit bg-slate-200 p-2 rounded-md">

          <ol>
            
            {
                data.map((items , index) => {

                  return <Accordian {...items} />
                })
            }

          </ol>

      </div>

    </div>

  )
}

export default App;
