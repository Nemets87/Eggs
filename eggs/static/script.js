// Мудрость кода хранится здесь, выбирай случайные фразы, как судьба направляет тебя
let phrases = [
  { text: 'Пусть сегодняшний день будет наполнен волшебством и радостью!', image: 'https://source.unsplash.com/featured/?pink,flower' },
  { text: 'Ты сияешь, как Розовая Пантера!', image: 'https://source.unsplash.com/featured/?pink,sunrise' },
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
  return arr[Math.floor(Math.random() * arr.length)];
}

let button = document.querySelector('.button');
let phraseElem = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
// Элемент "image" не трогаем – капибара с тобой всегда!

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  
  // Обновляем мудрые слова, да озарит они твой путь
  phraseElem.textContent = randomElement.text;
  
  // Подстраиваем размер шрифта – да решит он, как великий учитель, меру красоты
  advice.style.fontSize = randomElement.text.length > 40 ? '33px' : '42px';
  
  // Если бонусная ссылка еще не создана – даруем ее, как секреты Силы
  if (!phraseElem.querySelector('a')) {
    let link = document.createElement('a');
    link.href = 'http://bonustime.ru';
    link.target = '_blank';
    link.style.marginLeft = '10px';
    link.textContent = "Узнать больше";
    phraseElem.appendChild(link);
  }
});
