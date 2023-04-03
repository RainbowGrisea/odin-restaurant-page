export function createMenupage() {

  const pageContent = document.createElement('div')
  const title = document.createElement( 'h1' );
  const menu = document.createElement( 'ul' ); 
  const meals = [ 'Vegetable soup', 'Beef broth', 'Spaghetti carbonara', 'Lasagne', 'Carrot cake' ]
  
  title.innerHTML = 'Menu'

  for ( let i = 0; i < meals.length; i++ ) {
    const dish = document.createElement( 'li' );
    dish.innerHTML = meals[i];
    menu.appendChild( dish );
  }

  pageContent.appendChild( title );
  pageContent.appendChild( menu );

  content.innerHTML = '';
  content.appendChild(pageContent);  
}