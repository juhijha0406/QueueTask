import React,{useState,useEffect} from 'react'
import Table from './Table';
import Grid from './Grid';

function App() {

  const [file,setFile] = useState([]);
  const [file1,setFile1] = useState([]);
  const [combinedJson,setCombinedJson] = useState([]);
  const[buttonState,SetButtonState]  = useState(false);


  useEffect(() => {
    fetch('https://queuebuster.co/static/sample.json')
    .then((data) => {
    return data.json();
    }).then((json) => {
        console.log(json);
        setFile(apidata => json);
    })
	fetch('https://queuebuster.co/static/sample1.json')
      .then((data) => {
      return data.json();
      }).then((json) => {
          console.log(json);
          setFile1(apidata => json);
      })
  }, [])
  

  useEffect(() => {
    if(file.length > 0 && file1.length >0 )
    {
      setCombinedJson((combinedJson)=> [...file, ...file1]) 
    console.log(combinedJson);
    }
    console.log("abcddgg")
   

   
}, [file,file1])



//  Promise.all([
//    fetch('https://queuebuster.co/static/sample1.json').then(value => value.json()),
//    fetch('https://queuebuster.co/static/sample.json').then(value => value.json()),
// ])
// .then((value)=>{
//    console.log(value)
//  })
//  .catch((err)=>{
//    console.log(err);
//  });
 

//  const chnageState=()=>{
//     SetButtonState(true)
//  };

// const  chnageState2=()=>{
//   SetButtonState(false)
//  }


      

  return (
    <div className="table_contain">
      {/* two buttons */} 

      <button
        onClick={() => {
          SetButtonState(true);
        }}
      >
        Click2
      </button>
      <button
        onClick={() => {
          SetButtonState(false );
        }}
      >
        click1
      </button>

         

         { buttonState  ?
         
         
           (<Table combinedJson/>
           
        ) : 
         (<Grid/> )
          }

      
    </div>
  );
}

export default App;
