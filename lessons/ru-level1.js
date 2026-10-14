// Russian course — Level 1: Alphabet & Reading
window.RU_LESSONS = (window.RU_LESSONS || []).concat([

  // ───────────────────────── 1. FAMILIAR LETTERS ─────────────────────────
  {
    id: "ru-letters-easy",
    level: 1, order: 1,
    emoji: "🔤",
    title: "Familiar letters: А К М О Т Е",
    titleRu: "Знакомые буквы",
    intro: "Good news: some Russian letters look and sound just like ours. With only five of them you can already read real words!",
    introPt: "Boa notícia: algumas letras russas são iguais às nossas na forma e no som. Só com cinco delas você já lê palavras de verdade!",
    sections: [
      {
        title: "Five easy letters", titlePt: "Cinco letras fáceis",
        text: "А, К, М, О and Т look like Latin letters and sound the same. Read them just as you would in Portuguese.",
        textPt: "А, К, М, О e Т parecem letras latinas e soam igual. Leia como leria em português.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["А а", "a", "Portuguese 'casa'"],
            ["К к", "k", "Portuguese 'quilo'"],
            ["М м", "m", "Portuguese 'mãe'"],
            ["О о", "o", "Portuguese 'bola'"],
            ["Т т", "t", "Portuguese 'tatu' (never 'tch')"]
          ]
        },
        examples: [
          { ru: "мама", tr: "MA-ma", en: "mum" },
          { ru: "кот", tr: "KOT", en: "cat" },
          { ru: "там", tr: "TAM", en: "there" },
          { ru: "как", tr: "KAK", en: "how" },
          { ru: "так", tr: "TAK", en: "so, like this" }
        ]
      },
      {
        title: "Е: looks like E, says 'ye'", titlePt: "Е: parece E, mas soa 'ie'",
        text: "Е looks familiar, but it sounds like 'ye' in 'yes'. After a consonant it adds a tiny 'y': тема is TYE-ma.",
        textPt: "Е parece conhecido, mas soa 'ie', como no inglês 'yes'. Depois de consoante, acrescenta um 'i' rapidinho: тема é TIE-ma.",
        table: { head: ["Letter", "Sound", "Like in"], rows: [["Е е", "ye", "English 'yes'"]] },
        examples: [
          { ru: "тема", tr: "TYE-ma", en: "topic" },
          { ru: "метка", tr: "MYET-ka", en: "mark, label" }
        ]
      },
      {
        title: "Your first words", titlePt: "Suas primeiras palavras",
        text: "Here are more words made only of these letters. Plus one bonus word you will use every day: это (this is).",
        textPt: "Aqui vão mais palavras feitas só com essas letras. E uma palavra bônus que você vai usar todo dia: это (isto é / este é).",
        examples: [
          { ru: "Том", tr: "TOM", en: "Tom (a name)" },
          { ru: "атом", tr: "A-tam", en: "atom" },
          { ru: "Это мама.", tr: "E-ta MA-ma.", en: "This is mum." },
          { ru: "Это кот Том.", tr: "E-ta KOT TOM.", en: "This is Tom the cat." }
        ]
      }
    ],
    tip: {
      en: "Т is always a clean 't', even before Е: тема is TYE-ma, never 'tchema'. The transliteration shows the real sound, so атом is A-tam — you'll learn why in lesson 6.",
      pt: "Т é sempre um 't' seco, mesmo antes de Е: тема é TIE-ma, nunca 'tchema' como no português do Brasil. A transliteração mostra o som real, por isso атом é A-tam — você vai entender o porquê na lição 6."
    },
    exercises: [
      { type: "choice", q: "How do you read «кот»?", options: ["kot", "rot", "kom"], answer: "kot",
        explain: "К = k, О = o, Т = t: кот (cat).", explainPt: "К = k, О = o, Т = t: кот (gato)." },
      { type: "choice", q: "How do you read «мама»?", options: ["mama", "nana", "tata"], answer: "mama",
        explain: "М sounds like m, so мама is 'mama' — mum.", explainPt: "М soa como m, então мама é 'mama' — mãe." },
      { type: "choice", q: "Which Russian letter sounds like 'ye' in 'yes'?", options: ["Е", "А", "О", "К"], answer: "Е",
        explain: "Е looks like E but is read 'ye'.", explainPt: "Е parece E, mas se lê 'ie'." },
      { type: "gap", q: "Fill the missing letter: к_т (cat) → ___", answer: ["о"],
        explain: "Cat is кот: к-о-т.", explainPt: "Gato é кот: к-о-т." },
      { type: "gap", q: "Fill the missing letter: м_ма (mum) → ___", answer: ["а"],
        explain: "Mum is мама: two syllables, both with а.", explainPt: "Mãe é мама: duas sílabas, as duas com а." },
      { type: "order", prompt: "This is Tom the cat.", answer: "Это кот Том.",
        explain: "Это (this is) + кот (cat) + Том — Russian needs no 'is'.", explainPt: "Это (este é) + кот (gato) + Том — o russo não precisa de verbo 'é'." },
      { type: "order", prompt: "Mum, the cat is there!", answer: "Мама, кот там!",
        explain: "Там means 'there' — so short and useful!", explainPt: "Там quer dizer 'lá' — curtinho e muito útil!" },
      { type: "translate", prompt: "The cat is there.", options: ["Кот там.", "Кот так.", "Кот как."], answer: "Кот там.",
        explain: "Там = there; так = so; как = how.", explainPt: "Там = lá; так = assim; как = como." },
      { type: "listen", say: "том", options: ["том", "ком", "кот"], answer: "том",
        explain: "Том starts with т and ends with м.", explainPt: "Том começa com т e termina com м." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Ligue a palavra ao significado.",
        pairs: [["мама", "mum"], ["кот", "cat"], ["там", "there"], ["как", "how"], ["так", "so, like this"]],
        explain: "Five real words with just five letters!", explainPt: "Cinco palavras de verdade com apenas cinco letras!" }
    ]
  },

  // ───────────────────────── 2. FALSE FRIENDS ─────────────────────────
  {
    id: "ru-letters-false-friends",
    level: 1, order: 2,
    emoji: "🎭",
    title: "False friends: В Н Р С У Х",
    titleRu: "Обманчивые буквы",
    intro: "These letters look Latin, but they are liars — they make a different sound. Once you know their trick, you can read a lot!",
    introPt: "Estas letras parecem latinas, mas são mentirosas — fazem outro som. Quando você conhece o truque delas, já consegue ler muita coisa!",
    sections: [
      {
        title: "They look Latin, but…", titlePt: "Parecem latinas, mas…",
        text: "Each of these letters looks like one you know, but sounds different. Say the sound, not the shape.",
        textPt: "Cada uma dessas letras parece uma que você conhece, mas soa diferente. Leia o som, não a forma.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["В в", "v", "Portuguese 'vovó' (looks like B)"],
            ["Н н", "n", "Portuguese 'nada' (looks like H)"],
            ["Р р", "r (tapped)", "Portuguese 'caro' (looks like P)"],
            ["С с", "s", "Portuguese 'sol' (looks like C)"],
            ["У у", "u", "Portuguese 'uva' (looks like y)"],
            ["Х х", "kh", "Spanish 'jota' (looks like X)"]
          ]
        }
      },
      {
        title: "Short words to read", titlePt: "Palavras curtas para ler",
        text: "Read slowly, letter by letter. Remember: Е says 'ye', so нет is NYET.",
        textPt: "Leia devagar, letra por letra. Lembre: Е soa 'ie', então нет é NIET.",
        examples: [
          { ru: "нос", tr: "NOS", en: "nose" },
          { ru: "сок", tr: "SOK", en: "juice" },
          { ru: "рука", tr: "ru-KA", en: "hand, arm" },
          { ru: "вот", tr: "VOT", en: "here is, here's" },
          { ru: "нет", tr: "NYET", en: "no" }
        ]
      },
      {
        title: "Longer words", titlePt: "Palavras mais longas",
        text: "Now try longer words. Many are almost the same as in Portuguese once you decode them!",
        textPt: "Agora tente palavras maiores. Muitas são quase iguais ao português depois que você decifra!",
        examples: [
          { ru: "утро", tr: "U-tra", en: "morning" },
          { ru: "хор", tr: "KHOR", en: "choir" },
          { ru: "сестра", tr: "si-STRA", en: "sister" },
          { ru: "ресторан", tr: "ri-sta-RAN", en: "restaurant" },
          { ru: "торт", tr: "TORT", en: "cake" }
        ]
      }
    ],
    tip: {
      en: "Р is never 'p'! And it's a quick tap, like the r in Portuguese 'caro' — not the throaty r in 'rato'. ресторан = ri-sta-RAN.",
      pt: "Р nunca é 'p'! E é um 'r' batido, como em 'caro' — não o 'r' de garganta de 'rato'. ресторан = ri-sta-RAN."
    },
    exercises: [
      { type: "choice", q: "How do you read «нос»?", options: ["nos", "hoc", "noc", "pos"], answer: "nos",
        explain: "Н = n, О = o, С = s: нос (nose).", explainPt: "Н = n, О = o, С = s: нос (nariz)." },
      { type: "choice", q: "How do you read «рука»?", options: ["ruka", "pyka", "ryka"], answer: "ruka",
        explain: "Р = r and У = u, so рука is 'ruka' — hand.", explainPt: "Р = r e У = u, então рука é 'ruka' — mão." },
      { type: "choice", q: "Which letter makes the sound 'v'?", options: ["В", "Н", "У", "Р"], answer: "В",
        explain: "В looks like B but sounds like v.", explainPt: "В parece B, mas soa como v." },
      { type: "gap", q: "Fill the missing letter: _ос (nose) → ___", answer: ["н"],
        explain: "Nose is нос; the letter that looks like H says n.", explainPt: "Nariz é нос; a letra que parece H soa n." },
      { type: "gap", q: "Fill the missing letter: сест_а (sister) → ___", answer: ["р"],
        explain: "Sister is сестра; Р (looks like P) is the r sound.", explainPt: "Irmã é сестра; Р (parece P) é o som de r." },
      { type: "order", prompt: "Here's the juice, mum!", answer: "Вот сок, мама!",
        explain: "Вот means 'here is' — perfect for handing something over.", explainPt: "Вот quer dizer 'aqui está' — perfeito para entregar algo." },
      { type: "order", prompt: "This is Tom's sister.", answer: "Это сестра Тома.",
        explain: "Тома means 'of Tom' and comes after the noun.", explainPt: "Тома quer dizer 'do Tom' e vem depois do substantivo." },
      { type: "translate", prompt: "No, this is a cake.", options: ["Нет, это торт.", "Нет, это нос.", "Нет, это хор."], answer: "Нет, это торт.",
        explain: "Торт = cake; нос = nose; хор = choir.", explainPt: "Торт = bolo; нос = nariz; хор = coral." },
      { type: "listen", say: "сок", options: ["сок", "нос", "сон"], answer: "сок",
        explain: "Сок (juice) starts with с and ends with к.", explainPt: "Сок (suco) começa com с e termina com к." },
      { type: "match", q: "Match the letter to its sound.", qPt: "Ligue a letra ao seu som.",
        pairs: [["В", "v"], ["Н", "n"], ["Р", "r"], ["С", "s"], ["Х", "kh"]],
        explain: "Five liars: they look Latin but sound different.", explainPt: "Cinco mentirosas: parecem latinas, mas soam diferente." }
    ]
  },

  // ───────────────────────── 3. NEW SHAPES ─────────────────────────
  {
    id: "ru-letters-new",
    level: 1, order: 3,
    emoji: "🏠",
    title: "New shapes: Б Г Д З И Л П Ф Й",
    titleRu: "Новые буквы",
    intro: "These letters have new shapes, but their sounds are easy — you know them all from Portuguese. Now you can say 'hi' and talk about your home!",
    introPt: "Estas letras têm formas novas, mas os sons são fáceis — você conhece todos do português. Agora já dá para dizer 'oi' e falar da sua casa!",
    sections: [
      {
        title: "New consonants", titlePt: "Consoantes novas",
        text: "These shapes are new, but the sounds are friendly. Г is always a hard 'g', and Д is always a clean 'd'.",
        textPt: "As formas são novas, mas os sons são amigos. Г é sempre um 'g' duro, e Д é sempre um 'd' seco.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["Б б", "b", "Portuguese 'bola'"],
            ["Г г", "g", "Portuguese 'gato' (always hard)"],
            ["Д д", "d", "Portuguese 'dado' (never 'dj')"],
            ["З з", "z", "Portuguese 'zero' (looks like 3)"],
            ["П п", "p", "Portuguese 'pai'"],
            ["Ф ф", "f", "Portuguese 'foto'"]
          ]
        },
        examples: [
          { ru: "дом", tr: "DOM", en: "house, home" },
          { ru: "брат", tr: "BRAT", en: "brother" },
          { ru: "папа", tr: "PA-pa", en: "dad" },
          { ru: "фото", tr: "FO-ta", en: "photo" }
        ]
      },
      {
        title: "И, Й and Л", titlePt: "И, Й e Л",
        text: "И is a full 'i'. Й (with a little cap) is a short 'y', like the i in 'pai'. Л is a soft 'l' like in English 'ball'.",
        textPt: "И é um 'i' completo. Й (com chapeuzinho) é um 'i' curto, como em 'pai'. Л é um 'l' mais grosso, como no inglês 'ball'.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["И и", "i", "Portuguese 'vida' (looks like a backwards N)"],
            ["Й й", "y (short)", "Portuguese 'pai', 'boi'"],
            ["Л л", "l", "English 'ball'"]
          ]
        },
        examples: [
          { ru: "мой", tr: "MOY", en: "my" },
          { ru: "зима", tr: "zi-MA", en: "winter" },
          { ru: "лампа", tr: "LAM-pa", en: "lamp" }
        ]
      },
      {
        title: "Words for every day", titlePt: "Palavras do dia a dia",
        text: "With these letters you can greet people and ask where things are.",
        textPt: "Com essas letras você já pode cumprimentar as pessoas e perguntar onde estão as coisas.",
        examples: [
          { ru: "Привет!", tr: "pri-VYET!", en: "Hi!" },
          { ru: "да", tr: "DA", en: "yes" },
          { ru: "где", tr: "GDYE", en: "where" },
          { ru: "Это мой дом.", tr: "E-ta MOY DOM.", en: "This is my house." }
        ]
      }
    ],
    tip: {
      en: "Д and Т stay hard before И and Е: один is a-DIN, not 'a-djin'. And Г is always 'g' as in 'gato', even before И: гид is GIT.",
      pt: "Д e Т continuam duros antes de И e Е: один é a-DIN, não 'a-djin'. E Г é sempre o 'g' de 'gato', mesmo antes de И: гид é GUIT, nunca 'jit'."
    },
    exercises: [
      { type: "choice", q: "How do you read «дом»?", options: ["dom", "gom", "tom"], answer: "dom",
        explain: "Д = d, so дом is 'dom' — house.", explainPt: "Д = d, então дом é 'dom' — casa." },
      { type: "choice", q: "Which letter makes the sound 'i' as in 'vida'?", options: ["И", "Й", "Н", "П"], answer: "И",
        explain: "И is a full 'i'; Й is a short 'y'.", explainPt: "И é um 'i' completo; Й é um 'i' curto." },
      { type: "choice", q: "How do you read «привет»?", options: ["privyet", "npubet", "pravyet"], answer: "privyet",
        explain: "П = p, Р = r, И = i, В = v, Е = ye, Т = t: привет (hi).", explainPt: "П = p, Р = r, И = i, В = v, Е = ie, Т = t: привет (oi)." },
      { type: "gap", q: "Fill the missing letter: _ом (house) → ___", answer: ["д"],
        explain: "House is дом, with Д.", explainPt: "Casa é дом, com Д." },
      { type: "gap", q: "Fill the missing letter: мо_ (my) → ___", answer: ["й"],
        explain: "My is мой; it ends with the short Й.", explainPt: "Meu é мой; termina com o Й curto." },
      { type: "order", prompt: "This is my house.", answer: "Это мой дом.",
        explain: "Это (this is) + мой (my) + дом (house).", explainPt: "Это (esta é) + мой (minha) + дом (casa)." },
      { type: "order", prompt: "Hi, this is my brother.", answer: "Привет, это мой брат.",
        explain: "A perfect way to introduce your brother to someone.", explainPt: "Um jeito perfeito de apresentar seu irmão a alguém." },
      { type: "translate", prompt: "This is my dad.", options: ["Это мой папа.", "Это мои папа.", "Это мой папу."], answer: "Это мой папа.",
        explain: "Мой is 'my' for one person; папа keeps its basic form.", explainPt: "Мой é 'meu' para uma pessoa só; папа fica na forma básica." },
      { type: "listen", say: "дом", options: ["дом", "том", "ком"], answer: "дом",
        explain: "Дом starts with a 'd' sound.", explainPt: "Дом começa com som de 'd'." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Ligue a palavra ao significado.",
        pairs: [["брат", "brother"], ["папа", "dad"], ["зима", "winter"], ["лампа", "lamp"], ["где", "where"]],
        explain: "Family, home and a question word — great start!", explainPt: "Família, casa e uma palavra de pergunta — ótimo começo!" }
    ]
  },

  // ───────────────────────── 4. HISSING & SPECIAL ─────────────────────────
  {
    id: "ru-letters-hissing",
    level: 1, order: 4,
    emoji: "🍵",
    title: "Hissing & special: Ж Ц Ч Ш Щ Ы Э",
    titleRu: "Шипящие и особые буквы",
    intro: "These letters look the most 'Russian'. Don't worry — most of their sounds exist in Portuguese too. After this lesson you can read чай and борщ!",
    introPt: "Estas são as letras com mais 'cara de russo'. Calma — a maioria desses sons existe em português. Depois desta lição você já lê чай e борщ!",
    sections: [
      {
        title: "Hissing sounds", titlePt: "Sons chiados",
        text: "Ж, Ш, Щ, Ч and Ц are the 'hissing' letters. You already make these sounds in Portuguese.",
        textPt: "Ж, Ш, Щ, Ч e Ц são as letras 'chiadas'. Você já faz esses sons em português.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["Ж ж", "zh", "Portuguese 'já'"],
            ["Ш ш", "sh", "Portuguese 'chave'"],
            ["Щ щ", "shsh (long, soft)", "English 'fresh sheets'"],
            ["Ч ч", "ch", "Portuguese 'tchau'"],
            ["Ц ц", "ts", "Italian 'pizza'"]
          ]
        },
        examples: [
          { ru: "жена", tr: "zhy-NA", en: "wife" },
          { ru: "чай", tr: "CHAY", en: "tea" },
          { ru: "школа", tr: "SHKO-la", en: "school" },
          { ru: "борщ", tr: "BORSHCH", en: "borsch (beetroot soup)" },
          { ru: "улица", tr: "U-li-tsa", en: "street" }
        ]
      },
      {
        title: "Ы and Э", titlePt: "Ы e Э",
        text: "Э is an open 'e' like in 'café'. Ы has no match in our languages: say 'i' but pull your tongue back, as if you were a little surprised.",
        textPt: "Э é um 'é' aberto, como em 'café'. Ы não existe nas nossas línguas: diga 'i', mas puxe a língua para trás, como se estivesse levemente surpreso.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["Ы ы", "y (deep i)", "no match — 'i' with the tongue pulled back"],
            ["Э э", "e", "Portuguese 'café'"]
          ]
        },
        examples: [
          { ru: "мы", tr: "MY", en: "we" },
          { ru: "вы", tr: "VY", en: "you (polite or plural)" },
          { ru: "сыр", tr: "SYR", en: "cheese" },
          { ru: "это", tr: "E-ta", en: "this is" }
        ]
      },
      {
        title: "ЖИ, ШИ, ЦИ: written И, said Ы", titlePt: "ЖИ, ШИ, ЦИ: escreve И, fala Ы",
        text: "Ж, Ш and Ц are always hard. So after them, И actually sounds like Ы.",
        textPt: "Ж, Ш e Ц são sempre duros. Por isso, depois deles, o И soa na verdade como Ы.",
        examples: [
          { ru: "машина", tr: "ma-SHY-na", en: "car" },
          { ru: "жираф", tr: "zhy-RAF", en: "giraffe" },
          { ru: "цирк", tr: "TSYRK", en: "circus" }
        ]
      }
    ],
    tip: {
      en: "Don't turn Ы into a plain И — it can change the word: был (BYL) means 'was', but бил (BIL) means 'hit'.",
      pt: "Não transforme Ы num И comum — isso pode mudar a palavra: был (BYL) quer dizer 'era/estava', mas бил (BIL) quer dizer 'batia'."
    },
    exercises: [
      { type: "choice", q: "Which letter makes the sound 'sh' as in 'chave'?", options: ["Ш", "Щ", "Ж", "Ч"], answer: "Ш",
        explain: "Ш is 'sh'; Щ is a longer, softer 'shsh'.", explainPt: "Ш é 'ch' de 'chave'; Щ é um 'ch' mais longo e suave." },
      { type: "choice", q: "How do you read «чай»?", options: ["chay", "tsay", "shay"], answer: "chay",
        explain: "Ч = ch as in 'tchau': чай (tea).", explainPt: "Ч = tch de 'tchau': чай (chá)." },
      { type: "choice", q: "Which word means 'we'?", options: ["мы", "вы", "сыр"], answer: "мы",
        explain: "Мы = we; вы = you (polite or plural); сыр = cheese.", explainPt: "Мы = nós; вы = vocês / o senhor; сыр = queijo." },
      { type: "gap", q: "Fill the missing letter: бор_ (borsch) → ___", answer: ["щ"],
        explain: "Борщ ends in Щ, the long soft 'shsh'.", explainPt: "Борщ termina com Щ, o 'ch' longo e suave." },
      { type: "gap", q: "Fill the missing letter: _кола (school) → ___", answer: ["ш"],
        explain: "School is школа, with Ш.", explainPt: "Escola é школа, com Ш." },
      { type: "order", prompt: "This is our school.", answer: "Это наша школа.",
        explain: "Наша means 'our' for a feminine word like школа.", explainPt: "Наша quer dizer 'nossa' para palavras femininas como школа." },
      { type: "order", prompt: "Here's our street.", answer: "Вот наша улица.",
        explain: "Вот (here's) + наша (our) + улица (street).", explainPt: "Вот (aqui está) + наша (nossa) + улица (rua)." },
      { type: "translate", prompt: "We are at home.", options: ["Мы дома.", "Мы есть дома.", "Мы дом."], answer: "Мы дома.",
        explain: "Russian drops 'are' in the present: мы дома = we (are) at home.", explainPt: "O russo não usa 'estar' no presente: мы дома = nós (estamos) em casa." },
      { type: "listen", say: "шар", options: ["шар", "жар", "пар"], answer: "шар",
        explain: "Шар (ball) starts with the 'sh' of Ш.", explainPt: "Шар (bola) começa com o 'ch' de Ш." },
      { type: "match", q: "Match the letter to its sound.", qPt: "Ligue a letra ao seu som.",
        pairs: [["Ж", "zh"], ["Ч", "ch"], ["Ц", "ts"], ["Ш", "sh"], ["Э", "e"]],
        explain: "The 'Russian-looking' letters, decoded!", explainPt: "As letras com 'cara de russo', decifradas!" }
    ]
  },

  // ───────────────────────── 5. Я Ю Ё Ь Ъ ─────────────────────────
  {
    id: "ru-letters-iotated",
    level: 1, order: 5,
    emoji: "💛",
    title: "Я Ю Ё and the soft sign",
    titleRu: "Я, Ю, Ё, Ь и Ъ",
    intro: "The last letters of the alphabet! These vowels come with a built-in 'y', and two signs that have no sound of their own. With them you can say 'I love you'.",
    introPt: "As últimas letras do alfabeto! Estas vogais já vêm com um 'i' embutido, e há dois sinais que não têm som próprio. Com elas você já pode dizer 'eu te amo'.",
    sections: [
      {
        title: "Vowels with a 'y'", titlePt: "Vogais com 'i' na frente",
        text: "Я, Ю and Ё are like А, У and О with a 'y' in front — just like Е is 'ye'. Ё is always stressed.",
        textPt: "Я, Ю e Ё são como А, У e О com um 'i' na frente — do mesmo jeito que Е é 'ie'. Ё é sempre tônico.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["Я я", "ya", "Portuguese 'iate'"],
            ["Ю ю", "yu", "English 'you'"],
            ["Ё ё", "yo", "English 'yoghurt' (always stressed)"],
            ["Е е", "ye", "English 'yes' (you know this one!)"]
          ]
        },
        examples: [
          { ru: "я", tr: "YA", en: "I" },
          { ru: "юбка", tr: "YUP-ka", en: "skirt" },
          { ru: "ёлка", tr: "YOL-ka", en: "fir tree, Christmas tree" },
          { ru: "моя", tr: "ma-YA", en: "my (feminine)" }
        ]
      },
      {
        title: "Soft consonants", titlePt: "Consoantes suaves",
        text: "After a consonant, Я, Ю, Ё, Е and И make it soft, with a tiny 'y' glide: тётя is TYO-tya.",
        textPt: "Depois de uma consoante, Я, Ю, Ё, Е e И deixam ela suave, com um 'i' bem leve: тётя é TIO-tia.",
        examples: [
          { ru: "тётя", tr: "TYO-tya", en: "aunt" },
          { ru: "люблю", tr: "lyu-BLYU", en: "I love" },
          { ru: "Я тебя люблю.", tr: "ya ti-BYA lyu-BLYU.", en: "I love you." }
        ]
      },
      {
        title: "Ь and Ъ: signs with no sound", titlePt: "Ь e Ъ: sinais sem som",
        text: "Ь (soft sign) softens the consonant before it, like a tiny 'y' at the end. Ъ (hard sign) is rare: it just separates sounds.",
        textPt: "Ь (sinal brando) suaviza a consoante anterior, como um 'i' bem leve no fim. Ъ (sinal duro) é raro: só separa os sons.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["Ь ь", "softens (')", "день ≈ 'dyen' with a soft n, a bit like Portuguese 'nh'"],
            ["Ъ ъ", "separates", "объект = ab-YEKT (rare)"]
          ]
        },
        examples: [
          { ru: "мать", tr: "MAT'", en: "mother" },
          { ru: "день", tr: "DYEN'", en: "day" },
          { ru: "семья", tr: "sim-YA", en: "family" },
          { ru: "объект", tr: "ab-YEKT", en: "object (rare word)" }
        ]
      }
    ],
    tip: {
      en: "Don't skip the two dots: ёлка is YOL-ka. Russians often print е instead of ё, but in this course we always write ё.",
      pt: "Não ignore os dois pontinhos: ёлка é IOL-ka. Os russos muitas vezes escrevem е no lugar de ё; neste curso, sempre escrevemos ё."
    },
    exercises: [
      { type: "choice", q: "How do you read «ёлка»?", options: ["yolka", "elka", "yalka"], answer: "yolka",
        explain: "Ё = yo, so ёлка is 'YOL-ka' — fir tree.", explainPt: "Ё = io, então ёлка é 'IOL-ka' — pinheiro." },
      { type: "choice", q: "Which letter makes the sound 'yu'?", options: ["Ю", "Я", "Ё", "У"], answer: "Ю",
        explain: "Ю = yu, like English 'you'.", explainPt: "Ю = iu, como no inglês 'you'." },
      { type: "choice", q: "What does the soft sign Ь do?", options: ["It softens the consonant before it", "It is read as 'b'", "It makes the vowel long"], answer: "It softens the consonant before it",
        explain: "Ь has no sound; it softens the consonant before it: мать, день.", explainPt: "Ь não tem som; ele suaviza a consoante anterior: мать, день." },
      { type: "gap", q: "Fill the missing letter: мат_ (mother) → ___", answer: ["ь"],
        explain: "Mother is мать — the soft sign makes the т soft.", explainPt: "Mãe é мать — o sinal brando deixa o т suave." },
      { type: "gap", q: "Fill the missing letter: _лка (fir tree) → ___", answer: ["ё", "е"],
        explain: "Fir tree is ёлка, starting with Ё (yo).", explainPt: "Pinheiro é ёлка, começando com Ё (io)." },
      { type: "order", prompt: "I love you.", answer: "Я тебя люблю.", alt: ["Я люблю тебя."],
        explain: "Я тебя люблю is the most common order; я люблю тебя is fine too.", explainPt: "Я тебя люблю é a ordem mais comum; я люблю тебя também está certo." },
      { type: "order", prompt: "This is my family.", answer: "Это моя семья.",
        explain: "Семья is feminine, so 'my' is моя.", explainPt: "Семья é feminino, então 'minha' é моя." },
      { type: "translate", prompt: "This is my mother.", options: ["Это моя мать.", "Это мой мать.", "Это моя мат."], answer: "Это моя мать.",
        explain: "Мать is feminine (моя), and it needs the soft sign.", explainPt: "Мать é feminino (моя) e precisa do sinal brando." },
      { type: "listen", say: "мать", options: ["мать", "мат", "мята"], answer: "мать",
        explain: "Мать ends in a soft т — listen for the little 'y' at the end.", explainPt: "Мать termina com um т suave — repare no 'i' leve no final." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Ligue a palavra ao significado.",
        pairs: [["я", "I"], ["мать", "mother"], ["день", "day"], ["ёлка", "fir tree"], ["семья", "family"]],
        explain: "Now you know the whole alphabet!", explainPt: "Agora você conhece o alfabeto inteiro!" }
    ]
  },

  // ───────────────────────── 6. READING FOR REAL ─────────────────────────
  {
    id: "ru-reading-stress",
    level: 1, order: 6,
    emoji: "🚇",
    title: "Reading for real: stress & signs",
    titleRu: "Читаем по-настоящему",
    intro: "You know all 33 letters! Now let's sound natural: learn the secret of stress, and read the signs you'll see in the metro and on the street.",
    introPt: "Você já conhece as 33 letras! Agora vamos soar natural: aprenda o segredo da sílaba tônica e leia as placas que você vai ver no metrô e na rua.",
    sections: [
      {
        title: "One strong syllable", titlePt: "Uma sílaba forte",
        text: "Every Russian word has one stressed syllable, said louder and longer. Russian doesn't mark it in writing, so in this course it's in CAPITALS.",
        textPt: "Toda palavra russa tem uma sílaba tônica, dita mais forte e mais longa. O russo não marca isso na escrita, então neste curso ela aparece em MAIÚSCULAS.",
        examples: [
          { ru: "вода", tr: "va-DA", en: "water" },
          { ru: "спасибо", tr: "spa-SI-ba", en: "thank you" },
          { ru: "собака", tr: "sa-BA-ka", en: "dog" },
          { ru: "Москва", tr: "ma-SKVA", en: "Moscow" }
        ]
      },
      {
        title: "Unstressed О sounds like 'a'", titlePt: "О átono soa como 'a'",
        text: "Only a stressed О says 'o'. Without stress, О sounds like a short 'a', and Е or Я sound like a short 'i'.",
        textPt: "Só o О tônico soa 'o'. Sem acento, o О soa como um 'a' curto, e Е ou Я soam como um 'i' curto.",
        table: {
          head: ["Letter", "Sound", "Like in"],
          rows: [
            ["О (stressed)", "o", "молоко → ...KO"],
            ["О (unstressed)", "a", "молоко → ma-la-..."],
            ["Е, Я (unstressed)", "i (short)", "сестра → si-STRA"]
          ]
        },
        examples: [
          { ru: "молоко", tr: "ma-la-KO", en: "milk" },
          { ru: "хорошо", tr: "kha-ra-SHO", en: "good, well" },
          { ru: "окно", tr: "ak-NO", en: "window" }
        ]
      },
      {
        title: "Reading signs", titlePt: "Lendo placas",
        text: "Signs are often in CAPITALS. One more trick: at the end of a word, or before a voiceless sound, Д, В, Б, Г, З turn into Т, Ф, П, К, С — so вход is FKHOT.",
        textPt: "As placas costumam estar em MAIÚSCULAS. Mais um truque: no fim da palavra ou antes de um som surdo, Д, В, Б, Г, З viram Т, Ф, П, К, С — por isso вход se lê FKHOT.",
        examples: [
          { ru: "ВХОД", tr: "FKHOT", en: "entrance" },
          { ru: "ВЫХОД", tr: "VY-khat", en: "exit" },
          { ru: "КАССА", tr: "KAS-sa", en: "ticket office, till" },
          { ru: "АПТЕКА", tr: "ap-TYE-ka", en: "pharmacy" },
          { ru: "МЕТРО", tr: "mi-TRO", en: "metro" }
        ]
      }
    ],
    tip: {
      en: "ВХОД and ВЫХОД look alike, but they're opposites! Вы- means 'out', so follow ВЫХОД to leave.",
      pt: "ВХОД e ВЫХОД são parecidos, mas são opostos! Вы- quer dizer 'para fora', então siga ВЫХОД para sair."
    },
    exercises: [
      { type: "choice", q: "How do you read «молоко»?", options: ["ma-la-KO", "mo-lo-KO", "MO-lo-ko"], answer: "ma-la-KO",
        explain: "Only the stressed О (the last one) says 'o'; the others sound like 'a'.", explainPt: "Só o О tônico (o último) soa 'o'; os outros soam como 'a'." },
      { type: "choice", q: "You want to leave the metro station. Which sign do you follow?", options: ["ВЫХОД", "ВХОД", "КАССА"], answer: "ВЫХОД",
        explain: "Выход = exit; вход = entrance; касса = ticket office.", explainPt: "Выход = saída; вход = entrada; касса = bilheteria." },
      { type: "choice", q: "Where do you buy medicine?", options: ["АПТЕКА", "КАССА", "МЕТРО"], answer: "АПТЕКА",
        explain: "Аптека = pharmacy — almost like Portuguese 'botica'.", explainPt: "Аптека = farmácia — parecido com 'botica' em português." },
      { type: "gap", q: "Fill the missing letter: апте_а (pharmacy) → ___", answer: ["к"],
        explain: "Pharmacy is аптека: ap-TYE-ka.", explainPt: "Farmácia é аптека: ap-TIE-ka." },
      { type: "gap", q: "Write the word for 'milk' (ma-la-KO): ___", answer: ["молоко"],
        explain: "You hear 'a', but you write О: молоко.", explainPt: "Você ouve 'a', mas escreve О: молоко." },
      { type: "order", prompt: "Thank you, that's very good!", answer: "Спасибо, это очень хорошо!",
        explain: "Очень хорошо = very good — great for complimenting food!", explainPt: "Очень хорошо = muito bom — ótimo para elogiar a comida!" },
      { type: "order", prompt: "Where is the metro around here?", answer: "Где здесь метро?",
        explain: "Здесь means 'here'; где здесь… is the usual way to ask directions.", explainPt: "Здесь quer dizer 'aqui'; где здесь… é o jeito comum de pedir direção." },
      { type: "translate", prompt: "Where is the exit?", options: ["Где выход?", "Где вход?", "Где касса?"], answer: "Где выход?",
        explain: "Выход = exit; don't mix it up with вход (entrance).", explainPt: "Выход = saída; não confunda com вход (entrada)." },
      { type: "listen", say: "вход", options: ["вход", "выход", "вода"], answer: "вход",
        explain: "Вход is one short syllable: FKHOT.", explainPt: "Вход é uma sílaba curta só: FKHOT." },
      { type: "match", q: "Match the sign to its meaning.", qPt: "Ligue a placa ao significado.",
        pairs: [["вход", "entrance"], ["выход", "exit"], ["касса", "ticket office"], ["аптека", "pharmacy"], ["молоко", "milk"]],
        explain: "You can now read real Russian signs!", explainPt: "Agora você já lê placas russas de verdade!" }
    ]
  }

]);
