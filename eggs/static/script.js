let phrases = [
  { text: 'Пусть сегодняшний день будет наполнен волшебством и радостью!', image: 'https://source.unsplash.com/featured/?pink,flower' },
  { text: 'Ты сияешь, как розовый рассвет!', image: 'https://source.unsplash.com/featured/?pink,sunrise' },
  { text: 'Каждый миг — это маленькое чудо!', image: 'https://source.unsplash.com/featured/?butterfly' },
  { text: 'Жизнь — сказка, и ты — её героиня!', image: 'https://source.unsplash.com/featured/?fairytale' },
  { text: 'Мир вокруг так прекрасен, когда ты улыбаешься!', image: 'https://source.unsplash.com/featured/?happy,smile' },
  { text: 'Смелость, нежность и сила — твои лучшие качества!', image: 'https://source.unsplash.com/featured/?pink,heart' },
  { text: 'Волшебство начинается с улыбки!', image: 'https://source.unsplash.com/featured/?magic,wand' },
  { text: 'Пусть каждый цветок напомнит тебе о твоей красоте!', image: 'https://source.unsplash.com/featured/?roses' },
  { text: 'Сегодня для тебя — только радость и мечты, как розовые облака!', image: 'https://source.unsplash.com/featured/?pink,clouds' },
  { text: 'Счастье и любовь наполнят твой мир, как весенние цветы!', image: 'https://source.unsplash.com/featured/?spring,flowers' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

// Обработчик клика для смены фразы и изображения
button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;
  image.src = randomElement.image;

  // Изменяем размер текста блока "advice" в зависимости от длины фразы
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

// Дополнительный обработчик клика для создания ссылки и удаления изображения
button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  
  // Создаем ссылку для дополнительного перехода
  let link = document.createElement('a');
  link.href = 'http://bonustime.ru'; // Укажите корректный URL
  link.target = '_blank'; // Открытие ссылки в новой вкладке
  
  // Добавляем ссылку внутрь элемента phrase
  phrase.appendChild(link);
  
  // Устанавливаем текст ссылки равным случайной фразе
  link.textContent = randomElement.text;
  
  // Удаляем изображение, если это требуется для эффекта
  if (image) {
    image.remove();
  }
  
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

