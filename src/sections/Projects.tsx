import React from "react";

const ProjectsSection = () => {
  return (
    <div className="wrapper work" id="work">
      <h1>Projects</h1>
      <div className="category-projects">
        <div className="card-wrapper">
          <div className="card7">
            <div className="card7-image"></div>
            <div className="card7-text">
              <h2>Agri Balkanika</h2>
              <p>
                The first project I developed for a real client. The website was
                built for an agricultural company and the technology stack
                includes but is not limited to React.js, Sass etc. The content
                of the page can be found in three different languages.
              </p>
            </div>
            <div className="card7-btns">
              <a href="https://www.agribalkanika.al/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card6">
            <div className="card6-image"></div>
            <div className="card6-text">
              <h2>Sudoku Solver</h2>
              <p>
                My first project using typescript. Build with React.js, the
                project allows you to write your own sudoku by typing the values
                or importing a text file. Then it solves it for you if a
                solution exists. Some nice animations are present to make the
                experience more enjoyable.
              </p>
            </div>
            <div className="card6-btns">
              <a href="https://github.com/JovanShandro/Sudoku-Solver">
                <i className="macka fab fa-github"></i>
              </a>
              <a href="https://focused-villani-6bab24.netlify.com/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card1">
            <div className="card1-image"></div>
            <div className="card1-text">
              <h2>Blog App</h2>
              <p>
                My very first app/project built using React Native with expo.
                The app uses Firebase for authenticating users via email and
                password, and also stores the data for each user in a real-time
                database. For each blog a title, image, and description is
                stored.
              </p>
            </div>
            <div className="card1-btns">
              <a href="https://github.com/JovanShandro/React-Native-Blog-App">
                <i className="macka fab fa-github"></i>
              </a>
              <i
                onClick={() => "showVideo()"}
                className="plane fas fa-film"
              ></i>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card2">
            <div className="card2-image"></div>
            <div className="card2-text">
              <h2>Sorting Visualiser</h2>
              <p>
                A nice and easy way to see how different sorting algorithms work
                by visualizing the sorting of an array of 100 random numbers. It
                includes Merge, Quick, Heap, Selection, Counting, Insertion,
                Radix, and Bubble sort.
              </p>
            </div>
            <div className="card2-btns">
              <a href="https://github.com/JovanShandro/Sorting-algorithm-visualizer">
                <i className="macka fab fa-github"></i>
              </a>
              <a href="https://stupefied-mahavira-9e156e.netlify.com/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card3">
            <div className="card3-image"></div>
            <div className="card3-text">
              <h2>Pathfinding Visualiser</h2>
              <p>
                A nice and easy way to see how different pathfinding algorithms
                work by pilaying with a customizable board and cool animations.
                It includes Dijkstra, A*, BFS, and Greedy Best First Search. You
                can also add weights when performing Dijkstra.
              </p>
            </div>
            <div className="card3-btns">
              <a href="https://github.com/JovanShandro/Pathfinding-algorithm-visualizer">
                <i className="macka fab fa-github"></i>
              </a>
              <a href="https://blissful-shirley-0a890a.netlify.com/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card4">
            <div className="card4-image"></div>
            <div className="card4-text">
              <h2>The Blockchain ToDo</h2>
              <p>
                An app to keep track of your tasks. All the tasks are stored in
                the ethereum blockchain. The supported networks are Kovan,
                Rinkeby, Ropsten, Goerli testnets. There is no contract yet in
                the main net. Make sure to have the Metamask extension when
                entering.
              </p>
            </div>
            <div className="card4-btns">
              <a href="https://github.com/JovanShandro/ToDo-Dapp">
                <i className="macka fab fa-github"></i>
              </a>
              <a href="https://silly-varahamihira-bc2a4d.netlify.com/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card5">
            <div className="card5-image"></div>
            <div className="card5-text">
              <h2>Movie Search</h2>
              <p>
                My very first project built using vue.js. It is a simple app
                that allows you to search for a movie and displays all results
                in the screen. For each movie, a more detailed description is
                possible upon clicking the 'Read More' button.
              </p>
            </div>
            <div className="card5-btns">
              <a href="https://github.com/JovanShandro/Movies">
                <i className="macka fab fa-github"></i>
              </a>
              <a href="https://pedantic-yonath-25eaa1.netlify.com/">
                <i className="plane fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
