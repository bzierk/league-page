<script>
    import LinearProgress from '@smui/linear-progress';
    import {UnpaidManagers} from '$lib/components';
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    export let data;
    const {managers, leagueTeamManagersData} = data;
    let unpaidManagers = [];

    onMount(() => {
        if (!managers.length) {
            goto('/');
        }
        unpaidManagers = managers.filter(manager => {
            return !manager.duesPaid;
        })
    })
</script>

<style>
    .main {
        position: relative;
        z-index: 1;
    }

    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }

    h2 {
        text-align: center;
        font-size: 2.8em;
        margin: 2em 0 1.5em;
        line-height: 1em;
    }
</style>

<div class="main">
    {#await leagueTeamManagersData}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving managers...</p>
            <LinearProgress indeterminate/>
        </div>
    {:then leagueTeamManagers}
        {#if unpaidManagers.length > 0}
            <UnpaidManagers {unpaidManagers} {leagueTeamManagers}/>
        {:else}
            <h2>No Delinquents!</h2>
        {/if}

    {:catch error}
        <!-- promise was rejected -->
        <p>Something went wrong: {error.message}</p>
    {/await}
</div>