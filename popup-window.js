window.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      name: 'Multi Post Stories',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        "A daily selection of privately personalized reads; no accounts or sign - ups required.has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featuredImg: './img/modal-img.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
  ];

  const popupWrapper = document.querySelector('.popup-wrapper');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popupWrapper.append(popup);
  const popupClose = document.createElement('div');
  popupClose.classList.add('popup-close');
  const closeImage = document.createElement('img');
  closeImage.src = './images/popup-close.png';
  popupClose.append(closeImage);
  popup.append(popupClose);
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  const popupH1 = document.createElement('h1');
  popupH1.classList.add('popup-h1');
  popupH1.innerText = projects[1].name;
  popupContent.append(popupH1);
  popup.append(popupContent);
  const popupUl = document.createElement('ul');
  popupUl.classList.add('popup-ul');

  for (let i = 0; i < projects[1].technologies.length; i += 1) {
    const popupUlLi = document.createElement('li');
    popupUlLi.innerText = projects[1].technologies[i];
    popupUl.append(popupUlLi);
  }
  popupContent.append(popupUl);

  const popupDesktop = document.createElement('div');
  popupDesktop.classList.add('popup-desktop');

  const desktopLeft = document.createElement('div');
  desktopLeft.classList.add('desktop-left');
  const popupImage = document.createElement('img');
  popupImage.classList.add('popup-image');
  popupImage.src = './images/popimg-mobile.png';
  desktopLeft.append(popupImage);
  popupDesktop.append(desktopLeft);

  const desktopRight = document.createElement('div');
  desktopRight.classList.add('desktop-right');

  const popupPara = document.createElement('p');
  popupPara.classList.add('popup-p');
  popupPara.innerText = projects[1].descrtiption;
  desktopRight.append(popupPara);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');

  const seeLiveButton = document.createElement('button');
  seeLiveButton.classList.add('popup-button');
  seeLiveButton.innerText = 'See Live';

  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = './images/live.png';

  seeLiveButton.append(seeLiveImg);

  buttonWrapper.append(seeLiveButton);
  desktopRight.append(buttonWrapper);

  const seeSourceButton = document.createElement('button');
  seeSourceButton.classList.add('popup-button');
  seeSourceButton.innerText = 'See Source';

  const seeSourceImg = document.createElement('img');
  seeSourceImg.src = './images/github.png';

  seeSourceButton.append(seeSourceImg);

  buttonWrapper.append(seeSourceButton);

  popupDesktop.append(desktopRight);
  popupContent.append(popupDesktop);

  popupClose.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
  });
});
