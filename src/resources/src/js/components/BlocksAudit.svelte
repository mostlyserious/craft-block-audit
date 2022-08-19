{#if fetched}
    <div class="meta">
        <h3>Flagged Entries</h3>
        {#if entries.length}
            <ul>
                {#each entries as entry}
                    <li>
                        <a href={entry.cpEditUrl} class="element small hasstatus" target="_blank">
                            <span class="status {entry.enabled ? 'enabled' : ''}"></span>
                            <div class="label" style="padding: 0;">
                                <span class="title">{entry.title}</span>
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        {:else if loaded}
            <p>No duplicate block content found.</p>
        {:else}
            <span class="loader">
                {@html markup(spinner)}
            </span>
        {/if}
    </div>
{/if}

<button type="button" class="btn submit" on:click={fetchDupes}>
    Audit Blocks
</button>

<script>
    import markup from '../modules/markup';
    import spinner from '../../img/spinner.svg?raw';

    let entries = [],
        loaded = false,
        fetched = false;

    function fetchDupes() {
        fetched = true;
        loaded = false;
        entries = [];

        fetch('/admin/actions/block-audit/run')
            .then(res => res.json())
            .then(res => {
                entries = res;
                loaded = true;
            });
    }
</script>

<style lang="postcss">
    :global(h2) {
        @apply mb-6;
    }

    ul {
        @apply grid gap-1;
    }

    .meta {
        @apply p-4 mb-6 rounded;
        background-color: #F3F7FC;
        box-shadow: 0 0 0 1px #cdd8e4, 0 2px 12px rgb(205 216 228 / 50%);

        & :global(a) {
            @apply border border-transparent cursor-pointer rounded;
            @apply hover:bg-white hover:border-zinc-200;
        }
    }

    .loader :global(svg) {
        @apply w-6 h-6 fill-current text-zinc-600 animate-spin;
    }
</style>
