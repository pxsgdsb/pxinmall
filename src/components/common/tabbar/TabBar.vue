<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
}
</script>

<style>
	#tab-bar{display: flex;background-color: #f2f2f2;position: fixed;left: 0;bottom: 0;right: 0;
	box-shadow: 0 -2px 1px rgba(08,08,08,0.3);}

</style>
