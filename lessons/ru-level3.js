// Russian course — Level 3 "Everyday Russian"
window.RU_LESSONS = (window.RU_LESSONS || []).concat([

  // ───────────────────────── 1. Present tense, 1st conjugation
  {
    id: "ru-verbs-present-1",
    level: 3, order: 1,
    emoji: "📖",
    title: "Present tense: verbs like читать",
    titleRu: "Настоящее время (1)",
    intro: "Time to make real sentences! Many Russian verbs follow one easy pattern: drop -ть and add the ending for the person.",
    introPt: "Hora de fazer frases de verdade! Muitos verbos russos seguem um padrão fácil: tira-se -ть e junta-se a terminação da pessoa.",
    sections: [
      {
        title: "The pattern: -ю, -ешь, -ет",
        titlePt: "O padrão: -ю, -ешь, -ет",
        text: "Take читать (to read), drop -ть and you get чита-. Then add the ending. Just like Portuguese leio, lês, lê — the ending tells you who.",
        textPt: "Pega em читать (ler), tira -ть e fica чита-. Depois junta a terminação. Como em português leio, lês, lê — a terminação diz quem é.",
        table: {
          head: ["Who", "читать", "Ending"],
          rows: [
            ["я", "читаю", "-ю"],
            ["ты", "читаешь", "-ешь"],
            ["он / она", "читает", "-ет"],
            ["мы", "читаем", "-ем"],
            ["вы", "читаете", "-ете"],
            ["они", "читают", "-ют"]
          ]
        },
        examples: [
          { ru: "Я читаю дома.", tr: "ya chi-TA-yu DO-ma", en: "I read at home." },
          { ru: "Она читает по-русски.", tr: "a-NA chi-TA-yet pa-RUS-ki", en: "She reads in Russian." },
          { ru: "Они читают вместе.", tr: "a-NI chi-TA-yut VMYES-tye", en: "They read together." }
        ]
      },
      {
        title: "Four more everyday verbs",
        titlePt: "Mais quatro verbos do dia a dia",
        text: "работать (to work), знать (to know), делать (to do/make) and понимать (to understand) work exactly the same way.",
        textPt: "работать (trabalhar), знать (saber/conhecer), делать (fazer) e понимать (perceber/entender) funcionam exatamente da mesma maneira.",
        examples: [
          { ru: "Что ты делаешь?", tr: "SHTO ty DYE-la-yesh", en: "What are you doing?" },
          { ru: "Она работает в Ливерпуле.", tr: "a-NA ra-BO-ta-yet v li-vyer-PU-lye", en: "She works in Liverpool." },
          { ru: "Я не понимаю.", tr: "ya nye pa-ni-MA-yu", en: "I don't understand." },
          { ru: "Мы знаем!", tr: "my ZNA-yem", en: "We know!" },
          { ru: "Вы понимаете по-русски?", tr: "vy pa-ni-MA-ye-tye pa-RUS-ki", en: "Do you understand Russian?" }
        ]
      },
      {
        title: "No 'do', no '-ing'",
        titlePt: "Sem 'do' e sem '-ing'",
        text: "Russian has no helper verb for questions: just raise your voice at the end. And one form covers both 'I work' and 'I am working'.",
        textPt: "O russo não tem verbo auxiliar nas perguntas: basta subir a entoação no fim. E uma só forma serve para 'trabalho' e 'estou a trabalhar'.",
        examples: [
          { ru: "Ты работаешь сегодня?", tr: "ty ra-BO-ta-yesh si-VOD-nya", en: "Are you working today?" },
          { ru: "Я делаю ужин.", tr: "ya DYE-la-yu U-zhin", en: "I'm making dinner." }
        ]
      }
    ],
    tip: {
      en: "The ты-form always ends in -шь, with a soft sign: читаешь, делаешь. Don't drop the ь when you write it!",
      pt: "A forma de ты termina sempre em -шь, com sinal brando: читаешь, делаешь. Não te esqueças do ь quando escreves!"
    },
    exercises: [
      { type: "choice", q: "Она ___ в Ливерпуле.", options: ["работает", "работаю", "работают"], answer: "работает",
        explain: "For он/она the ending is -ет.", explainPt: "Para он/она a terminação é -ет." },
      { type: "choice", q: "Ты ___ по-русски?", options: ["понимаешь", "понимает", "понимаю"], answer: "понимаешь",
        explain: "For ты the ending is -ешь.", explainPt: "Para ты a terminação é -ешь." },
      { type: "choice", q: "What does «Что ты делаешь?» mean?", options: ["What are you doing?", "Where do you work?", "What do you know?"], answer: "What are you doing?",
        explain: "Что = what, делаешь = you do / are doing.", explainPt: "Что = o quê, делаешь = fazes / estás a fazer." },
      { type: "gap", q: "Я ___ (читать) дома. — I read at home.", answer: ["читаю"],
        explain: "For я the ending is -ю: чита + ю.", explainPt: "Para я a terminação é -ю: чита + ю." },
      { type: "gap", q: "Мы ___ (знать). — We know.", answer: ["знаем"],
        explain: "For мы the ending is -ем: зна + ем.", explainPt: "Para мы a terminação é -ем: зна + ем." },
      { type: "order", prompt: "We work at home.", answer: "Мы работаем дома.",
        explain: "Мы работаем = we work; дома = at home.", explainPt: "Мы работаем = trabalhamos; дома = em casa." },
      { type: "order", prompt: "I understand Russian badly.", answer: "Я плохо понимаю по-русски.",
        explain: "плохо (badly) usually goes before the verb.", explainPt: "плохо (mal) costuma ir antes do verbo." },
      { type: "translate", prompt: "They work a lot.", options: ["Они много работают.", "Они много работает.", "Они много работаем."], answer: "Они много работают.",
        explain: "For они the ending is -ют.", explainPt: "Para они a terminação é -ют." },
      { type: "listen", say: "Вы понимаете?", options: ["Вы понимаете?", "Ты понимаешь?", "Мы понимаем?"], answer: "Вы понимаете?",
        explain: "Вы понимаете? = Do you understand? (polite or plural).", explainPt: "Вы понимаете? = Percebe? / Percebem? (formal ou plural)." },
      { type: "match", q: "Match the pronoun to the verb form.", qPt: "Liga o pronome à forma do verbo.",
        pairs: [["я", "читаю"], ["ты", "читаешь"], ["она", "читает"], ["мы", "читаем"], ["они", "читают"]],
        explain: "One stem, six endings: -ю, -ешь, -ет, -ем, -ете, -ют.", explainPt: "Um radical, seis terminações: -ю, -ешь, -ет, -ем, -ете, -ют." }
    ]
  },

  // ───────────────────────── 2. Present tense, 2nd conjugation
  {
    id: "ru-verbs-present-2",
    level: 3, order: 2,
    emoji: "💬",
    title: "Present tense: verbs like говорить",
    titleRu: "Настоящее время (2)",
    intro: "The second big group of verbs uses -ишь, -ит, -ят. It includes the most important verb of all: любить, to love.",
    introPt: "O segundo grande grupo de verbos usa -ишь, -ит, -ят. Inclui o verbo mais importante de todos: любить, amar.",
    sections: [
      {
        title: "The pattern: -ю, -ишь, -ит",
        titlePt: "O padrão: -ю, -ишь, -ит",
        text: "For говорить (to speak), drop -ить and you get говор-. The endings use и instead of е, and they end in -ят.",
        textPt: "Em говорить (falar), tira-se -ить e fica говор-. As terminações usam и em vez de е, e no plural acabam em -ят.",
        table: {
          head: ["Who", "говорить", "Ending"],
          rows: [
            ["я", "говорю", "-ю"],
            ["ты", "говоришь", "-ишь"],
            ["он / она", "говорит", "-ит"],
            ["мы", "говорим", "-им"],
            ["вы", "говорите", "-ите"],
            ["они", "говорят", "-ят"]
          ]
        },
        examples: [
          { ru: "Я говорю по-португальски.", tr: "ya ga-va-RYU pa-par-tu-GAL'-ski", en: "I speak Portuguese." },
          { ru: "Она говорит очень быстро.", tr: "a-NA ga-va-RIT O-chin' BYS-tra", en: "She speaks very fast." },
          { ru: "Вы говорите по-английски?", tr: "vy ga-va-RI-tye pa-an-GLIY-ski", en: "Do you speak English?" }
        ]
      },
      {
        title: "любить — with a surprise л",
        titlePt: "любить — com um л surpresa",
        text: "любить (to love, to like) adds an extra л only in the я-form: люблю. All the other forms are regular: любишь, любит…",
        textPt: "любить (amar, gostar) ganha um л extra só na forma de я: люблю. As outras formas são regulares: любишь, любит…",
        examples: [
          { ru: "Я люблю тебя.", tr: "ya lyu-BLYU ti-BYA", en: "I love you." },
          { ru: "Ты любишь борщ?", tr: "ty LYU-bish BORSHCH", en: "Do you like borscht?" },
          { ru: "Я люблю готовить.", tr: "ya lyu-BLYU ga-TO-vit'", en: "I love cooking." },
          { ru: "Её мама любит чай.", tr: "ye-YO MA-ma LYU-bit CHAY", en: "Her mum loves tea." }
        ]
      },
      {
        title: "смотреть and звонить",
        titlePt: "смотреть e звонить",
        text: "смотреть (to watch) and звонить (to call, phone) follow the same pattern: смотрю, смотришь; звоню, звонишь.",
        textPt: "смотреть (ver, assistir) e звонить (ligar, telefonar) seguem o mesmo padrão: смотрю, смотришь; звоню, звонишь.",
        examples: [
          { ru: "Мы смотрим фильм.", tr: "my SMOT-rim FIL'M", en: "We're watching a film." },
          { ru: "Я звоню маме.", tr: "ya zva-NYU MA-mye", en: "I'm calling Mum." },
          { ru: "Её сестра звонит каждый день.", tr: "ye-YO sis-TRA zva-NIT KAZH-dy DYEN'", en: "Her sister calls every day." }
        ]
      }
    ],
    tip: {
      en: "The extra л lives only in люблю. Say любишь, not «люблишь». And the plural ends in -ят here: говорят, not «говорют».",
      pt: "O л extra só existe em люблю. Diz-se любишь, não «люблишь». E aqui o plural acaba em -ят: говорят, não «говорют»."
    },
    exercises: [
      { type: "choice", q: "Я ___ тебя.", options: ["люблю", "любю", "любит"], answer: "люблю",
        explain: "любить adds л in the я-form: люблю.", explainPt: "любить ganha um л na forma de я: люблю." },
      { type: "choice", q: "Они ___ по-английски.", options: ["говорят", "говорют", "говорит"], answer: "говорят",
        explain: "In this group они takes -ят.", explainPt: "Neste grupo, они leva -ят." },
      { type: "choice", q: "Ты ___ фильм?", options: ["смотришь", "смотреешь", "смотрит"], answer: "смотришь",
        explain: "смотреть drops -еть: смотр + ишь.", explainPt: "смотреть perde -еть: смотр + ишь." },
      { type: "gap", q: "Она ___ (говорить) по-русски. — She speaks Russian.", answer: ["говорит"],
        explain: "For она the ending is -ит.", explainPt: "Para она a terminação é -ит." },
      { type: "gap", q: "Я ___ (звонить) маме. — I'm calling Mum.", answer: ["звоню"],
        explain: "For я the ending is -ю: звон + ю.", explainPt: "Para я a terminação é -ю: звон + ю." },
      { type: "order", prompt: "We are watching a film.", answer: "Мы смотрим фильм.",
        explain: "Мы смотрим = we watch / are watching.", explainPt: "Мы смотрим = vemos / estamos a ver." },
      { type: "order", prompt: "I love you very much.", answer: "Я тебя очень люблю.", alt: ["Я очень тебя люблю.", "Я очень люблю тебя."],
        explain: "Russians very often put тебя before the verb.", explainPt: "Os russos põem muitas vezes тебя antes do verbo." },
      { type: "translate", prompt: "Do you speak English? (polite)", options: ["Вы говорите по-английски?", "Вы говорите по-английский?", "Вы говорят по-английски?"], answer: "Вы говорите по-английски?",
        explain: "вы takes -ите, and 'in English' is по-английски.", explainPt: "вы leva -ите, e 'em inglês' é по-английски." },
      { type: "listen", say: "Я люблю готовить.", options: ["Я люблю готовить.", "Я люблю говорить.", "Я люблю смотреть."], answer: "Я люблю готовить.",
        explain: "готовить = to cook.", explainPt: "готовить = cozinhar." },
      { type: "match", q: "Match the verb to its meaning.", qPt: "Liga o verbo ao significado.",
        pairs: [["говорить", "to speak"], ["любить", "to love"], ["смотреть", "to watch"], ["звонить", "to call"], ["готовить", "to cook"]],
        explain: "All five use the -ишь, -ит pattern.", explainPt: "Os cinco usam o padrão -ишь, -ит." }
    ]
  },

  // ───────────────────────── 3. Numbers
  {
    id: "ru-numbers",
    level: 3, order: 3,
    emoji: "🔢",
    title: "Numbers and prices",
    titleRu: "Числа",
    intro: "Count, pay and ask the price. Numbers come up everywhere: phone numbers, ages, the market.",
    introPt: "Contar, pagar e perguntar o preço. Os números aparecem em todo o lado: telefones, idades, o mercado.",
    sections: [
      {
        title: "0 to 10",
        titlePt: "De 0 a 10",
        text: "Learn these first: everything else is built from them.",
        textPt: "Aprende estes primeiro: todos os outros são feitos a partir deles.",
        table: {
          head: ["#", "Russian", "Sound"],
          rows: [
            ["0", "ноль", "NOL'"],
            ["1", "один", "a-DIN"],
            ["2", "два", "DVA"],
            ["3", "три", "TRI"],
            ["4", "четыре", "chi-TY-rye"],
            ["5", "пять", "PYAT'"],
            ["6", "шесть", "SHEST'"],
            ["7", "семь", "SYEM'"],
            ["8", "восемь", "VO-sim'"],
            ["9", "девять", "DYE-vit'"],
            ["10", "десять", "DYE-sit'"]
          ]
        },
        examples: [
          { ru: "Один, два, три!", tr: "a-DIN, DVA, TRI", en: "One, two, three!" },
          { ru: "Мне тридцать лет.", tr: "mnye TRI-tsat' LYET", en: "I'm thirty (years old)." }
        ]
      },
      {
        title: "11 to 20, and tens to 100",
        titlePt: "De 11 a 20, e as dezenas até 100",
        text: "11–19 add -надцать ('on ten'): одиннадцать, двенадцать… Most tens add -дцать or -десят. Two rebels: сорок (40) and девяносто (90).",
        textPt: "De 11 a 19 junta-se -надцать ('sobre dez'): одиннадцать, двенадцать… A maioria das dezenas junta -дцать ou -десят. Dois rebeldes: сорок (40) e девяносто (90).",
        table: {
          head: ["#", "Russian", "#", "Russian"],
          rows: [
            ["11", "одиннадцать", "20", "двадцать"],
            ["12", "двенадцать", "30", "тридцать"],
            ["13", "тринадцать", "40", "сорок"],
            ["14", "четырнадцать", "50", "пятьдесят"],
            ["15", "пятнадцать", "60", "шестьдесят"],
            ["16", "шестнадцать", "70", "семьдесят"],
            ["17", "семнадцать", "80", "восемьдесят"],
            ["18", "восемнадцать", "90", "девяносто"],
            ["19", "девятнадцать", "100", "сто"]
          ]
        },
        examples: [
          { ru: "двадцать пять", tr: "DVA-tsat' PYAT'", en: "twenty-five" },
          { ru: "сорок два", tr: "SO-rak DVA", en: "forty-two" },
          { ru: "сто", tr: "STO", en: "one hundred" }
        ]
      },
      {
        title: "Сколько стоит? — How much is it?",
        titlePt: "Сколько стоит? — Quanto custa?",
        text: "1 and 2 have gender forms: один брат / одна сестра, два брата / две сестры. After numbers the noun changes too: just recognise 1 рубль, 2–4 рубля, 5–20 рублей.",
        textPt: "1 e 2 têm formas de género: один брат / одна сестра, два брата / две сестры. Depois dos números o nome também muda: basta reconhecer 1 рубль, 2–4 рубля, 5–20 рублей.",
        examples: [
          { ru: "Сколько стоит кофе?", tr: "SKOL'-ka STO-it KO-fe", en: "How much is the coffee?" },
          { ru: "Сто рублей.", tr: "STO rub-LYEY", en: "A hundred roubles." },
          { ru: "Два рубля.", tr: "DVA rub-LYA", en: "Two roubles." },
          { ru: "У неё две сестры.", tr: "u ni-YO DVYE sis-TRY", en: "She has two sisters." }
        ]
      }
    ],
    tip: {
      en: "Forty is сорок — not «четыредцать»! And watch the ending after numbers: 2 рубля but 5 рублей. Don't worry, just recognise it for now.",
      pt: "Quarenta é сорок — não «четыредцать»! E atenção à terminação depois dos números: 2 рубля mas 5 рублей. Por agora, basta reconhecer."
    },
    exercises: [
      { type: "choice", q: "Which one is 40?", options: ["сорок", "четыредцать", "четырнадцать"], answer: "сорок",
        explain: "40 is the rebel сорок; четырнадцать is 14.", explainPt: "40 é o rebelde сорок; четырнадцать é 14." },
      { type: "choice", q: "Two sisters: ___ сестры.", options: ["две", "два", "один"], answer: "две",
        explain: "сестра is feminine, so 2 is две.", explainPt: "сестра é feminino, por isso 2 é две." },
      { type: "choice", q: "How do you say «5 roubles»?", options: ["пять рублей", "пять рубля", "пять рубль"], answer: "пять рублей",
        explain: "From 5 to 20 it is рублей.", explainPt: "De 5 a 20 diz-se рублей." },
      { type: "gap", q: "Сколько ___? — How much does it cost?", answer: ["стоит"],
        explain: "стоит = it costs.", explainPt: "стоит = custa." },
      { type: "gap", q: "Семь, восемь, ___, десять.", answer: ["девять"],
        explain: "9 is девять.", explainPt: "9 é девять." },
      { type: "order", prompt: "How much is the coffee?", answer: "Сколько стоит кофе?",
        explain: "Сколько стоит…? is the price question.", explainPt: "Сколько стоит…? é a pergunta do preço." },
      { type: "order", prompt: "It costs a hundred roubles.", answer: "Это стоит сто рублей.",
        explain: "сто = 100, and after 100 it is рублей.", explainPt: "сто = 100, e depois de 100 diz-se рублей." },
      { type: "translate", prompt: "Two roubles.", options: ["Два рубля.", "Два рублей.", "Две рубля."], answer: "Два рубля.",
        explain: "рубль is masculine (два), and 2–4 take рубля.", explainPt: "рубль é masculino (два), e 2–4 levam рубля." },
      { type: "listen", say: "Двадцать.", options: ["Двадцать.", "Двенадцать.", "Тридцать."], answer: "Двадцать.",
        explain: "Двадцать = 20; двенадцать = 12.", explainPt: "Двадцать = 20; двенадцать = 12." },
      { type: "match", q: "Match the word to the number.", qPt: "Liga a palavra ao número.",
        pairs: [["три", "3"], ["семь", "7"], ["десять", "10"], ["сорок", "40"], ["сто", "100"]],
        explain: "Say them aloud as you match them.", explainPt: "Diz cada um em voz alta enquanto ligas." }
    ]
  },

  // ───────────────────────── 4. Prepositional
  {
    id: "ru-prepositional",
    level: 3, order: 4,
    emoji: "📍",
    title: "Where? в / на + place",
    titleRu: "Где?",
    intro: "To say where someone is, Russian uses в or на and changes the ending of the place, usually to -е.",
    introPt: "Para dizer onde alguém está, o russo usa в ou на e muda a terminação do lugar, normalmente para -е.",
    sections: [
      {
        title: "Где? — the -е ending",
        titlePt: "Где? — a terminação -е",
        text: "After в (in) or на (on/at), most nouns end in -е: add it to a consonant, or swap -а / -я / -ь for -е.",
        textPt: "Depois de в (em, dentro) ou на (em, sobre), a maioria dos nomes acaba em -е: junta-se a uma consoante, ou troca-se -а / -я / -ь por -е.",
        table: {
          head: ["Place", "Where?"],
          rows: [
            ["Москва", "в Москве"],
            ["Лондон", "в Лондоне"],
            ["Ливерпуль", "в Ливерпуле"],
            ["квартира", "в квартире"],
            ["работа", "на работе"]
          ]
        },
        examples: [
          { ru: "Где ты?", tr: "GDYE ty", en: "Where are you?" },
          { ru: "Мы живём в Ливерпуле.", tr: "my zhi-VYOM v li-vyer-PU-lye", en: "We live in Liverpool." },
          { ru: "Её сестра живёт в Москве.", tr: "ye-YO sis-TRA zhi-VYOT v mask-VYE", en: "Her sister lives in Moscow." }
        ]
      },
      {
        title: "в or на? And дома",
        titlePt: "в ou на? E дома",
        text: "в is 'inside' (a city, a flat, a shop). на is for some fixed places and events: на работе, на кухне, на улице, на концерте. 'At home' is just дома.",
        textPt: "в é 'dentro' (uma cidade, um apartamento, uma loja). на usa-se com certos lugares e eventos: на работе, на кухне, на улице, на концерте. 'Em casa' é só дома.",
        examples: [
          { ru: "Я на работе.", tr: "ya na ra-BO-tye", en: "I'm at work." },
          { ru: "Мама на кухне.", tr: "MA-ma na KUKH-nye", en: "Mum is in the kitchen." },
          { ru: "Она дома.", tr: "a-NA DO-ma", en: "She's at home." },
          { ru: "Мы в квартире.", tr: "my f kvar-TI-rye", en: "We're in the flat." }
        ]
      },
      {
        title: "о ком? о чём? — talking about",
        titlePt: "о ком? о чём? — falar sobre",
        text: "о (about) uses the same -е ending. With pronouns: о тебе (about you), обо мне (about me).",
        textPt: "о (sobre) usa a mesma terminação -е. Com pronomes: о тебе (sobre ti), обо мне (sobre mim).",
        examples: [
          { ru: "Я думаю о тебе.", tr: "ya DU-ma-yu a ti-BYE", en: "I'm thinking about you." },
          { ru: "Мы говорим о Москве.", tr: "my ga-va-RIM a mask-VYE", en: "We're talking about Moscow." },
          { ru: "Она говорит обо мне?", tr: "a-NA ga-va-RIT a-ba MNYE", en: "Is she talking about me?" }
        ]
      }
    ],
    tip: {
      en: "'At home' is дома, never «в доме». And the kitchen takes на: на кухне, even though you are inside it!",
      pt: "'Em casa' é дома, nunca «в доме». E a cozinha leva на: на кухне, mesmo estando lá dentro!"
    },
    exercises: [
      { type: "choice", q: "Её сестра живёт в ___.", options: ["Москве", "Москва", "Москву"], answer: "Москве",
        explain: "After в for 'where', Москва becomes Москве.", explainPt: "Depois de в para 'onde', Москва passa a Москве." },
      { type: "choice", q: "Я ___ работе.", options: ["на", "в", "о"], answer: "на",
        explain: "работа takes на: на работе.", explainPt: "работа leva на: на работе." },
      { type: "choice", q: "How do you say «at home»?", options: ["дома", "в доме", "на доме"], answer: "дома",
        explain: "дома means 'at home' on its own.", explainPt: "дома sozinho quer dizer 'em casa'." },
      { type: "gap", q: "Мы живём в ___ (Ливерпуль). — We live in Liverpool.", answer: ["Ливерпуле"],
        explain: "Swap ь for -е: Ливерпуле.", explainPt: "Troca-se ь por -е: Ливерпуле." },
      { type: "gap", q: "Мама на ___ (кухня). — Mum is in the kitchen.", answer: ["кухне"],
        explain: "Swap -я for -е: кухне.", explainPt: "Troca-se -я por -е: кухне." },
      { type: "order", prompt: "My girlfriend is at work.", answer: "Моя девушка на работе.",
        explain: "No 'is' in Russian: just на работе.", explainPt: "Em russo não há 'está': só на работе." },
      { type: "order", prompt: "We're talking about Moscow.", answer: "Мы говорим о Москве.",
        explain: "о + Москве = about Moscow.", explainPt: "о + Москве = sobre Moscovo." },
      { type: "translate", prompt: "I'm thinking about you.", options: ["Я думаю о тебе.", "Я думаю о ты.", "Я думаю на тебе."], answer: "Я думаю о тебе.",
        explain: "After о, ты becomes тебе.", explainPt: "Depois de о, ты passa a тебе." },
      { type: "listen", say: "Я дома.", options: ["Я дома.", "Я на работе.", "Я в Москве."], answer: "Я дома.",
        explain: "Я дома = I'm at home.", explainPt: "Я дома = Estou em casa." },
      { type: "match", q: "Match the place to 'where?'.", qPt: "Liga o lugar ao 'onde?'.",
        pairs: [["Москва", "в Москве"], ["работа", "на работе"], ["кухня", "на кухне"], ["квартира", "в квартире"], ["дом", "дома"]],
        explain: "Mostly -е; дома is the special one.", explainPt: "Quase sempre -е; дома é o caso especial." }
    ]
  },

  // ───────────────────────── 5. Accusative
  {
    id: "ru-accusative",
    level: 3, order: 5,
    emoji: "❤️",
    title: "I love you: direct objects",
    titleRu: "Кого? Что?",
    intro: "When someone or something receives the action, Russian changes its ending. That's why it's я люблю тебя, not «я люблю ты».",
    introPt: "Quando alguém ou algo recebe a ação, o russo muda a terminação. É por isso que se diz я люблю тебя, e não «я люблю ты».",
    sections: [
      {
        title: "-а → -у, -я → -ю",
        titlePt: "-а → -у, -я → -ю",
        text: "Feminine nouns in -а / -я change to -у / -ю. Masculine things and words like кофе stay the same.",
        textPt: "Os nomes femininos em -а / -я mudam para -у / -ю. As coisas masculinas e palavras como кофе ficam iguais.",
        table: {
          head: ["Word", "Object"],
          rows: [
            ["мама", "маму"],
            ["сестра", "сестру"],
            ["вода", "воду"],
            ["Таня", "Таню"],
            ["чай / кофе", "чай / кофе"]
          ]
        },
        examples: [
          { ru: "Я вижу маму.", tr: "ya VI-zhu MA-mu", en: "I see Mum." },
          { ru: "Я хочу кофе.", tr: "ya kha-CHU KO-fe", en: "I want a coffee." },
          { ru: "Можно воду, пожалуйста?", tr: "MOZH-na VO-du, pa-ZHA-lus-ta", en: "Can I have water, please?" }
        ]
      },
      {
        title: "меня, тебя, её…",
        titlePt: "меня, тебя, её…",
        text: "Pronouns have their own object forms — like Portuguese eu → me, tu → te.",
        textPt: "Os pronomes têm formas próprias de complemento — como em português eu → me, tu → te.",
        table: {
          head: ["Who", "Object", "Sound"],
          rows: [
            ["я", "меня", "mi-NYA"],
            ["ты", "тебя", "ti-BYA"],
            ["он", "его", "ye-VO"],
            ["она", "её", "ye-YO"],
            ["мы", "нас", "NAS"],
            ["вы", "вас", "VAS"],
            ["они", "их", "IKH"]
          ]
        },
        examples: [
          { ru: "Я люблю тебя.", tr: "ya lyu-BLYU ti-BYA", en: "I love you." },
          { ru: "Ты любишь меня?", tr: "ty LYU-bish mi-NYA", en: "Do you love me?" },
          { ru: "Мы ждём её.", tr: "my ZHDYOM ye-YO", en: "We're waiting for her." }
        ]
      },
      {
        title: "Word order is free",
        titlePt: "A ordem das palavras é livre",
        text: "Because the ending shows who is who, the order can move. Я тебя люблю is the most romantic way to say it!",
        textPt: "Como a terminação mostra quem é quem, a ordem pode mudar. Я тебя люблю é a forma mais romântica de dizer!",
        examples: [
          { ru: "Я тебя люблю.", tr: "ya ti-BYA lyu-BLYU", en: "I love you." },
          { ru: "Маму я вижу каждый день.", tr: "MA-mu ya VI-zhu KAZH-dy DYEN'", en: "Mum, I see every day." }
        ]
      }
    ],
    tip: {
      en: "его is said 'ye-VO' — the г sounds like v here. And её can mean 'her' (object) or 'her' (possessive): я вижу её, её сестра.",
      pt: "его lê-se 'ye-VO' — aqui o г soa como v. E её tanto é 'a ela' como 'dela': я вижу её, её сестра."
    },
    exercises: [
      { type: "choice", q: "Я вижу ___. — I see Mum.", options: ["маму", "мама", "маме"], answer: "маму",
        explain: "Object form: мама → маму.", explainPt: "Forma de complemento: мама → маму." },
      { type: "choice", q: "Ты любишь ___? — Do you love me?", options: ["меня", "я", "мне"], answer: "меня",
        explain: "я → меня as an object.", explainPt: "я → меня como complemento." },
      { type: "choice", q: "Я хочу ___. — I want water.", options: ["воду", "вода", "водой"], answer: "воду",
        explain: "вода → воду: -а becomes -у.", explainPt: "вода → воду: -а passa a -у." },
      { type: "gap", q: "Я люблю ___ (ты). — I love you.", answer: ["тебя"],
        explain: "ты → тебя as an object.", explainPt: "ты → тебя como complemento." },
      { type: "gap", q: "Мы ждём ___ (она). — We're waiting for her.", answer: ["её", "ее"],
        explain: "она → её as an object.", explainPt: "она → её como complemento." },
      { type: "order", prompt: "I love you.", answer: "Я тебя люблю.", alt: ["Я люблю тебя."],
        explain: "Я тебя люблю is the most common, warm way to say it.", explainPt: "Я тебя люблю é a forma mais comum e carinhosa de o dizer." },
      { type: "order", prompt: "Her sister wants a coffee.", answer: "Её сестра хочет кофе.",
        explain: "кофе never changes its ending.", explainPt: "кофе nunca muda a terminação." },
      { type: "translate", prompt: "I see them.", options: ["Я вижу их.", "Я вижу они.", "Я вижу им."], answer: "Я вижу их.",
        explain: "они → их as an object.", explainPt: "они → их como complemento." },
      { type: "listen", say: "Я хочу воду.", options: ["Я хочу воду.", "Я хочу кофе.", "Я хочу чай."], answer: "Я хочу воду.",
        explain: "воду = water (as an object).", explainPt: "воду = água (como complemento)." },
      { type: "match", q: "Match the pronoun to its object form.", qPt: "Liga o pronome à forma de complemento.",
        pairs: [["я", "меня"], ["ты", "тебя"], ["он", "его"], ["мы", "нас"], ["они", "их"]],
        explain: "Object forms: меня, тебя, его, её, нас, вас, их.", explainPt: "Formas de complemento: меня, тебя, его, её, нас, вас, их." }
    ]
  },

  // ───────────────────────── 6. Past tense
  {
    id: "ru-past",
    level: 3, order: 6,
    emoji: "⏪",
    title: "Past tense: я был, я была",
    titleRu: "Прошедшее время",
    intro: "Good news: the Russian past is easy! No person endings — just -л, -ла, -ло or -ли, depending on gender and number.",
    introPt: "Boa notícia: o passado russo é fácil! Não há terminações de pessoa — só -л, -ла, -ло ou -ли, conforme o género e o número.",
    sections: [
      {
        title: "Drop -ть, add -л",
        titlePt: "Tira -ть, junta -л",
        text: "Take the infinitive, drop -ть and add -л (man), -ла (woman), -ло (it) or -ли (plural, and вы).",
        textPt: "Pega no infinitivo, tira -ть e junta -л (homem), -ла (mulher), -ло (neutro) ou -ли (plural, e вы).",
        table: {
          head: ["Who", "читать", "быть"],
          rows: [
            ["он, я (man)", "читал", "был"],
            ["она, я (woman)", "читала", "была"],
            ["оно", "читало", "было"],
            ["мы, вы, они", "читали", "были"]
          ]
        },
        examples: [
          { ru: "Он читал.", tr: "ON chi-TAL", en: "He was reading." },
          { ru: "Она читала.", tr: "a-NA chi-TA-la", en: "She was reading." },
          { ru: "Мы работали.", tr: "my ra-BO-ta-li", en: "We worked." }
        ]
      },
      {
        title: "Your gender shows",
        titlePt: "O teu género aparece",
        text: "With я and ты, the past shows if the person is a man or a woman. You say я был; your partner says я была.",
        textPt: "Com я e ты, o passado mostra se a pessoa é homem ou mulher. Tu dizes я был; a tua namorada diz я была.",
        examples: [
          { ru: "Я был в Москве.", tr: "ya BYL v mask-VYE", en: "I was in Moscow. (man)" },
          { ru: "Я была дома.", tr: "ya by-LA DO-ma", en: "I was at home. (woman)" },
          { ru: "Где ты была?", tr: "GDYE ty by-LA", en: "Where were you? (to a woman)" },
          { ru: "Вчера мы были на концерте.", tr: "fchi-RA my BY-li na kan-TSER-tye", en: "Yesterday we were at a concert." }
        ]
      },
      {
        title: "было: how it was",
        titlePt: "было: como foi",
        text: "To describe how something was, use было + an adverb: было интересно, было вкусно, было холодно.",
        textPt: "Para descrever como foi, usa-se было + advérbio: было интересно, было вкусно, было холодно.",
        examples: [
          { ru: "Было очень вкусно!", tr: "BY-la O-chin' FKUS-na", en: "It was really tasty!" },
          { ru: "Было интересно.", tr: "BY-la in-tye-RYES-na", en: "It was interesting." },
          { ru: "Вчера было холодно.", tr: "fchi-RA BY-la KHO-lad-na", en: "Yesterday it was cold." }
        ]
      }
    ],
    tip: {
      en: "Watch the stress in быть: был, была (by-LA), было (BY-la), были (BY-li). And always say вы были, even to one person.",
      pt: "Atenção ao acento em быть: был, была (by-LA), было (BY-la), были (BY-li). E diz-se sempre вы были, mesmo para uma só pessoa."
    },
    exercises: [
      { type: "choice", q: "(A man says) Вчера я ___ дома.", options: ["был", "была", "были"], answer: "был",
        explain: "A man uses был.", explainPt: "Um homem usa был." },
      { type: "choice", q: "Она ___ по-русски.", options: ["говорила", "говорил", "говорили"], answer: "говорила",
        explain: "она takes -ла.", explainPt: "она leva -ла." },
      { type: "choice", q: "Мы ___ фильм.", options: ["смотрели", "смотрел", "смотрела"], answer: "смотрели",
        explain: "мы takes -ли.", explainPt: "мы leva -ли." },
      { type: "gap", q: "(Your partner says) Я ___ (быть) на работе.", answer: ["была"],
        explain: "A woman says я была.", explainPt: "Uma mulher diz я была." },
      { type: "gap", q: "Вчера мы ___ (готовить) борщ. — Yesterday we cooked borscht.", answer: ["готовили"],
        explain: "готови + ли for мы.", explainPt: "готови + ли para мы." },
      { type: "order", prompt: "Yesterday I was at home. (man)", answer: "Вчера я был дома.",
        explain: "вчера can go at the start or near the verb.", explainPt: "вчера pode ir no início ou perto do verbo." },
      { type: "order", prompt: "It was really tasty!", answer: "Было очень вкусно!",
        explain: "было + adverb describes how it was.", explainPt: "было + advérbio descreve como foi." },
      { type: "translate", prompt: "She was in Moscow.", options: ["Она была в Москве.", "Она был в Москве.", "Она были в Москве."], answer: "Она была в Москве.",
        explain: "она → была.", explainPt: "она → была." },
      { type: "listen", say: "Было интересно.", options: ["Было интересно.", "Было вкусно.", "Было холодно."], answer: "Было интересно.",
        explain: "интересно = interesting.", explainPt: "интересно = interessante." },
      { type: "match", q: "Match the pronoun to the past of быть.", qPt: "Liga o pronome ao passado de быть.",
        pairs: [["он", "был"], ["она", "была"], ["оно", "было"], ["они", "были"]],
        explain: "-л, -ла, -ло, -ли.", explainPt: "-л, -ла, -ло, -ли." }
    ]
  },

  // ───────────────────────── 7. Family and home
  {
    id: "ru-family-home",
    level: 3, order: 7,
    emoji: "🏠",
    title: "Family and home",
    titleRu: "Семья и дом",
    intro: "Talk about the people you love and the place you live. Perfect for dinner with her family!",
    introPt: "Fala das pessoas de quem gostas e do sítio onde vives. Perfeito para um jantar com a família dela!",
    sections: [
      {
        title: "У меня есть… — I have",
        titlePt: "У меня есть… — Eu tenho",
        text: "Russian doesn't use a verb 'to have'. It says 'by me there is': у меня есть. After у, он/она/они add н: у него, у неё, у них.",
        textPt: "O russo não usa um verbo 'ter'. Diz 'junto de mim há': у меня есть. Depois de у, он/она/они ganham н: у него, у неё, у них.",
        table: {
          head: ["Who", "has"],
          rows: [
            ["я", "у меня есть"],
            ["ты", "у тебя есть"],
            ["он", "у него есть"],
            ["она", "у неё есть"],
            ["мы", "у нас есть"],
            ["они", "у них есть"]
          ]
        },
        examples: [
          { ru: "У меня есть брат.", tr: "u mi-NYA YEST' BRAT", en: "I have a brother." },
          { ru: "У неё есть сестра.", tr: "u ni-YO YEST' sis-TRA", en: "She has a sister." },
          { ru: "У тебя есть время?", tr: "u ti-BYA YEST' VRYE-mya", en: "Do you have time?" }
        ]
      },
      {
        title: "Family — семья",
        titlePt: "Família — семья",
        text: "The key words: мама, папа, родители (parents), муж (husband), жена (wife), брат, сестра, сын (son), дочь (daughter).",
        textPt: "As palavras-chave: мама, папа, родители (pais), муж (marido), жена (mulher/esposa), брат, сестра, сын (filho), дочь (filha).",
        examples: [
          { ru: "Её родители живут в Москве.", tr: "ye-YO ra-DI-tye-li zhi-VUT v mask-VYE", en: "Her parents live in Moscow." },
          { ru: "Это моя жена.", tr: "E-ta ma-YA zhi-NA", en: "This is my wife." },
          { ru: "У её сестры есть муж и сын.", tr: "u ye-YO sis-TRY YEST' MUSH i SYN", en: "Her sister has a husband and a son." }
        ]
      },
      {
        title: "Home — дом",
        titlePt: "Casa — дом",
        text: "квартира (flat), дом (house), кухня (kitchen), комната (room), спальня (bedroom).",
        textPt: "квартира (apartamento), дом (casa), кухня (cozinha), комната (quarto, divisão), спальня (quarto de dormir).",
        examples: [
          { ru: "У нас есть квартира в Ливерпуле.", tr: "u NAS YEST' kvar-TI-ra v li-vyer-PU-lye", en: "We have a flat in Liverpool." },
          { ru: "Кухня маленькая, но уютная.", tr: "KUKH-nya MA-lin'-ka-ya, no u-YUT-na-ya", en: "The kitchen is small but cosy." },
          { ru: "Мы готовим на кухне вместе.", tr: "my ga-TO-vim na KUKH-nye VMYES-tye", en: "We cook together in the kitchen." }
        ]
      }
    ],
    tip: {
      en: "'She has' is у неё, with н. But 'her sister' is её сестра, no н — the н appears only when у, в, о… point at the person herself.",
      pt: "'Ela tem' é у неё, com н. Mas 'a irmã dela' é её сестра, sem н — o н só aparece quando у, в, о… apontam para a própria pessoa."
    },
    exercises: [
      { type: "choice", q: "___ есть сестра. — She has a sister.", options: ["У неё", "У её", "Она"], answer: "У неё",
        explain: "After у, она becomes неё.", explainPt: "Depois de у, она passa a неё." },
      { type: "choice", q: "What is «муж»?", options: ["husband", "wife", "brother"], answer: "husband",
        explain: "муж = husband, жена = wife.", explainPt: "муж = marido, жена = mulher (esposa)." },
      { type: "choice", q: "У тебя есть брат? — Да, у ___ есть брат.", options: ["меня", "я", "мне"], answer: "меня",
        explain: "у меня есть = I have.", explainPt: "у меня есть = eu tenho." },
      { type: "gap", q: "У ___ есть квартира. — We have a flat.", answer: ["нас"],
        explain: "мы → у нас.", explainPt: "мы → у нас." },
      { type: "gap", q: "Это моя ___. — This is my wife.", answer: ["жена"],
        explain: "жена = wife.", explainPt: "жена = mulher (esposa)." },
      { type: "order", prompt: "My parents live in Moscow.", answer: "Мои родители живут в Москве.",
        explain: "родители is plural, so мои and живут.", explainPt: "родители é plural, por isso мои e живут." },
      { type: "order", prompt: "I have a brother and a sister.", answer: "У меня есть брат и сестра.",
        explain: "у меня есть + what you have.", explainPt: "у меня есть + o que tens." },
      { type: "translate", prompt: "Do you have a sister?", options: ["У тебя есть сестра?", "Ты есть сестра?", "У ты есть сестра?"], answer: "У тебя есть сестра?",
        explain: "у + тебя + есть = you have.", explainPt: "у + тебя + есть = tu tens." },
      { type: "listen", say: "У нас есть квартира.", options: ["У нас есть квартира.", "У нас есть кухня.", "У них есть квартира."], answer: "У нас есть квартира.",
        explain: "У нас есть квартира = We have a flat.", explainPt: "У нас есть квартира = Temos um apartamento." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Liga a palavra ao significado.",
        pairs: [["муж", "husband"], ["жена", "wife"], ["брат", "brother"], ["сестра", "sister"], ["родители", "parents"]],
        explain: "Family words you'll use at every dinner.", explainPt: "Palavras de família que vais usar em todos os jantares." }
    ]
  }

]);
