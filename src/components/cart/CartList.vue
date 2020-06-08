<template>
	<div>
		<div class="min-height border rounded p-3 my-3">
			<div class="mb-4">
				<h4 class="font-open-sans font-weight-bold font-18">
					Carrinho
					<span
						v-if="cart.length > 0"
						class="new-grey font-weight-light font-14"
					>({{ cart.length }} {{length}})</span>
				</h4>
			</div>
			<div>
				<div v-if="cart.length > 0">
					<ul v-for="pdt of cart" :key="pdt.id" class="list-unstyled px-3">
						<CartListItem :pdt="pdt" />
					</ul>
					<div class="detalhe-cart mt-4">
						<h6 class="font-open-sans font-14 new-grey my-4">
							subtotal
							<span
								class="float-right font-open-sans font-weight-bold font-16 black-cart"
							>{{ formatCurrency(subTotal) }}</span>
						</h6>

						<h6 class="font-open-sans font-14 new-grey my-4">
							frete
							<span
								class="float-right font-open-sans font-weight-bold font-16 black-cart"
							>{{ formatCurrency(frete) }}</span>
						</h6>

						<h5 class="font-open-sans font-14 new-grey my-4">
							total
							<span class="float-right font-open-sans font-weight-bold font-20 black-cart">
								{{ formatCurrency(total) }}
							</span>
						</h5>

						<div class="mt-3">
							<button class="btn btn-blue font-weight-bold btn-block font-open-sans font-14 btn-lg">finalizar compra</button>
						</div>
					</div>
				</div>
				<div v-else class="view p-3 mx-auto text-center">
					<img :src="require('@/assets/cart-icon.svg')" class="img-fluid" alt="Carrinho Vazio" />
					<p class="font-open-sans fosco-text mt-3 font-14">
						Até o momento,
						<br />o seu carrinho está vazio
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("ecommerce");

import FormatCurrencyMixin from "@/mixins/format-currency";

import CartListItem from "./CartListItem";

import * as mdb from "mdbvue";

export default {
	name: "CartList",
	mixins: [FormatCurrencyMixin],
	components: { ...mdb, CartListItem },
	computed: {
		...mapState(["cart"]),
		length() {
			return this.cart.length == 1 ? "item" : "itens";
		},
		subTotal() {
			// Reduce:
			// [1,2,3,4].reduce((atual, numero) => atual + numero, 0) /*0 é o "atual inicial" p/ comecar*/
			const subtotal = this.cart.reduce(
				(atual, numero) => atual + numero.price,
				0
			);
			return subtotal;
		},
		frete() {
			const freteGratis = 250.00
			const pdtInCart = this.cart.length
			const frete = pdtInCart * 10
			return this.subTotal > freteGratis ? 0.00 : frete;
		},
		total(){
			return this.subTotal + this.frete
		}
	}
};
</script>

<style>
.font-20 {
	font-size: 20px;
}
.font-18 {
	font-size: 18px;
}
.font-14 {
	font-size: 14px;
}
.min-height {
	min-height: 317px;
}
.black-cart {
	color: #423b3b;
}
.btn-blue {
	background-color: #54A3FF;
	color: #fff !important;
}
</style>

