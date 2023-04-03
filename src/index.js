import { createHomepage } from "./homepage";
import { createMenupage } from "./menupage";
import { createContactpage } from "./contactpage";
import './style.css';

console.log( 'Hello there!' );

const content = document.querySelector( '#content' );
const homeBtn = document.querySelector( '.homeBtn' )
const menuBtn = document.querySelector( '.menuBtn' )
const contactBtn = document.querySelector( '.contactBtn' )

homeBtn.addEventListener( 'click', () => {
  createHomepage();
})

menuBtn.addEventListener( 'click', () => {
  createMenupage();
})

contactBtn.addEventListener( 'click', () => {
  createContactpage();
})
