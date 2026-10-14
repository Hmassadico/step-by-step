// Level 5 — Sounding Natural (B2–C1)
window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([

  // 1. Question tags
  {
    id: "question-tags",
    level: 5,
    order: 1,
    emoji: "🔁",
    title: "Question tags",
    titleRu: "Разделительные вопросы (question tags)",
    intro: "British people add little questions like isn't it? or don't you? to the end of sentences all the time. They make you sound friendly and natural.",
    introRu: "Британцы постоянно добавляют в конец фразы короткие вопросы вроде isn't it? или don't you?. С ними твоя речь звучит дружелюбно и естественно — это как русское «да?», «правда?», «не так ли?».",
    sections: [
      {
        title: "Positive sentence → negative tag",
        titleRu: "Утверждение → отрицательный хвостик",
        text: "Repeat the auxiliary verb (be, have, can, will…) and the pronoun. A positive sentence gets a negative tag, and a negative sentence gets a positive tag. With Present and Past Simple, use do / does / did.",
        textRu: "В хвостике повторяем вспомогательный глагол (be, have, can, will…) и местоимение. Если предложение утвердительное — хвостик отрицательный, и наоборот. В Present и Past Simple вспомогательного глагола в предложении нет, поэтому в хвостике появляется do / does / did.",
        table: {
          head: ["Sentence", "Tag"],
          rows: [
            ["It's cold,", "isn't it?"],
            ["You've met Tom,", "haven't you?"],
            ["She can't swim,", "can she?"],
            ["You live nearby,", "don't you?"],
            ["He called you,", "didn't he?"]
          ]
        },
        examples: [
          { en: "You work at the hospital, don't you?", ru: "Ты ведь работаешь в больнице, да?" },
          { en: "The bus was late again, wasn't it?", ru: "Автобус опять опоздал, да?" },
          { en: "You won't tell anyone, will you?", ru: "Ты ведь никому не скажешь?" }
        ]
      },
      {
        title: "Special cases",
        titleRu: "Особые случаи",
        text: "I'm… takes aren't I? Let's… takes shall we? Orders take will you? or could you? There is… takes there? Nobody / nothing make the sentence negative, so the tag is positive.",
        textRu: "Запомни исключения: I'm… → aren't I? (не «amn't I»). Let's… → shall we? Просьбы и команды → will you? / could you? There is / there are → isn't there? / aren't there? Слова nobody, nothing, never уже делают предложение отрицательным, поэтому хвостик положительный. После everybody / nobody в хвостике ставим they.",
        examples: [
          { en: "I'm on the rota this weekend, aren't I?", ru: "Я ведь работаю по графику в эти выходные, да?" },
          { en: "Let's get a takeaway, shall we?", ru: "Давай закажем еду на дом, а?" },
          { en: "Pass me the salt, could you?", ru: "Передай мне соль, пожалуйста." },
          { en: "Nobody called, did they?", ru: "Никто ведь не звонил?" }
        ]
      },
      {
        title: "Intonation changes the meaning",
        titleRu: "Интонация меняет смысл",
        text: "If your voice goes down on the tag, you are sure and just want agreement. If your voice goes up, it's a real question — you don't know the answer.",
        textRu: "Если голос на хвостике идёт вниз, ты уверена и просто ждёшь согласия («Хорошая погода, правда?»). Если голос идёт вверх, это настоящий вопрос — ты не знаешь ответа и хочешь проверить («Ты ведь сдала документы? Или нет?»).",
        examples: [
          { en: "Lovely day, isn't it? ↘", ru: "Чудесный день, правда? (ждёшь согласия)" },
          { en: "You've paid the council tax, haven't you? ↗", ru: "Ты ведь заплатила муниципальный налог? (правда не знаешь)" }
        ]
      }
    ],
    tip: {
      en: "In Russian, «да?» or «не так ли?» fits every sentence, so it's tempting to use isn't it? everywhere: \"You speak French, isn't it?\" In English the tag must copy the verb and the subject: \"You speak French, don't you?\"",
      ru: "В русском «да?» или «не так ли?» подходит к любой фразе, поэтому хочется везде говорить isn't it?: «You speak French, isn't it?» В английском хвостик должен повторять вспомогательный глагол и подлежащее: «You speak French, don't you?»"
    },
    exercises: [
      {
        type: "choice",
        q: "You work at the hospital, ___?",
        options: ["don't you", "isn't it", "aren't you", "doesn't you"],
        answer: "don't you",
        explain: "Work is Present Simple, so the tag uses don't + you.",
        explainRu: "Work — это Present Simple, вспомогательный глагол do, подлежащее you, поэтому don't you."
      },
      {
        type: "choice",
        q: "I'm a bit late, ___?",
        options: ["aren't I", "amn't I", "isn't it", "don't I"],
        answer: "aren't I",
        explain: "The tag for I'm is the special form aren't I.",
        explainRu: "Для I'm хвостик особый — aren't I. Формы «amn't I» в стандартном английском нет."
      },
      {
        type: "choice",
        q: "Your friend says \"It's freezing today, isn't it?\" with her voice going down. What does she mean?",
        options: [
          "She's sure and wants you to agree.",
          "She doesn't know and is asking you.",
          "She thinks it's warm."
        ],
        answer: "She's sure and wants you to agree.",
        explain: "Falling intonation means the speaker expects agreement.",
        explainRu: "Понижение голоса на хвостике значит, что человек уверен и просто ждёт согласия."
      },
      {
        type: "gap",
        q: "She didn't pass her driving test, ___?",
        answer: ["did she"],
        explain: "The sentence is negative (didn't), so the tag is positive: did she?",
        explainRu: "Предложение отрицательное (didn't), поэтому хвостик положительный — did she?"
      },
      {
        type: "gap",
        q: "The trains are on strike again tomorrow, ___?",
        answer: ["aren't they", "are they not"],
        explain: "Are in the sentence becomes aren't in the tag, and the trains becomes they.",
        explainRu: "В предложении are — в хвостике aren't; the trains заменяем местоимением they."
      },
      {
        type: "order",
        ru: "Ты ведь не придёшь завтра?",
        answer: "You aren't coming tomorrow, are you?",
        explain: "A negative sentence takes a positive tag: are you?",
        explainRu: "Отрицательное предложение — положительный хвостик: are you?"
      },
      {
        type: "order",
        ru: "Сегодня ужасно холодно, правда?",
        answer: "It's freezing today, isn't it?",
        explain: "It's (it is) gives the tag isn't it?",
        explainRu: "It's = it is, поэтому хвостик isn't it?"
      },
      {
        type: "translate",
        ru: "Ты ведь говоришь по-русски, да?",
        options: [
          "You speak Russian, isn't it?",
          "You speak Russian, don't you?",
          "You speak Russian, aren't you?",
          "You speak Russian, doesn't you?"
        ],
        answer: "You speak Russian, don't you?",
        explain: "Speak is Present Simple with you, so the tag is don't you?",
        explainRu: "Speak — Present Simple, подлежащее you, значит хвостик don't you? «Isn't it?» здесь не подходит."
      },
      {
        type: "listen",
        say: "There's a bus at six, isn't there?",
        options: [
          "There's a bus at six, isn't there?",
          "There's a bus at six, isn't it?",
          "There's a bus at six, is there?"
        ],
        answer: "There's a bus at six, isn't there?",
        explain: "There is takes the tag isn't there?",
        explainRu: "С there is в хвостике тоже there: isn't there?"
      },
      {
        type: "match",
        q: "Match the sentence with its tag.",
        qRu: "Соедини предложение с хвостиком.",
        pairs: [
          ["You've finished your essay,", "haven't you?"],
          ["Nobody rang,", "did they?"],
          ["Close the window,", "will you?"],
          ["She can drive,", "can't she?"],
          ["Let's take a break,", "shall we?"]
        ],
        explain: "Each tag copies the auxiliary, except the special cases with orders and Let's.",
        explainRu: "Хвостик повторяет вспомогательный глагол; особые случаи — просьба (will you?) и Let's (shall we?)."
      }
    ]
  },

  // 2. Indirect questions
  {
    id: "indirect-questions",
    level: 5,
    order: 2,
    emoji: "🙋‍♀️",
    title: "Indirect and polite questions",
    titleRu: "Косвенные и вежливые вопросы",
    intro: "Could you tell me…? and Do you know…? make questions softer and more polite — perfect for shops, stations, the GP or a new manager. The trick is the word order.",
    introRu: "Could you tell me…? и Do you know…? делают вопрос мягче и вежливее — идеально для магазина, вокзала, поликлиники или разговора с новым начальником. Вся хитрость — в порядке слов.",
    sections: [
      {
        title: "Polite openings",
        titleRu: "Вежливые начала",
        text: "Start with a polite phrase, then add the question. This sounds much softer than a direct question.",
        textRu: "Сначала ставим вежливую фразу, а потом сам вопрос. Это звучит гораздо мягче, чем прямой вопрос, — примерно как русское «Не подскажете…?» или «Вы не знаете…?».",
        table: {
          head: ["Polite opening", "Russian"],
          rows: [
            ["Could you tell me…?", "Не подскажете…?"],
            ["Do you know…?", "Вы не знаете…?"],
            ["I was wondering…", "Я хотела узнать…"],
            ["Would you mind telling me…?", "Не могли бы вы сказать…?"]
          ]
        },
        examples: [
          { en: "Could you tell me where the station is?", ru: "Не подскажете, где вокзал?" },
          { en: "I was wondering if you had any rooms available.", ru: "Я хотела узнать, есть ли у вас свободные номера." }
        ]
      },
      {
        title: "Statement word order",
        titleRu: "Прямой порядок слов",
        text: "After the opening, use normal statement order: subject + verb. Don't swap them, and don't use do / does / did.",
        textRu: "После вежливого начала порядок слов как в утверждении: сначала подлежащее, потом сказуемое. Не меняем их местами и не используем do / does / did — ведь вопрос уже «спрятан» в начале.",
        table: {
          head: ["Direct", "Indirect"],
          rows: [
            ["Where is the bank?", "…where the bank is?"],
            ["What time does it open?", "…what time it opens?"],
            ["Where did she go?", "…where she went?"]
          ]
        },
        examples: [
          { en: "Do you know what time the surgery opens?", ru: "Вы не знаете, во сколько открывается поликлиника?" },
          { en: "Can you tell me how much this costs?", ru: "Не подскажете, сколько это стоит?" },
          { en: "Do you know where she went?", ru: "Ты не знаешь, куда она пошла?" }
        ]
      },
      {
        title: "Yes/no questions: if / whether",
        titleRu: "Вопросы «да/нет»: if / whether",
        text: "If the direct question has no question word, add if or whether. It works like Russian «ли».",
        textRu: "Если в прямом вопросе нет вопросительного слова (это вопрос «да или нет»), добавляем if или whether. Они работают как русская частица «ли»: «Вы не знаете, отменили ли поезд?»",
        examples: [
          { en: "Do you know if the train is cancelled?", ru: "Вы не знаете, отменили ли поезд?" },
          { en: "Could you tell me whether this bus goes to the city centre?", ru: "Не подскажете, идёт ли этот автобус в центр?" }
        ]
      }
    ],
    tip: {
      en: "Russian word order is free, so it's easy to keep the question order: \"Could you tell me where is the station?\" or \"Do you know what time does it open?\" After the polite opening, the question becomes a statement: \"where the station is\", \"what time it opens\".",
      ru: "В русском порядок слов свободный, поэтому легко оставить вопросительный порядок: «Could you tell me where is the station?» или «Do you know what time does it open?» После вежливого начала вопрос превращается в утверждение: «where the station is», «what time it opens»."
    },
    exercises: [
      {
        type: "choice",
        q: "Excuse me, could you tell me where ___?",
        options: ["the post office is", "is the post office", "does the post office is"],
        answer: "the post office is",
        explain: "In an indirect question the subject comes before the verb.",
        explainRu: "В косвенном вопросе подлежащее стоит перед глаголом: where the post office is."
      },
      {
        type: "choice",
        q: "Do you know what time ___?",
        options: ["the pharmacy closes", "does the pharmacy close", "closes the pharmacy"],
        answer: "the pharmacy closes",
        explain: "No does in an indirect question, so the verb takes -s: closes.",
        explainRu: "В косвенном вопросе does не нужен, поэтому глагол сам получает окончание -s: closes."
      },
      {
        type: "choice",
        q: "Which question is correct?",
        options: [
          "Do you know if the 8:15 train is running?",
          "Do you know is the 8:15 train running?",
          "Do you know if is the 8:15 train running?"
        ],
        answer: "Do you know if the 8:15 train is running?",
        explain: "A yes/no question needs if, then statement order.",
        explainRu: "Для вопроса «да/нет» нужен if, а после него — прямой порядок слов: the train is running."
      },
      {
        type: "gap",
        q: "Can you tell me how much this jacket ___? (cost)",
        answer: ["costs"],
        explain: "Statement order with no does, so cost becomes costs.",
        explainRu: "Порядок как в утверждении, без does, поэтому costs с окончанием -s."
      },
      {
        type: "gap",
        q: "I was wondering ___ you could help me with my essay.",
        answer: ["if", "whether"],
        explain: "A yes/no question after I was wondering needs if or whether.",
        explainRu: "Это вопрос «да/нет», поэтому после I was wondering нужен if или whether."
      },
      {
        type: "order",
        ru: "Не подскажете, где туалеты?",
        answer: "Could you tell me where the toilets are?",
        explain: "The verb are goes after the subject the toilets.",
        explainRu: "Глагол are стоит после подлежащего the toilets."
      },
      {
        type: "order",
        ru: "Ты не знаешь, когда придёт хозяин квартиры?",
        answer: "Do you know when the landlord is coming?",
        explain: "After Do you know, use statement order: the landlord is coming.",
        explainRu: "После Do you know — прямой порядок: the landlord is coming."
      },
      {
        type: "translate",
        ru: "Вы не знаете, во сколько открывается поликлиника?",
        options: [
          "Do you know what time does the surgery open?",
          "Do you know what time the surgery opens?",
          "Do you know what time opens the surgery?",
          "Do you know what time the surgery open?"
        ],
        answer: "Do you know what time the surgery opens?",
        explain: "No does, statement order, and -s on the verb.",
        explainRu: "Без does, прямой порядок слов и окончание -s у глагола: the surgery opens."
      },
      {
        type: "listen",
        say: "Could you tell me where platform four is?",
        options: [
          "Could you tell me where platform four is?",
          "Could you tell me where is platform four?",
          "Could you tell me where platform four was?"
        ],
        answer: "Could you tell me where platform four is?",
        explain: "Listen for is at the very end.",
        explainRu: "Прислушайся: is звучит в самом конце, после platform four."
      },
      {
        type: "match",
        q: "Match the direct question with the polite version.",
        qRu: "Соедини прямой вопрос с вежливым.",
        pairs: [
          ["Where is the bank?", "Do you know where the bank is?"],
          ["Does this bus go to town?", "Do you know if this bus goes to town?"],
          ["What did she say?", "Can you tell me what she said?"],
          ["When does the course start?", "Could you tell me when the course starts?"],
          ["Are they open on Sundays?", "Do you know whether they're open on Sundays?"]
        ],
        explain: "Polite questions use statement order and drop do / does / did.",
        explainRu: "В вежливых вопросах прямой порядок слов, а do / does / did исчезают."
      }
    ]
  },

  // 3. Phrasal verbs
  {
    id: "phrasal-verbs",
    level: 5,
    order: 3,
    emoji: "🧩",
    title: "Everyday phrasal verbs",
    titleRu: "Фразовые глаголы на каждый день",
    intro: "Phrasal verbs are a verb plus a little word like up, off or out. Native speakers use them constantly, so they're the key to sounding natural.",
    introRu: "Фразовый глагол — это глагол плюс маленькое слово вроде up, off или out. Носители языка используют их постоянно, так что без них речь звучит «по-учебному».",
    sections: [
      {
        title: "Common phrasal verbs",
        titleRu: "Самые нужные фразовые глаголы",
        text: "The meaning is often different from the verb on its own, so learn them as whole phrases.",
        textRu: "Значение часто сильно отличается от значения самого глагола, поэтому учи их целиком, как отдельные слова.",
        table: {
          head: ["Phrasal verb", "Meaning"],
          rows: [
            ["look after", "присматривать, заботиться"],
            ["find out", "узнать, выяснить"],
            ["give up", "бросить, сдаться"],
            ["put off", "откладывать"],
            ["turn up / down", "сделать громче / тише"],
            ["get on with", "ладить с; продолжать"],
            ["run out of", "закончиться (у кого-то)"]
          ]
        },
        examples: [
          { en: "My mum looks after my son on Fridays.", ru: "По пятницам с моим сыном сидит мама." },
          { en: "I've given up sugar in my tea.", ru: "Я перестала класть сахар в чай." },
          { en: "We've run out of milk.", ru: "У нас закончилось молоко." }
        ]
      },
      {
        title: "Separable verbs: turn it off",
        titleRu: "Разделяемые глаголы: turn it off",
        text: "With many phrasal verbs, a noun can go before or after the little word. But a pronoun (it, them, her…) must go in the middle.",
        textRu: "У многих фразовых глаголов существительное может стоять и до, и после маленького слова. А вот местоимение (it, them, her…) всегда стоит посередине — между глаголом и частицей.",
        table: {
          head: ["", "Example"],
          rows: [
            ["✓ noun", "turn off the TV"],
            ["✓ noun", "turn the TV off"],
            ["✓ pronoun", "turn it off"],
            ["✗ pronoun", "turn off it"]
          ]
        },
        examples: [
          { en: "The music's too loud — can you turn it down?", ru: "Музыка слишком громкая — можешь сделать потише?" },
          { en: "Don't put it off any longer!", ru: "Не откладывай это больше!" },
          { en: "Here are your gloves. Put them on.", ru: "Вот твои перчатки. Надень их." }
        ]
      },
      {
        title: "Verbs that don't separate",
        titleRu: "Неразделяемые глаголы",
        text: "Some phrasal verbs never split: look after, and all three-word verbs like get on with and run out of. The object always goes at the end.",
        textRu: "Некоторые фразовые глаголы никогда не разделяются: например, look after, а также все глаголы из трёх слов — get on with, run out of. Дополнение (даже местоимение) всегда стоит в конце.",
        examples: [
          { en: "Can you look after her for an hour?", ru: "Можешь посидеть с ней часок?" },
          { en: "I get on really well with my flatmate.", ru: "Я очень хорошо лажу со своей соседкой по квартире." },
          { en: "The printer has run out of ink.", ru: "В принтере закончились чернила." }
        ]
      }
    ],
    tip: {
      en: "In Russian the pronoun can go almost anywhere, so it's easy to say \"Turn off it\" or \"Give back them\". With separable phrasal verbs, the pronoun goes in the middle: \"Turn it off\", \"Give them back\".",
      ru: "В русском местоимение может стоять почти где угодно, поэтому легко сказать «Turn off it» или «Give back them». У разделяемых фразовых глаголов местоимение ставится посередине: «Turn it off», «Give them back»."
    },
    exercises: [
      {
        type: "choice",
        q: "The music is too loud. Can you ___, please?",
        options: ["turn it down", "turn down it", "turn it up"],
        answer: "turn it down",
        explain: "The pronoun goes in the middle, and down means quieter.",
        explainRu: "Местоимение стоит посередине, а down значит «тише» (up — «громче»)."
      },
      {
        type: "choice",
        q: "We've ___ milk. Can you pop to Tesco?",
        options: ["run out of", "run out", "finished out of"],
        answer: "run out of",
        explain: "Before a noun, you need the full verb run out of.",
        explainRu: "Перед существительным нужен весь глагол целиком: run out of milk."
      },
      {
        type: "choice",
        q: "Who ___ your little sister when your mum is at work?",
        options: ["looks after", "looks for", "looks at"],
        answer: "looks after",
        explain: "Look after means take care of; look for means search.",
        explainRu: "Look after — присматривать, заботиться; look for — искать; look at — смотреть на."
      },
      {
        type: "gap",
        q: "I need to ___ out what time the exam starts. (find)",
        answer: ["find"],
        explain: "Find out means discover a piece of information.",
        explainRu: "Find out — узнать, выяснить какую-то информацию."
      },
      {
        type: "gap",
        q: "Here are your gloves. Put ___ on — it's freezing!",
        answer: ["them"],
        explain: "The pronoun them goes between put and on.",
        explainRu: "Местоимение them стоит между put и on: put them on."
      },
      {
        type: "order",
        ru: "Можешь его выключить, пожалуйста?",
        answer: "Can you turn it off, please?",
        explain: "The pronoun it goes between turn and off.",
        explainRu: "Местоимение it стоит между turn и off."
      },
      {
        type: "order",
        ru: "Мы не ладим с новым соседом.",
        answer: "We don't get on with our new neighbour.",
        explain: "Get on with never separates; the person comes at the end.",
        explainRu: "Get on with не разделяется — человек, с которым ладим, стоит в конце."
      },
      {
        type: "translate",
        ru: "Не откладывай это!",
        options: [
          "Don't put off it!",
          "Don't put it off!",
          "Don't off put it!",
          "Don't put it away!"
        ],
        answer: "Don't put it off!",
        explain: "Put off is separable, so it goes in the middle.",
        explainRu: "Put off — разделяемый глагол, поэтому it стоит посередине. Put away значит «убрать на место»."
      },
      {
        type: "listen",
        say: "I'll look after them tonight.",
        options: [
          "I'll look after them tonight.",
          "I'll look them after tonight.",
          "I'll look for them tonight."
        ],
        answer: "I'll look after them tonight.",
        explain: "Look after doesn't separate, so them comes at the end.",
        explainRu: "Look after не разделяется, поэтому them стоит в конце."
      },
      {
        type: "match",
        q: "Match the phrasal verb with its meaning.",
        qRu: "Соедини фразовый глагол с его значением.",
        pairs: [
          ["look after", "take care of"],
          ["find out", "discover"],
          ["give up", "stop doing"],
          ["put off", "postpone"],
          ["run out of", "have none left"]
        ],
        explain: "These phrasal verbs are very common in everyday British English.",
        explainRu: "Эти фразовые глаголы постоянно звучат в повседневной британской речи."
      }
    ]
  },

  // 4. Have something done
  {
    id: "have-something-done",
    level: 5,
    order: 4,
    emoji: "💇‍♀️",
    title: "Have / get something done",
    titleRu: "Have / get something done — «мне сделали»",
    intro: "When someone else does a job for you — a hairdresser, a mechanic, a plumber — English uses have or get something done.",
    introRu: "Когда работу за тебя делает кто-то другой — парикмахер, механик, сантехник, — в английском говорят have или get something done. По-русски это «я подстриглась», «мне починили машину».",
    sections: [
      {
        title: "Form: have + object + past participle",
        titleRu: "Форма: have + предмет + причастие",
        text: "Put the thing first, then the past participle. The person who does the job usually isn't mentioned.",
        textRu: "Сначала ставим предмет, потом причастие (третью форму глагола). Того, кто делает работу, обычно не называем — и так понятно. Сравни: I cut my hair — я сама себя подстригла; I had my hair cut — меня подстригли в парикмахерской.",
        table: {
          head: ["have", "object", "participle"],
          rows: [
            ["I had", "my hair", "cut"],
            ["We're having", "the boiler", "fixed"],
            ["She's going to have", "her nails", "done"]
          ]
        },
        examples: [
          { en: "I had my hair cut yesterday.", ru: "Я вчера подстриглась (в парикмахерской)." },
          { en: "We're having a new kitchen fitted.", ru: "Нам ставят новую кухню." },
          { en: "Where do you have your nails done?", ru: "Где ты делаешь ногти?" }
        ]
      },
      {
        title: "Any tense: just change have",
        titleRu: "Любое время: меняется только have",
        text: "Have works in every tense, and questions and negatives use do / did as usual. Get is more informal and very common in speech.",
        textRu: "Have ставится в нужное время, а в вопросах и отрицаниях используем do / did, как с обычным глаголом. Get вместо have звучит более разговорно и встречается очень часто.",
        examples: [
          { en: "I need to get my eyes tested.", ru: "Мне нужно проверить зрение." },
          { en: "The landlord is getting the window fixed next week.", ru: "Хозяин квартиры на следующей неделе чинит окно (вызывает мастера)." },
          { en: "Did you have your car serviced?", ru: "Ты отдавала машину на техобслуживание?" }
        ]
      },
      {
        title: "Bad things that happen to you",
        titleRu: "Неприятности, которые с тобой случились",
        text: "We also use have something done for bad experiences that someone else caused.",
        textRu: "Эту же конструкцию используем, когда с тобой случилось что-то неприятное по вине другого человека: «у меня украли телефон».",
        examples: [
          { en: "She had her phone stolen on the bus.", ru: "У неё украли телефон в автобусе." },
          { en: "We had our car broken into last night.", ru: "Прошлой ночью нам вскрыли машину." }
        ]
      }
    ],
    tip: {
      en: "In Russian «Я подстриглась» doesn't say who did it, so learners often say \"I cut my hair\" — which means you did it yourself with scissors! Also don't mix it up with Past Perfect: \"I had cut my hair\" is a different tense. Say \"I had my hair cut.\"",
      ru: "Русское «Я подстриглась» не уточняет, кто именно стриг, поэтому часто говорят «I cut my hair» — а это значит, что ты сама себя подстригла ножницами! И не путай с Past Perfect: «I had cut my hair» — это совсем другое время. Правильно: «I had my hair cut»."
    },
    exercises: [
      {
        type: "choice",
        q: "I ___ yesterday — do you like it?",
        options: ["had my hair cut", "had cut my hair", "have my hair cut"],
        answer: "had my hair cut",
        explain: "A hairdresser did it: had + my hair + cut.",
        explainRu: "Тебя подстригли в парикмахерской: had + my hair + cut. «Had cut my hair» — это Past Perfect."
      },
      {
        type: "choice",
        q: "Our landlord is ___ next week.",
        options: ["getting the boiler fixed", "getting fixed the boiler", "fixing the boiler by someone"],
        answer: "getting the boiler fixed",
        explain: "The object comes before the participle: the boiler fixed.",
        explainRu: "Предмет стоит перед причастием: the boiler fixed."
      },
      {
        type: "choice",
        q: "Which sentence means someone else did the work?",
        options: ["I painted the bedroom.", "I had the bedroom painted.", "I had painted the bedroom."],
        answer: "I had the bedroom painted.",
        explain: "Had + object + participle means you paid someone to do it.",
        explainRu: "Had + предмет + причастие значит, что работу сделал кто-то другой (например, маляр)."
      },
      {
        type: "gap",
        q: "We're having our windows ___ tomorrow. (clean)",
        answer: ["cleaned"],
        explain: "After the object, use the past participle: cleaned.",
        explainRu: "После предмета нужно причастие: cleaned."
      },
      {
        type: "gap",
        q: "She ___ her phone stolen on the bus last week. (have)",
        answer: ["had", "got"],
        explain: "A bad experience in the past: had (or got) + object + participle.",
        explainRu: "Неприятность в прошлом: had (или got) + предмет + причастие."
      },
      {
        type: "order",
        ru: "Мне нужно проверить зрение.",
        answer: "I need to get my eyes tested.",
        explain: "Get + my eyes + tested: the optician will test them.",
        explainRu: "Get + my eyes + tested: проверять будет окулист, а не ты сама."
      },
      {
        type: "order",
        ru: "Где ты делаешь ногти?",
        answer: "Where do you get your nails done?",
        explain: "In questions, do comes before you, and the participle goes at the end.",
        explainRu: "В вопросе do стоит перед you, а причастие done — в конце."
      },
      {
        type: "translate",
        ru: "Завтра мне привезут новый диван.",
        options: [
          "I'm delivering a new sofa tomorrow.",
          "I'm having a new sofa delivered tomorrow.",
          "I'm having delivered a new sofa tomorrow.",
          "I'm having a new sofa deliver tomorrow."
        ],
        answer: "I'm having a new sofa delivered tomorrow.",
        explain: "Someone else delivers it: having + a new sofa + delivered.",
        explainRu: "Привозит кто-то другой: having + a new sofa + delivered. Предмет — перед причастием."
      },
      {
        type: "listen",
        say: "We had the locks changed.",
        options: ["We had the locks changed.", "We changed the locks.", "We'd changed the locks."],
        answer: "We had the locks changed.",
        explain: "Listen for had, then the locks, then changed.",
        explainRu: "Прислушайся: had, потом the locks, и только потом changed."
      },
      {
        type: "match",
        q: "Where do you have these things done?",
        qRu: "Где это делают?",
        pairs: [
          ["You have your hair cut", "at the hairdresser's."],
          ["You have your eyes tested", "at the optician's."],
          ["You have your car repaired", "at a garage."],
          ["You have your teeth checked", "at the dentist's."],
          ["You get your coat dry-cleaned", "at the dry cleaner's."]
        ],
        explain: "In each case a professional does the job for you.",
        explainRu: "В каждом случае работу делает специалист, а не ты сама."
      }
    ]
  },

  // 5. wish / if only (present & future)
  {
    id: "wish-if-only",
    level: 5,
    order: 5,
    emoji: "🌠",
    title: "I wish / If only (present and future)",
    titleRu: "I wish / If only о настоящем и будущем",
    intro: "You already know I wish I had done for past regrets. Now let's use wish for things you'd like to be different right now — and for things that annoy you.",
    introRu: "Ты уже знаешь I wish I had done для сожалений о прошлом. Теперь научимся говорить о том, что хотелось бы изменить прямо сейчас, — и о том, что раздражает.",
    sections: [
      {
        title: "wish + Past Simple: the present",
        titleRu: "wish + Past Simple: о настоящем",
        text: "To talk about a present situation you'd like to change, use wish + Past Simple. It looks past, but it means now. With be, were is a bit more formal than was.",
        textRu: "Чтобы сказать, что сейчас всё не так, как хотелось бы, используем wish + Past Simple. Форма прошедшая, но речь о настоящем. С be можно сказать was или were (were звучит чуть официальнее). Обрати внимание: русское «жаль, что не…» превращается в утверждение — «Жаль, что я не знаю» = I wish I knew.",
        table: {
          head: ["Reality", "Wish"],
          rows: [
            ["I don't know.", "I wish I knew."],
            ["I live far away.", "I wish I didn't live so far."],
            ["It's cold.", "I wish it were / was warmer."]
          ]
        },
        examples: [
          { en: "I wish I had a car.", ru: "Жаль, что у меня нет машины." },
          { en: "I wish I didn't have to work this weekend.", ru: "Жаль, что мне надо работать в эти выходные." },
          { en: "I wish it were summer.", ru: "Вот бы сейчас было лето." }
        ]
      },
      {
        title: "wish + could: abilities",
        titleRu: "wish + could: умения и возможности",
        text: "Use wish + could for things you can't do now.",
        textRu: "Если хочется уметь или иметь возможность что-то сделать, используем wish + could.",
        examples: [
          { en: "I wish I could drive.", ru: "Жаль, что я не умею водить." },
          { en: "I wish we could go on holiday this year.", ru: "Вот бы нам поехать в отпуск в этом году." }
        ]
      },
      {
        title: "wish + would: annoying habits and the future",
        titleRu: "wish + would: раздражающие привычки и будущее",
        text: "Use wish + would to complain about what other people (or things) do, or to wish they would change. Don't use it about yourself: say I wish I could, not I wish I would.",
        textRu: "Wish + would выражает недовольство чужим поведением или желание, чтобы кто-то (или что-то) изменился: «хоть бы ты перестал…», «хоть бы дождь кончился». О себе так не говорят: вместо «I wish I would» скажи I wish I could.",
        examples: [
          { en: "I wish you would stop leaving your shoes in the hall.", ru: "Хоть бы ты перестал бросать обувь в прихожей." },
          { en: "I wish it would stop raining.", ru: "Хоть бы дождь прекратился." },
          { en: "I wish my neighbours wouldn't play music at 2 a.m.", ru: "Хоть бы соседи не включали музыку в два часа ночи." }
        ]
      },
      {
        title: "If only: a stronger wish",
        titleRu: "If only: желание ещё сильнее",
        text: "If only works exactly like I wish, but sounds more emotional. For past regrets, remember: wish / if only + had + participle.",
        textRu: "If only строится точно так же, как I wish, но звучит эмоциональнее — как русское «если бы только…», «вот бы…». А для сожалений о прошлом, как ты помнишь, нужно had + причастие: If only I had listened!",
        examples: [
          { en: "If only I had more time!", ru: "Если бы только у меня было больше времени!" },
          { en: "If only the trains would run on time!", ru: "Хоть бы поезда ходили по расписанию!" }
        ]
      }
    ],
    tip: {
      en: "Russian «Жаль, что я не знаю» is negative and in the present, so learners say \"I wish I don't know\" or \"I wish I know\". In English, step one tense back and flip the meaning: \"I wish I knew.\"",
      ru: "Русское «Жаль, что я не знаю» стоит в настоящем времени и с «не», поэтому хочется сказать «I wish I don't know» или «I wish I know». В английском сдвигаем время на шаг назад и меняем смысл на противоположный: «I wish I knew» (= хотела бы знать)."
    },
    exercises: [
      {
        type: "choice",
        q: "I wish I ___ the answer, but I've got no idea.",
        options: ["knew", "know", "would know"],
        answer: "knew",
        explain: "A wish about the present uses Past Simple.",
        explainRu: "Желание о настоящем — wish + Past Simple: knew."
      },
      {
        type: "choice",
        q: "It's 2 a.m.! I wish my neighbours ___ so much noise.",
        options: ["wouldn't make", "don't make", "won't make"],
        answer: "wouldn't make",
        explain: "To complain about someone's behaviour, use wish + would.",
        explainRu: "Недовольство чужим поведением — wish + would (wouldn't)."
      },
      {
        type: "choice",
        q: "Which sentence is correct?",
        options: ["I wish I could drive.", "I wish I can drive.", "I wish I would drive."],
        answer: "I wish I could drive.",
        explain: "For abilities, use wish + could; we don't say I wish I would.",
        explainRu: "Об умениях — wish + could. «I wish I would» о себе не говорят."
      },
      {
        type: "gap",
        q: "It's so cold. I wish it ___ summer. (be)",
        answer: ["was", "were"],
        explain: "After wish, be becomes was or were.",
        explainRu: "После wish глагол be — was или were (оба варианта правильные)."
      },
      {
        type: "gap",
        q: "I wish I ___ so far from college. (not / live)",
        answer: ["didn't live", "did not live"],
        explain: "Present situation → Past Simple negative: didn't live.",
        explainRu: "Ситуация в настоящем, поэтому Past Simple: didn't live."
      },
      {
        type: "order",
        ru: "Жаль, что у меня нет машины.",
        answer: "I wish I had a car.",
        explain: "«Жаль, что нет» becomes a positive wish: I wish I had.",
        explainRu: "«Жаль, что нет» превращается в утверждение: I wish I had."
      },
      {
        type: "order",
        ru: "Хоть бы дождь прекратился!",
        answer: "If only it would stop raining!",
        explain: "Wishing something would change: if only + would.",
        explainRu: "Хочется, чтобы что-то изменилось: if only + would."
      },
      {
        type: "translate",
        ru: "Жаль, что ты здесь не живёшь.",
        options: [
          "I wish you don't live here.",
          "I wish you lived here.",
          "I wish you didn't live here.",
          "I wish you would live here."
        ],
        answer: "I wish you lived here.",
        explain: "You want the opposite of reality, so the sentence is positive.",
        explainRu: "Ты хочешь, чтобы было наоборот, поэтому предложение утвердительное: I wish you lived here. «Didn't live» значило бы, что ты хочешь, чтобы человек здесь не жил."
      },
      {
        type: "listen",
        say: "I wish you would listen to me.",
        options: [
          "I wish you would listen to me.",
          "I wish you had listened to me.",
          "I wish you will listen to me."
        ],
        answer: "I wish you would listen to me.",
        explain: "Listen for would — a complaint about the present.",
        explainRu: "Прислушайся: would — это недовольство тем, что происходит сейчас."
      },
      {
        type: "match",
        q: "Match the situation with the wish.",
        qRu: "Соедини ситуацию с желанием.",
        pairs: [
          ["I can't speak Spanish.", "I wish I could speak Spanish."],
          ["My flat is tiny.", "I wish it were bigger."],
          ["You never ring me.", "I wish you would ring more often."],
          ["I didn't go to the party.", "I wish I had gone."],
          ["I don't know her number.", "I wish I knew it."]
        ],
        explain: "Present → Past Simple or could, other people's habits → would, past → had + participle.",
        explainRu: "Настоящее — Past Simple или could, чужие привычки — would, прошлое — had + причастие."
      }
    ]
  },

  // 6. Linking words
  {
    id: "linking-words",
    level: 5,
    order: 6,
    emoji: "🔗",
    title: "Linking words: contrast and reason",
    titleRu: "Связки: противопоставление и причина",
    intro: "Although, despite, however, because of, due to… These linking words make your speaking and writing sound mature and connected — great for college essays.",
    introRu: "Although, despite, however, because of, due to… Эти связки делают речь и письмо взрослыми и логичными — они особенно пригодятся в эссе в колледже.",
    sections: [
      {
        title: "although / even though + clause",
        titleRu: "although / even though + предложение",
        text: "After although and even though, use a full clause (subject + verb). Even though is stronger. Don't add but in the other half.",
        textRu: "После although и even though идёт целое предложение — с подлежащим и сказуемым. Even though звучит сильнее («хотя и», «даже несмотря на то что»). Важно: во второй части but не нужен, в отличие от русского «хотя…, но…».",
        examples: [
          { en: "Although it was raining, we went for a walk.", ru: "Хотя шёл дождь, мы пошли гулять." },
          { en: "She went to work even though she felt ill.", ru: "Она пошла на работу, хотя и плохо себя чувствовала." }
        ]
      },
      {
        title: "despite / in spite of + noun or -ing",
        titleRu: "despite / in spite of + существительное или -ing",
        text: "After despite and in spite of, use a noun or an -ing form, not a full clause. Never say despite of.",
        textRu: "После despite и in spite of («несмотря на») ставим существительное или форму на -ing, а не целое предложение. «Despite of» не бывает: либо despite, либо in spite of. Если очень нужно предложение — despite the fact that…",
        table: {
          head: ["Word", "+ what?"],
          rows: [
            ["although", "it was cold"],
            ["despite", "the cold"],
            ["in spite of", "feeling tired"],
            ["despite the fact that", "it was cold"]
          ]
        },
        examples: [
          { en: "Despite the train strike, I got to college on time.", ru: "Несмотря на забастовку на железной дороге, я успела в колледж вовремя." },
          { en: "In spite of feeling tired, she finished her shift.", ru: "Несмотря на усталость, она доработала смену." }
        ]
      },
      {
        title: "however: a new sentence",
        titleRu: "however: в начале нового предложения",
        text: "However links two separate sentences. Put a full stop before it and a comma after it.",
        textRu: "However («однако») связывает два отдельных предложения. Перед ним обычно ставится точка, а после — запятая.",
        examples: [
          { en: "The flat is lovely. However, the rent is very high.", ru: "Квартира чудесная. Однако аренда очень дорогая." },
          { en: "I revised a lot. However, I didn't pass.", ru: "Я много готовилась. Однако не сдала." }
        ]
      },
      {
        title: "because vs because of / due to",
        titleRu: "because или because of / due to",
        text: "Because + clause; because of / due to + noun. Due to is more formal — you hear it in station announcements.",
        textRu: "После because идёт предложение, а после because of и due to — существительное. Due to звучит официальнее — его постоянно слышно в объявлениях на вокзале.",
        examples: [
          { en: "We stayed in because it was stormy.", ru: "Мы остались дома, потому что был шторм." },
          { en: "We stayed in because of the storm.", ru: "Мы остались дома из-за шторма." },
          { en: "The 8:15 has been cancelled due to a signal failure.", ru: "Поезд в 8:15 отменён из-за сбоя в системе сигнализации." }
        ]
      }
    ],
    tip: {
      en: "Russian says «Хотя…, но…» and «несмотря на», so learners write \"Although it was late, but we stayed\" and \"despite of the rain\". In English, use although without but, and despite without of: \"Although it was late, we stayed.\" / \"Despite the rain…\"",
      ru: "В русском говорят «Хотя…, но…» и «несмотря на», поэтому часто пишут «Although it was late, but we stayed» и «despite of the rain». В английском although без but, а despite без of: «Although it was late, we stayed.» / «Despite the rain…»"
    },
    exercises: [
      {
        type: "choice",
        q: "___ the train strike, I got to college on time.",
        options: ["Despite", "Although", "Despite of", "However"],
        answer: "Despite",
        explain: "A noun (the train strike) follows despite, never despite of.",
        explainRu: "Перед существительным (the train strike) нужен despite — без of."
      },
      {
        type: "choice",
        q: "___ she was exhausted, she finished her shift.",
        options: ["Even though", "Despite", "In spite of", "Because of"],
        answer: "Even though",
        explain: "A full clause (she was exhausted) follows even though.",
        explainRu: "Дальше идёт целое предложение (she was exhausted), поэтому even though."
      },
      {
        type: "choice",
        q: "The 8:15 to Manchester has been cancelled ___ a signal failure.",
        options: ["due to", "because", "although", "despite"],
        answer: "due to",
        explain: "A reason expressed as a noun takes due to (or because of).",
        explainRu: "Причина выражена существительным, поэтому due to (или because of). После because нужно целое предложение."
      },
      {
        type: "gap",
        q: "In ___ of the weather, we had a great time in the Lake District.",
        answer: ["spite"],
        explain: "The full phrase is in spite of.",
        explainRu: "Полное выражение — in spite of («несмотря на»)."
      },
      {
        type: "gap",
        q: "I revised for weeks. ___, I didn't pass the test.",
        answer: ["however", "even so", "nevertheless", "still"],
        explain: "However starts a new sentence and is followed by a comma.",
        explainRu: "However («однако») стоит в начале нового предложения, после него запятая."
      },
      {
        type: "order",
        ru: "Хотя было холодно, мы пошли гулять.",
        answer: "Although it was cold, we went for a walk.",
        explain: "Although + clause, and no but in the second half.",
        explainRu: "Although + предложение, а во второй части никакого but."
      },
      {
        type: "order",
        ru: "Несмотря на усталость, она пошла на работу.",
        answer: "Despite feeling tired, she went to work.",
        explain: "Despite is followed by an -ing form here.",
        explainRu: "После despite здесь стоит форма на -ing: feeling tired."
      },
      {
        type: "translate",
        ru: "Хотя квартира маленькая, она очень уютная.",
        options: [
          "Although the flat is small, but it's very cosy.",
          "Although the flat is small, it's very cosy.",
          "Despite the flat is small, it's very cosy.",
          "Despite of the flat is small, it's very cosy."
        ],
        answer: "Although the flat is small, it's very cosy.",
        explain: "Although + clause, with no but and no despite.",
        explainRu: "Although + предложение, без but. Despite не подходит, потому что после него не может стоять предложение."
      },
      {
        type: "listen",
        say: "We stayed in because of the storm.",
        options: [
          "We stayed in because of the storm.",
          "We stayed in because the storm.",
          "We stayed in despite the storm."
        ],
        answer: "We stayed in because of the storm.",
        explain: "Listen for because of before the noun.",
        explainRu: "Прислушайся: перед существительным звучит because of."
      },
      {
        type: "match",
        q: "Match the sentence halves.",
        qRu: "Соедини части предложений.",
        pairs: [
          ["Although the rent is high,", "I love my flat."],
          ["Despite the rain,", "the match went ahead."],
          ["The surgery is closed today", "due to staff training."],
          ["She got the job", "even though she had no experience."],
          ["I was ill. However,", "I still went to my lecture."]
        ],
        explain: "Clauses follow although / even though; nouns follow despite / due to.",
        explainRu: "После although / even though — предложение, после despite / due to — существительное."
      }
    ]
  },

  // 7. Future continuous and future perfect
  {
    id: "future-continuous-perfect",
    level: 5,
    order: 7,
    emoji: "🚀",
    title: "Future continuous and future perfect",
    titleRu: "Future Continuous и Future Perfect",
    intro: "This time tomorrow I'll be flying. By June I'll have finished. These two tenses help you talk about a moment in the future very precisely.",
    introRu: "«Завтра в это время я буду лететь». «К июню я уже закончу». Эти два времени помогают точно описать, что будет происходить или что уже будет сделано к определённому моменту в будущем.",
    sections: [
      {
        title: "Future continuous: will be + -ing",
        titleRu: "Future Continuous: will be + -ing",
        text: "Use it for an action in progress at a moment in the future. It's also a polite way to ask about someone's plans.",
        textRu: "Это действие, которое будет в процессе в определённый момент в будущем: «завтра в восемь я буду ехать на работу». А ещё это вежливый способ спросить о чужих планах, не выпрашивая ничего напрямую: Will you be using the car tonight?",
        table: {
          head: ["", "Form"],
          rows: [
            ["+", "I'll be working"],
            ["−", "I won't be working"],
            ["?", "Will you be working?"]
          ]
        },
        examples: [
          { en: "This time tomorrow I'll be flying to Rome.", ru: "Завтра в это время я буду лететь в Рим." },
          { en: "Don't ring at eight — I'll be putting the kids to bed.", ru: "Не звони в восемь — я буду укладывать детей спать." },
          { en: "Will you be using the car tonight?", ru: "Ты сегодня вечером будешь брать машину?" }
        ]
      },
      {
        title: "Future perfect: will have + participle",
        titleRu: "Future Perfect: will have + причастие",
        text: "Use it for an action that will be complete before a future moment. It often goes with by (by Friday, by June, by then).",
        textRu: "Это действие, которое уже завершится к определённому моменту в будущем. Часто идёт со словом by («к»): by Friday, by June, by then. По-русски обычно «уже сделаю», «успею сделать».",
        table: {
          head: ["", "Form"],
          rows: [
            ["+", "I'll have finished"],
            ["−", "I won't have finished"],
            ["?", "Will you have finished?"]
          ]
        },
        examples: [
          { en: "By June I'll have finished my course.", ru: "К июню я уже закончу курс." },
          { en: "The builders won't have finished by Friday.", ru: "Строители не успеют закончить к пятнице." }
        ]
      },
      {
        title: "by the time / when + present",
        titleRu: "by the time / when + настоящее время",
        text: "After by the time, when, before and after, use the present tense, not will.",
        textRu: "После by the time («к тому времени, как»), when, before, after ставим настоящее время, а не will — даже если речь о будущем. Will остаётся только в главной части.",
        examples: [
          { en: "By the time you get home, I'll have made dinner.", ru: "К тому времени, как ты придёшь домой, я уже приготовлю ужин." },
          { en: "When you arrive, we'll be waiting outside.", ru: "Когда ты приедешь, мы будем ждать на улице." }
        ]
      }
    ],
    tip: {
      en: "Russian «К пятнице я закончу» uses a simple future, so learners say \"By Friday I will finish\". If the job will be done before that moment, English needs will have + participle: \"By Friday I'll have finished.\" And never put will after by the time: \"By the time you arrive\", not \"By the time you will arrive\".",
      ru: "Русское «К пятнице я закончу» — простое будущее, поэтому хочется сказать «By Friday I will finish». Если к этому моменту дело уже будет сделано, нужен will have + причастие: «By Friday I'll have finished». И не ставь will после by the time: «By the time you arrive», а не «By the time you will arrive»."
    },
    exercises: [
      {
        type: "choice",
        q: "Don't ring me at 8 — I ___ the kids to bed.",
        options: ["will be putting", "will have put", "am put"],
        answer: "will be putting",
        explain: "At 8 the action will be in progress, so we need will be + -ing.",
        explainRu: "В восемь ты будешь в процессе укладывания детей — will be + -ing."
      },
      {
        type: "choice",
        q: "By the end of June, I ___ my second year at college.",
        options: ["will have finished", "will finish", "will be finishing"],
        answer: "will have finished",
        explain: "The year will be complete before that moment, so it's future perfect.",
        explainRu: "К концу июня учебный год будет уже завершён — Future Perfect: will have finished."
      },
      {
        type: "choice",
        q: "By the time you ___ home, I'll have made dinner.",
        options: ["get", "will get", "will have got"],
        answer: "get",
        explain: "After by the time, use the present tense.",
        explainRu: "После by the time ставим настоящее время: get, без will."
      },
      {
        type: "gap",
        q: "This time next week we ___ on a beach in Spain. (lie)",
        answer: ["will be lying", "'ll be lying"],
        explain: "An action in progress at a future moment: will be + -ing.",
        explainRu: "Действие в процессе в момент в будущем: will be + -ing. Обрати внимание: lie → lying."
      },
      {
        type: "gap",
        q: "I hope the builders ___ the kitchen by Friday. (finish)",
        answer: ["will have finished", "'ll have finished"],
        explain: "Complete before Friday: will have + participle.",
        explainRu: "Будет завершено к пятнице: will have + причастие."
      },
      {
        type: "order",
        ru: "Завтра в это время я буду лететь в Рим.",
        answer: "This time tomorrow I'll be flying to Rome.",
        alt: ["I'll be flying to Rome this time tomorrow."],
        explain: "In progress at a future moment: I'll be flying.",
        explainRu: "Действие в процессе в определённый момент будущего: I'll be flying."
      },
      {
        type: "order",
        ru: "К понедельнику я уже сдам эссе.",
        answer: "I will have handed in my essay by Monday.",
        alt: [
          "By Monday I will have handed in my essay.",
          "I will have handed my essay in by Monday.",
          "By Monday I will have handed my essay in."
        ],
        explain: "Finished before Monday: will have handed in.",
        explainRu: "Будет сделано к понедельнику: will have handed in. Hand in — разделяемый фразовый глагол."
      },
      {
        type: "translate",
        ru: "К тому времени, как ты приедешь, мы уже поедим.",
        options: [
          "By the time you will arrive, we'll have eaten.",
          "By the time you arrive, we'll have eaten.",
          "By the time you arrive, we'll eat.",
          "By the time you arrive, we'll be eating."
        ],
        answer: "By the time you arrive, we'll have eaten.",
        explain: "Present after by the time; the meal will be finished, so future perfect.",
        explainRu: "После by the time — настоящее время, а «уже поедим» — Future Perfect. «We'll be eating» значило бы, что мы будем в процессе еды."
      },
      {
        type: "listen",
        say: "Will you be using the car tonight?",
        options: [
          "Will you be using the car tonight?",
          "Will you use the car tonight?",
          "Will you have used the car tonight?"
        ],
        answer: "Will you be using the car tonight?",
        explain: "Listen for be using — a polite question about plans.",
        explainRu: "Прислушайся к be using — это вежливый вопрос о планах."
      },
      {
        type: "match",
        q: "Match the sentence halves.",
        qRu: "Соедини части предложений.",
        pairs: [
          ["This time tomorrow I'll be", "lying on a beach in Spain."],
          ["By the time you get home, I'll have", "cooked dinner."],
          ["Will the shop be", "closing early on Christmas Eve?"],
          ["Will they have", "fixed the boiler by Friday?"]
        ],
        explain: "At a moment → will be + -ing; by a moment → will have + participle.",
        explainRu: "В определённый момент — will be + -ing; к определённому моменту — will have + причастие."
      }
    ]
  },

  // 8. Past modals: criticism and missed chances
  {
    id: "past-modals-criticism",
    level: 5,
    order: 8,
    emoji: "🤦‍♀️",
    title: "should have / could have / needn't have",
    titleRu: "should have / could have / needn't have",
    intro: "We all make mistakes. These past modals help you criticise, regret missed chances and say something wasn't necessary after all.",
    introRu: "Все мы ошибаемся. Эти модальные конструкции помогают покритиковать, пожалеть об упущенной возможности или сказать, что что-то было делать вовсе не обязательно.",
    sections: [
      {
        title: "should have / shouldn't have",
        titleRu: "should have / shouldn't have",
        text: "Should have + participle means it was a good idea, but it didn't happen. Shouldn't have means it happened, but it was a bad idea.",
        textRu: "Should have + причастие — «надо было», но этого не сделали. Shouldn't have — «не надо было», но сделали. Так мы критикуем себя или других. В речи часто сокращают: should've, shouldn't've.",
        table: {
          head: ["Form", "Meaning"],
          rows: [
            ["should have done", "надо было (но не сделали)"],
            ["shouldn't have done", "не надо было (но сделали)"],
            ["could have done", "могли бы (но не сделали)"],
            ["needn't have done", "зря сделали (было не нужно)"]
          ]
        },
        examples: [
          { en: "I should have revised more.", ru: "Надо было больше готовиться." },
          { en: "You shouldn't have shouted at him.", ru: "Не надо было на него кричать." },
          { en: "We should have got the earlier train.", ru: "Надо было ехать более ранним поездом." }
        ]
      },
      {
        title: "could have: missed chances",
        titleRu: "could have: упущенные возможности",
        text: "Could have + participle means it was possible, but it didn't happen. It's also used to criticise: You could have told me!",
        textRu: "Could have + причастие — «могла бы», но не сделала. Это упущенная возможность. С ноткой упрёка: You could have told me! — «Мог бы и сказать!»",
        examples: [
          { en: "I could have got that job if I'd applied.", ru: "Я могла бы получить ту работу, если бы подала заявку." },
          { en: "You could have phoned me!", ru: "Ты мог бы мне позвонить!" }
        ]
      },
      {
        title: "needn't have vs didn't need to",
        titleRu: "needn't have или didn't need to",
        text: "Needn't have + participle: you did it, but it wasn't necessary. Didn't need to + verb usually means it wasn't necessary, so you didn't do it.",
        textRu: "Needn't have + причастие — ты это сделала, но зря, это было не нужно. Didn't need to + глагол обычно значит, что делать было не нужно и ты не делала.",
        examples: [
          { en: "I needn't have taken an umbrella — it was sunny all day.", ru: "Зря я взяла зонт — весь день было солнечно." },
          { en: "I didn't need to take an umbrella, so I left it at home.", ru: "Зонт был не нужен, поэтому я оставила его дома." }
        ]
      }
    ],
    tip: {
      en: "Russian «Тебе надо было мне сказать» makes learners reach for must: \"You must have told me\". But must have means \"I'm sure you told me\". For criticism, use should have: \"You should have told me.\" And always use have + participle: not \"should told\" or \"should had\".",
      ru: "Из-за русского «Тебе надо было мне сказать» хочется сказать «You must have told me». Но must have значит «ты наверняка мне говорил» (это догадка!). Для упрёка нужно should have: «You should have told me». И всегда have + причастие, а не «should told» или «should had»."
    },
    exercises: [
      {
        type: "choice",
        q: "I failed the test. I ___ more.",
        options: ["should have revised", "must have revised", "should revise"],
        answer: "should have revised",
        explain: "Criticism of a past action: should have + participle.",
        explainRu: "Упрёк о прошлом: should have + причастие. Must have — это догадка."
      },
      {
        type: "choice",
        q: "You ___ me you were ill! I'd have brought you some soup.",
        options: ["could have told", "could tell", "must have told"],
        answer: "could have told",
        explain: "A missed chance in the past, with criticism: could have + participle.",
        explainRu: "Упущенная возможность с упрёком: could have + причастие — «мог бы и сказать!»."
      },
      {
        type: "choice",
        q: "I took an umbrella, but it didn't rain. I ___ it.",
        options: ["needn't have taken", "needn't take", "shouldn't take"],
        answer: "needn't have taken",
        explain: "You took it, but it wasn't necessary: needn't have + participle.",
        explainRu: "Ты взяла зонт, но зря: needn't have + причастие."
      },
      {
        type: "gap",
        q: "We ___ the earlier train — now we're stuck because of the strike. (should / get)",
        answer: ["should have got", "should've got", "ought to have got"],
        explain: "A good idea that didn't happen: should have + participle.",
        explainRu: "Так было бы правильно, но мы этого не сделали: should have + причастие."
      },
      {
        type: "gap",
        q: "You ___ so much food — only four people came. (needn't / cook)",
        answer: ["needn't have cooked", "need not have cooked"],
        explain: "The food was cooked, but it wasn't necessary.",
        explainRu: "Еду приготовили, но это было не нужно: needn't have cooked."
      },
      {
        type: "order",
        ru: "Не надо было мне есть этот торт.",
        answer: "I shouldn't have eaten that cake.",
        explain: "You did it, but it was a bad idea: shouldn't have + participle.",
        explainRu: "Сделала, но зря: shouldn't have + причастие."
      },
      {
        type: "order",
        ru: "Ты мог бы мне позвонить!",
        answer: "You could have phoned me!",
        explain: "Could have + participle criticises a missed chance.",
        explainRu: "Could have + причастие — упрёк за упущенную возможность."
      },
      {
        type: "translate",
        ru: "Тебе надо было сказать мне раньше.",
        options: [
          "You must have told me earlier.",
          "You should have told me earlier.",
          "You should told me earlier.",
          "You had to tell me earlier."
        ],
        answer: "You should have told me earlier.",
        explain: "Criticism of the past: should have + participle.",
        explainRu: "Упрёк о прошлом: should have + причастие. «Must have told» значило бы «ты наверняка мне говорил»."
      },
      {
        type: "listen",
        say: "You needn't have bought milk.",
        options: [
          "You needn't have bought milk.",
          "You shouldn't have bought milk.",
          "You needn't buy milk."
        ],
        answer: "You needn't have bought milk.",
        explain: "Listen for needn't have — the milk was bought, but it wasn't necessary.",
        explainRu: "Прислушайся: needn't have — молоко купили, но зря."
      },
      {
        type: "match",
        q: "Match the situation with the comment.",
        qRu: "Соедини ситуацию с комментарием.",
        pairs: [
          ["I didn't apply, and someone else got the job.", "I could have got that job."],
          ["He drove after two pints.", "He shouldn't have driven."],
          ["She bought a new charger, but the old one worked.", "She needn't have bought it."],
          ["I missed the deadline.", "I should have started earlier."]
        ],
        explain: "Could have = missed chance, shouldn't have = bad idea, needn't have = unnecessary, should have = good idea not done.",
        explainRu: "Could have — упущенная возможность, shouldn't have — зря сделали, needn't have — было не нужно, should have — надо было сделать."
      }
    ]
  }

]);
