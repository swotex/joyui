<template>
	<span id="test" class="relative">
		<label  class="absolute ml-1 top-[50%] px-1 bg-base-100 translate-y-[-50%]">
  Name</label>
  <input type="text" class="input input-bordered" placeholder="" />
	</span>
</template>

<script>
</script>

<style>
#test:has(input:focus) label,
#test:has(input:not(:placeholder-shown)) label{
	top: 0;
    transform: translateY(-115%);
	/* background: ; */
}
</style>