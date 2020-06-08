<template>
	<div>
		<div class="mb-4">
			<mdb-row>
				<mdb-col lg="8">
					<h3 class="font-open-sans font-weight-bold font-48">Games</h3>
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
			<mdb-col lg="4" v-for="produto in filter" :key="produto.id">
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
				{ value: 3, text: "Ordem alfabetica (Z - A)" },
				{ value: 4, text: "Preço (menor - maior)" },
				{ value: 5, text: "Preço (maior - menor)" },
				{ value: 6, text: "Mais recentes" }
			],
			products: [],
			selected: 6
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
				case 1:
					this.filtrarProduto(1);
					produtosFiltro = this.produtosFilter;
					break;
				case 2:
					this.filtrarProduto(2);
					produtosFiltro = this.produtosFilter;
					break;
				case 3:
					this.filtrarProduto(3);
					produtosFiltro = this.produtosFilter;
					break;
				case 4:
					this.filtrarProduto(4);
					produtosFiltro = this.produtosFilter;
					break;
				case 5:
					this.filtrarProduto(5);
					produtosFiltro = this.produtosFilter;
					break;
				case 6:
					produtosFiltro = this.produtos;
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