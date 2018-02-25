<template>
  <div class="container">
    <header>
      <div class="row">
        <div class="col-6">
          <router-link class="name" :to="{ name: 'Home'}">Beauty in a kiss</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  header {
    border-bottom: 1px solid rgba(#000000, 0.1);
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    .name {
      color: #7d644b;
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>
