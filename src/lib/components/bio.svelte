<script>
	import profilePic from '$lib/assets/profile-pic.jpg';
</script>

<br />
<h3>About the Author</h3>
<div class="flex gap-4">
	<img
		alt="Daniel Profile"
		class="h-24 w-24 shrink-0 rounded-full object-cover object-center"
		loading="lazy"
		src={profilePic}
	/>
	<div>
		<h4 class="mb-2.5">Daniel Salvado</h4>
		<p>
			Software Engineer | Developer | JavaScript Enthusiast. Strive to improve on code and the
			people around me! Follow
			{` `}
			<a class="text-blue-800 no-underline" href={`https://twitter.com/@danisalTweets`}>
				@danisalTweets
			</a>
		</p>
	</div>
</div>
