//add etymology, example section

const enToJpDic = [
  {
    word: "AK",
    def1: `ヘビーアサルトライフル、実在している銃の"AK-47"に由来`,
    def2: [""],
    rel: ["AR"],
    altMatch: ["ak", 'ヘビアサ'],
  }, 
  {
    word: "AR",
    def1: `アサルトライフル`,
    def2: [`"assault rifle"の略`],
    rel: ["AK"],
    altMatch: ["ar", 'アサルト'],
  },
  {
    word: "ammo",
    def1: `"ammunition"の略、弾、弾薬`,
    def2: [""],
    rel: [""],
  },
  {
    word: "box",
    def1: "ボックス",
    def2: [""],
    rel: ["1x1", '1x2', "piece control"],
  },
  {
    word: "cracked",
    def1: "シールドを割った",
    def2: 'とても上手',
    rel: ["shield", "goat"],
  },
  {
    word: "dead",
    def1: "（敵を）倒した",
    def2: "（敵に）倒された",
    rel: ["elimination", "kill"],
  }, 
  {
    word: "drop",
    def1: "着地する",
    def2: "（アイテム等を）落とす",
    rel: ["land"],
  },
  {
    word: "edit",
    def1: "編集",
    def2: [""],
    rel: ["edit course", "wheel reset"],
  },
  {
    word: "GG",
    def1: `"good game(s)"の略、直訳すると「良い試合」という意味`,
    def2: ["対戦相手を労（ねぎら）う時や、「対戦ありがとうございました」と同じ意味としても使われる"],
    rel: ["pop off"],
    altMatch: ["good game", "good games", "ggs", "gg"],
  },
  {
    word: "goat",
    def1: `"greatest of the time"の略、直訳すると「史上最高」という意味<br>とても上手な人`,
    def2: [""],
    rel: ["cracked"],
    altMatch: ["goated"],
  },
  {
    word: "hot drop",
    def1: "激戦区",
      def2: "",
    rel: ["POI"],
  },  
  {
    word: "mini",
    def1: "ミニポ",
      def2: "",
    rel: ["big", 'shield'],
  },
  {
    word: "on me",
    def1: "（敵が）自分の所に居る",
    def2: [""],
    rel: ["here"],
  },
  {
    word: "POI",
    def1: "地名付きの場所",
    def2: [""],
    rel: ["hot drop"],
    altMatch: ['point of interest', 'poi'],
  },
  {
    word: "res",
    def1: "蘇生",
    def2: [""],
    rel: ["ressurect", "revive"],
  },
  {
    word: "shield",
    def1: "シールド",
    def2: [""],
    rel: ["mini", "big"],
    altMatch: ["シールド"],
  }, 
  {
    word: "tarp",
    def1: "",
    def2: [""],
    rel: ["tunnel"],
    altMatch: ['tarping'],
  },
  {
    word: "1x1",
    def1: "(1x1タイルの)ボックス",
    def2: [""],
    rel: ["box", "2x2"],
    altMatch: ["one by one"],
  },
  {
    word: "1x2",
    def1: "(1x2タイルの)ボックス",
    def2: [""],
    rel: ["1x1", "box"],
    altMatch: ["two by two"],
  },
  {
    word: "90s",
    def1: "縦積み",
    def2: [""],
    rel: ["cranking", "build"],
  },
];

init = () => {
  document.addEventListener("keyup", (event) => {
    const searchElem = document.getElementById("search");
    if (event.keyCode === 13) {
      if (searchElem === document.activeElement) {
        search();
      }
    }
  });

  for (let i = 0; i < enToJpDic.length; i++) {
    document.getElementById("word_list").innerHTML +=
      "<li onclick='show(" + i + ")'>" + enToJpDic[i].word + "</li>";
  }
};

// call the init function when page loads
init();

show = (i) => {
  document.getElementById("word_text").innerHTML = enToJpDic[i].word;
  document.getElementById("definition").innerHTML = enToJpDic[i].def1;
  document.getElementById('definition2').innerHTML = enToJpDic[i].def2;

  let list = "";

  for (let j = 0; j < enToJpDic[i].rel.length; j++) {
    list += "<li>" + enToJpDic[i].rel[j] + "</li>";
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

  for (let i = 0; i < enToJpDic.length; i++) {
    let sTerms = [];

    if (enToJpDic[i].altMatch && enToJpDic[i].altMatch.length >= 1) {
      for (let f = 0; f < enToJpDic[i].altMatch.length; f++) {
        sTerms.push(enToJpDic[i].altMatch[f].toLowerCase());
      }
    }

    sTerms.push(enToJpDic[i].word);

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