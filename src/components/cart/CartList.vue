<template>
	<div>
		<div class="min-height border rounded p-3 my-3">
			<div>
				<h4 class="font-open-sans font-18">Carrinho</h4>
			</div>
			<div>
				<div class="view p-3 mx-auto text-center">
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
export default {
	name: "CartList"
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

