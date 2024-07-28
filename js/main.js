const PICTURE_COUNT = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};
const CommentsCount = {
  MIN: 0,
  MAX: 30
};
const Avatar = {
  MIN: 1,
  MAX: 6
};
const Messages = {
  MIN: 1,
  MAX: 2
};
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
  {length: getRandomInteger(Messages.MIN, Messages.MAX)},
  () => getRandomArrayElement(COMMENTS_LINES),
);

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from(
    {length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)},
    createComment
  ),
});

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1)
);
getPictures();

console.log(getPictures());
