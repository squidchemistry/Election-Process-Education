// Election Process Education - Knowledge Base

const electionData = {
  // General FAQ-style responses
  faq: {
    "what is an election": {
      answer:
        "An election is a formal process where eligible voters choose candidates or decide on issues through a vote. Elections are the cornerstone of democratic government, allowing citizens to select their representatives and shape public policy.",
      follow_up: ["Who can vote?", "How do I register to vote?", "What are the types of elections?"],
    },
    "who can vote": {
      answer:
        "In the United States, you can vote if you are:\n• A U.S. citizen (native-born or naturalized)\n• At least 18 years old on or before Election Day\n• A resident of the state where you are registering\n• Not currently serving a sentence for a felony conviction (rules vary by state)\n• Not declared mentally incompetent by a court",
      follow_up: ["How do I register to vote?", "What ID do I need to vote?", "Can I vote if I moved recently?"],
    },
    "how do i register to vote": {
      answer:
        "You can register to vote in several ways:\n1. **Online** – Visit your state's election website or vote.gov\n2. **By mail** – Download and mail a registration form\n3. **In person** – Visit your local election office, DMV, or government agency\n4. **Automatic registration** – Some states automatically register eligible citizens\n\nCheck your state's deadline — most require registration 15–30 days before an election.",
      follow_up: [
        "What is the registration deadline?",
        "How do I check my registration status?",
        "What is same-day registration?",
      ],
    },
    "how do i check my registration status": {
      answer:
        "You can check your voter registration status by:\n• Visiting vote.gov and selecting your state\n• Contacting your local county clerk or board of elections\n• Calling your state election office directly\n\nHave your full name, address, and date of birth ready.",
      follow_up: ["How do I update my registration?", "What if my information is wrong?"],
    },
    "what is the registration deadline": {
      answer:
        "Registration deadlines vary by state. Most states require you to register **15 to 30 days before** an election. Some states offer:\n• **Same-day registration** – Register on Election Day itself (about 21 states)\n• **Automatic registration** – You're registered when interacting with government agencies\n\nAlways check your specific state's deadline at vote.gov.",
      follow_up: ["What is same-day registration?", "How do I find my polling place?"],
    },
    "what is same-day registration": {
      answer:
        "Same-day voter registration (SDR) allows eligible citizens to register to vote and cast a ballot on Election Day at their polling place or early voting location. About 21 states and Washington D.C. offer same-day registration. You typically need to provide proof of residence (utility bill, bank statement, etc.).",
      follow_up: ["How do I find my polling place?", "What ID do I need to vote?"],
    },
    "what id do i need to vote": {
      answer:
        "ID requirements depend on your state:\n• **Strict photo ID states** – Must show a government-issued photo ID (e.g., driver's license, passport)\n• **Non-strict photo ID states** – Photo ID preferred but alternatives accepted\n• **Strict non-photo ID states** – Can show documents like a utility bill or bank statement\n• **No ID states** – Signature or verbal confirmation of identity is sufficient\n\nCheck your state's specific requirements before voting.",
      follow_up: ["What if I don't have an ID?", "What is a provisional ballot?"],
    },
    "what if i don't have an id": {
      answer:
        "If you don't have the required ID:\n• **Free voter ID** – Many states offer free voter IDs for eligible voters\n• **Provisional ballot** – You can cast a provisional ballot and return with ID within a few days to have it counted\n• **Affidavit** – Some states allow you to sign an affidavit attesting to your identity\n\nContact your local election office for options in your state.",
      follow_up: ["What is a provisional ballot?", "What are my voting rights?"],
    },
    "what is a provisional ballot": {
      answer:
        "A provisional ballot is a safeguard that allows you to vote even if there's a question about your eligibility (e.g., your name isn't on the rolls, or you don't have ID). After you cast it, election officials verify your eligibility. If confirmed, your ballot is counted. You typically have a few days after Election Day to resolve any issues.",
      follow_up: ["What are my voting rights?", "How do I find my polling place?"],
    },
    "what are my voting rights": {
      answer:
        "Your fundamental voting rights include:\n• **The right to vote** without discrimination based on race, color, sex, or national origin\n• **The right to assistance** if you have a disability or language barrier\n• **The right to a provisional ballot** if your eligibility is questioned\n• **The right to privacy** when casting your vote\n• **The right to report problems** to election officials or poll workers\n• **The Voting Rights Act of 1965** prohibits discriminatory voting practices\n\nIf you experience problems, contact the Election Protection Hotline: 1-866-OUR-VOTE.",
      follow_up: ["What are the types of elections?", "How does the Electoral College work?"],
    },
    "what are the types of elections": {
      answer:
        "There are several types of elections in the U.S.:\n• **Primary Elections** – Parties choose their candidates (open, closed, or semi-closed)\n• **General Elections** – Main election between party nominees and independents\n• **Runoff Elections** – Held when no candidate wins the required majority\n• **Special Elections** – Fill a vacant seat mid-term\n• **Local Elections** – For city councils, school boards, mayors, etc.\n• **Ballot Measure Elections** – Voters decide on specific policies or amendments\n• **Presidential Elections** – Held every 4 years in November",
      follow_up: ["What is a primary election?", "How does the Electoral College work?", "What is a ballot measure?"],
    },
    "what is a primary election": {
      answer:
        "A primary election is held before the general election to select a political party's candidate. There are three main types:\n• **Closed Primary** – Only registered party members can vote in that party's primary\n• **Open Primary** – Any registered voter can vote in any party's primary\n• **Semi-Closed** – Registered party members vote in their primary; unaffiliated voters choose which primary to join\n\nPresidential primaries also determine how many delegates each candidate receives for the national party convention.",
      follow_up: ["What is a caucus?", "What is the general election?", "What are delegates?"],
    },
    "what is a caucus": {
      answer:
        "A caucus is a local meeting where voters publicly show their support for a candidate (rather than casting a secret ballot). Attendees group themselves by candidate preference and may try to persuade others. If a candidate doesn't reach a viability threshold, their supporters can join another group. Iowa is famous for its presidential caucus.",
      follow_up: ["What is a primary election?", "What are delegates?"],
    },
    "what are delegates": {
      answer:
        "Delegates are individuals chosen to represent their state or district at a party's national convention, where the party's presidential nominee is officially selected. The number of delegates is allocated based on population and primary/caucus results. There are two types:\n• **Pledged delegates** – Bound to support the candidate who won their state's primary/caucus\n• **Superdelegates (Democratic Party)** – Party leaders and officials who can support any candidate",
      follow_up: ["What is a political convention?", "What is the general election?"],
    },
    "what is a political convention": {
      answer:
        "A national political convention is a formal gathering where a political party officially nominates its presidential and vice-presidential candidates. Delegates from all states vote to confirm the nominee. The convention also finalizes the party platform (its official policy positions). Major party conventions are held in the summer before a presidential election.",
      follow_up: ["What is the general election?", "How does the Electoral College work?"],
    },
    "what is the general election": {
      answer:
        "The general election is the main election where voters choose between candidates from different parties (and independent candidates). It's held on the **first Tuesday after the first Monday in November**. For presidential elections, this is every four years. Congressional elections happen every two years (all House seats and 1/3 of Senate seats).",
      follow_up: ["How does the Electoral College work?", "What happens on Election Day?"],
    },
    "how does the electoral college work": {
      answer:
        "The Electoral College is the system used to elect the U.S. President:\n\n1. Each state gets electoral votes equal to its total Congressional representation (House + Senate)\n2. Washington D.C. gets 3 electoral votes (23rd Amendment)\n3. **Total: 538 electoral votes** — a candidate needs **270 to win**\n4. Most states use **winner-take-all** – the candidate who wins the popular vote in that state gets all its electoral votes\n5. Maine and Nebraska use a **proportional** system\n6. If no candidate reaches 270, the House of Representatives chooses the President\n\n**Presidential Election Day** → States certify results → Electors meet in December → Congress counts votes in January",
      follow_up: ["What is the popular vote?", "What happens on Election Day?", "What is the inauguration?"],
    },
    "what is the popular vote": {
      answer:
        "The popular vote is the total number of votes cast by individual voters across the country. While the popular vote reflects who most Americans voted for, the presidency is determined by the Electoral College — not the popular vote. A candidate can win the presidency while losing the popular vote (this has happened 5 times in U.S. history, most recently in 2000 and 2016).",
      follow_up: ["How does the Electoral College work?", "What is the inauguration?"],
    },
    "what happens on election day": {
      answer:
        "On Election Day (first Tuesday after the first Monday in November):\n\n1. **Polls open** – Usually between 6-7 AM (times vary by state)\n2. **Voters go to their polling place** – Bring required ID (check your state)\n3. **Check in** with poll workers and sign the voter roll\n4. **Receive your ballot** (paper or electronic)\n5. **Cast your vote** in private\n6. **Return your ballot** to be counted\n7. **Polls close** – Usually between 7-9 PM\n8. **Results reported** – Counties report totals to the state\n9. **Winner called** – Media projects winners as results come in\n10. **Official certification** – Takes days to weeks after Election Day",
      follow_up: ["What is early voting?", "What is absentee voting?", "How do I find my polling place?"],
    },
    "how do i find my polling place": {
      answer:
        "To find your polling place:\n• Visit **vote.gov** and select your state\n• Check your **voter registration card** – it usually lists your polling place\n• Contact your **local county clerk or board of elections**\n• Text your **ZIP code to 66866** (GOVOTE) for polling place information\n\nNote: Polling places can change between elections, so always verify before Election Day.",
      follow_up: ["What should I bring to vote?", "What is early voting?"],
    },
    "what should i bring to vote": {
      answer:
        "What to bring on Election Day:\n• **Voter registration card** (if you have it)\n• **Required ID** (check your state's requirements)\n• **Sample ballot** (optional but helpful for researching candidates)\n\nIf you arrive and there's an issue, you have the right to a provisional ballot. Don't leave without voting!",
      follow_up: ["What is a provisional ballot?", "What are my voting rights?"],
    },
    "what is early voting": {
      answer:
        "Early voting allows registered voters to cast ballots before Election Day at designated polling places. Benefits include:\n• **Flexibility** – Vote on your schedule, not just on a specific Tuesday\n• **Shorter lines** – Spread out voter traffic\n• **Convenience** – Multiple locations may be available\n\nEarly voting periods vary by state, typically 1–45 days before Election Day. About 40 states offer in-person early voting.",
      follow_up: ["What is absentee voting?", "What is vote by mail?"],
    },
    "what is absentee voting": {
      answer:
        "Absentee voting lets you vote by mail if you can't make it to the polls on Election Day. Traditionally, you needed an accepted excuse (travel, illness, disability). Many states have expanded to **no-excuse absentee voting**.\n\n**Steps:**\n1. Request an absentee ballot (deadline varies by state)\n2. Receive your ballot by mail\n3. Complete and sign it as directed\n4. Return by the deadline (mail or drop box)\n\nAlways check your state's specific rules and deadlines.",
      follow_up: ["What is vote by mail?", "What is the difference between absentee and mail voting?"],
    },
    "what is vote by mail": {
      answer:
        "Vote by mail (VBM) means your ballot is automatically sent to every registered voter without needing to request one. Some states — like Oregon, Washington, Colorado, Hawaii, and Utah — conduct all elections entirely by mail. Voters fill out their ballot at home and return it by mail or at a drop box.\n\nBenefits: Increased participation, convenience, and accessible to people with disabilities or limited mobility.",
      follow_up: ["What is absentee voting?", "How are mail ballots counted?"],
    },
    "how are mail ballots counted": {
      answer:
        "Mail-in ballots go through a multi-step verification process:\n1. **Signature verification** – Your signature is compared to your registration record\n2. **Envelope inspection** – Checked for proper completion\n3. **Curing process** – If there's an issue, some states notify you to fix it\n4. **Opening** – Ballots are removed from envelopes and prepared for counting\n5. **Counting** – Tabulation by machine or hand\n\nMany states can't begin processing mail ballots until Election Day, which is why results can take days to finalize.",
      follow_up: ["When are election results certified?", "What is the canvass?"],
    },
    "when are election results certified": {
      answer:
        "Election results go through several stages before final certification:\n\n1. **Election Night** – Unofficial results reported as precincts report in\n2. **Days after** – Mail and provisional ballots continue to be counted\n3. **Canvass (1-2 weeks)** – County officials review and verify all ballots\n4. **State certification** – Governor or Secretary of State certifies results (days to weeks after election)\n5. **Presidential elections specifically:**\n   - December: Electors meet in their states and cast Electoral College votes\n   - Early January: Congress counts and certifies Electoral College votes\n   - January 20: Presidential Inauguration",
      follow_up: ["What is the canvass?", "What is a recount?", "What is the inauguration?"],
    },
    "what is the canvass": {
      answer:
        "The canvass is the official process of reviewing and tallying all votes cast in an election. It includes:\n• Counting all ballots (in-person, mail, provisional, overseas)\n• Reconciling poll books with vote totals\n• Reviewing and resolving any discrepancies\n• Verifying that every eligible ballot has been counted\n\nAfter the canvass, the results are certified as official. This process typically takes 1-4 weeks after Election Day.",
      follow_up: ["What is a recount?", "When are election results certified?"],
    },
    "what is a recount": {
      answer:
        "A recount is a second count of votes in an election, usually triggered when the margin of victory is very small (often less than 0.5% or 1%). Types:\n• **Automatic recount** – Required by law when the margin is below a threshold\n• **Requested recount** – A candidate can request a recount (may need to pay a fee)\n• **Hand recount** – Ballots are counted by hand\n• **Machine recount** – Ballots are run through tabulation machines again\n\nRecounts rarely change the outcome by more than a few hundred votes.",
      follow_up: ["What is an election audit?", "What is a legal challenge to an election?"],
    },
    "what is an election audit": {
      answer:
        "An election audit is an independent review of election procedures and results to ensure accuracy and security. Types include:\n• **Risk-limiting audit (RLA)** – Statistical sample review to confirm the correct winner\n• **Hand count audit** – Physical counting of a sample of ballots\n• **Post-election audit** – Review of procedures and equipment\n\nAudits help maintain public confidence in election results and catch any potential errors.",
      follow_up: ["What is a recount?", "How are elections secured?"],
    },
    "how are elections secured": {
      answer:
        "Elections are secured through multiple layers of protection:\n• **Voter rolls** – Maintained and regularly updated to ensure only eligible voters\n• **ID requirements** – Verify voter identity\n• **Paper trails** – Most ballots have a paper record for auditing\n• **Chain of custody** – Strict protocols for handling ballots\n• **Bipartisan oversight** – Both parties have poll watchers and observers\n• **Encryption & security** – Voting machines meet strict security standards\n• **Post-election audits** – Verify results after the election\n• **Federal & state oversight** – CISA and state election officials coordinate security",
      follow_up: ["What is an election audit?", "What is a poll watcher?"],
    },
    "what is a poll watcher": {
      answer:
        "A poll watcher (or election observer) is a representative appointed by a candidate, party, or campaign to observe the voting process at a polling place. Poll watchers:\n• Can observe check-in, voting, and ballot counting\n• Cannot interfere with or challenge voters\n• Must follow rules set by the state\n• Help ensure transparency in the process\n\nThis is different from a poll worker, who is an election official helping to run the polling place.",
      follow_up: ["What is a poll worker?", "How are elections secured?"],
    },
    "what is a poll worker": {
      answer:
        "Poll workers are temporary election officials who help run polling places on Election Day and during early voting. Their duties include:\n• Setting up and closing the polling place\n• Checking in voters and verifying their eligibility\n• Explaining how to use voting equipment\n• Assisting voters who need help\n• Ensuring the polling place runs smoothly\n\nAnyone can usually become a poll worker — contact your local election office to sign up. It's a paid civic service!",
      follow_up: ["How do I become a poll worker?", "What is a polling place?"],
    },
    "how do i become a poll worker": {
      answer:
        "To become a poll worker:\n1. Contact your **local county clerk or board of elections**\n2. Complete an **application** (usually online or by mail)\n3. Attend a **training session** (typically a few hours)\n4. Work on **Election Day** (and possibly early voting days)\n\nPoll workers are usually paid and serve a valuable civic role. Many jurisdictions especially need bilingual workers. Visit **powerofthepolls.com** to sign up.",
      follow_up: ["What is a poll worker?", "What are my voting rights?"],
    },
    "what is a ballot measure": {
      answer:
        "A ballot measure is a question placed directly before voters to decide on a policy, law, or constitutional amendment — rather than choosing a candidate. Types include:\n• **Initiative** – Citizens gather signatures to put a measure on the ballot\n• **Referendum** – Legislature sends a measure to voters for approval\n• **Bond measure** – Voters approve government borrowing for projects\n• **Constitutional amendment** – Voters amend the state constitution\n\nBallot measures can decide issues like tax changes, legalization of substances, minimum wage, and more.",
      follow_up: ["How do I research ballot measures?", "What is a voter guide?"],
    },
    "how do i research ballot measures": {
      answer:
        "To research ballot measures:\n• **Voter guides** – Your state or county sends official guides with arguments for and against each measure\n• **Ballotpedia.org** – Nonpartisan information on ballot measures nationwide\n• **Local newspapers** – Editorial boards often analyze measures\n• **League of Women Voters** – Provides nonpartisan voter education\n• **State legislature website** – Official text and fiscal analyses\n• **Campaign finance records** – See who is funding each side\n\nAlways read multiple sources and consider the source's potential bias.",
      follow_up: ["What is a voter guide?", "What is Ballotpedia?"],
    },
    "what is a voter guide": {
      answer:
        "A voter guide is an informational resource that helps voters make informed decisions. It typically includes:\n• Candidate profiles and positions\n• Information on ballot measures (arguments for and against)\n• Voting dates, deadlines, and locations\n• Voter registration information\n\nOfficial voter guides are mailed by state/county election offices. Nonpartisan guides are also published by organizations like the League of Women Voters.",
      follow_up: ["How do I research candidates?", "What is the League of Women Voters?"],
    },
    "how do i research candidates": {
      answer:
        "To research candidates:\n• **Campaign websites** – Learn their positions directly\n• **Ballotpedia.org** – Nonpartisan candidate profiles\n• **Project VoteSmart** – Candidate positions and ratings\n• **Local news** – Coverage, debates, and endorsements\n• **OpenSecrets.org** – Campaign finance information\n• **Candidate debates/forums** – Watch or read transcripts\n• **Social media** – Follow candidates directly\n\nLook for candidates' actual voting records and policy positions, not just campaign promises.",
      follow_up: ["What is campaign finance?", "What are political parties?"],
    },
    "what is campaign finance": {
      answer:
        "Campaign finance refers to the money raised and spent to influence elections. Key concepts:\n• **FEC (Federal Election Commission)** – Regulates federal campaign finance\n• **Contribution limits** – Individuals can give limited amounts directly to campaigns\n• **PACs (Political Action Committees)** – Groups that raise money to support candidates\n• **Super PACs** – Can raise unlimited money but can't coordinate with campaigns\n• **Dark money** – Funds from nonprofits that don't have to disclose donors\n\nAll federal campaign contributions are publicly reported at **FEC.gov**.",
      follow_up: ["What are political parties?", "What is a PAC?"],
    },
    "what are political parties": {
      answer:
        "A political party is an organized group of people with similar political beliefs who work together to win elections and influence government policy. In the U.S.:\n• **Democratic Party** – One of the two major parties\n• **Republican Party** – The other major party\n• **Third parties** – Libertarian, Green, Constitution, and others\n\nParties run candidates, develop policy platforms, organize voters, and raise money. To vote in a party primary (in closed primary states), you must be registered with that party.",
      follow_up: ["What is a primary election?", "What is a party platform?"],
    },
    "what is a party platform": {
      answer:
        "A party platform is the official set of principles, goals, and policies that a political party stands for. It's adopted at the national convention and guides the party's positions on issues like the economy, healthcare, immigration, and foreign policy. While candidates generally align with their party's platform, they may differ on specific issues.",
      follow_up: ["What are political parties?", "How do I research candidates?"],
    },
    "what is the inauguration": {
      answer:
        "The Presidential Inauguration is the formal ceremony in which the President-elect is sworn into office. It takes place on **January 20** following a presidential election (or January 21 if the 20th falls on a Sunday). Key elements:\n• **The Oath of Office** – The President swears to 'faithfully execute the Office of President'\n• **Inaugural Address** – The President's first major speech\n• **Inaugural Parade** – Procession from the Capitol to the White House\n\nThe Chief Justice of the Supreme Court administers the oath.",
      follow_up: ["What is the transition of power?", "What happens after the inauguration?"],
    },
    "what is the transition of power": {
      answer:
        "The peaceful transfer of power is a hallmark of American democracy. The presidential transition involves:\n• **Pre-election** – Transition teams prepare\n• **After election** – General Services Administration (GSA) formally recognizes the winner and begins transition support\n• **December** – Electors cast Electoral College votes\n• **Early January** – Congress certifies Electoral College results\n• **January 20** – Inauguration and official transfer of power\n\nThe outgoing administration cooperates to brief incoming officials on national security and ongoing government operations.",
      follow_up: ["What is the inauguration?", "How does the Electoral College work?"],
    },
    "what is congress": {
      answer:
        "Congress is the legislative branch of the U.S. federal government, responsible for making laws. It has two chambers:\n• **Senate** – 100 senators, 2 from each state, elected to 6-year terms (1/3 up for election every 2 years)\n• **House of Representatives** – 435 members, allocated by state population, elected to 2-year terms (all seats up every 2 years)\n\n**Midterm elections** occur halfway through a president's term, when all House seats and 1/3 of Senate seats are contested.",
      follow_up: ["What are midterm elections?", "How are congressional districts drawn?"],
    },
    "what are midterm elections": {
      answer:
        "Midterm elections occur two years into a presidential term (e.g., 2022, 2026). In midterms:\n• **All 435 House seats** are up for election\n• **~33-34 Senate seats** are contested\n• Many **state and local offices** are also on the ballot\n• **Ballot measures** are also decided\n\nHistorically, the president's party tends to lose seats in midterms. Voter turnout is typically lower than in presidential election years.",
      follow_up: ["What is Congress?", "How are congressional districts drawn?"],
    },
    "how are congressional districts drawn": {
      answer:
        "Congressional district boundaries are redrawn every 10 years after the Census, a process called **redistricting**. The Census determines each state's population, which determines how many House seats it gets (**apportionment**).\n\nDistricts are drawn by state legislatures (in most states), independent commissions, or courts. **Gerrymandering** is when districts are drawn to benefit one party over another — a controversial practice that's been subject to legal challenges.",
      follow_up: ["What is gerrymandering?", "What is apportionment?"],
    },
    "what is gerrymandering": {
      answer:
        "Gerrymandering is the manipulation of electoral district boundaries to favor a particular political party, group, or incumbent. The name comes from Massachusetts Governor Elbridge Gerry, who in 1812 approved a district shaped like a salamander.\n\nTwo main types:\n• **Packing** – Concentrating opposition voters into one district to limit their influence elsewhere\n• **Cracking** – Splitting opposition voters across multiple districts so they're always a minority\n\nReforms include independent redistricting commissions, which exist in about 14 states.",
      follow_up: ["How are congressional districts drawn?", "What is an independent redistricting commission?"],
    },
    "what is the census": {
      answer:
        "The U.S. Census is a constitutionally mandated count of every person living in the United States, conducted every 10 years. The Census:\n• Determines population of each state\n• Drives **apportionment** – how many House seats each state gets\n• Guides **redistricting** – drawing of congressional and state legislative districts\n• Informs federal funding allocation for programs like schools, roads, and hospitals\n\nEvery household receives a Census form and is required to respond.",
      follow_up: ["What is apportionment?", "How are congressional districts drawn?"],
    },
    "what is apportionment": {
      answer:
        "Apportionment is the process of distributing the 435 seats in the House of Representatives among the 50 states based on population data from the Census. After each Census:\n1. Census Bureau calculates state populations\n2. A mathematical formula (currently the Method of Equal Proportions) allocates seats\n3. States that gained population may gain seats; states that lost population may lose seats\n4. Each state has at least one representative regardless of population\n\nApportionment affects political power at the national level.",
      follow_up: ["What is the Census?", "How are congressional districts drawn?"],
    },
    "what is voter suppression": {
      answer:
        "Voter suppression refers to strategies used to influence election outcomes by discouraging or preventing specific groups of people from voting. Historical and modern examples include:\n• Literacy tests and poll taxes (now illegal)\n• Strict voter ID laws\n• Reducing polling locations\n• Purging voter rolls\n• Limiting early voting\n• Misinformation about voting procedures\n\nThe **Voting Rights Act of 1965** was landmark legislation against suppression. Advocates continue to fight suppression through legislation, litigation, and voter education.",
      follow_up: ["What are my voting rights?", "What is the Voting Rights Act?"],
    },
    "what is the voting rights act": {
      answer:
        "The Voting Rights Act of 1965 is landmark federal legislation that prohibits discriminatory voting practices. It was passed in response to systematic disenfranchisement of Black voters, particularly in the South. Key provisions:\n• **Section 2** – Prohibits voting practices that discriminate based on race or language minority status\n• **Preclearance** – (Originally) Required certain states to get federal approval before changing voting laws\n• **Language assistance** – Requires voting materials in minority languages in certain jurisdictions\n\nThe Act has been amended and portions have been limited by Supreme Court rulings.",
      follow_up: ["What is voter suppression?", "What are my voting rights?"],
    },
  },

  // Election timeline data
  timeline: {
    presidential: [
      {
        phase: "Census & Redistricting",
        timeframe: "Every 10 years (e.g., 2020)",
        description: "Population count determines state representation; district boundaries redrawn",
        icon: "📊",
        color: "#6366f1",
      },
      {
        phase: "Candidate Announcements",
        timeframe: "18-24 months before Election Day",
        description: "Potential candidates form exploratory committees and officially announce their campaigns",
        icon: "📢",
        color: "#8b5cf6",
      },
      {
        phase: "Campaign & Fundraising",
        timeframe: "12-18 months before Election Day",
        description: "Candidates travel, debate, raise money, build campaign infrastructure, and gain media attention",
        icon: "🏛️",
        color: "#a855f7",
      },
      {
        phase: "Primary Season",
        timeframe: "January–June of election year",
        description: "States hold primaries and caucuses; voters select their party's nominee",
        icon: "🗳️",
        color: "#ec4899",
      },
      {
        phase: "Party Conventions",
        timeframe: "Summer of election year (July-August)",
        description: "Parties officially nominate their presidential and vice-presidential candidates",
        icon: "🎉",
        color: "#f43f5e",
      },
      {
        phase: "General Campaign",
        timeframe: "September–November of election year",
        description: "Nominees campaign nationally; presidential debates held; vice presidential debate held",
        icon: "📺",
        color: "#ef4444",
      },
      {
        phase: "Voter Registration Deadlines",
        timeframe: "15–30 days before Election Day",
        description: "Most states' voter registration deadlines (varies by state; some offer same-day registration)",
        icon: "📝",
        color: "#f97316",
      },
      {
        phase: "Early Voting",
        timeframe: "1–45 days before Election Day",
        description: "Many states allow early in-person voting at designated locations",
        icon: "🕐",
        color: "#eab308",
      },
      {
        phase: "Election Day",
        timeframe: "First Tuesday after first Monday in November",
        description: "Polls open across the country; all registered voters can cast their ballots",
        icon: "✅",
        color: "#22c55e",
      },
      {
        phase: "Vote Counting & Canvass",
        timeframe: "Days to weeks after Election Day",
        description: "All ballots counted and verified; provisional and mail ballots processed",
        icon: "🔢",
        color: "#14b8a6",
      },
      {
        phase: "State Certification",
        timeframe: "Weeks after Election Day",
        description: "State officials certify the official election results",
        icon: "📜",
        color: "#06b6d4",
      },
      {
        phase: "Electoral College Meets",
        timeframe: "First Tuesday after second Wednesday in December",
        description: "Electors gather in their state capitals to cast their Electoral College votes",
        icon: "🗺️",
        color: "#3b82f6",
      },
      {
        phase: "Congress Certifies Results",
        timeframe: "January 6",
        description: "Joint session of Congress counts and certifies the Electoral College votes",
        icon: "🏛️",
        color: "#6366f1",
      },
      {
        phase: "Inauguration",
        timeframe: "January 20",
        description: "The President-elect is sworn into office; peaceful transfer of power",
        icon: "🎊",
        color: "#8b5cf6",
      },
    ],
    congressional: [
      {
        phase: "Redistricting (every 10 years)",
        timeframe: "Year following Census",
        description: "Congressional district boundaries redrawn based on new Census data",
        icon: "🗺️",
        color: "#6366f1",
      },
      {
        phase: "Primary Filing Deadline",
        timeframe: "Months before primary",
        description: "Candidates must file paperwork and pay fees to appear on the primary ballot",
        icon: "📝",
        color: "#a855f7",
      },
      {
        phase: "Primary Election",
        timeframe: "Spring/Summer of election year",
        description: "Party nominees selected for each district; dates vary by state",
        icon: "🗳️",
        color: "#ec4899",
      },
      {
        phase: "General Election Campaign",
        timeframe: "Summer–November",
        description: "Party nominees campaign against each other and against independents",
        icon: "📢",
        color: "#ef4444",
      },
      {
        phase: "Voter Registration Deadline",
        timeframe: "15–30 days before Election Day",
        description: "Deadline to register to vote in the general election (varies by state)",
        icon: "📋",
        color: "#f97316",
      },
      {
        phase: "Election Day",
        timeframe: "First Tuesday after first Monday in November",
        description: "Voters elect all 435 House members and ~33-34 senators",
        icon: "✅",
        color: "#22c55e",
      },
      {
        phase: "Certification",
        timeframe: "Weeks after Election Day",
        description: "Results certified by state election officials",
        icon: "📜",
        color: "#06b6d4",
      },
      {
        phase: "New Congress Convenes",
        timeframe: "January 3",
        description: "Newly elected members of Congress are sworn in",
        icon: "🏛️",
        color: "#3b82f6",
      },
    ],
    local: [
      {
        phase: "Candidate Filing",
        timeframe: "Several months before election",
        description: "Candidates file to appear on ballot (requirements vary by municipality)",
        icon: "📝",
        color: "#6366f1",
      },
      {
        phase: "Primary or Nomination",
        timeframe: "Varies by jurisdiction",
        description: "Some local elections use primaries; others use nonpartisan runoffs",
        icon: "🗳️",
        color: "#a855f7",
      },
      {
        phase: "Campaign Period",
        timeframe: "Weeks to months before election",
        description: "Candidates campaign in the community; forums and debates held",
        icon: "📢",
        color: "#ec4899",
      },
      {
        phase: "Voter Registration Deadline",
        timeframe: "Per state law",
        description: "Register to vote for local elections by the state deadline",
        icon: "📋",
        color: "#f97316",
      },
      {
        phase: "Election Day",
        timeframe: "Varies (often in odd years or spring)",
        description: "Vote for mayor, city council, school board, judges, and ballot measures",
        icon: "✅",
        color: "#22c55e",
      },
      {
        phase: "Certification & Runoff",
        timeframe: "Weeks after election",
        description: "Results certified; runoff election held if no candidate wins required majority",
        icon: "📜",
        color: "#06b6d4",
      },
    ],
  },

  // Step-by-step voting guide
  votingSteps: [
    {
      step: 1,
      title: "Check Your Eligibility",
      description:
        "Confirm you meet the requirements: U.S. citizen, 18+ years old on or before Election Day, resident of your state, and no disqualifying legal status.",
      tips: ["Check your state's specific rules at vote.gov", "Felony conviction rules vary by state"],
      icon: "✓",
    },
    {
      step: 2,
      title: "Register to Vote",
      description:
        "Register online, by mail, or in person at your local election office, DMV, or other government agencies. Check your state's deadline.",
      tips: [
        "Register at vote.gov or your state election website",
        "Keep a record of your registration confirmation",
        "Update your registration if you move or change your name",
      ],
      icon: "📝",
    },
    {
      step: 3,
      title: "Verify Your Registration",
      description:
        "Confirm your registration is active and your information is correct. Do this well before Election Day.",
      tips: [
        "Check at vote.gov or your state's voter portal",
        "Verify your address is current",
        "Know your party registration for primaries",
      ],
      icon: "🔍",
    },
    {
      step: 4,
      title: "Research the Candidates & Issues",
      description:
        "Study the candidates, ballot measures, and issues before you vote. An informed vote is the most powerful vote.",
      tips: [
        "Use Ballotpedia.org for nonpartisan info",
        "Read your official voter guide (mailed by your county)",
        "Watch candidate debates",
        "Check candidates' voting records",
      ],
      icon: "📚",
    },
    {
      step: 5,
      title: "Find Your Polling Place & Hours",
      description:
        "Locate your assigned polling place and note when it opens and closes. Consider early voting options.",
      tips: [
        "Find your polling place at vote.gov",
        "Poll hours are usually 6 AM – 8 PM (varies by state)",
        "Early voting may be available 1–45 days before Election Day",
        "Polling places can change between elections",
      ],
      icon: "📍",
    },
    {
      step: 6,
      title: "Prepare What to Bring",
      description:
        "Know what ID and documents your state requires. Prepare a sample ballot so you're ready to vote confidently.",
      tips: [
        "Check your state's ID requirements at vote.gov",
        "Bring your voter registration card if you have it",
        "Print a sample ballot to study beforehand",
        "If you need accommodations, contact your polling place in advance",
      ],
      icon: "🎒",
    },
    {
      step: 7,
      title: "Cast Your Vote",
      description:
        "Go to your polling place, check in with poll workers, receive your ballot, vote in private, and submit your ballot.",
      tips: [
        "Arrive early to avoid lines",
        "If you're in line when polls close, stay — you have the right to vote",
        "Ask poll workers for help if needed",
        "Review your ballot before submitting",
        "You can leave choices blank — only vote where you're comfortable",
      ],
      icon: "✅",
    },
    {
      step: 8,
      title: "After You Vote",
      description:
        "Track your ballot if voting by mail, follow election results, and stay engaged in the democratic process.",
      tips: [
        "Track mail ballots through your county's portal",
        "Results may take days for full counting",
        "Stay informed about certified results",
        "Consider becoming a poll worker for the next election",
      ],
      icon: "🎉",
    },
  ],

  // Quick topic categories
  topics: [
    { label: "Who Can Vote?", query: "who can vote" },
    { label: "How to Register", query: "how do i register to vote" },
    { label: "Election Day", query: "what happens on election day" },
    { label: "Early Voting", query: "what is early voting" },
    { label: "Vote by Mail", query: "what is vote by mail" },
    { label: "Electoral College", query: "how does the electoral college work" },
    { label: "Primary Elections", query: "what is a primary election" },
    { label: "Ballot Measures", query: "what is a ballot measure" },
    { label: "Voting Rights", query: "what are my voting rights" },
    { label: "Election Security", query: "how are elections secured" },
    { label: "Types of Elections", query: "what are the types of elections" },
    { label: "Congressional Districts", query: "how are congressional districts drawn" },
  ],
};
