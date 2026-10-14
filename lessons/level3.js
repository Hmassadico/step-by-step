// Level 3 — Getting Confident (B1)
window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([

  // ───────────────────────────── 1. Present Perfect
  {
    id: "present-perfect",
    level: 3,
    order: 1,
    emoji: "✅",
    title: "Present Perfect",
    titleRu: "Present Perfect (настоящее совершённое)",
    intro: "The Present Perfect connects the past with now. We use it for life experience and for things that have just happened or have already happened.",
    introRu: "Present Perfect связывает прошлое с настоящим. Мы используем его, когда говорим о жизненном опыте и о том, что только что или уже произошло, — важен результат сейчас, а не точное время.",
    sections: [
      {
        title: "Form: have / has + past participle",
        titleRu: "Форма: have / has + причастие",
        text: "Use have or has + the past participle (the 3rd form of the verb). In speech we usually contract: I've, she's.",
        textRu: "Берём вспомогательный глагол have или has и причастие прошедшего времени (третью форму глагола). У правильных глаголов она оканчивается на -ed: worked, cleaned. В разговоре обычно сокращаем: I've, she's, we've.",
        table: {
          head: ["Subject", "+", "−", "?"],
          rows: [
            ["I / you / we / they", "have ('ve) worked", "haven't worked", "Have you worked?"],
            ["he / she / it", "has ('s) worked", "hasn't worked", "Has she worked?"]
          ]
        },
        examples: [
          { en: "I've cleaned the kitchen.", ru: "Я убрала на кухне." },
          { en: "She hasn't called me.", ru: "Она мне не позвонила." },
          { en: "Have you booked the tickets?", ru: "Ты забронировала билеты?" }
        ]
      },
      {
        title: "Irregular past participles",
        titleRu: "Неправильные причастия",
        text: "Many common verbs have an irregular 3rd form. Learn them together with the past form.",
        textRu: "У многих частых глаголов третья форма неправильная — её нужно запомнить. Учи сразу все три формы: go – went – gone.",
        table: {
          head: ["Verb", "Past", "Participle"],
          rows: [
            ["go", "went", "gone / been"],
            ["see", "saw", "seen"],
            ["eat", "ate", "eaten"],
            ["do", "did", "done"],
            ["write", "wrote", "written"],
            ["buy", "bought", "bought"],
            ["lose", "lost", "lost"]
          ]
        },
        examples: [
          { en: "I've lost my keys.", ru: "Я потеряла ключи." },
          { en: "We've bought a new sofa.", ru: "Мы купили новый диван." }
        ]
      },
      {
        title: "Experience: ever / never",
        titleRu: "Опыт: ever / never",
        text: "Use the Present Perfect to talk about experience in your life, without saying when. Ever = at any time; never = at no time.",
        textRu: "Когда говорим о жизненном опыте («когда-нибудь», «никогда»), используем Present Perfect и не называем время. Ever ставим в вопросах, never — в утверждениях (с ним не нужно ещё одно отрицание). Обрати внимание: «быть где-то» = have been to.",
        examples: [
          { en: "Have you ever been to Scotland?", ru: "Ты когда-нибудь была в Шотландии?" },
          { en: "I've never eaten haggis.", ru: "Я никогда не ела хаггис." },
          { en: "He's been to Spain three times.", ru: "Он был в Испании три раза." }
        ]
      },
      {
        title: "just / already / yet",
        titleRu: "just / already / yet",
        text: "Just = a moment ago. Already = sooner than expected. Yet = until now, in questions and negatives; it goes at the end.",
        textRu: "Just — «только что», already — «уже» (ставим между have и причастием). Yet — «уже?» в вопросах и «ещё не» в отрицаниях, ставим в конце предложения.",
        examples: [
          { en: "I've just made a cup of tea.", ru: "Я только что заварила чай." },
          { en: "She's already paid.", ru: "Она уже заплатила." },
          { en: "Have you finished yet?", ru: "Ты уже закончила?" },
          { en: "The parcel hasn't arrived yet.", ru: "Посылка ещё не пришла." }
        ]
      }
    ],
    tip: {
      en: "Russian has only one past tense, so it's tempting to say \"I already ate\" or \"Did you ever be in London?\". In British English say \"I've already eaten\" and \"Have you ever been to London?\". And don't forget have/has: not \"I seen it\", but \"I've seen it\".",
      ru: "В русском одно прошедшее время, поэтому хочется сказать «I already ate» или «Did you ever be in London?». В британском английском правильно: «I've already eaten» и «Have you ever been to London?». И не забывай have/has: не «I seen it», а «I've seen it»."
    },
    exercises: [
      { type: "choice", q: "Have you ever ___ to Edinburgh?", options: ["be", "was", "been", "went"], answer: "been",
        explain: "After have/has we need the past participle: been.",
        explainRu: "После have/has нужно причастие (третья форма): been. «Быть где-то» = have been to." },
      { type: "choice", q: "She ___ just left the office.", options: ["has", "have", "is", "was"], answer: "has",
        explain: "She takes has in the Present Perfect.",
        explainRu: "С he / she / it используем has: She has just left." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["I haven't finished yet.", "I didn't finish yet.", "I haven't finished already.", "I not finished yet."],
        answer: "I haven't finished yet.",
        explain: "Yet goes with the Present Perfect in negatives and questions.",
        explainRu: "«Ещё не» = haven't … yet. Already в отрицаниях не используется, а без haven't предложение неполное." },
      { type: "gap", q: "I ___ this film. (not / see)", answer: ["haven't seen", "have not seen"],
        explain: "Negative Present Perfect: haven't + past participle (seen).",
        explainRu: "Отрицание: haven't (have not) + третья форма глагола see — seen." },
      { type: "gap", q: "He has ___ his keys again! (lose)", answer: ["lost"],
        explain: "The past participle of lose is lost.",
        explainRu: "Третья форма глагола lose — lost (lose – lost – lost)." },
      { type: "order", ru: "Ты когда-нибудь была в Шотландии?", answer: "Have you ever been to Scotland?",
        explain: "Question: Have + subject + ever + been to + place.",
        explainRu: "В вопросе have стоит перед подлежащим, ever — перед причастием: Have you ever been to…?" },
      { type: "order", ru: "Я только что заварила чай.", answer: "I have just made tea.",
        explain: "Just goes between have and the past participle.",
        explainRu: "Just ставим между have и причастием: I have just made…" },
      { type: "translate", ru: "Я уже поела.",
        options: ["I have already eaten.", "I already eat.", "I have already ate.", "I am already eaten."],
        answer: "I have already eaten.",
        explain: "Have + already + past participle (eaten, not ate).",
        explainRu: "Нужно have + already + третья форма: eaten. Ate — это вторая форма, а «I am eaten» значит «меня съели»." },
      { type: "listen", say: "She's written three emails.",
        options: ["She's written three emails.", "She wrote three emails.", "She's writing three emails."],
        answer: "She's written three emails.",
        explain: "She's written = she has written (Present Perfect).",
        explainRu: "She's written — это she has written, Present Perfect: результат есть сейчас." },
      { type: "match", q: "Match the verb with its past participle.", qRu: "Соедини глагол с его третьей формой (причастием).",
        pairs: [["go", "gone"], ["see", "seen"], ["buy", "bought"], ["write", "written"], ["eat", "eaten"]],
        explain: "These are common irregular past participles.",
        explainRu: "Это частые неправильные глаголы — их третьи формы стоит выучить наизусть." }
    ]
  },

  // ───────────────────────────── 2. Present Perfect vs Past Simple
  {
    id: "perfect-vs-past",
    level: 3,
    order: 2,
    emoji: "⏳",
    title: "Present Perfect vs Past Simple",
    titleRu: "Present Perfect или Past Simple",
    intro: "Both tenses talk about the past, but in different ways. The key question is: do we say WHEN it happened?",
    introRu: "Оба времени говорят о прошлом, но по-разному. Главный вопрос: называем ли мы, КОГДА это случилось?",
    sections: [
      {
        title: "Finished time → Past Simple",
        titleRu: "Законченное время → Past Simple",
        text: "If we say or know when something happened (yesterday, last year, in 2019, two days ago), we use the Past Simple.",
        textRu: "Если мы называем время или оно понятно из контекста (yesterday, last year, in 2019, two days ago, when I was a child), используем Past Simple. С такими словами Present Perfect нельзя.",
        table: {
          head: ["Past Simple", "Present Perfect"],
          rows: [
            ["yesterday", "ever / never"],
            ["last week", "just / already / yet"],
            ["in 2019", "this week / today"],
            ["two days ago", "since 2020"],
            ["When…?", "How long…?"]
          ]
        },
        examples: [
          { en: "I went to Spain last summer.", ru: "Прошлым летом я ездила в Испанию." },
          { en: "We moved to the UK in 2019.", ru: "Мы переехали в Великобританию в 2019 году." }
        ]
      },
      {
        title: "No time or unfinished time → Present Perfect",
        titleRu: "Без времени или незаконченный период → Present Perfect",
        text: "If we don't say when, or the time period isn't finished (today, this week), we use the Present Perfect.",
        textRu: "Если время не называем или период ещё не закончился (today, this week, this year), используем Present Perfect.",
        examples: [
          { en: "I've been to Spain twice.", ru: "Я была в Испании два раза." },
          { en: "I've had three coffees today.", ru: "Сегодня я выпила уже три кофе." }
        ]
      },
      {
        title: "A typical conversation",
        titleRu: "Типичный диалог",
        text: "We often start with the Present Perfect (general experience) and then switch to the Past Simple for the details.",
        textRu: "Часто разговор начинается с Present Perfect (общий опыт), а потом, когда переходим к подробностям — когда, где, как, — переключаемся на Past Simple.",
        examples: [
          { en: "Have you ever been to Wales? – Yes, I went there last year.", ru: "Ты когда-нибудь была в Уэльсе? – Да, ездила туда в прошлом году." },
          { en: "When did you arrive?", ru: "Когда ты приехала?" }
        ]
      },
      {
        title: "for / since",
        titleRu: "for / since",
        text: "Present Perfect + for/since = it started in the past and is still true. Past Simple + for = it's finished.",
        textRu: "Present Perfect + for / since — ситуация началась в прошлом и продолжается сейчас. Past Simple + for — всё уже закончилось.",
        examples: [
          { en: "I've lived in Leeds since 2020.", ru: "Я живу в Лидсе с 2020 года. (и сейчас живу)" },
          { en: "I lived in Moscow for twenty years.", ru: "Я прожила в Москве двадцать лет. (сейчас уже нет)" }
        ]
      }
    ],
    tip: {
      en: "Never use the Present Perfect with finished time words. Not \"I have seen him yesterday\", but \"I saw him yesterday\". And questions with When…? need the Past Simple: \"When did you arrive?\", not \"When have you arrived?\".",
      ru: "Никогда не используй Present Perfect со словами законченного времени. Не «I have seen him yesterday», а «I saw him yesterday». И вопрос When…? требует Past Simple: «When did you arrive?», а не «When have you arrived?»."
    },
    exercises: [
      { type: "choice", q: "I ___ my mum last Sunday.", options: ["have called", "called", "have call", "call"], answer: "called",
        explain: "Last Sunday is finished time, so we use the Past Simple.",
        explainRu: "Last Sunday — законченное время, поэтому нужен Past Simple: called." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["I have moved to the UK in 2019.", "I moved to the UK in 2019.", "I have move to the UK in 2019.", "I am moved to the UK in 2019."],
        answer: "I moved to the UK in 2019.",
        explain: "In 2019 is a finished time, so we need the Past Simple.",
        explainRu: "In 2019 — конкретное время в прошлом, значит Past Simple: I moved." },
      { type: "choice", q: "When ___ you arrive in London?", options: ["have", "did", "has", "were"], answer: "did",
        explain: "Questions with When ask about a finished time, so we use did.",
        explainRu: "Вопрос When…? спрашивает о конкретном времени — используем Past Simple с did." },
      { type: "gap", q: "I ___ to the GP yesterday. (go)", answer: ["went"],
        explain: "Yesterday → Past Simple: went.",
        explainRu: "Yesterday — законченное время, поэтому Past Simple: went." },
      { type: "gap", q: "She ___ in Manchester since 2021. (live)", answer: ["has lived", "has been living"],
        explain: "Since 2021 means it started then and is still true, so we use the Present Perfect.",
        explainRu: "Since 2021 — с тех пор и до сих пор, поэтому Present Perfect: has lived (или has been living)." },
      { type: "order", ru: "Я посмотрела этот фильм на прошлой неделе.", answer: "I saw this film last week.",
        explain: "Last week is finished time, so we use the Past Simple: saw.",
        explainRu: "Last week — законченное время, значит Past Simple: saw." },
      { type: "order", ru: "Мы знаем друг друга десять лет.", answer: "We have known each other for ten years.",
        explain: "Started in the past and still true: Present Perfect + for.",
        explainRu: "Мы знакомы до сих пор, поэтому Present Perfect + for. По-русски тут настоящее время, а по-английски — нет." },
      { type: "translate", ru: "Я никогда не была в Ирландии.",
        options: ["I have never been to Ireland.", "I never was in Ireland.", "I wasn't never in Ireland.", "I have never gone in Ireland."],
        answer: "I have never been to Ireland.",
        explain: "Life experience with never → Present Perfect: have never been to.",
        explainRu: "Жизненный опыт без указания времени — Present Perfect: have never been to. Двойное отрицание (wasn't never) в английском не используется." },
      { type: "listen", say: "I lost my phone yesterday.",
        options: ["I lost my phone yesterday.", "I've lost my phone yesterday.", "I lose my phone yesterday."],
        answer: "I lost my phone yesterday.",
        explain: "With yesterday we use the Past Simple: lost.",
        explainRu: "Со словом yesterday — только Past Simple: I lost." },
      { type: "match", q: "Match the question with the answer.", qRu: "Соедини вопрос с ответом.",
        pairs: [
          ["Have you ever been to Wales?", "Yes, I went there last year."],
          ["When did you move here?", "In 2020."],
          ["How long have you lived here?", "For six years."],
          ["Have you finished yet?", "No, not yet."],
          ["Did you enjoy the film?", "Yes, it was great."]
        ],
        explain: "When → Past Simple; How long → Present Perfect.",
        explainRu: "When — вопрос о конкретном времени (Past Simple), How long — о периоде до сих пор (Present Perfect)." }
    ]
  },

  // ───────────────────────────── 3. Present Perfect Continuous
  {
    id: "present-perfect-continuous",
    level: 3,
    order: 3,
    emoji: "🔄",
    title: "Present Perfect Continuous",
    titleRu: "Present Perfect Continuous",
    intro: "Use this tense to say how long something has been happening up to now. It's how we answer \"How long have you been…?\".",
    introRu: "Это время показывает, как долго что-то длится до настоящего момента. Именно так отвечают на вопрос «How long have you been…?».",
    sections: [
      {
        title: "Form: have / has been + -ing",
        titleRu: "Форма: have / has been + -ing",
        text: "Use have/has + been + verb-ing. It shows an action that started in the past and is still going on.",
        textRu: "Берём have / has + been + глагол с окончанием -ing. Так мы описываем действие, которое началось в прошлом и продолжается до сих пор.",
        table: {
          head: ["Subject", "Form"],
          rows: [
            ["I / you / we / they", "have ('ve) been waiting"],
            ["he / she / it", "has ('s) been waiting"],
            ["Question", "How long have you been waiting?"]
          ]
        },
        examples: [
          { en: "I've been waiting for the bus for twenty minutes.", ru: "Я жду автобус уже двадцать минут." },
          { en: "How long have you been learning English?", ru: "Сколько ты уже учишь английский?" }
        ]
      },
      {
        title: "for and since",
        titleRu: "for и since",
        text: "For + a period of time (for three years). Since + a starting point (since Monday, since 2020).",
        textRu: "For + отрезок времени («в течение»): for three years, for ages. Since + точка начала («с»): since Monday, since 2020, since I was eighteen.",
        table: {
          head: ["for", "since"],
          rows: [
            ["for ten minutes", "since 9 o'clock"],
            ["for two weeks", "since Monday"],
            ["for three years", "since 2020"],
            ["for ages", "since I was a child"]
          ]
        },
        examples: [
          { en: "She's been working here for two years.", ru: "Она работает здесь два года." },
          { en: "It's been raining since this morning.", ru: "Дождь идёт с самого утра." }
        ]
      },
      {
        title: "Russian present → English perfect",
        titleRu: "Русское настоящее → английское perfect",
        text: "Russian uses the present tense here, but English doesn't. Not \"I live here for three years\", but \"I've been living / I've lived here for three years\".",
        textRu: "В русском мы говорим в настоящем времени: «Я живу здесь три года». В английском так нельзя — нужно perfect: I've been living here for three years или I've lived here for three years (с live и work оба варианта нормальны). А с глаголами состояния (know, like, have в значении «иметь», be) — только Present Perfect: I've known her since school.",
        examples: [
          { en: "I've been living here for three years.", ru: "Я живу здесь три года." },
          { en: "I've known Anna since school.", ru: "Я знаю Анну со школы." }
        ]
      },
      {
        title: "Visible results of a recent activity",
        titleRu: "Видимый результат недавнего действия",
        text: "We also use this tense to explain something we can see now.",
        textRu: "Ещё это время помогает объяснить то, что видно сейчас: человек устал, на улице мокро и т. п.",
        examples: [
          { en: "You look tired. – I've been working all day.", ru: "Ты выглядишь уставшей. – Я весь день работала." },
          { en: "The ground is wet. It's been raining.", ru: "Земля мокрая. Шёл дождь." }
        ]
      }
    ],
    tip: {
      en: "Don't translate «Я живу здесь три года» word for word as \"I live here three years\" — use \"I've been living here for three years\". And don't say \"since three years\": since + starting point, for + period.",
      ru: "Не переводи «Я живу здесь три года» дословно как «I live here three years» — говори «I've been living here for three years». И не говори «since three years»: since — с какого момента, for — сколько времени."
    },
    exercises: [
      { type: "choice", q: "I ___ for the bus for twenty minutes.", options: ["wait", "am waiting", "have been waiting", "was waited"], answer: "have been waiting",
        explain: "It started in the past and is still happening: have been waiting.",
        explainRu: "Действие началось в прошлом и продолжается до сих пор, есть for — нужен Present Perfect Continuous." },
      { type: "choice", q: "She has been learning English ___ 2022.", options: ["for", "since", "from", "during"], answer: "since",
        explain: "2022 is a starting point, so we use since.",
        explainRu: "2022 — точка начала, поэтому since. From здесь не подходит." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["I've known Anna for five years.", "I've been knowing Anna for five years.", "I know Anna for five years.", "I know Anna since five years."],
        answer: "I've known Anna for five years.",
        explain: "Know is a state verb, so we use the Present Perfect, not the continuous.",
        explainRu: "Know — глагол состояния, с ним -ing не используется. Нужен Present Perfect + for." },
      { type: "gap", q: "How long ___ you been working at Tesco?", answer: ["have"],
        explain: "Question: How long + have + you + been + -ing?",
        explainRu: "В вопросе вспомогательный глагол have стоит перед подлежащим: How long have you been…?" },
      { type: "gap", q: "___ been raining all morning. (it / have)", answer: ["it has", "it's"],
        explain: "It + has been + -ing; it has is often shortened to it's.",
        explainRu: "С it используем has: it has been raining. В разговоре сокращаем до it's." },
      { type: "order", ru: "Я живу в Лидсе три года.", answer: "I have been living in Leeds for three years.",
        explain: "Russian uses the present, but English needs have been + -ing + for.",
        explainRu: "По-русски настоящее время, а по-английски — have been living + for three years." },
      { type: "order", ru: "Как долго ты ждёшь?", answer: "How long have you been waiting?",
        explain: "How long + have + you + been + -ing?",
        explainRu: "Порядок слов: How long + have + you + been + глагол с -ing." },
      { type: "translate", ru: "Я работаю здесь с 2020 года.",
        options: ["I work here since 2020.", "I have been working here since 2020.", "I am working here since 2020.", "I have been working here from 2020."],
        answer: "I have been working here since 2020.",
        explain: "Started in 2020 and still true: have been working + since.",
        explainRu: "Работаю с 2020 года и до сих пор — have been working since 2020. Present Simple и from здесь не подходят." },
      { type: "listen", say: "We've been cleaning the flat all day.",
        options: ["We've been cleaning the flat all day.", "We're cleaning the flat all day.", "We cleaned the flat all day."],
        answer: "We've been cleaning the flat all day.",
        explain: "We've been cleaning = Present Perfect Continuous.",
        explainRu: "We've been cleaning — Present Perfect Continuous: убирались весь день до этого момента." },
      { type: "match", q: "Match the question with the answer.", qRu: "Соедини вопрос с ответом.",
        pairs: [
          ["How long have you been waiting?", "For about ten minutes."],
          ["Why are you so tired?", "I've been working all day."],
          ["Why is the ground wet?", "It's been raining."],
          ["How long have you known Tom?", "Since we were at school."],
          ["Why are your hands dirty?", "I've been gardening."]
        ],
        explain: "The Present Perfect Continuous answers How long…? and explains visible results.",
        explainRu: "Present Perfect Continuous отвечает на вопрос How long…? и объясняет то, что видно сейчас." }
    ]
  },

  // ───────────────────────────── 4. Modals of obligation
  {
    id: "modals-obligation",
    level: 3,
    order: 4,
    emoji: "📋",
    title: "must / have to / should",
    titleRu: "must / have to / should",
    intro: "These words help you talk about rules, duties and advice — at work, at the GP, on the road.",
    introRu: "Эти слова помогают говорить о правилах, обязанностях и советах — на работе, у врача, на дороге.",
    sections: [
      {
        title: "must and have to",
        titleRu: "must и have to",
        text: "Both mean something is necessary. Must often shows the speaker's own feeling; have to often shows an outside rule. In the past, use had to.",
        textRu: "Оба значат «надо, обязательно». Must чаще выражает личное мнение говорящего («я считаю, что надо»), а have to — внешнее правило или обстоятельства. После must не ставим to. В прошедшем времени — только had to.",
        table: {
          head: ["Present", "Past"],
          rows: [
            ["I must go.", "I had to go."],
            ["I have to go.", "I had to go."],
            ["She has to go.", "She had to go."]
          ]
        },
        examples: [
          { en: "I must call my mum tonight.", ru: "Мне обязательно надо позвонить маме сегодня вечером." },
          { en: "I have to wear a uniform at work.", ru: "На работе я должна носить форму." },
          { en: "We had to wait an hour at A&E.", ru: "Нам пришлось ждать час в приёмном отделении." }
        ]
      },
      {
        title: "should for advice",
        titleRu: "should — совет",
        text: "Use should / shouldn't to give advice. No to after should.",
        textRu: "Should / shouldn't — «стоит, следует» / «не стоит». Это совет, а не обязанность. После should тоже не ставим to.",
        examples: [
          { en: "You should see a GP.", ru: "Тебе стоит сходить к терапевту." },
          { en: "You shouldn't drink so much coffee.", ru: "Тебе не стоит пить столько кофе." }
        ]
      },
      {
        title: "mustn't ≠ don't have to",
        titleRu: "mustn't ≠ don't have to",
        text: "Mustn't = it's not allowed. Don't have to = it's not necessary, you can choose.",
        textRu: "Mustn't — «нельзя, запрещено». Don't have to — «не обязательно, не нужно» (можешь, если хочешь). Это совсем разные вещи!",
        table: {
          head: ["Form", "Meaning"],
          rows: [
            ["mustn't", "нельзя"],
            ["don't / doesn't have to", "не нужно"],
            ["shouldn't", "не стоит"]
          ]
        },
        examples: [
          { en: "You mustn't smoke here.", ru: "Здесь нельзя курить." },
          { en: "You don't have to bring anything.", ru: "Тебе не нужно ничего приносить." },
          { en: "She doesn't have to work on Sundays.", ru: "Ей не нужно работать по воскресеньям." }
        ]
      }
    ],
    tip: {
      en: "«Не нужно» is don't have to, not mustn't. \"You mustn't come\" means it's forbidden! Also, no to after must and should: not \"I must to go\", but \"I must go\".",
      ru: "«Не нужно» — это don't have to, а не mustn't. «You mustn't come» значит «тебе запрещено приходить»! И после must и should не ставим to: не «I must to go», а «I must go»."
    },
    exercises: [
      { type: "choice", q: "You ___ smoke on the train. It's against the law.", options: ["mustn't", "don't have to", "shouldn't to", "haven't"], answer: "mustn't",
        explain: "It's against the law, so it's not allowed: mustn't.",
        explainRu: "Это запрещено законом — значит mustn't («нельзя»)." },
      { type: "choice", q: "It's Saturday, so I ___ get up early.", options: ["mustn't", "don't have to", "must", "haven't to"], answer: "don't have to",
        explain: "It's not necessary to get up early: don't have to.",
        explainRu: "Рано вставать не нужно (но не запрещено) — don't have to." },
      { type: "choice", q: "You look ill. You ___ see a GP.", options: ["should", "should to", "must to", "have"], answer: "should",
        explain: "This is advice, and there is no to after should.",
        explainRu: "Это совет — should. После should не ставим to." },
      { type: "gap", q: "She ___ wear a uniform at work. (have to)", answer: ["has to"],
        explain: "With she we use has to.",
        explainRu: "С he / she / it — has to." },
      { type: "gap", q: "Yesterday I ___ wait an hour for the bus. (have to)", answer: ["had to"],
        explain: "In the past, must and have to both become had to.",
        explainRu: "В прошедшем времени и must, и have to превращаются в had to." },
      { type: "order", ru: "Мне нужно позвонить маме.", answer: "I have to call my mum.",
        explain: "Have to + verb, no other changes.",
        explainRu: "Have to + глагол в начальной форме: I have to call…" },
      { type: "order", ru: "Тебе не нужно ничего приносить.", answer: "You don't have to bring anything.",
        explain: "Not necessary = don't have to.",
        explainRu: "«Не нужно» = don't have to. После отрицания используем anything." },
      { type: "translate", ru: "Здесь нельзя парковаться.",
        options: ["You mustn't park here.", "You don't have to park here.", "You don't must park here.", "You must not to park here."],
        answer: "You mustn't park here.",
        explain: "It's forbidden, so mustn't.",
        explainRu: "«Нельзя» = mustn't. Don't have to значило бы «не обязательно парковаться здесь»." },
      { type: "listen", say: "You don't have to pay for parking.",
        options: ["You don't have to pay for parking.", "You mustn't pay for parking.", "You have to pay for parking."],
        answer: "You don't have to pay for parking.",
        explain: "Don't have to = it's not necessary.",
        explainRu: "Don't have to — «не нужно»: парковка бесплатная." },
      { type: "match", q: "Match the situation with the right sentence.", qRu: "Соедини ситуацию с подходящей фразой.",
        pairs: [
          ["The sign says 'No dogs'.", "You mustn't bring your dog."],
          ["Entry is free.", "You don't have to pay."],
          ["I've got a terrible headache.", "You should take a paracetamol."],
          ["The rule says: wear a helmet.", "You have to wear a helmet."]
        ],
        explain: "mustn't = forbidden, don't have to = not necessary, should = advice, have to = rule.",
        explainRu: "mustn't — запрет, don't have to — необязательно, should — совет, have to — правило." }
    ]
  },

  // ───────────────────────────── 5. First conditional
  {
    id: "first-conditional",
    level: 3,
    order: 5,
    emoji: "☔",
    title: "First conditional",
    titleRu: "Условные предложения первого типа",
    intro: "Use the first conditional to talk about real possibilities in the future and their results.",
    introRu: "Условные предложения первого типа нужны, чтобы говорить о реальных ситуациях в будущем и их последствиях: «Если пойдёт дождь, мы останемся дома».",
    sections: [
      {
        title: "If + present, will + verb",
        titleRu: "If + настоящее время, will + глагол",
        text: "The if-part uses the Present Simple; the result uses will. The parts can go in either order — use a comma only when if comes first.",
        textRu: "В части с if — Present Simple, в части с результатом — will + глагол. Части можно менять местами; запятую ставим, только если предложение начинается с if.",
        table: {
          head: ["Condition", "Result"],
          rows: [
            ["If it rains,", "we'll stay in."],
            ["If you're hungry,", "I'll make soup."],
            ["If she doesn't hurry,", "she'll be late."]
          ]
        },
        examples: [
          { en: "If it rains, we'll stay at home.", ru: "Если пойдёт дождь, мы останемся дома." },
          { en: "We'll stay at home if it rains.", ru: "Мы останемся дома, если пойдёт дождь." }
        ]
      },
      {
        title: "No will after if and when",
        titleRu: "Никакого will после if и when",
        text: "After if, when, as soon as and before we use the present, even though we mean the future.",
        textRu: "В русском после «если» и «когда» мы ставим будущее время («когда приеду»), а в английском после if, when, as soon as, before — настоящее, хотя речь о будущем.",
        examples: [
          { en: "When I get home, I'll call you.", ru: "Когда я приду домой, я тебе позвоню." },
          { en: "I'll text you as soon as the parcel arrives.", ru: "Я напишу тебе, как только придёт посылка." }
        ]
      },
      {
        title: "unless = if not",
        titleRu: "unless = if not",
        text: "Unless means \"if … not\". Don't add another not after unless.",
        textRu: "Unless значит «если не». В нём уже есть отрицание, поэтому второе not после unless не нужно.",
        examples: [
          { en: "You'll miss the bus unless you leave now.", ru: "Ты опоздаешь на автобус, если не выйдешь сейчас." },
          { en: "I won't go unless you come with me.", ru: "Я не пойду, если ты не пойдёшь со мной." }
        ]
      }
    ],
    tip: {
      en: "In Russian we say «Если пойдёт дождь» with a future verb, so learners often say \"If it will rain\". In English it's \"If it rains, …\" — no will after if or when.",
      ru: "По-русски мы говорим «Если пойдёт дождь» в будущем времени, поэтому часто получается «If it will rain». По-английски правильно «If it rains, …» — после if и when will не ставим."
    },
    exercises: [
      { type: "choice", q: "If it ___ tomorrow, we'll stay at home.", options: ["will rain", "rains", "rain", "would rain"], answer: "rains",
        explain: "After if we use the Present Simple: it rains.",
        explainRu: "После if — Present Simple, даже если речь о будущем: it rains." },
      { type: "choice", q: "I'll call you when I ___ home.", options: ["will get", "get", "got", "am get"], answer: "get",
        explain: "After when we use the present, not will.",
        explainRu: "После when (о будущем) тоже ставим настоящее время: when I get home." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["Unless you hurry, you'll miss the bus.", "Unless you don't hurry, you'll miss the bus.", "Unless you will hurry, you miss the bus.", "If you will hurry, you won't miss the bus."],
        answer: "Unless you hurry, you'll miss the bus.",
        explain: "Unless already means if not, and there's no will after it.",
        explainRu: "Unless уже значит «если не», поэтому второе отрицание не нужно. Will после unless тоже не ставим." },
      { type: "gap", q: "If you ___ now, you'll catch the train. (leave)", answer: ["leave"],
        explain: "Present Simple after if: you leave.",
        explainRu: "После if — Present Simple: you leave." },
      { type: "gap", q: "If she misses the bus, ___ late for work. (she / be)", answer: ["she will be", "she'll be"],
        explain: "The result part uses will: she will be / she'll be.",
        explainRu: "В части с результатом — will: she will be или сокращённо she'll be." },
      { type: "order", ru: "Если будет солнечно, мы пойдём в парк.", answer: "If it's sunny, we'll go to the park.",
        explain: "If + present, will + verb.",
        explainRu: "If + настоящее время (it's sunny), затем will + глагол (we'll go)." },
      { type: "order", ru: "Я тебе напишу, когда приеду.", answer: "I'll text you when I arrive.",
        explain: "No will after when: when I arrive.",
        explainRu: "После when — настоящее время: when I arrive, а не when I will arrive." },
      { type: "translate", ru: "Если ты придёшь, я приготовлю борщ.",
        options: ["If you come, I'll cook borscht.", "If you will come, I'll cook borscht.", "If you came, I'll cook borscht.", "If you'll come, I will cook borscht."],
        answer: "If you come, I'll cook borscht.",
        explain: "If + Present Simple, will + verb.",
        explainRu: "После if — Present Simple (you come), а will — только в части с результатом." },
      { type: "listen", say: "If we don't hurry, we'll miss the bus.",
        options: ["If we don't hurry, we'll miss the bus.", "If we won't hurry, we'll miss the bus.", "If we don't hurry, we miss the bus."],
        answer: "If we don't hurry, we'll miss the bus.",
        explain: "Present after if (don't hurry), will in the result (we'll miss).",
        explainRu: "После if — don't hurry, а в результате — we'll miss." },
      { type: "match", q: "Match the beginnings with the endings.", qRu: "Соедини начало и конец предложения.",
        pairs: [
          ["If I'm late for work,", "my boss will be angry."],
          ["If the shop is closed,", "I'll go to Tesco instead."],
          ["If you're hungry,", "I'll make you a sandwich."],
          ["Unless you take a coat,", "you'll get cold."],
          ["If you practise every day,", "your English will improve."]
        ],
        explain: "Each sentence is If/Unless + present, will + verb.",
        explainRu: "Везде одна схема: If / Unless + настоящее время, will + глагол." }
    ]
  },

  // ───────────────────────────── 6. Second conditional
  {
    id: "second-conditional",
    level: 3,
    order: 6,
    emoji: "💭",
    title: "Second conditional",
    titleRu: "Условные предложения второго типа",
    intro: "Use the second conditional to imagine situations that aren't real now, or are unlikely — and to give advice with \"If I were you…\".",
    introRu: "Условные предложения второго типа помогают представлять то, чего сейчас нет или что маловероятно, — а ещё давать советы с «If I were you…».",
    sections: [
      {
        title: "If + past, would + verb",
        titleRu: "If + прошедшее время, would + глагол",
        text: "The if-part uses the Past Simple, but the meaning is present or future. The result uses would ('d).",
        textRu: "В части с if — Past Simple, хотя речь о настоящем или будущем. В части с результатом — would + глагол (сокращённо 'd). По-русски это «если бы… , то бы…».",
        table: {
          head: ["Condition", "Result"],
          rows: [
            ["If I had a car,", "I'd drive to work."],
            ["If I won the lottery,", "I'd travel."],
            ["If she lived nearby,", "we'd meet more."]
          ]
        },
        examples: [
          { en: "If I had more money, I would buy a house.", ru: "Если бы у меня было больше денег, я бы купила дом." },
          { en: "If I won the lottery, I'd travel the world.", ru: "Если бы я выиграла в лотерею, я бы поехала путешествовать по миру." }
        ]
      },
      {
        title: "If I were you…",
        titleRu: "If I were you… — «На твоём месте…»",
        text: "We use If I were you, I'd… to give advice. With be, were is correct for all persons (was is also common in speech).",
        textRu: "If I were you, I'd… — «на твоём месте я бы…», очень частый способ дать совет. С глаголом be в таких предложениях можно ставить were для всех лиц (в разговоре часто говорят и was).",
        examples: [
          { en: "If I were you, I'd talk to your manager.", ru: "На твоём месте я бы поговорила с начальником." },
          { en: "If it were warmer, we'd go to the beach.", ru: "Если бы было теплее, мы бы поехали на пляж." }
        ]
      },
      {
        title: "First or second?",
        titleRu: "Первый или второй тип?",
        text: "First conditional = a real possibility. Second conditional = imagined or unlikely.",
        textRu: "Первый тип — реальная возможность (вполне может случиться). Второй тип — воображаемая или маловероятная ситуация.",
        examples: [
          { en: "If I get the job, I'll move to London.", ru: "Если я получу эту работу, я перееду в Лондон. (вполне возможно)" },
          { en: "If I lived in London, I'd go to the theatre every week.", ru: "Если бы я жила в Лондоне, я бы ходила в театр каждую неделю. (но я там не живу)" }
        ]
      }
    ],
    tip: {
      en: "In Russian «бы» appears in both parts: «Если бы у меня были деньги, я бы купила…». In English, would goes only in the result: not \"If I would have money\", but \"If I had money, I would buy…\".",
      ru: "В русском «бы» стоит в обеих частях: «Если бы у меня были деньги, я бы купила…». В английском would — только в части с результатом: не «If I would have money», а «If I had money, I would buy…»."
    },
    exercises: [
      { type: "choice", q: "If I ___ more time, I'd learn to drive.", options: ["have", "had", "would have", "will have"], answer: "had",
        explain: "Second conditional: If + Past Simple.",
        explainRu: "Второй тип: после if — Past Simple (had), would после if не ставим." },
      { type: "choice", q: "If I were you, I ___ to the manager.", options: ["will talk", "would talk", "talked", "talk"], answer: "would talk",
        explain: "The result part uses would + verb.",
        explainRu: "В части с результатом — would + глагол: I would talk." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["If I would be rich, I would buy a house.", "If I was rich, I will buy a house.", "If I were rich, I would buy a house.", "If I am rich, I would buy a house."],
        answer: "If I were rich, I would buy a house.",
        explain: "If + past (were), would + verb.",
        explainRu: "If + прошедшее время (were), would + глагол. Would после if — ошибка." },
      { type: "gap", q: "If she ___ English better, she would apply for that job. (speak)", answer: ["spoke"],
        explain: "Past Simple after if: spoke.",
        explainRu: "После if — Past Simple: speak – spoke." },
      { type: "gap", q: "If we had a garden, ___ a dog. (we / get)", answer: ["we would get", "we'd get"],
        explain: "Result: would + verb (we'd get).",
        explainRu: "В части с результатом — would + глагол: we would get или we'd get." },
      { type: "order", ru: "На твоём месте я бы пошла к врачу.", answer: "If I were you, I'd see a doctor.",
        explain: "If I were you, I'd + verb is a common way to give advice.",
        explainRu: "If I were you, I'd + глагол — «на твоём месте я бы…»." },
      { type: "order", ru: "Что бы ты сделала, если бы выиграла в лотерею?", answer: "What would you do if you won the lottery?",
        explain: "Question: What would you do + if + past?",
        explainRu: "Вопрос: What would you do…? и после if — Past Simple (won)." },
      { type: "translate", ru: "Если бы у меня была машина, я бы не ездила на автобусе.",
        options: ["If I had a car, I wouldn't take the bus.", "If I would have a car, I wouldn't take the bus.", "If I had a car, I won't take the bus.", "If I have a car, I wouldn't take the bus."],
        answer: "If I had a car, I wouldn't take the bus.",
        explain: "If + past (had), would/wouldn't + verb.",
        explainRu: "«Бы» в первой части передаётся прошедшим временем (had), а во второй — wouldn't." },
      { type: "listen", say: "If I knew his number, I'd call him.",
        options: ["If I knew his number, I'd call him.", "If I know his number, I'll call him.", "If I knew his number, I'll call him."],
        answer: "If I knew his number, I'd call him.",
        explain: "Knew + I'd = second conditional (I don't know it).",
        explainRu: "Knew + I'd — второй тип: номера я не знаю, ситуация воображаемая." },
      { type: "match", q: "Match the beginnings with the endings.", qRu: "Соедини начало и конец предложения.",
        pairs: [
          ["If I won the lottery,", "I'd buy a house by the sea."],
          ["If I were you,", "I'd take the job."],
          ["If it wasn't raining,", "we'd go for a walk."],
          ["If I spoke French,", "I'd work in Paris."],
          ["If he lived closer,", "we'd see him more often."]
        ],
        explain: "Each sentence is If + past, would + verb.",
        explainRu: "Везде одна схема: If + прошедшее время, would ('d) + глагол." }
    ]
  },

  // ───────────────────────────── 7. Passive
  {
    id: "passive",
    level: 3,
    order: 7,
    emoji: "🏗️",
    title: "Passive voice: present and past",
    titleRu: "Пассивный залог: настоящее и прошедшее время",
    intro: "Use the passive when the action is more important than who does it: \"The bins are collected on Monday.\"",
    introRu: "Пассивный залог нужен, когда важно само действие, а не тот, кто его совершает: «Мусор забирают по понедельникам».",
    sections: [
      {
        title: "Present passive: is / are + past participle",
        titleRu: "Настоящее время: is / are + причастие",
        text: "Use am/is/are + the past participle for things that happen regularly or are generally true.",
        textRu: "Am / is / are + причастие прошедшего времени (третья форма) — для того, что происходит регулярно или верно всегда.",
        table: {
          head: ["Active", "Passive"],
          rows: [
            ["They collect the bins.", "The bins are collected."],
            ["They make cars here.", "Cars are made here."],
            ["They include breakfast.", "Breakfast is included."]
          ]
        },
        examples: [
          { en: "The bins are collected on Monday.", ru: "Мусор забирают в понедельник." },
          { en: "English and Welsh are spoken in Wales.", ru: "В Уэльсе говорят на английском и валлийском." },
          { en: "Is breakfast included?", ru: "Завтрак включён?" }
        ]
      },
      {
        title: "Past passive: was / were + past participle",
        titleRu: "Прошедшее время: was / were + причастие",
        text: "Use was/were + the past participle for finished actions in the past.",
        textRu: "Was / were + причастие — для законченных действий в прошлом.",
        examples: [
          { en: "This bridge was built in 1890.", ru: "Этот мост построили в 1890 году." },
          { en: "My parcel was delivered yesterday.", ru: "Мою посылку доставили вчера." },
          { en: "We weren't told about the delay.", ru: "Нам не сказали о задержке." }
        ]
      },
      {
        title: "Who did it? Use by",
        titleRu: "Кто это сделал? Используем by",
        text: "We usually don't say who does the action. If it's important, add by.",
        textRu: "Обычно исполнителя не называем — он неизвестен или неважен. Если всё же нужно сказать, кем сделано, используем by («кем»).",
        examples: [
          { en: "The Harry Potter books were written by J. K. Rowling.", ru: "Книги о Гарри Поттере написала Джоан Роулинг." },
          { en: "The bins are collected by the council.", ru: "Мусор вывозит муниципалитет." }
        ]
      }
    ],
    tip: {
      en: "Russian often uses «они» without a subject or a -ся verb: «Мой телефон украли», «Дом строился». In English, use the passive — and don't forget be: not \"My phone stolen\" or \"My phone stole\", but \"My phone was stolen\".",
      ru: "В русском часто говорят без подлежащего или с глаголом на -ся: «Мой телефон украли», «Дом строился». В английском используй пассив — и не забывай глагол be: не «My phone stolen» и не «My phone stole», а «My phone was stolen»."
    },
    exercises: [
      { type: "choice", q: "The bins ___ on Mondays.", options: ["collect", "are collected", "is collected", "are collecting"], answer: "are collected",
        explain: "The bins don't collect anything — they are collected. Bins is plural, so are.",
        explainRu: "Мусорные баки сами ничего не забирают — их забирают: пассив. Bins — множественное число, поэтому are." },
      { type: "choice", q: "This castle ___ in the 12th century.", options: ["built", "is built", "was built", "was build"], answer: "was built",
        explain: "Past passive: was + past participle (built).",
        explainRu: "Пассив в прошедшем времени: was + третья форма (built)." },
      { type: "choice", q: "Hamlet was written ___ Shakespeare.", options: ["from", "by", "with", "of"], answer: "by",
        explain: "We use by to say who did the action.",
        explainRu: "Исполнителя действия в пассиве вводим с помощью by." },
      { type: "gap", q: "My parcel ___ delivered yesterday. (be)", answer: ["was"],
        explain: "Yesterday → past passive: was delivered.",
        explainRu: "Yesterday — прошедшее время, поэтому was delivered." },
      { type: "gap", q: "Breakfast ___ included in the price. (not / be)", answer: ["isn't", "is not"],
        explain: "Negative present passive: isn't + past participle.",
        explainRu: "Отрицание в пассиве: isn't (is not) + причастие." },
      { type: "order", ru: "Мой телефон украли вчера.", answer: "My phone was stolen yesterday.",
        explain: "Past passive: was + stolen.",
        explainRu: "Пассив в прошедшем времени: was stolen. Подлежащее — My phone." },
      { type: "order", ru: "Виски делают в Шотландии.", answer: "Whisky is made in Scotland.",
        explain: "Present passive: is + made.",
        explainRu: "Пассив в настоящем времени: is made." },
      { type: "translate", ru: "Этот дом был построен в 1920 году.",
        options: ["This house was built in 1920.", "This house built in 1920.", "This house was build in 1920.", "This house is built in 1920."],
        answer: "This house was built in 1920.",
        explain: "Past passive: was + built (past participle).",
        explainRu: "Нужно was + третья форма built. Без was смысл ломается: «дом построил»." },
      { type: "listen", say: "The windows are cleaned every month.",
        options: ["The windows are cleaned every month.", "The windows clean every month.", "The windows were cleaned every month."],
        answer: "The windows are cleaned every month.",
        explain: "Are cleaned = present passive.",
        explainRu: "Are cleaned — пассив в настоящем времени: окна моют каждый месяц." },
      { type: "match", q: "Match the active sentence with the passive one.", qRu: "Соедини активное предложение с пассивным.",
        pairs: [
          ["They make cars here.", "Cars are made here."],
          ["Someone stole my bike.", "My bike was stolen."],
          ["People speak Welsh in Wales.", "Welsh is spoken in Wales."],
          ["The council collects the bins.", "The bins are collected by the council."],
          ["Someone cleaned the office.", "The office was cleaned."]
        ],
        explain: "Passive = be (in the right tense) + past participle.",
        explainRu: "Пассив = be в нужном времени + третья форма глагола." }
    ]
  }

]);
