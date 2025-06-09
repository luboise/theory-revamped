<script lang="ts">
	import { type MethodAttachment } from "$lib/types/midend";

	interface ChartMethodBody {
		body: string;
		attachments: MethodAttachment[];
	}

	function addGearShift(amount: number) {
		if (!textArea) {
			console.error("Unable to get textarea.");
			return;
		} else if (!Number.isSafeInteger(amount)) {
			alert(`Invalid amount: ${amount}`);
			return;
		}

		body.body =
			textArea.value.slice(0, textArea.selectionStart) +
			`||gs|${amount}|| ` +
			textArea.value.slice(textArea.selectionStart);

		textArea.focus();
	}

	let body = $state<ChartMethodBody>({ body: "", attachments: [] });

	let textArea: HTMLTextAreaElement | null = null;
</script>

<h1>Upload a Method</h1>

<div id="editor">
	<div>
		<button
			onclick={(event) => {
				const amount = prompt("Please enter your name", "Harry Potter");
				addGearShift(Number(amount));
			}}>Insert gear shift</button
		>
	</div>
	<textarea id="method-entry" bind:this={textArea} bind:value={body.body}> ballsac</textarea>
</div>

<h2>Preview</h2>
<div>
	{body.body}
</div>

<style>
	#method-entry {
		width: 100%;
		min-height: 3em;
	}

	#editor {
		display: flex;
		flex-direction: column;
	}
</style>
