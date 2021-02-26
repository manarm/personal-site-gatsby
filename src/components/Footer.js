import React, {useState, useEffect} from "react"

export default function Footer() {
  const [poem, setPoem] = useState('The poem you seek\nCannot be located, but\nCountless more exist.');
  const [displayPoem, setDisplayPoem] = useState(false);

  useEffect(() => {
    fetch('https://poetrydb.org/random')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const poemObj = data[0];
        const poemLines = [
          poemObj.title,
          'by ' + poemObj.author,
          ' ',
          ...poemObj.lines
        ]
        setPoem(poemLines.join('\n'));
      }
    })
    .catch(error => {
      console.log(error);
    });
  }, [])


  return <div className='footer d-flex flex-wrap flex-md-nowrap align-items-start justify-content-between'>
    <span class="order-1">Mitchell Manar &copy; 2021</span>
    <div id="poem" className="order-3 order-md-2">{displayPoem && poem}</div>
    <button className="order-2 order-md-3" onClick={() => {setDisplayPoem(!displayPoem)}}>Time for a poem?</button>
  </div>
}
