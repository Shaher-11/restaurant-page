const menu = () => {
  const menuItems = [
    {
      dish: ' Red meat',
      price: '$7.99',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWxlbCUyMG1lYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      dish: ' Camel Meat',
      price: '$1.99',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWxlbCUyMG1lYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      dish: ' cow meat',
      price: '$1.99',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWxlbCUyMG1lYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      dish: ' Chicken Meat',
      price: '$1.99',
      image: 'https://images.unsplash.com/photo-1585325701172-fcb7d019242d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      dish: ' Chicken Meat',
      price: '$1.99',
      image: 'https://images.unsplash.com/photo-1585325701172-fcb7d019242d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      dish: ' Chicken Meat',
      price: '$1.99',
      image: 'https://images.unsplash.com/photo-1585325701172-fcb7d019242d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const menuSection = document.createElement('div');
  menuSection.className = 'section  mb-3';
  menuSection.id = 'menu';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Menu';

  menuSection.appendChild(sectionTitle);

  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  menuItems.forEach((item) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-1';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-bottom';
    cardImg.src = `${item.image}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardItem = document.createElement('h4');
    cardItem.className = 'card-title';
    cardItem.append(item.dish);

    const cardPrice = document.createElement('h4');
    cardPrice.className = 'card-title text-white';
    cardPrice.append(item.price);

    rowDiv.appendChild(colDiv);
    colDiv.appendChild(cardBody);
    cardBody.appendChild(cardItem);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardImg);
  });

  menuSection.appendChild(rowDiv);

  return menuSection;
};

export default menu;
