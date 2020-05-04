<script>
    import { State } from '../../../stores';
    import Action from './Action.svelte';

    export let game;
    export let ui;

    $: narrations = game.narrations.filter(n => n.visible);
</script>

<style>
</style>

<div>
    <div>
    {#each game.story as log }
        <div>
        { @html log.text }
        </div>
    {/each}
    </div>
    <div>
    {#each narrations as nar }
        <div>
        { @html nar.text }
        </div>
    {/each}
    </div>
    <div>
    {#each game.actions as action }
        <Action action={action}></Action>        
    {/each}
    </div>
</div>

