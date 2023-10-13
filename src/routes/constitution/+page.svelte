<script>
    import {pot} from '$lib/utils/helper';

    let one;
    let two, twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix;
    let three, threeOne, threeTwo, threeThree, threeFour;
    let four, fourOne, fourTwo, fourThree, fourThreeOne, fourThreeTwo;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour;
    let six, sixOne, sixTwo, sixTwoOne, sixThree;
    let seven, sevenOne, sevenOneOne, sevenOneTwo, sevenOneThree, sevenTwo, sevenTwoOne, sevenTwoTwo, sevenTwoThree,
        sevenThree, sevenFour;
    let eight, eightOne, eightOneOne, eightOneTwo, eightTwo, eightThree;
    let nine;
    let ten, tenOne, tenTwo, tenThree, tenThreeOne, tenThreeTwo, tenThreeThree, tenFour;
    let eleven;


    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h6 {
        font-size: 1em;
        line-height: 1em;
        font-style: italic;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    .red {
        color: #ff0000;
        background: transparent;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    table, th, td {
        border: 1px solid black;
    }

    th, td {
        padding: 8px 12px;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #d3d3d3;
        color: black;
    }

    tr:nth-child(odd) {
        background-color: #ffffff;
        color: black;
    }

    th {
        background-color: #f5deb3;
        color: black;
    }

    p {
        color: #d3d3d3;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">AYAC LEAGUE CONSTITUTION</h1>

    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Article 1: League Overview</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Article 2: League Officers</h3>

    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draft Day Trades</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoFour)}>2.4 Consultation And Assistance</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoFive)}>2.5 Contacting Committee Members</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(twoSix)}>2.6 Time-Sensitive Issues And
        Communication</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Article 3: League Financing</h3>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 League Fees And Payments</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>3.2 League Fee Details</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>3.3 Late Payment</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(threeFour)}>3.4 Prize Money Distribution</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Article 4: League Structure, Scheduling, &
        Playoffs</h3>

    <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 League Structure</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Regular Season</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fourThree)}>4.3 League Playoffs</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fourThreeOne)}>4.3.1 The Sacko Bowl</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Article 5: League Ranking & Scoring</h3>

    <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 League Weekly Scoring</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>5.2 Ranking Criteria</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>5.3 League & Conference Rankings</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveFour)}>5.4 Weekly Scoring Ssytem</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Article 6: Loser Punishment</h3>

    <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Loser Qualification</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Loser Punishment</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwoOne)}>6.2.1 Loser Punishment Details</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Failure to Comply</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 7: Draft & Draft Order
        Determination</h3>

    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 Inaugural Dynasty League Draft</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOneOne)}>7.1.1 The Inaugural Dynasty League
        Draft Scheduling</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOneTwo)}>7.1.2 Inaugural Dynasty League Draft
        Order</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOneThree)}>7.1.3 Additional Inaugural Dynasty
        League Draft Details</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwo)}>7.2 Subsequent Seasons' Draft Order</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwoOne)}>7.2.1 Subsequent Seasons' Draft
        Scheduling</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwoTwo)}>7.2.2 Subsequent Seasons' Draft
        Order</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenTwoThree)}>7.2.3 Additional Subsequent Seasons'
        Draft Details</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenThree)}>7.3 New Team Draft Positions</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenFour)}>7.4 Draft Tooling and Engagement</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Article 8: Roster Line-ups, Free Agency, &
        Trades</h3>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 Rosters & Starting Line-ups</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOneOne)}>8.1.1 IR Spots</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOneTwo)}>8.1.2 Taxi Squad Spots</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>8.2 Free Agency</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(eightThree)}>8.3 Trades</h4>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>Article 9: Offseason</h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>Article 10: Creating New Rules</h3>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenOne)}>10.1 Proposed Rule Changes</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenTwo)}>10.2 Vote Allocation</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThree)}>10.3 Mid-Season Disputes & Rule
        Changes</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThreeOne)}>10.3.1 Urgent, Mid-Season Disputes</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThreeTwo)}>10.3.2 Non-Urgent, Mid-Season
        Disputes</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenThreeThree)}>10.3.3 Mid-Season Rule Changes</h4>
    <h4 class="noUnderscore clickable" on:click={() => goToSection(tenFour)}>10.4 Offseason Disputes & Rule Changes</h4>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eleven)}>Article 11: Roster Oversights</h3>

    <hr/>

    <h2 class="sectionHeading" bind:this={one}>Article 1: League Overview</h2>

    <p>We, the Founders of the "Another Year Another Conspiracy" (AYAC) Fantasy Football League, in order to form a more
        perfect Union of camaraderie and competition, establish fairness, ensure the continued enjoyment of this digital
        pastime, and secure the blessings of friendship and sport to ourselves and our Posterity, do ordain and
        establish this Constitution for the AYAC Fantasy Football League.</p>
    <p>Since its formation in the Year of our Lord 2014, our League has striven to bring together Twelve Teams of
        diverse talents and aspirations, united in a common pursuit of triumph and fellowship. AYAC transcends the
        boundaries of mere sport, as it serves as a hallowed ground for friends to engage, connect, and create lasting
        memories.</p>
    <p>In the Year 2022, in the spirit of progress, our esteemed Constituents voted to usher in a new era, transforming
        AYAC into a Dynasty League, thereby augmenting our dedication to strategy, competition, and sustained
        involvement. As we embark upon this novel chapter, we reaffirm our commitment to the founding mission of
        fostering a controlled, competitive, and chaotic League of Fantasy, a sacred space where friends may gather and
        share in their ardor for the great game of Football.</p>
    <p>Our vision is to cultivate an unparalleled experience through AYAC, a decentralized and equitable League that
        promotes the formation of friendships and bestows upon each Owner the power to control their own destiny. We
        hold these truths to be self-evident, that all Owners are endowed with an unalienable right to fair play,
        spirited competition, and, most importantly, mirth.</p>
    <p>Henceforth, this Constitution shall delineate the fundamental principles, rules, and guidelines that shall govern
        our League, ensuring an exhilarating and delightful experience for all who partake.</p>
    <p>So, gird yourselves for battle and prepare to engage in another season of the AYAC Fantasy Football League, where
        the thrill of competition never wanes, and the bonds of friendship are forged upon the digital field of
        honor.</p>

    <h2 class="sectionHeading" bind:this={two}>Article 2: League Officers</h2>

    <p>In pursuit of decentralizing power and forging a fair and equitable league, we hereby establish a Leadership
        Committee comprising five distinguished roles: the League Commissioner, Vice Commissioner, League Treasurer,
        Governor of Rules, and Morale & Fair Gaming Officer.</p>

    <h5>League Commissioner - Brady Fox</h5>
    <p>The League Commissioner shall serve as the primary authority in the league, overseeing all league operations and
        ensuring that the league adheres to the principles outlined in this Constitution. The Commissioner shall act as
        the primary point of contact for league-specific issues and shall coordinate to maintain the overall integrity
        of the league.</p>

    <h5>League Vice Commissioner - Mike Pirone</h5>
    <p>The Vice Commissioner shall assist the League Commissioner in their duties and assume the role of acting
        Commissioner in the absence or unavailability of the League Commissioner. They shall also collaborate with the
        Commissioner and other committee members in the decision-making process and address league concerns as they
        arise. Under no circumstances is the Vice Commissioner able to amend the constitution with written approval from
        the League commissioner.</p>

    <h5>League Treasurer - Bryan Zierk</h5>
    <p>The League Treasurer is entrusted with the financial management of the league. They shall ensure the security of
        all league funds, and be responsible for transferring all collected funds to the respective owners at the end of
        the season, as detailed in the payout section of this Constitution. As Treasurer, their responsibilities are
        limited to collecting, safely storing, and distributing funds. All decisions related to financial matters must
        be approved by the Executive Committee.</p>

    <h5>Governor of Rules - Gavin Royster</h5>
    <p>The Governor of Rules shall be responsible for addressing any rule concerns and ensuring the league remains
        compliant with the Constitution. They will collect rule change recommendations from Owners and work closely with
        the Executive Committee to evaluate and implement any approved changes. The Governor of Rules is charged with
        maintaining the integrity of the league rules and enforcing adherence to the Constitution.</p>

    <h5>Director of Morale - Shaun Ritchey</h5>
    <p>The Director of Morale is responsible for fostering an engaging and spirited league atmosphere. Their primary
        goal is to ensure the league remains competitive, encourages sustained involvement, and upholds its commitment
        to a controlled, competitive, and chaotic League of Fantasy. The Director of Morale shall work to create a
        sacred space where friends gather and share in their ardor for the great game of Football, promoting camaraderie
        and enjoyment among all Owners</p>
    <h3 bind:this={twoOne}>2.1 Committee Responsibilities</h3>
    <p>The Executive Committee shall hold the responsibility of resolving all disputes that are not explicitly addressed
        within this Constitution. Should a Committee member find themselves involved in a dispute, they must recuse
        themselves from the decision-making process.</p>

    <h3 bind:this={twoTwo}>2.2 Owner Suggestions And Committee Decisions</h3>
    <p>While all Owners are encouraged to submit suggestions and recommendations to the Committee, it is imperative to
        acknowledge that the Committee's decision on all matters shall be deemed final and binding.</p>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>

    <h3 bind:this={twoThree}>2.3 Committee Tenure And Selection</h3>
    <p>The Committee members shall be selected yearly, with Owners having the option to opt into a position. Should
        positions remain vacant, an annual vote shall be held to determine the appointment of these positions. There
        shall be no term-limits, and Owners reserve the right to replace a member mid-season if deemed necessary by the
        majority.</p>

    <h3 bind:this={twoFour}>2.4 Consultation and Assistance</h3>
    <p>The League Committee stands ready to assist and address any inquiries that may arise. However, before seeking
        their counsel, Owners are advised to consult this Constitution for guidance.
    </p>
    <h3 bind:this={twoFive}>2.5 Contacting Committee Members</h3>
    <p>For league-specific concerns, Owners should first contact the League Commissioner and the relevant committee
        member. In the absence of the League Commissioner, Owners may seek the assistance of another committee member.
    </p>
    <h3 bind:this={twoSix}>2.6 Time-Sensitive Issues And Communication</h3>
    <p>If an Owner is unable to reach the Commissioner or any Committee member and faces a time-sensitive issue (such as
        a roster modification due to lack of Internet access), they should make their request in the league group chat
        "AYAC." By doing so, the time of the request can be verified, and any necessary roster changes may be made
        retroactively as required.
    </p>

    <h2 class="sectionHeading" bind:this={three}>Article 3: League Financing</h2>

    <h3 bind:this={threeOne}>3.1 League Fee And Payment</h3>
    <p>The league fee for AYAC shall be charged to each team owner and committee member, payable to the Treasurer 24
        hours before the draft. Should a team owner fail to submit the appropriate entry fee, they shall be charged a
        late fee of 5% per week, commencing from the start of the draft. All late fees collected shall be allocated to
        the Winner Prize Pool.
    </p>
    <h3 bind:this={threeTwo}>3.2 League Fee Details</h3>
    <p>The AYAC league fee for the 2023 season is set at 175 peanuts for each team owner and committee member, to be
        paid via Venmo to the League Treasurer. The Treasurer's Venmo handle is @Bryan-zierk. In case of any confusion,
        please confirm with Bryan Zierk. The 175 peanut fee is due 24 hours before the draft and will constitute 100% of
        the prize pot to be distributed at the end of the regular season.
    </p>
    <h3 bind:this={threeThree}>3.3 Late Payment</h3>
    <p>Should a team owner fail to submit the appropriate entry fee, they shall be charged a late fee of 5% per week,
        commencing from the start of the draft. Furthermore, any weekly points (Kicker and Weekly Points For and
        Against) accrued by a team who hasn’t paid their league entry fee (by the time the weekly prize is won) will be
        forfeited. If a team has not paid their entry fee by the final game of the season, they will be expelled
        immediately.
    </p>
    <p>Neither the commissioner or the wider leadership committee has discretion for providing a grace period to collect
        fees. The commissioner will take over managing the delinquent team for the purposes of the championship/loser
        brackets. In the event of a team takeover, any prize winnings and punishments will carry over to the next
        season.
    </p>
    <h3 bind:this={threeFour}>3.4 Prize Money Distribution</h3>
    <p>League prize money shall be paid out within seven days of the completion of the AYAC Super Bowl. Funds will be
        held in Venmo until the end of the season. The Prize Money will be distributed as follows:
    </p>
    <ol>
        <li>League Champion: ${Math.ceil(pot * .5714)} (57.14%)</li>
        <li>League Runner-up: ${Math.ceil(pot * .25)} (25%)</li>
        <li>League Third Place: ${Math.ceil(pot * .0833)} (8.33%)</li>
        <li>Most Points For (including playoffs): ${Math.ceil(pot * 0.238)} (2.38%)</li>
        <li>Highest Week Score (including playoffs): ${Math.ceil(pot * 0.238)} (2.38%)</li>
        <li>Most Points Against (regular season): ${Math.ceil(pot * 0.238)} (2.38%)</li>
        <li>Best Kicker (regular season): ${Math.ceil(pot * 0.238)} (2.38%)</li>
    </ol>
    <p>The payouts detailed above shall be considered the actual payout amounts pending verification of payment from all
        owners. Payout percentages were added and will be used if we are unable to collect some fees from all league
        owners.
    </p>

    <h2 class="sectionHeading" bind:this={four}>Article 4: League Structure, Schedule, & Playoffs</h2>

    <h3 bind:this={fourOne}>4.1 League Structure</h3>
    <p>The AYAC league comprises 12 teams, with each team having the option to include a maximum of 2 co-owners. The
        league is organized into 2 conferences each consisting of 6 teams and will be randomly determined via drawing
        names from a hat on a livestream.
    </p>
    <p>The league's regular season will span 14 weeks (NFL Week 1 - Week 14), followed by a 3-week playoff schedule
        (Week 15-17). This structure ensures a competitive and dynamic season for all participating teams and their
        owners.
    </p>

    <h3 bind:this={fourTwo}>4.2 Regular Season</h3>
    <p>
        During the AYAC league's regular season teams will each member of the league once (1 time for a total of 11
        matchups) and three inter-conference opponents one additional time (for a total of 3 matchups) The regular
        season schedule will be randomly generated. This format ensures a balanced and competitive schedule, allowing
        for robust rivalries and fostering connections.
    </p>

    <h3 bind:this={fourThree}>4.3 League Playoffs</h3>
    <p>
        The AYAC league’s 3-week playoff schedule will commence on Week 15 of the NFL regular season and consist of a
        Winner Bracket (The Cornelius Memorial Bowl) and a Loser’s Bracket (The Sacko Bowl).

    </p>

    <h3 bind:this={fourThreeOne}>4.3.1 The Cornelius Memorial Bowl</h3>
    <p>The top 2 teams from each conference and 2 wildcard teams will be awarded a playoff spot. Final conference, and
        wildcard rankings will be based on the rules outlined in Article 5.</p>

    <h5>The Cornelius Memorial Bowl Format</h5>
    <table>
        <tr>
            <th>Playoffs Round 1: Week 15 - Wildcard Round</th>
            <th>Winner</th>
            <th>
                <mark class="red">Loser</mark>
            </th>
        </tr>
        <tr>
            <td><b>Game 1:</b> #3 Seed
                <mark class="red">vs</mark>
                #6 Seed
            </td>
            <td>Round 2</td>
            <td>Eliminated</td>
        </tr>
        <tr>
            <td><b>Game 2:</b> #4 Seed
                <mark class="red">vs</mark>
                #5 Seed
            </td>
            <td>Round 2</td>
            <td>Eliminated</td>
        </tr>
        <tr>
            <td><b>Bye Week:</b> Conf. 1 Winner;
                Conf. 2 winner
            </td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
        <tr>
            <th>Playoffs Round 2: Week 16 - Semi-Finals Sponsored by Breezy</th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td><b>Game 3:</b> #1 Seed
                <mark class="red">vs</mark>
                Lowest Remaining Seed
            </td>
            <td>Game 6</td>
            <td>Game 5</td>
        </tr>
        <tr>
            <td><b>Game 4:</b> #2 Seed
                <mark class="red">vs</mark>
                Highest Remaining Seed
            </td>
            <td>Game 6</td>
            <td>Game 5</td>
        </tr>
        <tr>
            <th>Playoffs Round 3: Week 17 - Cornelius Memorial Championship</th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td><b>Game 5:</b> Game 3 Loser
                <mark class="red">vs</mark>
                Game 4 Loser
            </td>
            <td>3rd Place</td>
            <td>4th Place</td>
        </tr>
        <tr>
            <td><b>Game 6:</b> Game 3 Winner
                <mark class="red">vs</mark>
                Game 4 Winner
            </td>
            <td>Champion</td>
            <td>Runner Up</td>
        </tr>
    </table>


    <h3 bind:this={fourThreeTwo}>4.3.2 The Sacko Bowl</h3>
    <p>Starting week 15 and running through Week 17, AYAC’s bottom six teams, as determined by Article 5, will compete
        in the 3-week Sacko Bowl. The lower bracket teams play to avoid battling for last place. The LOSING team from
        each round gets flushed to the next round. The team that comes in last will be deemed the Sacko, and will be
        required to fulfill the duties outlined in Article 7.
    </p>

    <h5>The Sacko Bowl</h5>
    <table>
        <tr>
            <th>Sacko Bowl Round 1: Week 15 - Wildcard Round</th>
            <th>Winner</th>
            <th>
                <mark class="red">Loser</mark>
            </th>
        </tr>
        <tr>
            <td><b>Game 1:</b> #7 Seed
                <mark class="red">vs</mark>
                #10 Seed
            </td>
            <td>7th or 8th Ranked</td>
            <td>Round 2</td>
        </tr>
        <tr>
            <td><b>Game 2:</b> #8 Seed
                <mark class="red">vs</mark>
                #9 Seed
            </td>
            <td>7th or 8th Ranked</td>
            <td>Round 2</td>
        </tr>
        <tr>
            <td><b>Bye Week:</b> #12 Seed;
                #11 Seed
            </td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
        <tr>
            <th>Sacko Bowl Round 2: Week 16</th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td><b>Game 3:</b> #12 Seed
                <mark class="red">vs</mark>
                Highest Remaining Seed
            </td>
            <td>9th or 10th Ranked</td>
            <td>Game 5</td>
        </tr>
        <tr>
            <td><b>Game 4:</b> #11 Seed
                <mark class="red">vs</mark>
                Lowest Remaining Seed
            </td>
            <td>9th or 10th Ranked</td>
            <td>Game 5</td>
        </tr>
        <tr>
            <th>Sacko Bowl Round 3: Week 17 - King Championship</th>
            <th></th>
            <th></th>
        </tr>
        <tr>
            <td><b>Game 5:</b> Game 3 Loser
                <mark class="red">vs</mark>
                Game 4 Loser
            </td>
            <td>11th Ranked</td>
            <td>Sacko</td>
        </tr>
        <tr>
            <td><b>Game 6:</b> Game 3 Winner
                <mark class="red">vs</mark>
                Game 4 Winner
            </td>
            <td>Champion</td>
            <td>Runner Up</td>
        </tr>
    </table>

    <h2 class="sectionHeading" bind:this={five}>Article 5: League Ranking & Scoring</h2>

    <h3 bind:this={fiveOne}>5.1 League Weekly Scoring</h3>
    <p>The AYAC league's scoring system awards a total of 6 points per week. Six of these points will be allocated to
        the six matchup winners. In the event of a tie, points will be equally distributed among the tied teams.
    </p>

    <h3 bind:this={fiveTwo}>5.2 Ranking Criteria</h3>
    <p>Teams will be given a League Rank and a Conference Rank, both are based on the following criteria:
    </p>

    <ol>
        <li>Record</li>
        <li>Total Points Scored - Year to Date</li>
        <li>Conference Record</li>
        <li>Total points-against</li>
        <li>Coin Flip</li>
        <li>Teams will receive a League Rank and a Divisional rank</li>
    </ol>

    <h3 bind:this={fiveThree}>5.3 League & Conference Rankings</h3>
    <p>Teams will receive a League rank and a Conference rank. Official playoff seeding will be based on the following:
    </p>

    <p>
        <em>Seeds 1 & 2.</em>
        Awarded to Conference winners. Final seed will be determined by the final League rank.
    </p>

    <p>
        <em>Seed 3 & 4.</em>
        Awarded to 2nd place Conference finishers. Final seed will be determined by the final League rank.
    </p>

    <p>
        <em>Seed 5 & 6.</em>
        Of the remaining 8 teams, wildcard spots will be awarded to the two teams with the highest league
        rank. The highest 2 teams Wildcard spots awarded to the two highest remaining league finishers.
    </p>

    <p>
        <em>Sacko Bowl.</em>
        All remaining teams will be entered into the Sacko Bowl.
    </p>

    <p>This comprehensive scoring and ranking system ensures a competitive and engaging season for all participating
        teams, promoting both rivalry and camaraderie within the league.
    </p>

    <h3 bind:this={fiveFour}>5.4 Weekly Scoring System</h3>
    <p>Scoring in AYAC will primarily follow Standard, Non-PPR rules. A complete breakdown of scoring can be found under
        the League Tab in Sleeper. There are a couple of customizations that have been, all of which have been outlined
        below.
    </p>
    <p><b>Kicking:</b> -2 point for each PAT Missed, -2 points for each FG Missed (0-39 Yards), -1 point for each FG
        Missed (40-49 Yards), 0 points for each FG Missed (50+ Yards)
    </p>

    <h2 class="sectionHeading" bind:this={six}>Article 6: Loser Punishment</h2>

    <h3 bind:this={sixOne}>6.1 Loser Qualification</h3>
    <p>The loser of the Sacko Bowl, a 6-team playoff where the loser moves on, will be crowned and will be required to
        fulfill the duties outlined in Article 6. Section 2.
    </p>

    <h3 bind:this={sixTwo}>6.2 Loser Punishment</h3>
    <p>The Sacko will have the option of completing one of the three punishments which have been voted on by League
        Owners. Details of each of the three punishments can be found below. The Sacko will have until the day of the
        draft to complete the punishment of their choosing. Failure to complete the punishment will subject the Sacko to
        the rules outlined in Article 6.3.
    </p>

    <h3 bind:this={sixTwoOne}>6.2.1 Loser Punishment Details</h3>

    <h4>Option 1: Golf Punishment</h4>
    <div class="subBlock">
        <ol>
            <li>The Sacko plays a self-funded round of golf using only three (3) clubs + one (1) Putter.</li>
            <li>The Sacko can play a course of their choosing as long as it (1) has a handicap of 70+, (2) consists of
                18 holes, and (3) TOT is 6,000 yards.
            </li>
            <li>After each hole, the sacko’s score will determine their next action:</li>
            <ul>
                <li>If Bogey or Worse -> Shotgun a beer</li>
                <li>If Par or Better -> choose one club from your bag to use on the next hole</li>
            </ul>
            <li>Everyone will be given a starting handicap of 18 strokes to start the season. This handicap can change
                throughout the season depending on a team’s weekly score.
            </li>
            <ul>
                <li>Each week, a team’s handicap will be:</li>
                <ul>
                    <li>Deducted by 1 stroke for a weekly score below 65 points</li>
                    <li>Increased by 1 stroke for a weekly score of 105 or better</li>
                </ul>
                <li>The Sacko may distribute their handicap strokes to the holes of their choosing prior to the round.
                    This should be done on the scorecard and sent to the league prior to your round.
                </li>
            </ul>
            <li>Entire round must be captured on video</li>
        </ol>
    </div>

    <h4>Option 2: Caddy for the Winner</h4>
    <div class="subBlock">
        <ol>
            <li>Sacko must caddy for the winner for the entire round (18 holes) of golf.</li>
            <li>Sacko must purchase their own caddy uniform and wear it while caddying for the winner. The back of the
                uniform must say “Fantasy Football Loser.”
            </li>
            <li>Photos and videos must be taken throughout the round and distributed to the league.
            </li>
            <li>The Sacko is not allowed to play the round.</li>
        </ol>
    </div>

    <h4>Run a 5k</h4>
    <div class="subBlock">
        <ol>
            <li>The Sacko must register for a community 5k and run it in a uniform/out of the league’s choosing.
            </li>
            <li>Photos and videos must be taken through the round and distributed to the league.
            </li>
        </ol>
    </div>

    <h3 bind:this={sixThree}>6.3 Failure to Comply</h3>
    <p>The Sacko will be given until the day of the draft to complete the punishment outlined in Article 6. Section 2.
        Failure to complete the punishment in the time allotted will result in one of the following punishments:
    </p>

    <div class="subBlock">
        <ol>
            <li><b>First Offense:</b> Repayment of any prior year winnings AND a $180 fine. All proceeds will be equally
                distributed among the remaining league owners.
            </li>
            <li><b>Second Offense:</b> Repayment of any prior year winnings AND a $360 fine. All proceeds will be
                equally distributed among the remaining league owners.
            </li>
            <li><b>Third Offense:</b> A 5 year ban from the league with no exceptions or early termination.
            </li>
        </ol>
    </div>

    <h2 class="sectionHeading" bind:this={seven}>Article 7: Draft & Draft Order Determination</h2>

    <h3 bind:this={sevenOne}>7.1 Inaugural Dynasty League Draft</h3>
    <h3 bind:this={sevenOneOne}>7.1.1 The Inaugural Dynasty League Draft Scheduling</h3>
    <p>For AYAC’s inaugural Dynasty League season, the draft timing will reflect what we’ve done in prior years. The
        Vice Commissioner will designate a draft date that falls within 3 weeks of the start of the 2023 NFL Season.
    </p>

    <h3 bind:this={sevenOneTwo}>7.1.2 Inaugural Dynasty League Draft Order</h3>
    <p>For the inaugural year of our Dynasty League, the draft will follow the snake format and draft order will be
        determined randomly by drawing names from a hat on a livestream. This random determination will be exclusive to
        the first season of the AYAC Dynasty League.</p>

    <h3 bind:this={sevenOneThree}>7.1.3 Additional Inaugural Dynasty League Draft Details</h3>
    <p>AYAC’s Inaugural Dynasty League Draft will consist of a total of 17 rounds with all players being available to
        draft.
    </p>

    <h3 bind:this={sevenTwo}>7.2 Subsequent Season's Draft Order</h3>
    <h3 bind:this={sevenTwoOne}>7.2.1 Subsequent Seasons' Draft Scheduling</h3>
    <p>For each subsequent season, the Vice Commissioner will designate a draft date that falls within 3 weeks of the
        start of the 2023 NFL Season. This draft takes place in real-time with all members on a video conference.
    </p>

    <h3 bind:this={sevenTwoTwo}>7.2.2 Subsequent Seasons' Draft Order</h3>
    <p>In each subsequent season the draft position will be an inverse of the previous year’s results. The draft will be
        conducted in a linear, non-snake format.
    </p>

    <div class="subBlock">
        <h4>Draft Order Based on Previous Season Results</h4>
        <ul>
            <li><b>12th Place Finish:</b> 1st Draft Position</li>
            <li><b>11th Place Finish:</b> 2nd Draft Position</li>
            <li><b>10th Place Finish:</b> 3rd Draft Position</li>
            <li><b>9th Place Finish:</b> 4th Draft Position</li>
            <li><b>8th Place Finish:</b> 5th Draft Position</li>
            <li><b>7th Place Finish:</b> 6th Draft Position</li>
            <li><b>6th Place Finish:</b> 7th Draft Position</li>
            <li><b>5th Place Finish:</b> 8th Draft Position</li>
            <li><b>4th Place Finish:</b> 9th Draft Position</li>
            <li><b>3rd Place Finish:</b> 10th Draft Position</li>
            <li><b>2nd Place Finish:</b> 11th Draft Position</li>
            <li><b>1st Place Finish:</b> 12th Draft Position</li>
        </ul>
    </div>

    <h3 bind:this={sevenTwoThree}>7.2.3 Additional Subsequent Seasons' Draft Details</h3>
    <p>All subsequent drafts will comprise three (3) rounds and include both Rookies and Free Agents.
    </p>

    <h3 bind:this={sevenThree}>7.3 New Team Draft Positions</h3>
    <p>Should any new teams join the league, they will be slotted into the last (12th) draft position, and existing
        owner positions will be adjusted accordingly. This approach ensures a fair and consistent draft order, allowing
        for competitive balance throughout the league.
    </p>

    <h3 bind:this={sevenFour}>7.4 Draft Tooling and Engagement</h3>
    <p>All drafts will be conducted using our new league management system, Sleeper. The Commissioner will do their best
        to designate a draft time that works for all teams, but it’s ultimately the responsibility of the owners to do
        their best to make themselves available. Auto Drafting for more than 50% of a draft is restricted, and could
        result in removal from the league. It’s also strongly recommended that members join the league Google Hangout
        sponsored by Breezy - Replacing Strippers AC with OnlyFans since ‘22.
    </p>

    <h2 class="sectionHeading" bind:this={eight}>Article 8: Roster Line-ups, Free Agency, & Trades</h2>

    <h3 bind:this={eightOne}>8.1 Roster & Starting Line-ups</h3>
    <p>Active rosters consist of 15 players, 9 starters and 6 bench players. In addition to active roster spots, teams
        will also have 2 IR spots and 2 Taxi Squad Spots. Position limits can be found under our League Rules on
        Sleeper. Only players from the active roster may be used as part of a team's starting lineup.
    </p>

    <div class="subBlock">
        <h4>Starting lineups in AYAC will consist as follows:</h4>
        <ul>
            <li>1 quarterback</li>
            <li>2 running backs</li>
            <li>2 wide receivers</li>
            <li>1 tight end</li>
            <li>1 flex (RB/WR/TE)</li>
            <li>1 kicker</li>
            <li>1 defense/special teams</li>
        </ul>
        <p>All lineups must be submitted by the start of the players game. If your player is in a game that has started,
            they will become locked.
        </p>
    </div>

    <h3 bind:this={eightOneOne}>8.1.1 IR Spots</h3>
    <p>AYAC Inaugural Dynasty League Season will include 2 IR spots. Players on IR will not count against your 15-person
        active roster. Players must have a qualifying designation for IR. Once a player loses their designation, you
        will be required to either drop them or move them back to your active roster. Failure to do so will result in
        being unable to pick-up or trade players.
    </p>

    <h3 bind:this={eightOneTwo}>8.1.2 Taxi Squad Spots</h3>
    <p>AYAC Inaugural Dynasty League Season will include 2 Taxi Squad Spots. This allocation will not count against your
        15-person active roster and players with more than 1 year of experience in the NFL must be activated from the
        Taxi Squad.
    </p>
    <p>Teams must designate their Taxi Squad Players prior to the start of the regular season. Teams can move players
        from their Taxi Squad to their Active Roster (may require you to drop a player if their active roster is full).
        However, once the deadline passes, teams can NO longer move players into their Taxi Squad.
    </p>

    <h3 bind:this={eightTwo}>8.2 Free Agency</h3>
    <p>Free Agency, or Waiver Wire will follow Free Agent Auction/FAAB Bidding rules. Teams will have a $100 (not real
        money) budget with which they can bid to make player acquisitions. All bids are processed after the league's
        specified waiver period. If a team would like to add a player, that team will secretly bid an amount they are
        willing to pay. On the waiver process day, the team with the highest bid will be awarded the player, and the bid
        will be subtracted from that team's budget. Players who are not claimed during bid processing become free agents
        available for first come, first serve style pickups.
    </p>
    <p>The minimum bid per player is $0. After a team runs through their budget, they will be unable to bid.
    </p>

    <h3 bind:this={eightThree}>8.3 Trades</h3>
    <p>Trading is allowed and encouraged in AYAC, and may be conducted between any owner. Trades may include multiple
        players from any position as well as future draft picks. There is no limit on the number of trades an owner is
        able to make.
    </p>
    <p>Trading anything other than eligible players and draft picks is strictly forbidden under the rules of this
        constitution, and could result in immediate dismissal from AYAC.
    </p>
    <p>When a trade is agreed upon between the two owners at hand, it will be reported to the league as a whole. Once
        the trade has been reported to the league, all owners will have 24 hours to make a public counter offer. Any and
        all offers must be made over the AYAC group chat. If, after the 24 hour period, no other offers have been made,
        then the trade goes through. If a counteroffer has been made and an owner or owners accepts the new deal then
        the trade will become immediately binding. There are no vetoes.
    </p>
    <p>The Trade deadline is the 10th week of the season, four (4) weeks before the start of the playoffs.
    </p>

    <h2 class="sectionHeading" bind:this={nine}>Article 9: Offseason</h2>
    <p>Following the end of each AYAC season, teams will be able to drop, re-designate and trade players/picks, but all
        Free Agent and Waiver Wire Moves will be locked until after the AYAC’s draft. Immediately following the draft,
        the ability to make Free Agent and Waiver Wire moves will be unlocked and will remain unlocked until the end of
        the upcoming season.
    </p>

    <h2 class="sectionHeading" bind:this={ten}>Article 10: Creating New Rules</h2>
    <h3 bind:this={tenOne}>10.1 Rule Change Proposals</h3>
    <p>It’s the responsibility of the Governor of Rules to appropriately handle all league disputes. When a league
        dispute arises which has not been addressed in the league constitution, a discussion will ensue on possible
        resolutions to the dispute. Based on these discussions, the League’s Governor of Rules will create an online
        poll so that owners can vote on an appropriate course of action. The timing of these polls and path to
        resolution will ultimately depend on when the dispute takes place.
    </p>

    <h3 bind:this={tenTwo}>10.2 Vote Allocation</h3>
    <p>Every team, whether operating with a single owner or co-owners, is allocated one (1) vote per dispute. In the
        event that a team submits two responses, the Governor of Rules will consider the initial vote to be the source
        of truth.
    </p>

    <h3 bind:this={tenThree}>10.3 Mid-Season Disputes & Rule Changes</h3>
    <p>When a league dispute arises during the season, and is not addressed in the league constitution, it’s the
        responsibility of the Governor of Rules to (1) open a discussion on possible resolutions to the dispute and (2)
        determine the urgency to achieve resolution.
    </p>
    <h3 bind:this={tenThreeOne}>10.3.1 Urgent, Mid-Season Disputes</h3>
    <p>If the Governor of Rules deems a mid-season dispute to be urgent, it’s their responsibility to promptly create an
        online poll so that owners can vote on an appropriate course of action. The scope of this poll should be limited
        to the dispute at hand, and only include resolutions raised during the league’s discussion.
    </p>
    <h3 bind:this={tenThreeTwo}>10.3.2 Non-Urgent, Mid-Season Disputes</h3>
    <p>If the Governor of Rules does not find a mid-season dispute to be urgent, it’s their responsibility to catalog
        the dispute, along possible resolutions discussed by the league. All non-urgent mid-season disputes will be
        revisited according to Article 9. Section 4.
    </p>
    <h3 bind:this={tenThreeThree}>10.3.3 Mid-Season Rule Changes</h3>
    <p>League owners must come to a unanimous decision for any mid-season rules to go into effect. Once the league
        unanimously agrees on a rule change, the commissioner will amend the league constitution to reflect the
        unanimously agreed upon rule change.
    </p>
    <p>If the league does not unanimously agree, the Governor of Rules must treat the dispute as a non-urgent,
        mid-season dispute and handle according to Article 10. Section 3.2.
    </p>

    <h3 bind:this={tenFour}>10.4 Off-Season Disputes & Rule Changes</h3>
    <p>Each offseason and prior to the draft, the Governor of Rules will create an online poll for owners to vote on
        disputes that arose during the regular season. The scope of this poll should include all disputes from the
        previous season and only include resolutions raised during the league’s discussion.
    </p>
    <p>Any rules that receive eight (8) or more votes will be considered successful and be included in the AYAC
        Constitution prior to the start of the regular season.
    </p>

    <h2 class="sectionHeading" bind:this={eleven}>Article 11: Roster Oversights</h2>
    <p>In the spirit of competition and league fairness, owners may not start a lineup that gives the opposing team a
        clear advantage (exact definition to be determined by the Leadership Committee on a case by case basis). The
        committee reserves the right to step in and adjust the starting lineup of a team that is clearly trying to
        intentionally lose a game. If the committee must adjust a team's lineup in two consecutive weeks or for three or
        more weeks in any one season, the team will be considered inactive and the executive committee may assume
        ownership of the team. The original owner will forfeit any payouts, and remain responsible for any end of season
        punishments.
    </p>
    <p>If an owner has a roster slot open (either due to bye week or simple oversight), but has a backup player (not on
        bye, or OUT) available on their bench, then the Commissioner or Vice Commissioner must insert the available
        player in the open roster slot. If two eligible bench players exist then the player with the highest average
        projected point output for that week should be inserted.
    </p>
    <p>The commissioner will not make a substitution for a player who is OUT, regardless of when they were declared out.
        The one exception is when a roster is illegal, in which case substitutions must be made by the league
        commissioner.
    </p>
    <p>Team owners are allowed to have one open roster slot on their team during any given week, assuming that they make
        it known to the league that they are purposefully leaving that roster spot open. If one roster slot is open then
        the team owner will receive 0 points for that single roster spot.
    </p>
    <p>No team owner may have more than one open slot on their roster during a given week. If more than one position is
        left open on a roster, and there are no viable substitutes to fill in for those players, then the owners team
        will receive 0 points for the entire week and a loss.
    </p>

</div>