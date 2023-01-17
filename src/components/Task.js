import React,{useState} from "react";


function Task({text,category}) {

  console.log(text)
  
  const [data, setData] = ([text])
  const [info ,setInfo] = useState('task')
  function handleClick(e){
if(text === data){
  console.log('equal')
}
    if(info==='task'){
      setInfo('remove')
    }
  }
  
  return (
    <div className={info}>
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
