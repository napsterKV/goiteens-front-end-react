import { useState } from "react"; 

const Form = () =>  {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
  const hendler =  (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prew) => {
      return {...prew, [name]: value};
    });
  };
  
  console.log(state);

  return <form onSubmit={(event) => {
    event.preventDefault();
    setError(true);
  }}>
    <div>
    <input placeholder="nickname" onChange={hendler} name="nickname"></input>
    {!error || state.nickname ? false : "Введіть значення у поле nickname"}
    </div>
    <div>
    <input placeholder="email" onChange={hendler} name="email"></input>
    {!error || state.email ? false : "Введіть значення у поле email"}
    </div>
    <div>
      <select placeholder="select" onChange={hendler} name="city">
        <option selected="true" disabled="true">Виберіть місто</option>
        <option>Lviv</option>
        <option>Kyiv</option>
    </select>
    {!error || state.city ? false : "Введіть значення у поле city"}
    </div>
    <button>Submit</button> 
  </form>
}

export default Form;
