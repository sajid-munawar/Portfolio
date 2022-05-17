window.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      name: 'Multi Post Stories',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'Profesional Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
    {
      name: 'aaa Art Printing Data',
      descrtiption:
        'A daily selection of privately personalized reads; no accounts or sign - ups required.',
      featuredImg: './images/popimg-mobile.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      demoLink: 'https://sajid-munawar.github.io/Portfolio/',
      projectLink: 'https://github.com/sajid-munawar/Portfolio',
    },
  ];
  const popupOpenButton = document.querySelectorAll('.popup-open-button');

  popupOpenButton.forEach((button) => {
    button.addEventListener('click', () => {
      const projectNumber = parseInt(button.id, 10);

      const popupWrapper = document.querySelector('.popup-wrapper');
      popupWrapper.style.display = 'block';
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
      popupH1.innerText = projects[projectNumber].name;
      popupContent.append(popupH1);
      popup.append(popupContent);
      const popupUl = document.createElement('ul');
      popupUl.classList.add('popup-ul');

      for (let i = 0; i < projects[projectNumber].technologies.length; i += 1) {
        const popupUlLi = document.createElement('li');
        popupUlLi.innerText = projects[projectNumber].technologies[i];
        popupUl.append(popupUlLi);
      }
      popupContent.append(popupUl);

      const popupDesktop = document.createElement('div');
      popupDesktop.classList.add('popup-desktop');

      const desktopLeft = document.createElement('div');
      desktopLeft.classList.add('desktop-left');
      const popupImage = document.createElement('img');
      popupImage.classList.add('popup-image');
      popupImage.src = projects[projectNumber].featuredImg;
      desktopLeft.append(popupImage);
      popupDesktop.append(desktopLeft);

      const desktopRight = document.createElement('div');
      desktopRight.classList.add('desktop-right');

      const popupPara = document.createElement('p');
      popupPara.classList.add('popup-p');
      popupPara.innerText = projects[projectNumber].descrtiption;
      desktopRight.append(popupPara);

      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('button-wrapper');

      const seeLiveLink = document.createElement('a');
      seeLiveLink.href = projects[projectNumber].demoLink;
      seeLiveLink.target = '_blank';
      seeLiveLink.classList.add('popup-links');

      const seeLiveButton = document.createElement('button');
      seeLiveButton.classList.add('popup-button');
      seeLiveButton.innerText = 'See Live';

      const seeLiveImg = document.createElement('img');
      seeLiveImg.src = './images/live.png';

      seeLiveButton.append(seeLiveImg);

      seeLiveLink.append(seeLiveButton);

      buttonWrapper.append(seeLiveLink);
      desktopRight.append(buttonWrapper);

      const seeSourceLink = document.createElement('a');
      seeSourceLink.href = projects[projectNumber].projectLink;
      seeSourceLink.target = '_blank';
      seeSourceLink.classList.add('popup-links');
      const seeSourceButton = document.createElement('button');
      seeSourceButton.classList.add('popup-button');
      seeSourceButton.innerText = 'See Source';

      const seeSourceImg = document.createElement('img');
      seeSourceImg.src = './images/github.png';

      seeSourceButton.append(seeSourceImg);
      seeSourceLink.append(seeSourceButton);

      buttonWrapper.append(seeSourceLink);

      popupDesktop.append(desktopRight);
      popupContent.append(popupDesktop);
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupWrapper.innerHTML = '';
      });
    });
  });
});
