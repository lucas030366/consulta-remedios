<template>
	<mdb-card class="text-center my-2">
		<div class="grey lighten-3 p-3">
			<div class="view">
				<img :src="require('@/assets/'+produto.image)" class="img-fluid mx-auto" :alt="produto.name" />
			</div>
		</div>
		<div>
			<h6>{{produto.name}}</h6>
		</div>
		<mdb-card-text>{{produto.price}}</mdb-card-text>
	</mdb-card>
</template>

<script>
import * as mdb from "mdbvue";
export default {
	name: "ProductListItem",
	components: { ...mdb },
	props: {
		produto: Object
	}
};
</script>

<style scoped>
.grey.lighten-3 {
	background-color: #eeeeee;
}
</style>