<script lang="ts">
	import { attachmentEmbedOf, type MethodAttachment } from "$lib/types/midend";

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

		const a: MethodAttachment = { type: "gearshift", position: textArea.selectionStart, amount };
		body = { body: body.body, attachments: body.attachments.concat([a]) };
		textArea.focus();
	}

	let body = $state<ChartMethodBody>({ body: "", attachments: [] });
	let textArea: HTMLTextAreaElement | null = null;

	let derivedBody: string[] = $derived(
		(() => {
			if (!body.attachments.length) {
				return [body.body];
			}

			let rets = [];

			const sorted = body.attachments.toSorted((a, b) => a.position - b.position);

			rets.push(body.body.slice(0, sorted[0].position));

			for (let i = 0; i < sorted.length; i++) {
				rets.push(attachmentEmbedOf(sorted[i]));
				rets.push(
					i === sorted.length - 1
						? body.body.slice(sorted[i].position)
						: body.body.slice(sorted[i].position, sorted[i + 1].position)
				);
			}

			console.log(rets);
			return rets;
		})()
	);

	/*
	body.body =
		textArea.value.slice(0, textArea.selectionStart) +
		`||gs|${amount}|| ` +
		textArea.value.slice(textArea.selectionStart);
*/
</script>

<h1>Upload a Method</h1>

<div id="editor">
	<div>
		<button
			onclick={() => {
				const amount = prompt("Enter the amount to gear shift [-10, 10]", "1");
				addGearShift(Number(amount));
			}}>Insert gear shift</button
		>
	</div>
	<textarea
		id="method-entry"
		bind:this={textArea}
		value={derivedBody}
		onbeforeinput={(event) => {
			event.preventDefault();
			if (!textArea) {
				return;
			} else if (event.inputType === "deleteContentBackward") {
				const index = textArea.selectionStart - 1;
				if (!index || index > textArea.value.length) {
					return;
				}
				// Check if the character is inside of an attachment
				// if (){
				// Check if there is a single one
			} else if (event.inputType === "insertText") {
			}
		}}
	></textarea>
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
