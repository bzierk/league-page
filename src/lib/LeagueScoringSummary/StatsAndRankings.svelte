<script>
    import Button, {Group, Label} from '@smui/button';
    import {generateGraph, gotoManager, round, managers} from '$lib/utils/helper';
    import {getManagerIDFromRosterID} from "$lib/utils/helperFunctions/universalFunctions";

    import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';
    import ScoringTeam from './ScoringTeam.svelte';
    import BarChart from '$lib/BarChart.svelte';

    export let key, tradesData, waiversData, weekRecords, weekLows, seasonLongRecords, seasonBestKicker, kickerScores,
        seasonLongLows, showTies, winPercentages, fptsHistories, lineupIQs, prefix, blowouts, closestMatchups,
        allTime = false, leagueTeamManagers, leagueWeekRecords, standings;

    let graphs = [];
    let curTable = 0;
    let curGraph = 0;

    let iqOffset = 0;
    let tables = [
        "Win Percentages",
        "Points",
        "Transactions",
    ]

    const year = allTime ? null : prefix;


    // let sortColumn = 'fptsFor';
    let sortOrder = false; // true for ascending, false for descending

    // function sortData(column) {
    //     sortColumn = column;
    //     sortOrder = !sortOrder;
    //     fptsHistories = fptsHistories.sort((a, b) => {
    //         let diff = a[column] - b[column];
    //         return sortOrder ? diff : -diff;
    //     });
    // }

    const mergeRecords = (seasonLongRecords, kickerScores, leagueWeekRecords, lineupIQs, managers, leagueTeamManagers, standings) => {
        const mergedRecords = [];

        // Iterate each league record and merge with other records
        for (const record of seasonLongRecords) {
            let updatedRecord = record;

            // Merge kicker points
            if (kickerScores) {
                const kickerRecord = kickerScores.find(k => k.rosterID == record.rosterID && k.year == record.year);
                if (kickerRecord) {
                    updatedRecord = {
                        ...updatedRecord,
                        kickerPoints: kickerRecord.kickerPoints,
                    }
                }
            }

            if (leagueWeekRecords) {
                //Sort leagueWeekRecords by descending 'fpts' and filter for current year:
                leagueWeekRecords = leagueWeekRecords.sort((a, b) => b.fpts - a.fpts).filter(w => w.year == record.year);
                // Grab first week record which matches rosterID and year as highest weekly score
                const weekRecord = leagueWeekRecords.find(w => w.rosterID == record.rosterID && w.year == record.year);
                if (weekRecord) {
                    updatedRecord = {
                        ...updatedRecord,
                        bestWeek: {
                            week: weekRecord.week,
                            fpts: weekRecord.fpts,
                        }
                    }
                }

                // Iterate week records in reverse order to find lowest weekly score
                const weekLow = leagueWeekRecords.reverse().find(w => w.rosterID == record.rosterID && w.year == record.year);
                if (weekLow) {
                    updatedRecord = {
                        ...updatedRecord,
                        worstWeek: {
                            week: weekLow.week,
                            fpts: weekLow.fpts,
                        }
                    }
                }
            }

            // Merge lineup IQs
            if (lineupIQs) {
                const lineupIQ = lineupIQs.find(l => l.rosterID == record.rosterID);
                if (lineupIQ) {
                    updatedRecord = {
                        ...updatedRecord,
                        iq: lineupIQ.iq,
                        potentialPoints: lineupIQ.potentialPoints,
                    }
                }
            }

            // Find manager's division
            if (managers) {
                const managerID = getManagerIDFromRosterID(leagueTeamManagers, record.rosterID, record.year)
                if (managerID) {
                    const manager = managers.find(m => m.managerID == managerID);
                    if (manager) {
                        updatedRecord = {
                            ...updatedRecord,
                            division: manager.division,
                        }
                    }
                }
            }

            // Merge in standings info
            if (standings) {
                const standing = Object.values(standings).find(s => s.rosterID == record.rosterID);
                if (standing) {
                    updatedRecord = {
                        ...updatedRecord,
                        divisionLosses: standing.divisionLosses,
                        divisionTies: standing.divisionTies,
                        divisionWins: standing.divisionWins,
                        losses: standing.losses,
                        ties: standing.ties,
                        wins: standing.wins,
                        fpts: standing.fpts,
                        fptsAgainst: standing.fptsAgainst,
                    }
                }
            }

            mergedRecords.push(updatedRecord);
        }
        return mergedRecords;
    }

    const sortStandings = (standingsInfo) => {
        const sortOrder = ["fptsAgainst", "divisionTies", "divisionWins", "fpts", "ties", "wins"];

        let finalStandings = Object.keys(standingsInfo).map((key) => standingsInfo[key]);

        for (const sortType of sortOrder) {
            if (!finalStandings[0][sortType] && finalStandings[0][sortType] != 0) {
                continue;
            }
            finalStandings = [...finalStandings].sort((a, b) => b[sortType] - a[sortType]);
        }

        return finalStandings;
    }

    const displayDivision = (division) => {
        if (division === "/managers/nk") {
            return "North Korea"
        } else if (division === "/managers/sv") {
            return "Soviet Union"
        }
    }

    const divisionNumber = (division) => {
        if (division === "/managers/nk") {
            return 1
        } else if (division === "/managers/sv") {
            return 2
        }
    }

    const changeTable = (newGraph) => {
        switch (newGraph) {
            case 0 - iqOffset:
            case (4 + (99 * iqOffset)):
                curTable = 0;
                break;
            case 1 - iqOffset:
            case 2 - iqOffset:
                curTable = 1 - iqOffset;
                break;
            case 3 - iqOffset:
                curTable = 2 - iqOffset;
                break;
            case 5 - (2 * iqOffset):
            case 6 - (2 * iqOffset):
                curTable = 3 - iqOffset;
                break;
            default:
                curTable = 0;
                break;
        }
    }

    const changeGraph = (newTable) => {
        switch (newTable) {
            case 0 - iqOffset:
                if (curGraph == 0 || curGraph == 4) {
                    break;
                }
                curGraph = 0;
                break;
            case 1 - iqOffset:
                if (curGraph == 1 - iqOffset || curGraph == 2 - iqOffset) {
                    break;
                }
                curGraph = 1 - iqOffset;
                break;
            case 2 - iqOffset:
                curGraph = 3 - iqOffset;
                break;
            case 3 - iqOffset:
                if (curGraph == 5 - (2 * iqOffset) || curGraph == 6 - (2 * iqOffset)) {
                    break;
                }
                curGraph = 5 - (2 * iqOffset);
                break;
            default:
                curGraph = 0;
                break;
        }
    }

    const setGraphs = (wD) => {
        const lineupIQGraph = {
            stats: lineupIQs,
            x: "Lineup IQ",
            stat: "%",
            header: "Manager Lineup IQ",
            field: "iq",
            short: "Lineup IQ"
        }

        const potentialPointsGraph = {
            stats: lineupIQs,
            x: "Points",
            stat: "",
            header: "Potential Points vs Points",
            field: "potentialPoints",
            secondField: "fpts",
            short: "Potential Points"
        }

        const winsGraph = {
            stats: winPercentages,
            x: "Wins",
            stat: "",
            header: "Team Wins",
            field: "wins",
            short: "Wins"
        }

        const winPercentagesGraph = {
            stats: winPercentages,
            x: "Win Percentage",
            stat: "%",
            header: "Team Win Percentages",
            field: "percentage",
            short: "Win Percentage"
        }

        const tradesGraph = {
            stats: tradesData,
            x: "# of trades",
            stat: "",
            header: "Number of Trades Managers Have Made",
            field: "trades",
            short: "Trades"
        }

        const waiversGraph = {
            stats: wD,
            x: "# of Waiver Moves",
            stat: "",
            header: "Waivers Moves Managers Have Made",
            field: "waivers",
            short: "Waivers"
        }
        const gs = [];

        if (lineupIQs[0]?.potentialPoints) {
            gs.push(generateGraph(lineupIQGraph, year));
        }
        gs.push(generateGraph(winsGraph, year, 5));
        gs.push(generateGraph(winPercentagesGraph, year));
        if (lineupIQs[0]?.potentialPoints) {
            gs.push(generateGraph(potentialPointsGraph, year, 10, 0));
        }
        if (key == "regularSeasonData") {
            gs.push(generateGraph(tradesGraph, year));
            gs.push(generateGraph(waiversGraph, year));
        }

        curGraph = 0;
        graphs = gs;
    }

    const setTransactionsAndGraphs = (wD) => {
        if (wD[0].rosterID) {
            for (let i = 1; i <= waiversData.length; i++) {
                if (!tradesData.find(t => t.rosterID == i)) {
                    tradesData.push({
                        rosterID: i,
                        trades: 0,
                    })
                }
            }
        }
        if (wD[0].managerID) {
            for (const userID in leagueTeamManagers.users) {
                if (!tradesData.find(t => t.managerID == userID)) {
                    tradesData.push({
                        managerID: userID,
                        trades: 0,
                    })
                }
            }
        }
        const transactions = [];

        for (const w of wD) {
            let trades = 0;
            if (tradesData[0].managerID) {
                trades = tradesData.find(t => t.managerID == w.managerID)?.trades || 0;
            } else if (tradesData[0].rosterID) {
                trades = tradesData.find(t => t.rosterID == w.rosterID)?.trades || 0;
            }
            const waivers = w.waivers;
            transactions.push({
                rosterID: w.rosterID,
                managerID: w.managerID,
                trades,
                waivers,
            })
        }

        setGraphs(wD)
        return transactions;
    }

    const setTables = (lIQs) => {
        const t = [
            "Win Percentages",
            "Points",
        ]
        if (key == "regularSeasonData") {
            t.push("Transactions")
        }
        if (!lIQs[0]?.potentialPoints) {
            iqOffset = 1;
        } else {
            t.unshift('Lineup IQs');
        }
        tables = t
    }

    $: transactions = setTransactionsAndGraphs(waiversData)
    $: changeTable(curGraph);
    $: changeGraph(curTable);
    $: setTables(lineupIQs)

    let mergedRecords = mergeRecords(seasonLongRecords, kickerScores, leagueWeekRecords, lineupIQs, managers, leagueTeamManagers, standings.standingsInfo);
    mergedRecords = sortStandings(mergedRecords);
    let innerWidth;

    let divisions = {};

    mergedRecords.forEach(record => {
        if (!divisions[record.division]) {
            divisions[record.division] = [];
        }
        divisions[record.division].push(record);
    });

</script>

<svelte:window bind:innerWidth={innerWidth}/>

<style>
    .division {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 10px auto 20px;
        width: 95%;
    }

    .banner {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 140px;
        width: 400px;
        border-radius: 40px;
        margin: 10px auto;
        background-repeat: no-repeat;
        background-size: auto 140px;
    }

    .banner-D-1 {
        background-image: url("/division-1-banner.png");
        background-position: left;
    }

    .banner-D-2 {
        background-image: url("/division-2-banner.png");
        background-position: right;
    }

    :global(.headerPrimary) {
        background-color: var(--headerPrimary);
        text-align: center;
    }

    .italic {
        display: block;
        font-style: italic;
        font-size: 0.9em;
        color: var(--g999);
    }

    :global(.recordTable) {
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
        margin: 2em;
    }

    :global(.rankingTable) {
        display: table;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
        margin: 2em auto 0.5em;
    }

    :global(.fpts-value) {
        font-size: 1em;
    }

    :global(.week-value) {
        font-size: 0.8em;
        color: grey;
        margin-top: 5px; /* Adding some margin to separate the two values */
    }

    .fullFlex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 3em auto 5em;
    }

    .rankingHolder {
        display: block;
        width: 100%;
        overflow-x: hidden;
    }

    .subTitle {
        font-style: italic;
        font-size: 0.7em;
        color: #888;
        line-height: 1.2em;
    }

    h4 {
        text-align: center;
        margin: 2em 0 1em;
    }

    .rankingTableWrapper {
        width: 25%;
    }

    .rankingInner {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        width: 400%;
        transition: margin-left 0.8s;
    }

    .buttonHolder {
        text-align: center;
        margin: 2em 0 4em;
    }

    :global(.cellName) {
        cursor: pointer;
        line-height: 1.2em;
        padding-left: 8px;
    }

    :global(.differentialName) {
        padding: 0.7em 0;
    }

    :global(.rank) {
        padding-right: 0;
    }

    .vs {
        padding-left: 0.6em;
        margin: 0.5em 0;
    }

    :global(.mdc-data-table__header-cell) {
        white-space: normal;
    }

    :global(.mdc-data-table__cell, .mdc-data-table__header-cell) {
        border-bottom-color: var(--borderOverride);
        text-align: center;
    }

    .table-container {
        overflow-x: auto;
    }

    /* Start button resizing */

    @media (max-width: 540px) {
        :global(.buttonHolder .selectionButtons) {
            font-size: 0.6em;
        }
    }

    @media (max-width: 415px) {
        :global(.buttonHolder .selectionButtons) {
            font-size: 0.5em;
            padding: 0 6px;
            height: 30px;
        }
    }

    @media (max-width: 315px) {
        :global(.buttonHolder .selectionButtons) {
            font-size: 0.45em;
            padding: 0 3px;
        }
    }

    @media (max-width: 265px) {
        :global(.buttonHolder .selectionButtons) {
            font-size: 0.4em;
            padding: 0 2px;
            height: 24px;
            min-width: 40px;
        }
    }

    /* End button resizing */

    /* Start record table resizing */

    @media (max-width: 510px) {
        :global(.recordTable th) {
            font-size: 0.8em;
            padding: 1px 12px;
        }

        :global(.recordTable td) {
            font-size: 0.8em;
            padding: 1px 12px;
        }

        .vsRecord {
            margin: .6em 0;
        }

        .fpts-value {
            font-size: 0.8em;
        }

        .week-value {
            font-size: 0.8em;
            margin-top: 5px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 480px) {
        :global(.rank) {
            padding: 1px 0 1px 5px !important;
        }

        :global(.rank) {
            padding: 1px 0 1px 5px !important;
        }

        .fpts-value {
            font-size: 1.2em;
        }

        .week-value {
            font-size: 0.8em;
            margin-top: 5px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 460px) {
        :global(.recordTable th) {
            font-size: 0.6em;
            padding: 1px 12px;
        }

        :global(.recordTable td) {
            font-size: 0.6em;
            padding: 1px 12px;
        }

        :global(.fpts-value) {
            font-size: 0.6em;
        }

        :global(.week-value) {
            font-size: 0.6em;
            margin-top: 2px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 365px) {
        :global(.recordTable th) {
            font-size: 0.5em;
            padding: 1px 8px;
        }

        :global(.recordTable td) {
            font-size: 0.5em;
            padding: 1px 8px;
        }

        :global(.fpts-value) {
            font-size: 0.5em;
        }

        :global(.week-value) {
            font-size: 0.5em;
            margin-top: 2px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 265px) {
        :global(.recordTable th) {
            font-size: 0.4em;
            padding: 1px 5px;
        }

        :global(.recordTable td) {
            font-size: 0.4em;
            padding: 1px 5px;
        }

        :global(.fpts-value) {
            font-size: 0.4em;
        }

        :global(.week-value) {
            font-size: 0.4em;
            margin-top: 2px; /* Adding some margin to separate the two values */
        }
    }

    /* END record table resizing */

    /* Start ranking table resizing */

    @media (max-width: 570px) {
        :global(.rankingTable th) {
            font-size: 0.8em;
            max-width: 110px;
            white-space: break-spaces;
            padding: 1px 12px;
        }

        :global(.rankingTable td) {
            font-size: 0.8em;
            max-width: 110px;
            white-space: break-spaces;
            padding: 1px 12px;
        }

        :global(.fpts-value) {
            font-size: 0.8em;
        }

        :global(.week-value) {
            font-size: 0.8em;
            margin-top: 3px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 410px) {
        :global(.rankingTable th) {
            font-size: 0.6em;
            max-width: 90px;
            white-space: break-spaces;
            padding: 1px 12px;
        }

        :global(.rankingTable td) {
            font-size: 0.6em;
            max-width: 90px;
            white-space: break-spaces;
            padding: 1px 12px;
        }

        :global(.fpts-value) {
            font-size: 0.6em;
        }

        :global(.week-value) {
            font-size: 0.55em;
            margin-top: 3px; /* Adding some margin to separate the two values */
        }
    }

    @media (max-width: 340px) {
        :global(.rankingTable th) {
            font-size: 0.55em;
            max-width: 80px;
            white-space: break-spaces;
            padding: 1px 6px;
        }

        :global(.rankingTable td) {
            font-size: 0.55em;
            max-width: 80px;
            white-space: break-spaces;
            padding: 1px 6px;
        }

        :global(.fpts-value) {
            font-size: 0.55em;
        }

        :global(.week-value) {
            font-size: 0.5em;
            margin-top: 2px; /* Adding some margin to separate the two values */
        }
    }

    /* END ranking table resizing */
</style>

<h4>{prefix} Summary</h4>

<div class="fullFlex">

    {#if mergedRecords && mergedRecords.length}
        {#each Object.entries(divisions) as [division, records]}
            <div class="banner banner-D-{divisionNumber(division)}">
                <h2>{displayDivision(division)}</h2>
            </div>
            <div class="table-container">
                <DataTable class="rankingTable">
                    <Head>
                        <Row>
                            <Cell class="header"></Cell>
                            <Cell class="header">Manager</Cell>
                            <Cell class="header">Rank</Cell>
                            <Cell class="header">Record</Cell>
                            <Cell class="header">Kicker Points</Cell>
                            <Cell>Points For</Cell>
                            <Cell>Points Against</Cell>
                            <Cell class="header">Highest Weekly Score</Cell>
                            <Cell class="header">Lowest Weekly Score</Cell>
                            <Cell class="header">Manager Lineup IQ</Cell>
                        </Row>
                    </Head>
                    <Body>
                    {#each records as record, ix}
                        <Row>
                            <Cell>{ix + 1}</Cell>
                            <Cell class="cellName"
                                  on:click={() => gotoManager({year: record.year || prefix, leagueTeamManagers, rosterID: record.rosterID, managerID: record.managerID})}>
                                <ScoringTeam {leagueTeamManagers} managerID={record.managerID}
                                             rosterID={record.rosterID} year={allTime ? record.year : prefix}/>
                            </Cell>
                            <Cell>Rank {ix + 1}</Cell>
                            <Cell>{record.wins + "-" + record.losses}</Cell>
                            <Cell>{record.kickerPoints}</Cell>
                            <Cell>{round(record.fpts)}</Cell>
                            <Cell>{round(record.fptsAgainst)}</Cell>
                            <Cell>
                                <div class="fpts-value">{record.bestWeek.fpts}</div>
                                <div class="week-value">{"Week " + record.bestWeek.week}</div>
                            </Cell>
                            <Cell>
                                <div class="fpts-value">{record.worstWeek.fpts}</div>
                                <div class="week-value">{"Week " + record.worstWeek.week}</div>
                            </Cell>
                            <Cell>{record.iq}</Cell>
                        </Row>
                    {/each}
                    </Body>
                </DataTable>
            </div>
        {/each}
    {/if}

</div>