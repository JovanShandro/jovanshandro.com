import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Movie Search",
    description: `My very first project built using vue.js. It is a simple app that allows you to search for a movie and displays all results in the screen. For each movie, a more detailed description is possible upon clicking the 'Read More' button.`,
    githubLink: "https://github.com/JovanShandro/Movies",
    websiteLink: "https://pedantic-yonath-25eaa1.netlify.com/",
    backgroundColor: "rgb(5, 53, 53)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(97, 150, 150)",
    hoverLinkColor: "rgb(145, 189, 189)",
    backgroundImage: 'url("/img/movies.webp")'
  },
  {
    title: "The Blockchain ToDo",
    description:
      "An app to keep track of your tasks. All the tasks are stored in the ethereum blockchain. The supported networks are Kovan, Rinkeby, Ropsten, Goerli testnets. There is no contract yet in the main net. Make sure to have the Metamask extension when entering.",
    githubLink: "https://github.com/JovanShandro/ToDo-Dapp",
    websiteLink: "https://silly-varahamihira-bc2a4d.netlify.com/",
    backgroundColor: "rgba(56, 11, 18, 0.767)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(207, 117, 129)",
    hoverLinkColor: "rgb(219, 157, 166)",
    backgroundImage: 'url("/img/todo.webp")'
  },
  {
    title: "Pathfinding Visualiser",
    description:
      "A nice and easy way to see how different pathfinding algorithms work by pilaying with a customizable board and cool animations. It includes Dijkstra, A*, BFS, and Greedy Best First Search. You can also add weights when performing Dijkstra.",
    githubLink:
      "https://github.com/JovanShandro/Pathfinding-algorithm-visualizer",
    websiteLink: "https://blissful-shirley-0a890a.netlify.com/",
    backgroundColor: "rgb(41, 36, 41)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(146, 140, 145)",
    hoverLinkColor: "rgb(192, 189, 191)",
    backgroundImage: 'url("/img/pathCrop.webp")'
  },
  {
    title: "Sorting Visualiser",
    description:
      "A nice and easy way to see how different sorting algorithms work by visualizing the sorting of an array of 100 random numbers. It includes Merge, Quick, Heap, Selection, Counting, Insertion, Radix, and Bubble sort.",
    githubLink: "https://github.com/JovanShandro/Sorting-algorithm-visualizer",
    websiteLink: "https://stupefied-mahavira-9e156e.netlify.com/",
    backgroundColor: "rgb(46, 10, 43)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(192, 139, 188)",
    hoverLinkColor: "rgb(214, 174, 211)",
    backgroundImage: 'url("/img/sort.webp")'
  },
  {
    title: "Blog App",
    description:
      "My first app built using React Native expo. It uses Firebase for authenticating users via email and password, and also stores their data in a real-time database. Since when this video was made, I have updated the ui and fixed all warnings and issues.",
    githubLink: "https://github.com/JovanShandro/React-Native-Blog-App",
    backgroundColor: "rgb(22, 22, 22)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(148, 151, 151)",
    hoverLinkColor: "rgb(200, 202, 202)",
    backgroundImage: 'url("/img/blog.webp")',
    videoId: "blog"
  },
  {
    title: "Sudoku Solver",
    description:
      "My first project using typescript. Built with React.js, the project allows you to write your own sudoku by typing the values or importing a text file. Then it solves it for you if a solution exists. Some nice animations are present to make the experience more enjoyable.",
    githubLink: "https://github.com/JovanShandro/Sudoku-Solver",
    websiteLink: "https://focused-villani-6bab24.netlify.com/",
    backgroundColor: "rgb(90, 11, 70)",
    paragraphColor: "rgb(230, 222, 222)",
    linkColor: "rgb(184, 124, 169)",
    hoverLinkColor: "rgb(233, 187, 227)",
    backgroundImage: 'url("/img/sudoku.webp")'
  },
  {
    title: "Agri Balkanika",
    description:
      "The first project I developed for a real client. The website was built for an agricultural company and the technology stack includes but is not limited to React.js, Sass etc. The content of the page can be found in three different languages.",
    websiteLink: "https://www.agribalkanika.al/",
    backgroundColor: "rgb(3, 44, 12)",
    paragraphColor: "rgb(230, 222, 222)",
    linkColor: "rgb(84, 148, 98)",
    hoverLinkColor: "rgb(174, 255, 167)",
    backgroundImage: 'url("/img/agribalkanika.webp")'
  },
  {
    title: "Sorting Visualiser App",
    description:
      "A Sorting Algorithms Visualizer built with React Native and Typescipt. Supports the following algorithms: Merge Sort, Insertion Sort, Heap Sort, Quick Sort, Bubble Sort, and Selection Sort. For each of them some details are shown.",
    githubLink: "https://github.com/JovanShandro/SortingVisualizerExpo",
    backgroundColor: "rgb(10, 50, 60)",
    paragraphColor: "rgb(194, 188, 188)",
    linkColor: "rgb(105, 137, 138)",
    hoverLinkColor: "rgb(165, 190, 190)",
    backgroundImage: 'url("/img/sortRN.webp")',
    videoId: "sorting"
  }
];
