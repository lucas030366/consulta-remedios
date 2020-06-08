<template>
  <div class="container my-4">
    <div class="alert alert-danger">
      <h3 class="text-center">Erro 404</h3>
      <p class="text-center">página não encontrada</p>
    </div>
    <button @click="$router.push({path: '/'})" class="btn btn-md btn-success">Início</button>
  </div>
</template>