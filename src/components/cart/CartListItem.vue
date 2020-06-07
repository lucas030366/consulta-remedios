<template>
	<li>{{ pdt.name }}</li>
</template>

<script>

export default {
	name: "CartListItem",
	props: {
		pdt: Object
	},
};
</script>