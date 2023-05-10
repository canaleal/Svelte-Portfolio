<script lang="ts">
	export let value: any;
    let valueType = typeof value;
    let hasQuotesMap = {
        'number': false,
        'boolean': false,
        'string': true,
        'object': false,
        'undefined': false,
        'null': false,
        'bigint': false,
        'symbol': false,
        'function': false
    }
    let hasQuotes = hasQuotesMap[valueType] ?? false;

    let classMap = {
        'number': 'number-value',
        'boolean': 'boolean-value',
        'string': 'string-value',
        'object': 'object-value',
        'undefined': 'undefined-value',
        'null': 'null-value',
        'bigint': 'bigint-value',
        'symbol': 'symbol-value',
        'function': 'function-value'
    }
    let classValue = classMap[valueType] ?? 'string-value';

</script>

{#if hasQuotes}
    <span class="punctuation">"</span>
{/if}

<span class={classValue}>{value}</span>

{#if hasQuotes}
    <span class="punctuation">"</span>
{/if}
