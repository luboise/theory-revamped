<script lang="ts"></script>

<nav>
	<a href="/" id="logo">Theory</a>
	<a href="/tech">Techniques/Info</a>
	<a href="/charts">Chart Directory</a>

	<!---->
	<!-- <ul class="navbar__link-wrapper"> -->
	<!-- 	<li className={"navlink" + (path === href ? " active" : "")}> -->
	<!-- 		<a {href} {...props}> -->
	<!-- 			{children} -->
	<!-- 		</a> -->
	<!-- 	</li> -->
	<!---->
	<!-- 	<CustomLink href="/">Home</CustomLink> -->
	<!-- 	<CustomLink href="songpage">Song Page</CustomLink> -->
	<!-- </ul> -->
</nav>

<style>
	nav {
		background-color: #00b2ff;

		display: flex;
		flex-direction: row;

		width: 100%;
		max-height: 200px;
		/*height: --navbar-height;*/

		font-size: 1.5rem;

		box-sizing: border-box;

		/* justify-content: space-between; */
		align-items: center;

		z-index: 20;

		margin-bottom: 1rem;

		border-collapse: collapse;
	}

	nav > * {
		background-color: inherit;
		/* flex: 1; */
		/* height: 100%; */
		min-width: 20%;

		/* padding: 0 1rem; */

		padding: 2rem 2rem;

		font-weight: bold;
		text-align: center;

		color: white;
		text-decoration: none;

		border: solid black 0.2rem;

		border-top: none;
		border-bottom: none;
	}

	#logo {
		background-color: #0092ff;

		text-align: center;
		padding-right: 5rem;
		border-left: none;
	}
</style>
