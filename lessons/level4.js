// Level 4 — Advanced Steps (B2)
window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([

  // 1. Past Perfect
  {
    id: "past-perfect",
    level: 4,
    order: 1,
    emoji: "⏪",
    title: "Past Perfect",
    titleRu: "Past Perfect — «предпрошедшее» время",
    intro: "When you tell a story about the past, sometimes one thing happened even earlier. Past Perfect shows which action came first.",
    introRu: "Когда ты рассказываешь о прошлом, иногда одно действие произошло ещё раньше другого. Past Perfect показывает, что случилось первым.",
    sections: [
      {
        title: "Form: had + past participle",
        titleRu: "Форма: had + причастие",
        text: "Use had for every person, plus the past participle (the third form of the verb). In speech we often say 'd.",
        textRu: "Вспомогательный глагол had одинаковый для всех лиц, к нему добавляется причастие прошедшего времени (третья форма глагола). В разговоре had часто сокращается до 'd: I'd, she'd, we'd.",
        table: {
          head: ["", "Form"],
          rows: [
            ["+", "I had (I'd) finished"],
            ["−", "I hadn't finished"],
            ["?", "Had you finished?"]
          ]
        },
        examples: [
          { en: "She had already gone home.", ru: "Она уже ушла домой." },
          { en: "We hadn't booked a table.", ru: "Мы не забронировали столик." },
          { en: "Had you met him before?", ru: "Ты встречалась с ним раньше?" }
        ]
      },
      {
        title: "The earlier past",
        titleRu: "Более раннее прошлое",
        text: "When two things happened in the past, use Past Perfect for the one that happened first. Past Simple is for the later one.",
        textRu: "Если в прошлом произошли два события, то более раннее ставим в Past Perfect, а более позднее — в Past Simple. Сравни: «When I got to the station, the train left» — поезд ушёл, когда я пришла (я видела, как он уходил). «When I got to the station, the train had left» — поезд ушёл ещё до моего прихода.",
        examples: [
          { en: "When I got to the station, the train had left.", ru: "Когда я пришла на вокзал, поезд уже ушёл." },
          { en: "I didn't recognise her because she had changed her hair.", ru: "Я её не узнала, потому что она сменила причёску." },
          { en: "He was hungry because he hadn't had lunch.", ru: "Он был голоден, потому что не пообедал." }
        ]
      },
      {
        title: "Time words: by the time, already, before, after",
        titleRu: "Слова-подсказки: by the time, already, before, after",
        text: "By the time, already, just, never… before, before and after often go with Past Perfect. With before and after, Past Simple is also fine because the order is already clear.",
        textRu: "By the time (к тому времени, как), already (уже), just (только что), never… before (никогда раньше) часто встречаются с Past Perfect. После before и after можно использовать и Past Simple — порядок событий и так понятен.",
        examples: [
          { en: "By the time we got to Tesco, it had closed.", ru: "К тому времени, как мы дошли до Tesco, он уже закрылся." },
          { en: "I had never tried fish and chips before I came to the UK.", ru: "До приезда в Великобританию я никогда не пробовала фиш-энд-чипс." },
          { en: "After she had finished work, she went to the gym.", ru: "Закончив работу, она пошла в спортзал." }
        ]
      }
    ],
    tip: {
      en: "Russian has only one past tense, so it's easy to say \"When I arrived, the film started\" when you mean the film began before you came. If the action was finished before another past moment, use had + participle: \"When I arrived, the film had started.\"",
      ru: "В русском только одно прошедшее время, поэтому легко сказать «When I arrived, the film started», хотя имеешь в виду, что фильм начался ещё до твоего прихода. Если действие завершилось раньше другого момента в прошлом, нужен had + причастие: «When I arrived, the film had started»."
    },
    exercises: [
      {
        type: "choice",
        q: "By the time we got to Tesco, it ___.",
        options: ["closed", "had closed", "has closed"],
        answer: "had closed",
        explain: "The shop closed before we arrived, so we need Past Perfect.",
        explainRu: "Магазин закрылся до того, как мы пришли, — это более раннее прошлое, поэтому had closed."
      },
      {
        type: "choice",
        q: "When I arrived at the party, Anna ___ home, so I didn't see her.",
        options: ["went", "had gone", "has gone"],
        answer: "had gone",
        explain: "Anna left before I arrived, so it's the earlier past.",
        explainRu: "Анна ушла ещё до твоего прихода, поэтому had gone. «Went» значило бы, что она ушла в момент твоего прихода."
      },
      {
        type: "choice",
        q: "Which sentence is correct?",
        options: [
          "I had never seen snow before I moved to Manchester.",
          "I have never seen snow before I moved to Manchester.",
          "I never had seen snow before I moved to Manchester."
        ],
        answer: "I had never seen snow before I moved to Manchester.",
        explain: "Never… before a past moment needs Past Perfect, and never goes between had and the participle.",
        explainRu: "«Никогда до какого-то момента в прошлом» — это Past Perfect, а never стоит между had и причастием."
      },
      {
        type: "gap",
        q: "When I got home, my husband ___ dinner. (cook)",
        answer: ["had cooked", "had already cooked"],
        explain: "The cooking was finished before I got home.",
        explainRu: "Ужин был готов ещё до твоего прихода, поэтому had cooked."
      },
      {
        type: "gap",
        q: "We ___ the film before, so we chose another one. (not / see)",
        answer: ["hadn't seen", "had not seen"],
        explain: "The negative of Past Perfect is hadn't + participle.",
        explainRu: "Отрицание в Past Perfect: hadn't (had not) + причастие."
      },
      {
        type: "order",
        ru: "Когда мы приехали, поезд уже ушёл.",
        answer: "When we arrived, the train had already left.",
        explain: "The train left first, so it takes had already left.",
        explainRu: "Поезд ушёл раньше нашего приезда — had already left. Already стоит между had и причастием."
      },
      {
        type: "order",
        ru: "Ты была знакома с ним до свадьбы?",
        answer: "Had you met him before the wedding?",
        explain: "In questions, had comes before the subject.",
        explainRu: "В вопросе had выносится перед подлежащим: Had you met…?"
      },
      {
        type: "translate",
        ru: "Когда я пришла в поликлинику, врач уже ушёл домой.",
        options: [
          "When I got to the surgery, the GP already went home.",
          "When I got to the surgery, the GP had already gone home.",
          "When I had got to the surgery, the GP already went home.",
          "When I got to the surgery, the GP has already gone home."
        ],
        answer: "When I got to the surgery, the GP had already gone home.",
        explain: "The GP left before I arrived, so that action is in Past Perfect.",
        explainRu: "Врач ушёл раньше, чем ты пришла, поэтому в Past Perfect стоит именно его действие, а не твоё."
      },
      {
        type: "listen",
        say: "She had already paid for the shopping.",
        options: [
          "She had already paid for the shopping.",
          "She has already paid for the shopping.",
          "She already paid for the shopping."
        ],
        answer: "She had already paid for the shopping.",
        explain: "Listen for had before already.",
        explainRu: "Прислушайся: перед already звучит had."
      },
      {
        type: "match",
        q: "Match the sentence halves.",
        qRu: "Соедини части предложений.",
        pairs: [
          ["By the time the bus came,", "we had waited for forty minutes."],
          ["I was tired because", "I hadn't slept well."],
          ["After she had finished work,", "she went to the gym."],
          ["He didn't recognise me because", "he had never met me before."]
        ],
        explain: "In each sentence, Past Perfect shows the action that happened first.",
        explainRu: "В каждом предложении Past Perfect обозначает то, что произошло раньше."
      }
    ]
  },

  // 2. Reported speech
  {
    id: "reported-speech",
    level: 4,
    order: 2,
    emoji: "💬",
    title: "Reported speech",
    titleRu: "Косвенная речь",
    intro: "How do you tell someone what another person said? In English the verb usually moves one step back into the past.",
    introRu: "Как передать чужие слова? В английском глагол в косвенной речи обычно «сдвигается» на шаг назад в прошлое.",
    sections: [
      {
        title: "Backshift: one step back",
        titleRu: "Сдвиг времён",
        text: "After said or told, the tense usually moves back: am → was, will → would, can → could. Words like today and tomorrow often change too.",
        textRu: "После said или told время обычно сдвигается назад: am → was, will → would, can → could. Слова времени тоже меняются: today → that day, tomorrow → the next day, here → there. Если сказанное всё ещё правда, сдвиг можно не делать, но с ним ты точно не ошибёшься.",
        table: {
          head: ["Direct", "Reported"],
          rows: [
            ["am / is", "was"],
            ["work", "worked"],
            ["am working", "was working"],
            ["worked / have worked", "had worked"],
            ["will", "would"],
            ["can", "could"]
          ]
        },
        examples: [
          { en: "\"I'm tired.\" → She said (that) she was tired.", ru: "«Я устала». → Она сказала, что устала." },
          { en: "\"I'll call you tomorrow.\" → He said he would call me the next day.", ru: "«Я позвоню тебе завтра». → Он сказал, что позвонит мне на следующий день." },
          { en: "\"I've lost my keys.\" → He told us he had lost his keys.", ru: "«Я потерял ключи». → Он сказал нам, что потерял ключи." }
        ]
      },
      {
        title: "Say or tell?",
        titleRu: "Say или tell?",
        text: "Tell needs a person after it: tell me, tell her. Say doesn't: she said that… If you want to add the person after say, use to: she said to me.",
        textRu: "После tell обязательно стоит, кому говорят: tell me, told her. После say человек не нужен: she said that… Если всё же хочешь его назвать, нужен предлог to: she said to me. А вот «said me» — ошибка.",
        examples: [
          { en: "She told me she was running late.", ru: "Она сказала мне, что опаздывает." },
          { en: "She said she was running late.", ru: "Она сказала, что опаздывает." },
          { en: "What did the doctor say to you?", ru: "Что тебе сказал врач?" }
        ]
      },
      {
        title: "Reported questions",
        titleRu: "Косвенные вопросы",
        text: "In reported questions, use normal statement word order and no do/does/did. For yes/no questions, add if or whether.",
        textRu: "В косвенном вопросе порядок слов как в обычном утвердительном предложении: подлежащее, потом сказуемое, без do/does/did и без вопросительного знака. Если вопрос «да/нет», добавляем if или whether (= «ли»).",
        examples: [
          { en: "\"Where do you live?\" → He asked where I lived.", ru: "«Где ты живёшь?» → Он спросил, где я живу." },
          { en: "\"Are you free on Friday?\" → She asked if I was free on Friday.", ru: "«Ты свободна в пятницу?» → Она спросила, свободна ли я в пятницу." },
          { en: "\"Can you work on Sunday?\" → My manager asked whether I could work on Sunday.", ru: "«Можешь поработать в воскресенье?» → Менеджер спросил, могу ли я поработать в воскресенье." }
        ]
      }
    ],
    tip: {
      en: "Two classic mistakes: \"He said me…\" (it should be \"He told me…\") and \"She asked where do I live\" (it should be \"She asked where I lived\"). Also, Russian keeps the original tense (\"Он сказал, что устал\"), but English usually moves it back: \"He said he was tired.\"",
      ru: "Две частые ошибки: «He said me…» (правильно «He told me…») и «She asked where do I live» (правильно «She asked where I lived»). И ещё: в русском время в косвенной речи не меняется («Он сказал, что он устал» — настоящее), а в английском обычно сдвигается назад: «He said he was tired»."
    },
    exercises: [
      {
        type: "choice",
        q: "She ___ me she was running late.",
        options: ["said", "told", "talked"],
        answer: "told",
        explain: "Tell is followed directly by a person: told me.",
        explainRu: "После tell сразу идёт человек: told me. «Said me» — ошибка."
      },
      {
        type: "choice",
        q: "He asked me where ___.",
        options: ["did I live", "I lived", "do I live"],
        answer: "I lived",
        explain: "Reported questions use statement word order without did.",
        explainRu: "В косвенном вопросе обычный порядок слов (подлежащее + глагол) и без did."
      },
      {
        type: "choice",
        q: "\"I'll call you tomorrow,\" Tom said. → Tom said he ___ call me the next day.",
        options: ["will", "would", "had"],
        answer: "would",
        explain: "Will moves back to would in reported speech.",
        explainRu: "В косвенной речи will превращается в would."
      },
      {
        type: "gap",
        q: "\"I'm cold,\" said Masha. → Masha said she ___ cold. (be)",
        answer: ["was"],
        explain: "Am moves back to was.",
        explainRu: "Am сдвигается в was."
      },
      {
        type: "gap",
        q: "\"Do you like spicy food?\" → My colleague asked me ___ I liked spicy food.",
        answer: ["if", "whether"],
        explain: "Yes/no questions are reported with if or whether.",
        explainRu: "Вопрос «да/нет» передаём через if или whether — это наше «ли»."
      },
      {
        type: "order",
        ru: "Она сказала мне, что опоздает.",
        answer: "She told me she would be late.",
        explain: "Told + person, and will becomes would.",
        explainRu: "Told + кому сказали, а will превращается в would. Слово that здесь можно опустить."
      },
      {
        type: "order",
        ru: "Он спросил, где находится вокзал.",
        answer: "He asked where the station was.",
        explain: "Statement word order: the station was, not was the station.",
        explainRu: "Порядок слов как в утверждении: the station was, а не was the station."
      },
      {
        type: "translate",
        ru: "Она спросила меня, работаю ли я в выходные.",
        options: [
          "She asked me do I work at weekends.",
          "She asked me if I worked at weekends.",
          "She asked me if did I work at weekends.",
          "She said me if I worked at weekends."
        ],
        answer: "She asked me if I worked at weekends.",
        explain: "Asked + if + statement word order, with the tense moved back.",
        explainRu: "Asked + if + обычный порядок слов, а время сдвигается: work → worked."
      },
      {
        type: "listen",
        say: "He told us he had lost his keys.",
        options: [
          "He told us he had lost his keys.",
          "He told us he has lost his keys.",
          "He said us he had lost his keys."
        ],
        answer: "He told us he had lost his keys.",
        explain: "Told us, and have lost moves back to had lost.",
        explainRu: "Told us (не said us), а have lost сдвигается в had lost."
      },
      {
        type: "match",
        q: "Match the direct speech form with its reported form.",
        qRu: "Соедини форму прямой речи с формой в косвенной речи.",
        pairs: [
          ["am", "was"],
          ["will", "would"],
          ["can", "could"],
          ["have done", "had done"],
          ["is working", "was working"]
        ],
        explain: "Each tense moves one step back into the past.",
        explainRu: "Каждое время сдвигается на шаг назад в прошлое."
      }
    ]
  },

  // 3. Relative clauses
  {
    id: "relative-clauses",
    level: 4,
    order: 3,
    emoji: "🔗",
    title: "Relative clauses",
    titleRu: "Придаточные определительные",
    intro: "Relative clauses add information about a person, thing or place. They work like the Russian «который», but English has several words for it.",
    introRu: "Придаточные определительные добавляют информацию о человеке, предмете или месте. Это как русское «который», только в английском для него есть несколько слов.",
    sections: [
      {
        title: "who, which, that",
        titleRu: "who, which, that",
        text: "Use who for people and which for things. That can replace both in everyday English.",
        textRu: "Who — для людей, which — для предметов и животных. That можно использовать и для людей, и для предметов — в разговоре это очень частый вариант.",
        table: {
          head: ["Word", "Used for"],
          rows: [
            ["who", "people"],
            ["which", "things"],
            ["that", "people / things"],
            ["whose", "чей / которого"],
            ["where", "places"]
          ]
        },
        examples: [
          { en: "The woman who lives next door is a nurse.", ru: "Женщина, которая живёт по соседству, — медсестра." },
          { en: "I've lost the umbrella which my mum gave me.", ru: "Я потеряла зонт, который мне подарила мама." },
          { en: "Is this the bus that goes to the city centre?", ru: "Это автобус, который идёт в центр города?" }
        ]
      },
      {
        title: "whose and where",
        titleRu: "whose и where",
        text: "Whose shows possession (instead of his, her, their). Where is used for places.",
        textRu: "Whose показывает принадлежность — «чей, у которого», вместо his, her, their. Where — для мест, это «где, в котором».",
        examples: [
          { en: "I've got a friend whose husband works for the NHS.", ru: "У меня есть подруга, муж которой работает в NHS." },
          { en: "This is the café where we first met.", ru: "Это кафе, где мы впервые встретились." },
          { en: "That's the neighbour whose dog barks all night.", ru: "Это тот сосед, чья собака лает всю ночь." }
        ]
      },
      {
        title: "Defining and non-defining",
        titleRu: "Определяющие и неопределяющие",
        text: "A defining clause tells us which person or thing — no commas. A non-defining clause just adds extra information — use commas, and never that.",
        textRu: "Определяющее придаточное уточняет, о ком или о чём речь, — запятые не нужны. Неопределяющее просто добавляет дополнительную информацию — его выделяют запятыми, и that в нём использовать нельзя. В определяющем придаточном who/which/that можно опустить, если после него идёт другое подлежащее: the flat (that) we rented.",
        examples: [
          { en: "The flat we rented is very small.", ru: "Квартира, которую мы сняли, очень маленькая." },
          { en: "My sister, who lives in Leeds, is a teacher.", ru: "Моя сестра, которая живёт в Лидсе, учительница." },
          { en: "Our car, which is fifteen years old, still works perfectly.", ru: "Наша машина, которой пятнадцать лет, до сих пор отлично ездит." }
        ]
      }
    ],
    tip: {
      en: "«Который» works for everything in Russian, so learners often say \"the man which\". Use who for people. Also, don't repeat the object: \"the bag that I bought it\" ✗ → \"the bag that I bought\" ✓. And no that after a comma.",
      ru: "В русском «который» подходит ко всему, поэтому часто получается «the man which». Для людей — who. И не повторяй местоимение: «the bag that I bought it» ✗ → «the bag that I bought» ✓. После запятой that не ставится."
    },
    exercises: [
      {
        type: "choice",
        q: "The woman ___ lives next door is a nurse.",
        options: ["who", "which", "whose"],
        answer: "who",
        explain: "Who is used for people.",
        explainRu: "Речь о человеке, поэтому who."
      },
      {
        type: "choice",
        q: "This is the café ___ we first met.",
        options: ["which", "where", "who"],
        answer: "where",
        explain: "Where is used for places when it means 'in which'.",
        explainRu: "Where — для места, в значении «где, в котором»."
      },
      {
        type: "choice",
        q: "Which sentence is correct?",
        options: [
          "My sister, that lives in Leeds, is a teacher.",
          "My sister, who lives in Leeds, is a teacher.",
          "My sister who lives in Leeds, is a teacher."
        ],
        answer: "My sister, who lives in Leeds, is a teacher.",
        explain: "A non-defining clause needs two commas and cannot use that.",
        explainRu: "Неопределяющее придаточное выделяется двумя запятыми, и that в нём не используется."
      },
      {
        type: "gap",
        q: "I've got a friend ___ husband works for the NHS.",
        answer: ["whose"],
        explain: "Whose shows possession: her husband → whose husband.",
        explainRu: "Whose показывает принадлежность: её муж → муж которой."
      },
      {
        type: "gap",
        q: "The parcel ___ arrived this morning was for my neighbour.",
        answer: ["that", "which"],
        explain: "For things we use which or that.",
        explainRu: "Для предметов — which или that. Здесь опустить слово нельзя, потому что оно само подлежащее."
      },
      {
        type: "order",
        ru: "Это тот мужчина, который мне помог.",
        answer: "That's the man who helped me.",
        explain: "Who refers to a person.",
        explainRu: "Мужчина — человек, поэтому who."
      },
      {
        type: "order",
        ru: "Квартира, которую мы сняли, очень маленькая.",
        answer: "The flat we rented is very small.",
        explain: "In a defining clause we can leave out that when another subject follows.",
        explainRu: "В определяющем придаточном that можно опустить, если после него идёт другое подлежащее (we)."
      },
      {
        type: "translate",
        ru: "Это книга, которую я читаю.",
        options: [
          "This is the book which I am reading it.",
          "This is the book who I am reading.",
          "This is the book that I'm reading.",
          "This is the book what I'm reading."
        ],
        answer: "This is the book that I'm reading.",
        explain: "That/which for things, and no extra 'it' at the end.",
        explainRu: "Для предметов — that или which, и без лишнего it в конце. What в таком значении не используется."
      },
      {
        type: "listen",
        say: "The man who fixed our boiler was really friendly.",
        options: [
          "The man who fixed our boiler was really friendly.",
          "The man which fixed our boiler was really friendly.",
          "The man who fixed our boiler he was really friendly."
        ],
        answer: "The man who fixed our boiler was really friendly.",
        explain: "Who for a person, and no extra he.",
        explainRu: "Who — для человека, и без лишнего he после придаточного."
      },
      {
        type: "match",
        q: "Match the sentence halves.",
        qRu: "Соедини части предложений.",
        pairs: [
          ["A plumber is a person", "who repairs pipes and taps."],
          ["A kettle is a thing", "which boils water."],
          ["A library is a place", "where you can borrow books."],
          ["An orphan is a child", "whose parents have died."]
        ],
        explain: "Who for people, which for things, where for places, whose for possession.",
        explainRu: "Who — люди, which — предметы, where — места, whose — принадлежность."
      }
    ]
  },

  // 4. Third conditional
  {
    id: "third-conditional",
    level: 4,
    order: 4,
    emoji: "💭",
    title: "Third conditional and regrets",
    titleRu: "Третий тип условных предложений и сожаления",
    intro: "The third conditional is for imagining a different past — things that didn't happen. It's also how we talk about regrets.",
    introRu: "Третий тип условных предложений нужен, чтобы представить другое прошлое — то, чего на самом деле не случилось. Так же мы говорим о сожалениях.",
    sections: [
      {
        title: "If I had…, I would have…",
        titleRu: "If I had…, I would have…",
        text: "If + had + participle, then would have + participle. Both parts are about the past, and both are imaginary.",
        textRu: "В части с if: had + причастие. В главной части: would have + причастие. Обе части про прошлое, и обе не произошли на самом деле.",
        table: {
          head: ["If part", "Result"],
          rows: [
            ["If I had known,", "I would have come."],
            ["If she hadn't missed the bus,", "she wouldn't have been late."]
          ]
        },
        examples: [
          { en: "If I had known about the strike, I would have taken the bus.", ru: "Если бы я знала о забастовке, я бы поехала на автобусе." },
          { en: "If we had left earlier, we wouldn't have missed the train.", ru: "Если бы мы вышли раньше, мы бы не опоздали на поезд." },
          { en: "If it hadn't rained, we would have had a picnic.", ru: "Если бы не пошёл дождь, мы бы устроили пикник." }
        ]
      },
      {
        title: "Short forms and could / might have",
        titleRu: "Сокращения и could / might have",
        text: "In speech, both had and would become 'd. Instead of would have, you can use could have (it was possible) or might have (maybe).",
        textRu: "В разговоре и had, и would сокращаются до 'd: в части с if 'd = had, в главной части 'd = would. Вместо would have можно сказать could have (могла бы) или might have (возможно, …бы).",
        examples: [
          { en: "If I'd known, I'd have called you.", ru: "Если бы я знала, я бы тебе позвонила." },
          { en: "If you'd asked me, I could have helped.", ru: "Если бы ты меня попросила, я могла бы помочь." },
          { en: "If he had checked the map, he might not have got lost.", ru: "Если бы он посмотрел на карту, он, может быть, не заблудился бы." }
        ]
      },
      {
        title: "I wish I had… / If only…",
        titleRu: "I wish I had… / If only…",
        text: "To talk about regrets about the past, use I wish or If only + had + participle.",
        textRu: "Чтобы выразить сожаление о прошлом, используй I wish или If only + had + причастие. По-русски это «жаль, что…» или «вот если бы…».",
        examples: [
          { en: "I wish I had bought those shoes.", ru: "Жаль, что я не купила те туфли." },
          { en: "I wish I hadn't eaten so much cake.", ru: "Жаль, что я съела столько торта." },
          { en: "If only we had booked earlier!", ru: "Вот если бы мы забронировали заранее!" }
        ]
      }
    ],
    tip: {
      en: "In Russian, «Если бы я знала, я бы пришла» can be about now or the past. In English you must choose: for the past, say \"If I had known, I would have come\", not \"If I knew, I would come\". And never put would in the if part: \"If I would have known\" ✗.",
      ru: "По-русски «Если бы я знала, я бы пришла» может относиться и к настоящему, и к прошлому. В английском надо выбрать: про прошлое — «If I had known, I would have come», а не «If I knew, I would come». И никогда не ставь would в часть с if: «If I would have known» ✗."
    },
    exercises: [
      {
        type: "choice",
        q: "If I ___ about the strike, I would have taken the bus.",
        options: ["knew", "had known", "would have known"],
        answer: "had known",
        explain: "The if part of the third conditional uses had + participle.",
        explainRu: "В части с if в третьем типе нужен had + причастие, а не would."
      },
      {
        type: "choice",
        q: "If we had left earlier, we ___ the train.",
        options: ["wouldn't miss", "wouldn't have missed", "hadn't missed"],
        answer: "wouldn't have missed",
        explain: "The result part uses would have + participle.",
        explainRu: "В главной части — would have + причастие: wouldn't have missed."
      },
      {
        type: "choice",
        q: "You didn't tell me about the sale! I wish you ___ me.",
        options: ["told", "had told", "would tell"],
        answer: "had told",
        explain: "A regret about the past: I wish + had + participle.",
        explainRu: "Сожаление о прошлом: I wish + had + причастие."
      },
      {
        type: "gap",
        q: "If she had studied harder, she ___ the exam. (pass)",
        answer: ["would have passed", "would've passed"],
        explain: "Would have + participle in the result part.",
        explainRu: "В главной части — would have + причастие."
      },
      {
        type: "gap",
        q: "I wish I ___ so much cake last night. (not / eat)",
        answer: ["hadn't eaten", "had not eaten"],
        explain: "A regret about the past: wish + hadn't + participle.",
        explainRu: "Сожаление о том, что уже случилось: wish + hadn't + причастие."
      },
      {
        type: "order",
        ru: "Если бы я знала, я бы тебе позвонила.",
        answer: "If I had known, I would have called you.",
        explain: "Had known in the if part, would have called in the result.",
        explainRu: "В части с if — had known, в главной — would have called."
      },
      {
        type: "order",
        ru: "Жаль, что я не купила те туфли.",
        answer: "I wish I had bought those shoes.",
        explain: "Notice: Russian has «не», but English is positive — I wish I had bought.",
        explainRu: "Обрати внимание: в русском есть «не», а в английском предложение утвердительное — я хотела бы, чтобы купила."
      },
      {
        type: "translate",
        ru: "Если бы ты вчера меня попросила, я бы помогла.",
        options: [
          "If you asked me yesterday, I would help.",
          "If you had asked me yesterday, I would have helped.",
          "If you would have asked me yesterday, I would have helped.",
          "If you had asked me yesterday, I had helped."
        ],
        answer: "If you had asked me yesterday, I would have helped.",
        explain: "Yesterday shows it's about the past, so both parts need the third conditional.",
        explainRu: "«Вчера» указывает на прошлое, поэтому обе части в третьем типе: had asked и would have helped."
      },
      {
        type: "listen",
        say: "We'd have come if you'd invited us.",
        options: [
          "We'd have come if you'd invited us.",
          "We'd come if you invited us.",
          "We'd have come if you invited us."
        ],
        answer: "We'd have come if you'd invited us.",
        explain: "Listen for 'd have in the first part and you'd in the if part.",
        explainRu: "Прислушайся: в первой части 'd have, а в части с if — you'd (you had)."
      },
      {
        type: "match",
        q: "Match the sentence halves.",
        qRu: "Соедини части предложений.",
        pairs: [
          ["If it hadn't rained,", "we would have had a picnic."],
          ["If I had set an alarm,", "I wouldn't have been late."],
          ["If he had checked the map,", "he wouldn't have got lost."],
          ["If they had booked earlier,", "they would have paid less."]
        ],
        explain: "Each sentence imagines a different past and its result.",
        explainRu: "Каждое предложение описывает другое прошлое и его воображаемый результат."
      }
    ]
  },

  // 5. Gerund or infinitive
  {
    id: "gerund-infinitive",
    level: 4,
    order: 5,
    emoji: "🧩",
    title: "Gerund or infinitive",
    titleRu: "Герундий или инфинитив",
    intro: "After some verbs we use -ing, after others to + verb. A few verbs take both, but the meaning changes.",
    introRu: "После одних глаголов нужна форма с -ing (герундий), после других — to + глагол (инфинитив). А некоторые глаголы могут стоять с обоими, но смысл при этом меняется.",
    sections: [
      {
        title: "Verbs + -ing",
        titleRu: "Глаголы + -ing",
        text: "After enjoy, mind, finish, avoid, suggest, keep and can't stand, use the -ing form. Look forward to also takes -ing, because to here is a preposition.",
        textRu: "После enjoy, mind, finish, avoid, suggest, keep, can't stand ставим форму на -ing. Look forward to — тоже с -ing, потому что to здесь предлог, а не частица инфинитива.",
        table: {
          head: ["+ -ing", "+ to + verb"],
          rows: [
            ["enjoy", "want"],
            ["mind", "decide"],
            ["finish", "hope"],
            ["avoid", "need"],
            ["suggest", "afford"],
            ["look forward to", "would like"]
          ]
        },
        examples: [
          { en: "I really enjoy working in the garden.", ru: "Мне очень нравится работать в саду." },
          { en: "Would you mind opening the window?", ru: "Ты не против открыть окно?" },
          { en: "I'm looking forward to seeing my mum.", ru: "Я с нетерпением жду встречи с мамой." }
        ]
      },
      {
        title: "Verbs + to + verb",
        titleRu: "Глаголы + to + глагол",
        text: "After want, decide, hope, plan, need, agree, promise, afford and would like, use to + verb.",
        textRu: "После want, decide, hope, plan, need, agree, promise, afford и would like ставим to + глагол.",
        examples: [
          { en: "We can't afford to go on holiday this year.", ru: "В этом году мы не можем позволить себе поехать в отпуск." },
          { en: "I've decided to look for a new job.", ru: "Я решила искать новую работу." },
          { en: "I'd like to book an appointment, please.", ru: "Я хотела бы записаться на приём." }
        ]
      },
      {
        title: "stop, remember, forget",
        titleRu: "stop, remember, forget",
        text: "These verbs change meaning. Stop doing = no longer do it; stop to do = stop in order to do it. Remember/forget to do = a task; remember doing = a memory.",
        textRu: "У этих глаголов меняется смысл. Stop doing — перестать что-то делать; stop to do — остановиться, чтобы что-то сделать. Remember / forget to do — не забыть / забыть сделать (дело впереди). Remember doing — помнить, как что-то делала (это уже было).",
        examples: [
          { en: "I stopped eating chocolate.", ru: "Я перестала есть шоколад." },
          { en: "On the way home I stopped to buy some bread.", ru: "По дороге домой я остановилась, чтобы купить хлеба." },
          { en: "Don't forget to put the bins out tonight!", ru: "Не забудь вечером вынести мусор!" },
          { en: "I definitely remember locking the door.", ru: "Я точно помню, что заперла дверь." }
        ]
      }
    ],
    tip: {
      en: "In Russian an infinitive follows almost any verb («люблю готовить», «жду встречи»), so learners say \"I enjoy to cook\" or \"I look forward to see you\". Correct: \"I enjoy cooking\", \"I look forward to seeing you\".",
      ru: "В русском почти после любого глагола идёт инфинитив («люблю готовить»), поэтому хочется сказать «I enjoy to cook» или «I look forward to see you». Правильно: «I enjoy cooking», «I look forward to seeing you»."
    },
    exercises: [
      {
        type: "choice",
        q: "I really enjoy ___ in the garden.",
        options: ["to work", "working", "work"],
        answer: "working",
        explain: "Enjoy is followed by the -ing form.",
        explainRu: "После enjoy — форма на -ing."
      },
      {
        type: "choice",
        q: "We can't afford ___ on holiday this year.",
        options: ["going", "to go", "go"],
        answer: "to go",
        explain: "Afford is followed by to + verb.",
        explainRu: "После afford — to + глагол."
      },
      {
        type: "choice",
        q: "On the way home I stopped ___ some bread.",
        options: ["buying", "to buy", "buy"],
        answer: "to buy",
        explain: "Stop to do = stop in order to do something.",
        explainRu: "Stop to do — остановиться, чтобы что-то сделать. «Stopped buying» значило бы «перестала покупать»."
      },
      {
        type: "gap",
        q: "I look forward to ___ from you. (hear)",
        answer: ["hearing"],
        explain: "In look forward to, to is a preposition, so we use -ing.",
        explainRu: "В look forward to частица to — это предлог, поэтому дальше -ing. Классическая фраза в конце письма."
      },
      {
        type: "gap",
        q: "Don't forget ___ the bins out tonight! (put)",
        answer: ["to put"],
        explain: "Forget to do = forget a task you need to do.",
        explainRu: "Forget to do — забыть сделать то, что нужно сделать."
      },
      {
        type: "order",
        ru: "Я перестала есть шоколад.",
        answer: "I stopped eating chocolate.",
        explain: "Stop doing = no longer do it.",
        explainRu: "Stop doing — перестать что-то делать."
      },
      {
        type: "order",
        ru: "Ты не против открыть окно?",
        answer: "Would you mind opening the window?",
        explain: "Mind is followed by the -ing form.",
        explainRu: "После mind — форма на -ing. Это вежливая просьба."
      },
      {
        type: "translate",
        ru: "Я точно помню, что заперла дверь.",
        options: [
          "I definitely remember to lock the door.",
          "I definitely remember locking the door.",
          "I definitely remember lock the door.",
          "I definitely remember that I lock the door."
        ],
        answer: "I definitely remember locking the door.",
        explain: "Remember doing = a memory of something you did.",
        explainRu: "Remember doing — помнить то, что уже сделала. «Remember to lock» — не забыть запереть."
      },
      {
        type: "listen",
        say: "She suggested going to the cinema.",
        options: [
          "She suggested going to the cinema.",
          "She suggested to go to the cinema.",
          "She suggests going to the cinema."
        ],
        answer: "She suggested going to the cinema.",
        explain: "Suggest is followed by -ing, not to + verb.",
        explainRu: "После suggest — -ing, а не to + глагол."
      },
      {
        type: "match",
        q: "Match the English with the Russian meaning.",
        qRu: "Соедини английскую фразу с её значением.",
        pairs: [
          ["stop smoking", "бросить курить"],
          ["stop to smoke", "остановиться, чтобы покурить"],
          ["remember to call", "не забыть позвонить"],
          ["remember calling", "помнить, что звонила"],
          ["forget to pay", "забыть заплатить"]
        ],
        explain: "With stop and remember, -ing and to + verb have different meanings.",
        explainRu: "У stop и remember формы -ing и to + глагол имеют разный смысл."
      }
    ]
  },

  // 6. used to / be used to / get used to
  {
    id: "used-to",
    level: 4,
    order: 6,
    emoji: "🕰️",
    title: "used to / be used to / get used to",
    titleRu: "used to / be used to / get used to",
    intro: "These three look similar but mean different things: what you did before, what feels normal now, and what is becoming normal.",
    introRu: "Эти три конструкции похожи, но значат разное: что ты делала раньше, к чему уже привыкла и к чему привыкаешь сейчас.",
    sections: [
      {
        title: "used to + verb: the past",
        titleRu: "used to + глагол: раньше",
        text: "Used to + verb is for past habits and states that are not true now. It only exists in the past. Negative: didn't use to. Question: Did you use to…?",
        textRu: "Used to + глагол — это привычки и состояния в прошлом, которых сейчас уже нет («раньше…»). Эта конструкция бывает только в прошедшем времени. Отрицание: didn't use to, вопрос: Did you use to…? (после did — use без -d).",
        table: {
          head: ["Form", "Meaning"],
          rows: [
            ["used to do", "раньше делала"],
            ["be used to doing", "привыкла"],
            ["get used to doing", "привыкать"]
          ]
        },
        examples: [
          { en: "I used to live in St Petersburg.", ru: "Раньше я жила в Санкт-Петербурге." },
          { en: "We didn't use to have a car.", ru: "Раньше у нас не было машины." },
          { en: "Did you use to play any sport at school?", ru: "Ты занималась каким-нибудь спортом в школе?" }
        ]
      },
      {
        title: "be used to: it's normal for me",
        titleRu: "be used to: я привыкла",
        text: "Be used to + noun or -ing means something feels normal and familiar. Here to is a preposition, so the verb takes -ing.",
        textRu: "Be used to + существительное или -ing означает «привыкла, мне это уже привычно». To здесь предлог, поэтому глагол после него — с -ing. Глагол be меняется по временам: I'm used to, I was used to.",
        examples: [
          { en: "I'm used to the rain now.", ru: "Я уже привыкла к дождю." },
          { en: "She's used to getting up early.", ru: "Она привыкла рано вставать." },
          { en: "I'm still not used to the local food.", ru: "Я всё ещё не привыкла к местной еде." }
        ]
      },
      {
        title: "get used to: becoming normal",
        titleRu: "get used to: привыкать",
        text: "Get used to + noun or -ing is the process of becoming familiar with something.",
        textRu: "Get used to + существительное или -ing — это процесс: привыкать, привыкнуть.",
        examples: [
          { en: "I'm slowly getting used to working nights.", ru: "Я потихоньку привыкаю работать по ночам." },
          { en: "It took me a year to get used to the British weather.", ru: "Мне понадобился год, чтобы привыкнуть к британской погоде." },
          { en: "You'll soon get used to driving on the left.", ru: "Ты скоро привыкнешь ездить по левой стороне." }
        ]
      }
    ],
    tip: {
      en: "Don't say \"I use to drink tea\" for a present habit — for now, say \"I usually drink tea\". And don't mix the forms: \"I'm used to get up early\" ✗ → \"I'm used to getting up early\" ✓.",
      ru: "Не говори «I use to drink tea» о настоящей привычке — used to бывает только в прошлом. Для настоящего: «I usually drink tea». И не путай формы: «I'm used to get up early» ✗ → «I'm used to getting up early» ✓ (после be used to — -ing)."
    },
    exercises: [
      {
        type: "choice",
        q: "When I lived in Moscow, I ___ take the metro every day.",
        options: ["used to", "was used to", "use to"],
        answer: "used to",
        explain: "A past habit that has stopped: used to + verb.",
        explainRu: "Привычка в прошлом, которой сейчас нет: used to + глагол."
      },
      {
        type: "choice",
        q: "After five years in Liverpool, I'm used to ___ the Scouse accent.",
        options: ["hear", "hearing", "heard"],
        answer: "hearing",
        explain: "Be used to is followed by -ing.",
        explainRu: "После be used to — форма на -ing."
      },
      {
        type: "choice",
        q: "Which sentence is correct?",
        options: [
          "I use to drink tea in the morning.",
          "I usually drink tea in the morning.",
          "I'm used to drink tea in the morning."
        ],
        answer: "I usually drink tea in the morning.",
        explain: "For a present habit, use usually, not use to.",
        explainRu: "Для привычки в настоящем — usually. «Use to» в настоящем времени не бывает."
      },
      {
        type: "gap",
        q: "I'm slowly ___ used to working nights. (get)",
        answer: ["getting"],
        explain: "Am getting used to = the process of getting used to something now.",
        explainRu: "Am getting used to — привыкаю прямо сейчас, процесс."
      },
      {
        type: "gap",
        q: "I ___ like olives, but now I love them. (not / use to)",
        answer: ["didn't use to", "did not use to"],
        explain: "Negative: didn't use to (use without -d after did).",
        explainRu: "Отрицание: didn't use to — после did пишем use без -d."
      },
      {
        type: "order",
        ru: "Раньше я жила в Санкт-Петербурге.",
        answer: "I used to live in St Petersburg.",
        explain: "Used to + verb for a past state.",
        explainRu: "Used to + глагол — о том, что было раньше."
      },
      {
        type: "order",
        ru: "Я всё ещё не привыкла к местной еде.",
        answer: "I'm still not used to the local food.",
        explain: "Be used to + noun means it feels normal.",
        explainRu: "Be used to + существительное — «привыкла к чему-то»."
      },
      {
        type: "translate",
        ru: "Я привыкла рано вставать.",
        options: [
          "I used to get up early.",
          "I'm used to getting up early.",
          "I'm used to get up early.",
          "I use to get up early."
        ],
        answer: "I'm used to getting up early.",
        explain: "Be used to + -ing = it's normal for me.",
        explainRu: "Be used to + -ing — «мне привычно». «I used to get up early» значит «раньше я рано вставала»."
      },
      {
        type: "listen",
        say: "We didn't use to have a car.",
        options: [
          "We didn't use to have a car.",
          "We don't use to have a car.",
          "We aren't used to having a car."
        ],
        answer: "We didn't use to have a car.",
        explain: "Listen for didn't — used to only exists in the past.",
        explainRu: "Прислушайся к didn't — used to бывает только в прошедшем времени."
      },
      {
        type: "match",
        q: "Match the English with the Russian.",
        qRu: "Соедини английские предложения с русскими.",
        pairs: [
          ["I used to work in a shop.", "Раньше я работала в магазине."],
          ["I'm used to working in a shop.", "Я привыкла работать в магазине."],
          ["I'm getting used to working in a shop.", "Я привыкаю работать в магазине."],
          ["I'll never get used to working in a shop.", "Я никогда не привыкну работать в магазине."]
        ],
        explain: "Used to = before; be used to = familiar; get used to = becoming familiar.",
        explainRu: "Used to — раньше; be used to — уже привыкла; get used to — привыкаю или привыкну."
      }
    ]
  },

  // 7. Modals of deduction
  {
    id: "modals-deduction",
    level: 4,
    order: 7,
    emoji: "🔍",
    title: "Modals of deduction",
    titleRu: "Модальные глаголы предположения",
    intro: "Must, might, may, could and can't help you guess how sure you are — about now and about the past.",
    introRu: "Must, might, may, could и can't помогают высказывать догадки и показывать, насколько ты уверена — о настоящем и о прошлом.",
    sections: [
      {
        title: "Present: must, might, can't + verb",
        titleRu: "Настоящее: must, might, can't + глагол",
        text: "Must = I'm sure it's true. Might, may, could = perhaps. Can't = I'm sure it isn't true.",
        textRu: "Must — «наверняка, должно быть» (я уверена, что это так). Might, may, could — «возможно, может быть». Can't — «не может быть» (я уверена, что это не так).",
        table: {
          head: ["How sure?", "Modal"],
          rows: [
            ["sure: yes", "must be"],
            ["perhaps", "might / may / could be"],
            ["sure: no", "can't be"]
          ]
        },
        examples: [
          { en: "You've been working all day — you must be exhausted!", ru: "Ты работала весь день — ты, должно быть, без сил!" },
          { en: "He might be at work now.", ru: "Возможно, он сейчас на работе." },
          { en: "That can't be Mark — he's in Spain this week!", ru: "Это не может быть Марк — он на этой неделе в Испании!" }
        ]
      },
      {
        title: "Past: must have, might have, can't have",
        titleRu: "Прошлое: must have, might have, can't have",
        text: "For guesses about the past, use the modal + have + past participle.",
        textRu: "Для догадок о прошлом: модальный глагол + have + причастие (третья форма).",
        examples: [
          { en: "The ground is wet. It must have rained in the night.", ru: "Земля мокрая. Наверное, ночью шёл дождь." },
          { en: "I might have left my keys at work.", ru: "Возможно, я оставила ключи на работе." },
          { en: "He can't have said that — he's always so polite.", ru: "Не может быть, чтобы он такое сказал — он всегда такой вежливый." }
        ]
      },
      {
        title: "Right now: must be doing",
        titleRu: "Прямо сейчас: must be doing",
        text: "For a guess about something in progress now, use the modal + be + -ing.",
        textRu: "Если догадка о том, что происходит прямо сейчас, используй модальный глагол + be + -ing.",
        examples: [
          { en: "They must be on their way.", ru: "Они, наверное, уже в пути." },
          { en: "She isn't answering — she might be driving.", ru: "Она не отвечает — может, она за рулём." },
          { en: "The baby can't be sleeping — I can hear him.", ru: "Не может быть, что малыш спит — я его слышу." }
        ]
      }
    ],
    tip: {
      en: "The opposite of must (sure) is can't, not mustn't. \"She mustn't be at home\" ✗ → \"She can't be at home\" ✓. Mustn't means 'not allowed'.",
      ru: "Противоположность must (уверена, что да) — это can't, а не mustn't. «She mustn't be at home» ✗ → «She can't be at home» ✓. Mustn't означает запрет: «нельзя»."
    },
    exercises: [
      {
        type: "choice",
        q: "Her lights are off and her car's gone. She ___ be at home.",
        options: ["mustn't", "can't", "doesn't have to"],
        answer: "can't",
        explain: "We're sure she isn't at home, so we use can't.",
        explainRu: "Мы уверены, что её нет дома, — значит, can't. Mustn't — это запрет."
      },
      {
        type: "choice",
        q: "You've been working all day — you ___ be exhausted!",
        options: ["must", "can't", "should"],
        answer: "must",
        explain: "We're sure it's true, so must.",
        explainRu: "Мы почти уверены — значит, must («наверняка»)."
      },
      {
        type: "choice",
        q: "I can't find my keys. I ___ them at work — I'm not sure.",
        options: ["might have left", "must have left", "can't have left"],
        answer: "might have left",
        explain: "'I'm not sure' means it's only a possibility: might have.",
        explainRu: "«Я не уверена» — это лишь возможность, поэтому might have left."
      },
      {
        type: "gap",
        q: "The ground is wet. It ___ rained in the night. (must)",
        answer: ["must have", "must've"],
        explain: "A confident guess about the past: must have + participle.",
        explainRu: "Уверенная догадка о прошлом: must have + причастие."
      },
      {
        type: "gap",
        q: "That ___ be Mark at the door — he's in Spain this week! (can)",
        answer: ["can't", "cannot"],
        explain: "We're sure it isn't true, so can't.",
        explainRu: "Мы уверены, что это не он, — значит, can't."
      },
      {
        type: "order",
        ru: "Она, должно быть, опоздала на автобус.",
        answer: "She must have missed the bus.",
        explain: "Must have + participle for a confident guess about the past.",
        explainRu: "Must have + причастие — уверенная догадка о прошлом. «Опоздать на автобус» — miss the bus."
      },
      {
        type: "order",
        ru: "Возможно, он сейчас на работе.",
        answer: "He might be at work now.",
        explain: "Might be = perhaps, about the present.",
        explainRu: "Might be — «возможно» о настоящем."
      },
      {
        type: "translate",
        ru: "Не может быть, чтобы он это сказал.",
        options: [
          "He couldn't say that.",
          "He can't have said that.",
          "He mustn't have said that.",
          "He didn't can say that."
        ],
        answer: "He can't have said that.",
        explain: "Can't have + participle = I'm sure it didn't happen.",
        explainRu: "Can't have + причастие — «не может быть, чтобы это случилось». «He couldn't say that» значит «он не мог (был не в состоянии) это сказать»."
      },
      {
        type: "listen",
        say: "They must be on their way.",
        options: [
          "They must be on their way.",
          "They must have been on their way.",
          "They might be on their way."
        ],
        answer: "They must be on their way.",
        explain: "Listen for must be — a guess about now.",
        explainRu: "Прислушайся: must be — догадка о том, что сейчас."
      },
      {
        type: "match",
        q: "Match the English with the Russian.",
        qRu: "Соедини английские предложения с русскими.",
        pairs: [
          ["She must be tired.", "Она наверняка устала."],
          ["She might be tired.", "Возможно, она устала."],
          ["She can't be tired.", "Не может быть, чтобы она устала."],
          ["She must have been tired yesterday.", "Вчера она наверняка устала."]
        ],
        explain: "Must = sure, might = perhaps, can't = sure it's not true; have + participle for the past.",
        explainRu: "Must — уверена, might — возможно, can't — уверена, что нет; have + причастие — о прошлом."
      }
    ]
  }
]);
