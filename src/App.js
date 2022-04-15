import "./App.css";
import React from "react";

class App extends React.Component {
  ShowSlidingMenu = () => {
    console.log('Clicked');
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const menu = document.querySelector(".menu");

    menu.addEventListener("click", (e) => {
      sidebar.classList.toggle("sidebar-active");
      main.classList.toggle("main-sidebar-active");
      e.currentTarget.classList.toggle("menu-active");
    });
  };
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <ul className="sidebar_nav">
            <li className="sidebar_item active">
              <span className="material-icons-round">space_dashboard</span>
            </li>
            <li className="sidebar_item active">
              <span className="material-icons-round">store</span>
            </li>
            <li className="sidebar_item active">
              <span className="material-icons-round">inbox</span>
            </li>
            <li className="sidebar_item active">
              <span className="material-icons-round">favorite</span>
            </li>
          </ul>
        </div>
        <main className="main">
          <a href="#" className="menu" onClick={this.ShowSlidingMenu}>
            menu
          </a>
          <div className="main_content">
            <h1>MAIN CONTENT</h1>
            <p>SQUISHED PARAGRAPH</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
