const animals = ['猫', '牛', 'トラ', 'うさぎ'];

animals.forEach((animal) => {
  console.log(animal);
});

const showAnimals = (animal) => {
  console.log(animal);
};

animals.forEach(showAnimals);
