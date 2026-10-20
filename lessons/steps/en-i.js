// Grammar steps — Level 5: question tags, indirect questions, phrasal verbs, have something done
window.LESSON_STEPS = Object.assign(window.LESSON_STEPS || {}, {

  "question-tags": [
    {
      id: "positive-sentence",
      title: "Positive sentence → negative tag",
      titleRu: "Утверждение → отрицательный хвостик",
      rule: "After a positive sentence, use a negative tag: the same auxiliary + n't + a pronoun. If the sentence has no auxiliary (Present or Past Simple), use don't / doesn't / didn't.",
      ruleRu: "После утвердительного предложения хвостик отрицательный: тот же вспомогательный глагол + n't + местоимение. Если вспомогательного глагола в предложении нет (Present или Past Simple), в хвостике появляется don't / doesn't / didn't.",
      table: {
        head: ["Sentence", "Tag"],
        rows: [
          ["She's tired,", "isn't she?"],
          ["They've left,", "haven't they?"],
          ["He can cook,", "can't he?"],
          ["You like tea,", "don't you?"],
          ["Anna rang,", "didn't she?"]
        ]
      },
      examples: [
        { en: "Your sister lives in Manchester, doesn't she?", ru: "Твоя сестра ведь живёт в Манчестере, да?" },
        { en: "The film was brilliant, wasn't it?", ru: "Фильм был отличный, правда?" },
        { en: "You'll be home by six, won't you?", ru: "Ты ведь будешь дома к шести?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "Your brother is a nurse, ___?",
          options: ["isn't he", "doesn't he", "isn't it", "wasn't he"],
          answer: "isn't he",
          explain: "Is becomes isn't, and your brother becomes he.",
          explainRu: "В предложении is — в хвостике isn't; your brother заменяем на he."
        },
        {
          type: "choice",
          q: "You like spicy food, ___?",
          options: ["don't you", "aren't you", "isn't it", "doesn't you"],
          answer: "don't you",
          explain: "Like is Present Simple with you, so the tag is don't you?",
          explainRu: "Like — Present Simple, подлежащее you, поэтому хвостик don't you?"
        },
        {
          type: "gap",
          q: "They've moved to Bristol, ___?",
          answer: ["haven't they", "have they not"],
          explain: "They've = they have, so the tag is haven't they?",
          explainRu: "They've = they have, поэтому хвостик haven't they?"
        },
        {
          type: "gap",
          q: "Kate passed her exam, ___?",
          answer: ["didn't she", "did she not"],
          explain: "Passed is Past Simple, so the tag uses didn't.",
          explainRu: "Passed — Past Simple, вспомогательного глагола нет, поэтому в хвостике didn't she?"
        },
        {
          type: "choice",
          q: "The shop will be closed on Sunday, ___?",
          options: ["won't it", "will it", "isn't it", "doesn't it"],
          answer: "won't it",
          explain: "Will becomes won't, and the shop becomes it.",
          explainRu: "В предложении will — в хвостике won't (= will not); the shop — это it."
        },
        {
          type: "fix",
          sentence: "Your mum works at the GP surgery, isn't she?",
          wrong: "isn't",
          options: ["doesn't", "don't", "wasn't"],
          answer: "doesn't",
          correct: "Your mum works at the GP surgery, doesn't she?",
          explain: "Works is Present Simple with she, so the tag is doesn't she?",
          explainRu: "Works — Present Simple, подлежащее she, поэтому хвостик doesn't she? Глагол be здесь ни при чём."
        },
        {
          type: "order",
          ru: "Ты ведь умеешь плавать, да?",
          answer: "You can swim, can't you?",
          explain: "Can in the sentence gives can't in the tag.",
          explainRu: "В предложении can — в хвостике can't."
        },
        {
          type: "listen",
          say: "Tom has finished his essay, hasn't he?",
          options: [
            "Tom has finished his essay, hasn't he?",
            "Tom has finished his essay, didn't he?",
            "Tom has finished his essay, isn't he?"
          ],
          answer: "Tom has finished his essay, hasn't he?",
          explain: "Has finished is Present Perfect, so the tag repeats has: hasn't he?",
          explainRu: "Has finished — Present Perfect, поэтому хвостик повторяет has: hasn't he?"
        },
        {
          type: "translate",
          ru: "Ты ведь вчера видела Машу, да?",
          options: [
            "You saw Masha yesterday, didn't you?",
            "You saw Masha yesterday, isn't it?",
            "You saw Masha yesterday, haven't you?",
            "You saw Masha yesterday, wasn't you?"
          ],
          answer: "You saw Masha yesterday, didn't you?",
          explain: "Saw is Past Simple, so the tag is didn't you?",
          explainRu: "Saw — Past Simple, поэтому хвостик didn't you? «Isn't it?» к такому предложению не подходит."
        },
        {
          type: "match",
          q: "Match the sentence with its tag.",
          qRu: "Соедини предложение с хвостиком.",
          pairs: [
            ["We were late,", "weren't we?"],
            ["Sam could help,", "couldn't he?"],
            ["You'd like a cup of tea,", "wouldn't you?"],
            ["Lucy drives to work,", "doesn't she?"],
            ["The kids went to bed,", "didn't they?"]
          ],
          explain: "Each tag copies the auxiliary (or uses do / does / did) and makes it negative.",
          explainRu: "Хвостик повторяет вспомогательный глагол (или берёт do / does / did) в отрицательной форме. You'd = you would."
        }
      ]
    },
    {
      id: "negative-sentence",
      title: "Negative sentence → positive tag",
      titleRu: "Отрицание → положительный хвостик",
      rule: "After a negative sentence, the tag is positive: the same auxiliary without n't + a pronoun. Never put a negative tag after a negative sentence.",
      ruleRu: "Если предложение отрицательное, хвостик положительный: тот же вспомогательный глагол, но уже без n't, + местоимение. Два отрицания подряд («You don't…, don't you?») — ошибка.",
      table: {
        head: ["Sentence", "Tag"],
        rows: [
          ["It isn't far,", "is it?"],
          ["You haven't eaten,", "have you?"],
          ["She won't mind,", "will she?"],
          ["They don't smoke,", "do they?"],
          ["He didn't call,", "did he?"]
        ]
      },
      examples: [
        { en: "You don't eat meat, do you?", ru: "Ты ведь не ешь мясо, да?" },
        { en: "The bus hasn't come yet, has it?", ru: "Автобус ещё не пришёл, да?" },
        { en: "We can't park here, can we?", ru: "Здесь ведь нельзя парковаться?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "You aren't busy now, ___?",
          options: ["are you", "aren't you", "do you", "is it"],
          answer: "are you",
          explain: "Aren't in the sentence becomes are in the tag.",
          explainRu: "Предложение отрицательное (aren't), поэтому хвостик положительный — are you?"
        },
        {
          type: "choice",
          q: "Your parents don't live in London, ___?",
          options: ["do they", "don't they", "are they", "does they"],
          answer: "do they",
          explain: "Don't becomes do, and your parents becomes they.",
          explainRu: "В предложении don't — в хвостике do; your parents заменяем на they."
        },
        {
          type: "gap",
          q: "It wasn't your fault, ___?",
          answer: ["was it"],
          explain: "Wasn't becomes was: was it?",
          explainRu: "Wasn't в предложении — was в хвостике: was it?"
        },
        {
          type: "gap",
          q: "Dan hasn't paid the rent yet, ___?",
          answer: ["has he"],
          explain: "Hasn't becomes has, and Dan becomes he.",
          explainRu: "Hasn't → has, Dan → he: has he?"
        },
        {
          type: "fix",
          sentence: "You don't work on Saturdays, are you?",
          wrong: "are",
          options: ["do", "does", "don't"],
          answer: "do",
          correct: "You don't work on Saturdays, do you?",
          explain: "The sentence uses don't, so the tag uses do — positive.",
          explainRu: "В предложении don't, значит в хвостике do — и уже без отрицания."
        },
        {
          type: "fix",
          sentence: "Mark doesn't like football, is he?",
          wrong: "is",
          options: ["does", "doesn't", "do"],
          answer: "does",
          correct: "Mark doesn't like football, does he?",
          explain: "Doesn't in the sentence gives does in the tag.",
          explainRu: "В предложении doesn't — в хвостике does he? Отрицание второй раз не повторяем."
        },
        {
          type: "order",
          ru: "Ты ведь не устала, да?",
          answer: "You aren't tired, are you?",
          explain: "A negative sentence takes a positive tag: are you?",
          explainRu: "Отрицательное предложение — положительный хвостик: are you?"
        },
        {
          type: "translate",
          ru: "Ты ведь ещё не видела этот фильм?",
          options: [
            "You haven't seen this film yet, have you?",
            "You haven't seen this film yet, haven't you?",
            "You haven't seen this film yet, did you?",
            "You haven't seen this film yet, isn't it?"
          ],
          answer: "You haven't seen this film yet, have you?",
          explain: "Haven't seen is Present Perfect, so the tag is have you?",
          explainRu: "Haven't seen — Present Perfect с отрицанием, поэтому хвостик have you?"
        },
        {
          type: "sort",
          q: "Negative tag or positive tag?",
          qRu: "Какой нужен хвостик — отрицательный или положительный?",
          buckets: ["Negative tag (isn't it? / don't you?)", "Positive tag (is it? / do you?)"],
          items: [
            ["The soup is too salty,", 0],
            ["You don't need a bag,", 1],
            ["She's got two cats,", 0],
            ["They weren't at home,", 1],
            ["We can't stay long,", 1],
            ["Your flat has a garden,", 0]
          ],
          explain: "Positive sentence → negative tag; negative sentence → positive tag.",
          explainRu: "Утверждение → отрицательный хвостик, отрицание → положительный."
        },
        {
          type: "listen",
          say: "They didn't enjoy the trip, did they?",
          options: [
            "They didn't enjoy the trip, did they?",
            "They didn't enjoy the trip, didn't they?",
            "They didn't enjoy the trip, do they?"
          ],
          answer: "They didn't enjoy the trip, did they?",
          explain: "Didn't in the sentence gives did in the tag — same tense, no n't.",
          explainRu: "Didn't в предложении — did в хвостике: то же время, но без отрицания."
        }
      ]
    },
    {
      id: "special-tags",
      title: "Special tags: aren't I? shall we? will you?",
      titleRu: "Особые хвостики: aren't I? shall we? will you?",
      rule: "Learn these by heart: I'm… → aren't I?; Let's… → shall we?; an order or request → will you? (or could you?); Don't… → will you?; There is / are… → isn't / aren't there? Nobody, nothing and never make the sentence negative, so the tag is positive.",
      ruleRu: "Эти случаи надо просто запомнить: I'm… → aren't I? (формы «amn't I» нет); Let's… → shall we?; просьба или команда → will you? (или could you?); Don't… → will you?; There is / are… → isn't / aren't there? Слова nobody, nothing, never уже делают предложение отрицательным, поэтому хвостик положительный.",
      table: {
        head: ["Sentence", "Tag"],
        rows: [
          ["I'm right,", "aren't I?"],
          ["Let's go,", "shall we?"],
          ["Shut the door,", "will you?"],
          ["Don't be late,", "will you?"],
          ["There's a lift,", "isn't there?"],
          ["Nothing happened,", "did it?"]
        ]
      },
      examples: [
        { en: "I'm next in the queue, aren't I?", ru: "Я ведь следующая в очереди, да?" },
        { en: "Let's meet outside the cinema, shall we?", ru: "Давай встретимся у кинотеатра, хорошо?" },
        { en: "Don't tell Mum, will you?", ru: "Только не говори маме, ладно?" },
        { en: "Nobody saw us, did they?", ru: "Нас ведь никто не видел?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "I'm in your group for the project, ___?",
          options: ["aren't I", "amn't I", "isn't it", "don't I"],
          answer: "aren't I",
          explain: "I'm always takes the special tag aren't I?",
          explainRu: "После I'm всегда особый хвостик — aren't I?"
        },
        {
          type: "choice",
          q: "Let's order a pizza, ___?",
          options: ["shall we", "don't we", "let we", "aren't we"],
          answer: "shall we",
          explain: "Let's… is a suggestion, and its tag is shall we?",
          explainRu: "Let's… — это предложение что-то сделать вместе, хвостик у него shall we?"
        },
        {
          type: "gap",
          q: "Don't forget your umbrella, ___?",
          answer: ["will you"],
          explain: "A negative order (Don't…) takes will you?",
          explainRu: "После просьбы с Don't… используем хвостик will you?"
        },
        {
          type: "gap",
          q: "There aren't any eggs left, ___?",
          answer: ["are there"],
          explain: "There aren't takes the tag are there? — keep there, not it.",
          explainRu: "С there aren't хвостик are there? — there сохраняется, it не нужно."
        },
        {
          type: "fix",
          sentence: "I'm the oldest in the class, amn't I?",
          wrong: "amn't",
          options: ["aren't", "don't", "isn't"],
          answer: "aren't",
          correct: "I'm the oldest in the class, aren't I?",
          explain: "There's no amn't in standard English — say aren't I?",
          explainRu: "Формы amn't в стандартном английском нет — говорим aren't I?"
        },
        {
          type: "fix",
          sentence: "Let's take the bus, don't we?",
          wrong: "don't",
          options: ["shall", "will", "do"],
          answer: "shall",
          correct: "Let's take the bus, shall we?",
          explain: "The tag for Let's… is always shall we?",
          explainRu: "У Let's… хвостик всегда shall we?"
        },
        {
          type: "order",
          ru: "Передай мне пульт, ладно?",
          answer: "Pass me the remote, will you?",
          explain: "A request (an imperative) takes will you?",
          explainRu: "Просьба в повелительном наклонении — хвостик will you?"
        },
        {
          type: "listen",
          say: "There's a chemist near here, isn't there?",
          options: [
            "There's a chemist near here, isn't there?",
            "There's a chemist near here, isn't it?",
            "There's a chemist near here, is there?"
          ],
          answer: "There's a chemist near here, isn't there?",
          explain: "There is takes isn't there? — the word there comes back in the tag.",
          explainRu: "С there is хвостик isn't there? — слово there повторяется."
        },
        {
          type: "sort",
          q: "Which tag does each sentence need?",
          qRu: "Какой хвостик нужен каждому предложению?",
          buckets: ["shall we?", "will you?", "aren't I?"],
          items: [
            ["Let's have a break,", 0],
            ["Let's ask the teacher,", 0],
            ["Turn the music down,", 1],
            ["Don't touch the oven,", 1],
            ["I'm late again,", 2],
            ["I'm on the list,", 2]
          ],
          explain: "Let's → shall we?, orders and requests → will you?, I'm → aren't I?",
          explainRu: "Let's → shall we?, просьбы и команды → will you?, I'm → aren't I?"
        },
        {
          type: "translate",
          ru: "Никто ведь не заметил?",
          options: [
            "Nobody noticed, did they?",
            "Nobody noticed, didn't they?",
            "Nobody noticed, isn't it?",
            "Nobody noticed, didn't it?"
          ],
          answer: "Nobody noticed, did they?",
          explain: "Nobody makes the sentence negative, so the tag is positive, and we use they.",
          explainRu: "Nobody уже делает предложение отрицательным, поэтому хвостик положительный; после nobody ставим they."
        }
      ]
    }
  ],

  "indirect-questions": [
    {
      id: "wh-word-order",
      title: "Could you tell me where… + statement order",
      titleRu: "Could you tell me where… + прямой порядок",
      rule: "After Do you know…? or Could you tell me…?, keep the question word but use statement order: subject + verb. Drop do / does / did and put the verb in the right form (opens, went).",
      ruleRu: "После Do you know…? или Could you tell me…? вопросительное слово остаётся, но дальше порядок как в утверждении: подлежащее + сказуемое. Do / does / did убираем, а глагол ставим в нужную форму (opens, went).",
      table: {
        head: ["Direct", "Indirect"],
        rows: [
          ["Where is the gym?", "…where the gym is?"],
          ["When does it close?", "…when it closes?"],
          ["What did he want?", "…what he wanted?"],
          ["How long will it take?", "…how long it will take?"]
        ]
      },
      examples: [
        { en: "Could you tell me where the library is?", ru: "Не подскажете, где библиотека?" },
        { en: "Do you know when the next train leaves?", ru: "Вы не знаете, когда отходит следующий поезд?" },
        { en: "Can you tell me what he said?", ru: "Можешь сказать, что он сказал?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "Could you tell me where ___?",
          options: ["the lifts are", "are the lifts", "do the lifts are"],
          answer: "the lifts are",
          explain: "Subject first, then the verb: the lifts are.",
          explainRu: "Сначала подлежащее, потом глагол: the lifts are."
        },
        {
          type: "choice",
          q: "Do you know when ___?",
          options: ["the parcel will arrive", "will the parcel arrive", "does the parcel arrive"],
          answer: "the parcel will arrive",
          explain: "Will goes after the subject in an indirect question.",
          explainRu: "В косвенном вопросе will стоит после подлежащего: the parcel will arrive."
        },
        {
          type: "gap",
          q: "Could you tell me what time the museum ___ on Sundays? (open)",
          answer: ["opens"],
          explain: "No does, so the verb itself takes -s: opens.",
          explainRu: "Does нет, поэтому окончание -s получает сам глагол: opens."
        },
        {
          type: "gap",
          q: "Can you tell me what Mr Patel ___ in the meeting yesterday? (say)",
          answer: ["said"],
          explain: "No did, so the verb goes into the past: said.",
          explainRu: "Did убираем, поэтому глагол сам стоит в прошедшем времени: said."
        },
        {
          type: "fix",
          sentence: "Do you know what time the shop close?",
          wrong: "close",
          options: ["closes", "closing", "to close"],
          answer: "closes",
          correct: "Do you know what time the shop closes?",
          explain: "Without does, the verb needs -s after the shop.",
          explainRu: "Does мы убрали, поэтому глагол сам получает -s: the shop closes."
        },
        {
          type: "fix",
          sentence: "Can you tell me where she go yesterday?",
          wrong: "go",
          options: ["went", "goes", "going"],
          answer: "went",
          correct: "Can you tell me where she went yesterday?",
          explain: "Without did, the verb itself must be in the past: went.",
          explainRu: "Без did глагол сам ставится в прошедшее время: went."
        },
        {
          type: "order",
          ru: "Не подскажете, где аптека?",
          answer: "Could you tell me where the chemist is?",
          explain: "Is goes at the end, after the chemist.",
          explainRu: "Is стоит в конце, после подлежащего the chemist."
        },
        {
          type: "order",
          ru: "Ты не знаешь, во сколько начинается фильм?",
          answer: "Do you know what time the film starts?",
          explain: "Statement order, no does, and -s on starts.",
          explainRu: "Прямой порядок слов, без does, и окончание -s: the film starts."
        },
        {
          type: "translate",
          ru: "Ты не знаешь, куда Оля положила ключи?",
          options: [
            "Do you know where Olya put the keys?",
            "Do you know where did Olya put the keys?",
            "Do you know where put Olya the keys?",
            "Do you know where Olya did put the keys?"
          ],
          answer: "Do you know where Olya put the keys?",
          explain: "No did, and the subject Olya comes before the verb put.",
          explainRu: "Did не нужен, подлежащее Olya стоит перед глаголом put."
        },
        {
          type: "match",
          q: "Match the direct question with the polite version.",
          qRu: "Соедини прямой вопрос с вежливым.",
          pairs: [
            ["Where is the car park?", "Could you tell me where the car park is?"],
            ["What time does the café open?", "Do you know what time the café opens?"],
            ["Why did they leave?", "Do you know why they left?"],
            ["How long will it take?", "Could you tell me how long it will take?"]
          ],
          explain: "In the polite version: statement order, and do / does / did disappear.",
          explainRu: "В вежливом вопросе прямой порядок слов, а do / does / did исчезают."
        }
      ]
    },
    {
      id: "if-whether",
      title: "Yes/no questions: if / whether",
      titleRu: "Вопросы «да/нет»: if / whether",
      rule: "If the direct question has no question word (a yes/no question), add if or whether. After it, use statement order.",
      ruleRu: "Если в прямом вопросе нет вопросительного слова (это вопрос «да или нет»), добавляем if или whether — как русское «ли». После них — прямой порядок слов.",
      table: {
        head: ["Direct", "Indirect"],
        rows: [
          ["Is she at home?", "…if she's at home?"],
          ["Does it rain a lot?", "…if it rains a lot?"],
          ["Did they win?", "…whether they won?"],
          ["Can I park here?", "…if I can park here?"]
        ]
      },
      examples: [
        { en: "Do you know if the library is open today?", ru: "Ты не знаешь, открыта ли сегодня библиотека?" },
        { en: "Could you tell me whether this train stops at Crewe?", ru: "Не подскажете, останавливается ли этот поезд в Кру?" },
        { en: "Can you check if they've sent the email?", ru: "Можешь проверить, отправили ли они письмо?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "Do you know ___ the bank is open on Saturdays?",
          options: ["if", "is", "what"],
          answer: "if",
          explain: "It's a yes/no question, so we need if.",
          explainRu: "Это вопрос «да/нет», поэтому нужен if («ли»)."
        },
        {
          type: "choice",
          q: "Excuse me, could you tell me ___?",
          options: ["if this seat is free", "is this seat free", "if is this seat free"],
          answer: "if this seat is free",
          explain: "If + statement order: this seat is free.",
          explainRu: "If, а после него прямой порядок: this seat is free."
        },
        {
          type: "gap",
          q: "I'd like to know ___ the course includes an exam.",
          answer: ["if", "whether"],
          explain: "A yes/no question inside a sentence needs if or whether.",
          explainRu: "Скрытый вопрос «да/нет» вводим словом if или whether."
        },
        {
          type: "gap",
          q: "Do you know if Ben ___ to the party last night? (go)",
          answer: ["went"],
          explain: "No did after if, so the verb goes into the past: went.",
          explainRu: "После if did не нужен, глагол сам в прошедшем времени: went."
        },
        {
          type: "fix",
          sentence: "Do you know if the pharmacy sell paracetamol?",
          wrong: "sell",
          options: ["sells", "selling", "to sell"],
          answer: "sells",
          correct: "Do you know if the pharmacy sells paracetamol?",
          explain: "Statement order with the pharmacy (it), so the verb takes -s.",
          explainRu: "Прямой порядок, подлежащее the pharmacy (= it), поэтому глагол с -s: sells."
        },
        {
          type: "fix",
          sentence: "Could you tell me what this bus goes to Liverpool?",
          wrong: "what",
          options: ["if", "where", "that"],
          answer: "if",
          correct: "Could you tell me if this bus goes to Liverpool?",
          explain: "The direct question is Does this bus go to Liverpool? — yes/no, so use if.",
          explainRu: "Прямой вопрос — Does this bus go to Liverpool? Это вопрос «да/нет», значит нужен if."
        },
        {
          type: "order",
          ru: "Вы не знаете, есть ли здесь вайфай?",
          answer: "Do you know if there's Wi-Fi here?",
          explain: "If + statement order: there's Wi-Fi.",
          explainRu: "If, а после него прямой порядок: there's Wi-Fi."
        },
        {
          type: "listen",
          say: "Could you tell me whether the 52 stops at the hospital?",
          options: [
            "Could you tell me whether the 52 stops at the hospital?",
            "Could you tell me does the 52 stop at the hospital?",
            "Could you tell me whether does the 52 stop at the hospital?"
          ],
          answer: "Could you tell me whether the 52 stops at the hospital?",
          explain: "Whether + statement order, and no does: the 52 stops.",
          explainRu: "Whether, прямой порядок и без does: the 52 stops."
        },
        {
          type: "sort",
          q: "Make each question polite. Do you keep a question word or add if?",
          qRu: "Сделай вопрос вежливым. Остаётся вопросительное слово или нужен if?",
          buckets: ["Keep the question word", "Add if / whether"],
          items: [
            ["Is the gym open?", 1],
            ["Where is the gym?", 0],
            ["Did she call?", 1],
            ["When did she call?", 0],
            ["Can I pay by card?", 1],
            ["How much is it?", 0]
          ],
          explain: "Questions with where / when / how keep that word; yes/no questions get if or whether.",
          explainRu: "Вопросы с where / when / how сохраняют это слово; вопросы «да/нет» получают if или whether."
        },
        {
          type: "translate",
          ru: "Ты не знаешь, понравился ли Саше подарок?",
          options: [
            "Do you know if Sasha liked the present?",
            "Do you know did Sasha like the present?",
            "Do you know if liked Sasha the present?",
            "Do you know if did Sasha like the present?"
          ],
          answer: "Do you know if Sasha liked the present?",
          explain: "«Ли» becomes if, then statement order in the past: Sasha liked.",
          explainRu: "«Ли» превращается в if, дальше прямой порядок и прошедшее время: Sasha liked."
        }
      ]
    },
    {
      id: "wonder-not-sure",
      title: "I wonder… / I'm not sure… / I've no idea…",
      titleRu: "I wonder… / I'm not sure… / I've no idea…",
      rule: "After I wonder…, I'm not sure…, I don't know… and I've no idea… we also use statement order (with if / whether for yes/no). These are statements, so they end with a full stop, not a question mark.",
      ruleRu: "После I wonder… (интересно…), I'm not sure… (не уверена…), I don't know… и I've no idea… (понятия не имею…) тоже прямой порядок слов, а для вопросов «да/нет» — if / whether. Это уже не вопросы, а утверждения, поэтому в конце ставим точку, а не вопросительный знак.",
      examples: [
        { en: "I wonder where Katya is.", ru: "Интересно, где Катя." },
        { en: "I'm not sure if I locked the door.", ru: "Я не уверена, закрыла ли я дверь." },
        { en: "I've no idea what time the party starts.", ru: "Понятия не имею, во сколько начинается вечеринка." },
        { en: "I was wondering if you could give me a lift.", ru: "Я хотела спросить, не могла бы ты меня подвезти." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I wonder ___.",
          options: ["why the bus is late", "why is the bus late", "why does the bus late"],
          answer: "why the bus is late",
          explain: "After I wonder, use statement order: the bus is late.",
          explainRu: "После I wonder — прямой порядок слов: the bus is late."
        },
        {
          type: "choice",
          q: "I'm not sure ___ I'll have time tomorrow.",
          options: ["if", "what", "do"],
          answer: "if",
          explain: "It's a yes/no idea (Will I have time?), so we need if.",
          explainRu: "Скрытый вопрос «да/нет» (Will I have time?), поэтому нужен if."
        },
        {
          type: "gap",
          q: "I've no idea where I ___ my glasses. (leave)",
          answer: ["left", "have left", "'ve left"],
          explain: "Statement order: I left (or I've left) — no did.",
          explainRu: "Прямой порядок: I left (или I've left), без did."
        },
        {
          type: "gap",
          q: "I was wondering ___ you'd like to come for dinner on Saturday.",
          answer: ["if", "whether"],
          explain: "A polite yes/no question after I was wondering needs if or whether.",
          explainRu: "Вежливый вопрос «да/нет» после I was wondering вводим словом if или whether."
        },
        {
          type: "fix",
          sentence: "I wonder what they're coming to the party tonight.",
          wrong: "what",
          options: ["if", "who", "which"],
          answer: "if",
          correct: "I wonder if they're coming to the party tonight.",
          explain: "The hidden question is Are they coming? — yes/no, so use if.",
          explainRu: "Скрытый вопрос — Are they coming? Это вопрос «да/нет», значит нужен if."
        },
        {
          type: "fix",
          sentence: "I don't know what he want for his birthday.",
          wrong: "want",
          options: ["wants", "wanting", "to want"],
          answer: "wants",
          correct: "I don't know what he wants for his birthday.",
          explain: "Statement order with he, so the verb takes -s: he wants.",
          explainRu: "Прямой порядок, подлежащее he, поэтому глагол с -s: he wants."
        },
        {
          type: "order",
          ru: "Интересно, почему она не позвонила.",
          answer: "I wonder why she didn't call.",
          explain: "Statement order after I wonder: she didn't call.",
          explainRu: "После I wonder прямой порядок: she didn't call."
        },
        {
          type: "translate",
          ru: "Я не уверена, подходит ли мне это платье.",
          options: [
            "I'm not sure if this dress suits me.",
            "I'm not sure does this dress suit me.",
            "I'm not sure if does this dress suit me.",
            "I'm not sure if this dress suit me."
          ],
          answer: "I'm not sure if this dress suits me.",
          explain: "If + statement order, and suits with -s for this dress.",
          explainRu: "If, прямой порядок и suits с окончанием -s (this dress = it)."
        },
        {
          type: "sort",
          q: "Question mark or full stop at the end?",
          qRu: "Что ставим в конце — вопросительный знак или точку?",
          buckets: ["?", "."],
          items: [
            ["Could you tell me where Room 12 is", 0],
            ["I wonder where Room 12 is", 1],
            ["Do you know if it's raining", 0],
            ["I'm not sure if it's raining", 1],
            ["I've no idea who she is", 1],
            ["Can you tell me who she is", 0]
          ],
          explain: "Do you know / Could you tell me are questions; I wonder / I'm not sure / I've no idea are statements.",
          explainRu: "Do you know / Could you tell me — это вопросы; I wonder / I'm not sure / I've no idea — утверждения, в конце точка."
        },
        {
          type: "match",
          q: "Match the Russian opening with the English one.",
          qRu: "Соедини русское начало фразы с английским.",
          pairs: [
            ["Интересно, …", "I wonder …"],
            ["Я не уверена, …", "I'm not sure …"],
            ["Понятия не имею, …", "I've no idea …"],
            ["Я хотела спросить, …", "I was wondering …"]
          ],
          explain: "All four openings are followed by statement order.",
          explainRu: "После всех четырёх начал — прямой порядок слов."
        }
      ]
    }
  ],

  "phrasal-verbs": [
    {
      id: "common-meanings",
      title: "Common phrasal verbs and their meanings",
      titleRu: "Самые нужные фразовые глаголы",
      rule: "A phrasal verb is a verb + a small word (up, off, out, after…). Together they have a new meaning, so learn them as one word: look after = take care of, find out = discover, give up = stop, put off = postpone.",
      ruleRu: "Фразовый глагол — это глагол + маленькое слово (up, off, out, after…). Вместе у них новое значение, поэтому учи их целиком, как одно слово: look after — присматривать, find out — узнать, give up — бросить, put off — откладывать.",
      table: {
        head: ["Phrasal verb", "Meaning"],
        rows: [
          ["look after", "присматривать"],
          ["find out", "узнать"],
          ["give up", "бросить"],
          ["put off", "откладывать"],
          ["get on with", "ладить с"],
          ["run out of", "закончиться"]
        ]
      },
      examples: [
        { en: "My neighbour looks after our cat when we're away.", ru: "Соседка присматривает за нашим котом, когда нас нет." },
        { en: "Dad gave up smoking last year.", ru: "Папа бросил курить в прошлом году." },
        { en: "I keep putting off my driving test.", ru: "Я всё откладываю экзамен по вождению." },
        { en: "Can you find out when the meeting is?", ru: "Можешь узнать, когда собрание?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "I can't come out tonight — I'm ___ my little brother while Mum's at work.",
          options: ["looking after", "looking for", "looking at"],
          answer: "looking after",
          explain: "Look after means take care of.",
          explainRu: "Look after — присматривать; look for — искать; look at — смотреть на."
        },
        {
          type: "choice",
          q: "I've ___ coffee — I sleep much better now.",
          options: ["given up", "given out", "given back"],
          answer: "given up",
          explain: "Give up means stop doing or having something.",
          explainRu: "Give up — бросить, отказаться от чего-то; give back — вернуть."
        },
        {
          type: "gap",
          q: "We've run out ___ bread. Can you get some on the way home?",
          answer: ["of"],
          explain: "Before a noun, the verb is run out of.",
          explainRu: "Перед существительным нужен весь глагол: run out of bread."
        },
        {
          type: "gap",
          q: "Don't put ___ your essay until the last minute — start it today!",
          answer: ["off"],
          explain: "Put off means postpone.",
          explainRu: "Put off — откладывать на потом."
        },
        {
          type: "fix",
          sentence: "I need to find up what time the shop closes.",
          wrong: "up",
          options: ["out", "off", "after"],
          answer: "out",
          correct: "I need to find out what time the shop closes.",
          explain: "Find out means discover information.",
          explainRu: "Узнать, выяснить — find out."
        },
        {
          type: "fix",
          sentence: "Do you get on to your manager?",
          wrong: "to",
          options: ["with", "for", "at"],
          answer: "with",
          correct: "Do you get on with your manager?",
          explain: "Get on with someone means have a good relationship with them.",
          explainRu: "Ладить с кем-то — get on with (а не «to»)."
        },
        {
          type: "order",
          ru: "Мы откладываем отпуск до сентября.",
          answer: "We're putting off our holiday until September.",
          alt: ["We're putting our holiday off until September."],
          explain: "Put off = postpone; with a noun, both orders are fine.",
          explainRu: "Put off — откладывать; с существительным годятся оба порядка."
        },
        {
          type: "translate",
          ru: "У меня закончились деньги.",
          options: [
            "I've run out of money.",
            "I've run out money.",
            "My money has run out of.",
            "I've finished out of money."
          ],
          answer: "I've run out of money.",
          explain: "Run out of + the thing you have none of.",
          explainRu: "Run out of + то, что закончилось. Of перед существительным обязателен."
        },
        {
          type: "match",
          q: "Match the phrasal verb with its Russian meaning.",
          qRu: "Соедини фразовый глагол с его русским значением.",
          pairs: [
            ["look after", "присматривать"],
            ["find out", "узнать"],
            ["give up", "бросить"],
            ["put off", "отложить"],
            ["get on with", "ладить с"]
          ],
          explain: "Learn each phrasal verb as one word with its own meaning.",
          explainRu: "Учи каждый фразовый глагол как отдельное слово со своим значением."
        },
        {
          type: "listen",
          say: "Who's going to look after the baby?",
          options: [
            "Who's going to look after the baby?",
            "Who's going to look for the baby?",
            "Who's going to look at the baby?"
          ],
          answer: "Who's going to look after the baby?",
          explain: "Listen for after: look after = take care of.",
          explainRu: "Прислушайся к after: look after — присматривать, заботиться."
        }
      ]
    },
    {
      id: "separable",
      title: "Separable verbs: turn it off",
      titleRu: "Разделяемые глаголы: turn it off",
      rule: "Many phrasal verbs are separable. A noun can go after the small word or in the middle: pick up the kids / pick the kids up. A pronoun (it, them, her, me…) must go in the middle: pick them up, never pick up them.",
      ruleRu: "Многие фразовые глаголы разделяемые. Существительное может стоять после частицы или посередине: pick up the kids / pick the kids up. А местоимение (it, them, her, me…) — только посередине: pick them up, но никогда не pick up them.",
      table: {
        head: ["", "Example"],
        rows: [
          ["✓ noun", "pick up the kids"],
          ["✓ noun", "pick the kids up"],
          ["✓ pronoun", "pick them up"],
          ["✗ pronoun", "pick up them"]
        ]
      },
      examples: [
        { en: "Can you pick me up from the station?", ru: "Можешь забрать меня со станции?" },
        { en: "Please fill in this form. — OK, I'll fill it in now.", ru: "Заполните, пожалуйста, эту анкету. — Хорошо, сейчас заполню." },
        { en: "These shoes hurt — I'm taking them off.", ru: "Эти туфли жмут — я их сниму." }
      ],
      exercises: [
        {
          type: "choice",
          q: "Your coat is soaking wet. Take ___.",
          options: ["it off", "off it", "it"],
          answer: "it off",
          explain: "The pronoun it goes between take and off.",
          explainRu: "Местоимение it стоит между take и off."
        },
        {
          type: "choice",
          q: "Which sentence is wrong?",
          options: ["Throw away the rubbish.", "Throw the rubbish away.", "Throw it away.", "Throw away it."],
          answer: "Throw away it.",
          explain: "A pronoun can't go after away — it must be in the middle.",
          explainRu: "Местоимение не может стоять после away — только посередине: throw it away."
        },
        {
          type: "gap",
          q: "That's my charger! Give ___ back, please.",
          answer: ["it"],
          explain: "The pronoun goes between give and back.",
          explainRu: "Местоимение стоит между give и back: give it back."
        },
        {
          type: "gap",
          q: "The kids are finally asleep. Don't wake ___ up!",
          answer: ["them"],
          explain: "The pronoun them goes between wake and up.",
          explainRu: "Местоимение them стоит между wake и up."
        },
        {
          type: "fix",
          sentence: "Mum will pick we up after school.",
          wrong: "we",
          options: ["us", "our", "ours"],
          answer: "us",
          correct: "Mum will pick us up after school.",
          explain: "In the middle of a phrasal verb we need an object pronoun: us.",
          explainRu: "Посередине фразового глагола нужно местоимение-дополнение: us, а не we."
        },
        {
          type: "fix",
          sentence: "These jeans are too long, so I'll take it back to the shop.",
          wrong: "it",
          options: ["them", "they", "its"],
          answer: "them",
          correct: "These jeans are too long, so I'll take them back to the shop.",
          explain: "Jeans is plural, so the pronoun in the middle is them.",
          explainRu: "Jeans — множественное число, поэтому посередине ставим them."
        },
        {
          type: "order",
          ru: "Я заберу тебя в семь.",
          answer: "I'll pick you up at seven.",
          explain: "The pronoun you goes between pick and up.",
          explainRu: "Местоимение you стоит между pick и up."
        },
        {
          type: "order",
          ru: "Я выбросила свою старую куртку.",
          answer: "I threw away my old jacket.",
          alt: ["I threw my old jacket away."],
          explain: "With a noun, both orders are correct.",
          explainRu: "С существительным правильны оба варианта: threw away my old jacket и threw my old jacket away."
        },
        {
          type: "sort",
          q: "Correct or wrong?",
          qRu: "Правильно или с ошибкой?",
          buckets: ["Correct", "Wrong"],
          items: [
            ["turn it down", 0],
            ["turn down it", 1],
            ["put the music on", 0],
            ["put on the music", 0],
            ["give back them", 1],
            ["give them back", 0],
            ["pick up her", 1],
            ["switch it off", 0]
          ],
          explain: "Nouns can go in either place; pronouns go only in the middle.",
          explainRu: "Существительное может стоять в обоих местах, а местоимение — только посередине."
        },
        {
          type: "translate",
          ru: "Сделай погромче — это моя любимая песня!",
          options: [
            "Turn it up — it's my favourite song!",
            "Turn up it — it's my favourite song!",
            "Turn it down — it's my favourite song!",
            "Up turn it — it's my favourite song!"
          ],
          answer: "Turn it up — it's my favourite song!",
          explain: "Turn up = louder, and it goes in the middle.",
          explainRu: "Turn up — громче (down — тише), а it стоит посередине."
        }
      ]
    },
    {
      id: "three-part",
      title: "Three-part verbs: look forward to, run out of",
      titleRu: "Глаголы из трёх слов: look forward to, run out of",
      rule: "Three-part phrasal verbs (look forward to, get on with, run out of, put up with, come up with) never separate: the object — even a pronoun — goes at the end. After look forward to, use a noun or -ing.",
      ruleRu: "Фразовые глаголы из трёх слов (look forward to, get on with, run out of, put up with, come up with) не разделяются: дополнение — даже местоимение — стоит в конце. После look forward to нужно существительное или глагол с -ing.",
      table: {
        head: ["Phrasal verb", "Meaning"],
        rows: [
          ["look forward to", "ждать с нетерпением"],
          ["get on with", "ладить с"],
          ["run out of", "закончиться"],
          ["put up with", "терпеть"],
          ["come up with", "придумать"]
        ]
      },
      examples: [
        { en: "I'm looking forward to the summer holidays.", ru: "Я жду не дождусь летних каникул." },
        { en: "I'm looking forward to seeing you.", ru: "С нетерпением жду встречи с тобой." },
        { en: "I can't put up with the noise any more.", ru: "Я больше не могу терпеть этот шум." },
        { en: "Sugar? Sorry, we've run out of it.", ru: "Сахар? Извини, он у нас закончился." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I really ___ my new colleagues — they're lovely.",
          options: ["get on with", "get on", "get with on"],
          answer: "get on with",
          explain: "All three words stay together, and the people come at the end.",
          explainRu: "Все три слова идут вместе, а люди, с которыми ладишь, — в конце."
        },
        {
          type: "choice",
          q: "I'm looking forward ___ you on Saturday.",
          options: ["to seeing", "to see", "seeing"],
          answer: "to seeing",
          explain: "To here is a preposition, so the verb takes -ing.",
          explainRu: "To здесь — предлог, поэтому после него глагол с -ing: to seeing."
        },
        {
          type: "gap",
          q: "Our neighbours are so noisy — I don't know how you put up ___ them.",
          answer: ["with"],
          explain: "Put up with means tolerate, and the object goes at the end.",
          explainRu: "Put up with — терпеть; дополнение them стоит в конце."
        },
        {
          type: "gap",
          q: "We need a name for the café. Can you come up ___ something?",
          answer: ["with"],
          explain: "Come up with means think of an idea.",
          explainRu: "Come up with — придумать (идею, название)."
        },
        {
          type: "fix",
          sentence: "I'm looking forward to meet your parents.",
          wrong: "meet",
          options: ["meeting", "met", "meets"],
          answer: "meeting",
          correct: "I'm looking forward to meeting your parents.",
          explain: "After look forward to, use -ing.",
          explainRu: "После look forward to глагол всегда с -ing: meeting."
        },
        {
          type: "fix",
          sentence: "The car has run out from petrol.",
          wrong: "from",
          options: ["of", "off", "with"],
          answer: "of",
          correct: "The car has run out of petrol.",
          explain: "The verb is run out of.",
          explainRu: "Правильный глагол — run out of."
        },
        {
          type: "order",
          ru: "Я с нетерпением жду выходных.",
          answer: "I'm looking forward to the weekend.",
          explain: "Look forward to + noun: the weekend goes at the end.",
          explainRu: "Look forward to + существительное: the weekend стоит в конце."
        },
        {
          type: "translate",
          ru: "Я больше не могу это терпеть!",
          options: [
            "I can't put up with it any more!",
            "I can't put it up with any more!",
            "I can't put up it with any more!",
            "I can't put with it up any more!"
          ],
          answer: "I can't put up with it any more!",
          explain: "Three-part verbs never split, so it goes after with.",
          explainRu: "Глаголы из трёх слов не разделяются, поэтому it стоит после with."
        },
        {
          type: "listen",
          say: "Sorry, we've run out of them.",
          options: [
            "Sorry, we've run out of them.",
            "Sorry, we've run them out of.",
            "Sorry, we've run out them."
          ],
          answer: "Sorry, we've run out of them.",
          explain: "Run out of stays together, and them comes at the end.",
          explainRu: "Run out of не разделяется, them стоит в конце."
        },
        {
          type: "sort",
          q: "Where does the pronoun go?",
          qRu: "Где стоит местоимение?",
          buckets: ["In the middle (turn it off)", "At the end (look after it)"],
          items: [
            ["turn off + it", 0],
            ["look after + her", 1],
            ["put on + them", 0],
            ["get on with + him", 1],
            ["pick up + me", 0],
            ["run out of + it", 1],
            ["look forward to + it", 1],
            ["give back + it", 0]
          ],
          explain: "Separable verbs put the pronoun in the middle; look after and three-part verbs put it at the end.",
          explainRu: "У разделяемых глаголов местоимение посередине; у look after и глаголов из трёх слов — в конце."
        }
      ]
    }
  ],

  "have-something-done": [
    {
      id: "form",
      title: "have + object + past participle",
      titleRu: "have + предмет + причастие",
      rule: "When someone else does a job for you, use have + object + past participle: I had my hair cut. The object comes before the participle, and only have changes for the tense.",
      ruleRu: "Когда работу за тебя делает кто-то другой, используем have + предмет + причастие (третья форма глагола): I had my hair cut. Предмет стоит перед причастием, а время показывает только have.",
      table: {
        head: ["have", "object", "participle"],
        rows: [
          ["I have", "my hair", "cut"],
          ["She has", "her nails", "done"],
          ["We had", "the flat", "painted"]
        ]
      },
      examples: [
        { en: "I have my hair cut every two months.", ru: "Я стригусь (в парикмахерской) раз в два месяца." },
        { en: "We had the carpets cleaned last week.", ru: "На прошлой неделе нам почистили ковры." },
        { en: "She has her eyebrows done at a salon in town.", ru: "Она делает брови в салоне в центре." }
      ],
      exercises: [
        {
          type: "choice",
          q: "We ___ last month — it looks like a new flat!",
          options: ["had the kitchen painted", "had painted the kitchen", "painted had the kitchen"],
          answer: "had the kitchen painted",
          explain: "Had + object + participle: had the kitchen painted.",
          explainRu: "Had + предмет + причастие: had the kitchen painted. «Had painted the kitchen» — это Past Perfect."
        },
        {
          type: "choice",
          q: "She ___ her nails done every Friday.",
          options: ["has", "have", "is"],
          answer: "has",
          explain: "Present Simple with she: has + her nails + done.",
          explainRu: "Present Simple, подлежащее she: has + her nails + done."
        },
        {
          type: "gap",
          q: "I had my CV ___ by a careers adviser. (check)",
          answer: ["checked"],
          explain: "After the object, use the past participle: checked.",
          explainRu: "После предмета ставим причастие: checked."
        },
        {
          type: "gap",
          q: "Tom ___ his bike repaired at the shop on the corner last week. (have)",
          answer: ["had", "got"],
          explain: "Last week → past: had his bike repaired.",
          explainRu: "Last week — прошлое, поэтому had his bike repaired."
        },
        {
          type: "fix",
          sentence: "I had my car wash at the garage.",
          wrong: "wash",
          options: ["washed", "washing", "to wash"],
          answer: "washed",
          correct: "I had my car washed at the garage.",
          explain: "After the object we need the past participle: washed.",
          explainRu: "После предмета нужно причастие: washed, а не начальная форма."
        },
        {
          type: "fix",
          sentence: "We had our photos took in a studio.",
          wrong: "took",
          options: ["taken", "take", "taking"],
          answer: "taken",
          correct: "We had our photos taken in a studio.",
          explain: "We need the past participle of take: taken, not took.",
          explainRu: "Нужна третья форма take — taken, а не вторая (took)."
        },
        {
          type: "order",
          ru: "В прошлом году нам покрасили дом.",
          answer: "We had the house painted last year.",
          alt: ["Last year we had the house painted."],
          explain: "Had + the house + painted: painters did the work.",
          explainRu: "Had + the house + painted: красили маляры, а не вы сами."
        },
        {
          type: "translate",
          ru: "Я хожу на маникюр раз в месяц.",
          options: [
            "I have my nails done once a month.",
            "I have done my nails once a month.",
            "I have my nails do once a month.",
            "I make my nails once a month."
          ],
          answer: "I have my nails done once a month.",
          explain: "Have + my nails + done: someone at a salon does them.",
          explainRu: "Have + my nails + done: ногти делает мастер в салоне."
        },
        {
          type: "listen",
          say: "She had her ears pierced when she was ten.",
          options: [
            "She had her ears pierced when she was ten.",
            "She had pierced her ears when she was ten.",
            "She pierced her ears when she was ten."
          ],
          answer: "She had her ears pierced when she was ten.",
          explain: "Listen for the order: had, her ears, then pierced.",
          explainRu: "Прислушайся к порядку: had, потом her ears, и только потом pierced."
        },
        {
          type: "choice",
          q: "They ___ a new boiler fitted in March.",
          options: ["had", "have", "has had"],
          answer: "had",
          explain: "In March is finished past time, so we use had.",
          explainRu: "In March — законченное прошлое, поэтому had."
        }
      ]
    },
    {
      id: "get-and-tenses",
      title: "get something done + other tenses",
      titleRu: "get something done и другие времена",
      rule: "Get + object + past participle means the same as have, but sounds more informal. Both work in any tense: I'm getting my car fixed, we're going to have the roof repaired, I'll get it checked.",
      ruleRu: "Get + предмет + причастие значит то же, что have, но звучит разговорнее. Обе конструкции работают в любом времени: I'm getting my car fixed (мне сейчас чинят машину), we're going to have the roof repaired, I'll get it checked.",
      table: {
        head: ["Form", "Example"],
        rows: [
          ["is / are getting", "She's getting her coat cleaned."],
          ["going to", "We're going to have the roof repaired."],
          ["will", "I'll get it checked."],
          ["need to", "You need to get your eyes tested."]
        ]
      },
      examples: [
        { en: "I'm getting my car fixed this week, so I'm taking the bus.", ru: "На этой неделе мне чинят машину, так что я езжу на автобусе." },
        { en: "We're going to have a new shower put in.", ru: "Нам будут ставить новый душ." },
        { en: "I'll get the documents translated.", ru: "Я отдам документы на перевод." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I can't give you a lift this week — I'm ___.",
          options: ["getting my car repaired", "getting repaired my car", "getting my car repair"],
          answer: "getting my car repaired",
          explain: "Getting + object + participle: getting my car repaired.",
          explainRu: "Getting + предмет + причастие: getting my car repaired."
        },
        {
          type: "choice",
          q: "We're going to ___ the bathroom tiled next month.",
          options: ["have", "having", "had"],
          answer: "have",
          explain: "After going to, use the base form: have.",
          explainRu: "После going to — начальная форма: have."
        },
        {
          type: "gap",
          q: "I'm getting my eyes ___ on Thursday. (test)",
          answer: ["tested"],
          explain: "After the object, use the past participle: tested.",
          explainRu: "После предмета — причастие: tested."
        },
        {
          type: "gap",
          q: "Next week we're ___ a new fence put up. (get)",
          answer: ["getting"],
          explain: "Present Continuous for a plan: we're getting.",
          explainRu: "Present Continuous для договорённости: we're getting."
        },
        {
          type: "fix",
          sentence: "I'm going to get my phone screen replace tomorrow.",
          wrong: "replace",
          options: ["replaced", "replacing", "to replace"],
          answer: "replaced",
          correct: "I'm going to get my phone screen replaced tomorrow.",
          explain: "The tense is in get; the main verb is always the past participle.",
          explainRu: "Время показывает get, а основной глагол всегда в форме причастия: replaced."
        },
        {
          type: "fix",
          sentence: "She's getting her wedding dress make by her aunt.",
          wrong: "make",
          options: ["made", "making", "to make"],
          answer: "made",
          correct: "She's getting her wedding dress made by her aunt.",
          explain: "The past participle of make is made.",
          explainRu: "Причастие от make — made."
        },
        {
          type: "order",
          ru: "В следующем месяце нам будут менять окна.",
          answer: "We're getting the windows replaced next month.",
          alt: ["Next month we're getting the windows replaced."],
          explain: "Getting + the windows + replaced: workers will do it.",
          explainRu: "Getting + the windows + replaced: менять будут рабочие."
        },
        {
          type: "translate",
          ru: "Мне надо отдать ноутбук в ремонт.",
          options: [
            "I need to get my laptop repaired.",
            "I need to repair my laptop.",
            "I need to get repaired my laptop.",
            "I need to get my laptop repair."
          ],
          answer: "I need to get my laptop repaired.",
          explain: "Someone else will repair it: get + my laptop + repaired.",
          explainRu: "Чинить будет мастер: get + my laptop + repaired. «I need to repair my laptop» — починить самой."
        },
        {
          type: "listen",
          say: "She's going to get her hair coloured.",
          options: [
            "She's going to get her hair coloured.",
            "She's going to colour her hair.",
            "She's going to get coloured her hair."
          ],
          answer: "She's going to get her hair coloured.",
          explain: "Listen for get, then her hair, then coloured at the end.",
          explainRu: "Прислушайся: get, потом her hair и в конце coloured."
        },
        {
          type: "sort",
          q: "Which form is used?",
          qRu: "Какая форма использована?",
          buckets: ["Present Continuous", "Future (going to / will)", "Past Simple"],
          items: [
            ["I'm getting my bike fixed.", 0],
            ["We had the flat cleaned.", 2],
            ["I'll get the papers signed.", 1],
            ["She's going to have her teeth checked.", 1],
            ["They got the roof repaired.", 2],
            ["He's having his suit altered.", 0]
          ],
          explain: "Only have / get changes; the participle stays the same.",
          explainRu: "Меняется только have / get, а причастие остаётся тем же."
        }
      ]
    },
    {
      id: "questions-negatives",
      title: "Questions, negatives and “I did it myself”",
      titleRu: "Вопросы, отрицания и «я сделала сама»",
      rule: "Have is a normal verb here, so questions and negatives use do / does / did: Did you have it checked? I don't get my nails done. Compare: I had my hair cut (a hairdresser did it) and I cut my hair (I did it myself).",
      ruleRu: "Have здесь — обычный глагол, поэтому в вопросах и отрицаниях нужны do / does / did: Did you have it checked? I don't get my nails done. Сравни: I had my hair cut — меня подстригли; I cut my hair — я подстригла себя сама.",
      table: {
        head: ["Someone else did it", "I did it myself"],
        rows: [
          ["I had my hair cut.", "I cut my hair."],
          ["I got my bike fixed.", "I fixed my bike."],
          ["We had the room painted.", "We painted the room."]
        ]
      },
      examples: [
        { en: "Did you get your passport photo taken at the post office?", ru: "Ты фотографировалась на паспорт на почте?" },
        { en: "We didn't have the oven fixed — Dad did it himself.", ru: "Мы не вызывали мастера чинить духовку — папа починил её сам." },
        { en: "How often do you have your hair cut?", ru: "Как часто ты стрижёшься?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "___ you have your eyes tested last year?",
          options: ["Did", "Had", "Have"],
          answer: "Did",
          explain: "Past Simple question: Did you have…?",
          explainRu: "Вопрос в Past Simple: Did you have…?"
        },
        {
          type: "choice",
          q: "I ___ my hair dyed — this is my natural colour!",
          options: ["don't have", "haven't", "am not"],
          answer: "don't have",
          explain: "Present Simple negative with have: don't have.",
          explainRu: "Отрицание в Present Simple: don't have my hair dyed."
        },
        {
          type: "gap",
          q: "We ___ have the boiler checked last winter, and now it's broken. (not / do)",
          answer: ["didn't", "did not"],
          explain: "Past negative: didn't have + object + participle.",
          explainRu: "Отрицание в прошлом: didn't have + предмет + причастие."
        },
        {
          type: "gap",
          q: "Did you ___ the dress shortened, or did you do it yourself? (have)",
          answer: ["have", "get"],
          explain: "After did, use the base form: have (or get).",
          explainRu: "После did — начальная форма: have (или get)."
        },
        {
          type: "fix",
          sentence: "Did you had your phone screen fixed?",
          wrong: "had",
          options: ["have", "has", "having"],
          answer: "have",
          correct: "Did you have your phone screen fixed?",
          explain: "After did, the verb is always in the base form: have.",
          explainRu: "После did глагол всегда в начальной форме: have, а не had."
        },
        {
          type: "fix",
          sentence: "I did my hair cut at the hairdresser's on Saturday.",
          wrong: "did",
          options: ["had", "made", "was"],
          answer: "had",
          correct: "I had my hair cut at the hairdresser's on Saturday.",
          explain: "The structure is have + object + participle: had my hair cut.",
          explainRu: "Конструкция — have + предмет + причастие: had my hair cut. Ни do, ни make здесь не подходят."
        },
        {
          type: "order",
          ru: "Ты отдавала куртку в химчистку?",
          answer: "Did you get your jacket dry-cleaned?",
          explain: "Did + you + get + object + participle.",
          explainRu: "Did + you + get + предмет + причастие."
        },
        {
          type: "sort",
          q: "Who did the job?",
          qRu: "Кто сделал работу?",
          buckets: ["Someone else", "I did it myself"],
          items: [
            ["I had my nails painted.", 0],
            ["I painted my nails.", 1],
            ["I got the shelves put up.", 0],
            ["I put the shelves up.", 1],
            ["I had the car washed.", 0],
            ["I washed the car.", 1]
          ],
          explain: "Have / get + object + participle = someone else did it; a normal verb = you did it.",
          explainRu: "Have / get + предмет + причастие — сделал кто-то другой; обычный глагол — сделала ты сама."
        },
        {
          type: "translate",
          ru: "Я подстригла себя сама.",
          options: [
            "I cut my hair myself.",
            "I had my hair cut myself.",
            "I had cut my hair myself.",
            "I got my hair cut myself."
          ],
          answer: "I cut my hair myself.",
          explain: "You did it yourself, so use the normal verb: I cut my hair.",
          explainRu: "Ты сделала это сама, поэтому нужен обычный глагол: I cut my hair."
        },
        {
          type: "listen",
          say: "We didn't have the walls painted — we did it ourselves.",
          options: [
            "We didn't have the walls painted — we did it ourselves.",
            "We didn't have painted the walls — we did it ourselves.",
            "We hadn't the walls painted — we did it ourselves."
          ],
          answer: "We didn't have the walls painted — we did it ourselves.",
          explain: "Didn't have + the walls + painted: no painter came.",
          explainRu: "Didn't have + the walls + painted: маляра не звали, красили сами."
        }
      ]
    }
  ]
});
