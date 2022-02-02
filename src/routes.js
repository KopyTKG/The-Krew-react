import About from "./views/about.js";
import Index from "./views/index.js";
import Join from "./views/join.js";

import {
  CalendarIcon,
  ChartPieIcon,
  EmojiHappyIcon,
  BellIcon,
  UserIcon,
  PuzzleIcon,
  AdjustmentsIcon,
  BookmarkIcon
} from '@heroicons/react/outline';

const width = 30;



const Calendar = () => {
  return(
    <CalendarIcon style={{width: width}}/>
  );
}
const ChartPie = () => {
  return(
    <ChartPieIcon style={{width: width}}/>
);
}
const EmojiHappy = () => {
  return(
    <EmojiHappyIcon style={{width: width}}/>
);
}
const Bell = () => {
  return(
    <BellIcon style={{width: width}}/>
);
}
const User = () => {
  return(
    <UserIcon style={{width: width}}/>
);
}
const Puzzle = () => {
  return(
    <PuzzleIcon style={{width: width}}/>
);
}
const Adjustments = () => {
  return(
    <AdjustmentsIcon style={{width: width}}/>
);
}
const BookMark = () => {
  return(
    <BookmarkIcon style={{width: width}}/>
);
}

var routes = [
  // User layout
  {
    path: "/home",
    name: "Home",
    icon: ChartPie,
    component: Index,
    layout: "/default",
  },
  {
    path: "/about",
    name: "About",
    icon: Calendar,
    component: About,
    layout: "/default"
  },
  {
    path: "/join",
    name: "Join",
    icon: BookMark,
    component: Join,
    layout: "/default"
  }
];
export default routes;
