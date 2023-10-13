/*   STEP 1   */
export const leagueID = "959500088391344128"; // your league ID
export const leagueName = "Another Year Another Conspiracy (AYAC)"; // your league name
export const dues = 175; // (optional) used in template constitution page
export const pot = 2100;
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>We, the Founders of the "Another Year Another Conspiracy" (AYAC) Fantasy Football League, in order to form a more perfect Union of camaraderie and competition, establish fairness, ensure the continued enjoyment of this digital pastime, and secure the blessings of friendship and sport to ourselves and our Posterity, do ordain and establish this Constitution for the AYAC Fantasy Football League.</p>
  <p>Since its formation in the Year of our Lord 2014, our League has striven to bring together Twelve Teams of diverse talents and aspirations, united in a common pursuit of triumph and fellowship. AYAC transcends the boundaries of mere sport, as it serves as a hallowed ground for friends to engage, connect, and create lasting memories.</p>
  <p>In the Year 2022, in the spirit of progress, our esteemed Constituents voted to usher in a new era, transforming AYAC into a Dynasty League, thereby augmenting our dedication to strategy, competition, and sustained involvement. As we embark upon this novel chapter, we reaffirm our commitment to the founding mission of fostering a controlled, competitive, and chaotic League of Fantasy, a sacred space where friends may gather and share in their ardor for the great game of Football.</p>
  <p>Our vision is to cultivate an unparalleled experience through AYAC, a decentralized and equitable League that promotes the formation of friendships and bestows upon each Owner the power to control their own destiny. We hold these truths to be self-evident, that all Owners are endowed with an unalienable right to fair play, spirited competition, and, most importantly, mirth.</p>
  <p>Henceforth, this Constitution shall delineate the fundamental principles, rules, and guidelines that shall govern our League, ensuring an exhilarating and delightful experience for all who partake.</p>
  <p>So, gird yourselves for battle and prepare to engage in another season of the AYAC Fantasy Football League, where the thrill of competition never wanes, and the bonds of friendship are forged upon the digital field of honor.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
        "managerID": "883394227965583360",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Brady F.",
        "role": "/managers/leader",
        "division": "/managers/sv",
        "location": "Virginia", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/commish.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "883481669816991744",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Gav R.",
        "role": "/managers/Rules",
        "division": "/managers/sv",
        "location": "South Carolina", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/gav.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "883545761143508992",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Tyler D.",
        "role": "/managers/owner",
        "division": "/managers/sv",
        "location": "Colorado", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/tblake.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "884141853103079424",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Bryan Z",
        "role": "/managers/treasurer",
        "division": "/managers/nk",
        "location": "Colorado", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/bz.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2018, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "959624535710474240",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Shaun R.",
        "role": "/managers/Morale",
        "division": "/managers/sv",
        "location": "Colorado", // (optional)
        "bio": `<p>Ladies and gentlemen, allow me to introduce you to Shaun, a true embodiment of the quintessential sports enthusiast within the colorful tapestry of our fantasy football league. His character is a study in multifaceted passion, where the worlds of sports and HVAC units collide, bringing forth a whirlwind of energy that permeates our league.</p>
    <p>Shaun is the oracle, the sage, the one to turn to for answers to your most pressing HVAC unit inquiries. His grasp of heating, ventilation, and air conditioning intricacies is as impressive as his competitiveness on the fantasy football battlefield. Indeed, he is more than a team owner; he is AYAC’s very own "Director of Morale," entrusted with the crucial task of fostering an engaging and spirited league atmosphere.</p>
    <p>At the core of Shaun's mission lies a crystal-clear objective: to preserve our league's fierce competitiveness, cultivate a culture of sustained engagement, and uphold our shared commitment to being a controlled, competitive, and occasionally chaotic League of Fantasy. His approach to this mission is unique—he employs the 'nice guy' strategy, weaving his friendly disposition and sportsmanship into the league's fabric, ensuring a sense of camaraderie among its members.</p>
    <p>As a devout follower of the Washington Commanders, Shaun infuses the league with an extra dose of fervor, as his unwavering support for his beloved NFL team spills over into the world of fantasy football. Remarkably, despite his relatively recent arrival in 2019, he left an indelible mark by capturing victory in his first two years, establishing an impressive average finishing position of 2nd.</p>
    <p>Nevertheless, recent polling of fellow league members has cast doubt on Shaun's once-celebrated prowess. Speculation abounds regarding whether he has indeed "lost his fastball" in terms of fantasy football performance. The resolution of this intriguing narrative, whether it marks a temporary dip or the inception of a new chapter in Shaun's fantasy journey, remains a tantalizing question. One thing is irrefutable—Shaun is an indispensable thread in the rich tapestry of our league, blending sports knowledge, HVAC expertise, and an unyielding competitive spirit that keeps us all on our toes.</p>`,
        "photo": "/managers/rich.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": `<p>In the realm of fantasy, he's forged a mystique,
    A strategy evolving, with surprises at its peak.
    Once unwavering, his draft-day prep did gleam,
    Now, it's the waiver wire where he finds his dream.</p>
    <p>A wolf in sheep's attire, he loves the element of surprise,
    Appearing as an underdog, cunning in disguise.
    Strategic moves he plots, opponents caught off guard,
    Keeps them on their toes, in a contest ever hard.</p>
    <p>As the Director of Morale, he wields a trade's finesse,
    Masterfully orchestrating deals, he's one to impress.
    Fleecing foes with lopsided trades, a crafty feat,
    Beneath the surface, his competitive fire can't be beat.</p>
    <p>Through highs and lows, he stands with unwavering might,
    Though draft-day zeal may fade, he adapts with insight.
    In the world of fantasy, he thrives and dares,
    A formidable force, catching rivals unawares.</p>`, // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "959805084676771840",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Marty",
        "role": "/managers/owner",
        "division": "/managers/nk",
        "location": "District of Columbia", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/marty.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "959834217913909248",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Scott M.",
        "role": "/managers/owner",
        "division": "/managers/nk",
        "location": "Nebraska", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/mower.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "961690995442192384",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Nick S.",
        "role": "/managers/owner",
        "division": "/managers/sv",
        "location": "District of Columbia", // (optional)
        "bio": `<p>Introducing Nick, an iconic figure among fantasy football's founding owners and a true enigma in the annals of the sport. Their passion for underachievement, often surpassing even the most lackluster, has elevated them to legendary status within the league. Indeed, Nick has elevated the act of embracing the bottom tier to an art form.</p>
    <p>What truly distinguishes this fantasy football luminary is their unorthodox affection for trades that inevitably leave them on the losing side. In an arena where owners typically strive to outmaneuver their rivals in trade negotiations, Nick revels in crafting deals that defy conventional wisdom, leaving fellow owners perpetually puzzled.</p>
    <p>With an average finishing rank of 8th, the 2022 season marked a watershed moment in Nick's storied career, as they clinched the coveted last place finish, solidifying their status as a true underdog of fantasy football. This achievement, far from being a source of discouragement, only seems to fuel their determination.</p>
    <p>In the grand tapestry of fantasy football history, Nick stands as a testament to the unpredictable nature of the sport. Will they continue to revel in their underdog status, or is there an unforeseen twist awaiting in their narrative? Only time will reveal the next chapter in the remarkable journey of Nick, a name that will undoubtedly echo through the ages.</p>`,
        "photo": "/managers/neek.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": `<p>In the realm of fantasy, a maverick takes the stage,
    With a philosophy that's marked by an unconventional gauge.
    Preparation, a stranger, on Draft Day's grand affair,
    Names picked with a hopeful heart, little more than a prayer.</p>
    <p>Statistics and dynamics, they play a minor role,
    Jersey colors and funny names, the currency for this soul.
    Trades are a merry dance, where whimsy leads the way,
    No strategy, just a hunch, a bold game they play.</p>
    <p>Setting lineups is a feat, where confusion takes the lead,
    A prayer to the football gods, it's their guiding creed.
    A team haphazardly assembled, a puzzle left to guess,
    In this whirlwind of chaos, they find their happiness.</p>
    <p>A path less trodden, they proudly stride,
    Zero data, little knowledge, their whimsy is their guide.
    Championship glory may ebb and sway,
    Yet in their unique approach, they make their own way.</p>`, // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "962214365006966784",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Cullen ",
        "role": "/managers/owner",
        "division": "/managers/sv",
        "location": "Maryland", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/CD.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "962582198572380160",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Kryth",
        "role": "/managers/owner",
        "division": "/managers/nk",
        "location": "Cali Breh", // (optional)
        "bio": `<p>Allow me to introduce you to Kryth, a multifaceted figure in the world of fantasy football—an individual whose passions, strategies, and quirks set him apart from the rest.</p>

    <p>Having been a foundational member of our league since its inception in 2014, Kryth made an unforgettable entrance by clinching the league championship in his debut season. Yet, as the sport evolved and strategies shifted, he embarked on a two-year odyssey through the turbulent waters of the toilet bowl competition. But do not be misled; Kryth remains as determined as ever.</p>
    
    <p>Within the realm of fantasy football, he embodies the spirit of a mid-tier team, consistently securing a respectable 6th place finish. His journey is nothing short of an underdog tale, one that continually keeps the league members on their toes, defying the constraints of expectations.</p>
    
    <p>Beyond the gridiron, Kryth leads a life of exhilaration. When not riding the waves or engrossed in tinkering projects within his garage, you'll find him behind the wheel, racing toward the thrill of the track. And let us not overlook his unique affection for vegetables, evidence of a team owner who appreciates the importance of a well-balanced diet.</p>
    
    <p>Kryth's voyage through the world of fantasy football is a testament to his unwavering passion for the game, his strategic prowess, and his commitment to staying true to his individuality. In a league often characterized by conformity, he stands as a captivating reminder that it's often the most idiosyncratic characters who leave the most enduring impressions.</p>
    `,
        "photo": "/managers/kris.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": `<p>In the realm of fantasy, a manager bold and bright,
    A blend of stubbornness and a steadfast light.
    With inspiration from Snyder, their course they chart,
    Infallible they deem, with a lion's heart.</p>
    
    <p>In drafting, they chase stars, oft overspending high,
    Big names that may not soar, but reach for the sky.
    Trading's where they shine, belief unwavering, true,
    Their moves, they say, are gold, a confident debut.</p>
    
    <p>Player acquisitions, inconsistent, it's confessed,
    Yet their conviction stands, they're never second best.
    Mistakes are seldom owned, the blame they shift,
    To the whims of fantasy gods, their spirits lift.</p>
    
    <p>Lineup choices show some sense, pragmatism bright,
    Weekly matchups analyzed, with keen foresight.
    Yet stubbornness prevails, in fault's domain,
    They're the captain of the ship, in sunshine or in rain.</p>
    
    <p>Through highs and lows, they stand tall and grand,
    In their world, fault lies not with their hand.
    It's the fantasy gods, they say, who write the play,
    In their conviction and inspiration, they find their way.</p>`, // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "962590696999903232",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Mikey",
        "role": "/managers/vicepres",
        "division": "/managers/nk",
        "location": "Colorado", // (optional)
        "bio": `<p>Allow me to introduce you to the intriguing story of Mikey and Jacky, a fantasy football team unlike any other, masterfully chronicled in the annals of the league.</p>

    <p>At its core, Mikey and Jacky is a dynamic duo, two owners at the helm, steering their ship through the turbulent seas of fantasy football. Their partnership is a compelling tale of contrasting journeys and shared aspirations.</p>
    
    <p>The first owner, a league original since its inception in 2014, embodies the quintessential fantasy football evolution. From humble beginnings, where he found himself nestled in the middle of the pack, he rose like a phoenix to claim victory in 2017 and then again in 2021. These triumphs stand as monuments to his unwavering determination and competitive spirit. <p>However, a notable hiccup marred his journey in 2018, as he failed to fulfill a league punishment, a testament to his rebellious streak.</p>
    
    <p>Yet, beyond the realm of touchdowns and tackles, this owner is a polymath of passions and hobbies, painting a vibrant canvas of diverse interests. Here, in brief, are 10 glimpses into his multifaceted persona: Vintage book collecting, Bonsai tree cultivation, Homebrewing craft beer, Astrophotography, Competitive chili cook-offs, Archery and bowhunting, Urban exploration, Martial arts training, Amateur stand-up comedy, Skydiving adventures
    <p>Now, enter the second owner, a newcomer who assumed the moniker 'Bob the Builder.' His induction into the league in 2022 was marked by a commendable 6th-place finish. However, 'Bob' carries a hidden ace up his sleeve—a fervent love for Zyns, adding a unique flavor to his identity.</p>
    
    <p>To break free from the chains of mediocrity, these two decided to unite their strengths. Their partnership promises a fusion of fresh perspectives, innovative strategies, and a blend of football knowledge and diverse interests. In Mikey and Jacky, we witness the birth of a force poised to etch an indelible mark on the league's history, a journey brimming with intrigue, surprises, and boundless excitement.</p>
    `,
        "photo": "/managers/mikeyP.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": `<p>In realms of fantasy, a team takes flight,
    A duo in charge, their vision burning bright.
    One leads the charge, the other, a grace,
    A blend of personas, a harmonious embrace.</p>
    
    <p>"Go big or go home," their rallying cry,
    No room for mediocrity, no settling to try.
    Risk is their ally, reward their sweet song,
    In calculated gambles, they find where they belong.</p>
    
    <p>They raise their voice, with rules they take aim,
    Victory points and PPR, they yearn to reclaim.
    Passion drives them, to shape the game's course,
    A vision distinct, a fervent football force.</p>
    
    <p>Numbers and data, they don't hold the sway,
    Deep football knowledge, their guiding ray.
    Instincts prevail, in player picks they trust,
    A game played with heart, in their chosen football gust.</p>
    
    <p>Through peaks and through valleys, they stand undeterred,
    A steadfast belief, in the long run they've learned.
    Patience is their ally, their anchor through strife,
    In the dance of the season, they navigate life.</p>
    
    <p>A captivating mix, of fire and of might,
    In fantasy's world, they're a wondrous sight.
    Passion, strategy, and a hint of dissent,
    In a league of their own, they stand confident.</p>
    `, // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "986811330487189504",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Kyle",
        "role": "/managers/owner",
        "division": "/managers/nk",
        "location": "Maryland", // (optional)
        "bio": "Lorem ipsum...",
        "photo": "/managers/kc.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": "Your fantasy team's philosophy", // (optional)
        "duesPaid": true,
    },
    {
        "managerID": "986650743610351616",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
        "name": "Jacky",
        "role": "/managers/owner",
        "division": "/managers/nk",
        "location": "Colorado", // (optional)
        "bio": `<p>Allow me to introduce you to the intriguing story of Mikey and Jacky, a fantasy football team unlike any other, masterfully chronicled in the annals of the league.</p>

    <p>At its core, Mikey and Jacky is a dynamic duo, two owners at the helm, steering their ship through the turbulent seas of fantasy football. Their partnership is a compelling tale of contrasting journeys and shared aspirations.</p>
    
    <p>The first owner, a league original since its inception in 2014, embodies the quintessential fantasy football evolution. From humble beginnings, where he found himself nestled in the middle of the pack, he rose like a phoenix to claim victory in 2017 and then again in 2021. These triumphs stand as monuments to his unwavering determination and competitive spirit. <p>However, a notable hiccup marred his journey in 2018, as he failed to fulfill a league punishment, a testament to his rebellious streak.</p>
    
    <p>Yet, beyond the realm of touchdowns and tackles, this owner is a polymath of passions and hobbies, painting a vibrant canvas of diverse interests. Here, in brief, are 10 glimpses into his multifaceted persona: Vintage book collecting, Bonsai tree cultivation, Homebrewing craft beer, Astrophotography, Competitive chili cook-offs, Archery and bowhunting, Urban exploration, Martial arts training, Amateur stand-up comedy, Skydiving adventures
    <p>Now, enter the second owner, a newcomer who assumed the moniker 'Bob the Builder.' His induction into the league in 2022 was marked by a commendable 6th-place finish. However, 'Bob' carries a hidden ace up his sleeve—a fervent love for Zyns, adding a unique flavor to his identity.</p>
    
    <p>To break free from the chains of mediocrity, these two decided to unite their strengths. Their partnership promises a fusion of fresh perspectives, innovative strategies, and a blend of football knowledge and diverse interests. In Mikey and Jacky, we witness the birth of a force poised to etch an indelible mark on the league's history, a journey brimming with intrigue, surprises, and boundless excitement.</p>`,
        "photo": "/managers/Jtyler.png", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "philosophy": `<p>In realms of fantasy, a team takes flight,
    A duo in charge, their vision burning bright.
    One leads the charge, the other, a grace,
    A blend of personas, a harmonious embrace.</p>
    
    <p>"Go big or go home," their rallying cry,
    No room for mediocrity, no settling to try.
    Risk is their ally, reward their sweet song,
    In calculated gambles, they find where they belong.</p>
    
    <p>They raise their voice, with rules they take aim,
    Victory points and PPR, they yearn to reclaim.
    Passion drives them, to shape the game's course,
    A vision distinct, a fervent football force.</p>
    
    <p>Numbers and data, they don't hold the sway,
    Deep football knowledge, their guiding ray.
    Instincts prevail, in player picks they trust,
    A game played with heart, in their chosen football gust.</p>
    
    <p>Through peaks and through valleys, they stand undeterred,
    A steadfast belief, in the long run they've learned.
    Patience is their ally, their anchor through strife,
    In the dance of the season, they navigate life.</p>
    
    <p>A captivating mix, of fire and of might,
    In fantasy's world, they're a wondrous sight.
    Passion, strategy, and a hint of dissent,
    In a league of their own, they stand confident.</p>
    `, // (optional)
        "duesPaid": true,
    },
]


/*   !!  !!  IMPORTANT  !!  !! */
/*
Below is the most up to-date version of a manager. Please leave this commented out
and don't delete it. This will be updated if any fields are added, removed or changed
and will allow updates without causing merge conflicts
*/

// {
//   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//   "name": "Your Name",
//   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//   "location": "Brooklyn", // (optional)
//   "bio": "Lorem ipsum...",
//   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//   "rival": {
//     name: "Rival", // Can be anything (usually your rival's name)
//     link: 6, // manager array number within this array, or null to link back to all managers page
//     image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//   },
//   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//   "philosophy": "Your fantasy team's philosophy", // (optional)
//   "tradingScale": 10, // 1 - 10 (optional)
//   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//   "duesPaid": true, // (optional) defaults to false
// },
    