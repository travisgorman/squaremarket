import React from 'react';
let React = require('react');
import ReactDOM from 'react-dom';
// import Backbone from 'backbone';
// import $ from 'jquery';
import { Router, Route, hashHistory } from 'react-router';
const page = document.getElementById('container')
import CartItem from './components/CartItem';
import Cart from './components/Cart';


/*
I got 11 tests to work, but they are rather trivial.

I am lost and need help. Seriously.

I'm left behind regarding things that no one else seems to struggle with,
and it's a problem that just gets bigger every single day.

The things you see missing in my apps, are not due to laziness, forgetfulness, etc...

Im confused about routers, confused about how components and models communicate with eachother...

I need one-on-one help that probably goes beyond a quick question.
If I can't get that help from you, then I need you or Karly to help me get it
somewhere else. There are fundamental concepts I am missing that prevent me from making progress, and its not okay. I need to take care of this ASAP.

*/

ReactDOM.render(<Cart/>, page);
