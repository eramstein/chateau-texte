<script>
    import { State } from '../../../stores';

    export let game;
    export let ui;    
</script>

<style>
</style>

<div>
    {#each game.story as log }
        { log.text }
    {/each}
</div>

