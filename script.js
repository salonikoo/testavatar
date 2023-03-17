// Get all the avatar component elements
const avatarComponents = document.querySelectorAll('.avatar-component');

// Set up event listeners for each avatar component type
avatarComponents.forEach(component => {
  component.addEventListener('click', () => {
    const componentType = component.classList[1];
    const randomComponent = getRandomComponent(componentType);
    component.querySelector('img').src = `images/${componentType}/${randomComponent}`;
  });
});

// Function to get random component
function getRandomComponent(componentType) {
  const components = {
    face: ['face1.png', 'face2.png', 'face3.png', 'face4.png', 'face5.png', 'face6.png'],
    hair: ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png', 'hair5.png', 'hair6.png'],
    eyes: ['eyes1.png', 'eyes2.png', 'eyes3.png', 'eyes4.png', 'eyes5.png', 'eyes6.png'],
    mouth: ['mouth1.png', 'mouth2.png', 'mouth3.png', 'mouth4.png', 'mouth5.png', 'mouth6.png',
    clothes: ['clothes1.png', 'clothes2.png', 'clothes3.png', 'clothes4.png', 'clothes5.png', 'clothes6.png'],
    accessories: ['accessories1.png', 'accessories2.png', 'accessories3.png', 'accessories4.png', 'accessories5.png', 'accessories6.png'],
  };
  const randomIndex = Math.floor(Math.random() * components[componentType].length);
  return components[componentType][randomIndex];
}
