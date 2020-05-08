<script>
    import { InputType } from "../../../engine/action";
    import { State } from '../../../stores';
    
    export let action;

    let inputs = action.inputs ? action.inputs.map(i => "") : null;
    
</script>

<style>
    input {
        margin-top: 10px;
    }
    .action-prompt {
        font-size: 18px;
        line-height: 140%;
        color: #0000a0;
    }    
</style>

<div>
    <div class="action-prompt">{ @html action.text }</div>    
    
    {#if action.inputs && action.inputs.length > 0}
        <form action="#"  on:submit={e => { e.preventDefault(); State.playAction(action, inputs) }}>
        {#each action.inputs as input,i }
            {#if input === InputType.TEXT}
                <input autofocus bind:value={inputs[i]} />            
            {/if}
        {/each}
        </form>
    {/if}
</div>

