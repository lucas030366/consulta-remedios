<template>
	<section>
		<mdb-container class="py-5">
			<mdb-row>
				<mdb-col lg="9">
					<ProductList />
				</mdb-col>
				<mdb-col>
					<CartList />
				</mdb-col>
			</mdb-row>
		</mdb-container>
	</section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ecommerce");

import ProductList from "./products/ProductList";
import CartList from "./cart/CartList";

import * as mdb from "mdbvue";

export default {
	name: "Index",
	components: { ...mdb, ProductList, CartList}
};
</script>