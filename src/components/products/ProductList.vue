<template>
	<div>
		<div class="mb-4">
			<h3 class="font-open-sans font-weight-bold font-48">Games</h3>
		</div>

		<mdb-row>
			<mdb-col lg="4" v-for="produto in produtos" :key="produto.id">
				<ProductListItem :produto="produto" />
			</mdb-col>
		</mdb-row>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ecommerce");

import ProductListItem from "./ProductListItem";

import * as mdb from "mdbvue";

export default {
	name: "Index",
	components: { ...mdb, ProductListItem },
	methods: {
		...mapActions(["listarProdutos"]),
	},
	computed: {
		...mapState(["produtos"])
	},
	created() {
		this.listarProdutos();
	}
};
</script>

<style>
.font-48 {
	font-size: 48px;
}
</style>