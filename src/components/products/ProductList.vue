<template>
	<mdb-container>
		<div class="py-3">
			<div>
				<h3>Games</h3>
			</div>
		</div>
		<mdb-row>
			<mdb-col lg="4" v-for="produto in produtos" :key="produto.id">
				<ProductListItem :produto="produto" />
			</mdb-col>
		</mdb-row>
	</mdb-container>
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
		...mapActions(["listarProdutos"])
	},
	computed: {
		...mapState(["produtos"])
	},
	created() {
		this.listarProdutos();
	}
};
</script>