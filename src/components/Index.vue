<template>
	<section>
		<mdb-container>
			<mdb-row>
				<mdb-col lg="9">
					<ProductList />
				</mdb-col>
				<mdb-col>carrinho</mdb-col>
			</mdb-row>
		</mdb-container>
	</section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ecommerce");

import ProductList from "./products/ProductList";

import * as mdb from "mdbvue";

export default {
	name: "Index",
	components: { ...mdb, ProductList }
};
</script>