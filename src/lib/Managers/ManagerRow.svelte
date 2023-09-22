<script>
    import { goto } from "$app/navigation";
	import { getDatesActive, getRosterIDFromManagerID, getTeamNameFromTeamManagers } from "$lib/utils/helperFunctions/universalFunctions";

    export let manager, leagueTeamManagers, key;

    let retired = false;

    // manager.roster is deprecated, pages should be using managerID now
    let rosterID = manager.roster;
    let year = null;

    if(manager.managerID) {
        const dates = getDatesActive(leagueTeamManagers, manager.managerID);
        if(dates.end) retired = true;

        ({rosterID, year} = getRosterIDFromManagerID(leagueTeamManagers, manager.managerID) || {rosterID, year});
    }

</script>

<style>
    .manager {
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 1em 0;
        background-color: rgb(30 41 59);
        background-repeat: no-repeat;
        background-position: 15% 50%;
        margin: 0.5em 0;
        border-radius: 0.375rem;
        border-color:rgb(51 65 85);
        border-width:1px;
        cursor: pointer;
    }
    .manager:after {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }

    .manager:before{
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }

    .manager:hover {
      box-shadow: 0 0 10px 0 var(--g999);
      background-color: var(--eee);
    }

    .photo {
        height: 80px;
        width: 80px;
        border-radius: 100%;
        vertical-align: middle;
        margin-left: 1em;
        /* box-shadow: 0 0 2px 1px var(--bbb); */
        transition-duration: .3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    .name {
        text-align: left;
        display: inline-block;
        color: #fff;
        font-size: 1.5rem;
        line-height: 1.75em;
        margin-left: 1rem;
        font-weight: 700;
    }

    .team {
        text-align: left;
        display: inline-block;
        line-height: 1.2em;
        color: #fff;
        font-weight: 300;
        margin-left: 1rem;
    }

    .spacer {
        flex-grow: 1;
    }

    .info {
        display: flex;
    }

    .infoSlot {
        text-align: center;
        margin: 0 1rem;
        width: 100%;
        display:flex;
        gap:1rem;
    }

    .infoIcon {
        display: inline-flex;
        height: 40px;
        width: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border-color:rgb(51 65 85);
        border-width:1px;
        overflow: hidden;
        /* background-color: var(--fff); */
    }

    .infoImg {
        height: 100%;
    }

    /* .infoAnswer {
        font-size: 0.8em;
        color: var(--g555);
        width: 63px;
        text-align: center;
        line-height: 1.2em;
    } */

	@media (max-width: 665px) {
        .name {
            font-size: 0.9em;
            margin-left: 0.5em;
        }

        .team {
            font-size: 0.8em;
            margin-left: 0.5em;
        }
    }

	@media (max-width: 595px) {
        .manager {
            padding: 0.5em 0;
            margin: 0.3em 0;
            border-radius: 1.5em;
        }

        .photo {
            height: 30px;
            width: 30px;
            margin-left: 0.5em;
        }

        .infoSlot {
            text-align: center;
            margin: 0 0.4em;
            width: 56px;
        }

        .infoIcon {
            height: 30px;
            width: 30px;
        }

        .infoImg {
            height: 25px;
        }
    }

    @media (max-width: 475px) {
        .name {
            font-size: 0.8em;
            margin-left: 0.4em;
        }

        .team {
            font-size: 0.7em;
            margin-left: 0.4em;
        }

        .photo {
            height: 25px;
            width: 25px;
        }

        .infoSlot {
            text-align: center;
            margin: 0 0.4em;
            width: 49px;
        }

        .infoIcon {
            height: 25px;
            width: 25px;
        }

        .infoImg {
            height: 22px;
        }
    }

    @media (max-width: 370px) {
        .infoTeam {
            display: none;
        }
    }
</style>

<div class="manager" style="{retired ? "background-image: url(/retired.png); background-color: var(--ddd)": ""}" on:click={() => goto(`/manager?manager=${key}`)}>
    <div class="avatarHolder">
        <img class="photo" src="{manager.photo}" alt="{manager.name}" />
    </div>
    <div>
        <span class="name">{manager.name}</span>
        <br> 
        <span class="team">{getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year)}</span>
    </div>
    <div class="spacer" />
    <div class="info">
        <!-- Favorite team (optional) -->
        <div class="infoSlot infoTeam">
                <div class="infoIcon">
                    <img class="infoImg" src="{manager.division}.png" alt="division"/>
                </div>
                <div class="infoIcon">
                    <img class="infoImg" src="{manager.role}.png" alt="division"/>
                </div>
        </div>
    </div>

</div>