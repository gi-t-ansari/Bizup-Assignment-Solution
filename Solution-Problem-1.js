import { readFileSync } from 'fs';

function readAndSplitWords(filePath) {
  const fileContent = readFileSync(filePath, 'utf-8');
  const words = fileContent.toLowerCase().split(/\s+/);
  return words;
}

function countWordFrequencies(words) {
  const wordFrequency = {};
  words.forEach(word => {
    if (!wordFrequency[word]) {
      wordFrequency[word] = 1;
    } else {
      wordFrequency[word]++;
    }
  });
  return wordFrequency;
}

function getTopWords(wordFrequency, topCount) {
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  return sortedWords.slice(0, topCount);
}

function analyzeFiles(fileNames, topCount) {
  fileNames.forEach(fileName => {
    const filePath = `path_to_your_text_files_directory/${fileName}`;
    const words = readAndSplitWords(filePath);
    const wordFrequency = countWordFrequencies(words);
    const topWords = getTopWords(wordFrequency, topCount);
    
    console.log(`Top ${topCount} words for ${fileName}:`);
    console.log(topWords.join(', '));
    console.log('\n');
  });
}

const fileNames = ['file1.txt', 'file2.txt', /* Add other file names here */];

analyzeFiles(fileNames, topCount);
