import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      {!user ? (
        <Login />
      ) :
        (
          <>
            <div className="app_h">
              <Header />
            </div>
            <div className="app_post">
              <div className="app_body">
                <Sidebar />
              </div>
              <div className="app_feed">
                <Feed />
              </div>

            </div>


          </>

        )}






    </div >
  );
}

export default App;
