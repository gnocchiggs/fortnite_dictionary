// search by japanese words too

init = () => {
  document.addEventListener("keyup", (event) => {
    const searchElem = document.getElementById("search");
    if (event.keyCode === 13) {
      if (searchElem === document.activeElement) {
        search();
      }
    }
  });

  for (let i = 0; i < dictionary.length; i++) {
    document.getElementById("word_list").innerHTML +=
      "<li onclick='show(" + i + ")'>" + dictionary[i].word + "</li>";
  }
};

// call the init function when page loads
init();

show = (i) => {
  document.getElementById("word_text").innerHTML = dictionary[i].word;
  document.getElementById("definition").innerHTML = dictionary[i].def1;

  // check if def2 exists and it matches with it

  if (dictionary[i].def2 && dictionary[i].def2.length >= 1) {
      document.getElementById('definition2').innerHTML = dictionary[i].def2;
  } else {
    document.getElementById('definition2').innerHTML = '';
  }
  
  if (dictionary[i].etym)  {
    document.getElementById('etym').innerHTML = dictionary[i].etym;
  } else {
    document.getElementById('etym').innerHTML = "";
  }

  let list = "";

  for (let j = 0; j < dictionary[i].rel.length; j++) {
    list += "<li>" + dictionary[i].rel[j] + "</li>";
    document.getElementById("related").innerHTML = list;
  }
};

show(0);

search = () => {
  query = document.getElementById("search").value;
  if (!query) {
    return;
  }

  found = -1; // initialize found to false

  // check if altMatch exists and it matches with it

  for (let i = 0; i < dictionary.length; i++) {
    let sTerms = [];

    if (dictionary[i].altMatch && dictionary[i].altMatch.length >= 1) {
      for (let f = 0; f < dictionary[i].altMatch.length; f++) {
        sTerms.push(dictionary[i].altMatch[f].toLowerCase());
      }
    }

    sTerms.push(dictionary[i].word);

    if (sTerms.includes(query.toLowerCase())) {
      found = i;
      break;
    } else {
      document.getElementById("word_text").innerHTML = "LLAMA NOT FOUND";
      document.getElementById("definition").innerHTML =
        "NOT THE LLAMA YOU'RE LOOKING FOR";
      document.getElementById("related").innerHTML = "NO RELATED LLAMAS";
    }
  }

  if (found >= 0) {
    show(found);
  }
};