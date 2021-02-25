import React, {useState} from "react"

export default function Footer() {
  const [poem, setPoem] = useState('');

  function handleClickPoemLink(e) {
    console.log("POEM CLICK");
    setPoem('lalal');
  } 

  return <div className='footer d-flex justify-content-between'>
    <span>Mitchell Manar &copy; 2021</span>
    <div id="poem">{poem}</div>
    <button onClick={handleClickPoemLink}>Time for a poem?</button>
  </div>
}
