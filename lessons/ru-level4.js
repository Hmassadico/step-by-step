// Russian course — Level 4 "Real Conversations"
window.RU_LESSONS = (window.RU_LESSONS || []).concat([

  // ───────────────────────── 1. Future tense
  {
    id: "ru-future",
    level: 4, order: 1,
    emoji: "🔮",
    title: "Future: я буду работать",
    titleRu: "Будущее время",
    intro: "Let's talk about plans! Tomorrow, tonight, next weekend — the Russian future is easier than you think.",
    introPt: "Vamos falar de planos! Amanhã, logo à noite, no próximo fim de semana — o futuro russo é mais fácil do que parece.",
    sections: [
      {
        title: "буду + infinitive",
        titlePt: "буду + infinitivo",
        text: "Take the future of быть (буду, будешь…) and add an infinitive. It's like Portuguese 'vou trabalhar': one helper verb that changes, one verb that stays the same.",
        textPt: "Usa-se o futuro de быть (буду, будешь…) mais um infinitivo. É como 'vou trabalhar' em português: um verbo auxiliar que muda e um verbo que fica igual.",
        table: {
          head: ["Who", "быть (future)", "Example"],
          rows: [
            ["я", "буду", "буду работать"],
            ["ты", "будешь", "будешь работать"],
            ["он / она", "будет", "будет работать"],
            ["мы", "будем", "будем работать"],
            ["вы", "будете", "будете работать"],
            ["они", "будут", "будут работать"]
          ]
        },
        examples: [
          { ru: "Завтра я буду работать дома.", tr: "ZAF-tra ya BU-du ra-BO-tat' DO-ma", en: "Tomorrow I'll be working at home." },
          { ru: "Что ты будешь делать вечером?", tr: "SHTO ty BU-dish' DYE-lat' VYE-chi-ram", en: "What will you do this evening?" },
          { ru: "Мы будем смотреть фильм.", tr: "my BU-dim smat-RYET' FIL'M", en: "We'll watch a film." },
          { ru: "Они будут ждать нас.", tr: "a-NI BU-dut ZHDAT' NAS", en: "They'll be waiting for us." }
        ]
      },
      {
        title: "буду on its own: will be",
        titlePt: "буду sozinho: vou estar",
        text: "Without an infinitive, буду simply means 'I will be'. And at the table, «Ты будешь чай?» is the everyday way to offer tea.",
        textPt: "Sem infinitivo, буду quer dizer simplesmente 'vou estar / serei'. E à mesa, «Ты будешь чай?» é a maneira habitual de oferecer chá.",
        examples: [
          { ru: "Я буду дома в шесть.", tr: "ya BU-du DO-ma f SHEST'", en: "I'll be home at six." },
          { ru: "Завтра будет холодно.", tr: "ZAF-tra BU-dit KHO-lad-na", en: "It'll be cold tomorrow." },
          { ru: "Ты будешь чай?", tr: "ty BU-dish' CHAI", en: "Would you like some tea?" }
        ]
      },
      {
        title: "A first look: я позвоню, я приготовлю",
        titlePt: "Uma primeira olhadela: я позвоню, я приготовлю",
        text: "Some verbs (called perfective) look like the present but already mean the future: one action that will be done. With them you never use буду.",
        textPt: "Alguns verbos (chamados perfetivos) parecem estar no presente, mas já significam futuro: uma ação que vai ficar feita. Com eles nunca se usa буду.",
        examples: [
          { ru: "Я позвоню тебе завтра.", tr: "ya pa-zva-NYU ti-BYE ZAF-tra", en: "I'll call you tomorrow." },
          { ru: "Я приготовлю ужин.", tr: "ya pri-ga-TOV-lyu U-zhin", en: "I'll make dinner." },
          { ru: "Мы купим торт.", tr: "my KU-pim TORT", en: "We'll buy a cake." },
          { ru: "Я скоро приду!", tr: "ya SKO-ra pri-DU", en: "I'll be there soon!" }
        ]
      }
    ],
    tip: {
      en: "Never mix the two: «я буду позвонить» is wrong. Either я буду звонить (I'll be calling) or simply я позвоню (I'll call).",
      pt: "Nunca mistures as duas formas: «я буду позвонить» está errado. Ou я буду звонить (vou estar a ligar) ou simplesmente я позвоню (vou ligar)."
    },
    exercises: [
      { type: "choice", q: "Завтра мы ___ работать.", options: ["будем", "буду", "будут"], answer: "будем",
        explain: "For мы the form is будем.", explainPt: "Para мы a forma é будем." },
      { type: "choice", q: "Ты ___ чай? — Would you like some tea?", options: ["будешь", "будет", "буду"], answer: "будешь",
        explain: "For ты the form is будешь.", explainPt: "Para ты a forma é будешь." },
      { type: "choice", q: "What does «Я позвоню тебе завтра» mean?", options: ["I'll call you tomorrow.", "I called you yesterday.", "I'm calling you now."], answer: "I'll call you tomorrow.",
        explain: "позвоню looks like the present, but it means the future.", explainPt: "позвоню parece presente, mas significa futuro." },
      { type: "gap", q: "Я ___ работать дома. — I'll be working at home.", answer: ["буду"],
        explain: "я → буду.", explainPt: "я → буду." },
      { type: "gap", q: "Они ___ ждать нас. — They'll be waiting for us.", answer: ["будут"],
        explain: "они → будут.", explainPt: "они → будут." },
      { type: "order", prompt: "Tomorrow I'll be working at home.", answer: "Завтра я буду работать дома.",
        alt: ["Я завтра буду работать дома.", "Я буду работать дома завтра.", "Завтра я буду дома работать."],
        explain: "буду + infinitive; завтра can move around.", explainPt: "буду + infinitivo; завтра pode mudar de lugar." },
      { type: "order", prompt: "I'll call you tomorrow.", answer: "Я позвоню тебе завтра.",
        alt: ["Я тебе позвоню завтра.", "Я тебе завтра позвоню.", "Я завтра тебе позвоню.", "Я завтра позвоню тебе.", "Завтра я тебе позвоню.", "Завтра я позвоню тебе."],
        explain: "позвоню already means 'I will call' — no буду.", explainPt: "позвоню já significa 'vou ligar' — sem буду." },
      { type: "translate", prompt: "What will you do this evening?", options: ["Что ты будешь делать вечером?", "Что ты будешь делаешь вечером?", "Что ты буду делать вечером?"], answer: "Что ты будешь делать вечером?",
        explain: "будешь changes, делать stays in the infinitive.", explainPt: "будешь muda, делать fica no infinitivo." },
      { type: "listen", say: "Я приготовлю ужин.", options: ["Я приготовлю ужин.", "Я готовлю ужин.", "Я приготовила ужин."], answer: "Я приготовлю ужин.",
        explain: "приготовлю = I'll make (and finish) it.", explainPt: "приготовлю = vou fazer (e acabar)." },
      { type: "match", q: "Match the pronoun to the future of быть.", qPt: "Liga o pronome ao futuro de быть.",
        pairs: [["я", "буду"], ["ты", "будешь"], ["она", "будет"], ["мы", "будем"], ["они", "будут"]],
        explain: "буду, будешь, будет, будем, будете, будут.", explainPt: "буду, будешь, будет, будем, будете, будут." }
    ]
  },

  // ───────────────────────── 2. Verb aspect
  {
    id: "ru-aspect",
    level: 4, order: 2,
    emoji: "🎯",
    title: "Verb aspect: делать or сделать?",
    titleRu: "Вид глагола",
    intro: "Most Russian verbs come in pairs: one for the process, one for the result. Once you see the idea, it clicks.",
    introPt: "A maioria dos verbos russos vem aos pares: um para o processo, outro para o resultado. Quando percebes a ideia, fica fácil.",
    sections: [
      {
        title: "Two verbs for one action",
        titlePt: "Dois verbos para uma ação",
        text: "The imperfective is like a video: the action going on, or happening again and again. The perfective is like a photo of the result: done, finished. Often the perfective just adds a prefix.",
        textPt: "O imperfetivo é como um vídeo: a ação a decorrer, ou a repetir-se. O perfetivo é como uma foto do resultado: feito, acabado. Muitas vezes o perfetivo só junta um prefixo.",
        table: {
          head: ["Process", "Result", "Meaning"],
          rows: [
            ["делать", "сделать", "do / make"],
            ["читать", "прочитать", "read"],
            ["писать", "написать", "write"],
            ["готовить", "приготовить", "cook"],
            ["звонить", "позвонить", "call"]
          ]
        },
        examples: [
          { ru: "Я делаю ужин.", tr: "ya DYE-la-yu U-zhin", en: "I'm making dinner. (in progress)" },
          { ru: "Я сделал ужин!", tr: "ya ZDYE-lal U-zhin", en: "I've made dinner! (it's ready)" }
        ]
      },
      {
        title: "In the past",
        titlePt: "No passado",
        text: "Imperfective past: what you were doing, or used to do — like the Portuguese imperfeito 'lia'. Perfective past: what got done — like 'li'.",
        textPt: "Passado imperfetivo: o que estavas a fazer ou costumavas fazer — como o imperfeito 'lia'. Passado perfetivo: o que ficou feito — como 'li'.",
        examples: [
          { ru: "Вчера я весь вечер читал.", tr: "fchi-RA ya VES' VYE-chir chi-TAL", en: "Yesterday I was reading all evening." },
          { ru: "Я прочитал твоё письмо.", tr: "ya pra-chi-TAL tva-YO pis'-MO", en: "I've read your letter." },
          { ru: "Она написала мне сообщение.", tr: "a-NA na-pi-SA-la MNYE sa-ap-SHCHE-ni-ye", en: "She wrote me a message." },
          { ru: "Что ты делал вчера?", tr: "SHTO ty DYE-lal fchi-RA", en: "What were you doing yesterday?" }
        ]
      },
      {
        title: "In the future",
        titlePt: "No futuro",
        text: "Imperfective future: буду + infinitive (process, habit). Perfective future: just conjugate it — сделаю, напишу — for one action you'll get done.",
        textPt: "Futuro imperfetivo: буду + infinitivo (processo, hábito). Futuro perfetivo: basta conjugar — сделаю, напишу — para uma ação que vais concluir.",
        examples: [
          { ru: "Я буду писать тебе каждый день.", tr: "ya BU-du pi-SAT' ti-BYE KAZH-dy DYEN'", en: "I'll write to you every day." },
          { ru: "Я напишу тебе вечером.", tr: "ya na-pi-SHU ti-BYE VYE-chi-ram", en: "I'll text you tonight." },
          { ru: "Не волнуйся, я всё сделаю!", tr: "nye val-NUY-sya, ya FSYO ZDYE-la-yu", en: "Don't worry, I'll get it all done!" }
        ]
      }
    ],
    tip: {
      en: "Listen for clues: каждый день, всегда, долго, весь вечер → process (imperfective). уже (already) and a clear result → perfective.",
      pt: "Procura pistas: каждый день, всегда, долго, весь вечер → processo (imperfetivo). уже (já) e um resultado claro → perfetivo."
    },
    exercises: [
      { type: "choice", q: "Вчера я весь вечер ___ книгу.", options: ["читал", "прочитал", "прочитаю"], answer: "читал",
        explain: "весь вечер (all evening) = a process → imperfective.", explainPt: "весь вечер (a noite toda) = processo → imperfetivo." },
      { type: "choice", q: "Я уже ___ письмо. — I've already written the letter.", options: ["написал", "писал", "напишу"], answer: "написал",
        explain: "уже + a finished result → perfective past.", explainPt: "уже + resultado acabado → passado perfetivo." },
      { type: "choice", q: "Which form means «I'll get it done»?", options: ["сделаю", "буду сделать", "делаю"], answer: "сделаю",
        explain: "The perfective сделаю already means the future; буду never goes with it.", explainPt: "O perfetivo сделаю já significa futuro; буду nunca vai com ele." },
      { type: "gap", q: "Я ___ (написать) тебе вечером. — I'll text you tonight.", answer: ["напишу"],
        explain: "написать → напишу: perfective future.", explainPt: "написать → напишу: futuro perfetivo." },
      { type: "gap", q: "Что ты ___ (делать) вчера? — What were you doing yesterday? (to a man)", answer: ["делал"],
        explain: "A process in the past → imperfective делал.", explainPt: "Um processo no passado → imperfetivo делал." },
      { type: "order", prompt: "I've read your letter.", answer: "Я прочитал твоё письмо.",
        alt: ["Я твоё письмо прочитал.", "Твоё письмо я прочитал."],
        explain: "прочитал = read to the end.", explainPt: "прочитал = li até ao fim." },
      { type: "order", prompt: "I'll write to you every day.", answer: "Я буду писать тебе каждый день.",
        alt: ["Я буду тебе писать каждый день.", "Я каждый день буду тебе писать.", "Я каждый день буду писать тебе.", "Каждый день я буду тебе писать.", "Каждый день я буду писать тебе."],
        explain: "каждый день = a habit → буду писать.", explainPt: "каждый день = hábito → буду писать." },
      { type: "translate", prompt: "Tomorrow I'll cook dinner.", options: ["Завтра я приготовлю ужин.", "Завтра я буду приготовить ужин.", "Завтра я приготовил ужин."], answer: "Завтра я приготовлю ужин.",
        explain: "Perfective future: приготовлю, without буду.", explainPt: "Futuro perfetivo: приготовлю, sem буду." },
      { type: "listen", say: "Я всё сделаю.", options: ["Я всё сделаю.", "Я всё сделал.", "Ты всё сделал?"], answer: "Я всё сделаю.",
        explain: "сделаю = I'll do it (future); сделал = I did it.", explainPt: "сделаю = vou fazer (futuro); сделал = fiz." },
      { type: "match", q: "Match each process verb to its result partner.", qPt: "Liga cada verbo de processo ao seu par de resultado.",
        pairs: [["делать", "сделать"], ["читать", "прочитать"], ["писать", "написать"], ["готовить", "приготовить"], ["звонить", "позвонить"]],
        explain: "Same meaning, different view: process vs result.", explainPt: "Mesmo significado, outra perspetiva: processo vs resultado." }
    ]
  },

  // ───────────────────────── 3. Genitive
  {
    id: "ru-genitive",
    level: 4, order: 3,
    emoji: "🫖",
    title: "Genitive: нет времени, чашка чая",
    titleRu: "Родительный падеж",
    intro: "This case answers кого? чего? (of whom? of what?). You need it for 'I don't have', 'a cup of' and after numbers.",
    introPt: "Este caso responde a кого? чего? (de quem? de quê?). Precisas dele para 'não tenho', 'uma chávena de' e depois dos números.",
    sections: [
      {
        title: "У меня нет… — I don't have",
        titlePt: "У меня нет… — Não tenho",
        text: "To say you don't have something, есть becomes нет and the thing goes into the genitive. The same нет means 'isn't here': его нет дома.",
        textPt: "Para dizer que não tens algo, есть passa a нет e a coisa vai para o genitivo. O mesmo нет quer dizer 'não está': его нет дома.",
        table: {
          head: ["Type", "Basic", "Genitive"],
          rows: [
            ["he-word", "брат", "брата"],
            ["he-word in -й", "чай", "чая"],
            ["she-word in -а", "машина", "машины"],
            ["after к, г, х, ж, ш, ч", "собака", "собаки"],
            ["it-word in -о", "молоко", "молока"]
          ]
        },
        examples: [
          { ru: "У меня нет машины.", tr: "u mi-NYA NYET ma-SHY-ny", en: "I don't have a car." },
          { ru: "Нет времени!", tr: "NYET VRYE-mi-ni", en: "No time!" },
          { ru: "Сегодня нет молока.", tr: "si-VOD-nya NYET ma-la-KA", en: "There's no milk today." },
          { ru: "Его нет дома.", tr: "ye-VO NYET DO-ma", en: "He isn't home." }
        ]
      },
      {
        title: "'Of': чашка чая",
        titlePt: "'De': чашка чая",
        text: "Where Portuguese says 'de' — a cup of tea, my brother's car — Russian just puts the second noun in the genitive. No little word needed!",
        textPt: "Onde o português diz 'de' — uma chávena de chá, o carro do meu irmão — o russo põe simplesmente o segundo nome no genitivo. Não precisa de mais nada!",
        examples: [
          { ru: "Хочешь чашку чая?", tr: "KHO-chish' CHASH-ku CHA-ya", en: "Would you like a cup of tea?" },
          { ru: "Можно кусок торта?", tr: "MOZH-na ku-SOK TOR-ta", en: "Can I have a piece of cake?" },
          { ru: "Это квартира мамы.", tr: "E-ta kvar-TI-ra MA-my", en: "This is Mum's flat." },
          { ru: "Кого сегодня нет? — Папы.", tr: "ka-VO si-VOD-nya NYET — PA-py", en: "Who's missing today? — Dad." }
        ]
      },
      {
        title: "After numbers: два брата, пять минут",
        titlePt: "Depois dos números: два брата, пять минут",
        text: "After 1 the word stays basic. After 2, 3, 4 it takes the genitive singular. From 5 up it takes the genitive plural. Use два for he/it-words and две for she-words.",
        textPt: "Depois de 1 a palavra fica na forma base. Depois de 2, 3, 4 leva o genitivo singular. A partir de 5 leva o genitivo plural. Usa два com palavras masculinas/neutras e две com femininas.",
        table: {
          head: ["Number", "Example"],
          rows: [
            ["1", "одна минута, один брат"],
            ["2, 3, 4", "две минуты, два брата"],
            ["5 and up", "пять минут, пять братьев"]
          ]
        },
        examples: [
          { ru: "У неё два брата.", tr: "u ni-YO DVA BRA-ta", en: "She has two brothers." },
          { ru: "Подожди пять минут!", tr: "pa-dazh-DI PYAT' mi-NUT", en: "Wait five minutes!" },
          { ru: "Мы вместе пять лет.", tr: "my VMYES-tye PYAT' LYET", en: "We've been together five years." }
        ]
      }
    ],
    tip: {
      en: "With нет, both parts change: у меня есть машина → у меня нет машины. And careful: «У него нет дома» means 'He has no house', not 'He isn't home'!",
      pt: "Com нет mudam as duas partes: у меня есть машина → у меня нет машины. E cuidado: «У него нет дома» quer dizer 'Ele não tem casa', não 'Ele não está em casa'!"
    },
    exercises: [
      { type: "choice", q: "У меня нет ___.", options: ["машины", "машина", "машину"], answer: "машины",
        explain: "After нет: genitive, -а → -ы.", explainPt: "Depois de нет: genitivo, -а → -ы." },
      { type: "choice", q: "Подожди пять ___!", options: ["минут", "минуты", "минута"], answer: "минут",
        explain: "From 5 up: genitive plural, минут.", explainPt: "A partir de 5: genitivo plural, минут." },
      { type: "choice", q: "У неё два ___.", options: ["брата", "брат", "братьев"], answer: "брата",
        explain: "After 2, 3, 4: genitive singular, брата.", explainPt: "Depois de 2, 3, 4: genitivo singular, брата." },
      { type: "gap", q: "Нет ___ (время)! — No time!", answer: ["времени"],
        explain: "время is irregular: времени.", explainPt: "время é irregular: времени." },
      { type: "gap", q: "Хочешь чашку ___ (чай)? — Would you like a cup of tea?", answer: ["чая", "чаю"],
        explain: "чай → чая (чаю is also heard in speech).", explainPt: "чай → чая (também se ouve чаю na fala)." },
      { type: "order", prompt: "I don't have a car.", answer: "У меня нет машины.",
        alt: ["Машины у меня нет."],
        explain: "у меня нет + genitive.", explainPt: "у меня нет + genitivo." },
      { type: "order", prompt: "We've been together five years.", answer: "Мы вместе пять лет.",
        alt: ["Мы пять лет вместе."],
        explain: "пять + лет (genitive plural of год).", explainPt: "пять + лет (genitivo plural de год)." },
      { type: "translate", prompt: "He isn't home.", options: ["Его нет дома.", "Он нет дома.", "У него нет дома."], answer: "Его нет дома.",
        explain: "Его нет = he's not here; у него нет дома = he has no house.", explainPt: "Его нет = ele não está; у него нет дома = ele não tem casa." },
      { type: "listen", say: "Бутылку вина, пожалуйста.", options: ["Бутылку вина, пожалуйста.", "Бутылку воды, пожалуйста.", "Стакан вина, пожалуйста."], answer: "Бутылку вина, пожалуйста.",
        explain: "бутылку вина = a bottle of wine.", explainPt: "бутылку вина = uma garrafa de vinho." },
      { type: "match", q: "Match the basic form to the genitive.", qPt: "Liga a forma base ao genitivo.",
        pairs: [["брат", "брата"], ["сестра", "сестры"], ["чай", "чая"], ["молоко", "молока"], ["время", "времени"]],
        explain: "-а/-я for he- and it-words, -ы/-и for she-words.", explainPt: "-а/-я para masculinos e neutros, -ы/-и para femininos." }
    ]
  },

  // ───────────────────────── 4. Dative and liking
  {
    id: "ru-dative-likes",
    level: 4, order: 4,
    emoji: "❤️",
    title: "Dative: мне нравится",
    titleRu: "Дательный падеж",
    intro: "The dative means 'to someone'. With it you can say what you like, how you feel and how old you are.",
    introPt: "O dativo quer dizer 'a alguém'. Com ele podes dizer do que gostas, como te sentes e que idade tens.",
    sections: [
      {
        title: "To me, to you: мне, тебе",
        titlePt: "A mim, a ti: мне, тебе",
        text: "Use the dative for the person you give, call, write or say something to. Nouns: she-words in -а/-я take -е (маме), he-words take -у (брату).",
        textPt: "Usa-se o dativo para a pessoa a quem dás, ligas, escreves ou dizes algo. Nomes: femininos em -а/-я levam -е (маме), masculinos levam -у (брату).",
        table: {
          head: ["Who", "To whom"],
          rows: [
            ["я", "мне"],
            ["ты", "тебе"],
            ["он", "ему"],
            ["она", "ей"],
            ["мы", "нам"],
            ["вы", "вам"],
            ["они", "им"]
          ]
        },
        examples: [
          { ru: "Позвони мне!", tr: "pa-zva-NI MNYE", en: "Call me!" },
          { ru: "Я звоню маме каждый день.", tr: "ya zva-NYU MA-mye KAZH-dy DYEN'", en: "I call Mum every day." },
          { ru: "Дай мне, пожалуйста, соль.", tr: "DAI MNYE, pa-ZHA-lus-ta, SOL'", en: "Pass me the salt, please." },
          { ru: "Я дам тебе ключ.", tr: "ya DAM ti-BYE KLYUCH", en: "I'll give you the key." }
        ]
      },
      {
        title: "мне нравится — I like",
        titlePt: "мне нравится — Eu gosto",
        text: "Russian says 'it pleases me', just like Spanish 'me gusta'. The thing you like is the subject: нравится for one thing, нравятся for several.",
        textPt: "O russo diz 'agrada-me', tal como o espanhol 'me gusta'. A coisa de que gostas é o sujeito: нравится para uma coisa, нравятся para várias.",
        examples: [
          { ru: "Мне нравится Москва.", tr: "MNYE NRA-vit-sa mask-VA", en: "I like Moscow." },
          { ru: "Тебе нравится борщ?", tr: "ti-BYE NRA-vit-sa BORSHCH", en: "Do you like borscht?" },
          { ru: "Мне очень нравятся твои родители.", tr: "MNYE O-chin' NRA-vyat-sa tva-I ra-DI-tye-li", en: "I really like your parents." },
          { ru: "Ей нравятся цветы.", tr: "YEY NRA-vyat-sa tsvi-TY", en: "She likes flowers." }
        ]
      },
      {
        title: "мне холодно, сколько тебе лет?",
        titlePt: "мне холодно, сколько тебе лет?",
        text: "Feelings and age also use the dative: 'to me it's cold', 'to me 25 years'. Age: 1 год, 2–4 года, 5+ лет.",
        textPt: "As sensações e a idade também usam o dativo: 'a mim está frio', 'a mim 25 anos'. Idade: 1 год, 2–4 года, 5+ лет.",
        examples: [
          { ru: "Мне холодно.", tr: "MNYE KHO-lad-na", en: "I'm cold." },
          { ru: "Мне хорошо с тобой.", tr: "MNYE kha-ra-SHO s ta-BOY", en: "I feel good with you." },
          { ru: "Сколько тебе лет?", tr: "SKOL'-ka ti-BYE LYET", en: "How old are you?" },
          { ru: "Маме пятьдесят два года.", tr: "MA-mye pi-di-SYAT DVA GO-da", en: "Mum is fifty-two." }
        ]
      }
    ],
    tip: {
      en: "Don't translate word for word: «я холодно» and «я нравится» are wrong. Always start with the dative: мне холодно, мне нравится.",
      pt: "Não traduzas palavra a palavra: «я холодно» e «я нравится» estão errados. Começa sempre pelo dativo: мне холодно, мне нравится."
    },
    exercises: [
      { type: "choice", q: "___ нравится борщ.", options: ["Мне", "Я", "Меня"], answer: "Мне",
        explain: "The person who likes is in the dative: мне.", explainPt: "Quem gosta fica no dativo: мне." },
      { type: "choice", q: "Мне очень нравятся твои ___.", options: ["родители", "мама", "дом"], answer: "родители",
        explain: "нравятся is plural, so the thing liked is plural.", explainPt: "нравятся é plural, por isso a coisa de que se gosta é plural." },
      { type: "choice", q: "Сколько тебе лет? — Мне двадцать пять ___.", options: ["лет", "год", "года"], answer: "лет",
        explain: "Numbers ending in 5–9: лет.", explainPt: "Números acabados em 5–9: лет." },
      { type: "gap", q: "___ холодно. — I'm cold.", answer: ["мне"],
        explain: "Feelings use the dative: мне холодно.", explainPt: "As sensações usam o dativo: мне холодно." },
      { type: "gap", q: "Я звоню ___ (мама) каждый день. — I call Mum every day.", answer: ["маме"],
        explain: "звонить кому: мама → маме.", explainPt: "звонить кому: мама → маме." },
      { type: "order", prompt: "I really like your parents.", answer: "Мне очень нравятся твои родители.",
        alt: ["Твои родители мне очень нравятся."],
        explain: "родители is plural, so нравятся.", explainPt: "родители é plural, por isso нравятся." },
      { type: "order", prompt: "How old are you?", answer: "Сколько тебе лет?",
        explain: "Literally: how many years to you?", explainPt: "À letra: quantos anos a ti?" },
      { type: "translate", prompt: "She likes flowers.", options: ["Ей нравятся цветы.", "Она нравятся цветы.", "Ей нравится цветы.", "Её нравятся цветы."], answer: "Ей нравятся цветы.",
        explain: "она → ей (dative); цветы is plural → нравятся.", explainPt: "она → ей (dativo); цветы é plural → нравятся." },
      { type: "listen", say: "Мне холодно.", options: ["Мне холодно.", "Мне жарко.", "Мне хорошо."], answer: "Мне холодно.",
        explain: "холодно = cold, жарко = hot, хорошо = good.", explainPt: "холодно = frio, жарко = calor, хорошо = bem." },
      { type: "match", q: "Match the pronoun to its dative form.", qPt: "Liga o pronome à forma do dativo.",
        pairs: [["я", "мне"], ["ты", "тебе"], ["он", "ему"], ["она", "ей"], ["мы", "нам"]],
        explain: "мне, тебе, ему, ей, нам, вам, им.", explainPt: "мне, тебе, ему, ей, нам, вам, им." }
    ]
  },

  // ───────────────────────── 5. Instrumental
  {
    id: "ru-instrumental",
    level: 4, order: 5,
    emoji: "🤝",
    title: "Instrumental: с тобой, с мамой",
    titleRu: "Творительный падеж",
    intro: "Coffee with milk, dinner with her mum, a life with you — the instrumental is the case of 'with'.",
    introPt: "Café com leite, jantar com a mãe dela, uma vida contigo — o instrumental é o caso do 'com'.",
    sections: [
      {
        title: "с + instrumental = with",
        titlePt: "с + instrumental = com",
        text: "After с (with), pronouns take these forms. Note со мной: an extra о makes it easier to say.",
        textPt: "Depois de с (com), os pronomes tomam estas formas. Repara em со мной: um о extra torna-o mais fácil de dizer.",
        table: {
          head: ["Who", "with…"],
          rows: [
            ["я", "со мной"],
            ["ты", "с тобой"],
            ["он", "с ним"],
            ["она", "с ней"],
            ["мы", "с нами"],
            ["вы", "с вами"],
            ["они", "с ними"]
          ]
        },
        examples: [
          { ru: "Пойдёшь со мной?", tr: "pa-i-DYOSH' sa MNOY", en: "Will you come with me?" },
          { ru: "Мне хорошо с тобой.", tr: "MNYE kha-ra-SHO s ta-BOY", en: "I feel good with you." },
          { ru: "Я говорил с ним вчера.", tr: "ya ga-va-RIL s NIM fchi-RA", en: "I spoke with him yesterday." }
        ]
      },
      {
        title: "Nouns: -ом, -ой",
        titlePt: "Nomes: -ом, -ой",
        text: "He- and it-words add -ом (-ем after soft sounds). She-words in -а change to -ой, in -я to -ей. Even папа, which ends in -а, becomes с папой.",
        textPt: "Os masculinos e neutros juntam -ом (-ем depois de sons brandos). Os femininos em -а passam a -ой, em -я a -ей. Até папа, que acaba em -а, fica с папой.",
        table: {
          head: ["Word", "with…"],
          rows: [
            ["брат", "с братом"],
            ["молоко", "с молоком"],
            ["мама", "с мамой"],
            ["папа", "с папой"],
            ["сестра", "с сестрой"]
          ]
        },
        examples: [
          { ru: "Кофе с молоком, пожалуйста.", tr: "KO-fye s ma-la-KOM, pa-ZHA-lus-ta", en: "Coffee with milk, please." },
          { ru: "Чай с лимоном?", tr: "CHAI s li-MO-nam", en: "Tea with lemon?" },
          { ru: "Я говорил с её мамой.", tr: "ya ga-va-RIL s ye-YO MA-mai", en: "I was talking with her mum." },
          { ru: "Она гуляет с собакой.", tr: "a-NA gu-LYA-yet s sa-BA-kai", en: "She's walking the dog." }
        ]
      },
      {
        title: "Not only 'with': кем? чем?",
        titlePt: "Não só 'com': кем? чем?",
        text: "Your job uses the instrumental: я работаю менеджером (I work as a manager). So does интересоваться (to be interested in).",
        textPt: "A profissão usa o instrumental: я работаю менеджером (trabalho como gestor). E também интересоваться (interessar-se por).",
        examples: [
          { ru: "Кем ты работаешь?", tr: "KYEM ty ra-BO-ta-yesh", en: "What do you do for a living?" },
          { ru: "Я работаю менеджером.", tr: "ya ra-BO-ta-yu MYE-nid-zhi-ram", en: "I work as a manager." },
          { ru: "Она работает врачом.", tr: "a-NA ra-BO-ta-yet vra-CHOM", en: "She works as a doctor." },
          { ru: "Чем ты интересуешься?", tr: "CHEM ty in-tye-ri-SU-yesh'-sya", en: "What are you interested in?" },
          { ru: "Я интересуюсь музыкой.", tr: "ya in-tye-ri-SU-yus' MU-zy-kai", en: "I'm into music." }
        ]
      }
    ],
    tip: {
      en: "Don't copy the Portuguese 'como': «я работаю как менеджер» sounds foreign. Russians just say я работаю менеджером.",
      pt: "Não copies o 'como' português: «я работаю как менеджер» soa estrangeiro. Os russos dizem simplesmente я работаю менеджером."
    },
    exercises: [
      { type: "choice", q: "Кофе с ___, пожалуйста.", options: ["молоком", "молоко", "молока"], answer: "молоком",
        explain: "с + instrumental: молоко → молоком.", explainPt: "с + instrumental: молоко → молоком." },
      { type: "choice", q: "Пойдёшь ___ мной? — Will you come with me?", options: ["со", "с", "у"], answer: "со",
        explain: "Before мной, с becomes со.", explainPt: "Antes de мной, с passa a со." },
      { type: "choice", q: "Кем ты работаешь? — Я работаю ___.", options: ["менеджером", "менеджер", "менеджера"], answer: "менеджером",
        explain: "работать кем → instrumental.", explainPt: "работать кем → instrumental." },
      { type: "gap", q: "Я говорил с ___ (мама). — I was talking with Mum.", answer: ["мамой"],
        explain: "мама → мамой.", explainPt: "мама → мамой." },
      { type: "gap", q: "Мне хорошо с ___ (ты). — I feel good with you.", answer: ["тобой"],
        explain: "ты → с тобой.", explainPt: "ты → с тобой." },
      { type: "order", prompt: "I was talking with her mum.", answer: "Я говорил с её мамой.",
        alt: ["Я с её мамой говорил."],
        explain: "её never changes; мама → мамой.", explainPt: "её nunca muda; мама → мамой." },
      { type: "order", prompt: "What are you interested in?", answer: "Чем ты интересуешься?",
        alt: ["Ты чем интересуешься?"],
        explain: "интересоваться чем → instrumental question word чем.", explainPt: "интересоваться чем → pergunta no instrumental чем." },
      { type: "translate", prompt: "I work as a manager.", options: ["Я работаю менеджером.", "Я работаю менеджер.", "Я работаю менеджера."], answer: "Я работаю менеджером.",
        explain: "Jobs after работать take -ом.", explainPt: "As profissões depois de работать levam -ом." },
      { type: "listen", say: "Чай с лимоном, пожалуйста.", options: ["Чай с лимоном, пожалуйста.", "Чай с молоком, пожалуйста.", "Кофе с лимоном, пожалуйста."], answer: "Чай с лимоном, пожалуйста.",
        explain: "с лимоном = with lemon.", explainPt: "с лимоном = com limão." },
      { type: "match", q: "Match the pronoun to 'with…'.", qPt: "Liga o pronome a 'com…'.",
        pairs: [["я", "со мной"], ["ты", "с тобой"], ["он", "с ним"], ["она", "с ней"], ["мы", "с нами"]],
        explain: "со мной, с тобой, с ним, с ней, с нами, с вами, с ними.", explainPt: "со мной, с тобой, с ним, с ней, с нами, с вами, с ними." }
    ]
  },

  // ───────────────────────── 6. Verbs of motion
  {
    id: "ru-motion",
    level: 4, order: 6,
    emoji: "🚶",
    title: "Going places: идти, ехать",
    titleRu: "Глаголы движения",
    intro: "Russian has different verbs for 'go': on foot or by transport, right now or regularly. Four verbs, one simple logic.",
    introPt: "O russo tem verbos diferentes para 'ir': a pé ou de transporte, agora ou com frequência. Quatro verbos, uma lógica simples.",
    sections: [
      {
        title: "On foot or by transport?",
        titlePt: "A pé ou de transporte?",
        text: "идти/ходить are for walking; ехать/ездить for going by car, bus, train or plane. Then: идти/ехать = now, in one direction; ходить/ездить = regularly, there and back.",
        textPt: "идти/ходить são para ir a pé; ехать/ездить para ir de carro, autocarro, comboio ou avião. Depois: идти/ехать = agora, numa direção; ходить/ездить = com frequência, ida e volta.",
        table: {
          head: ["", "On foot", "By transport"],
          rows: [
            ["now, one way", "идти", "ехать"],
            ["habit, round trips", "ходить", "ездить"]
          ]
        },
        examples: [
          { ru: "Я иду домой.", tr: "ya i-DU da-MOY", en: "I'm walking home. (now)" },
          { ru: "Я хожу в спортзал каждый день.", tr: "ya kha-ZHU f spart-ZAL KAZH-dy DYEN'", en: "I go to the gym every day." },
          { ru: "Мы едем в Москву!", tr: "my YE-dim v mask-VU", en: "We're going to Moscow!" },
          { ru: "Она ездит на работу на автобусе.", tr: "a-NA YEZ-dit na ra-BO-tu na af-TO-bu-sye", en: "She goes to work by bus." }
        ]
      },
      {
        title: "The forms",
        titlePt: "As formas",
        text: "Learn them as a set. In the past, ходили/ездили means 'went and came back': вчера мы ходили в кино.",
        textPt: "Aprende-as em conjunto. No passado, ходили/ездили quer dizer 'fomos e voltámos': вчера мы ходили в кино.",
        table: {
          head: ["Who", "идти", "ходить", "ехать", "ездить"],
          rows: [
            ["я", "иду", "хожу", "еду", "езжу"],
            ["ты", "идёшь", "ходишь", "едешь", "ездишь"],
            ["он / она", "идёт", "ходит", "едет", "ездит"],
            ["мы", "идём", "ходим", "едем", "ездим"],
            ["они", "идут", "ходят", "едут", "ездят"]
          ]
        },
        examples: [
          { ru: "Вчера мы ходили в кино.", tr: "fchi-RA my kha-DI-li f ki-NO", en: "Yesterday we went to the cinema." },
          { ru: "Летом мы ездим к её родителям.", tr: "LYE-tam my YEZ-dim k ye-YO ra-DI-tye-lyam", en: "In summer we visit her parents." }
        ]
      },
      {
        title: "Куда? — where to?",
        titlePt: "Куда? — para onde?",
        text: "где? = where (at), with the prepositional: в Москве. куда? = where to, with the accusative: в Москву, на работу. And 'home' has two forms: дома (at home), домой (to home).",
        textPt: "где? = onde (estar), com o preposicional: в Москве. куда? = para onde, com o acusativo: в Москву, на работу. E 'casa' tem duas formas: дома (em casa), домой (para casa).",
        examples: [
          { ru: "Куда ты идёшь?", tr: "ku-DA ty i-DYOSH'", en: "Where are you going?" },
          { ru: "Я иду в магазин.", tr: "ya i-DU v ma-ga-ZIN", en: "I'm going to the shop." },
          { ru: "Мы идём на концерт.", tr: "my i-DYOM na kan-TSERT", en: "We're going to a concert." }
        ]
      }
    ],
    tip: {
      en: "Don't mix где and куда: «Где ты идёшь?» is wrong — with a motion verb always ask Куда? And say я иду домой, never «я иду дома».",
      pt: "Não confundas где e куда: «Где ты идёшь?» está errado — com verbos de movimento pergunta-se sempre Куда? E diz я иду домой, nunca «я иду дома»."
    },
    exercises: [
      { type: "choice", q: "Сейчас я ___ домой. (on foot, right now)", options: ["иду", "хожу", "еду"], answer: "иду",
        explain: "On foot + now → идти: иду.", explainPt: "A pé + agora → идти: иду." },
      { type: "choice", q: "Каждый день она ___ на работу на автобусе.", options: ["ездит", "едет", "ходит"], answer: "ездит",
        explain: "By bus + every day → ездить: ездит.", explainPt: "De autocarro + todos os dias → ездить: ездит." },
      { type: "choice", q: "___ ты идёшь? — В магазин.", options: ["Куда", "Где", "Когда"], answer: "Куда",
        explain: "Direction → куда?", explainPt: "Direção → куда?" },
      { type: "gap", q: "Мы ___ (ехать) в Москву! — We're going to Moscow!", answer: ["едем"],
        explain: "ехать → мы едем.", explainPt: "ехать → мы едем." },
      { type: "gap", q: "Я иду на ___ (работа). — I'm going to work.", answer: ["работу"],
        explain: "куда? → accusative: работа → работу.", explainPt: "куда? → acusativo: работа → работу." },
      { type: "order", prompt: "Where are you going?", answer: "Куда ты идёшь?",
        alt: ["Ты куда идёшь?"],
        explain: "куда + идёшь (on foot, now).", explainPt: "куда + идёшь (a pé, agora)." },
      { type: "order", prompt: "Yesterday we went to the cinema.", answer: "Вчера мы ходили в кино.",
        alt: ["Мы вчера ходили в кино.", "Вчера мы в кино ходили."],
        explain: "ходили = went and came back.", explainPt: "ходили = fomos e voltámos." },
      { type: "translate", prompt: "I'm walking home. (now)", options: ["Я иду домой.", "Я иду дома.", "Я хожу домой."], answer: "Я иду домой.",
        explain: "Now → иду; direction → домой.", explainPt: "Agora → иду; direção → домой." },
      { type: "listen", say: "Мы едем на работу.", options: ["Мы едем на работу.", "Мы идём на работу.", "Мы ездим на работу."], answer: "Мы едем на работу.",
        explain: "едем = we're going (by transport, now).", explainPt: "едем = vamos (de transporte, agora)." },
      { type: "match", q: "Match the verb to its meaning.", qPt: "Liga o verbo ao significado.",
        pairs: [["идти", "go on foot, now"], ["ходить", "go on foot, regularly"], ["ехать", "go by transport, now"], ["ездить", "go by transport, regularly"], ["домой", "(to) home"]],
        explain: "Two questions: on foot or not? Now or regularly?", explainPt: "Duas perguntas: a pé ou não? Agora ou com frequência?" }
    ]
  },

  // ───────────────────────── 7. Talking with the people you love
  {
    id: "ru-sweet-talk",
    level: 4, order: 7,
    emoji: "💐",
    title: "Talking with the people you love",
    titleRu: "Слова любви",
    intro: "Sweet words for her, warm and polite words for her parents, and a toast at the table. This is the Russian that matters most!",
    introPt: "Palavras doces para ela, palavras calorosas e educadas para os pais dela, e um brinde à mesa. Este é o russo que mais importa!",
    sections: [
      {
        title: "Compliments",
        titlePt: "Elogios",
        text: "When you talk to her, adjectives take the feminine form: красивая, любимая. A compliment on the food is always welcome!",
        textPt: "Quando falas com ela, os adjetivos vão no feminino: красивая, любимая. Um elogio à comida é sempre bem-vindo!",
        examples: [
          { ru: "Ты такая красивая!", tr: "ty ta-KA-ya kra-SI-va-ya", en: "You're so beautiful!" },
          { ru: "Ты сегодня прекрасно выглядишь.", tr: "ty si-VOD-nya pri-KRAS-na VY-glya-dish'", en: "You look wonderful today." },
          { ru: "Как вкусно! Ты отлично готовишь.", tr: "KAK FKUS-na! ty at-LICH-na ga-TO-vish'", en: "So tasty! You're a great cook." },
          { ru: "Я так по тебе скучаю.", tr: "ya TAK pa ti-BYE sku-CHA-yu", en: "I miss you so much." }
        ]
      },
      {
        title: "Sweet names",
        titlePt: "Nomes carinhosos",
        text: "Russians love little pet names. To her you say любимая, милая, дорогая; she says любимый, милый, дорогой to you. солнышко and зайка work for both.",
        textPt: "Os russos adoram nomes carinhosos. A ela dizes любимая, милая, дорогая; ela diz-te любимый, милый, дорогой. солнышко e зайка servem para os dois.",
        table: {
          head: ["Word", "Literally"],
          rows: [
            ["солнышко", "little sun"],
            ["зайка", "little bunny"],
            ["любимая / любимый", "beloved (her / him)"],
            ["милая / милый", "dear (her / him)"],
            ["дорогая / дорогой", "darling (her / him)"]
          ]
        },
        examples: [
          { ru: "Доброе утро, солнышко!", tr: "DOB-ra-ye U-tra, SOL-nysh-ka", en: "Good morning, sunshine!" },
          { ru: "Спокойной ночи, зайка.", tr: "spa-KOY-nai NO-chi, ZAI-ka", en: "Goodnight, bunny." },
          { ru: "Я люблю тебя, любимая.", tr: "ya lyub-LYU ti-BYA, lyu-BI-ma-ya", en: "I love you, my love." }
        ]
      },
      {
        title: "Позвони! Приходи! Давай…",
        titlePt: "Позвони! Приходи! Давай…",
        text: "The ты-imperative often ends in -и: позвони (call!), приходи (come over!). To one older person or to several, add -те: позвоните. давай + 'we' form = 'let's'.",
        textPt: "O imperativo de ты acaba muitas vezes em -и: позвони (liga!), приходи (vem cá!). A uma pessoa mais velha ou a várias, junta-se -те: позвоните. давай + forma de 'nós' = 'vamos…'.",
        examples: [
          { ru: "Позвони мне, когда будешь дома.", tr: "pa-zva-NI MNYE, kag-DA BU-dish' DO-ma", en: "Call me when you're home." },
          { ru: "Приходи скорее!", tr: "pri-kha-DI ska-RYE-ye", en: "Come over soon!" },
          { ru: "Давай посмотрим фильм!", tr: "da-VAI pa-SMOT-rim FIL'M", en: "Let's watch a film!" },
          { ru: "Не волнуйся!", tr: "nye val-NUY-sya", en: "Don't worry!" }
        ]
      },
      {
        title: "Her parents and the table",
        titlePt: "Os pais dela e a mesa",
        text: "With her parents, use вы until they invite you to switch to ты («давай на ты»). And at the table, every glass comes with a toast: за + accusative.",
        textPt: "Com os pais dela, usa вы até te convidarem a passar ao ты («давай на ты»). E à mesa, cada copo vem com um brinde: за + acusativo.",
        examples: [
          { ru: "Очень приятно с вами познакомиться!", tr: "O-chin' pri-YAT-na s VA-mi paz-na-KO-mit'-sa", en: "Very nice to meet you!" },
          { ru: "Вы так вкусно готовите!", tr: "VY TAK FKUS-na ga-TO-vi-tye", en: "You cook so well!" },
          { ru: "За здоровье!", tr: "za zda-RO-v'ye", en: "To your health!" },
          { ru: "За вас!", tr: "za VAS", en: "To you! (to the hosts)" },
          { ru: "За любовь!", tr: "za lyu-BOF'", en: "To love!" }
        ]
      }
    ],
    tip: {
      en: "Speaking to her, always use the feminine: любимая, моя дорогая. «Любимый» is what she calls you! And with her mum: вы готовите, not ты готовишь.",
      pt: "Quando falas com ela, usa sempre o feminino: любимая, моя дорогая. «Любимый» é o que ela te chama a ti! E com a mãe dela: вы готовите, não ты готовишь."
    },
    exercises: [
      { type: "choice", q: "To your partner: «Доброе утро, ___!»", options: ["любимая", "любимый", "любимые"], answer: "любимая",
        explain: "Speaking to a woman: feminine любимая.", explainPt: "A falar com uma mulher: feminino любимая." },
      { type: "choice", q: "To her mother at dinner: «___ так вкусно готовите!»", options: ["Вы", "Ты", "Она"], answer: "Вы",
        explain: "Polite вы with her parents, and готовите matches вы.", explainPt: "вы de cortesia com os pais dela, e готовите concorda com вы." },
      { type: "choice", q: "What does «За здоровье!» mean?", options: ["To your health!", "Enjoy your meal!", "Goodnight!"], answer: "To your health!",
        explain: "за + здоровье = to (your) health.", explainPt: "за + здоровье = à (vossa) saúde." },
      { type: "gap", q: "___ мне вечером! (позвонить) — Call me tonight!", answer: ["позвони"],
        explain: "позвонить → позвони (to ты).", explainPt: "позвонить → позвони (para ты)." },
      { type: "gap", q: "___ посмотрим фильм! — Let's watch a film!", answer: ["давай"],
        explain: "давай + 'we' form = let's.", explainPt: "давай + forma de 'nós' = vamos." },
      { type: "order", prompt: "You're so beautiful!", answer: "Ты такая красивая!",
        explain: "такая (so) agrees with красивая — both feminine.", explainPt: "такая (tão) concorda com красивая — ambas no feminino." },
      { type: "order", prompt: "Very nice to meet you! (polite)", answer: "Очень приятно с вами познакомиться!",
        alt: ["Очень приятно познакомиться с вами!", "С вами очень приятно познакомиться!"],
        explain: "с вами = with you (polite).", explainPt: "с вами = consigo / convosco (formal)." },
      { type: "translate", prompt: "I miss you so much.", options: ["Я так по тебе скучаю.", "Я так скучаю тебя.", "Я так тебе скучаю."], answer: "Я так по тебе скучаю.",
        explain: "скучать по + dative: по тебе.", explainPt: "скучать по + dativo: по тебе." },
      { type: "listen", say: "Спокойной ночи, солнышко.", options: ["Спокойной ночи, солнышко.", "Доброе утро, солнышко.", "Спокойной ночи, зайка."], answer: "Спокойной ночи, солнышко.",
        explain: "Спокойной ночи = goodnight; солнышко = sunshine.", explainPt: "Спокойной ночи = boa noite; солнышко = solzinho." },
      { type: "match", q: "Match the word to its meaning.", qPt: "Liga a palavra ao significado.",
        pairs: [["солнышко", "sunshine"], ["зайка", "bunny"], ["любимая", "my love (to her)"], ["за здоровье", "to your health"], ["приходи", "come over!"]],
        explain: "Warm words for home and for the table.", explainPt: "Palavras carinhosas para casa e para a mesa." }
    ]
  }

]);
