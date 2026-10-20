// Grammar steps: third-conditional, gerund-infinitive, used-to, modals-deduction (level 4)
window.LESSON_STEPS = Object.assign(window.LESSON_STEPS || {}, {

  "third-conditional": [
    {
      id: "form",
      title: "If + had done, would have done",
      titleRu: "If + had done, would have done",
      rule: "To imagine a different past, use If + had + participle in one part and would have + participle in the other. In speech, had and would both become 'd.",
      ruleRu: "Чтобы представить другое прошлое, в части с if ставим had + причастие (третья форма), а в главной части — would have + причастие. В разговоре и had, и would сокращаются до 'd.",
      table: {
        head: ["If part", "Result part"],
        rows: [
          ["If I had seen it,", "I would have bought it."],
          ["If you'd called,", "I'd have answered."]
        ]
      },
      examples: [
        { en: "If you had told me, I would have helped.", ru: "Если бы ты мне сказала, я бы помогла." },
        { en: "If we had taken the bus, we would have got there faster.", ru: "Если бы мы поехали на автобусе, мы бы добрались быстрее." },
        { en: "If I'd seen the sign, I'd have parked somewhere else.", ru: "Если бы я увидела знак, я бы припарковалась в другом месте." }
      ],
      exercises: [
        {
          type: "choice",
          q: "If you had told me about the party, I ___ a cake.",
          options: ["would bake", "would have baked", "had baked"],
          answer: "would have baked",
          explain: "The result part of the third conditional is would have + participle.",
          explainRu: "В главной части третьего типа — would have + причастие: would have baked."
        },
        {
          type: "choice",
          q: "If we ___ the tickets online, we would have saved ten pounds.",
          options: ["bought", "had bought", "would have bought"],
          answer: "had bought",
          explain: "The if part uses had + participle, never would.",
          explainRu: "В части с if — had + причастие. Would туда никогда не ставим."
        },
        {
          type: "choice",
          q: "If Sam had checked the weather, he ___ a coat.",
          options: ["would have brought", "would brought", "would have bring"],
          answer: "would have brought",
          explain: "After would have we need the participle: brought.",
          explainRu: "После would have нужна третья форма глагола: bring — brought — brought."
        },
        {
          type: "gap",
          q: "If she ___ the early bus, she would have arrived on time. (catch)",
          answer: ["had caught"],
          explain: "If + had + participle: had caught.",
          explainRu: "В части с if — had + причастие: catch — caught — caught."
        },
        {
          type: "gap",
          q: "If I had known it was your birthday, I ___ you a card. (send)",
          answer: ["would have sent", "would've sent"],
          explain: "Would have + participle in the result part.",
          explainRu: "В главной части — would have + причастие: would have sent."
        },
        {
          type: "order",
          ru: "Если бы ты пришла, ты бы её увидела.",
          answer: "If you had come, you would have seen her.",
          explain: "Had come in the if part, would have seen in the result.",
          explainRu: "В части с if — had come, в главной — would have seen."
        },
        {
          type: "fix",
          sentence: "If you had came earlier, you would have met my sister.",
          wrong: "came",
          options: ["come", "coming", "comes"],
          answer: "come",
          correct: "If you had come earlier, you would have met my sister.",
          explain: "After had we need the participle: come, not came.",
          explainRu: "После had нужна третья форма: come — came — come. Значит, had come."
        },
        {
          type: "fix",
          sentence: "If they had asked, I would has helped them.",
          wrong: "has",
          options: ["have", "had", "having"],
          answer: "have",
          correct: "If they had asked, I would have helped them.",
          explain: "After would we always use have, never has or had.",
          explainRu: "После would всегда идёт have — не has и не had, даже с he / she."
        },
        {
          type: "translate",
          ru: "Если бы я вчера поставила будильник, я бы успела на поезд.",
          options: [
            "If I set an alarm yesterday, I would catch the train.",
            "If I had set an alarm yesterday, I would have caught the train.",
            "If I would have set an alarm yesterday, I would have caught the train.",
            "If I had set an alarm yesterday, I had caught the train."
          ],
          answer: "If I had set an alarm yesterday, I would have caught the train.",
          explain: "Yesterday means the past: had set in the if part, would have caught in the result.",
          explainRu: "«Вчера» — значит прошлое: в части с if — had set, в главной — would have caught."
        },
        {
          type: "sort",
          q: "Which part of the sentence does it go in?",
          qRu: "В какую часть предложения это идёт?",
          buckets: ["If part", "Result part"],
          items: [["had missed", 0], ["would have gone", 1], ["had remembered", 0], ["would have enjoyed", 1], ["had driven", 0], ["would have won", 1]],
          explain: "Had + participle goes after if; would have + participle goes in the result.",
          explainRu: "Had + причастие — в часть с if, would have + причастие — в главную часть."
        }
      ]
    },
    {
      id: "neg-questions",
      title: "Negatives and questions",
      titleRu: "Отрицания и вопросы",
      rule: "Negatives: hadn't + participle in the if part, wouldn't have + participle in the result. Questions: Would you have…? or What would you have done if…?",
      ruleRu: "Отрицание: в части с if — hadn't + причастие, в главной — wouldn't have + причастие. Вопрос: would ставим перед подлежащим — Would you have…? What would you have done if…?",
      table: {
        head: ["Form", "Example"],
        rows: [
          ["−", "If I hadn't…, I wouldn't have…"],
          ["?", "Would you have…if…?"],
          ["Wh-?", "What would you have done if…?"]
        ]
      },
      examples: [
        { en: "If I hadn't overslept, I wouldn't have missed the meeting.", ru: "Если бы я не проспала, я бы не пропустила собрание." },
        { en: "Would you have come if I had asked you?", ru: "Ты бы пришла, если бы я тебя попросила?" },
        { en: "What would you have done if the shop had been closed?", ru: "Что бы ты сделала, если бы магазин был закрыт?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "If he ___ so fast, the police wouldn't have stopped him.",
          options: ["didn't drive", "hadn't driven", "wouldn't have driven"],
          answer: "hadn't driven",
          explain: "The negative if part is hadn't + participle.",
          explainRu: "Отрицание в части с if — hadn't + причастие: hadn't driven."
        },
        {
          type: "choice",
          q: "If you had locked your bike, nobody ___ it.",
          options: ["would steal", "wouldn't have stolen", "would have stolen"],
          answer: "would have stolen",
          explain: "Nobody is already negative, so the verb stays positive: would have stolen.",
          explainRu: "Nobody уже отрицательное слово, поэтому глагол остаётся утвердительным: nobody would have stolen. Двойного отрицания в английском нет."
        },
        {
          type: "choice",
          q: "What ___ if you had lost your passport?",
          options: ["would you do", "would you have done", "had you done"],
          answer: "would you have done",
          explain: "A question about an imaginary past: What would you have done…?",
          explainRu: "Вопрос о воображаемом прошлом: What would you have done…? Would стоит перед подлежащим."
        },
        {
          type: "gap",
          q: "If we hadn't taken a taxi, we ___ on time. (not / arrive)",
          answer: ["wouldn't have arrived", "would not have arrived"],
          explain: "The negative result is wouldn't have + participle.",
          explainRu: "Отрицание в главной части — wouldn't have + причастие."
        },
        {
          type: "gap",
          q: "If it ___ so cold, we would have stayed in the park longer. (not / be)",
          answer: ["hadn't been", "had not been"],
          explain: "The negative if part: hadn't been.",
          explainRu: "Отрицание в части с if: hadn't been (be — was — been)."
        },
        {
          type: "gap",
          q: "Would you ___ to the party if Anna had invited you? (go)",
          answer: ["have gone"],
          explain: "In the question, have + participle comes after the subject: Would you have gone…?",
          explainRu: "В вопросе после подлежащего идёт have + причастие: Would you have gone…?"
        },
        {
          type: "order",
          ru: "Если бы ты не позвонила, я бы проспала.",
          answer: "If you hadn't called, I would have overslept.",
          explain: "Hadn't called in the if part, would have overslept in the result.",
          explainRu: "В части с if — hadn't called, в главной — would have overslept."
        },
        {
          type: "order",
          ru: "Ты бы пришла, если бы знала?",
          answer: "Would you have come if you had known?",
          explain: "Questions start with Would + subject + have + participle.",
          explainRu: "Вопрос начинается с Would, потом подлежащее и have + причастие."
        },
        {
          type: "fix",
          sentence: "If you hadn't reminded me, I would have forget Mum's birthday.",
          wrong: "forget",
          options: ["forgotten", "forgot", "forgetting"],
          answer: "forgotten",
          correct: "If you hadn't reminded me, I would have forgotten Mum's birthday.",
          explain: "After would have we need the participle: forgotten.",
          explainRu: "После would have нужна третья форма: forget — forgot — forgotten."
        },
        {
          type: "translate",
          ru: "Если бы ты не пришла вчера на вечеринку, мы бы не познакомились.",
          options: [
            "If you didn't come to the party yesterday, we wouldn't meet.",
            "If you hadn't come to the party yesterday, we wouldn't have met.",
            "If you wouldn't have come to the party yesterday, we wouldn't have met.",
            "If you hadn't come to the party yesterday, we hadn't met."
          ],
          answer: "If you hadn't come to the party yesterday, we wouldn't have met.",
          explain: "Hadn't come in the if part, wouldn't have met in the result.",
          explainRu: "В части с if — hadn't come, в главной — wouldn't have met. Would в часть с if не ставим."
        }
      ]
    },
    {
      id: "wish-if-only",
      title: "I wish I had… / If only…",
      titleRu: "I wish I had… / If only…",
      rule: "For regrets about the past, use I wish or If only + had + participle. Careful: Russian «жаль, что не…» becomes a positive sentence in English.",
      ruleRu: "Для сожалений о прошлом используй I wish или If only + had + причастие. Осторожно: «жаль, что я не сделала» по-английски — утверждение (I wish I had done), а «жаль, что сделала» — отрицание (I wish I hadn't done).",
      table: {
        head: ["Russian", "English"],
        rows: [
          ["Жаль, что я не пошла.", "I wish I had gone."],
          ["Жаль, что я пошла.", "I wish I hadn't gone."]
        ]
      },
      examples: [
        { en: "I wish I had listened to my teacher.", ru: "Жаль, что я не слушала учителя." },
        { en: "I wish I hadn't said that.", ru: "Жаль, что я это сказала." },
        { en: "If only we had left five minutes earlier!", ru: "Вот если бы мы вышли на пять минут раньше!" }
      ],
      exercises: [
        {
          type: "choice",
          q: "I didn't go to the concert. I wish I ___.",
          options: ["went", "had gone", "would go"],
          answer: "had gone",
          explain: "A regret about the past: wish + had + participle.",
          explainRu: "Сожаление о прошлом: wish + had + причастие: had gone."
        },
        {
          type: "choice",
          q: "If only I ___ so much on clothes last month!",
          options: ["didn't spend", "hadn't spent", "wouldn't spend"],
          answer: "hadn't spent",
          explain: "If only + hadn't + participle for something you regret doing.",
          explainRu: "If only + hadn't + причастие — жалеешь о том, что сделала."
        },
        {
          type: "choice",
          q: "Which sentence means «Жаль, что я не сказала ему правду»?",
          options: ["I wish I had told him the truth.", "I wish I hadn't told him the truth.", "I wish I didn't tell him the truth."],
          answer: "I wish I had told him the truth.",
          explain: "You didn't tell him and you regret it, so the English sentence is positive.",
          explainRu: "Ты не сказала и жалеешь — значит, по-английски утверждение: I wish I had told."
        },
        {
          type: "gap",
          q: "I wish I ___ to the GP sooner. (go)",
          answer: ["had gone"],
          explain: "Wish + had + participle for a past regret.",
          explainRu: "Сожаление о прошлом: wish + had + причастие (go — went — gone)."
        },
        {
          type: "gap",
          q: "If only we ___ the train at Crewe! (not / miss)",
          answer: ["hadn't missed", "had not missed"],
          explain: "If only + hadn't + participle: you missed it and you regret it.",
          explainRu: "If only + hadn't + причастие: вы опоздали на поезд и жалеете об этом."
        },
        {
          type: "gap",
          q: "My brother wishes he ___ harder at school. (study)",
          answer: ["had studied"],
          explain: "Wishes changes with he, but the regret part is still had + participle.",
          explainRu: "Wish меняется (he wishes), но часть с сожалением та же: had studied."
        },
        {
          type: "order",
          ru: "Жаль, что я не взяла с собой куртку.",
          answer: "I wish I had brought a jacket.",
          explain: "Russian has «не», but the English is positive: I wish I had brought.",
          explainRu: "В русском есть «не», а в английском — утверждение: I wish I had brought."
        },
        {
          type: "order",
          ru: "Вот если бы я её послушала!",
          answer: "If only I had listened to her!",
          explain: "If only + had + participle expresses a strong regret.",
          explainRu: "If only + had + причастие — сильное сожаление: «вот если бы…»."
        },
        {
          type: "fix",
          sentence: "I wish I have saved more money last year.",
          wrong: "have",
          options: ["had", "has", "was"],
          answer: "had",
          correct: "I wish I had saved more money last year.",
          explain: "A past regret after wish needs had + participle.",
          explainRu: "Сожаление о прошлом после wish — had + причастие: I wish I had saved."
        },
        {
          type: "listen",
          say: "I wish I hadn't bought this coat.",
          options: ["I wish I hadn't bought this coat.", "I wish I didn't buy this coat.", "I wish I had bought this coat."],
          answer: "I wish I hadn't bought this coat.",
          explain: "Listen for hadn't: she bought it and regrets it.",
          explainRu: "Прислушайся к hadn't: она купила пальто и жалеет об этом."
        }
      ]
    }
  ],

  "gerund-infinitive": [
    {
      id: "verbs-ing",
      title: "Verbs + -ing",
      titleRu: "Глаголы + -ing",
      rule: "After enjoy, finish, mind, avoid, can't stand, keep and suggest, use the -ing form of the next verb.",
      ruleRu: "После enjoy, finish, mind, avoid, can't stand, keep и suggest второй глагол ставим в форму на -ing (герундий), а не в инфинитив, как в русском.",
      table: {
        head: ["Verb", "Example"],
        rows: [
          ["enjoy", "enjoy reading"],
          ["finish", "finish cooking"],
          ["mind", "mind waiting"],
          ["avoid", "avoid driving"],
          ["can't stand", "can't stand queuing"]
        ]
      },
      examples: [
        { en: "My mum enjoys baking at the weekend.", ru: "Моя мама любит печь по выходным." },
        { en: "I can't stand getting up in the dark.", ru: "Терпеть не могу вставать в темноте." },
        { en: "Have you finished doing your homework?", ru: "Ты закончила делать домашку?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "My grandma enjoys ___ for the whole family.",
          options: ["cook", "to cook", "cooking"],
          answer: "cooking",
          explain: "Enjoy is followed by the -ing form.",
          explainRu: "После enjoy — форма на -ing: enjoys cooking."
        },
        {
          type: "choice",
          q: "I can't stand ___ for the bus in the rain.",
          options: ["waiting", "wait", "waited"],
          answer: "waiting",
          explain: "Can't stand is followed by the -ing form.",
          explainRu: "После can't stand — форма на -ing: can't stand waiting."
        },
        {
          type: "choice",
          q: "I don't mind ___ at the weekend.",
          options: ["to work", "working", "work"],
          answer: "working",
          explain: "Mind is followed by the -ing form.",
          explainRu: "После mind — форма на -ing: don't mind working."
        },
        {
          type: "gap",
          q: "Have you finished ___ the dishes? (wash)",
          answer: ["washing"],
          explain: "Finish is followed by the -ing form.",
          explainRu: "После finish — форма на -ing: finished washing."
        },
        {
          type: "gap",
          q: "We always avoid ___ on the M62 at rush hour. (drive)",
          answer: ["driving"],
          explain: "Avoid is followed by the -ing form.",
          explainRu: "После avoid — форма на -ing. Обрати внимание: drive — driving (e исчезает)."
        },
        {
          type: "order",
          ru: "Ты не против подождать пять минут?",
          answer: "Do you mind waiting five minutes?",
          explain: "Mind + -ing: Do you mind waiting…?",
          explainRu: "После mind — -ing: Do you mind waiting…?"
        },
        {
          type: "fix",
          sentence: "I finished write my essay at midnight.",
          wrong: "write",
          options: ["writing", "to write", "wrote"],
          answer: "writing",
          correct: "I finished writing my essay at midnight.",
          explain: "Finish is followed by the -ing form: finished writing.",
          explainRu: "После finish — форма на -ing: finished writing."
        },
        {
          type: "fix",
          sentence: "Would you mind open the door for me?",
          wrong: "open",
          options: ["opening", "to open", "opened"],
          answer: "opening",
          correct: "Would you mind opening the door for me?",
          explain: "Would you mind is followed by the -ing form.",
          explainRu: "После Would you mind — форма на -ing: opening."
        },
        {
          type: "listen",
          say: "He keeps asking the same question.",
          options: ["He keeps asking the same question.", "He keeps to ask the same question.", "He keeps ask the same question."],
          answer: "He keeps asking the same question.",
          explain: "Keep is followed by the -ing form: keeps asking.",
          explainRu: "После keep — форма на -ing: keeps asking (всё время спрашивает)."
        },
        {
          type: "translate",
          ru: "Она предложила поехать на поезде.",
          options: ["She suggested to take the train.", "She suggested taking the train.", "She suggested take the train."],
          answer: "She suggested taking the train.",
          explain: "Suggest is followed by the -ing form, not to + verb.",
          explainRu: "После suggest — форма на -ing, хотя по-русски «предложила поехать» звучит с инфинитивом."
        }
      ]
    },
    {
      id: "verbs-to",
      title: "Verbs + to + verb",
      titleRu: "Глаголы + to + глагол",
      rule: "After want, decide, hope, plan, need, agree, promise, afford and would like, use to + verb.",
      ruleRu: "После want, decide, hope, plan, need, agree, promise, afford и would like ставим to + глагол (инфинитив) — здесь всё как в русском.",
      table: {
        head: ["Verb", "Example"],
        rows: [
          ["want", "want to leave"],
          ["decide", "decide to stay"],
          ["hope", "hope to win"],
          ["plan", "plan to move"],
          ["need", "need to rest"]
        ]
      },
      examples: [
        { en: "I want to learn to swim.", ru: "Я хочу научиться плавать." },
        { en: "We're planning to move to Leeds.", ru: "Мы планируем переехать в Лидс." },
        { en: "He promised to call me back.", ru: "Он пообещал мне перезвонить." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I want ___ a new phone.",
          options: ["buying", "to buy", "buy"],
          answer: "to buy",
          explain: "Want is followed by to + verb.",
          explainRu: "После want — to + глагол: want to buy."
        },
        {
          type: "choice",
          q: "We're planning ___ to Scotland in the summer.",
          options: ["to go", "going", "go"],
          answer: "to go",
          explain: "Plan is followed by to + verb.",
          explainRu: "После plan — to + глагол: planning to go."
        },
        {
          type: "gap",
          q: "Tom promised ___ me with my CV. (help)",
          answer: ["to help"],
          explain: "Promise is followed by to + verb.",
          explainRu: "После promise — to + глагол: promised to help."
        },
        {
          type: "gap",
          q: "I hope ___ my driving test next month. (pass)",
          answer: ["to pass"],
          explain: "Hope is followed by to + verb.",
          explainRu: "После hope — to + глагол: hope to pass."
        },
        {
          type: "gap",
          q: "You need ___ your passport before you travel. (renew)",
          answer: ["to renew"],
          explain: "Need is followed by to + verb.",
          explainRu: "После need — to + глагол: need to renew."
        },
        {
          type: "order",
          ru: "Я решила записаться в спортзал.",
          answer: "I decided to join a gym.",
          explain: "Decide is followed by to + verb.",
          explainRu: "После decide — to + глагол: decided to join."
        },
        {
          type: "fix",
          sentence: "She agreed meeting us at the station.",
          wrong: "meeting",
          options: ["to meet", "meet", "met"],
          answer: "to meet",
          correct: "She agreed to meet us at the station.",
          explain: "Agree is followed by to + verb, not -ing.",
          explainRu: "После agree — to + глагол, а не -ing: agreed to meet."
        },
        {
          type: "fix",
          sentence: "We can't afford buying a new car.",
          wrong: "buying",
          options: ["to buy", "buy", "bought"],
          answer: "to buy",
          correct: "We can't afford to buy a new car.",
          explain: "Afford is followed by to + verb.",
          explainRu: "После afford — to + глагол: can't afford to buy."
        },
        {
          type: "translate",
          ru: "Я хотела бы забронировать столик на двоих.",
          options: ["I'd like booking a table for two.", "I'd like to book a table for two.", "I'd like book a table for two.", "I like to book a table for two."],
          answer: "I'd like to book a table for two.",
          explain: "Would like ('d like) is followed by to + verb.",
          explainRu: "После would like ('d like) — to + глагол. «I like to book» значит «я люблю бронировать»."
        },
        {
          type: "sort",
          q: "-ing or to + verb?",
          qRu: "После какого глагола -ing, а после какого to + глагол?",
          buckets: ["+ -ing", "+ to + verb"],
          items: [["enjoy", 0], ["want", 1], ["finish", 0], ["decide", 1], ["avoid", 0], ["hope", 1], ["mind", 0], ["promise", 1]],
          explain: "Enjoy, finish, avoid and mind take -ing; want, decide, hope and promise take to + verb.",
          explainRu: "Enjoy, finish, avoid, mind — с -ing; want, decide, hope, promise — с to + глагол."
        }
      ]
    },
    {
      id: "meaning-prepositions",
      title: "stop, remember, forget, try + prepositions",
      titleRu: "stop, remember, forget, try + предлоги",
      rule: "Stop, remember, forget and try change meaning with -ing or to. After a preposition (at, in, of, look forward to) always use -ing.",
      ruleRu: "У stop, remember, forget и try смысл зависит от формы. Stop doing — перестать; stop to do — остановиться, чтобы. Remember / forget to do — не забыть / забыть сделать (дело впереди); remember doing, never forget doing — помнить то, что уже было. Try to do — стараться (трудно); try doing — попробовать как способ. После предлога (good at, interested in, look forward to) — всегда -ing.",
      table: {
        head: ["Form", "Meaning"],
        rows: [
          ["stop doing", "перестать"],
          ["stop to do", "остановиться, чтобы"],
          ["remember to do", "не забыть сделать"],
          ["remember doing", "помнить, что делала"],
          ["try doing", "попробовать (способ)"]
        ]
      },
      examples: [
        { en: "I remember meeting him at a wedding.", ru: "Я помню, как познакомилась с ним на свадьбе." },
        { en: "If you can't sleep, try reading a book.", ru: "Если не можешь уснуть, попробуй почитать книгу." },
        { en: "She's interested in learning Spanish.", ru: "Ей интересно учить испанский." }
      ],
      exercises: [
        {
          type: "choice",
          q: "On the motorway we stopped at a service station ___ something to eat.",
          options: ["to get", "getting", "get"],
          answer: "to get",
          explain: "Stop to do = stop in order to do something.",
          explainRu: "Stop to do — остановиться, чтобы что-то сделать. «Stopped getting» значило бы «перестали покупать»."
        },
        {
          type: "choice",
          q: "Please remember ___ the milk on your way home.",
          options: ["buying", "to buy", "buy"],
          answer: "to buy",
          explain: "Remember to do = don't forget a task.",
          explainRu: "Remember to do — не забыть сделать то, что нужно сделать."
        },
        {
          type: "choice",
          q: "Jess is really good at ___ old furniture.",
          options: ["fix", "fixing", "to fix"],
          answer: "fixing",
          explain: "After a preposition like at, use the -ing form.",
          explainRu: "После предлога (good at) — всегда форма на -ing."
        },
        {
          type: "gap",
          q: "My grandad stopped ___ when he was sixty. (smoke)",
          answer: ["smoking"],
          explain: "Stop doing = no longer do something.",
          explainRu: "Stop doing — перестать что-то делать: stopped smoking (бросил курить)."
        },
        {
          type: "gap",
          q: "I'll never forget ___ the sea for the first time. (see)",
          answer: ["seeing"],
          explain: "Never forget doing = a memory of something that happened.",
          explainRu: "Never forget doing — никогда не забуду то, что уже было: воспоминание."
        },
        {
          type: "match",
          q: "Match the English with the Russian meaning.",
          qRu: "Соедини английскую фразу с её значением.",
          pairs: [
            ["stop eating", "перестать есть"],
            ["stop to eat", "остановиться, чтобы поесть"],
            ["remember to post", "не забыть отправить"],
            ["remember posting", "помнить, что отправила"],
            ["try adding salt", "попробовать добавить соль"]
          ],
          explain: "With -ing and to + verb these verbs have different meanings.",
          explainRu: "С -ing и с to + глагол у этих глаголов разный смысл."
        },
        {
          type: "order",
          ru: "Я с нетерпением жду, когда поеду в отпуск.",
          answer: "I'm looking forward to going on holiday.",
          explain: "In look forward to, to is a preposition, so we use -ing.",
          explainRu: "В look forward to частица to — предлог, поэтому дальше -ing: going."
        },
        {
          type: "fix",
          sentence: "We're looking forward to meet your parents.",
          wrong: "meet",
          options: ["meeting", "met", "meets"],
          answer: "meeting",
          correct: "We're looking forward to meeting your parents.",
          explain: "Look forward to + -ing, because to is a preposition here.",
          explainRu: "Look forward to + -ing: здесь to — предлог, а не частица инфинитива."
        },
        {
          type: "fix",
          sentence: "Don't forget turning off the lights when you go out.",
          wrong: "turning",
          options: ["to turn", "turn", "turned"],
          answer: "to turn",
          correct: "Don't forget to turn off the lights when you go out.",
          explain: "Forget to do = forget a task, so use to + verb.",
          explainRu: "Это дело, которое нужно сделать, поэтому forget to do: Don't forget to turn off."
        },
        {
          type: "translate",
          ru: "Он остановился, чтобы завязать шнурки.",
          options: ["He stopped tying his shoelaces.", "He stopped to tie his shoelaces.", "He stopped tie his shoelaces."],
          answer: "He stopped to tie his shoelaces.",
          explain: "Stop to do = stop in order to do something.",
          explainRu: "Stop to do — остановиться, чтобы сделать. «Stopped tying» — перестал завязывать."
        }
      ]
    }
  ],

  "used-to": [
    {
      id: "used-to-positive",
      title: "used to + verb",
      titleRu: "used to + глагол",
      rule: "Used to + verb describes past habits and states that are not true now. It only exists in the past; for present habits use usually.",
      ruleRu: "Used to + глагол — это то, что было раньше (привычки и состояния), а сейчас уже нет. По-русски — «раньше…». Эта форма бывает только в прошедшем времени; о настоящем говорим usually.",
      examples: [
        { en: "I used to walk to school every day.", ru: "Раньше я каждый день ходила в школу пешком." },
        { en: "There used to be a cinema on this street.", ru: "Раньше на этой улице был кинотеатр." },
        { en: "My brother used to be very shy.", ru: "Раньше мой брат был очень стеснительным." }
      ],
      exercises: [
        {
          type: "choice",
          q: "When I was a child, I ___ climb trees.",
          options: ["used to", "use to", "am used to"],
          answer: "used to",
          explain: "A past habit that has stopped: used to + verb.",
          explainRu: "Привычка в прошлом, которой сейчас нет: used to + глагол."
        },
        {
          type: "choice",
          q: "We ___ live near the sea, but now we live in Manchester.",
          options: ["use to", "used to", "usually"],
          answer: "used to",
          explain: "It was true before but not now, so used to.",
          explainRu: "Раньше так было, а сейчас нет — значит, used to."
        },
        {
          type: "choice",
          q: "These days I ___ walk to college.",
          options: ["used to", "use to", "usually"],
          answer: "usually",
          explain: "For a present habit, use usually — used to is only for the past.",
          explainRu: "Для привычки в настоящем — usually. Used to бывает только о прошлом."
        },
        {
          type: "gap",
          q: "My dad ___ work in a factory. Now he's retired. (use to)",
          answer: ["used to"],
          explain: "Positive past form: used to, with -d.",
          explainRu: "В утвердительном предложении — used to, с -d на конце."
        },
        {
          type: "gap",
          q: "This café ___ be a bank. (use to)",
          answer: ["used to"],
          explain: "Used to also describes past states: it was a bank before.",
          explainRu: "Used to — и про состояния в прошлом: раньше здесь был банк."
        },
        {
          type: "order",
          ru: "Раньше у меня были длинные волосы.",
          answer: "I used to have long hair.",
          explain: "Used to + verb for a past state.",
          explainRu: "Used to + глагол — о том, что было раньше."
        },
        {
          type: "fix",
          sentence: "I use to play the piano when I was younger.",
          wrong: "use",
          options: ["used", "using", "uses"],
          answer: "used",
          correct: "I used to play the piano when I was younger.",
          explain: "In positive sentences it is always used to, with -d.",
          explainRu: "В утвердительном предложении всегда used to, с -d."
        },
        {
          type: "fix",
          sentence: "My grandma used to baking bread every Sunday.",
          wrong: "baking",
          options: ["bake", "baked", "bakes"],
          answer: "bake",
          correct: "My grandma used to bake bread every Sunday.",
          explain: "After used to we put the base verb: bake.",
          explainRu: "После used to — начальная форма глагола: bake, а не baking."
        },
        {
          type: "listen",
          say: "She used to work at Tesco.",
          options: ["She used to work at Tesco.", "She's used to working at Tesco.", "She uses to work at Tesco."],
          answer: "She used to work at Tesco.",
          explain: "Used to work = she worked there before.",
          explainRu: "Used to work — раньше она там работала, а сейчас нет."
        },
        {
          type: "translate",
          ru: "Раньше я пила много кофе.",
          options: ["I use to drink a lot of coffee.", "I used to drink a lot of coffee.", "I was used to drink a lot of coffee.", "I used to drinking a lot of coffee."],
          answer: "I used to drink a lot of coffee.",
          explain: "«Раньше» + past habit = used to + base verb.",
          explainRu: "«Раньше» о привычке — used to + начальная форма: used to drink."
        }
      ]
    },
    {
      id: "neg-questions",
      title: "didn't use to / Did you use to…?",
      titleRu: "didn't use to / Did you use to…?",
      rule: "Negative: didn't use to + verb. Question: Did you use to + verb? After did, write use without -d. Short answers: Yes, I did. / No, I didn't.",
      ruleRu: "Отрицание: didn't use to + глагол. Вопрос: Did you use to + глагол? После did пишем use без -d (прошедшее время уже есть в did). Краткие ответы: Yes, I did. / No, I didn't.",
      table: {
        head: ["Form", "Example"],
        rows: [
          ["+", "I used to smoke."],
          ["−", "I didn't use to smoke."],
          ["?", "Did you use to smoke?"]
        ]
      },
      examples: [
        { en: "I didn't use to like coffee.", ru: "Раньше я не любила кофе." },
        { en: "Did you use to play tennis?", ru: "Ты раньше играла в теннис?" },
        { en: "Where did you use to work?", ru: "Где ты раньше работала?" }
      ],
      exercises: [
        {
          type: "choice",
          q: "I ___ like spicy food, but now I love it.",
          options: ["didn't use to", "wasn't used to", "don't use to"],
          answer: "didn't use to",
          explain: "Negative past habit: didn't use to + verb.",
          explainRu: "Отрицание: didn't use to + глагол. «Don't use to» не бывает — used to только о прошлом."
        },
        {
          type: "choice",
          q: "___ you use to walk to school?",
          options: ["Did", "Were", "Do"],
          answer: "Did",
          explain: "Questions with used to start with Did.",
          explainRu: "Вопрос с used to начинается с Did."
        },
        {
          type: "choice",
          q: "— Did you use to have a pet? — Yes, I ___.",
          options: ["did", "used", "was"],
          answer: "did",
          explain: "The short answer repeats did: Yes, I did.",
          explainRu: "В кратком ответе повторяем did: Yes, I did."
        },
        {
          type: "gap",
          q: "We ___ go abroad much when I was little. (not / use to)",
          answer: ["didn't use to", "did not use to"],
          explain: "Negative: didn't use to, with use without -d.",
          explainRu: "Отрицание: didn't use to — после did пишем use без -d."
        },
        {
          type: "gap",
          q: "Where ___ you use to live before you came to the UK? (do)",
          answer: ["did"],
          explain: "Wh-question: Where did you use to…?",
          explainRu: "Вопрос с вопросительным словом: Where did you use to…?"
        },
        {
          type: "gap",
          q: "What did your mum ___ to cook for you? (use)",
          answer: ["use"],
          explain: "After did, use has no -d.",
          explainRu: "После did — use без -d: What did your mum use to cook?"
        },
        {
          type: "order",
          ru: "Ты раньше носила очки?",
          answer: "Did you use to wear glasses?",
          explain: "Question: Did + subject + use to + verb.",
          explainRu: "Вопрос: Did + подлежащее + use to + глагол."
        },
        {
          type: "fix",
          sentence: "Did you used to play football at school?",
          wrong: "used",
          options: ["use", "using", "uses"],
          answer: "use",
          correct: "Did you use to play football at school?",
          explain: "After did, write use without -d.",
          explainRu: "После did — use без -d: прошедшее время уже показывает did."
        },
        {
          type: "fix",
          sentence: "He doesn't use to eat meat when he was a student.",
          wrong: "doesn't",
          options: ["didn't", "wasn't", "isn't"],
          answer: "didn't",
          correct: "He didn't use to eat meat when he was a student.",
          explain: "Used to is only for the past, so the negative is didn't use to.",
          explainRu: "Used to бывает только в прошлом, поэтому отрицание — didn't use to."
        },
        {
          type: "translate",
          ru: "Раньше я не любила зиму.",
          options: ["I don't use to like winter.", "I didn't use to like winter.", "I wasn't used to like winter.", "I not used to like winter."],
          answer: "I didn't use to like winter.",
          explain: "Negative past habit: didn't use to + verb.",
          explainRu: "«Раньше не…» — didn't use to + глагол."
        }
      ]
    },
    {
      id: "be-get-used-to",
      title: "be used to / get used to + -ing",
      titleRu: "be used to / get used to + -ing",
      rule: "Be used to + noun or -ing = it feels normal to me. Get used to + noun or -ing = it is becoming normal. Here to is a preposition, so the verb takes -ing.",
      ruleRu: "Be used to + существительное или -ing — «я привыкла, мне это нормально». Get used to + существительное или -ing — «привыкать, привыкнуть» (процесс). To здесь — предлог, поэтому глагол после него с -ing. Не путай с used to + глагол («раньше»).",
      table: {
        head: ["Form", "Meaning"],
        rows: [
          ["I used to work", "раньше работала"],
          ["I'm used to working", "привыкла работать"],
          ["I'm getting used to working", "привыкаю работать"]
        ]
      },
      examples: [
        { en: "I'm used to living on my own.", ru: "Я привыкла жить одна." },
        { en: "She's getting used to her new glasses.", ru: "Она привыкает к новым очкам." },
        { en: "He never got used to the noise of the city.", ru: "Он так и не привык к шуму города." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I've worked in a café for years, so I'm used to ___ on my feet all day.",
          options: ["be", "being", "been"],
          answer: "being",
          explain: "Be used to is followed by -ing.",
          explainRu: "После be used to — форма на -ing: used to being."
        },
        {
          type: "choice",
          q: "She's ___ used to her new job — it's going better every day.",
          options: ["getting", "being", "using"],
          answer: "getting",
          explain: "It's a process, so get used to: she's getting used to it.",
          explainRu: "Это процесс — она привыкает, поэтому getting used to."
        },
        {
          type: "choice",
          q: "What does «I'm used to cold showers» mean?",
          options: ["Cold showers are normal for me.", "I took cold showers in the past.", "I'm starting to take cold showers."],
          answer: "Cold showers are normal for me.",
          explain: "Be used to = something feels normal and familiar.",
          explainRu: "Be used to — «мне это привычно, нормально»."
        },
        {
          type: "gap",
          q: "Are you used to ___ up so early? (get)",
          answer: ["getting"],
          explain: "After be used to, the verb takes -ing.",
          explainRu: "После be used to глагол с -ing: used to getting up."
        },
        {
          type: "gap",
          q: "My grandma never ___ used to living in a city. (get)",
          answer: ["got"],
          explain: "Past of get used to: got used to.",
          explainRu: "Прошедшее время от get used to — got used to: так и не привыкла."
        },
        {
          type: "order",
          ru: "Я всё ещё привыкаю к шуму.",
          answer: "I'm still getting used to the noise.",
          explain: "Am getting used to + noun = the process of getting used to something.",
          explainRu: "Am getting used to + существительное — привыкаю, процесс ещё идёт."
        },
        {
          type: "fix",
          sentence: "I'm not used to work at weekends.",
          wrong: "work",
          options: ["working", "worked", "works"],
          answer: "working",
          correct: "I'm not used to working at weekends.",
          explain: "To is a preposition after be used to, so we need -ing.",
          explainRu: "После be used to to — предлог, поэтому нужен -ing: used to working."
        },
        {
          type: "fix",
          sentence: "We are slowly get used to the new flat.",
          wrong: "get",
          options: ["getting", "got", "gets"],
          answer: "getting",
          correct: "We are slowly getting used to the new flat.",
          explain: "After are we need the -ing form: are getting used to.",
          explainRu: "После are нужна форма на -ing: are getting used to — привыкаем."
        },
        {
          type: "sort",
          q: "What does each sentence mean?",
          qRu: "Что значит каждое предложение?",
          buckets: ["Past habit", "It's normal now", "Becoming normal"],
          items: [["I used to smoke.", 0], ["She's used to the rain.", 1], ["I'm getting used to my new glasses.", 2], ["We used to go camping.", 0], ["He's used to working nights.", 1], ["You'll get used to it.", 2]],
          explain: "Used to + verb = before; be used to = normal now; get used to = becoming normal.",
          explainRu: "Used to + глагол — раньше; be used to — уже привыкла; get used to — привыкаю или привыкну."
        },
        {
          type: "translate",
          ru: "Ты привыкнешь к этому городу.",
          options: ["You'll used to this city.", "You'll use to this city.", "You'll get used to this city."],
          answer: "You'll get used to this city.",
          explain: "Future process of getting used to something: will get used to.",
          explainRu: "Привыкнешь в будущем — will get used to."
        }
      ]
    }
  ],

  "modals-deduction": [
    {
      id: "must-cant",
      title: "must / can't: I'm sure",
      titleRu: "must / can't: я уверена",
      rule: "Must + verb = I'm sure it's true. Can't + verb = I'm sure it isn't true. The opposite of must here is can't, not mustn't.",
      ruleRu: "Must + глагол — «наверняка, должно быть» (уверена, что да). Can't + глагол — «не может быть» (уверена, что нет). Противоположность must здесь — can't, а не mustn't: mustn't значит «нельзя».",
      table: {
        head: ["How sure?", "Modal"],
        rows: [
          ["sure: yes", "must be"],
          ["sure: no", "can't be"]
        ]
      },
      examples: [
        { en: "You've walked ten miles — your feet must hurt.", ru: "Ты прошла десять миль — у тебя, наверное, болят ноги." },
        { en: "This can't be our bus — it's going to Wigan.", ru: "Не может быть, что это наш автобус — он идёт в Уиган." },
        { en: "You must be joking!", ru: "Ты, должно быть, шутишь!" }
      ],
      exercises: [
        {
          type: "choice",
          q: "Anna has three jobs. She ___ be very busy.",
          options: ["must", "can't", "mustn't"],
          answer: "must",
          explain: "Three jobs — we're sure she's busy, so must.",
          explainRu: "Три работы — мы уверены, что она занята, поэтому must."
        },
        {
          type: "choice",
          q: "That ___ be the right answer — two plus two isn't five!",
          options: ["mustn't", "can't", "must"],
          answer: "can't",
          explain: "We're sure it isn't true, so can't.",
          explainRu: "Мы уверены, что это неправда, — значит, can't."
        },
        {
          type: "choice",
          q: "The phone's ringing. It ___ be my mum — she always calls at six.",
          options: ["can't", "mustn't", "must"],
          answer: "must",
          explain: "She always calls at six, so we're sure: must.",
          explainRu: "Мама всегда звонит в шесть — мы уверены, поэтому must."
        },
        {
          type: "gap",
          q: "You ___ be hungry — you've just had a huge lunch! (I'm sure it isn't true)",
          answer: ["can't", "cannot", "couldn't", "could not"],
          explain: "Sure it isn't true: can't.",
          explainRu: "Уверена, что нет: can't. Не mustn't!"
        },
        {
          type: "gap",
          q: "They ___ be rich — they've got three houses. (I'm sure it's true)",
          answer: ["must"],
          explain: "Sure it's true: must.",
          explainRu: "Уверена, что да: must."
        },
        {
          type: "order",
          ru: "Ты, должно быть, очень устала.",
          answer: "You must be very tired.",
          explain: "Must be = I'm sure it's true.",
          explainRu: "Must be — «наверняка, должно быть»."
        },
        {
          type: "fix",
          sentence: "She mustn't be at home — her car isn't outside.",
          wrong: "mustn't",
          options: ["can't", "doesn't", "isn't"],
          answer: "can't",
          correct: "She can't be at home — her car isn't outside.",
          explain: "For 'I'm sure it isn't true' use can't; mustn't means 'not allowed'.",
          explainRu: "«Не может быть» — can't. Mustn't значит запрет («нельзя»)."
        },
        {
          type: "fix",
          sentence: "This must is your bag — it has your name on it.",
          wrong: "is",
          options: ["be", "being", "to be"],
          answer: "be",
          correct: "This must be your bag — it has your name on it.",
          explain: "After must we use the base verb: must be.",
          explainRu: "После must — начальная форма глагола без to: must be."
        },
        {
          type: "listen",
          say: "He can't be at work today.",
          options: ["He can't be at work today.", "He must be at work today.", "He mustn't be at work today."],
          answer: "He can't be at work today.",
          explain: "Listen for can't: the speaker is sure he isn't at work.",
          explainRu: "Прислушайся к can't: говорящий уверен, что его нет на работе."
        },
        {
          type: "translate",
          ru: "Не может быть, что ей сорок — она выглядит намного моложе.",
          options: [
            "She mustn't be forty — she looks much younger.",
            "She can't be forty — she looks much younger.",
            "She can't is forty — she looks much younger."
          ],
          answer: "She can't be forty — she looks much younger.",
          explain: "Sure it isn't true: can't + be.",
          explainRu: "«Не может быть» — can't + be. Mustn't — это запрет."
        }
      ]
    },
    {
      id: "might-may-could",
      title: "might / may / could: perhaps",
      titleRu: "might / may / could: возможно",
      rule: "Might, may and could + verb = perhaps it's true. For 'perhaps not', use might not or may not (couldn't means you're sure it isn't true).",
      ruleRu: "Might, may, could + глагол — «возможно, может быть». Для «возможно, не…» — might not или may not. Couldn't здесь не подходит: оно значит «не может быть», как can't.",
      table: {
        head: ["Meaning", "Modal"],
        rows: [
          ["perhaps", "might / may / could be"],
          ["perhaps not", "might not / may not be"]
        ]
      },
      examples: [
        { en: "Take a jumper — it might be cold later.", ru: "Возьми свитер — позже может быть холодно." },
        { en: "She may not know about the meeting.", ru: "Возможно, она не знает о собрании." },
        { en: "That could be the postman at the door.", ru: "Может быть, это почтальон звонит в дверь." }
      ],
      exercises: [
        {
          type: "choice",
          q: "I'm not sure where Sam is. He ___ be in the library.",
          options: ["might", "must", "can't"],
          answer: "might",
          explain: "I'm not sure, so it's only a possibility: might.",
          explainRu: "«Я не уверена» — значит, только возможность: might."
        },
        {
          type: "choice",
          q: "Take an umbrella — it ___ rain later.",
          options: ["must", "could", "can't"],
          answer: "could",
          explain: "Could = it's possible.",
          explainRu: "Could — «возможно, может»: дождь возможен."
        },
        {
          type: "choice",
          q: "Don't buy her chocolates — she ___ like them. I'm not sure.",
          options: ["might not", "couldn't", "mustn't"],
          answer: "might not",
          explain: "Perhaps not = might not; couldn't would mean you're sure.",
          explainRu: "«Возможно, не…» — might not. Couldn't значило бы, что ты уверена."
        },
        {
          type: "gap",
          q: "Ask at reception — they ___ know where the room is. (perhaps)",
          answer: ["might", "may", "could"],
          explain: "Might, may or could = perhaps.",
          explainRu: "Might, may или could — «возможно». Подходит любое."
        },
        {
          type: "gap",
          q: "The shop ___ be open on Sunday — I'm not sure. (perhaps not)",
          answer: ["might not", "may not", "mightn't"],
          explain: "Perhaps not: might not or may not.",
          explainRu: "«Возможно, не…» — might not или may not."
        },
        {
          type: "order",
          ru: "Возможно, они застряли в пробке.",
          answer: "They might be stuck in traffic.",
          explain: "Might be = perhaps.",
          explainRu: "Might be — «возможно»."
        },
        {
          type: "fix",
          sentence: "It might snows tomorrow.",
          wrong: "snows",
          options: ["snow", "snowing", "to snow"],
          answer: "snow",
          correct: "It might snow tomorrow.",
          explain: "After might we use the base verb without -s.",
          explainRu: "После might — начальная форма глагола, без -s и без to."
        },
        {
          type: "fix",
          sentence: "I don't know where Kate is — she can be at her sister's.",
          wrong: "can",
          options: ["might", "must", "does"],
          answer: "might",
          correct: "I don't know where Kate is — she might be at her sister's.",
          explain: "For a possibility, use might, not can.",
          explainRu: "Русское «может быть» — это might (may, could), а не can."
        },
        {
          type: "translate",
          ru: "Может быть, он болен.",
          options: ["He can be ill.", "He might be ill.", "He must be ill.", "Maybe he can be ill."],
          answer: "He might be ill.",
          explain: "Perhaps = might be; must would mean you're sure.",
          explainRu: "«Может быть» — might be. Must значило бы «наверняка»."
        },
        {
          type: "sort",
          q: "How sure is the speaker?",
          qRu: "Насколько уверен говорящий?",
          buckets: ["Sure: yes", "Perhaps", "Sure: no"],
          items: [["must be", 0], ["might be", 1], ["can't be", 2], ["may be", 1], ["could be", 1], ["couldn't be", 2]],
          explain: "Must = sure yes; might, may, could = perhaps; can't, couldn't = sure no.",
          explainRu: "Must — уверена, что да; might, may, could — возможно; can't, couldn't — уверена, что нет."
        }
      ]
    },
    {
      id: "past",
      title: "must have / can't have / might have",
      titleRu: "must have / can't have / might have",
      rule: "For guesses about the past, use the modal + have + participle: must have (sure yes), might / may / could have (perhaps), can't / couldn't have (sure no).",
      ruleRu: "Для догадок о прошлом: модальный глагол + have + причастие (третья форма). Must have — наверняка было; might / may / could have — возможно, было; can't / couldn't have — не может быть, чтобы было.",
      table: {
        head: ["How sure?", "Past"],
        rows: [
          ["sure: yes", "must have gone"],
          ["perhaps", "might have gone"],
          ["sure: no", "can't have gone"]
        ]
      },
      examples: [
        { en: "The lights are off. They must have gone to bed.", ru: "Свет выключен. Наверное, они уже легли спать." },
        { en: "She might have forgotten about our plans.", ru: "Возможно, она забыла о наших планах." },
        { en: "You can't have finished already!", ru: "Не может быть, что ты уже закончила!" }
      ],
      exercises: [
        {
          type: "choice",
          q: "The kitchen smells amazing. Dad ___ a cake.",
          options: ["must have baked", "must bake", "must baked"],
          answer: "must have baked",
          explain: "A confident guess about the past: must have + participle.",
          explainRu: "Уверенная догадка о прошлом: must have + причастие."
        },
        {
          type: "choice",
          q: "Tom ___ the test — he didn't study at all!",
          options: ["mustn't have passed", "can't have passed", "can't pass"],
          answer: "can't have passed",
          explain: "Sure it didn't happen: can't have + participle.",
          explainRu: "Уверена, что этого не было: can't have + причастие."
        },
        {
          type: "choice",
          q: "I'm not sure why Mia didn't come. She ___ forgotten.",
          options: ["must have", "might have", "can't have"],
          answer: "might have",
          explain: "'I'm not sure' = only a possibility: might have.",
          explainRu: "«Я не уверена» — только возможность: might have."
        },
        {
          type: "gap",
          q: "You ___ seen Ben in town today — he's in hospital! (I'm sure it didn't happen)",
          answer: ["can't have", "cannot have", "couldn't have", "could not have"],
          explain: "Sure it didn't happen: can't have or couldn't have.",
          explainRu: "Уверена, что этого не было: can't have или couldn't have."
        },
        {
          type: "gap",
          q: "The window is broken. Someone ___ thrown a ball at it. (I'm sure)",
          answer: ["must have", "must've"],
          explain: "A confident guess about the past: must have.",
          explainRu: "Уверенная догадка о прошлом: must have."
        },
        {
          type: "gap",
          q: "I ___ left my umbrella on the bus — I'm not sure. (perhaps)",
          answer: ["might have", "may have", "could have", "might've", "may've", "could've"],
          explain: "Perhaps in the past: might / may / could have.",
          explainRu: "«Возможно» о прошлом: might / may / could have."
        },
        {
          type: "order",
          ru: "Он, наверное, проспал.",
          answer: "He must have overslept.",
          explain: "Must have + participle = I'm sure it happened.",
          explainRu: "Must have + причастие — «наверняка так и было»."
        },
        {
          type: "fix",
          sentence: "Kate must have went to the gym — her bag isn't here.",
          wrong: "went",
          options: ["gone", "go", "going"],
          answer: "gone",
          correct: "Kate must have gone to the gym — her bag isn't here.",
          explain: "After have we need the participle: gone, not went.",
          explainRu: "После have нужна третья форма: go — went — gone."
        },
        {
          type: "fix",
          sentence: "They mustn't have seen us — they didn't wave.",
          wrong: "mustn't",
          options: ["can't", "didn't", "don't"],
          answer: "can't",
          correct: "They can't have seen us — they didn't wave.",
          explain: "Sure it didn't happen: can't have, not mustn't have.",
          explainRu: "Уверена, что не видели: can't have. Mustn't have для догадок не используем."
        },
        {
          type: "listen",
          say: "She might have missed the train.",
          options: ["She might have missed the train.", "She might miss the train.", "She must have missed the train."],
          answer: "She might have missed the train.",
          explain: "Listen for might have: perhaps it happened in the past.",
          explainRu: "Прислушайся: might have — возможно, это уже случилось."
        }
      ]
    }
  ]
});
