import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const [logIn, setLogIn] = useState(false);
  const counter = (counter) => {
    setCount(count + counter);
  };

  return (
    <>
      <div>
        {!logIn ? (
          <button
            onClick={() => {
              setLogIn(true);
            }}>
            LOGIN
          </button>
        ) : (
          <div className="dashboard">
            <button
              onClick={() => {
                setLogIn(false);
              }}>
              LOGOUT
            </button>
            <h1 className={`heading ${count < 0 && 'danger'}`}>
              count is: {count}
            </h1>
            {count < 0 && (
              <h2 className="danger">
                WARNING: Must not be a negative number!!
              </h2>
            )}
            <div className="button">
              <button
                onClick={() => {
                  counter(+1);
                }}>
                add
              </button>
              <button
                onClick={() => {
                  counter(-1);
                }}>
                minus
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
