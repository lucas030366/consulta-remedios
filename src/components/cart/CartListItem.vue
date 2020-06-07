<template>
	<li>
		<mdb-row>
			<mdb-col lg="3" class="my-auto p-0">
				<div class="view grey lighten-3 rounded p-2">
					<img :src="require('@/assets/'+pdt.image)" :alt="pdt.name" class="img-fluid" />
				</div>
			</mdb-col>
			<mdb-col lg class="pr-0">
				<div>
					<h6 class="font-open-sans font-14 new-grey">{{ pdt.name }}</h6>
					<h6 class="font-open-sans font-weight-bold font-14">{{ formatCurrency(pdt.price) }}</h6>
				</div>
				<div class="icon-delete">
					<a @click="deletePdt(pdt)" class="pointer p-3">
						<span class="blue-icon">
							<i class="fas fa-times-circle"></i>
						</span>
					</a>
				</div>
			</mdb-col>
		</mdb-row>
	</li>
</template>

<script>
import FormatCurrencyMixin from "@/mixins/format-currency";

import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("ecommerce");

import * as mdb from "mdbvue";

export default {
	name: "CartListItem",
	components: { ...mdb },
	mixins: [FormatCurrencyMixin],
	props: {
		pdt: Object
	},
	methods: {
		...mapActions(["deletarProduto"]),
		deletePdt(pdt) {
			const confirm = window.confirm(
				"Deseja remover este produto do carrinho?"
			);
			if (confirm) {
				this.deletarProduto({ pdt });
			}
		}
	}
};
</script>

<style>
.new-grey {
	color: #7f7575;
}
.blue-icon {
	color: #54a3ff;
}
li .icon-delete {
	opacity: 0;
	display: none;
}
li:hover .icon-delete {
	opacity: 1;
	display: block;
	position: absolute;
	right: -18px;
	top: 20px;
}
</style>