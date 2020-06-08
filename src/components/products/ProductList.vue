<template>
	<div>
		<div class="mb-4">
			<mdb-row>
				<mdb-col lg="8">
					<h3 class="font-open-sans font-weight-bold font-48">Games {{selected}}</h3>
				</mdb-col>
				<mdb-col class="my-auto">
					<select class="browser-default custom-select" v-model="selected">
						<template v-for="option of select">
							<option
								:selected="option.text === 'Mais recentes'"
								:value="option.value"
								:key="option.value"
							>{{ option.text }}</option>
						</template>
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
const { mapGetters, mapActions, mapState } = createNamespacedHelpers(
	"ecommerce"
);

import ProductListItem from "./ProductListItem";

import * as mdb from "mdbvue";

export default {
	name: "Index",
	components: { ...mdb, ProductListItem },
	data() {
		return {
			select: [
				{ value: 1, text: "Mais populares" },
				{ value: 2, text: "Ordem alfabetica (A - Z)" },
				{ value: 3, text: "Preço (menor - maior)" },
				{ value: 4, text: "Mais recentes" }
			],
			selected: 4
		};
	},
	methods: {
		...mapActions(["listarProdutos", "filtrarProduto"])
	},
	computed: {
		...mapState(["produtos", "produtosFilter"]),
		...mapGetters(["produtosRecentes", "produtosPorNome"]),
		filter() {
			let produtosFiltro = null;

			switch (this.selected) {
				case 4:
					produtosFiltro = this.filtrarProduto(this.produtos);
					break;
				case 2:
					produtosFiltro = this.produtosPorNome;
					break;

				default:
					break;
			}
			return produtosFiltro;
		}
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