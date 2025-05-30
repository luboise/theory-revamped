<script lang="ts">
	let files = $state<FileList | undefined>();
	let json = $derived(processFile());

	async function processFile() {
		if (!files) return null;

		const file = files.item(0);
		if (!file) return null;

		return file.text();
	}

	async function onSubmit() {
		if (!files) {
			alert("File is undefined.");
			return;
		}

		const file = files.item(0);
		if (!file) {
			alert("files[0] is empty");
			return;
		}

		const response = await fetch("/admin/update_database", {
			method: "POST",
			body: await file.text()
		});
		if (response.ok) {
			alert("Successfully uploaded.");
		} else {
			alert("Upload failed.");
		}
	}

	$inspect(files);
</script>

<form>
	<input bind:files type="file" />
</form>

<button disabled={files === undefined} onclick={onSubmit}>Upload</button>

{#if files}
	{#await json}
		<p>Loading json...</p>
	{:then val}
		{val}
	{:catch someError}
		<p>Error: {someError.message}.</p>
	{/await}
{/if}
