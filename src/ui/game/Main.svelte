<script>
    import { State } from '../../stores';
    import Places from './places/Places.svelte';
    import Story from './story/Story.svelte';
    import Characters from './characters/Characters.svelte';
</script>

<style>    
    .screen {
        display: flex;
        height: 100vh;
    }
    .left-panel {
        width: 20%;
        border-right: 1px solid #ccc;
    }
    .right-panel {
        width: 20%;
        border-left: 1px solid #ccc;
    }
    .center-panel {
        width: 60%;
        padding: 20px 80px;
    }
</style>

<div class="screen">
    <div class="left-panel">
        <Characters ui={$State.ui} game={$State.game} />
    </div>
    <div class="center-panel">
        <Story ui={$State.ui} game={$State.game} />
    </div>
    <div class="right-panel">
        <Places ui={$State.ui} game={$State.game} />
    </div>
</div>

