import { useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [items, setItems] = useState([])

  const [query, SetQuery] = useState("")
  const inputRef = useRef()
  
  
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
  })
}, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
    return [...prev, value]
    })
  
    inputRef.current.value = ""
  }
  

  
  return (
    <>
      Search
      <input value={query} onChange={e => SetQuery(e.target.value)} type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  )

}

export default App;
