<script>
    import {dues} from '$lib/utils/helper';

    let one;
    let two, twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix;
    let three, threeOne, threeTwo, threeThree, threeFour;
    let four, fourOne, fourTwo, fourThree, fourThreeTwo;
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

    p {
        color: #777;
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
    <h4 class="noUnderscore clickable" on:click={() => goToSection(fourThreeTwo)}>4.3.2 The Sacko Bowl</h4>


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
        <li>League Champion: $1200 (57.14%)</li>
        <li>League Runner-up: $525 (25%)</li>
        <li>League Third Place: $175 (8.33%)</li>
        <li>Most Points For (including playoffs): $50 (2.38%)</li>
        <li>Highest Week Score (including playoffs): $50 (2.38%)</li>
        <li>Most Points Against (regular season): $50 (2.38%)</li>
        <li>Best Kicker (regular season): $50 (2.38%)</li>
    </ol>
    <p>The payouts detailed above shall be considered the actual payout amounts pending verification of payment from all
        owners. Payout percentages were added and will be used if we are unable to collect some fees from all league
        owners.
    </p>

    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>

    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15.
        Each team that wins their division and the 4 wild card teams that finish with the best records, will receive a
        playoff berth. The 2 teams that win their division will receive a bye week in the first round of the playoffs.
        Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>

    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>

    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots
        empty in order to improve your draft position may be subject to punishment, including but not limited to the
        forfeiture of draft selections.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>

    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against
        their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged
        but generally grounds for removal.</p>

    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooners will try to find a suitable candidate with some connection
        to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a
        dynasty commitment and will be very active within the league.</p>

    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager is
        offered a 50% reductioon on their first year buy-in.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>

    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a>
        and collection will be sent out no later than the first of August. All managers must be fully paid up before the
        start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be
        addd to their payment and will go towards the payouts at the end of the year.</p>

    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 8}$</li>
        <li>2nd place: {dues * 3}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout.
        Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the
        winner's prize.</p>

    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially
        comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

</div>