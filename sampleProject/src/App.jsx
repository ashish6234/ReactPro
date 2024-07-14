import './App.css'

function App() {
  let counter = 2

  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter + 1
  }
  return (
    <>
      <h1>Type Something</h1>
      
      <h2>Counter number: {counter}</h2>

      <button onClick={addValue}>
        Add value
      </button>
      <br />
      <button>

        Remove
      </button>
    </>
  )
}

export default App
