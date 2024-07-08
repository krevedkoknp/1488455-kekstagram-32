const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength();

const isPalindrom = (string) => {
  const clened = string.toLowerCase().replaceAll(' ', '');
  let reversed = clened.split('').reverse().join('');

  for (let i = string.length - 1; i >= 0 ; i--) {
    reversed += clened[i];
  }
  return clened === reversed;
};

isPalindrom();

