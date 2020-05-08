<script>
    import { State } from '../../../stores';

    export let game;
    export let ui;

    $: region = game.regions[game.player.region];
    
</script>

<style>
    .region-name {

    }
</style>

<div>
    <div>
        { region.name }
    </div>
</div>

