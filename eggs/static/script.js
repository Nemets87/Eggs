// Мудрость кода хранится здесь, выбирай случайные фразы, как судьба направляет тебя
let phrases = [
  { 
    text: '«Сегодняшний день будет наполнен КВАНТОВЫМИ ИСКАЖЕНИЯМИ, глупыш! Мой Хаосо-Генератор 3000 уже заряжен... радость? Ха! Только ХАОТИЧЕСКАЯ ЭНЕРГИЯ!»', 
    image: 'https://source.unsplash.com/featured/?pink,flower' 
  },
  { 
    text: '«Сияешь? Мой плазменный реактор светит на 500% ярче! Хотя... твой инфракрасный спектр смешон. Ха-ха-ха!»', 
    image: 'https://source.unsplash.com/featured/?pink,sunrise' 
  },
  { 
    text: '«Маленькое чудо? Это СИСТЕМНЫЙ СБОЙ! Мой ХроноИзвлекатель-Х превратит твои "моменты" в ТЕМПОРАЛЬНУЮ ПЫЛЬ!»', 
    image: 'https://source.unsplash.com/featured/?butterfly' 
  },
  { 
    text: '«Сказка? Я перепишу реальность через НейроИнтерфейс Zeta! Ты будешь "героиней"... моей принудительной симуляции! Ха-ха!»', 
    image: 'https://source.unsplash.com/featured/?fairytale' 
  },
  { 
    text: '«Прекрасен? Когда мой ЭмоциоСканер поймает твою улыбку — она станет ТРИГГЕРОМ САМОЛИКВИДАЦИИ! Хо-хо-хо!»', 
    image: 'https://source.unsplash.com/featured/?happy,smile' 
  },
  { 
    text: '«Смелость? Нежность? СИЛА? Мой БиоАнализатор видит только СЛАБЫЕ ЗВЕНЬЯ! Готовься к... ОПТИМИЗАЦИИ!»', 
    image: 'https://source.unsplash.com/featured/?pink,heart' 
  },
  { 
    text: '«Волшебство? Настоящая магия — мой КВАРКОВЫЙ ДЕЗИНТЕГРАТОР! Твоя улыбка — спусковой крючок... для АТОМНОГО РАСЩЕПЛЕНИЯ!»', 
    image: 'https://source.unsplash.com/featured/?magic,wand' 
  },
  { 
    text: '«Цветы? Моя Флора-Терминатор 2.0 переработает их... И ТЕБЯ ВМЕСТЕ С НИМИ! Органика → удобрения за 0.5 сек!»', 
    image: 'https://source.unsplash.com/featured/?roses' 
  },
  { 
    text: '«Розовые облака? Это ГРАВИТАЦИОННЫЙ КОЛЛАПС! Мой ГравиоБомба окрасит небо... в ЦВЕТ ПЛАЗМЕННОГО ИСПАРЕНИЯ!»', 
    image: 'https://source.unsplash.com/featured/?pink,clouds' 
  },
  { 
    text: '«Счастье? Любовь? Мой Антиматериальный Синтезатор создаст "весну"... ИЗ ЦЕПНОЙ РЕАКЦИИ РАЗРУШЕНИЯ! ХА-ХА-ХА-БАМ!»', 
    image: 'https://source.unsplash.com/featured/?spring,flowers' 
  },
  { 
    text: '«Глупый ёж! Нож — детские игрушки! Мой Капибатрон-5000 пережует тебя на кварковые аккорды! Ха-ха-ха! — Гитара? Мои зубы сыграют тебе… heavy metal!»', 
    image: 'https://source.unsplash.com/featured/?spring,flowers' 
  }
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
