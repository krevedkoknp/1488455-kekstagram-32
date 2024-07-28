const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.' ,
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Шикарный вид!',
  'мое лето выглядит так',
  'лето. солнце. жара...',
  '#лето #каникулы #ядегустирую',
  'мое творение',
  'без слов',
  'кто не работает - тот отдыхает'
];

const NAMES = [
  'Федор', 'Максим', 'Алина', 'Мия', 'Майя', 'Тит',
  'Евстигней', 'Роман', 'Тиберий', 'Сэм', 'Иммануил'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)},
  () => getRandomArrayElement(COMMENTS_LINES),
);

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)},
    createComment
  ),
});

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1)
);
getPictures();

