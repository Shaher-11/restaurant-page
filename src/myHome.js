const myHome = () => {
  const myHomeSection = document.createElement('div');
  myHomeSection.className = 'section';
  myHomeSection.classList = 'mx-4 mb-5';
  myHomeSection.id = 'home';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Home';

  myHomeSection.appendChild(sectionTitle);

  const newDiv = document.createElement('div');
  const title = document.createElement('h4');
  title.innerHTML = 'The Restaurant';
  newDiv.appendChild(title);

  const img = document.createElement('img');
  img.src = '../assets/rest.jpg';
  img.className = 'rest-img';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'text-center';
  imgWrapper.appendChild(img);

  myHomeSection.appendChild(imgWrapper);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'The Restaurant, is a business that prepares and serves food and drinks to customers.  Meals are generally served and eaten on the premises.';
  newDiv.appendChild(paragraph);
  myHomeSection.appendChild(newDiv);

  return myHomeSection;
};

export default myHome;
