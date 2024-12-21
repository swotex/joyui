<template>
	<span id="labelOnDiv" class="relative">
		<!-- <label class="absolute ml-1 top-[50%] px-1  translate-y-[-50%]">
			Name
		</label> -->
		<!-- <slot></slot> -->
		<slot></slot>
  <!-- <input type="text" class="input input-bordered" placeholder="" /> -->
	</span>
</template>

<script>
</script>

<style>
#labelOnDiv:has(input:focus) label,
#labelOnDiv:has(input:not(:placeholder-shown)) label{
	top: 0;
    transform: translateY(-115%);
}

#labelOnDiv label{
	left: 0;
	pointer-events: none;
	transition-property: all;
    transition-timing-function: ease;
	transition-duration: 200ms;
	background-color: oklch(var(--p));
}
</style>