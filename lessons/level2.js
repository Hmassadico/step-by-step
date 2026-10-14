window.LESSONS_DATA = (window.LESSONS_DATA || []).concat([

  // ───────────────────────── 1. Pronouns and possessives ─────────────────────────
  {
    id: "pronouns-possessives",
    level: 2,
    order: 1,
    emoji: "👜",
    title: "Pronouns and possessives: me, my, mine, Anna's",
    titleRu: "Местоимения и притяжательные формы: me, my, mine, Anna's",
    intro: "Who does it belong to? In this lesson you'll learn I / me / my / mine, the little 's (Anna's bag) and the question word whose.",
    introRu: "Чьё это? В этом уроке ты разберёшь I / me / my / mine, маленькое 's (Anna's bag) и вопросительное слово whose.",
    sections: [
      {
        title: "Subject and object pronouns", titleRu: "Местоимения: подлежащее и дополнение",
        text: "Use I, he, she, we, they before the verb. After a verb or a preposition, use me, him, her, us, them.",
        textRu: "Перед глаголом (в роли подлежащего) ставим I, he, she, we, they. После глагола или предлога — me, him, her, us, them. Это как «я» и «меня/мне» в русском.",
        table: { head: ["Subject", "Object"], rows: [["I", "me"], ["you", "you"], ["he", "him"], ["she", "her"], ["it", "it"], ["we", "us"], ["they", "them"]] },
        examples: [
          { en: "She called me last night.", ru: "Она звонила мне вчера вечером." },
          { en: "Can you help us?", ru: "Ты можешь нам помочь?" },
          { en: "I saw them at Tesco.", ru: "Я видела их в «Теско»." }
        ]
      },
      {
        title: "my or mine?", titleRu: "my или mine?",
        text: "My, your, his, her, our, their go before a noun. Mine, yours, his, hers, ours, theirs stand on their own.",
        textRu: "My, your, his, her, our, their всегда стоят перед существительным (my bag). Mine, yours, his, hers, ours, theirs используются без существительного (The bag is mine).",
        table: { head: ["+ noun", "On its own"], rows: [["my", "mine"], ["your", "yours"], ["his", "his"], ["her", "hers"], ["our", "ours"], ["their", "theirs"]] },
        examples: [
          { en: "This is my coat.", ru: "Это моё пальто." },
          { en: "This coat is mine.", ru: "Это пальто — моё." },
          { en: "Is that car yours or theirs?", ru: "Эта машина твоя или их?" }
        ]
      },
      {
        title: "Anna's bag and whose", titleRu: "Anna's bag и whose",
        text: "Add 's to a person to show they own something: Anna's bag. With plural nouns ending in -s, add only an apostrophe: my parents' house. Ask about the owner with whose.",
        textRu: "Чтобы показать, кому что принадлежит, добавь 's к человеку: Anna's bag — сумка Анны. Если существительное во множественном числе уже оканчивается на -s, ставим только апостроф: my parents' house — дом моих родителей. Вопрос «чей?» — whose.",
        examples: [
          { en: "That's Anna's bag.", ru: "Это сумка Анны." },
          { en: "We had lunch at my parents' house.", ru: "Мы обедали у моих родителей." },
          { en: "Whose keys are these?", ru: "Чьи это ключи?" },
          { en: "Whose is this umbrella? — It's Tom's.", ru: "Чей это зонт? — Тома." }
        ]
      }
    ],
    tip: {
      en: "English has no word for «свой». Choose my / your / his / her / our / their according to the owner: She took her bag (not «his bag» or «own bag»). And don't mix up whose (чей) and who's (= who is).",
      ru: "В английском нет слова «свой». Выбирай my / your / his / her / our / their по тому, кто владелец: «Она взяла свою сумку» — She took her bag (а не his bag или own bag). И не путай whose (чей) и who's (= who is, кто)."
    },
    exercises: [
      { type: "choice", q: "Can you help ___, please?", options: ["I", "me", "my"], answer: "me",
        explain: "After a verb we use the object pronoun me.",
        explainRu: "После глагола нужно местоимение-дополнение: me (мне/меня)." },
      { type: "choice", q: "This isn't my umbrella. It's ___.", options: ["her", "hers", "she"], answer: "hers",
        explain: "No noun follows, so we use hers.",
        explainRu: "После слова нет существительного, поэтому нужна самостоятельная форма hers." },
      { type: "choice", q: "___ phone is this?", options: ["Who", "Whose", "Who's"], answer: "Whose",
        explain: "Whose asks about the owner.",
        explainRu: "Whose — «чей». Who's = who is (кто есть), это другое слово, хотя звучит так же." },
      { type: "gap", q: "This is ___ car. (Tom)", answer: ["Tom's"],
        explain: "We add 's to the owner: Tom's car.",
        explainRu: "Добавляем 's к владельцу: Tom's car — машина Тома." },
      { type: "gap", q: "Olga and I live in Leeds. ___ flat is near the station. (we)", answer: ["Our"],
        explain: "Before a noun we use the possessive our.",
        explainRu: "Перед существительным нужна притяжательная форма our (наша)." },
      { type: "order", ru: "Это сумка моей сестры.", answer: "This is my sister's bag.",
        explain: "Owner + 's + thing: my sister's bag.",
        explainRu: "Порядок: владелец + 's + предмет: my sister's bag." },
      { type: "order", ru: "Этот телефон мой, а не твой.", answer: "This phone is mine, not yours.",
        explain: "Mine and yours stand on their own, without a noun.",
        explainRu: "Mine и yours употребляются без существительного после них." },
      { type: "translate", ru: "Она взяла свою сумку.",
        options: ["She took her bag.", "She took his bag.", "She took own bag.", "She took the her bag."],
        answer: "She took her bag.",
        explain: "«Свой» becomes the possessive that matches the owner — here her.",
        explainRu: "«Свой» переводим притяжательным местоимением владельца: она — значит her." },
      { type: "listen", say: "We visited them on Sunday.",
        options: ["We visited them on Sunday.", "We visited they on Sunday.", "We visited their on Sunday."],
        answer: "We visited them on Sunday.",
        explain: "After the verb visited we need the object pronoun them.",
        explainRu: "После глагола visited нужно местоимение-дополнение them (их)." },
      { type: "match", q: "Match the pronoun with the form that stands on its own.", qRu: "Соедини местоимение с самостоятельной притяжательной формой.",
        pairs: [["I", "mine"], ["you", "yours"], ["she", "hers"], ["we", "ours"], ["they", "theirs"]],
        explain: "Mine, yours, hers, ours and theirs are used without a noun.",
        explainRu: "Mine, yours, hers, ours и theirs употребляются без существительного: It's mine." }
    ]
  },

  // ───────────────────────── 2. Past of be ─────────────────────────
  {
    id: "past-be",
    level: 2,
    order: 2,
    emoji: "⏳",
    title: "Past Simple of be: was / were",
    titleRu: "Прошедшее время глагола be: was / were",
    intro: "Was and were are the past of am, is and are. You need them to talk about yesterday, last week or your childhood.",
    introRu: "Was и were — это прошедшее время от am, is и are. Они нужны, чтобы рассказать о вчерашнем дне, прошлой неделе или детстве.",
    sections: [
      {
        title: "Positive", titleRu: "Утвердительная форма",
        text: "I, he, she and it take was. You, we and they take were.",
        textRu: "С I, he, she, it используем was. С you, we, they — were. В русском «был/была/были», а в английском глагол нельзя пропускать.",
        table: { head: ["Subject", "be (past)"], rows: [["I / he / she / it", "was"], ["you / we / they", "were"]] },
        examples: [
          { en: "I was tired after work.", ru: "Я была уставшей после работы." },
          { en: "The weather was lovely yesterday.", ru: "Вчера была прекрасная погода." },
          { en: "We were at the cinema on Friday.", ru: "В пятницу мы были в кино." }
        ]
      },
      {
        title: "Negatives and questions", titleRu: "Отрицания и вопросы",
        text: "Add not: wasn't, weren't. For questions, put was or were before the subject. No did!",
        textRu: "Для отрицания добавь not: wasn't (was not), weren't (were not). В вопросе was/were встаёт перед подлежащим. Вспомогательный глагол did здесь не нужен!",
        table: { head: ["Negative", "Question"], rows: [["I wasn't", "Was I…?"], ["she wasn't", "Was she…?"], ["they weren't", "Were they…?"]] },
        examples: [
          { en: "The shop wasn't open.", ru: "Магазин не был открыт." },
          { en: "Were you at home last night? — Yes, I was.", ru: "Ты была дома вчера вечером? — Да." },
          { en: "Was it expensive? — No, it wasn't.", ru: "Это было дорого? — Нет." }
        ]
      },
      {
        title: "There was / there were", titleRu: "There was / there were",
        text: "Use there was with one thing or uncountable nouns, and there were with plurals.",
        textRu: "There was — с одним предметом или неисчисляемым существительным, there were — с множественным числом. Это «был/была/были» в смысле «имелось где-то».",
        examples: [
          { en: "There was a long queue at the post office.", ru: "На почте была длинная очередь." },
          { en: "There were a lot of people on the bus.", ru: "В автобусе было много людей." },
          { en: "There wasn't any milk in the fridge.", ru: "В холодильнике не было молока." }
        ]
      }
    ],
    tip: {
      en: "Don't drop the verb: I was at home yesterday (not «I at home yesterday»). And don't put was in front of another verb: I went to work (not «I was go to work»).",
      ru: "Не пропускай глагол: «Вчера я была дома» — I was at home yesterday (а не I at home yesterday). И не ставь was перед другим глаголом: «Я ходила на работу» — I went to work, а не I was go to work."
    },
    exercises: [
      { type: "choice", q: "We ___ at the cinema last night.", options: ["was", "were", "are"], answer: "were",
        explain: "We takes were in the past.",
        explainRu: "С we в прошедшем времени используем were." },
      { type: "choice", q: "___ the shop open yesterday?", options: ["Was", "Were", "Did"], answer: "Was",
        explain: "The shop = it, so we use was; questions with be don't need did.",
        explainRu: "The shop = it, поэтому was. В вопросах с be вспомогательный did не нужен." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["I was at home yesterday.", "I at home yesterday.", "I were at home yesterday."],
        answer: "I was at home yesterday.",
        explain: "English needs the verb was here, and I takes was.",
        explainRu: "В английском глагол обязателен, а с I используется was." },
      { type: "gap", q: "There ___ a lot of people at the party. (be)", answer: ["were"],
        explain: "A lot of people is plural, so there were.",
        explainRu: "A lot of people — множественное число, поэтому there were." },
      { type: "gap", q: "The film ___ very good — I fell asleep! (not be)", answer: ["wasn't", "was not"],
        explain: "The film = it, so the negative is wasn't.",
        explainRu: "The film = it, поэтому отрицание — wasn't (was not)." },
      { type: "order", ru: "Где ты была вчера?", answer: "Where were you yesterday?",
        explain: "Question word + were + subject.",
        explainRu: "Вопросительное слово + were + подлежащее." },
      { type: "order", ru: "В холодильнике не было молока.", answer: "There wasn't any milk in the fridge.",
        explain: "Milk is uncountable, so there wasn't any milk.",
        explainRu: "Milk — неисчисляемое, поэтому there wasn't any milk." },
      { type: "translate", ru: "Вчера было холодно.",
        options: ["It was cold yesterday.", "Was cold yesterday.", "It were cold yesterday.", "Yesterday cold."],
        answer: "It was cold yesterday.",
        explain: "English needs a subject (it) and a verb (was).",
        explainRu: "В английском нужны и подлежащее (it), и глагол (was), даже когда по-русски их нет." },
      { type: "listen", say: "They weren't at work on Monday.",
        options: ["They weren't at work on Monday.", "They aren't at work on Monday.", "They were at work on Monday."],
        answer: "They weren't at work on Monday.",
        explain: "Weren't is the past negative of are.",
        explainRu: "Weren't — отрицание в прошедшем времени (не были)." },
      { type: "match", q: "Match each question with its short answer.", qRu: "Соедини вопрос с кратким ответом.",
        pairs: [["Was she at home?", "Yes, she was."], ["Were you late?", "No, I wasn't."], ["Were they happy?", "Yes, they were."], ["Was it expensive?", "No, it wasn't."]],
        explain: "Short answers repeat was or were with the right pronoun.",
        explainRu: "В кратком ответе повторяем was или were с нужным местоимением." }
    ]
  },

  // ───────────────────────── 3. Past Simple ─────────────────────────
  {
    id: "past-simple",
    level: 2,
    order: 3,
    emoji: "📅",
    title: "Past Simple: worked, went, did you…?",
    titleRu: "Past Simple: worked, went, did you…?",
    intro: "The Past Simple tells stories: what you did at the weekend, where you went on holiday. Let's learn regular and irregular verbs and the helper did.",
    introRu: "Past Simple — время для рассказов: что ты делала в выходные, куда ездила в отпуск. Разберём правильные и неправильные глаголы и помощника did.",
    sections: [
      {
        title: "Regular verbs: -ed", titleRu: "Правильные глаголы: -ed",
        text: "Add -ed to most verbs. Watch the spelling: live → lived, stop → stopped, study → studied, but play → played.",
        textRu: "К большинству глаголов добавляем -ed. Следи за написанием: если глагол кончается на -e, добавляем только -d (live → lived); короткий глагол на согласную удваивает её (stop → stopped); -y после согласной меняется на -ied (study → studied), но после гласной остаётся (play → played). Форма одна для всех лиц.",
        table: { head: ["Verb", "Past"], rows: [["work", "worked"], ["live", "lived"], ["stop", "stopped"], ["study", "studied"], ["play", "played"]] },
        examples: [
          { en: "I worked late on Tuesday.", ru: "Во вторник я работала допоздна." },
          { en: "We lived in Riga for two years.", ru: "Мы прожили в Риге два года." },
          { en: "The bus stopped outside the library.", ru: "Автобус остановился у библиотеки." }
        ]
      },
      {
        title: "Common irregular verbs", titleRu: "Частые неправильные глаголы",
        text: "Many everyday verbs are irregular. You just have to learn them.",
        textRu: "Многие самые нужные глаголы — неправильные: у них своя форма прошедшего времени. Их просто нужно выучить, понемногу.",
        table: { head: ["Verb", "Past"], rows: [["go", "went"], ["have", "had"], ["buy", "bought"], ["see", "saw"], ["get", "got"], ["make", "made"], ["take", "took"], ["come", "came"]] },
        examples: [
          { en: "I went to Tesco after work.", ru: "После работы я сходила в «Теско»." },
          { en: "She bought a new coat.", ru: "Она купила новое пальто." },
          { en: "We had fish and chips on the beach.", ru: "Мы ели фиш-энд-чипс на пляже." }
        ]
      },
      {
        title: "did / didn't", titleRu: "did / didn't",
        text: "Negatives: didn't + base form. Questions: Did + subject + base form. The past is already in did, so the main verb doesn't change.",
        textRu: "Отрицание: didn't (did not) + начальная форма глагола. Вопрос: Did + подлежащее + начальная форма. Прошедшее время уже «сидит» в did, поэтому основной глагол не меняется: Did you go? (а не Did you went?).",
        table: { head: ["Negative", "Question"], rows: [["I didn't go", "Did you go?"], ["she didn't buy", "Did she buy…?"]] },
        examples: [
          { en: "I didn't see him yesterday.", ru: "Я не видела его вчера." },
          { en: "Did you go to the GP? — Yes, I did.", ru: "Ты ходила к врачу? — Да." },
          { en: "Where did you buy that dress?", ru: "Где ты купила это платье?" }
        ]
      }
    ],
    tip: {
      en: "After did and didn't, always use the base form: Did you go? / I didn't buy (not «Did you went?» / «I didn't bought»). And in questions don't forget did: Where did you go? (not «Where you went?»).",
      ru: "После did и didn't — всегда начальная форма глагола: Did you go? / I didn't buy (а не Did you went? / I didn't bought). И не забывай did в вопросе: Where did you go?, а не Where you went? — в русском вспомогательного глагола нет, поэтому его легко пропустить."
    },
    exercises: [
      { type: "choice", q: "___ you go to the GP yesterday?", options: ["Did", "Were", "Do"], answer: "Did",
        explain: "Past Simple questions with a main verb use did.",
        explainRu: "В вопросе в Past Simple с обычным глаголом нужен did." },
      { type: "choice", q: "I didn't ___ any bread.", options: ["buy", "bought", "buying"], answer: "buy",
        explain: "After didn't we use the base form.",
        explainRu: "После didn't — начальная форма глагола: buy." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["We stopped at a café.", "We stoped at a café.", "We stopt at a café."],
        answer: "We stopped at a café.",
        explain: "Stop doubles the p: stopped.",
        explainRu: "Короткий глагол stop удваивает согласную: stopped." },
      { type: "gap", q: "Last weekend we ___ to Manchester. (go)", answer: ["went"],
        explain: "Go is irregular: went.",
        explainRu: "Go — неправильный глагол, его прошедшая форма — went." },
      { type: "gap", q: "She ___ English at college last year. (study)", answer: ["studied"],
        explain: "Consonant + y → -ied: studied.",
        explainRu: "Согласная + y → -ied: studied." },
      { type: "order", ru: "Ты видела Анну вчера?", answer: "Did you see Anna yesterday?",
        explain: "Did + subject + base form.",
        explainRu: "Did + подлежащее + начальная форма глагола (see, а не saw)." },
      { type: "order", ru: "Мы не смотрели этот фильм.", answer: "We didn't watch that film.",
        explain: "Didn't + base form: didn't watch.",
        explainRu: "Didn't + начальная форма: didn't watch." },
      { type: "translate", ru: "Куда ты ходила в субботу?",
        options: ["Where did you go on Saturday?", "Where did you went on Saturday?", "Where you went on Saturday?", "Where were you go on Saturday?"],
        answer: "Where did you go on Saturday?",
        explain: "Question word + did + subject + base form.",
        explainRu: "Вопросительное слово + did + подлежащее + начальная форма глагола." },
      { type: "listen", say: "He didn't like the food.",
        options: ["He didn't like the food.", "He doesn't like the food.", "He liked the food."],
        answer: "He didn't like the food.",
        explain: "Didn't shows a negative in the past.",
        explainRu: "Didn't — отрицание в прошедшем времени (ему не понравилось)." },
      { type: "match", q: "Match the verb with its past form.", qRu: "Соедини глагол с его формой прошедшего времени.",
        pairs: [["go", "went"], ["buy", "bought"], ["see", "saw"], ["take", "took"], ["make", "made"]],
        explain: "These are common irregular verbs — learn them by heart.",
        explainRu: "Это частые неправильные глаголы — их нужно выучить наизусть." }
    ]
  },

  // ───────────────────────── 4. Past Continuous ─────────────────────────
  {
    id: "past-continuous",
    level: 2,
    order: 4,
    emoji: "🌧️",
    title: "Past Continuous: was doing",
    titleRu: "Past Continuous: was doing",
    intro: "The Past Continuous describes what was happening at a moment in the past — often when something else happened.",
    introRu: "Past Continuous описывает, что происходило в какой-то момент в прошлом — часто когда случилось что-то ещё.",
    sections: [
      {
        title: "Form", titleRu: "Как образуется",
        text: "was / were + verb-ing. Negatives: wasn't / weren't + -ing. Questions: Was she…ing? Were they…ing?",
        textRu: "Was / were + глагол с окончанием -ing. Отрицание: wasn't / weren't + -ing. Вопрос: was/were встаёт перед подлежащим: Were you sleeping?",
        table: { head: ["Subject", "Form"], rows: [["I / he / she / it", "was working"], ["you / we / they", "were working"]] },
        examples: [
          { en: "I was cooking dinner.", ru: "Я готовила ужин." },
          { en: "They weren't listening.", ru: "Они не слушали." },
          { en: "What were you doing?", ru: "Что ты делала?" }
        ]
      },
      {
        title: "An action in progress", titleRu: "Действие в процессе",
        text: "Use it for an action that was in progress at a particular time in the past.",
        textRu: "Используем, когда действие длилось в определённый момент в прошлом: «в 8 вечера я как раз готовила».",
        examples: [
          { en: "At 8 o'clock I was having dinner.", ru: "В 8 часов я ужинала." },
          { en: "It was raining all morning.", ru: "Всё утро шёл дождь." },
          { en: "This time yesterday we were driving to Wales.", ru: "Вчера в это время мы ехали в Уэльс." }
        ]
      },
      {
        title: "when and while", titleRu: "when и while",
        text: "A longer action (Past Continuous) is interrupted by a short one (Past Simple). Use when before the short action and while before the long one.",
        textRu: "Длинное действие (Past Continuous) прерывается коротким (Past Simple). When обычно ставим перед коротким действием, while (пока, в то время как) — перед длинным.",
        examples: [
          { en: "I was having a shower when the phone rang.", ru: "Я была в душе, когда зазвонил телефон." },
          { en: "While we were waiting for the bus, it started to rain.", ru: "Пока мы ждали автобус, пошёл дождь." },
          { en: "She cut her finger while she was cooking.", ru: "Она порезала палец, когда готовила." }
        ]
      }
    ],
    tip: {
      en: "Russian «я готовила» can be I cooked (finished) or I was cooking (in progress) — think about which you mean. And verbs like know, like, want don't take -ing: I knew the answer (not «I was knowing»).",
      ru: "Русское «я готовила» может быть и I cooked (сделала, факт), и I was cooking (была в процессе) — подумай, что именно ты хочешь сказать. А глаголы состояния — know, like, want — не используются с -ing: I knew the answer, а не I was knowing."
    },
    exercises: [
      { type: "choice", q: "I ___ dinner when you called.", options: ["was cooking", "cooked", "were cooking"], answer: "was cooking",
        explain: "Cooking was in progress when the call interrupted it; I takes was.",
        explainRu: "Готовка была в процессе, когда её прервал звонок. С I — was." },
      { type: "choice", q: "While we ___ for the bus, it started to rain.", options: ["were waiting", "are waiting", "was waiting"], answer: "were waiting",
        explain: "While + the long action in the Past Continuous; we takes were.",
        explainRu: "После while — длительное действие в Past Continuous. С we — were." },
      { type: "choice", q: "Which sentence is correct?",
        options: ["I knew the answer.", "I was knowing the answer.", "I were knowing the answer."],
        answer: "I knew the answer.",
        explain: "Know is a state verb, so we don't use -ing.",
        explainRu: "Know — глагол состояния, с -ing его не используют." },
      { type: "gap", q: "What ___ you doing at 9 o'clock last night?", answer: ["were"],
        explain: "You takes were: What were you doing?",
        explainRu: "С you используем were: What were you doing?" },
      { type: "gap", q: "She ___ when the doorbell rang. (sleep)", answer: ["was sleeping"],
        explain: "Sleeping was in progress when the doorbell interrupted it.",
        explainRu: "Она спала (процесс), когда раздался звонок — нужен Past Continuous: was sleeping." },
      { type: "order", ru: "Я шла домой, когда увидела её.", answer: "I was walking home when I saw her.",
        explain: "Long action (was walking) + when + short action (saw).",
        explainRu: "Длинное действие (was walking) + when + короткое (saw)." },
      { type: "order", ru: "Они не слушали учителя.", answer: "They weren't listening to the teacher.",
        explain: "Weren't + -ing; listen takes to.",
        explainRu: "Weren't + -ing. После listen нужен предлог to." },
      { type: "translate", ru: "Что ты делала, когда он позвонил?",
        options: ["What were you doing when he called?", "What you were doing when he called?", "What was you doing when he called?", "What did you doing when he called?"],
        answer: "What were you doing when he called?",
        explain: "In questions were goes before you.",
        explainRu: "В вопросе were стоит перед подлежащим you." },
      { type: "listen", say: "It was raining when we left.",
        options: ["It was raining when we left.", "It rained when we left.", "It's raining when we leave."],
        answer: "It was raining when we left.",
        explain: "Was raining = the rain was in progress when we left.",
        explainRu: "Was raining — дождь уже шёл, когда мы уходили." },
      { type: "match", q: "Match the verb with its -ing form.", qRu: "Соедини глагол с его формой на -ing.",
        pairs: [["cook", "cooking"], ["swim", "swimming"], ["write", "writing"], ["lie", "lying"], ["stop", "stopping"]],
        explain: "Usually add -ing; drop a final -e, double a short final consonant, and change -ie to -y.",
        explainRu: "Обычно просто добавляем -ing; конечная -e выпадает (write → writing), короткий глагол удваивает согласную (swim → swimming), а -ie меняется на -y (lie → lying)." }
    ]
  },

  // ───────────────────────── 5. Future ─────────────────────────
  {
    id: "future",
    level: 2,
    order: 5,
    emoji: "🔮",
    title: "Future: will, going to, I'm meeting",
    titleRu: "Будущее: will, going to, I'm meeting",
    intro: "English has several ways to talk about the future. Choosing the right one depends on whether you're deciding now, have a plan, or have already arranged something.",
    introRu: "В английском есть несколько способов говорить о будущем. Выбор зависит от того, решаешь ли ты прямо сейчас, есть ли у тебя план или всё уже договорено.",
    sections: [
      {
        title: "will", titleRu: "will",
        text: "Use will ('ll) for decisions made at the moment of speaking, promises, offers and opinions about the future. Negative: won't.",
        textRu: "Will ('ll) — для решений, принятых прямо в момент речи, обещаний, предложений помощи и предположений («думаю, будет…»). Отрицание — won't (will not). После will — начальная форма глагола.",
        examples: [
          { en: "I'm cold. — I'll close the window.", ru: "Мне холодно. — Сейчас закрою окно." },
          { en: "I'll pay you back tomorrow, I promise.", ru: "Я верну тебе деньги завтра, обещаю." },
          { en: "I think it'll be sunny at the weekend.", ru: "Думаю, в выходные будет солнечно." }
        ]
      },
      {
        title: "going to", titleRu: "going to",
        text: "Use be going to for plans you've already decided on, and for predictions based on what you can see now.",
        textRu: "Be going to — для планов и намерений, которые ты уже решила, а также для прогнозов, когда есть явные признаки («смотри, сейчас пойдёт дождь»).",
        examples: [
          { en: "I'm going to learn to drive this year.", ru: "В этом году я собираюсь научиться водить." },
          { en: "We're going to paint the kitchen.", ru: "Мы собираемся покрасить кухню." },
          { en: "Look at those clouds! It's going to rain.", ru: "Посмотри на эти тучи! Сейчас пойдёт дождь." }
        ]
      },
      {
        title: "Present Continuous for arrangements", titleRu: "Present Continuous для договорённостей",
        text: "For fixed arrangements with a time and place (appointments, meetings, tickets), use the Present Continuous.",
        textRu: "Если всё уже договорено — есть время, место, запись или билеты, — используем Present Continuous: I'm seeing the GP on Friday.",
        examples: [
          { en: "I'm seeing the GP on Friday morning.", ru: "В пятницу утром я иду к врачу." },
          { en: "We're flying to Riga on Monday.", ru: "В понедельник мы летим в Ригу." },
          { en: "What are you doing tonight?", ru: "Что ты делаешь сегодня вечером?" }
        ]
      }
    ],
    tip: {
      en: "Don't use the Present Simple for your plans: I'll call you later (not «I call you later»), I'm going to the dentist tomorrow (not «Tomorrow I go to dentist»). And never put to after will: I will go (not «I will to go»).",
      ru: "Не используй Present Simple для планов, как в русском «завтра иду»: I'll call you later (а не I call you later), I'm going to the dentist tomorrow (а не Tomorrow I go to dentist). И после will не нужно to: I will go, а не I will to go."
    },
    exercises: [
      { type: "choice", q: "The phone's ringing. — OK, ___ answer it!", options: ["I'll", "I'm going to", "I"], answer: "I'll",
        explain: "A decision made at the moment of speaking: will.",
        explainRu: "Решение принято прямо сейчас — используем will ('ll)." },
      { type: "choice", q: "Look at those dark clouds! It ___ rain.", options: ["is going to", "will to", "rains"], answer: "is going to",
        explain: "We can see the evidence now, so going to.",
        explainRu: "Признаки видны прямо сейчас — поэтому going to." },
      { type: "choice", q: "Which sentence is best for a fixed arrangement?",
        options: ["I'm meeting Sarah at 6 tomorrow.", "I meet Sarah at 6 tomorrow.", "I will meeting Sarah at 6 tomorrow."],
        answer: "I'm meeting Sarah at 6 tomorrow.",
        explain: "Fixed arrangements use the Present Continuous.",
        explainRu: "Для договорённостей с точным временем используем Present Continuous." },
      { type: "gap", q: "We ___ going to paint the kitchen this weekend. (be)", answer: ["are"],
        explain: "We + are + going to.",
        explainRu: "We + are + going to." },
      { type: "gap", q: "Don't worry, I ___ tell anyone. (will / not)", answer: ["won't", "will not"],
        explain: "A promise in the negative: won't.",
        explainRu: "Обещание с отрицанием: won't (will not)." },
      { type: "order", ru: "Я позвоню тебе позже.", answer: "I'll call you later.",
        explain: "A promise or offer: will + base form.",
        explainRu: "Обещание: will + начальная форма глагола." },
      { type: "order", ru: "Что ты собираешься делать этим летом?", answer: "What are you going to do this summer?",
        explain: "Question word + are + you + going to + verb.",
        explainRu: "Вопросительное слово + are + you + going to + глагол." },
      { type: "translate", ru: "Завтра я иду к стоматологу.",
        options: ["I'm going to the dentist tomorrow.", "Tomorrow I go to dentist.", "I will going to the dentist tomorrow.", "I go to the dentist tomorrow."],
        answer: "I'm going to the dentist tomorrow.",
        explain: "An appointment is an arrangement, so we use the Present Continuous.",
        explainRu: "Запись к врачу — это договорённость, поэтому Present Continuous." },
      { type: "listen", say: "I think it'll be sunny tomorrow.",
        options: ["I think it'll be sunny tomorrow.", "I think it's sunny tomorrow.", "I think it'd be sunny tomorrow."],
        answer: "I think it'll be sunny tomorrow.",
        explain: "An opinion about the future: I think + will.",
        explainRu: "Предположение о будущем: I think + will ('ll)." },
      { type: "match", q: "Match the situation with the example.", qRu: "Соедини ситуацию с примером.",
        pairs: [["A sudden decision", "I'll have the soup, please."], ["A plan", "I'm going to learn to drive."], ["A fixed arrangement", "I'm flying to Riga on Monday."], ["A promise", "I'll pay you back tomorrow."], ["Evidence now", "Careful! You're going to drop it."]],
        explain: "Will for decisions and promises, going to for plans and evidence, Present Continuous for arrangements.",
        explainRu: "Will — решения и обещания, going to — планы и явные признаки, Present Continuous — договорённости." }
    ]
  },

  // ───────────────────────── 6. Comparatives ─────────────────────────
  {
    id: "comparatives",
    level: 2,
    order: 6,
    emoji: "⚖️",
    title: "Comparatives and superlatives",
    titleRu: "Сравнительная и превосходная степень",
    intro: "Cheaper, more comfortable, the best — we compare things all the time: shops, prices, the weather. Here's how to do it in English.",
    introRu: "Дешевле, удобнее, самый лучший — мы постоянно что-то сравниваем: магазины, цены, погоду. Вот как это делать по-английски.",
    sections: [
      {
        title: "Short adjectives: -er, -est", titleRu: "Короткие прилагательные: -er, -est",
        text: "Add -er + than to compare two things, and the + -est for the top one. Spelling: big → bigger, nice → nicer, easy → easier.",
        textRu: "К коротким прилагательным добавляем -er (+ than — «чем») для сравнения и the + -est для превосходной степени («самый»). Написание: big → bigger (удвоение), nice → nicer, easy → easier (y → i).",
        table: { head: ["Adjective", "Comparative", "Superlative"], rows: [["cheap", "cheaper", "the cheapest"], ["big", "bigger", "the biggest"], ["nice", "nicer", "the nicest"], ["easy", "easier", "the easiest"]] },
        examples: [
          { en: "Aldi is cheaper than Waitrose.", ru: "«Алди» дешевле, чем «Уэйтроуз»." },
          { en: "My brother is taller than me.", ru: "Мой брат выше меня." },
          { en: "It's the hottest day of the year.", ru: "Сегодня самый жаркий день в году." }
        ]
      },
      {
        title: "Long adjectives: more, most", titleRu: "Длинные прилагательные: more, most",
        text: "With longer adjectives (two or more syllables, not ending in -y), use more and the most.",
        textRu: "С длинными прилагательными (обычно из двух и более слогов, кроме тех, что на -y) используем more («более») и the most («самый»). Окончание -er тогда не добавляем.",
        examples: [
          { en: "The train is more comfortable than the coach.", ru: "Поезд удобнее междугороднего автобуса." },
          { en: "This is the most expensive restaurant in town.", ru: "Это самый дорогой ресторан в городе." },
          { en: "English is more difficult than I thought.", ru: "Английский сложнее, чем я думала." }
        ]
      },
      {
        title: "Irregular forms and as … as", titleRu: "Исключения и as … as",
        text: "Good → better → the best, bad → worse → the worst, far → further → the furthest. Use as … as for equal things and not as … as for less.",
        textRu: "Исключения: good → better → the best, bad → worse → the worst, far → further → the furthest. As … as значит «такой же, как», а not as … as — «не такой, как».",
        table: { head: ["Adjective", "Comparative", "Superlative"], rows: [["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"]] },
        examples: [
          { en: "Her English is better than mine.", ru: "Её английский лучше, чем мой." },
          { en: "The weather is worse than yesterday.", ru: "Погода хуже, чем вчера." },
          { en: "Liverpool isn't as big as London.", ru: "Ливерпуль не такой большой, как Лондон." }
        ]
      }
    ],
    tip: {
      en: "Don't double the comparison: better (not «more better»), the cheapest (not «the most cheap»). And «чем» is than, not then or that.",
      ru: "Не сравнивай дважды: better, а не more better; the cheapest, а не the most cheap. И «чем» — это than, а не then (потом) и не that."
    },
    exercises: [
      { type: "choice", q: "London is ___ than Liverpool.", options: ["bigger", "more big", "biggest"], answer: "bigger",
        explain: "Big is short: bigger, with a double g.",
        explainRu: "Big — короткое прилагательное: bigger, с удвоенной g." },
      { type: "choice", q: "This is the ___ café in town.", options: ["best", "better", "most good"], answer: "best",
        explain: "The superlative of good is the best.",
        explainRu: "Превосходная степень от good — the best." },
      { type: "choice", q: "My cold is ___ today than yesterday.", options: ["worse", "badder", "more bad"], answer: "worse",
        explain: "Bad is irregular: worse.",
        explainRu: "Bad — исключение: worse (хуже)." },
      { type: "gap", q: "Aldi is ___ than Waitrose. (cheap)", answer: ["cheaper"],
        explain: "Short adjective + -er + than.",
        explainRu: "Короткое прилагательное + -er + than." },
      { type: "gap", q: "It's the ___ day of the year. (hot)", answer: ["hottest"],
        explain: "Hot doubles the t: the hottest.",
        explainRu: "Hot удваивает t: the hottest." },
      { type: "order", ru: "Мой брат выше меня.", answer: "My brother is taller than me.",
        explain: "Comparative + than: taller than me.",
        explainRu: "Сравнительная степень + than: taller than me." },
      { type: "order", ru: "Поезд не такой быстрый, как самолёт.", answer: "The train isn't as fast as the plane.",
        explain: "Not as + adjective + as.",
        explainRu: "Not as + прилагательное + as — «не такой…, как»." },
      { type: "translate", ru: "Сегодня теплее, чем вчера.",
        options: ["It's warmer today than yesterday.", "Today is more warm than yesterday.", "It's warmer today that yesterday.", "It's more warmer today than yesterday."],
        answer: "It's warmer today than yesterday.",
        explain: "Warm is short, so warmer + than.",
        explainRu: "Warm — короткое прилагательное, поэтому warmer + than." },
      { type: "listen", say: "This one is more expensive.",
        options: ["This one is more expensive.", "This one is the most expensive.", "This one is as expensive."],
        answer: "This one is more expensive.",
        explain: "More expensive compares two things.",
        explainRu: "More expensive — «дороже», сравнение двух предметов." },
      { type: "match", q: "Match the adjective with its comparative.", qRu: "Соедини прилагательное со сравнительной степенью.",
        pairs: [["good", "better"], ["bad", "worse"], ["far", "further"], ["happy", "happier"], ["thin", "thinner"]],
        explain: "Good, bad and far are irregular; happy and thin follow spelling rules.",
        explainRu: "Good, bad и far — исключения; happy и thin подчиняются правилам написания." }
    ]
  },

  // ───────────────────────── 7. Quantifiers ─────────────────────────
  {
    id: "quantifiers",
    level: 2,
    order: 7,
    emoji: "🛒",
    title: "Some, any, much, many, a few, a little",
    titleRu: "Some, any, much, many, a few, a little",
    intro: "How much bread? How many eggs? English divides nouns into countable and uncountable, and the words for quantity depend on it.",
    introRu: "How much bread? How many eggs? В английском существительные делятся на исчисляемые и неисчисляемые, и от этого зависят слова для количества.",
    sections: [
      {
        title: "Countable and uncountable", titleRu: "Исчисляемые и неисчисляемые",
        text: "Countable nouns have a plural (an egg, two eggs). Uncountable nouns have no plural and no a/an: advice, information, money, bread, water, news.",
        textRu: "Исчисляемые можно посчитать: an egg, two eggs. Неисчисляемые не имеют множественного числа и не употребляются с a/an: advice (совет/советы), information, money, bread, water, news. Глагол с ними — в единственном числе: The news is good.",
        table: { head: ["Countable", "Uncountable"], rows: [["an apple / apples", "bread"], ["a coin / coins", "money"], ["a tip / tips", "advice"], ["a fact / facts", "information"]] },
        examples: [
          { en: "Can I give you some advice?", ru: "Можно дать тебе совет?" },
          { en: "Money isn't everything.", ru: "Деньги — это ещё не всё." },
          { en: "I need some information about the course.", ru: "Мне нужна информация о курсе." }
        ]
      },
      {
        title: "some and any", titleRu: "some и any",
        text: "Use some in positive sentences and offers, and any in negatives and most questions.",
        textRu: "Some — в утвердительных предложениях и в просьбах/предложениях (Would you like some tea?). Any — в отрицаниях и в большинстве вопросов. Оба слова работают и с исчисляемыми, и с неисчисляемыми.",
        examples: [
          { en: "I bought some apples.", ru: "Я купила яблоки." },
          { en: "We haven't got any bread.", ru: "У нас нет хлеба." },
          { en: "Is there any milk left?", ru: "Молоко ещё осталось?" }
        ]
      },
      {
        title: "much, many, a lot of, a few, a little", titleRu: "much, many, a lot of, a few, a little",
        text: "Many and a few go with countable nouns; much and a little go with uncountable ones. A lot of goes with both.",
        textRu: "С исчисляемыми — many (много) и a few (несколько). С неисчисляемыми — much (много) и a little (немного). A lot of подходит для обоих. Much и many чаще встречаются в вопросах и отрицаниях: How much…? How many…?",
        table: { head: ["Countable", "Uncountable"], rows: [["many", "much"], ["a few", "a little"], ["a lot of", "a lot of"]] },
        examples: [
          { en: "How many children have you got?", ru: "Сколько у тебя детей?" },
          { en: "There isn't much traffic today.", ru: "Сегодня пробок немного." },
          { en: "I've got a few friends in Leeds.", ru: "У меня есть несколько друзей в Лидсе." },
          { en: "Can I have a little sugar?", ru: "Можно немного сахара?" }
        ]
      }
    ],
    tip: {
      en: "In Russian «советы» and «деньги» are plural, but advice and money are uncountable: some advice (not «advices»), How much money? (not «How many money?»). Also, no «a bread» — say some bread or a loaf of bread.",
      ru: "По-русски «советы» и «деньги» — множественное число, а в английском advice и money неисчисляемые: some advice (а не advices), How much money? (а не How many money?). То же с information: никаких informations. И не говори a bread — нужно some bread или a loaf of bread (буханка)."
    },
    exercises: [
      { type: "choice", q: "How ___ money have you got?", options: ["much", "many", "a few"], answer: "much",
        explain: "Money is uncountable, so how much.",
        explainRu: "Money — неисчисляемое, поэтому how much." },
      { type: "choice", q: "Can I give you some ___?", options: ["advice", "advices", "an advice"], answer: "advice",
        explain: "Advice is uncountable: no -s and no an.",
        explainRu: "Advice — неисчисляемое: без -s и без an." },
      { type: "choice", q: "There are ___ eggs in the fridge, so we can make an omelette.", options: ["a few", "a little", "much"], answer: "a few",
        explain: "Eggs are countable, so a few.",
        explainRu: "Eggs — исчисляемые, поэтому a few (несколько)." },
      { type: "gap", q: "Is there ___ milk left?", answer: ["any"],
        explain: "In questions we usually use any.",
        explainRu: "В вопросах обычно используем any." },
      { type: "gap", q: "We haven't got ___ time — hurry up!", answer: ["much", "any", "a lot of", "lots of"],
        explain: "Time is uncountable; in negatives we use much (or any).",
        explainRu: "Time здесь неисчисляемое; в отрицании используем much (или any)." },
      { type: "order", ru: "Мне нужно немного информации.", answer: "I need some information.",
        explain: "Information is uncountable: some information, no -s.",
        explainRu: "Information — неисчисляемое: some information, без -s." },
      { type: "order", ru: "Сколько у тебя детей?", answer: "How many children have you got?",
        explain: "Children are countable, so how many.",
        explainRu: "Children — исчисляемое, поэтому how many." },
      { type: "translate", ru: "Я купила хлеб и несколько яблок.",
        options: ["I bought some bread and a few apples.", "I bought a bread and a few apples.", "I bought some breads and a little apples.", "I bought some bread and a little apples."],
        answer: "I bought some bread and a few apples.",
        explain: "Bread is uncountable (some bread); apples are countable (a few apples).",
        explainRu: "Bread — неисчисляемое (some bread), apples — исчисляемое (a few apples)." },
      { type: "listen", say: "There isn't much traffic today.",
        options: ["There isn't much traffic today.", "There isn't many traffic today.", "There aren't many traffic today."],
        answer: "There isn't much traffic today.",
        explain: "Traffic is uncountable: there isn't much traffic.",
        explainRu: "Traffic — неисчисляемое: there isn't much traffic." },
      { type: "match", q: "Match the quantity with the noun.", qRu: "Соедини слово количества с существительным.",
        pairs: [["a piece of", "advice"], ["a cup of", "coffee"], ["a bar of", "soap"], ["a pint of", "beer"], ["a few", "apples"]],
        explain: "Uncountable nouns are counted with words like a piece of, a cup of or a bar of; a few goes with countable nouns.",
        explainRu: "Неисчисляемые существительные «считают» с помощью a piece of, a cup of, a bar of, а a few используется с исчисляемыми." }
    ]
  },

  // ───────────────────────── 8. Adverbs of frequency ─────────────────────────
  {
    id: "adverbs-frequency",
    level: 2,
    order: 8,
    emoji: "🔁",
    title: "Always, usually, often, never",
    titleRu: "Наречия частоты: always, usually, often, never",
    intro: "How often do you do things? Words like always and never are easy — the tricky part is where to put them in the sentence.",
    introRu: "Как часто ты что-то делаешь? Слова always и never выучить легко — сложнее понять, где их ставить в предложении.",
    sections: [
      {
        title: "From always to never", titleRu: "От always до never",
        text: "These adverbs show how often something happens.",
        textRu: "Эти наречия показывают, как часто что-то происходит — от «всегда» до «никогда».",
        table: { head: ["Adverb", "How often"], rows: [["always", "100%"], ["usually", "≈ 80%"], ["often", "≈ 60%"], ["sometimes", "≈ 40%"], ["rarely", "≈ 10%"], ["never", "0%"]] },
        examples: [
          { en: "I always have tea in the morning.", ru: "Утром я всегда пью чай." },
          { en: "We sometimes go to the pub on Fridays.", ru: "По пятницам мы иногда ходим в паб." },
          { en: "He never eats meat.", ru: "Он никогда не ест мясо." }
        ]
      },
      {
        title: "Word order", titleRu: "Порядок слов",
        text: "The adverb goes before the main verb but after be. With don't / doesn't, it goes after them.",
        textRu: "Наречие ставим перед основным глаголом, но после be (am/is/are/was/were). Если есть вспомогательный глагол (don't, doesn't, can), наречие идёт после него: I don't often…",
        table: { head: ["Rule", "Example"], rows: [["before main verb", "I often cook."], ["after be", "I'm often tired."], ["after don't", "I don't often cook."]] },
        examples: [
          { en: "She usually takes the bus to work.", ru: "Обычно она ездит на работу на автобусе." },
          { en: "The trains are often late.", ru: "Поезда часто опаздывают." },
          { en: "He doesn't usually work at weekends.", ru: "Обычно он не работает по выходным." }
        ]
      },
      {
        title: "How often…?", titleRu: "How often…?",
        text: "Ask with How often…? Answer with an adverb or a phrase like every day, once a week, twice a month — these go at the end.",
        textRu: "Спрашиваем How often…? («Как часто…?»). Отвечаем наречием или выражением every day, once a week (раз в неделю), twice a month (дважды в месяц) — такие выражения обычно ставим в конец предложения.",
        examples: [
          { en: "How often do you go to the gym? — Twice a week.", ru: "Как часто ты ходишь в спортзал? — Два раза в неделю." },
          { en: "I call my mum every day.", ru: "Я звоню маме каждый день." },
          { en: "We go shopping once a week.", ru: "Мы ходим за покупками раз в неделю." }
        ]
      }
    ],
    tip: {
      en: "Russian word order is free, English isn't: I always go to the gym on Monday (not «I go always»), I'm never late (not «I never am late»). And never is already negative: I never eat meat (not «I don't never eat»).",
      ru: "В русском порядок слов свободный, а в английском — нет: I always go to the gym on Monday (а не I go always), I'm never late (а не I never am late). И never уже содержит отрицание, второе не нужно: I never eat meat, а не I don't never eat meat."
    },
    exercises: [
      { type: "choice", q: "Which sentence is correct?",
        options: ["I usually get up at 7.", "I get up usually at 7.", "I get usually up at 7."],
        answer: "I usually get up at 7.",
        explain: "The adverb goes before the main verb.",
        explainRu: "Наречие частоты ставим перед основным глаголом." },
      { type: "choice", q: "She ___ late for work.", options: ["is never", "never is", "does never"], answer: "is never",
        explain: "With be, the adverb comes after it.",
        explainRu: "С глаголом be наречие стоит после него: is never." },
      { type: "choice", q: "___ do you go to the gym? — Twice a week.", options: ["How often", "How much", "How many"], answer: "How often",
        explain: "How often asks about frequency.",
        explainRu: "How often спрашивает о частоте: «Как часто?»" },
      { type: "gap", q: "He ___ often watch TV — he prefers books. (not)", answer: ["doesn't", "does not"],
        explain: "Doesn't + often + base form.",
        explainRu: "Doesn't + often + начальная форма глагола." },
      { type: "gap", q: "___ you always this busy on Mondays? (be)", answer: ["Are"],
        explain: "Questions with be: Are + you + always.",
        explainRu: "Вопрос с be: Are + you + always." },
      { type: "order", ru: "Я всегда пью чай утром.", answer: "I always drink tea in the morning.",
        explain: "Always goes before the main verb drink.",
        explainRu: "Always стоит перед основным глаголом drink." },
      { type: "order", ru: "Он никогда не опаздывает.", answer: "He is never late.",
        explain: "Never goes after is, and English needs only one negative.",
        explainRu: "Never стоит после is, а второе отрицание не нужно." },
      { type: "translate", ru: "Мы иногда ходим в паб по пятницам.",
        options: ["We sometimes go to the pub on Fridays.", "We go sometimes to the pub on Fridays.", "We are sometimes go to the pub on Fridays.", "We go to the pub sometimes on the Fridays."],
        answer: "We sometimes go to the pub on Fridays.",
        explain: "Sometimes goes before the main verb go.",
        explainRu: "Sometimes ставим перед основным глаголом go." },
      { type: "listen", say: "She doesn't usually drive to work.",
        options: ["She doesn't usually drive to work.", "She usually drives to work.", "She doesn't drive to work."],
        answer: "She doesn't usually drive to work.",
        explain: "Doesn't usually = not normally.",
        explainRu: "Doesn't usually — «обычно не…»." },
      { type: "match", q: "Match the adverb with how often it means.", qRu: "Соедини наречие с его частотой.",
        pairs: [["always", "100%"], ["usually", "about 80%"], ["often", "about 60%"], ["sometimes", "about 40%"], ["never", "0%"]],
        explain: "These adverbs go from 100% (always) to 0% (never).",
        explainRu: "Эти наречия идут от 100% (always) до 0% (never)." }
    ]
  }

]);
