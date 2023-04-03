import Image from './restaurant.jpg';
export function createHomepage() {
  
  const pageContent = document.createElement('div')
  const title = document.createElement('h1');
  const image = document.createElement('img');
  const description = document.createElement('div');

  title.innerHTML = 'Iris Restaurant';
  image.src = Image;
  description.textContent = 'Our vocation is our hobby, we love new tasks and we find the challenge in everything that moves us forward. The Iris team is waiting for you today! Our staff awaits you every day of the week with our food and drink specials.We prepare our meals according to Halal rules. The rules applied mainly to the processing of meat and then to the production of more and more food. Over the centuries, food has represented and symbolized both religion and politics, so it is no wonder that their production, but even their consumption, is so complicated and woven with traditions and rituals. According to our rules, do not look for pork and alcohol with us, delicious poultry, lamb can be found with us, and of course the perfect lemonades and non-alcoholic cocktails!';

  pageContent.appendChild(title);
  pageContent.appendChild(image);
  pageContent.appendChild(description);
  
  content.innerHTML = '';
  content.appendChild(pageContent);  
}