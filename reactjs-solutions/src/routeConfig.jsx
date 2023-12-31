// Routes import
import App from "./App.jsx";
import Counter from "./modules/1-counter";
import Accordion from "./modules/2-accordion";
import Timer from "./modules/3-timer";
import CountdownTimer from "./modules/4-countdown-timer";
import MortgageCalculator from "./modules/5-mortgage-calculator";
import TodoList from "./modules/6-todo-list";
import TickTackToe from "./modules/7-tick-tack-toe";
import StarRating from "./modules/8-star-rating";

export const routeList = [
  {
    id: 0,
    path: "/",
    title: "Home",
    description: "",
    element: <App />,
    difficulty: "easy",
    timeEstimate: "45 Minutes",
  },
  {
    id: 1,
    path: "/01-counter",
    title: "Counter",
    description: "",
    element: <Counter />,
    difficulty: "easy",
    timeEstimate: "45 Minutes",
  },
  {
    id: 2,
    path: "/02-accordion",
    title: "Accordion",
    description: "Create a re-usable 'Frequently Asked Questions' component",
    element: <Accordion />,
    difficulty: "easy",
    timeEstimate: "45 Minutes",
  },
  {
    id: 3,
    path: "/02-timer",
    title: "Timer",
    description: "",
    element: <Timer />,
    difficulty: "medium",
    timeEstimate: "60 Minutes",
  },
  {
    id: 4,
    path: "/02-countdown-timer",
    title: "Countdown Timer",
    description: "Create a countdown timer that notifies the user",
    element: <CountdownTimer />,
    difficulty: "medium",
    timeEstimate: "60 Minutes",
  },
  {
    id: 5,
    path: "/05/mortgage-calculator",
    title: "Mortgage Calculator",
    description:
      "Create a calculator that accepts three inputs and calculates your monthly mortgage payment.",
    element: <MortgageCalculator />,
    difficulty: "easy",
    timeEstimate: "45 Minutes",
  },
  {
    id: 6,
    path: "/06/todo-list",
    title: "Todo List",
    description:
      "Create a todo-list that has an input and deletes/adds new todo in the list.",
    element: <TodoList />,
    difficulty: "easy",
    timeEstimate: "45 Minutes",
  },
  {
    id: 7,
    path: "/07/tick-tack-toe",
    title: "Tick Tack Toe",
    description: "Create a Tick Tack Toe game.",
    element: <TickTackToe />,
    difficulty: "medium",
    timeEstimate: "60 Minutes",
  },
  {
    id: 8,
    path: "/07/star-rating",
    title: "Star Rating",
    description:
      "Create a star rating widget that allows users to select a rating value.",
    element: <StarRating />,
    difficulty: "medium",
    timeEstimate: "60 Minutes",
  },
];
