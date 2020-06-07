<template>
	<div>
		<div class="min-height border rounded p-3 my-3">
			<div>
				<h4 class="font-open-sans font-18">
					Carrinho
					<span v-if="cart.length > 0">({{ cart.length }} {{length}})</span>
				</h4>
			</div>
			<div>
				<div v-if="cart.length > 0">
					<ul v-for="pdt of cart" :key="pdt.id">
						<CartListItem :pdt="pdt" />
					</ul>
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
const { mapActions, mapState } = createNamespacedHelpers("ecommerce");

import CartListItem from "./CartListItem";

import * as mdb from "mdbvue";

export default {
	name: "CartList",
	components: { ...mdb, CartListItem },
	computed: {
		...mapState(["cart"]),
		length() {
			return this.cart.length == 1 ? "item" : "itens";
		}
	}
};
</script>

<style>
.font-18 {
	font-size: 18px;
}
.font-14 {
	font-size: 14px;
}
.min-height {
	min-height: 309px;
}
</style>

