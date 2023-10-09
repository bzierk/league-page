<script>
    import {getLeagueRecords, getLeagueTransactions} from '$lib/utils/helper';
    import CurrentStats from './CurrentStats.svelte';

    export let leagueData, totals, stale, leagueTeamManagers, standings;

    const refreshTransactions = async () => {
        const newTransactions = await getLeagueTransactions(false, true);
        totals = newTransactions.totals;
    }

    let leagueManagerRecords, leagueRosterRecords, leagueWeekRecords, leagueWeekHighs, leagueWeekLows,
        allTimeClosestMatchups, allTimeBiggestBlowouts, mostSeasonLongPoints, leastSeasonLongPoints, seasonWeekRecords,
        currentYear, lastYear, seasonBestKicker, kickerScores;

    const refreshRecords = async () => {
        const newRecords = await getLeagueRecords(true);

        // update values with new data
        leagueData = newRecords;
    }

    let key = "regularSeasonData";

    const refreshData = (lD, k) => {
        if (!lD || !lD[k]) return;

        const selectedLeagueData = lD[k];

        // Sort league week records in descending order
        leagueWeekRecords = selectedLeagueData.leagueWeekRecords.sort((a, b) => {
            return b.weekRecord - a.weekRecord;
        });

        leagueManagerRecords = selectedLeagueData.leagueManagerRecords;
        leagueRosterRecords = selectedLeagueData.leagueRosterRecords;
        leagueWeekHighs = selectedLeagueData.leagueWeekHighs;
        leagueWeekLows = selectedLeagueData.leagueWeekLows;
        allTimeClosestMatchups = selectedLeagueData.allTimeClosestMatchups;
        allTimeBiggestBlowouts = selectedLeagueData.allTimeBiggestBlowouts;
        mostSeasonLongPoints = selectedLeagueData.mostSeasonLongPoints;
        leastSeasonLongPoints = selectedLeagueData.leastSeasonLongPoints;
        seasonWeekRecords = selectedLeagueData.seasonWeekRecords;
        seasonBestKicker = selectedLeagueData.seasonBestKicker;
        kickerScores = selectedLeagueData.kickerScores;
        currentYear = selectedLeagueData.currentYear;
        lastYear = selectedLeagueData.lastYear;
    }

    $:refreshData(leagueData, key);

    if (stale) {
        refreshTransactions();
    }

    if (leagueData.stale) {
        refreshRecords();
    }

    let display = "allTime"

</script>

<style>
    .rankingsWrapper {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
    }

    .empty {
        margin: 10em 0 4em;
        text-align: center;
    }

    /* Button Styling */
    .buttonHolder {
        text-align: center;
        margin: 2em 0 0;
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
        }
    }

    @media (max-width: 315px) {
        :global(.buttonHolder .selectionButtons) {
            font-size: 0.45em;
            padding: 0 3px;
        }
    }

    /* End button resizing */
</style>

<div class="rankingsWrapper">
    <CurrentStats transactionTotals={totals} {leagueWeekRecords} {leagueRosterRecords} {seasonWeekRecords}
                  {kickerScores} {seasonBestKicker} {leagueTeamManagers} {standings} {currentYear} {lastYear} {key}/>
</div>
