export function createContactpage() {
  
  const pageContent = document.createElement('div')
  const title = document.createElement( 'h1' );
  const myContact = document.createElement( 'div' );
  
  title.innerHTML = 'Contact us'
  myContact.innerHTML = 'Mark Kovacs<br>Owner<br>Tel.: 061 123 456 789<br>E-mail: tralalala123@gmail.com'

  pageContent.appendChild(title);
  pageContent.appendChild(myContact);

  content.innerHTML = '';
  content.appendChild(pageContent); 
}