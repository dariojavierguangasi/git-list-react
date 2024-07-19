import logo from './logo.svg';
import './App.css';
import User from './user';

function Header({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

function App() {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <div className="App">
      <Header 
      >
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
        </Header>
      <User 
        name = "Dario Guangasi"
        avatar = "https://i.pinimg.com/originals/1c/57/93/1c57937487a39b7e84cdba3fe054eeeb.png"
      />

      <form action='' onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="submit" value="Submit" />
      </form>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi there!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
