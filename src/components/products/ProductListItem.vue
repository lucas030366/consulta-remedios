<template>
	<mdb-card class="text-center card-ecommerce my-3 border-0">
		<div class="grey lighten-3 rounded p-4">
			<div class="view">
				<img :src="require('@/assets/'+produto.image)" class="img-fluid mx-auto" :alt="produto.name" />
			</div>
		</div>
		<div class="description mt-2">
			<h6 class="font-open-sans font-16 fosco-text">{{produto.name}}</h6>
			<h6 class="blue-text font-open-sans font-weight-bold font-16">{{formatCurrency(produto.price)}}</h6>
		</div>
		<div class="effect py-4 mt-4">
			<div v-if="exists(produto)" class="alert alert-warning py-2 mb-0">adicionado ao carrinho</div>
			<a v-else @click="addCart(produto)" class="font-open-sans font-weight-bold font-16 pointer">
				<span class="blue-text">adicionar ao carrinho</span>
			</a>
		</div>
	</mdb-card>
</template>

<script>
import * as mdb from "mdbvue";

import FormatCurrencyMixin from "@/mixins/format-currency";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ecommerce");

export default {
	name: "ProductListItem",
	mixins: [FormatCurrencyMixin],
	components: { ...mdb },
	props: {
		produto: Object
	},
	methods: {
		...mapActions(["selecionarProduto"]),
		addCart(produto) {
			const pdtInCart = this.exists(produto);
			if (!pdtInCart) {
				this.selecionarProduto({ produto });
			}
		},
		exists(produto) {
			const pdtInCart = this.cart.findIndex(pdt => pdt.id === produto.id);
			return pdtInCart === -1 ? false : true;
		}
	},
	computed: {
		...mapState(["cart"])
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.font-16 {
	font-size: 16px;
}
.font-11 {
	font-size: 11px;
}
.fosco-text {
	color: #746a6a;
}
.blue-text {
	color: #3486e6;
}
.font-open-sans {
	font-family: "Open Sans", sans-serif;
}
.grey.lighten-3 {
	background-color: #eeeeee;
}
.card-ecommerce .effect {
	display: none;
	opacity: 0;
	position: absolute;
	bottom: -4rem;
	width: 100%;
}
.card-ecommerce:hover .effect {
	display: block;
	opacity: 1;
}
.card-ecommerce:hover .description {
	display: none;
	opacity: 0;
}
.pointer {
	cursor: pointer;
}
.alert {
	top: 16px;
}
</style>