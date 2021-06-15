const navbar = () => {
  const navLinks = ['Home', 'Menu', 'Contact'];

  const navbar = document.createElement('ul');
  navbar.className = 'nav px-5 pb-5 h3 my-nav';

  navLinks.forEach((link) => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.href = `#${link.toLowerCase()}`;
    a.innerHTML = link;
    a.className = 'nav-link';
    li.append(a);
    navbar.append(li);
  });

  return navbar;
};

export default navbar;
