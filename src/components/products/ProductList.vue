<template>
	<div>
		<div class="mb-4">
			<mdb-row>
				<mdb-col lg="8">
					<h3 class="font-open-sans font-weight-bold font-48">Games</h3>
				</mdb-col>
				<mdb-col class="my-auto">
					<select class="browser-default custom-select">
						<option value="1">Mais Populares</option>
						<option value="2">Ordem Alfabetica (A - Z)</option>
						<option value="3">Preço (menor - maior)</option>
						<option selected value="4">Mais Recentes</option>
					</select>
				</mdb-col>
			</mdb-row>
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

<style>
.font-48 {
	font-size: 48px;
}
</style>