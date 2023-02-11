import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

function App() {
  const [list, setList] = useState(null);
  useEffect(() => {
    axios.get("/search?query=react")
      .then((Response) => {
        setList(Response.data.hits);
      });
    
  }, [] );
  console.log(list);
  if (!list) {
    return <div>loading</div>
  }
  return (
    <div className="App">
      <form onSubmit={(event) => {
        // event.target.elements[0].value;
        // /serch?guery=Google&size=10
        // /serch?guery=Google&size=10&page=3
        event.preventDefault();
        const value = event.target.elements[0].value;
        axios.get("/search?query=" + value)
      .then((Response) => {
        setList(Response.data.hits);
      });
      }}>
        <input> 
          
        </input>
          <button>Submit</button>
      </form>
      <ol>
        {list.map((item) => {
          return <li>{
          item.title
          }</li>;
        })}
      </ol>
    </div>
  );
}

export default App;

