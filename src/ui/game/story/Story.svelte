<script>
    import { State } from '../../../stores';
    import Action from './Action.svelte';

    export let game;
    export let ui;

    $: narrations = game.narrations.filter(n => n.visible);
</script>

<style>
    .narrations {
        margin-bottom: 20px;
    }
    .narration, .log {
        font-size: 18px;
        line-height: 140%;
    }
    .log {
        color: #999;
        margin-bottom: 20px;
    }
</style>

<div>
    <div class="logs">
    {#each game.story as log }
        <div class="log">
        { @html log.text }
        </div>
    {/each}
    </div>
    <div class="narrations">
    {#each narrations as nar }
        <div class="narration">
        { @html nar.text }
        </div>
    {/each}
    </div>
    <div class="actions">
    {#each game.actions as action }
        <Action action={action}></Action>        
    {/each}
    </div>
</div>

