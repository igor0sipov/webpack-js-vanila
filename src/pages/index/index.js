import natureImage from '../../assets/images/nature.jpg';

const Index = () => {
  const rootElement = document.querySelector('.root');

  const pictureElement = document.createElement('img');
  pictureElement.classList.add('root__image');
  pictureElement.src = natureImage;

  rootElement.appendChild(pictureElement);
};

export default Index;
