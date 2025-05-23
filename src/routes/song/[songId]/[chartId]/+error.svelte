<script lang="ts">
	import { page } from "$app/state";
</script>

<h1>{page.error?.message || "An unknown error has occured."}</h1>
