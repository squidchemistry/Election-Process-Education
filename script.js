// Election Process Education – Application Logic

(function () {
  "use strict";

  // =============================================
  // Quiz Questions
  // =============================================
  const quizQuestions = [
    {
      question: "On what day are U.S. federal general elections held?",
      options: [
        "The first Monday of November",
        "The first Tuesday after the first Monday in November",
        "November 1st every year",
        "The last Tuesday of October",
      ],
      correct: 1,
      explanation:
        "Federal elections are held on the first Tuesday after the first Monday in November. This has been federal law since 1845.",
    },
    {
      question: "How many Electoral College votes are needed to win the U.S. presidency?",
      options: ["218", "270", "300", "535"],
      correct: 1,
      explanation:
        "There are 538 total Electoral College votes. A candidate needs a majority — 270 — to win the presidency.",
    },
    {
      question: "What is the minimum voting age in the United States?",
      options: ["16", "17", "18", "21"],
      correct: 2,
      explanation:
        "The 26th Amendment (1971) lowered the voting age to 18. You must be 18 on or before Election Day to vote.",
    },
    {
      question: "What is a primary election?",
      options: [
        "The final election where citizens choose the president",
        "An election where political parties choose their candidates",
        "An election held only in primary (most important) states",
        "A test election with no real consequences",
      ],
      correct: 1,
      explanation:
        "A primary election is held before the general election so that a political party can choose its nominee to run in the general election.",
    },
    {
      question: "Which of the following allows you to vote before Election Day by mail?",
      options: ["Provisional voting", "Absentee/mail-in voting", "Ranked-choice voting", "Same-day registration"],
      correct: 1,
      explanation:
        "Absentee or mail-in voting allows registered voters to cast a ballot by mail before Election Day. Some states conduct all elections by mail.",
    },
    {
      question: "What does the Voting Rights Act of 1965 primarily protect against?",
      options: [
        "Voter fraud",
        "Foreign interference in elections",
        "Discriminatory voting practices based on race",
        "Corporations donating to campaigns",
      ],
      correct: 2,
      explanation:
        "The Voting Rights Act of 1965 prohibits discriminatory voting practices, particularly those targeting racial minorities. It was a landmark achievement of the Civil Rights Movement.",
    },
    {
      question: "What is a provisional ballot?",
      options: [
        "A temporary ballot used during technical failures",
        "A ballot cast when a voter's eligibility is in question",
        "A ballot used only in primaries",
        "An early voting ballot",
      ],
      correct: 1,
      explanation:
        "A provisional ballot is used when there's a question about a voter's eligibility. It is set aside and counted after officials verify the voter's eligibility.",
    },
    {
      question: "How often is the U.S. Census conducted?",
      options: ["Every 2 years", "Every 5 years", "Every 10 years", "Every 20 years"],
      correct: 2,
      explanation:
        "The U.S. Census is mandated by the Constitution and conducted every 10 years. It determines Congressional apportionment and drives redistricting.",
    },
    {
      question: "What is gerrymandering?",
      options: [
        "A form of voter fraud",
        "Drawing electoral district boundaries to favor one party",
        "A type of primary election system",
        "A process for auditing election results",
      ],
      correct: 1,
      explanation:
        "Gerrymandering is the manipulation of electoral district boundaries to benefit a particular political party or group. The term comes from Massachusetts Governor Elbridge Gerry.",
    },
    {
      question: "On what date is the U.S. Presidential Inauguration held?",
      options: ["January 1", "January 6", "January 20", "February 1"],
      correct: 2,
      explanation:
        "The Presidential Inauguration takes place on January 20 (or January 21 if the 20th falls on a Sunday). The President-elect is sworn in on this day.",
    },
    {
      question: "What type of election fills a vacant congressional seat mid-term?",
      options: ["Primary election", "Runoff election", "Special election", "By-election"],
      correct: 2,
      explanation:
        "A special election is held to fill a congressional or other government seat that becomes vacant before the regular election cycle.",
    },
    {
      question:
        "In a 'closed primary' election, who is allowed to vote?",
      options: [
        "Any registered voter",
        "Only registered members of that political party",
        "All citizens regardless of registration",
        "Only first-time voters",
      ],
      correct: 1,
      explanation:
        "In a closed primary, only voters who are registered members of a political party can vote in that party's primary election to choose its nominee.",
    },
  ];

  // =============================================
  // State
  // =============================================
  let quizState = {
    active: false,
    currentIndex: 0,
    score: 0,
    answered: false,
    questions: [],
  };

  let currentTimelineType = "presidential";

  // =============================================
  // DOM Helpers
  // =============================================
  function $(selector, context) {
    return (context || document).querySelector(selector);
  }

  function $$(selector, context) {
    return Array.from((context || document).querySelectorAll(selector));
  }

  function createElement(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") el.className = v;
        else if (k === "innerHTML") el.innerHTML = v;
        else if (k === "textContent") el.textContent = v;
        else if (k.startsWith("data-")) el.setAttribute(k, v);
        else el[k] = v;
      });
    }
    children.flat().forEach((child) => {
      if (child == null) return;
      if (typeof child === "string") el.appendChild(document.createTextNode(child));
      else el.appendChild(child);
    });
    return el;
  }

  // =============================================
  // Tab Navigation
  // =============================================
  function initTabs() {
    const tabs = $$(".nav-tab");
    const panels = $$(".tab-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        const panel = document.getElementById(`panel-${target}`);
        if (panel) panel.classList.add("active");

        if (target === "timeline") renderTimeline(currentTimelineType);
        if (target === "guide") renderGuide();
        if (target === "quiz") renderQuizIntro();
        if (target === "resources") renderResources();
      });
    });
  }

  // =============================================
  // Chat Assistant
  // =============================================
  function initChat() {
    const input = $("#chat-input");
    const form = $("#chat-form");
    const topicBtns = $$(".topic-btn");

    topicBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const query = btn.dataset.query;
        if (query) processUserMessage(query);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      adjustTextarea(input);
      processUserMessage(text);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        form.dispatchEvent(new Event("submit"));
      }
    });

    input.addEventListener("input", () => adjustTextarea(input));

    // Welcome message
    addBotMessage(
      "👋 **Welcome to the Election Process Education Assistant!**\n\nI'm here to help you understand how elections work — from registering to vote to how the Electoral College functions.\n\nYou can **ask me any question** about the election process, or click one of the **Quick Topics** on the left to get started.",
      ["How do I register to vote?", "What happens on Election Day?", "How does the Electoral College work?"]
    );
  }

  function adjustTextarea(el) {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }

  function processUserMessage(text) {
    addUserMessage(text);
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const response = findResponse(text);
      addBotMessage(response.answer, response.follow_up || []);
    }, 600 + Math.random() * 400);
  }

  function findResponse(query) {
    const normalized = query.toLowerCase().replace(/[?!.,]/g, "").trim();
    const faq = electionData.faq;

    // Exact match
    if (faq[normalized]) return faq[normalized];

    // Keyword matching - score each FAQ entry
    let bestMatch = null;
    let bestScore = 0;

    const queryWords = new Set(normalized.split(/\s+/).filter((w) => w.length > 2));

    Object.entries(faq).forEach(([key, value]) => {
      const keyWords = key.split(/\s+/);
      let score = 0;

      // Check for key phrase containment
      if (normalized.includes(key)) score += 10;
      if (key.includes(normalized)) score += 8;

      // Word overlap
      keyWords.forEach((word) => {
        if (queryWords.has(word)) score += 2;
        if (normalized.includes(word)) score += 1;
      });

      // Specific keyword boosts
      const boosts = [
        { keywords: ["register", "registration"], key: "how do i register to vote" },
        { keywords: ["electoral college", "electoral vote"], key: "how does the electoral college work" },
        { keywords: ["primary", "primaries"], key: "what is a primary election" },
        { keywords: ["absentee", "mail", "mail-in", "mail in"], key: "what is absentee voting" },
        { keywords: ["early vot"], key: "what is early voting" },
        { keywords: ["poll worker"], key: "what is a poll worker" },
        { keywords: ["poll place", "polling place", "where do i vote", "where to vote"], key: "how do i find my polling place" },
        { keywords: ["id", "identification", "voter id"], key: "what id do i need to vote" },
        { keywords: ["provisional"], key: "what is a provisional ballot" },
        { keywords: ["caucus"], key: "what is a caucus" },
        { keywords: ["recount"], key: "what is a recount" },
        { keywords: ["gerrymandering", "gerrymander"], key: "what is gerrymandering" },
        { keywords: ["redistrict", "redistricting"], key: "how are congressional districts drawn" },
        { keywords: ["census"], key: "what is the census" },
        { keywords: ["inauguration", "inaugurate", "sworn in"], key: "what is the inauguration" },
        { keywords: ["voting rights act", "voting right"], key: "what is the voting rights act" },
        { keywords: ["suppression", "suppress"], key: "what is voter suppression" },
        { keywords: ["ballot measure", "proposition", "initiative", "referendum"], key: "what is a ballot measure" },
        { keywords: ["party platform"], key: "what is a party platform" },
        { keywords: ["campaign finance", "pacs", "super pac", "donation", "fundrais"], key: "what is campaign finance" },
        { keywords: ["convention", "nominating"], key: "what is a political convention" },
        { keywords: ["delegate", "delegates"], key: "what are delegates" },
        { keywords: ["congress", "senate", "house", "senator", "representative"], key: "what is congress" },
        { keywords: ["midterm", "mid-term"], key: "what are midterm elections" },
        { keywords: ["apportionment", "apportion"], key: "what is apportionment" },
        { keywords: ["canvass", "canvas"], key: "what is the canvass" },
        { keywords: ["audit"], key: "what is an election audit" },
        { keywords: ["certif"], key: "when are election results certified" },
        { keywords: ["popular vote"], key: "what is the popular vote" },
        { keywords: ["transition", "transfer of power"], key: "what is the transition of power" },
        { keywords: ["same day", "same-day"], key: "what is same-day registration" },
        { keywords: ["check registr", "verify registr", "registr status"], key: "how do i check my registration status" },
        { keywords: ["deadline", "when to register"], key: "what is the registration deadline" },
        { keywords: ["no id", "without id", "don't have id", "dont have id"], key: "what if i don't have an id" },
        { keywords: ["bring", "what to bring"], key: "what should i bring to vote" },
        { keywords: ["how to vote", "voting process", "steps to vote"], key: "what happens on election day" },
      ];

      boosts.forEach(({ keywords, key: boostKey }) => {
        if (key === boostKey && keywords.some((kw) => normalized.includes(kw))) {
          score += 15;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestMatch = value;
      }
    });

    if (bestScore > 0 && bestMatch) return bestMatch;

    // Default fallback
    return {
      answer:
        "I'm not sure I have specific information about that. Here are some things I can help you with — try clicking a topic below, or rephrase your question!",
      follow_up: [
        "How do I register to vote?",
        "What happens on Election Day?",
        "How does the Electoral College work?",
        "What are my voting rights?",
      ],
    };
  }

  function formatMessageText(text) {
    // Convert **bold** to <strong>
    let html = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n•\s/g, "\n<li>")
      .replace(/\n(\d+)\.\s/g, "\n<li>");

    // Convert newlines with bullet points to list items
    const lines = html.split("\n");
    let inList = false;
    let result = [];

    for (const line of lines) {
      if (line.startsWith("<li>")) {
        if (!inList) {
          result.push("<ul>");
          inList = true;
        }
        result.push(line + "</li>");
      } else {
        if (inList) {
          result.push("</ul>");
          inList = false;
        }
        if (line.trim()) result.push(`<p>${line}</p>`);
      }
    }

    if (inList) result.push("</ul>");
    return result.join("");
  }

  function addUserMessage(text) {
    const messages = $("#chat-messages");
    const msg = createElement("div", { className: "message user-message" },
      createElement("div", { className: "message-avatar" }, "👤"),
      createElement("div", { className: "message-content" },
        createElement("div", { className: "message-bubble", textContent: text })
      )
    );
    messages.appendChild(msg);
    scrollToBottom();
  }

  function addBotMessage(text, followUps = []) {
    const messages = $("#chat-messages");

    const bubble = createElement("div", { className: "message-bubble" });
    bubble.innerHTML = formatMessageText(text);

    const content = createElement("div", { className: "message-content" }, bubble);

    if (followUps.length > 0) {
      const chips = createElement("div", { className: "follow-up-chips" });
      followUps.forEach((fu) => {
        const chip = createElement("button", {
          className: "follow-up-chip",
          textContent: fu,
        });
        chip.addEventListener("click", () => processUserMessage(fu));
        chips.appendChild(chip);
      });
      content.appendChild(chips);
    }

    const msg = createElement("div", { className: "message bot-message" },
      createElement("div", { className: "message-avatar" }, "🗳️"),
      content
    );

    messages.appendChild(msg);
    scrollToBottom();
  }

  let typingEl = null;

  function showTypingIndicator() {
    const messages = $("#chat-messages");
    typingEl = createElement("div", { className: "message bot-message" },
      createElement("div", { className: "message-avatar" }, "🗳️"),
      createElement("div", { className: "message-content" },
        createElement("div", { className: "typing-indicator" },
          createElement("div", { className: "typing-dot" }),
          createElement("div", { className: "typing-dot" }),
          createElement("div", { className: "typing-dot" })
        )
      )
    );
    messages.appendChild(typingEl);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    if (typingEl) {
      typingEl.remove();
      typingEl = null;
    }
  }

  function scrollToBottom() {
    const messages = $("#chat-messages");
    messages.scrollTop = messages.scrollHeight;
  }

  // =============================================
  // Timeline
  // =============================================
  function initTimeline() {
    const btns = $$(".timeline-type-btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentTimelineType = btn.dataset.type;
        renderTimeline(currentTimelineType);
      });
    });
  }

  function renderTimeline(type) {
    const container = $("#timeline-container");
    if (!container) return;

    const items = electionData.timeline[type] || [];
    container.innerHTML = "";

    items.forEach((item, idx) => {
      const dot = createElement("div", {
        className: "timeline-dot",
        textContent: item.icon,
        style: `background-color: ${item.color}; color: #fff;`,
      });

      const card = createElement("div", { className: "timeline-card" },
        createElement("div", { className: "timeline-phase", textContent: item.phase }),
        createElement("div", { className: "timeline-timeframe" },
          createElement("span", { className: "timeframe-icon", "aria-hidden": "true", textContent: "🕐" }),
          document.createTextNode(item.timeframe)
        ),
        createElement("div", { className: "timeline-desc", textContent: item.description })
      );

      const timelineItem = createElement("div", {
        className: "timeline-item",
        style: `animation-delay: ${idx * 0.05}s`,
      }, dot, card);

      container.appendChild(timelineItem);
    });
  }

  // =============================================
  // Voting Guide
  // =============================================
  function renderGuide() {
    const container = $("#guide-steps");
    if (!container || container.children.length > 0) return;

    electionData.votingSteps.forEach((step) => {
      const tipItems = step.tips.map((tip) =>
        createElement("li", { textContent: tip })
      );

      const tipsList = createElement("ul", { className: "tips-list" }, ...tipItems);

      const body = createElement("div", { className: "step-body" },
        createElement("p", { className: "step-description", textContent: step.description }),
        createElement("div", { className: "tips-label" },
          createElement("span", { className: "tips-icon", "aria-hidden": "true", textContent: "💡" }),
          document.createTextNode(" Tips")
        ),
        tipsList
      );

      const header = createElement("div", { className: "step-header" },
        createElement("div", { className: "step-number", textContent: step.step }),
        createElement("div", { className: "step-title-area" },
          createElement("div", { className: "step-title", textContent: step.title })
        ),
        createElement("span", { className: "step-icon", textContent: step.icon }),
        createElement("span", { className: "step-chevron", innerHTML: "&#x25BE;" })
      );

      const card = createElement("div", { className: "step-card" }, header, body);

      header.addEventListener("click", () => {
        card.classList.toggle("open");
      });

      container.appendChild(card);
    });
  }

  // =============================================
  // Quiz
  // =============================================
  function renderQuizIntro() {
    if (quizState.active) return;
    const container = $("#quiz-container");
    if (!container) return;
    container.innerHTML = "";

    const intro = createElement("div", { className: "quiz-intro" },
      createElement("div", { className: "panel-title", textContent: "Election Knowledge Quiz" }),
      createElement("p", {
        className: "panel-subtitle",
        style: "margin-top:0.5rem",
        textContent: `Test your knowledge of the U.S. election process with ${quizQuestions.length} questions.`,
      }),
      createElement("button", {
        className: "quiz-start-btn",
        textContent: "Start Quiz →",
      })
    );

    const startBtn = $(".quiz-start-btn", intro);
    startBtn.addEventListener("click", startQuiz);
    container.appendChild(intro);
  }

  function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function startQuiz() {
    quizState = {
      active: true,
      currentIndex: 0,
      score: 0,
      answered: false,
      questions: shuffleArray(quizQuestions).slice(0, 10),
    };
    renderQuestion();
  }

  function renderQuestion() {
    const container = $("#quiz-container");
    if (!container) return;
    container.innerHTML = "";

    const { questions, currentIndex } = quizState;
    const total = questions.length;
    const q = questions[currentIndex];
    const progress = (currentIndex / total) * 100;

    const progressBar = createElement("div", { className: "quiz-progress-bar" },
      createElement("div", {
        className: "quiz-progress-fill",
        style: `width: ${progress}%`,
      })
    );

    const optionLetters = ["A", "B", "C", "D"];
    const optionEls = q.options.map((opt, idx) => {
      const btn = createElement("button", { className: "quiz-option" },
        createElement("span", { className: "option-letter", textContent: optionLetters[idx] }),
        createElement("span", { textContent: opt })
      );
      btn.addEventListener("click", () => selectAnswer(idx, q.correct, q.explanation));
      return btn;
    });

    const questionCard = createElement("div", { className: "quiz-question-card" },
      createElement("div", { className: "quiz-counter", textContent: `Question ${currentIndex + 1} of ${total}` }),
      createElement("div", { className: "quiz-question-text", textContent: q.question }),
      createElement("div", { className: "quiz-options" }, ...optionEls)
    );

    container.appendChild(progressBar);
    container.appendChild(questionCard);
  }

  function selectAnswer(selectedIdx, correctIdx, explanation) {
    if (quizState.answered) return;
    quizState.answered = true;

    const optionBtns = $$(".quiz-option");
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) btn.classList.add("correct");
      else if (idx === selectedIdx) btn.classList.add("incorrect");
    });

    const isCorrect = selectedIdx === correctIdx;
    if (isCorrect) quizState.score++;

    const feedback = createElement("div", {
      className: `quiz-feedback ${isCorrect ? "correct" : "incorrect"}`,
    });
    feedback.innerHTML = `<span class="quiz-feedback-icon">${isCorrect ? "✅" : "❌"}</span> <strong>${isCorrect ? "Correct!" : "Not quite."}</strong> ${explanation}`;

    const nextBtn = createElement("button", {
      className: "quiz-next-btn",
      textContent:
        quizState.currentIndex + 1 < quizState.questions.length ? "Next Question →" : "See Results →",
    });
    nextBtn.addEventListener("click", () => {
      quizState.currentIndex++;
      quizState.answered = false;
      if (quizState.currentIndex < quizState.questions.length) {
        renderQuestion();
      } else {
        showQuizResults();
      }
    });

    const questionCard = $(".quiz-question-card");
    if (questionCard) {
      questionCard.appendChild(feedback);
      questionCard.appendChild(nextBtn);
    }
  }

  function showQuizResults() {
    const container = $("#quiz-container");
    if (!container) return;

    const { score, questions } = quizState;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);

    let message;
    if (pct === 100) message = "🏆 Perfect score! You're an election expert!";
    else if (pct >= 80) message = "🎉 Excellent! You have a strong understanding of the election process.";
    else if (pct >= 60) message = "👍 Good job! Keep exploring to fill in the gaps.";
    else if (pct >= 40) message = "📚 A solid start! There's more to learn — try the other tabs.";
    else message = "🌱 Keep going! Explore the topics in the Chat and Guide tabs to learn more.";

    const results = createElement("div", { className: "quiz-results" },
      createElement("div", { className: "results-score", textContent: `${pct}%` }),
      createElement("div", { className: "results-label", textContent: `You scored ${score} out of ${total}` }),
      createElement("div", { className: "results-message", textContent: message }),
      createElement("div", { className: "results-breakdown" },
        createElement("div", { className: "result-stat" },
          createElement("span", { className: "result-stat-number correct", textContent: score }),
          createElement("span", { className: "result-stat-label", textContent: "Correct" })
        ),
        createElement("div", { className: "result-stat" },
          createElement("span", { className: "result-stat-number incorrect", textContent: total - score }),
          createElement("span", { className: "result-stat-label", textContent: "Incorrect" })
        )
      ),
      createElement("button", { className: "quiz-restart-btn", textContent: "Try Again" })
    );

    const restartBtn = $(".quiz-restart-btn", results);
    restartBtn.addEventListener("click", () => {
      quizState.active = false;
      renderQuizIntro();
    });

    container.innerHTML = "";
    container.appendChild(results);
    quizState.active = false;
  }

  // =============================================
  // Resources
  // =============================================
  const resources = [
    {
      icon: "🗳️",
      title: "vote.gov",
      desc: "Official U.S. government voting portal. Register, check registration status, find your polling place, and more.",
      url: "https://vote.gov",
      label: "Visit vote.gov →",
    },
    {
      icon: "📋",
      title: "Ballotpedia",
      desc: "Nonpartisan encyclopedia of American politics. Research candidates, ballot measures, and election information.",
      url: "https://ballotpedia.org",
      label: "Visit Ballotpedia →",
    },
    {
      icon: "🏛️",
      title: "USA.gov – Elections",
      desc: "Official U.S. government information on elections, voting, and civic participation.",
      url: "https://www.usa.gov/absentee-voting",
      label: "Visit USA.gov →",
    },
    {
      icon: "👥",
      title: "League of Women Voters",
      desc: "Nonpartisan civic organization providing voter guides, education, and advocacy for voter rights.",
      url: "https://www.lwv.org",
      label: "Visit LWV →",
    },
    {
      icon: "💰",
      title: "OpenSecrets.org",
      desc: "Tracks money in U.S. politics. Research campaign contributions, lobbying, and political spending.",
      url: "https://www.opensecrets.org",
      label: "Visit OpenSecrets →",
    },
    {
      icon: "📰",
      title: "Rock the Vote",
      desc: "Nonpartisan organization dedicated to registering and engaging young voters in the political process.",
      url: "https://www.rockthevote.org",
      label: "Visit Rock the Vote →",
    },
    {
      icon: "🔍",
      title: "Project VoteSmart",
      desc: "Provides candidate positions, ratings, and voting records across the political spectrum.",
      url: "https://justfacts.votesmart.org",
      label: "Visit VoteSmart →",
    },
    {
      icon: "🛡️",
      title: "Power of the Polls",
      desc: "Recruit and train poll workers. Help support your local election office as a paid poll worker.",
      url: "https://www.powerofthepolls.com",
      label: "Sign Up →",
    },
    {
      icon: "⚖️",
      title: "Election Protection",
      desc: "Report voting problems. Call 1-866-OUR-VOTE (1-866-687-8683) if you face issues at the polls.",
      url: "https://866ourvote.org",
      label: "Learn More →",
    },
  ];

  function renderResources() {
    const grid = $("#resources-grid");
    if (!grid || grid.children.length > 0) return;

    resources.forEach((res, idx) => {
      const card = createElement("div", {
        className: "resource-card",
        style: `animation-delay: ${idx * 0.05}s`,
      },
        createElement("div", { className: "resource-card-icon", textContent: res.icon }),
        createElement("div", { className: "resource-card-title", textContent: res.title }),
        createElement("div", { className: "resource-card-desc", textContent: res.desc }),
        createElement("a", {
          className: "resource-card-link",
          href: res.url,
          target: "_blank",
          rel: "noopener noreferrer",
          textContent: res.label,
        })
      );
      grid.appendChild(card);
    });
  }

  // =============================================
  // Init
  // =============================================
  function renderActiveTab() {
    const activePanel = $(".tab-panel.active");
    if (!activePanel) return;
    const id = activePanel.id;
    if (id === "panel-timeline") renderTimeline(currentTimelineType);
    else if (id === "panel-guide") renderGuide();
    else if (id === "panel-quiz") renderQuizIntro();
    else if (id === "panel-resources") renderResources();
    // chat is initialized separately via initChat()
  }

  function init() {
    initTabs();
    initChat();
    initTimeline();
    renderActiveTab();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
