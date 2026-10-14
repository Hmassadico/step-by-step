// Level 1 — Foundations (A1)
window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([

  // ───────────────────────── 1. TO BE ─────────────────────────
  {
    id: "to-be",
    level: 1,
    order: 1,
    emoji: "👋",
    title: "To be: am / is / are",
    titleRu: "Глагол to be: am / is / are",
    intro: "\"To be\" is the most important verb in English. You need it to say who you are, where you are and how you feel.",
    introRu: "To be — самый важный глагол в английском. Он нужен, чтобы сказать, кто ты, где ты и как себя чувствуешь.",
    sections: [
      {
        title: "Positive", titleRu: "Утвердительная форма",
        text: "Use am with I, is with he / she / it, and are with you / we / they. In speech we usually use short forms.",
        textRu: "В русском мы говорим «Я учитель» без глагола. В английском глагол обязателен: I am, he / she / it is, you / we / they are. В разговоре обычно используют краткие формы: I'm, she's, we're.",
        table: { head: ["Subject", "Full", "Short"], rows: [["I", "am", "I'm"], ["he / she / it", "is", "she's"], ["you / we / they", "are", "we're"]] },
        examples: [
          { en: "I'm a nurse.", ru: "Я медсестра." },
          { en: "She is from Manchester.", ru: "Она из Манчестера." },
          { en: "We're at home.", ru: "Мы дома." },
          { en: "It's cold today.", ru: "Сегодня холодно." }
        ]
      },
      {
        title: "Negative", titleRu: "Отрицание",
        text: "Put not after am / is / are. The short forms are isn't and aren't, but for I we say I'm not.",
        textRu: "Ставь not после am / is / are. Краткие формы: isn't, aren't. Но с I — только I'm not (формы «I amn't» не существует).",
        table: { head: ["Full", "Short"], rows: [["I am not", "I'm not"], ["she is not", "she isn't"], ["they are not", "they aren't"]] },
        examples: [
          { en: "I'm not tired.", ru: "Я не устала." },
          { en: "He isn't at work today.", ru: "Его сегодня нет на работе." },
          { en: "They aren't ready.", ru: "Они не готовы." }
        ]
      },
      {
        title: "Questions", titleRu: "Вопросы",
        text: "To make a question, put am / is / are before the subject. Short answers repeat the verb.",
        textRu: "В вопросе am / is / are переходит на первое место, перед подлежащим. В кратком ответе повторяем этот глагол: Yes, I am. / No, she isn't.",
        examples: [
          { en: "Are you OK?", ru: "Ты в порядке?" },
          { en: "Is the shop open?", ru: "Магазин открыт?" },
          { en: "Is she your sister? — Yes, she is.", ru: "Она твоя сестра? — Да." }
        ]
      }
    ],
    tip: {
      en: "Never drop the verb: say \"I am a student\", not \"I student\". Also, after \"Yes, I am\" don't use the short form — \"Yes, I'm\" is wrong.",
      ru: "Не пропускай глагол: «I am a student», а не «I student» — по-русски «есть» в настоящем времени не говорят, а по-английски без него нельзя. И в кратком ответе краткая форма не ставится: «Yes, I am», а не «Yes, I'm»."
    },
    exercises: [
      { type: "choice", q: "My husband ___ a bus driver.", options: ["am", "is", "are"], answer: "is",
        explain: "\"My husband\" is he, so we use is.",
        explainRu: "«My husband» = he, поэтому is." },
      { type: "choice", q: "Which sentence is correct?", options: ["I tired.", "I am tired.", "I is tired.", "I be tired."], answer: "I am tired.",
        explain: "English needs a verb: I + am.",
        explainRu: "В английском глагол обязателен, даже если по-русски его нет: I am tired." },
      { type: "choice", q: "___ your children at school today?", options: ["Is", "Are", "Do"], answer: "Are",
        explain: "\"Your children\" is plural (they), so the question starts with Are.",
        explainRu: "«Your children» — это they, поэтому вопрос начинается с Are. Do здесь не нужен — у to be свой вопрос." },
      { type: "gap", q: "She ___ at home now. She's at the shop. (not / be)", answer: ["isn't", "is not"],
        explain: "Negative of is: is not, or the short form isn't.",
        explainRu: "Отрицание с she: is not или кратко isn't." },
      { type: "gap", q: "I ___ from Russia, but I live in the UK. (be)", answer: ["am"],
        explain: "With I we always use am.",
        explainRu: "С I всегда используем am." },
      { type: "order", ru: "Мы не готовы.", answer: "We are not ready.",
        explain: "Negative: subject + are + not + adjective.",
        explainRu: "Порядок: подлежащее + are + not + прилагательное." },
      { type: "order", ru: "Твой брат дома?", answer: "Is your brother at home?",
        explain: "In questions is comes before the subject.",
        explainRu: "В вопросе is ставится перед подлежащим." },
      { type: "translate", ru: "Я не голодна.", options: ["I not hungry.", "I am not hungry.", "I don't hungry.", "I amn't hungry."],
        answer: "I am not hungry.",
        explain: "With adjectives we use am not, not don't.",
        explainRu: "С прилагательными нужен to be: I am not hungry. Don't здесь не подходит, а формы «amn't» нет." },
      { type: "listen", say: "She isn't at work today.", options: ["She isn't at work today.", "She is at work today.", "She wasn't at work today."],
        answer: "She isn't at work today.",
        explain: "You heard the negative isn't, in the present.",
        explainRu: "Прозвучало отрицание isn't в настоящем времени." },
      { type: "match", q: "Match the full form with the short form.", qRu: "Соедини полную форму с краткой.",
        pairs: [["I am", "I'm"], ["she is", "she's"], ["they are", "they're"], ["it is not", "it isn't"], ["you are not", "you aren't"]],
        explain: "Short forms join the subject and the verb with an apostrophe.",
        explainRu: "Краткая форма соединяет подлежащее и глагол через апостроф." }
    ]
  },

  // ───────────────────────── 2. ARTICLES ─────────────────────────
  {
    id: "articles",
    level: 1,
    order: 2,
    emoji: "📰",
    title: "Articles: a / an / the",
    titleRu: "Артикли: a / an / the",
    intro: "Little words like a, an and the appear in almost every English sentence. Let's learn when to use each one — and when to use nothing.",
    introRu: "Маленькие слова a, an и the встречаются почти в каждом английском предложении. Разберёмся, когда какое нужно — а когда артикль не нужен вовсе.",
    sections: [
      {
        title: "A / an", titleRu: "A / an",
        text: "Use a or an with one countable thing when it's new or not specific, and for jobs. Use an before a vowel sound.",
        textRu: "A / an ставим перед одним исчисляемым предметом, когда он «какой-то, один из многих» или упоминается впервые. Также с профессиями: I'm a nurse. An — перед гласным звуком: an apple, an hour (h не читается).",
        examples: [
          { en: "I've got a car.", ru: "У меня есть машина." },
          { en: "She's an engineer.", ru: "Она инженер." },
          { en: "Wait an hour.", ru: "Подожди час." },
          { en: "It's a university in Leeds.", ru: "Это университет в Лидсе." }
        ]
      },
      {
        title: "The", titleRu: "The",
        text: "Use the when we both know which thing: it was mentioned before, or there is only one.",
        textRu: "The ставим, когда ясно, о каком именно предмете речь: его уже упоминали, он единственный (the sun) или понятен из ситуации (the door — эта дверь в комнате).",
        examples: [
          { en: "I bought a dress and a coat. The dress is red.", ru: "Я купила платье и пальто. Платье красное." },
          { en: "Can you close the door, please?", ru: "Закрой, пожалуйста, дверь." },
          { en: "The sun is out today!", ru: "Сегодня солнце!" }
        ]
      },
      {
        title: "No article", titleRu: "Без артикля",
        text: "Use no article with plurals and uncountable nouns when you talk in general, and with most names, cities and countries.",
        textRu: "Артикль не нужен, когда говоришь о чём-то в общем во множественном числе или с неисчисляемыми словами (coffee, money, music). Также без артикля большинство имён, городов и стран: London, Russia. Ещё устойчивые выражения: at home, at work, by bus.",
        examples: [
          { en: "I love coffee.", ru: "Я люблю кофе." },
          { en: "Dogs are great pets.", ru: "Собаки — отличные питомцы." },
          { en: "She lives in Liverpool.", ru: "Она живёт в Ливерпуле." },
          { en: "I go to work by bus.", ru: "Я езжу на работу на автобусе." }
        ]
      }
    ],
    tip: {
      en: "Don't forget a / an with jobs and with one countable thing: \"I'm a teacher\", \"I've got a car\" — not \"I'm teacher\", \"I've got car\".",
      ru: "В русском артиклей нет, поэтому их легко пропустить. Но с профессиями и одним исчисляемым предметом a / an обязательно: «I'm a teacher», «I've got a car» — а не «I'm teacher», «I've got car»."
    },
    exercises: [
      { type: "choice", q: "I've got ___ appointment with my GP.", options: ["a", "an", "the", "—"], answer: "an",
        explain: "Appointment starts with a vowel sound, so we use an.",
        explainRu: "Appointment начинается с гласного звука, поэтому an." },
      { type: "choice", q: "My sister is ___ hairdresser.", options: ["a", "the", "—"], answer: "a",
        explain: "We use a with jobs.",
        explainRu: "С профессиями ставим a / an." },
      { type: "choice", q: "Which sentence is correct?", options: ["I like the music.", "I like music.", "I like a music."], answer: "I like music.",
        explain: "When we talk about music in general, there is no article.",
        explainRu: "Когда говорим о музыке вообще, артикль не нужен. «The music» — это конкретная музыка, например та, что сейчас играет." },
      { type: "gap", q: "I've got a cat and a dog. ___ cat is black. (a / the)", answer: ["the"],
        explain: "The cat was mentioned before, so now it's the cat.",
        explainRu: "Кошку уже упомянули, теперь понятно, о какой речь, — значит, the." },
      { type: "gap", q: "Wait for me, please. I'll be there in ___ hour. (a / an)", answer: ["an"],
        explain: "In hour the h is silent, so it starts with a vowel sound.",
        explainRu: "В слове hour буква h не читается, слово начинается с гласного звука — поэтому an." },
      { type: "order", ru: "Она работает в больнице.", answer: "She works in a hospital.",
        explain: "One hospital, not specific — a hospital.",
        explainRu: "Какая-то больница, одна из многих — a hospital." },
      { type: "order", ru: "Автобус опять опаздывает.", answer: "The bus is late again.",
        explain: "We both know which bus — our usual bus — so it's the bus.",
        explainRu: "Понятно, о каком автобусе речь (о «нашем»), поэтому the bus." },
      { type: "translate", ru: "Я учительница.", options: ["I am teacher.", "I am a teacher.", "I am the teacher.", "I teacher."],
        answer: "I am a teacher.",
        explain: "Jobs need a / an.",
        explainRu: "С профессией нужен артикль a. «The teacher» — это какая-то конкретная, уже известная учительница." },
      { type: "listen", say: "She's got an old car.", options: ["She's got an old car.", "She's got old car.", "She's got the old car."],
        answer: "She's got an old car.",
        explain: "You heard an before old, because old starts with a vowel sound.",
        explainRu: "Прозвучало an: old начинается с гласного звука." },
      { type: "match", q: "Match the Russian with the English.", qRu: "Соедини русское предложение с английским.",
        pairs: [["Я медсестра.", "I'm a nurse."], ["Закрой дверь.", "Close the door."], ["Я люблю кофе.", "I love coffee."], ["Это яблоко.", "It's an apple."]],
        explain: "Job → a; a specific door → the; coffee in general → no article; apple → an.",
        explainRu: "Профессия → a; конкретная дверь → the; кофе вообще → без артикля; apple на гласный → an." }
    ]
  },

  // ───────────────────────── 3. PLURALS, THIS / THAT ─────────────────────────
  {
    id: "plurals-this-that",
    level: 1,
    order: 3,
    emoji: "👉",
    title: "Plurals and this / that / these / those",
    titleRu: "Множественное число и this / that / these / those",
    intro: "Learn how to make nouns plural, including the tricky irregular ones, and how to point at things near and far.",
    introRu: "Научимся образовывать множественное число, в том числе у хитрых исключений, и указывать на предметы рядом и вдалеке.",
    sections: [
      {
        title: "Regular plurals", titleRu: "Обычное множественное число",
        text: "Usually add -s. Add -es after s, sh, ch, x. Consonant + y becomes -ies.",
        textRu: "Обычно добавляем -s: car → cars. После s, sh, ch, x добавляем -es: bus → buses, box → boxes. Если перед y стоит согласная, y меняется на -ies: baby → babies (но day → days).",
        table: { head: ["One", "Many"], rows: [["bag", "bags"], ["glass", "glasses"], ["watch", "watches"], ["city", "cities"]] },
        examples: [
          { en: "Two coffees, please.", ru: "Два кофе, пожалуйста." },
          { en: "The buses are late.", ru: "Автобусы опаздывают." }
        ]
      },
      {
        title: "Irregular plurals", titleRu: "Исключения",
        text: "Some common nouns change completely. Remember: people is plural, so we say people are.",
        textRu: "Некоторые частые слова меняются целиком. Запомни: people — это уже множественное число («люди»), поэтому people are, а не people is. И никаких «childrens» или «peoples».",
        table: { head: ["One", "Many"], rows: [["man", "men"], ["woman", "women"], ["child", "children"], ["person", "people"], ["foot", "feet"], ["tooth", "teeth"]] },
        examples: [
          { en: "My children are at school.", ru: "Мои дети в школе." },
          { en: "Two women are waiting outside.", ru: "Снаружи ждут две женщины." },
          { en: "My feet are cold.", ru: "У меня ноги замёрзли." }
        ]
      },
      {
        title: "This / that / these / those", titleRu: "This / that / these / those",
        text: "This and these are near you; that and those are further away. This and that are singular; these and those are plural.",
        textRu: "This (этот) и these (эти) — то, что рядом с тобой. That (тот) и those (те) — то, что подальше. This / that — для одного предмета, these / those — для нескольких.",
        table: { head: ["", "Near", "Far"], rows: [["one", "this", "that"], ["many", "these", "those"]] },
        examples: [
          { en: "This bag is heavy.", ru: "Эта сумка тяжёлая." },
          { en: "Are these your keys?", ru: "Это твои ключи?" },
          { en: "Who are those people?", ru: "Кто те люди?" }
        ]
      }
    ],
    tip: {
      en: "\"This is\" + singular, \"These are\" + plural: \"These are my keys\", not \"This is my keys\". And people is already plural: \"People are friendly\".",
      ru: "По-русски «Это мои ключи» — одно слово «это» для всего. В английском для нескольких предметов нужно these: «These are my keys», а не «This is my keys». И people — уже множественное число: «People are friendly»."
    },
    exercises: [
      { type: "choice", q: "Three ___ are waiting at the bus stop.", options: ["childs", "children", "childrens"], answer: "children",
        explain: "Child has an irregular plural: children.",
        explainRu: "Множественное число от child — children, без -s." },
      { type: "choice", q: "___ shoes over there are on sale.", options: ["That", "Those", "This", "These"], answer: "Those",
        explain: "Shoes are plural and \"over there\" means far, so we use those.",
        explainRu: "Shoes — множественное число, а over there — «вон там», то есть далеко. Значит, those." },
      { type: "choice", q: "Which sentence is correct?", options: ["People is very friendly here.", "People are very friendly here.", "Peoples are very friendly here."], answer: "People are very friendly here.",
        explain: "People is plural, so it takes are.",
        explainRu: "People — это множественное число, поэтому are." },
      { type: "gap", q: "Look at ___ apples in my hand. They're from my garden. (this / these)", answer: ["these"],
        explain: "Apples are plural and near, so these.",
        explainRu: "Яблоки — их несколько, и они рядом (в руке), значит, these." },
      { type: "gap", q: "I brush my ___ twice a day. (tooth)", answer: ["teeth"],
        explain: "The plural of tooth is teeth.",
        explainRu: "Множественное число от tooth — teeth." },
      { type: "order", ru: "Эти ботинки новые.", answer: "These boots are new.",
        explain: "These + plural noun + are.",
        explainRu: "These + существительное во множественном числе + are." },
      { type: "order", ru: "Те люди — мои соседи.", answer: "Those people are my neighbours.",
        explain: "Those + people + are, because people is plural.",
        explainRu: "Those + people + are, потому что people — множественное число." },
      { type: "translate", ru: "Это мои дети.", options: ["This is my children.", "These are my children.", "These is my childs.", "This are my childrens."],
        answer: "These are my children.",
        explain: "Children is plural, so we need these are.",
        explainRu: "Children — множественное число, поэтому these are, а не this is." },
      { type: "listen", say: "Those men are from Poland.", options: ["Those men are from Poland.", "That man is from Poland.", "These men are from Poland."],
        answer: "Those men are from Poland.",
        explain: "You heard those men — plural and far away.",
        explainRu: "Прозвучало those men — несколько человек, и они далеко." },
      { type: "match", q: "Match the singular with the plural.", qRu: "Соедини единственное число с множественным.",
        pairs: [["man", "men"], ["woman", "women"], ["child", "children"], ["foot", "feet"], ["person", "people"]],
        explain: "These common nouns have irregular plurals.",
        explainRu: "У этих частых слов множественное число образуется не по правилу." }
    ]
  },

  // ───────────────────────── 4. PRESENT SIMPLE ─────────────────────────
  {
    id: "present-simple",
    level: 1,
    order: 4,
    emoji: "🔁",
    title: "Present Simple",
    titleRu: "Present Simple — настоящее простое",
    intro: "Use the Present Simple for routines, habits and facts — what you usually do and what is always true.",
    introRu: "Present Simple нужен для привычек, распорядка дня и фактов — того, что ты делаешь обычно, и того, что верно всегда.",
    sections: [
      {
        title: "Positive", titleRu: "Утвердительная форма",
        text: "Use the base verb. With he / she / it add -s (or -es). Have becomes has.",
        textRu: "Берём глагол в начальной форме. С he / she / it добавляем -s: she works. После s, sh, ch, x, o — -es: he goes, she watches. Согласная + y → -ies: study → studies. Have → has.",
        table: { head: ["Subject", "Verb"], rows: [["I / you / we / they", "work"], ["he / she / it", "works"]] },
        examples: [
          { en: "I get up at seven.", ru: "Я встаю в семь." },
          { en: "She works at Tesco.", ru: "Она работает в Tesco." },
          { en: "My son watches TV after school.", ru: "Мой сын смотрит телевизор после школы." }
        ]
      },
      {
        title: "Negatives and questions", titleRu: "Отрицания и вопросы",
        text: "Use do / does. After does and doesn't the main verb has no -s.",
        textRu: "Нужен вспомогательный глагол do / does (с he / she / it — does). Важно: -s «переходит» на does, а основной глагол остаётся в начальной форме: She doesn't work. Does she work?",
        table: { head: ["", "I / you / we / they", "he / she / it"], rows: [["–", "don't work", "doesn't work"], ["?", "Do … work?", "Does … work?"]] },
        examples: [
          { en: "I don't eat meat.", ru: "Я не ем мясо." },
          { en: "He doesn't drive.", ru: "Он не водит машину." },
          { en: "Do you live in London? — Yes, I do.", ru: "Ты живёшь в Лондоне? — Да." },
          { en: "Where does she work?", ru: "Где она работает?" }
        ]
      },
      {
        title: "How often?", titleRu: "Как часто?",
        text: "Words like always, usually, often, sometimes and never go before the main verb, but after am / is / are.",
        textRu: "Слова always, usually, often, sometimes, never ставятся перед основным глаголом (I usually walk), но после am / is / are (She is always late).",
        examples: [
          { en: "I usually take the bus.", ru: "Я обычно езжу на автобусе." },
          { en: "We never go out on Mondays.", ru: "По понедельникам мы никуда не ходим." },
          { en: "He is often tired.", ru: "Он часто устаёт." }
        ]
      }
    ],
    tip: {
      en: "Don't forget -s with he / she / it (\"she works\"), but don't add it after does: \"Does she work?\", not \"Does she works?\".",
      ru: "Не забывай -s с he / she / it («she works»), но после does его не ставь: «Does she work?», «She doesn't work» — а не «Does she works?» и не «She don't work»."
    },
    exercises: [
      { type: "choice", q: "My mum ___ in a bakery.", options: ["work", "works", "is work", "working"], answer: "works",
        explain: "My mum = she, so the verb takes -s.",
        explainRu: "My mum = she, поэтому глагол с -s." },
      { type: "choice", q: "___ your husband speak Russian?", options: ["Do", "Does", "Is"], answer: "Does",
        explain: "Your husband = he, so the question starts with Does.",
        explainRu: "Your husband = he, поэтому вопрос с Does." },
      { type: "choice", q: "Which sentence is correct?", options: ["She don't like tea.", "She doesn't likes tea.", "She doesn't like tea.", "She not like tea."], answer: "She doesn't like tea.",
        explain: "He / she / it + doesn't + base verb.",
        explainRu: "He / she / it + doesn't + глагол без -s." },
      { type: "gap", q: "He ___ to work by train every day. (go)", answer: ["goes"],
        explain: "Go + -es with he: goes.",
        explainRu: "С he к go добавляем -es: goes." },
      { type: "gap", q: "We ___ watch TV in the morning. (not)", answer: ["don't", "do not"],
        explain: "With we the negative is don't / do not.",
        explainRu: "С we отрицание — don't (do not)." },
      { type: "order", ru: "Она обычно встаёт в шесть.", answer: "She usually gets up at six.",
        explain: "Usually goes before the main verb.",
        explainRu: "Usually ставится перед основным глаголом." },
      { type: "order", ru: "Где ты работаешь?", answer: "Where do you work?",
        explain: "Question word + do + subject + verb.",
        explainRu: "Вопросительное слово + do + подлежащее + глагол." },
      { type: "translate", ru: "Она не говорит по-французски.", options: ["She doesn't speak French.", "She don't speak French.", "She not speak French.", "She doesn't speaks French."],
        answer: "She doesn't speak French.",
        explain: "Doesn't + base verb, with no -s.",
        explainRu: "Doesn't + глагол без -s." },
      { type: "listen", say: "He doesn't live here.", options: ["He doesn't live here.", "He don't live here.", "He lives here."],
        answer: "He doesn't live here.",
        explain: "You heard doesn't live — the correct negative with he.",
        explainRu: "Прозвучало doesn't live — правильное отрицание с he." },
      { type: "match", q: "Match the verb with its he / she / it form.", qRu: "Соедини глагол с его формой для he / she / it.",
        pairs: [["go", "goes"], ["watch", "watches"], ["study", "studies"], ["have", "has"], ["play", "plays"]],
        explain: "Add -s, -es or -ies; have becomes has.",
        explainRu: "Добавляем -s, -es или -ies; have превращается в has." }
    ]
  },

  // ───────────────────────── 5. PRESENT CONTINUOUS ─────────────────────────
  {
    id: "present-continuous",
    level: 1,
    order: 5,
    emoji: "⏳",
    title: "Present Continuous",
    titleRu: "Present Continuous — настоящее длительное",
    intro: "Use the Present Continuous for things happening right now and for temporary situations.",
    introRu: "Present Continuous нужен для того, что происходит прямо сейчас, и для временных ситуаций.",
    sections: [
      {
        title: "Form", titleRu: "Как образуется",
        text: "Use am / is / are + verb-ing. Negatives add not; questions put am / is / are first.",
        textRu: "Формула: am / is / are + глагол с окончанием -ing. В отрицании добавляем not, в вопросе am / is / are идёт первым.",
        table: { head: ["", "Example"], rows: [["+", "She's working."], ["–", "She isn't working."], ["?", "Is she working?"]] },
        examples: [
          { en: "I'm cooking dinner.", ru: "Я готовлю ужин." },
          { en: "They aren't listening.", ru: "Они не слушают." },
          { en: "Are you waiting for the bus?", ru: "Ты ждёшь автобус?" }
        ]
      },
      {
        title: "When to use it", titleRu: "Когда использовать",
        text: "Use it for actions happening now, and for temporary situations around now (this week, at the moment).",
        textRu: "Для действия прямо сейчас (now, at the moment, Look!) и для временной ситуации «в эти дни» (this week, today). Например, ты сейчас не печатаешь, но «I'm learning English» — это то, чем ты занимаешься в этот период.",
        examples: [
          { en: "Look! It's snowing.", ru: "Смотри! Идёт снег." },
          { en: "I'm working from home this week.", ru: "На этой неделе я работаю из дома." },
          { en: "She's learning to drive.", ru: "Она учится водить машину." }
        ]
      },
      {
        title: "-ing spelling", titleRu: "Правописание -ing",
        text: "Drop a final -e (make → making). Double the last consonant in short verbs like sit → sitting. -ie becomes -y (lie → lying).",
        textRu: "Немая -e на конце пропадает: make → making. В коротких глаголах «согласная-гласная-согласная» последняя согласная удваивается: sit → sitting, run → running. -ie меняется на -y: lie → lying.",
        table: { head: ["Verb", "-ing"], rows: [["make", "making"], ["sit", "sitting"], ["lie", "lying"], ["read", "reading"]] },
        examples: [
          { en: "The kids are swimming.", ru: "Дети плавают." },
          { en: "Why are you sitting on the floor?", ru: "Почему ты сидишь на полу?" }
        ]
      }
    ],
    tip: {
      en: "Don't forget am / is / are: \"I am working\", not \"I working\". And don't use the Present Simple for right now: \"I'm cooking\", not \"I cook now\".",
      ru: "Не теряй am / is / are: «I am working», а не «I working». И для действия прямо сейчас не используй Present Simple: «I'm cooking», а не «I cook now»."
    },
    exercises: [
      { type: "choice", q: "Shh! The baby ___.", options: ["sleeps", "is sleeping", "sleeping", "are sleeping"], answer: "is sleeping",
        explain: "The action is happening now: is + sleeping.",
        explainRu: "Действие происходит прямо сейчас: is + sleeping." },
      { type: "choice", q: "Which spelling is correct?", options: ["runing", "running", "runnying"], answer: "running",
        explain: "Run is short and ends in vowel + consonant, so we double the n.",
        explainRu: "Run — короткий глагол на «гласная + согласная», поэтому n удваивается." },
      { type: "choice", q: "\"What ___ you doing?\" — \"I'm making tea.\"", options: ["do", "are", "is"], answer: "are",
        explain: "Present Continuous questions use am / is / are, and you takes are.",
        explainRu: "В вопросе Present Continuous нужен am / is / are; с you — are." },
      { type: "gap", q: "Be quiet, please. I ___ on the phone. (talk)", answer: ["am talking", "'m talking"],
        explain: "Right now: am + talking.",
        explainRu: "Прямо сейчас: am + talking." },
      { type: "gap", q: "They ___ today — it's a bank holiday. (not / work)", answer: ["aren't working", "are not working"],
        explain: "Temporary situation today: aren't + working.",
        explainRu: "Временная ситуация сегодня: aren't + working." },
      { type: "order", ru: "Она сейчас готовит ужин.", answer: "She is making dinner now.",
        explain: "Subject + is + verb-ing.",
        explainRu: "Подлежащее + is + глагол с -ing." },
      { type: "order", ru: "Ты ждёшь автобус?", answer: "Are you waiting for the bus?",
        explain: "Question: are comes before the subject.",
        explainRu: "В вопросе are стоит перед подлежащим." },
      { type: "translate", ru: "Смотри, идёт дождь!", options: ["Look, it rains!", "Look, it's raining!", "Look, it raining!", "Look, is raining!"],
        answer: "Look, it's raining!",
        explain: "Happening now: it + is + raining.",
        explainRu: "Происходит сейчас — it is raining. Подлежащее it обязательно, хотя по-русски его нет." },
      { type: "listen", say: "We're staying with friends this week.", options: ["We're staying with friends this week.", "We stay with friends this week.", "We stayed with friends this week."],
        answer: "We're staying with friends this week.",
        explain: "You heard we're staying — a temporary situation.",
        explainRu: "Прозвучало we're staying — временная ситуация." },
      { type: "match", q: "Match the verb with its -ing form.", qRu: "Соедини глагол с формой на -ing.",
        pairs: [["make", "making"], ["sit", "sitting"], ["lie", "lying"], ["swim", "swimming"], ["read", "reading"]],
        explain: "Drop -e, double the consonant, change -ie to -y, or just add -ing.",
        explainRu: "Убираем -e, удваиваем согласную, меняем -ie на -y или просто добавляем -ing." }
    ]
  },

  // ───────────────────────── 6. SIMPLE vs CONTINUOUS ─────────────────────────
  {
    id: "simple-vs-continuous",
    level: 1,
    order: 6,
    emoji: "⚖️",
    title: "Present Simple vs Present Continuous",
    titleRu: "Present Simple или Present Continuous",
    intro: "Russian has one present tense, English has two. Let's learn to choose between \"I work\" and \"I'm working\".",
    introRu: "В русском одно настоящее время, а в английском — два. Учимся выбирать между «I work» и «I'm working».",
    sections: [
      {
        title: "Always or now?", titleRu: "Всегда или сейчас?",
        text: "Present Simple is for habits and facts. Present Continuous is for now and temporary situations.",
        textRu: "Present Simple — для привычек и фактов (usually, every day, often). Present Continuous — для того, что происходит сейчас или временно (now, at the moment, this week).",
        table: { head: ["Simple", "Continuous"], rows: [["every day", "now"], ["usually", "at the moment"], ["often", "this week"]] },
        examples: [
          { en: "I usually drink tea, but today I'm drinking coffee.", ru: "Обычно я пью чай, но сегодня пью кофе." },
          { en: "He works in Leeds.", ru: "Он работает в Лидсе." },
          { en: "He's working in Leeds this month.", ru: "В этом месяце он работает в Лидсе." }
        ]
      },
      {
        title: "State verbs", titleRu: "Глаголы состояния",
        text: "Verbs for feelings, thoughts and possession — like, love, hate, know, want, need, understand, believe — are not normally used with -ing.",
        textRu: "Глаголы чувств, мыслей и обладания — like, love, hate, know, want, need, understand, believe — обычно не употребляются в Continuous, даже если речь идёт о «сейчас».",
        examples: [
          { en: "I need a coffee right now.", ru: "Мне прямо сейчас нужен кофе." },
          { en: "Do you understand me?", ru: "Ты меня понимаешь?" },
          { en: "She knows the answer.", ru: "Она знает ответ." }
        ]
      }
    ],
    tip: {
      en: "Don't say \"I am knowing\" or \"I'm wanting\". State verbs stay simple: \"I know\", \"I want\", \"I like it\".",
      ru: "Не говори «I am knowing» или «I'm wanting». Глаголы состояния остаются в Simple: «I know», «I want», «I like it» — даже про текущий момент."
    },
    exercises: [
      { type: "choice", q: "I ___ what you mean.", options: ["know", "am knowing", "knowing"], answer: "know",
        explain: "Know is a state verb, so we use the Present Simple.",
        explainRu: "Know — глагол состояния, поэтому Present Simple." },
      { type: "choice", q: "Water ___ at 100 degrees.", options: ["boils", "is boiling", "boil"], answer: "boils",
        explain: "It's a fact, so we use the Present Simple.",
        explainRu: "Это факт, поэтому Present Simple." },
      { type: "choice", q: "Can you call back later? I ___ a shower.", options: ["have", "am having", "has"], answer: "am having",
        explain: "Have a shower is an action happening now, so -ing is fine here.",
        explainRu: "Have a shower — это действие, а не обладание, и оно происходит сейчас, поэтому am having." },
      { type: "gap", q: "Sorry, I can't talk — I ___ dinner. (cook)", answer: ["am cooking", "'m cooking"],
        explain: "Happening right now: am cooking.",
        explainRu: "Происходит прямо сейчас: am cooking." },
      { type: "gap", q: "My husband ___ football every Saturday. (play)", answer: ["plays"],
        explain: "A habit (every Saturday), so Present Simple with -s.",
        explainRu: "Привычка (every Saturday), значит, Present Simple с -s." },
      { type: "order", ru: "Обычно я хожу на работу пешком.", answer: "I usually walk to work.",
        explain: "A routine with usually: Present Simple.",
        explainRu: "Привычка со словом usually — Present Simple." },
      { type: "order", ru: "Сегодня он работает из дома.", answer: "He is working from home today.",
        explain: "Temporary situation today: Present Continuous.",
        explainRu: "Временная ситуация на сегодня — Present Continuous." },
      { type: "translate", ru: "Я хочу новый телефон.", options: ["I am wanting a new phone.", "I want a new phone.", "I wanting a new phone.", "I wants a new phone."],
        answer: "I want a new phone.",
        explain: "Want is a state verb: I want.",
        explainRu: "Want — глагол состояния, поэтому просто I want." },
      { type: "listen", say: "She's reading a book at the moment.", options: ["She's reading a book at the moment.", "She reads a book at the moment.", "She read a book at the moment."],
        answer: "She's reading a book at the moment.",
        explain: "At the moment goes with the Present Continuous: she's reading.",
        explainRu: "At the moment — сигнал Present Continuous: she's reading." },
      { type: "match", q: "Match the Russian with the English.", qRu: "Соедини русское предложение с английским.",
        pairs: [["Обычно я пью чай.", "I usually drink tea."], ["Сейчас я пью чай.", "I'm drinking tea now."], ["Я его знаю.", "I know him."], ["Мне нужна помощь.", "I need help."]],
        explain: "Habits and state verbs → Simple; right now → Continuous.",
        explainRu: "Привычки и глаголы состояния → Simple; прямо сейчас → Continuous." }
    ]
  },

  // ───────────────────────── 7. HAVE / HAVE GOT ─────────────────────────
  {
    id: "have-got",
    level: 1,
    order: 7,
    emoji: "🎒",
    title: "Have / have got",
    titleRu: "Have / have got — «у меня есть»",
    intro: "In English you don't say \"at me is\" — you say \"I have\" or \"I've got\". Both are very common in the UK.",
    introRu: "По-английски не говорят «у меня есть» дословно — говорят I have или I've got. В Британии обе формы очень распространены.",
    sections: [
      {
        title: "Have got", titleRu: "Have got",
        text: "Have got means the same as have (possession, family, illness). It is very common in British speech. Use has got with he / she / it.",
        textRu: "Have got значит то же, что have: обладание, семья, внешность, болезни. В британской разговорной речи это очень частая форма. С he / she / it — has got. Краткие формы: I've got, she's got.",
        table: { head: ["", "Example"], rows: [["+", "I've got a car."], ["–", "I haven't got a car."], ["?", "Have you got a car?"]] },
        examples: [
          { en: "I've got two brothers.", ru: "У меня два брата." },
          { en: "She's got a cold.", ru: "Она простужена." },
          { en: "Have you got a pen? — Yes, I have.", ru: "У тебя есть ручка? — Да." }
        ]
      },
      {
        title: "Have", titleRu: "Have",
        text: "Have works like a normal verb: has with he / she / it, and do / does in questions and negatives.",
        textRu: "Have без got ведёт себя как обычный глагол Present Simple: с he / she / it — has, а в вопросах и отрицаниях нужен do / does: Do you have…? I don't have…",
        table: { head: ["", "Example"], rows: [["+", "She has a car."], ["–", "She doesn't have a car."], ["?", "Does she have a car?"]] },
        examples: [
          { en: "Do you have any children?", ru: "У тебя есть дети?" },
          { en: "We don't have a garden.", ru: "У нас нет сада." },
          { en: "He has blue eyes.", ru: "У него голубые глаза." }
        ]
      },
      {
        title: "Don't mix them", titleRu: "Не смешивай",
        text: "Choose one pattern: \"Have you got…?\" or \"Do you have…?\" — never \"Do you have got…?\". Also, have (not have got) is used for actions: have breakfast, have a shower.",
        textRu: "Выбирай одну схему: «Have you got…?» или «Do you have…?», но не «Do you have got…?». И для действий (have breakfast, have a shower) используется только have, без got.",
        examples: [
          { en: "I have breakfast at eight.", ru: "Я завтракаю в восемь." },
          { en: "Has he got a job?", ru: "У него есть работа?" }
        ]
      }
    ],
    tip: {
      en: "Don't translate \"у меня есть\" word for word, and don't drop the article: \"I've got a car\", not \"I have car\" or \"At me is a car\".",
      ru: "Не переводи «у меня есть» дословно и не теряй артикль: «I've got a car», а не «I have car» и не «At me is a car». В отрицании: «I haven't got» или «I don't have» — но не «I don't have got»."
    },
    exercises: [
      { type: "choice", q: "___ you got a TV licence?", options: ["Do", "Have", "Has", "Are"], answer: "Have",
        explain: "With got, the question starts with Have.",
        explainRu: "С got вопрос начинается с Have." },
      { type: "choice", q: "My sister ___ three children.", options: ["have got", "has got", "is got"], answer: "has got",
        explain: "My sister = she, so has got.",
        explainRu: "My sister = she, поэтому has got." },
      { type: "choice", q: "Which question is correct?", options: ["Do you have got a car?", "Do you have a car?", "Have you a car got?", "You have a car?"], answer: "Do you have a car?",
        explain: "Without got, have needs do in questions.",
        explainRu: "Без got для вопроса с have нужен do." },
      { type: "gap", q: "Sorry, I ___ got any cash. Can I pay by card? (not)", answer: ["haven't", "have not"],
        explain: "Negative of have got: haven't got.",
        explainRu: "Отрицание с have got: haven't got." },
      { type: "gap", q: "___ your flat got a balcony? (have / has)", answer: ["has"],
        explain: "Your flat = it, so Has.",
        explainRu: "Your flat = it, поэтому Has." },
      { type: "order", ru: "У тебя есть дети?", answer: "Have you got any children?",
        explain: "Have + subject + got + noun.",
        explainRu: "Have + подлежащее + got + существительное." },
      { type: "order", ru: "У неё есть новая работа.", answer: "She has got a new job.",
        explain: "She + has got + a + noun.",
        explainRu: "She + has got + a + существительное." },
      { type: "translate", ru: "У меня нет машины.", options: ["I haven't got a car.", "I don't have got a car.", "I haven't car.", "At me is no car."],
        answer: "I haven't got a car.",
        explain: "Haven't got + a + noun is the natural British way.",
        explainRu: "Haven't got + a + существительное — естественный британский вариант. Можно и «I don't have a car», но не смешивая do и got." },
      { type: "listen", say: "He's got a headache.", options: ["He's got a headache.", "He got a headache.", "He has a headaches."],
        answer: "He's got a headache.",
        explain: "You heard he's got — the short form of he has got.",
        explainRu: "Прозвучало he's got — краткая форма he has got." },
      { type: "match", q: "Match the full form with the short form.", qRu: "Соедини полную форму с краткой.",
        pairs: [["I have got", "I've got"], ["she has got", "she's got"], ["we have not got", "we haven't got"], ["he has not got", "he hasn't got"]],
        explain: "Have → 've, has → 's, have not → haven't, has not → hasn't.",
        explainRu: "Have → 've, has → 's, have not → haven't, has not → hasn't." }
    ]
  },

  // ───────────────────────── 8. THERE IS / ARE ─────────────────────────
  {
    id: "there-is-are",
    level: 1,
    order: 8,
    emoji: "🏠",
    title: "There is / there are",
    titleRu: "There is / there are — «есть, имеется»",
    intro: "Use there is and there are to say that something exists or is somewhere — perfect for describing your flat or your town.",
    introRu: "There is и there are говорят о том, что что-то есть или где-то находится. Идеально, чтобы описать квартиру или район.",
    sections: [
      {
        title: "There is / there are", titleRu: "There is / there are",
        text: "Use there is with singular and uncountable nouns, there are with plurals. The place usually goes at the end.",
        textRu: "There is (кратко there's) — с одним предметом и с неисчисляемыми словами, there are — с несколькими. По-русски место часто стоит в начале («В холодильнике есть молоко»), а в английском — обычно в конце.",
        table: { head: ["", "Singular", "Plural"], rows: [["+", "There's a…", "There are some…"], ["–", "There isn't a…", "There aren't any…"], ["?", "Is there a…?", "Are there any…?"]] },
        examples: [
          { en: "There's a Tesco near my flat.", ru: "Рядом с моей квартирой есть Tesco." },
          { en: "There are two bedrooms.", ru: "Здесь две спальни." },
          { en: "Is there a lift in the building?", ru: "В доме есть лифт?" }
        ]
      },
      {
        title: "Some and any", titleRu: "Some и any",
        text: "Use some in positive sentences and any in negatives and questions, with plurals and uncountable nouns.",
        textRu: "Some («немного, несколько») — в утвердительных предложениях, any — в отрицаниях и вопросах. Используются со множественным числом и неисчисляемыми словами (milk, bread, money).",
        examples: [
          { en: "There's some milk in the fridge.", ru: "В холодильнике есть молоко." },
          { en: "There aren't any eggs.", ru: "Яиц нет." },
          { en: "Are there any shops nearby?", ru: "Поблизости есть магазины?" }
        ]
      }
    ],
    tip: {
      en: "Don't start with the place like in Russian: say \"There's a bank on the corner\", not \"On the corner is bank\".",
      ru: "Не начинай с места, как в русском: «There's a bank on the corner», а не «On the corner is bank». И не забывай: milk, bread, money — неисчисляемые, значит, there is: «There is some milk»."
    },
    exercises: [
      { type: "choice", q: "There ___ two parks near my house.", options: ["is", "are", "be"], answer: "are",
        explain: "Two parks is plural, so there are.",
        explainRu: "Two parks — множественное число, поэтому there are." },
      { type: "choice", q: "There ___ some bread on the table.", options: ["is", "are", "have"], answer: "is",
        explain: "Bread is uncountable, so there is.",
        explainRu: "Bread — неисчисляемое, поэтому there is." },
      { type: "choice", q: "Are there ___ good restaurants in your town?", options: ["some", "any", "a"], answer: "any",
        explain: "In questions we usually use any.",
        explainRu: "В вопросах обычно используем any." },
      { type: "gap", q: "There ___ any eggs left. Can you buy some? (not / be)", answer: ["aren't", "are not"],
        explain: "Plural negative: there aren't any.",
        explainRu: "Отрицание во множественном числе: there aren't any." },
      { type: "gap", q: "Excuse me, ___ there a cash machine near here? (be)", answer: ["is"],
        explain: "One cash machine, question: Is there…?",
        explainRu: "Один банкомат, вопрос: Is there…?" },
      { type: "order", ru: "На углу есть банк.", answer: "There is a bank on the corner.",
        explain: "There is + a + noun + place.",
        explainRu: "There is + a + существительное + место." },
      { type: "order", ru: "Поблизости есть какие-нибудь магазины?", answer: "Are there any shops nearby?",
        explain: "Question: Are there any + plural noun.",
        explainRu: "Вопрос: Are there any + существительное во множественном числе." },
      { type: "translate", ru: "В холодильнике есть молоко.", options: ["There is some milk in the fridge.", "In the fridge is milk.", "There are some milk in the fridge.", "In fridge there is milk."],
        answer: "There is some milk in the fridge.",
        explain: "There is + some + uncountable noun, with the place at the end.",
        explainRu: "There is + some + неисчисляемое слово, а место — в конце." },
      { type: "listen", say: "There aren't any chairs in the kitchen.", options: ["There aren't any chairs in the kitchen.", "There are some chairs in the kitchen.", "There isn't a chair in the kitchen."],
        answer: "There aren't any chairs in the kitchen.",
        explain: "You heard there aren't any chairs — a plural negative.",
        explainRu: "Прозвучало there aren't any chairs — отрицание во множественном числе." },
      { type: "match", q: "Match the beginnings with the endings.", qRu: "Соедини начало и конец предложения.",
        pairs: [["There is", "a bus stop near here."], ["There are", "two bedrooms."], ["Is there", "a lift in the building?"], ["Are there", "any toilets here?"]],
        explain: "Is with singular, are with plural; questions start with Is / Are.",
        explainRu: "Is — с единственным числом, are — с множественным; вопросы начинаются с Is / Are." }
    ]
  },

  // ───────────────────────── 9. CAN ─────────────────────────
  {
    id: "can",
    level: 1,
    order: 9,
    emoji: "💪",
    title: "Can / can't",
    titleRu: "Can / can't — могу, умею, можно",
    intro: "Can is a small but very useful word: for what you are able to do, for asking permission and for polite requests.",
    introRu: "Can — короткое, но очень полезное слово: им говорят о том, что ты умеешь, спрашивают разрешения и вежливо просят.",
    sections: [
      {
        title: "Ability", titleRu: "Умение",
        text: "Can + base verb, the same for everyone. The negative is can't (cannot).",
        textRu: "Can + глагол в начальной форме, без to и без -s, одинаково для всех лиц. Отрицание — can't (полная форма — cannot, пишется слитно).",
        examples: [
          { en: "I can speak three languages.", ru: "Я говорю на трёх языках." },
          { en: "She can't swim.", ru: "Она не умеет плавать." },
          { en: "Can you drive? — No, I can't.", ru: "Ты умеешь водить? — Нет." }
        ]
      },
      {
        title: "Permission", titleRu: "Разрешение",
        text: "Use Can I…? to ask for permission, and can / can't to say what is allowed.",
        textRu: "«Can I…?» — «Можно мне…?». А you can / you can't — «можно / нельзя».",
        examples: [
          { en: "Can I pay by card?", ru: "Можно оплатить картой?" },
          { en: "You can't park here.", ru: "Здесь нельзя парковаться." },
          { en: "Can I sit here?", ru: "Можно я здесь сяду?" }
        ]
      },
      {
        title: "Requests", titleRu: "Просьбы",
        text: "Use Can you…? to ask someone to do something. Could you…? is more polite — great for shops, work and the GP.",
        textRu: "«Can you…?» — просьба. «Could you…?» — ещё вежливее, подходит для магазина, работы, разговора с врачом. Не забывай please — в Британии это очень важно.",
        examples: [
          { en: "Can you help me, please?", ru: "Ты можешь мне помочь?" },
          { en: "Could you repeat that, please?", ru: "Не могли бы вы повторить?" },
          { en: "Could you open the window, please?", ru: "Не могли бы вы открыть окно?" }
        ]
      }
    ],
    tip: {
      en: "No to and no -s after can: \"She can swim\", not \"She can to swim\" or \"She cans swim\". And don't use do: \"Can you…?\", not \"Do you can…?\".",
      ru: "После can не ставь to и -s: «She can swim», а не «She can to swim» или «She cans swim». И без do: «Can you…?», а не «Do you can…?». Кстати, «уметь» и «мочь» по-английски — одно и то же can."
    },
    exercises: [
      { type: "choice", q: "My daughter can ___ Russian and English.", options: ["speak", "speaks", "to speak", "speaking"], answer: "speak",
        explain: "After can we use the base verb.",
        explainRu: "После can — глагол в начальной форме." },
      { type: "choice", q: "___ you tell me the way to the station, please?", options: ["Could", "Do", "Are"], answer: "Could",
        explain: "Could you…? is a polite request.",
        explainRu: "Could you…? — вежливая просьба." },
      { type: "choice", q: "Which question is correct?", options: ["Do you can drive?", "Can you drive?", "Can you to drive?", "You can drive?"], answer: "Can you drive?",
        explain: "Can comes first in questions, with no do.",
        explainRu: "В вопросе can ставится первым, do не нужен." },
      { type: "gap", q: "I ___ come tonight — I'm working late. (can / not)", answer: ["can't", "cannot"],
        explain: "Negative of can: can't or cannot.",
        explainRu: "Отрицание can: can't или cannot (слитно)." },
      { type: "gap", q: "___ I try this dress on, please?", answer: ["can", "could", "may"],
        explain: "To ask for permission: Can I…? (or Could / May I…?).",
        explainRu: "Чтобы спросить разрешения: Can I…? (или Could / May I…? — ещё вежливее)." },
      { type: "order", ru: "Можно оплатить картой?", answer: "Can I pay by card?",
        explain: "Can + I + base verb for permission.",
        explainRu: "Can + I + глагол — просьба о разрешении." },
      { type: "order", ru: "Не могли бы вы открыть окно, пожалуйста?", answer: "Could you open the window, please?",
        explain: "Could you + base verb is a polite request.",
        explainRu: "Could you + глагол — вежливая просьба." },
      { type: "translate", ru: "Я не умею плавать.", options: ["I can't swim.", "I don't can swim.", "I can't to swim.", "I not can swim."],
        answer: "I can't swim.",
        explain: "Can't + base verb, with no do and no to.",
        explainRu: "Can't + глагол, без do и без to." },
      { type: "listen", say: "She can't come to the party.", options: ["She can't come to the party.", "She can come to the party.", "She can't came to the party."],
        answer: "She can't come to the party.",
        explain: "You heard can't — in British English it sounds like \"kahnt\", with a long a.",
        explainRu: "Прозвучало can't — в британском произношении это долгое «а»: «кант». Can звучит коротко." },
      { type: "match", q: "Match the Russian with the English.", qRu: "Соедини русское предложение с английским.",
        pairs: [["Я умею плавать.", "I can swim."], ["Можно мне войти?", "Can I come in?"], ["Не могли бы вы мне помочь?", "Could you help me?"], ["Здесь нельзя курить.", "You can't smoke here."]],
        explain: "Can covers ability, permission and requests.",
        explainRu: "Can выражает и умение, и разрешение, и просьбу." }
    ]
  },

  // ───────────────────────── 10. PREPOSITIONS OF TIME ─────────────────────────
  {
    id: "prepositions-time",
    level: 1,
    order: 10,
    emoji: "🕘",
    title: "Prepositions of time: in / on / at",
    titleRu: "Предлоги времени: in / on / at",
    intro: "In Russian we often say «в» for everything. In English the time decides: in, on or at.",
    introRu: "По-русски мы почти везде говорим «в». А в английском выбор зависит от того, что это за время: in, on или at.",
    sections: [
      {
        title: "At — exact time", titleRu: "At — точное время",
        text: "Use at for clock times and some fixed expressions: at night, at the weekend, at Christmas.",
        textRu: "At — для точного времени по часам (at 7 o'clock, at half past six) и устойчивых выражений: at night, at lunchtime, at Christmas. В британском английском — at the weekend.",
        examples: [
          { en: "The shop opens at nine.", ru: "Магазин открывается в девять." },
          { en: "I don't work at the weekend.", ru: "Я не работаю по выходным." },
          { en: "I can't sleep at night.", ru: "Я не могу спать по ночам." }
        ]
      },
      {
        title: "On — days and dates", titleRu: "On — дни и даты",
        text: "Use on for days of the week and dates.",
        textRu: "On — для дней недели и дат: on Monday, on 5th May, on my birthday. И если к дню добавляется часть суток — тоже on: on Friday evening.",
        examples: [
          { en: "My appointment is on Tuesday.", ru: "Мой приём во вторник." },
          { en: "Her birthday is on 12th March.", ru: "Её день рождения 12 марта." },
          { en: "See you on Friday evening!", ru: "Увидимся в пятницу вечером!" }
        ]
      },
      {
        title: "In — longer periods", titleRu: "In — более длинные периоды",
        text: "Use in for months, years, seasons and parts of the day: in the morning, in the afternoon, in the evening.",
        textRu: "In — для месяцев, лет, времён года и частей суток: in July, in 2025, in winter, in the morning, in the evening (но at night!).",
        table: { head: ["at", "on", "in"], rows: [["at 6 pm", "on Monday", "in July"], ["at night", "on 3rd May", "in 2025"], ["at the weekend", "on Friday evening", "in the morning"]] },
        examples: [
          { en: "We go on holiday in August.", ru: "Мы едем в отпуск в августе." },
          { en: "It's cold in winter.", ru: "Зимой холодно." },
          { en: "I go to the gym in the morning.", ru: "Утром я хожу в спортзал." }
        ]
      }
    ],
    tip: {
      en: "Don't use in with days: \"on Monday\", not \"in Monday\". And no preposition before next, last, this or every: \"next week\", not \"in next week\".",
      ru: "Русское «в понедельник» — это on Monday, а не «in Monday». И перед next, last, this, every предлог не нужен: «next week», «every day» — а не «in next week» и не «at this morning»."
    },
    exercises: [
      { type: "choice", q: "My appointment with the dentist is ___ Monday.", options: ["in", "on", "at"], answer: "on",
        explain: "Days of the week take on.",
        explainRu: "С днями недели — on." },
      { type: "choice", q: "The film starts ___ 8 pm.", options: ["in", "on", "at"], answer: "at",
        explain: "Clock times take at.",
        explainRu: "С точным временем — at." },
      { type: "choice", q: "Which sentence is correct?", options: ["See you in next week.", "See you next week.", "See you on next week.", "See you at next week."], answer: "See you next week.",
        explain: "No preposition before next.",
        explainRu: "Перед next предлог не ставится." },
      { type: "gap", q: "My birthday is ___ 5th May.", answer: ["on"],
        explain: "Dates take on.",
        explainRu: "С датами — on." },
      { type: "gap", q: "We usually visit my parents ___ the weekend.", answer: ["at"],
        explain: "In British English we say at the weekend.",
        explainRu: "В британском английском говорят at the weekend." },
      { type: "order", ru: "Я начинаю работу в девять.", answer: "I start work at nine.",
        explain: "At + clock time, usually at the end.",
        explainRu: "At + время по часам, обычно в конце предложения." },
      { type: "order", ru: "Мы едем в отпуск в августе.", answer: "We go on holiday in August.",
        explain: "Months take in.",
        explainRu: "С месяцами — in." },
      { type: "translate", ru: "Увидимся в понедельник утром.", options: ["See you on Monday morning.", "See you in Monday morning.", "See you at Monday in the morning.", "See you in the Monday morning."],
        answer: "See you on Monday morning.",
        explain: "A day + part of the day takes on.",
        explainRu: "День + часть суток — on: on Monday morning." },
      { type: "listen", say: "I usually read in the evening.", options: ["I usually read in the evening.", "I usually read at the evening.", "I usually read on the evening."],
        answer: "I usually read in the evening.",
        explain: "Parts of the day take in: in the evening.",
        explainRu: "Части суток — in: in the evening." },
      { type: "match", q: "Match the Russian with the English.", qRu: "Соедини русское выражение с английским.",
        pairs: [["в понедельник", "on Monday"], ["в 7 часов", "at 7 o'clock"], ["в июле", "in July"], ["утром", "in the morning"], ["на выходных", "at the weekend"]],
        explain: "One Russian «в» can be in, on or at in English.",
        explainRu: "Одно русское «в» по-английски может быть и in, и on, и at." }
    ]
  }

]);
