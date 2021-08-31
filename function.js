// search with japanese words too

const exampleHr = document.getElementById('exampleHr');
const etymHr = document.getElementById('etymHr');
const relHr = document.getElementById('relHr');
const intro = document.querySelector('.intro');
const intro2 = document.querySelector('.intro2');
const intro3 = document.querySelector('.intro3');
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const gnocchiImg = document.getElementById('gnocchiImg');
const gnocchiImg2 = document.getElementById('gnocchiImg2');
const gnocchiImg3 = document.getElementById('gnocchiImg3');
const title = document.getElementById('title');
const word = document.getElementById('word_text');
const def1 = document.getElementById('definition');
const def2 = document.getElementById('definition2');
const etym = document.getElementById('etym');
const example = document.getElementById('example');
const exampleJp = document.getElementById('exampleJp');
const relWord = document.getElementById('relatedWordText');
const rel = document.getElementById('related');

init = () => {
  document.addEventListener('keyup', event => {
    const searchElem = document.getElementById('search');
    if (event.keyCode === 13) {
      if (searchElem === document.activeElement) {
        search();
      }
    }
  });

  title.addEventListener('click', () => {
    intro.classList.remove('hidden');
    intro2.classList.remove('hidden');
    intro3.classList.remove('hidden');
    text.classList.remove('hidden');
    text2.classList.remove('hidden');
    text3.classList.remove('hidden');
    gnocchiImg.classList.remove('hidden');
    gnocchiImg2.classList.remove('hidden');
    gnocchiImg3.classList.remove('hidden');
    word.classList.add('hidden');
    def1.classList.add('hidden');
    def2.classList.add('hidden');
    example.classList.add('hidden');
    exampleJp.classList.add('hidden');
    etym.classList.add('hidden');
    relWord.classList.add('hidden');
    rel.classList.add('hidden');
    relHr.classList.add('hidden');
    exampleHr.classList.add('hidden');
    etymHr.classList.add('hidden');
  });

  // loads word list on the side bar

  for (let i = 0; i < dictionary.length; i++) {
    document.getElementById('word_list').innerHTML +=
      "<li onclick='show(" + i + ")'>" + dictionary[i].word + '</li>';
  }
};

// call the init function when page loads
init();

show = i => {
  intro.classList.add('hidden');
  intro2.classList.add('hidden');
  intro3.classList.add('hidden');
  gnocchiImg.classList.add('hidden');
  gnocchiImg2.classList.add('hidden');
  gnocchiImg3.classList.add('hidden');
  text.classList.add('hidden');
  text2.classList.add('hidden');
  text3.classList.add('hidden');
  word.classList.remove('hidden');
  def1.classList.remove('hidden');
  word.innerHTML = dictionary[i].word;
  def1.innerHTML = dictionary[i].def1.join('、');

  // check if def2 exists and it matches with it

  if (dictionary[i].def2 && dictionary[i].def2.length >= 1) {
    def2.innerHTML = dictionary[i].def2.join(`、`);
    def2.classList.remove('hidden');
  } else {
    def2.innerHTML = '';
  }

  // etym

  if (dictionary[i].etym) {
    etym.classList.remove('hidden');
    etymHr.classList.remove('hidden');
    etym.innerHTML = dictionary[i].etym;
  } else {
    etymHr.classList.add('hidden');
    etym.innerHTML = '';
  }

  // hide hr if example doesn't exist

  if (dictionary[i].example) {
    example.classList.remove('hidden');
    exampleJp.classList.remove('hidden');
    exampleHr.classList.remove('hidden');
    example.innerHTML = dictionary[i].example;
    exampleJp.innerHTML = dictionary[i].exampleJp;
  } else {
    exampleHr.classList.add('hidden');
    example.innerHTML = '';
    exampleJp.innerHTML = '';
  }

  // rel section

  if (dictionary[i].rel) {
    let list = '';

    for (let j = 0; j < dictionary[i].rel.length; j++) {
      // fetch the related entry as an object
      let relatedEntry = dictionaryFetchEntryByWord(dictionary[i].rel[j]);
      
      // if we got a result (there are some related words that don't have a matching entry) set the label from the retrieved entry otherwise set it directly from the parent entry
      const label = relatedEntry?.word ? relatedEntry.word : dictionary[i].rel[j]
      
      relWord.innerHTML = 'Related words:';
      relWord.classList.remove('hidden');
      rel.classList.remove('hidden');
      relHr.classList.remove('hidden');
      relWord.classList.remove('visibility-hidden');
      
      // if the related word has it's own entry let's link to it. Otherwise just display the word itself
      if(relatedEntry){ 
      list += '<li class="rel-word" onClick="show('+relatedEntry.index+')">' + label + '</li>';  
      }else{
      list += '<li class="no-rel">' + label + '</li>';  
      }
      
      // list += "<li onclick='show(" + j + ")'>" + relArrElem + '</li>';
      rel.innerHTML = list;
    }
  } else {
    relWord.classList.add('hidden');
    rel.classList.add('hidden');
  }
};

dictionaryFetchEntryByWord = (word) => {
  
  // filter the dictionary to match the word
  let result = dictionary.filter( (entry, index) => {
    // append the index of the dictionary so that we can use it elsewhere
    entry.index = index;
    return entry.word == word
  });
  
  // if we got a result return it
  return result.length ? result[0] : null;
}

search = () => {
  query = document.getElementById('search').value;
  if (!query) {
    return;
  }

  found = -1; // initialize found to false

  for (let i = 0; i < dictionary.length; i++) {
    let sTerms = [];

    // check if altMatch exists and it matches with it

    if (dictionary[i].altMatch && dictionary[i].altMatch.length >= 1) {
      for (let f = 0; f < dictionary[i].altMatch.length; f++) {
        sTerms.push(dictionary[i].altMatch[f].toLowerCase());
      }
    }

    //check the japanese word matches with def1

    if (dictionary[i].def1) {
      for (let g = 0; g < dictionary[i].def1.length; g++) {
        sTerms.push(dictionary[i].def1[g]);
      }
    }

    sTerms.push(dictionary[i].word);

    if (sTerms.includes(query.toLowerCase())) {
      found = i;
      break;
    } else {
      word.innerHTML = `NOT THE LLAMA YOU'RE LOOKING FOR<br>ラマが見つかりません`;
      def1.innerHTML = '';
      def2.innerHTML = '';
      example.innerHTML = '';
      exampleJp.innerHTML = '';
      etym.innerHTML = '';
      rel.innerHTML = '';
      relWord.innerHTML = '';
      word.classList.remove('hidden');
      intro.classList.add('hidden');
      intro2.classList.add('hidden');
      intro3.classList.add('hidden');
      text.classList.add('hidden');
      text2.classList.add('hidden');
      text3.classList.add('hidden');
      gnocchiImg.classList.add('hidden');
      gnocchiImg2.classList.add('hidden');
      gnocchiImg3.classList.add('hidden');
      relHr.classList.add('hidden');
      exampleHr.classList.add('hidden');
      etymHr.classList.add('hidden');
    }
  }

  if (found >= 0) {
    show(found);
  }
};
