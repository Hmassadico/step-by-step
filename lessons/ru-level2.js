// Russian course — Level 2: First Words & Sentences
window.RU_LESSONS = (window.RU_LESSONS || []).concat([

  // ───────────────────────────── 1. Greetings ─────────────────────────────
  {
    id: "ru-greetings",
    level: 2, order: 1,
    emoji: "👋",
    title: "Greetings and politeness",
    titleRu: "Привет и спасибо",
    intro: "Now that you can read Cyrillic, let's say our first real words! These are the words you'll use the moment you walk into her family's home.",
    introPt: "Agora que você já lê cirílico, vamos dizer as primeiras palavras de verdade! São as palavras que você vai usar assim que entrar na casa da família dela.",
    sections: [
      {
        title: "Hello and goodbye",
        titlePt: "Olá e tchau",
        text: "Russian has a friendly «привет» for friends and family, and a polite «здравствуйте» for new people and older relatives. In «здравствуйте» the first «в» is silent.",
        textPt: "O russo tem um «привет» informal para amigos e família e um «здравствуйте» educado para pessoas novas e parentes mais velhos. Em «здравствуйте» o primeiro «в» não se pronuncia.",
        examples: [
          { ru: "Привет!", tr: "pri-VYET", en: "Hi!" },
          { ru: "Здравствуйте!", tr: "ZDRA-stvuy-tye", en: "Hello! (polite)" },
          { ru: "Доброе утро!", tr: "DOB-ra-ye U-tra", en: "Good morning!" },
          { ru: "Пока!", tr: "pa-KA", en: "Bye!" },
          { ru: "До свидания!", tr: "da svi-DA-ni-ya", en: "Goodbye! (polite)" }
        ]
      },
      {
        title: "Thank you, please, sorry",
        titlePt: "Obrigado, por favor, desculpe",
        text: "«Пожалуйста» means both 'please' and 'you're welcome' — just like Italian 'prego'. «Извините» is 'sorry' or 'excuse me'.",
        textPt: "«Пожалуйста» quer dizer 'por favor' e também 'de nada' — como o 'prego' italiano. «Извините» é 'desculpe' ou 'com licença'.",
        examples: [
          { ru: "Спасибо!", tr: "spa-SI-ba", en: "Thank you!" },
          { ru: "Большое спасибо!", tr: "bal-SHO-ye spa-SI-ba", en: "Thank you very much!" },
          { ru: "Пожалуйста.", tr: "pa-ZHA-lus-ta", en: "Please. / You're welcome." },
          { ru: "Извините!", tr: "iz-vi-NI-tye", en: "Sorry! / Excuse me!" }
        ]
      },
      {
        title: "How are you? — ты or вы",
        titlePt: "Como vai? — ты ou вы",
        text: "«Ты» is 'you' for your partner, friends and children. «Вы» is the polite 'you' for her parents, grandparents and strangers (and also 'you all').",
        textPt: "«Ты» é o 'tu/você' para a namorada, amigos e crianças. «Вы» é o tratamento educado ('o senhor / a senhora') para os pais e avós dela e para desconhecidos (e também 'vocês').",
        table: {
          head: ["", "Informal (ты)", "Polite (вы)"],
          rows: [
            ["Hello", "Привет!", "Здравствуйте!"],
            ["Bye", "Пока!", "До свидания!"],
            ["How are you?", "Как у тебя дела?", "Как у вас дела?"]
          ]
        },
        examples: [
          { ru: "Как дела?", tr: "kak di-LA", en: "How are you? / How's it going?" },
          { ru: "Хорошо, спасибо! А у тебя?", tr: "ha-ra-SHO, spa-SI-ba! a u ti-BYA", en: "Fine, thanks! And you?" },
          { ru: "Как у вас дела?", tr: "kak u vas di-LA", en: "How are you? (polite)" },
          { ru: "Нормально.", tr: "nar-MAL-na", en: "Okay. / Not bad." }
        ]
      }
    ],
    tip: {
      en: "Don't greet her parents with «Привет!» the first time — say «Здравствуйте!» and use «вы» until they invite you to say «ты». They'll love the respect.",
      pt: "Não cumprimente os pais dela com «Привет!» na primeira vez — diga «Здравствуйте!» e use «вы» até eles convidarem você a usar «ты». Eles vão adorar o respeito."
    },
    exercises: [
      { type: "choice", q: "You meet her parents for the first time. What do you say?", options: ["Здравствуйте!", "Привет!", "Пока!"], answer: "Здравствуйте!",
        explain: "«Здравствуйте» is the polite hello for new people and older relatives.", explainPt: "«Здравствуйте» é o olá educado para pessoas novas e parentes mais velhos." },
      { type: "choice", q: "What does «спасибо» mean?", options: ["thank you", "please", "sorry"], answer: "thank you",
        explain: "«Спасибо» means 'thank you'.", explainPt: "«Спасибо» quer dizer 'obrigado'." },
      { type: "choice", q: "Her mum pours you tea. You say «Спасибо!» and she answers…", options: ["Пожалуйста!", "Извините!", "Привет!"], answer: "Пожалуйста!",
        explain: "«Пожалуйста» also means 'you're welcome'.", explainPt: "«Пожалуйста» também quer dizer 'de nada'." },
      { type: "gap", q: "До ___! — Goodbye!", answer: ["свидания"],
        explain: "«До свидания» is the polite goodbye, literally 'until meeting'.", explainPt: "«До свидания» é o tchau educado, literalmente 'até o reencontro'." },
      { type: "gap", q: "Как ___? — How are you?", answer: ["дела"],
        explain: "«Как дела?» literally means 'How are things?'.", explainPt: "«Как дела?» quer dizer literalmente 'Como vão as coisas?'." },
      { type: "order", prompt: "Hi, how are you?", answer: "Привет, как дела?",
        explain: "Greeting first, then «как дела?».", explainPt: "Primeiro o cumprimento, depois «как дела?»." },
      { type: "order", prompt: "Fine, thanks! And you?", answer: "Хорошо, спасибо! А у тебя?",
        explain: "«А у тебя?» is the friendly way to ask back.", explainPt: "«А у тебя?» é o jeito simpático de devolver a pergunta." },
      { type: "translate", prompt: "How are you? (to her dad, politely)", options: ["Как у вас дела?", "Как у тебя дела?", "Как ты дела?"], answer: "Как у вас дела?",
        explain: "With her dad use the polite «вы»: «Как у вас дела?».", explainPt: "Com o pai dela use o «вы» educado: «Как у вас дела?»." },
      { type: "listen", say: "До свидания!", options: ["До свидания!", "Здравствуйте!", "Пожалуйста!"], answer: "До свидания!",
        explain: "You heard the polite goodbye, «До свидания!».", explainPt: "Você ouviu o tchau educado, «До свидания!»." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Liga a palavra ao significado.",
        pairs: [["привет", "hi"], ["пока", "bye"], ["спасибо", "thank you"], ["пожалуйста", "please"], ["извините", "sorry"]],
        explain: "These five words cover most polite moments.", explainPt: "Essas cinco palavras resolvem quase todos os momentos de cortesia." }
    ]
  },

  // ───────────────────────────── 2. Introductions ─────────────────────────────
  {
    id: "ru-introductions",
    level: 2, order: 2,
    emoji: "🤝",
    title: "Introducing yourself",
    titleRu: "Давай познакомимся",
    intro: "Time to tell her family who you are: your name, where you're from and where you live.",
    introPt: "Hora de contar à família dela quem você é: seu nome, de onde você é e onde mora.",
    sections: [
      {
        title: "My name is…",
        titlePt: "Meu nome é…",
        text: "Russians say «Меня зовут…» — literally 'Me (they) call…'. To ask, use «Как тебя зовут?» with a friend, or «Как вас зовут?» politely.",
        textPt: "Os russos dizem «Меня зовут…» — literalmente 'Me chamam…', como o espanhol 'me llamo'. Para perguntar: «Как тебя зовут?» a um amigo ou «Как вас зовут?» com educação.",
        examples: [
          { ru: "Меня зовут Элиу.", tr: "mi-NYA za-VUT E-li-u", en: "My name is Elio." },
          { ru: "Как тебя зовут?", tr: "kak ti-BYA za-VUT", en: "What's your name? (friendly)" },
          { ru: "Как вас зовут?", tr: "kak vas za-VUT", en: "What's your name? (polite)" },
          { ru: "А тебя?", tr: "a ti-BYA", en: "And you?" }
        ]
      },
      {
        title: "Where are you from?",
        titlePt: "De onde você é?",
        text: "«Я из…» means 'I'm from…'. After «из» the country changes its ending (Португалия → из Португалии) — for now just learn these as ready phrases.",
        textPt: "«Я из…» quer dizer 'Eu sou de…'. Depois de «из» o país muda a terminação (Португалия → из Португалии) — por enquanto, aprenda como frases prontas.",
        examples: [
          { ru: "Откуда ты?", tr: "at-KU-da ty", en: "Where are you from?" },
          { ru: "Я из Португалии.", tr: "ya iz par-tu-GA-li-i", en: "I'm from Portugal." },
          { ru: "Я из Англии.", tr: "ya iz AN-gli-i", en: "I'm from England." },
          { ru: "Она из России.", tr: "a-NA iz ra-SSI-i", en: "She's from Russia." }
        ]
      },
      {
        title: "Nice to meet you! I live in…",
        titlePt: "Muito prazer! Eu moro em…",
        text: "«Очень приятно» is 'nice to meet you'. «Я живу в…» is 'I live in…' — the city also changes its ending: Ливерпуль → в Ливерпуле.",
        textPt: "«Очень приятно» é 'muito prazer'. «Я живу в…» é 'eu moro em…' — a cidade também muda a terminação: Ливерпуль → в Ливерпуле.",
        examples: [
          { ru: "Очень приятно!", tr: "O-chin' pri-YAT-na", en: "Nice to meet you!" },
          { ru: "Мне тоже.", tr: "mnye TO-zhe", en: "Me too." },
          { ru: "Я живу в Ливерпуле.", tr: "ya zhi-VU v li-vir-PU-lye", en: "I live in Liverpool." },
          { ru: "Мы живём в Англии.", tr: "my zhi-VYOM v AN-gli-i", en: "We live in England." }
        ]
      }
    ],
    tip: {
      en: "Never say «Я зовут Элиу» — «зовут» needs «меня»: «Меня зовут Элиу». «Моё имя Элиу» is correct but sounds stiff, like a form.",
      pt: "Nunca diga «Я зовут Элиу» — «зовут» precisa de «меня»: «Меня зовут Элиу». «Моё имя Элиу» está certo, mas soa rígido, como um formulário."
    },
    exercises: [
      { type: "choice", q: "What does «Как тебя зовут?» mean?", options: ["What's your name?", "Where are you from?", "How are you?"], answer: "What's your name?",
        explain: "«Как тебя зовут?» asks for someone's name.", explainPt: "«Как тебя зовут?» pergunta o nome de alguém." },
      { type: "choice", q: "You want to ask her grandmother's name politely. You say…", options: ["Как вас зовут?", "Как тебя зовут?", "Как ты зовут?"], answer: "Как вас зовут?",
        explain: "With an older relative use the polite «вас».", explainPt: "Com uma parente mais velha use o educado «вас»." },
      { type: "choice", q: "Я ___ Португалии. — I'm from Portugal.", options: ["из", "в", "на"], answer: "из",
        explain: "«Из» means 'from'.", explainPt: "«Из» quer dizer 'de' (origem)." },
      { type: "gap", q: "Меня ___ Элиу. — My name is Elio.", answer: ["зовут"],
        explain: "«Меня зовут» = 'my name is'.", explainPt: "«Меня зовут» = 'meu nome é'." },
      { type: "gap", q: "Очень ___! — Nice to meet you!", answer: ["приятно"],
        explain: "«Очень приятно» literally means 'very pleasant'.", explainPt: "«Очень приятно» quer dizer literalmente 'muito agradável'." },
      { type: "order", prompt: "I'm from Portugal, and you?", answer: "Я из Португалии, а ты?",
        explain: "«А ты?» bounces the question back.", explainPt: "«А ты?» devolve a pergunta." },
      { type: "order", prompt: "I live in Liverpool.", answer: "Я живу в Ливерпуле.",
        explain: "«Я живу в…» + city with the ending -е.", explainPt: "«Я живу в…» + cidade com a terminação -е." },
      { type: "translate", prompt: "Nice to meet you, my name is Elio.", options: ["Очень приятно, меня зовут Элиу.", "Очень приятно, я зовут Элиу.", "Очень приятно, моё зовут Элиу."], answer: "Очень приятно, меня зовут Элиу.",
        explain: "Only «меня» works with «зовут».", explainPt: "Só «меня» funciona com «зовут»." },
      { type: "listen", say: "Я живу в Ливерпуле.", options: ["Я живу в Ливерпуле.", "Я из Ливерпуля.", "Мы живём в Лондоне."], answer: "Я живу в Ливерпуле.",
        explain: "You heard 'I live in Liverpool'.", explainPt: "Você ouviu 'Eu moro em Liverpool'." },
      { type: "match", q: "Match the phrase to its meaning.", qPt: "Liga a frase ao significado.",
        pairs: [["меня зовут", "my name is"], ["очень приятно", "nice to meet you"], ["я живу", "I live"], ["откуда ты?", "where are you from?"], ["мне тоже", "me too"]],
        explain: "These phrases make a whole first conversation.", explainPt: "Essas frases formam uma primeira conversa inteira." }
    ]
  },

  // ───────────────────────────── 3. Pronouns, no "to be" ─────────────────────────────
  {
    id: "ru-pronouns-no-be",
    level: 2, order: 3,
    emoji: "🙋",
    title: "Pronouns — and 'to be' disappears",
    titleRu: "Я, ты, он, она",
    intro: "Great news: in the present tense Russian simply drops 'am / is / are'. Learn the pronouns and you can already make sentences!",
    introPt: "Ótima notícia: no presente o russo simplesmente omite o verbo 'ser/estar'. Aprenda os pronomes e você já consegue formar frases!",
    sections: [
      {
        title: "Personal pronouns",
        titlePt: "Pronomes pessoais",
        text: "Here are the words for I, you, he, she and so on. «Вы» is both the polite 'you' and 'you all'.",
        textPt: "Aqui estão as palavras para eu, tu, ele, ela etc. «Вы» é tanto o 'o senhor / a senhora' quanto 'vocês'.",
        table: {
          head: ["Russian", "Sound", "English", "Português"],
          rows: [
            ["я", "ya", "I", "eu"],
            ["ты", "ty", "you (friend)", "tu / você"],
            ["он", "on", "he", "ele"],
            ["она", "a-NA", "she", "ela"],
            ["оно", "a-NO", "it", "ele/ela (coisa)"],
            ["мы", "my", "we", "nós"],
            ["вы", "vy", "you (polite / all)", "o senhor / vocês"],
            ["они", "a-NI", "they", "eles / elas"]
          ]
        },
        examples: [
          { ru: "Мы дома.", tr: "my DO-ma", en: "We're at home." },
          { ru: "Они из России.", tr: "a-NI iz ra-SSI-i", en: "They're from Russia." }
        ]
      },
      {
        title: "No 'am / is / are'",
        titlePt: "Sem 'sou / é / está'",
        text: "Just put the words side by side: «Я студент» = 'I (am a) student'. There are no articles either — no 'a' or 'the'.",
        textPt: "É só juntar as palavras: «Я студент» = 'Eu (sou) estudante'. E também não há artigos — nem 'um' nem 'o'.",
        examples: [
          { ru: "Я студент.", tr: "ya stu-DYENT", en: "I'm a student." },
          { ru: "Она дома.", tr: "a-NA DO-ma", en: "She's at home." },
          { ru: "Мама на кухне.", tr: "MA-ma na KUKH-nye", en: "Mum is in the kitchen." },
          { ru: "Он врач.", tr: "on vrach", en: "He's a doctor." }
        ]
      },
      {
        title: "Это… Кто это? Что это?",
        titlePt: "Это… Кто это? Что это?",
        text: "«Это» means 'this is / that is'. Ask «Кто это?» (who?) about people and animals, and «Что это?» (what?) about things. «Что» sounds like 'shto'.",
        textPt: "«Это» quer dizer 'isto é / isso é'. Pergunte «Кто это?» (quem?) sobre pessoas e animais, e «Что это?» (o quê?) sobre coisas. «Что» soa 'chto'.",
        examples: [
          { ru: "Кто это? — Это мой брат.", tr: "KTO E-ta? — E-ta moy brat", en: "Who's this? — This is my brother." },
          { ru: "Что это? — Это борщ!", tr: "SHTO E-ta? — E-ta borshch", en: "What's this? — It's borscht!" },
          { ru: "Кто это? — Это наш кот.", tr: "KTO E-ta? — E-ta nash kot", en: "Who's this? — It's our cat." }
        ]
      }
    ],
    tip: {
      en: "Don't try to translate 'is': «Она есть дома» is wrong — just say «Она дома». And a pet is a «кто», not a «что»!",
      pt: "Não tente traduzir o 'é/está': «Она есть дома» está errado — diga só «Она дома». E um bichinho de estimação é «кто», não «что»!"
    },
    exercises: [
      { type: "choice", q: "What does «Она дома» mean?", options: ["She's at home.", "She has a home.", "Her home."], answer: "She's at home.",
        explain: "No verb needed: «она» + «дома» = 'she is at home'.", explainPt: "Não precisa de verbo: «она» + «дома» = 'ela está em casa'." },
      { type: "choice", q: "You point at a person in a photo: «___ это?»", options: ["Кто", "Что", "Как"], answer: "Кто",
        explain: "«Кто» is 'who' — for people and animals.", explainPt: "«Кто» é 'quem' — para pessoas e animais." },
      { type: "choice", q: "How do you say 'we'?", options: ["мы", "вы", "они"], answer: "мы",
        explain: "«Мы» = we, «вы» = you (polite/all), «они» = they.", explainPt: "«Мы» = nós, «вы» = o senhor/vocês, «они» = eles." },
      { type: "gap", q: "___ это? — Это борщ. — What's this? — It's borscht.", answer: ["Что"],
        explain: "For things, ask «Что это?».", explainPt: "Para coisas, pergunte «Что это?»." },
      { type: "gap", q: "Это мой брат. ___ врач. — This is my brother. He's a doctor.", answer: ["Он"],
        explain: "«Он» = he.", explainPt: "«Он» = ele." },
      { type: "order", prompt: "Mum and dad are at home.", answer: "Мама и папа дома.",
        explain: "No 'are' in Russian — just «Мама и папа дома».", explainPt: "Sem 'estão' em russo — só «Мама и папа дома»." },
      { type: "order", prompt: "This is my sister, she's a student.", answer: "Это моя сестра, она студентка.",
        explain: "«Студентка» is a female student.", explainPt: "«Студентка» é a estudante (mulher)." },
      { type: "translate", prompt: "I'm a student.", options: ["Я студент.", "Я есть студент.", "Я это студент."], answer: "Я студент.",
        explain: "The present tense of 'to be' simply disappears.", explainPt: "O verbo 'ser' no presente simplesmente desaparece." },
      { type: "listen", say: "Кто это?", options: ["Кто это?", "Что это?", "Как это?"], answer: "Кто это?",
        explain: "You heard «Кто это?» — 'Who is this?'.", explainPt: "Você ouviu «Кто это?» — 'Quem é?'." },
      { type: "match", q: "Match the pronoun to its meaning.", qPt: "Liga o pronome ao significado.",
        pairs: [["я", "I"], ["он", "he"], ["она", "she"], ["мы", "we"], ["они", "they"]],
        explain: "These pronouns start almost every sentence.", explainPt: "Esses pronomes começam quase todas as frases." }
    ]
  },

  // ───────────────────────────── 4. Gender ─────────────────────────────
  {
    id: "ru-gender",
    level: 2, order: 4,
    emoji: "🏷️",
    title: "Noun gender: он, она, оно",
    titleRu: "Род",
    intro: "Like Portuguese, Russian nouns have gender — but there are three, and the ending usually tells you which one.",
    introPt: "Como no português, os substantivos russos têm gênero — mas são três, e a terminação geralmente mostra qual é.",
    sections: [
      {
        title: "Look at the ending",
        titlePt: "Olhe a terminação",
        text: "Consonant → masculine (он). -а / -я → feminine (она). -о / -е → neuter (оно). Words ending in -ь can be either, so learn them with their gender.",
        textPt: "Consoante → masculino (он). -а / -я → feminino (она). -о / -е → neutro (оно). Palavras em -ь podem ser dos dois, então aprenda junto com o gênero.",
        table: {
          head: ["Ending", "Gender", "Examples"],
          rows: [
            ["consonant", "он", "дом, стол, брат"],
            ["-а, -я", "она", "мама, кухня"],
            ["-о, -е", "оно", "окно, море"],
            ["-ь", "он / она", "день (он), ночь (она)"]
          ]
        },
        examples: [
          { ru: "дом", tr: "dom", en: "house (он)" },
          { ru: "кухня", tr: "KUKH-nya", en: "kitchen (она)" },
          { ru: "окно", tr: "ak-NO", en: "window (оно)" },
          { ru: "море", tr: "MO-rye", en: "sea (оно)" },
          { ru: "ночь", tr: "noch", en: "night (она)" }
        ]
      },
      {
        title: "Men are always он",
        titlePt: "Homens são sempre он",
        text: "A few words for men end in -а / -я, like «папа» and «дедушка». They are still masculine — real-life gender wins.",
        textPt: "Algumas palavras para homens terminam em -а / -я, como «папа» e «дедушка». Mesmo assim são masculinas — o gênero real ganha.",
        examples: [
          { ru: "Где папа? — Он на кухне.", tr: "GDYE PA-pa? — on na KUKH-nye", en: "Where's dad? — He's in the kitchen." },
          { ru: "дедушка", tr: "DYE-dush-ka", en: "grandpa (он)" },
          { ru: "дядя", tr: "DYA-dya", en: "uncle (он)" }
        ]
      },
      {
        title: "My: мой, моя, моё",
        titlePt: "Meu / minha: мой, моя, моё",
        text: "'My' changes with the gender of the noun, just like 'meu / minha': «мой» for он, «моя» for она, «моё» for оно.",
        textPt: "'Meu' muda com o gênero do substantivo, como 'meu / minha': «мой» para он, «моя» para она, «моё» para оно.",
        examples: [
          { ru: "мой дом", tr: "moy dom", en: "my house" },
          { ru: "мой папа", tr: "moy PA-pa", en: "my dad" },
          { ru: "моя девушка", tr: "ma-YA DYE-vush-ka", en: "my girlfriend" },
          { ru: "моё сердце", tr: "ma-YO SYER-tse", en: "my heart" }
        ]
      }
    ],
    tip: {
      en: "«Папа» ends in -а but it's «мой папа», never «моя папа». And note «сердце»: the «д» is silent — 'SYER-tse'.",
      pt: "«Папа» termina em -а, mas é «мой папа», nunca «моя папа». E repare em «сердце»: o «д» não se pronuncia — 'SIÉR-tse'."
    },
    exercises: [
      { type: "choice", q: "What gender is «окно»?", options: ["он", "она", "оно"], answer: "оно",
        explain: "Ending -о → neuter (оно).", explainPt: "Terminação -о → neutro (оно)." },
      { type: "choice", q: "«___ мама» — my mum", options: ["мой", "моя", "моё"], answer: "моя",
        explain: "«Мама» is feminine, so «моя».", explainPt: "«Мама» é feminino, então «моя»." },
      { type: "choice", q: "«___ папа» — my dad", options: ["мой", "моя", "моё"], answer: "мой",
        explain: "Dad is a man, so «мой» — even with -а.", explainPt: "Pai é homem, então «мой» — mesmo com -а." },
      { type: "gap", q: "___ сердце — my heart", answer: ["моё", "мое"],
        explain: "«Сердце» ends in -е → neuter → «моё».", explainPt: "«Сердце» termina em -е → neutro → «моё»." },
      { type: "gap", q: "Это ___ дом. — This is my house.", answer: ["мой"],
        explain: "«Дом» ends in a consonant → masculine → «мой».", explainPt: "«Дом» termina em consoante → masculino → «мой»." },
      { type: "order", prompt: "This is my kitchen.", answer: "Это моя кухня.",
        explain: "«Кухня» is feminine, so «моя».", explainPt: "«Кухня» é feminino, então «моя»." },
      { type: "order", prompt: "My dad is at home.", answer: "Мой папа дома.",
        explain: "«Мой папа» + «дома», no verb needed.", explainPt: "«Мой папа» + «дома», sem verbo." },
      { type: "translate", prompt: "My girlfriend is at home.", options: ["Моя девушка дома.", "Мой девушка дома.", "Моё девушка дома."], answer: "Моя девушка дома.",
        explain: "«Девушка» is feminine → «моя».", explainPt: "«Девушка» é feminino → «моя»." },
      { type: "listen", say: "Моя кухня.", options: ["Моя кухня.", "Мой дом.", "Моё окно."], answer: "Моя кухня.",
        explain: "You heard «Моя кухня» — 'my kitchen'.", explainPt: "Você ouviu «Моя кухня» — 'minha cozinha'." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Liga a palavra ao significado.",
        pairs: [["дом", "house"], ["кухня", "kitchen"], ["окно", "window"], ["море", "sea"], ["ночь", "night"]],
        explain: "Say each one with мой / моя / моё to remember its gender.", explainPt: "Diga cada uma com мой / моя / моё para lembrar o gênero." }
    ]
  },

  // ───────────────────────────── 5. Plurals & adjectives ─────────────────────────────
  {
    id: "ru-plurals-adjectives",
    level: 2, order: 5,
    emoji: "🌸",
    title: "Plurals and describing words",
    titleRu: "Красивый дом",
    intro: "Let's make things plural and describe them — perfect for paying compliments to her family!",
    introPt: "Vamos colocar as coisas no plural e descrevê-las — perfeito para fazer elogios à família dela!",
    sections: [
      {
        title: "Plurals: -ы / -и and -а / -я",
        titlePt: "Plural: -ы / -и e -а / -я",
        text: "Masculine and feminine nouns usually take -ы, or -и after к, г, х, ж, ш, ч, щ and for -я / -ь. Neuter -о → -а, -е → -я. Stress often moves, so listen carefully.",
        textPt: "Substantivos masculinos e femininos geralmente ganham -ы, ou -и depois de к, г, х, ж, ш, ч, щ e nas palavras em -я / -ь. Neutros: -о → -а, -е → -я. O acento muitas vezes muda, então ouça com atenção.",
        table: {
          head: ["One", "Many", "Rule"],
          rows: [
            ["стол", "столы", "+ы"],
            ["мама", "мамы", "-а → -ы"],
            ["книга", "книги", "after г → -и"],
            ["неделя", "недели", "-я → -и"],
            ["окно", "окна", "-о → -а"],
            ["море", "моря", "-е → -я"],
            ["дом", "дома", "some он → -а"]
          ]
        },
        examples: [
          { ru: "столы", tr: "sta-LY", en: "tables" },
          { ru: "книги", tr: "KNI-gi", en: "books" },
          { ru: "окна", tr: "OK-na", en: "windows" },
          { ru: "дома", tr: "da-MA", en: "houses" }
        ]
      },
      {
        title: "Adjectives agree",
        titlePt: "Os adjetivos concordam",
        text: "Like 'bonito / bonita / bonitos', a Russian adjective matches its noun: -ый (он), -ая (она), -ое (оно), -ые (plural).",
        textPt: "Como 'bonito / bonita / bonitos', o adjetivo russo concorda com o substantivo: -ый (он), -ая (она), -ое (оно), -ые (plural).",
        table: {
          head: ["", "Ending", "Example"],
          rows: [
            ["он", "-ый", "красивый дом"],
            ["она", "-ая", "красивая девушка"],
            ["оно", "-ое", "красивое платье"],
            ["они", "-ые", "красивые цветы"]
          ]
        },
        examples: [
          { ru: "красивый дом", tr: "kra-SI-vyy dom", en: "a beautiful house" },
          { ru: "красивая девушка", tr: "kra-SI-va-ya DYE-vush-ka", en: "a beautiful girl" },
          { ru: "красивое платье", tr: "kra-SI-va-ye PLAT-ye", en: "a beautiful dress" },
          { ru: "красивые цветы", tr: "kra-SI-vy-ye tsvi-TY", en: "beautiful flowers" }
        ]
      },
      {
        title: "большой, новый, хороший",
        titlePt: "большой, новый, хороший",
        text: "«Большой» (big) is stressed on the ending: -ой, -ая, -ое, -ие. «Новый» (new) works like «красивый». «Хороший» (good) has -ее and -ие because of the «ш».",
        textPt: "«Большой» (grande) tem o acento na terminação: -ой, -ая, -ое, -ие. «Новый» (novo) funciona como «красивый». «Хороший» (bom) tem -ее e -ие por causa do «ш».",
        examples: [
          { ru: "Ты очень красивая!", tr: "ty O-chin' kra-SI-va-ya", en: "You're very beautiful! (to her)" },
          { ru: "У вас большой дом!", tr: "u vas bal-SHOY dom", en: "You have a big house!" },
          { ru: "Это новая машина.", tr: "E-ta NO-va-ya ma-SHI-na", en: "This is a new car." },
          { ru: "Мои родители очень хорошие.", tr: "ma-I ra-DI-ti-li O-chin' ha-RO-shi-ye", en: "My parents are very nice." }
        ]
      }
    ],
    tip: {
      en: "After г, к, х, ж, ш, ч, щ Russians never write «ы» — always «и»: книги, большие, хорошие. And compliment her with «красивая», not «красивый»!",
      pt: "Depois de г, к, х, ж, ш, ч, щ os russos nunca escrevem «ы» — sempre «и»: книги, большие, хорошие. E elogie-a com «красивая», não «красивый»!"
    },
    exercises: [
      { type: "choice", q: "What's the plural of «стол»?", options: ["столы", "столи", "стола"], answer: "столы",
        explain: "Consonant ending → add -ы.", explainPt: "Terminação em consoante → acrescente -ы." },
      { type: "choice", q: "«___ девушка» — a beautiful girl", options: ["красивый", "красивая", "красивое"], answer: "красивая",
        explain: "«Девушка» is feminine → -ая.", explainPt: "«Девушка» é feminino → -ая." },
      { type: "choice", q: "What's the plural of «книга»?", options: ["книги", "книгы", "книгов"], answer: "книги",
        explain: "After «г» write «и», never «ы».", explainPt: "Depois de «г» escreve-se «и», nunca «ы»." },
      { type: "gap", q: "Ты очень ___ (красивый)! — You're very beautiful! (to her)", answer: ["красивая"],
        explain: "Talking to a woman → feminine -ая.", explainPt: "Falando com uma mulher → feminino -ая." },
      { type: "gap", q: "У вас ___ (большой) кухня. — You have a big kitchen.", answer: ["большая"],
        explain: "«Кухня» is feminine → «большая».", explainPt: "«Кухня» é feminino → «большая»." },
      { type: "order", prompt: "You have a beautiful home!", answer: "У вас красивый дом!",
        explain: "«У вас» = 'you have' (polite); «дом» is masculine → «красивый».", explainPt: "«У вас» = 'vocês têm / o senhor tem'; «дом» é masculino → «красивый»." },
      { type: "order", prompt: "My parents are very nice.", answer: "Мои родители очень хорошие.",
        explain: "Plural noun → plural adjective «хорошие».", explainPt: "Substantivo no plural → adjetivo no plural «хорошие»." },
      { type: "translate", prompt: "a big window", options: ["большое окно", "большой окно", "большая окно"], answer: "большое окно",
        explain: "«Окно» is neuter → «большое».", explainPt: "«Окно» é neutro → «большое»." },
      { type: "listen", say: "Красивые цветы!", options: ["Красивые цветы!", "Красивый цвет!", "Красивая девушка!"], answer: "Красивые цветы!",
        explain: "You heard 'Beautiful flowers!' — plural -ые.", explainPt: "Você ouviu 'Que flores lindas!' — plural -ые." },
      { type: "match", q: "Match each word to its plural.", qPt: "Liga cada palavra ao seu plural.",
        pairs: [["стол", "столы"], ["мама", "мамы"], ["окно", "окна"], ["книга", "книги"], ["море", "моря"]],
        explain: "-ы / -и for он and она, -а / -я for оно.", explainPt: "-ы / -и para он e она, -а / -я para оно." }
    ]
  },

  // ───────────────────────────── 6. Questions & negation ─────────────────────────────
  {
    id: "ru-questions",
    level: 2, order: 6,
    emoji: "❓",
    title: "Questions and saying no",
    titleRu: "Где? Когда? Почему?",
    intro: "Ask where, when, why and how much — and learn to say no politely.",
    introPt: "Pergunte onde, quando, por quê e quanto — e aprenda a dizer não com educação.",
    sections: [
      {
        title: "Question words",
        titlePt: "Palavras interrogativas",
        text: "Put the question word first and keep the rest as a normal sentence. «Сколько» is both 'how much' and 'how many'.",
        textPt: "Coloque a palavra interrogativa no início e o resto fica como uma frase normal. «Сколько» é 'quanto' e 'quantos'.",
        table: {
          head: ["Russian", "Sound", "Meaning"],
          rows: [
            ["где?", "gdye", "where?"],
            ["когда?", "kag-DA", "when?"],
            ["почему?", "pa-chi-MU", "why?"],
            ["как?", "kak", "how?"],
            ["сколько?", "SKOL'-ka", "how much / many?"]
          ]
        },
        examples: [
          { ru: "Где мама? — Она на кухне.", tr: "GDYE MA-ma? — a-NA na KUKH-nye", en: "Where's mum? — She's in the kitchen." },
          { ru: "Когда ужин?", tr: "kag-DA U-zhin", en: "When is dinner?" },
          { ru: "Почему ты дома?", tr: "pa-chi-MU ty DO-ma", en: "Why are you at home?" },
          { ru: "Сколько стоит?", tr: "SKOL'-ka STO-it", en: "How much is it?" }
        ]
      },
      {
        title: "Yes/no questions: just your voice",
        titlePt: "Perguntas de sim/não: só a voz",
        text: "Like in Portuguese, the words stay the same — your voice rises on the key word. «Ты дома.» is a statement; «Ты дома?» is a question.",
        textPt: "Como em português, as palavras não mudam — a voz sobe na palavra principal. «Ты дома.» é uma afirmação; «Ты дома?» é uma pergunta.",
        examples: [
          { ru: "Ты дома?", tr: "ty DO-ma", en: "Are you at home?" },
          { ru: "Это твой брат?", tr: "E-ta tvoy brat", en: "Is this your brother?" },
          { ru: "Ты устала?", tr: "ty u-STA-la", en: "Are you tired? (to her)" },
          { ru: "Да, конечно!", tr: "da, ka-NYESH-na", en: "Yes, of course!" }
        ]
      },
      {
        title: "не and нет",
        titlePt: "не e нет",
        text: "«Нет» means 'no' (an answer). «Не» means 'not' and goes right before the word it negates — like 'não' before the verb.",
        textPt: "«Нет» quer dizer 'não' (uma resposta). «Не» é o 'não' dentro da frase e vem logo antes da palavra que nega — como o 'não' antes do verbo.",
        examples: [
          { ru: "Нет, спасибо.", tr: "nyet, spa-SI-ba", en: "No, thank you." },
          { ru: "Я не знаю.", tr: "ya ni ZNA-yu", en: "I don't know." },
          { ru: "Это не мой телефон.", tr: "E-ta ni moy ti-li-FON", en: "This isn't my phone." },
          { ru: "Нет, она не дома.", tr: "nyet, a-NA ni DO-ma", en: "No, she's not at home." }
        ]
      }
    ],
    tip: {
      en: "Don't mix them up: «Я нет знаю» is wrong — inside a sentence it's always «не»: «Я не знаю». And «конечно» is said 'ka-NYESH-na', with ш!",
      pt: "Não confunda: «Я нет знаю» está errado — dentro da frase é sempre «не»: «Я не знаю». E «конечно» se diz 'ka-NIÉCH-na', com ш!"
    },
    exercises: [
      { type: "choice", q: "What does «Где мама?» mean?", options: ["Where's mum?", "When is mum coming?", "Why mum?"], answer: "Where's mum?",
        explain: "«Где» = where.", explainPt: "«Где» = onde." },
      { type: "choice", q: "At the market: 'How much is it?'", options: ["Сколько стоит?", "Как стоит?", "Где стоит?"], answer: "Сколько стоит?",
        explain: "«Сколько» = how much.", explainPt: "«Сколько» = quanto." },
      { type: "choice", q: "«___, спасибо. Я не голоден.» — No, thanks. I'm not hungry.", options: ["Нет", "Не", "Где"], answer: "Нет",
        explain: "As an answer, 'no' is «нет».", explainPt: "Como resposta, 'não' é «нет»." },
      { type: "gap", q: "___ ты живёшь? — Where do you live?", answer: ["Где"],
        explain: "«Где» asks 'where'.", explainPt: "«Где» pergunta 'onde'." },
      { type: "gap", q: "Это ___ мой телефон. — This isn't my phone.", answer: ["не"],
        explain: "'Not' inside a sentence is «не».", explainPt: "O 'não' dentro da frase é «не»." },
      { type: "order", prompt: "Mum, where are my keys?", answer: "Мама, где мои ключи?",
        explain: "Question word «где» + «мои ключи».", explainPt: "Palavra interrogativa «где» + «мои ключи»." },
      { type: "order", prompt: "No, I'm not tired.", answer: "Нет, я не устал.",
        explain: "«Нет» answers; «не» negates «устал».", explainPt: "«Нет» responde; «не» nega «устал»." },
      { type: "translate", prompt: "Are you at home?", options: ["Ты дома?", "Ты есть дома?", "Где ты дома?"], answer: "Ты дома?",
        explain: "Same words as the statement — just a rising voice.", explainPt: "As mesmas palavras da afirmação — só a voz sobe." },
      { type: "listen", say: "Сколько стоит?", options: ["Сколько стоит?", "Когда ужин?", "Почему нет?"], answer: "Сколько стоит?",
        explain: "You heard 'How much is it?'.", explainPt: "Você ouviu 'Quanto custa?'." },
      { type: "match", q: "Match the question word to its meaning.", qPt: "Liga a palavra interrogativa ao significado.",
        pairs: [["где?", "where?"], ["когда?", "when?"], ["почему?", "why?"], ["как?", "how?"], ["сколько?", "how much?"]],
        explain: "With these five you can ask almost anything.", explainPt: "Com essas cinco você pergunta quase tudo." }
    ]
  }

]);
