import {getLeagueStandings, getLeagueTeamManagers} from '$lib/utils/helper';

export async function load() {

    const standingsData = getLeagueStandings();
    const leagueTeamManagersData = getLeagueTeamManagers();
    console.log('Standings data: ', standingsData);
    console.log('League team managers data: ', leagueTeamManagersData);

    return {
        standingsData,
        leagueTeamManagersData,
    };
}