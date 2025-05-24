<script lang="ts">
	import noteChartDisplayImage from "./note_chart_display_area.png";
	import yCoImage from "./y_and_co.png";
</script>

<h1>GN/WN and Soflan Basics</h1>

The backbone of almost every technique here.

<section>
	<h2>What are green number and white number?</h2>

	<p>
		Unless you are a new player, you have probably seen (or are using) these Note Chart Display Area
		options.
	</p>

	<img src={noteChartDisplayImage} alt="Note chart options screenshot" style:float="right" />

	<p>
		Your <strong>green number</strong> essentially refers to your scroll speed based on the amount
		of time the notes appear on screen. This means that a higher green number will net you a lower
		scroll speed, and a lower green number will net you a higher scroll speed. If you are using any
		of these previously mentioned options, your <strong>white number</strong> refers to be how far down
		the playfield a given lane cover is out of 1000. For example, if you have a SUDDEN+ lane cover halfway
		down the lane, you will have 500 white number. Both of these numbers will be visible at the top of
		your screen while you are holding start (or on the speed panel for regular Hi-speed).
	</p>
</section>

<section>
	<h2>What is Soflan?</h2>

	<p>
		Quite literally the entire reason this website exists, what the game refers to as Soflan. Named
		after the IIDX 2nd Style chart <i
			>"SOFT LANDING ON THE BODY"<i
				>, Soflan refers to abrupt or gradual speed changes during a IIDX chart. As you will see by
				watching
				<!-- [this](https://youtu.be/1Z60nSrGiJ4?t=65) -->
				timestamped video of the chart at 1:05 (or opening the image below in a new tab), your scroll
				speed can change depending on the bpm of the song. While this may seem manageable for a chart
				like this which only speeds up for about 4 seconds, not all charts are like this.

				<!-- [![IMAGE ALT TEXT](http://img.youtube.com/vi/1Z60nSrGiJ4/0.jpg)](https://youtu.be/1Z60nSrGiJ4?t=65 "Beatmania IIDX 3rd Style - SOFT LANDING ON THE BODY") -->
			</i></i
		>
	</p>
</section>

<section>
	<h2>What can be done about Soflan?</h2>

	<p>
		<img src={yCoImage} alt="Y&Co. is dead or alive soflan section" />

		<!-- ![y&co is dead or arive](yco_lmfao.png "like actually wtf is this") -->

		But wait, I can't read at 876bpm!!!! That's ridiculous. Well, this is where
		<a href="/info/soflan/fhs">Floating Hi-Speed</a>, and subsequently any techniques based off of
		floating hi-speed, come into play.
	</p>
</section>

<style>
	p,
	h1,
	h2 {
		display: block;
	}
	img {
		display: flex;
		border: 1px black solid;
		margin: 1em;
		padding: 0;
		flex: 1;

		object-fit: contain;
		max-height: 300px;
	}

	section {
		justify-content: center;
		max-width: 70%;

		display: flex;
		flex-direction: column;
	}
</style>
