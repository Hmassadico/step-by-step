// English tenses reference for Russian speakers.
window.TENSES = [
  {
    id: "present-simple", name: "Present Simple", nameRu: "Настоящее простое", group: "present", timeline: "habit",
    forms: { pos: "I work / she works", neg: "I don't work / she doesn't work", q: "Do you work? / Does she work?" },
    use: "Habits, routines, facts and things that are always true.",
    useRu: "Привычки, распорядок, факты и то, что верно всегда.",
    signals: ["every day", "usually", "always", "often", "never", "on Mondays"],
    examples: [
      { en: "She works in a hospital.", ru: "Она работает в больнице." },
      { en: "I don't drink coffee in the evening.", ru: "Я не пью кофе вечером." },
      { en: "Water boils at 100 degrees.", ru: "Вода кипит при 100 градусах." }
    ],
    ruNote: "Не забывайте -s у he/she/it и вспомогательный do/does в вопросах и отрицаниях.",
    lesson: "present-simple"
  },
  {
    id: "present-continuous", name: "Present Continuous", nameRu: "Настоящее длительное", group: "present", timeline: "now",
    forms: { pos: "I'm working / she's working", neg: "I'm not working / she isn't working", q: "Are you working? / Is she working?" },
    use: "Actions happening now or around now, temporary situations, and fixed future plans.",
    useRu: "Действия прямо сейчас или в этот период, временные ситуации и договорённые планы.",
    signals: ["now", "right now", "at the moment", "today", "this week", "Look!"],
    examples: [
      { en: "I'm cooking dinner right now.", ru: "Я сейчас готовлю ужин." },
      { en: "She's staying with her sister this week.", ru: "На этой неделе она живёт у сестры." },
      { en: "We're meeting Tom on Friday.", ru: "Мы встречаемся с Томом в пятницу." }
    ],
    ruNote: "В русском одно настоящее время; в английском «сейчас» и «обычно» — разные формы.",
    lesson: "present-continuous"
  },
  {
    id: "present-perfect", name: "Present Perfect", nameRu: "Настоящее совершённое", group: "present", timeline: "up-to-now",
    forms: { pos: "I've finished / she's finished", neg: "I haven't finished / she hasn't finished", q: "Have you finished? / Has she finished?" },
    use: "Past actions with a result now, life experience, and situations that started in the past and continue.",
    useRu: "Прошлые действия с результатом сейчас, жизненный опыт и ситуации, которые начались в прошлом и продолжаются.",
    signals: ["just", "already", "yet", "ever", "never", "since", "for", "so far"],
    examples: [
      { en: "I've lost my keys.", ru: "Я потерял ключи (и сейчас их нет)." },
      { en: "Have you ever been to Scotland?", ru: "Ты когда-нибудь был в Шотландии?" },
      { en: "We've lived in Liverpool for two years.", ru: "Мы живём в Ливерпуле два года." }
    ],
    ruNote: "«Я живу здесь два года» — по-английски не Present Simple, а I've lived here for two years.",
    lesson: "present-perfect"
  },
  {
    id: "present-perfect-continuous", name: "Present Perfect Continuous", nameRu: "Настоящее совершённое длительное", group: "present", timeline: "up-to-now-continuous",
    forms: { pos: "I've been working / she's been working", neg: "I haven't been working / she hasn't been working", q: "Have you been working? / Has she been working?" },
    use: "An activity that started in the past and is still going on, or has just stopped with a visible result; stresses duration.",
    useRu: "Действие началось в прошлом и всё ещё идёт или только что закончилось с видимым результатом; важна длительность.",
    signals: ["for", "since", "how long", "all day", "lately", "recently"],
    examples: [
      { en: "I've been waiting for an hour.", ru: "Я жду уже час." },
      { en: "How long have you been learning English?", ru: "Как долго ты учишь английский?" },
      { en: "It's been raining all morning.", ru: "Всё утро идёт дождь." }
    ],
    ruNote: "Русское «я жду уже час» (настоящее время) = I've been waiting for an hour.",
    lesson: "present-perfect-continuous"
  },
  {
    id: "past-simple", name: "Past Simple", nameRu: "Прошедшее простое", group: "past", timeline: "point",
    forms: { pos: "I worked / I went", neg: "I didn't work / I didn't go", q: "Did you work? / Did you go?" },
    use: "Finished actions at a definite time in the past.",
    useRu: "Завершённые действия в определённое время в прошлом.",
    signals: ["yesterday", "last week", "ago", "in 2020", "when I was a child"],
    examples: [
      { en: "I saw her yesterday.", ru: "Я видел её вчера." },
      { en: "We didn't go out last night.", ru: "Мы вчера вечером никуда не ходили." },
      { en: "When did you move to the UK?", ru: "Когда ты переехал в Великобританию?" }
    ],
    ruNote: "После did глагол стоит в начальной форме: Did you go? (не Did you went?).",
    lesson: "past-simple"
  },
  {
    id: "past-continuous", name: "Past Continuous", nameRu: "Прошедшее длительное", group: "past", timeline: "past-progress",
    forms: { pos: "I was working / they were working", neg: "I wasn't working / they weren't working", q: "Were you working? / Was she working?" },
    use: "An action in progress at a moment in the past, often interrupted by a shorter action.",
    useRu: "Действие, которое шло в определённый момент в прошлом, часто прерванное другим действием.",
    signals: ["while", "when", "at 8 o'clock yesterday", "all evening"],
    examples: [
      { en: "I was having a shower when the phone rang.", ru: "Я принимал душ, когда зазвонил телефон." },
      { en: "At 9 pm we were watching a film.", ru: "В 9 вечера мы смотрели фильм." }
    ],
    ruNote: "Похоже на несовершенный вид («делал»), а Past Simple — часто на совершенный («сделал»).",
    lesson: "past-continuous"
  },
  {
    id: "past-perfect", name: "Past Perfect", nameRu: "Прошедшее совершённое", group: "past", timeline: "before-point",
    forms: { pos: "I had finished / I'd finished", neg: "I hadn't finished", q: "Had you finished?" },
    use: "An action that happened before another moment or action in the past.",
    useRu: "Действие, которое произошло раньше другого момента или действия в прошлом.",
    signals: ["already", "by the time", "before", "after", "when"],
    examples: [
      { en: "When we arrived, the film had already started.", ru: "Когда мы пришли, фильм уже начался." },
      { en: "I hadn't seen the sea before I was ten.", ru: "До десяти лет я ни разу не видел моря." }
    ],
    ruNote: "В русском нет «предпрошедшего» времени — порядок действий в английском показывает форма had + V3.",
    lesson: "past-perfect"
  },
  {
    id: "past-perfect-continuous", name: "Past Perfect Continuous", nameRu: "Прошедшее совершённое длительное", group: "past", timeline: "past-before-progress",
    forms: { pos: "I had been working / I'd been working", neg: "I hadn't been working", q: "Had you been working?" },
    use: "An activity that had been going on for some time before a moment in the past.",
    useRu: "Действие, которое длилось какое-то время до определённого момента в прошлом.",
    signals: ["for", "since", "how long", "by the time", "before"],
    examples: [
      { en: "I had been waiting for an hour when the bus finally came.", ru: "Я ждал уже час, когда наконец пришёл автобус." },
      { en: "She was tired because she had been working all day.", ru: "Она устала, потому что работала весь день." }
    ],
    ruNote: "Русское «я ждал уже час, когда…» передаётся формой had been + -ing."
  },
  {
    id: "future-simple", name: "Future Simple (will)", nameRu: "Будущее простое (will)", group: "future", timeline: "future-point",
    forms: { pos: "I'll help / she'll help", neg: "I won't help / she won't help", q: "Will you help?" },
    use: "Decisions made at the moment of speaking, predictions, promises and offers.",
    useRu: "Решения в момент речи, предсказания, обещания и предложения помощи.",
    signals: ["tomorrow", "next year", "I think", "probably", "I'm sure", "soon"],
    examples: [
      { en: "It's cold. I'll close the window.", ru: "Холодно. Я закрою окно." },
      { en: "I think it will rain tomorrow.", ru: "Думаю, завтра будет дождь." },
      { en: "I won't tell anyone, I promise.", ru: "Я никому не скажу, обещаю." }
    ],
    ruNote: "После when/if о будущем ставим Present Simple: when I get home (не when I will get).",
    lesson: "future"
  },
  {
    id: "be-going-to", name: "Be going to", nameRu: "Конструкция be going to", group: "future", timeline: "future-point",
    forms: { pos: "I'm going to work / she's going to work", neg: "I'm not going to work / she isn't going to work", q: "Are you going to work? / Is she going to work?" },
    use: "Plans and intentions decided before speaking, and predictions based on what we can see now.",
    useRu: "Планы и намерения, решённые заранее, и прогнозы по тому, что видно сейчас.",
    signals: ["tomorrow", "next week", "this weekend", "Look at those clouds!"],
    examples: [
      { en: "We're going to buy a car next year.", ru: "В следующем году мы собираемся купить машину." },
      { en: "Look at those clouds — it's going to rain.", ru: "Посмотри на тучи — сейчас пойдёт дождь." }
    ],
    ruNote: "Близко к русскому «собираюсь»; will — решение сейчас, going to — уже решено.",
    lesson: "future"
  },
  {
    id: "future-continuous", name: "Future Continuous", nameRu: "Будущее длительное", group: "future", timeline: "future-progress",
    forms: { pos: "I'll be working", neg: "I won't be working", q: "Will you be working?" },
    use: "An action that will be in progress at a moment in the future.",
    useRu: "Действие, которое будет идти в определённый момент в будущем.",
    signals: ["this time tomorrow", "at 8 pm tonight", "all day tomorrow", "next week at this time"],
    examples: [
      { en: "This time tomorrow I'll be flying to Moscow.", ru: "Завтра в это время я буду лететь в Москву." },
      { en: "Don't call at 7 — we'll be having dinner.", ru: "Не звони в 7 — мы будем ужинать." }
    ],
    ruNote: "Похоже на русское «буду делать» (несовершенный вид) в конкретный момент.",
    lesson: "future-continuous-perfect"
  },
  {
    id: "future-perfect", name: "Future Perfect", nameRu: "Будущее совершённое", group: "future", timeline: "future-before",
    forms: { pos: "I'll have finished", neg: "I won't have finished", q: "Will you have finished?" },
    use: "An action that will be completed before a moment in the future.",
    useRu: "Действие, которое будет завершено к определённому моменту в будущем.",
    signals: ["by tomorrow", "by the time", "by 2030", "by the end of the month"],
    examples: [
      { en: "I'll have finished the report by Friday.", ru: "Я закончу отчёт к пятнице." },
      { en: "By the time you arrive, we'll have eaten.", ru: "К твоему приходу мы уже поедим." }
    ],
    ruNote: "Русское «сделаю к …» (совершенный вид + «к») часто = will have + V3.",
    lesson: "future-continuous-perfect"
  }
];
