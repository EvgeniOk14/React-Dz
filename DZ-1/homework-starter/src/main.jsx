import ReactDOM from 'react-dom/client';
import {CardList} from "./CardList.jsx";
import {Card} from "./Card.jsx";
import { products } from './products';
import './main.css';
import React from "react";

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<CardList />);




