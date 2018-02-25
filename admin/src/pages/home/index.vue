<template>
  <div class="page">
    <div class="page-content">
      <div class="row">
        <div class="col-xl-3">
          <div class="link" v-on:click="onLinkClick('Articles')">
            <img src="~@/assets/images/pages/home/im-01.png" alt=""/>
            <div class="name">Articles</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="link" v-on:click="onLinkClick('Collections')">
            <img src="~@/assets/images/pages/home/im-02.png" alt=""/>
            <div class="name">Collections</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="link" v-on:click="onLinkClick('Subscribers')">
            <img src="~@/assets/images/pages/home/im-03.png" alt=""/>
            <div class="name">Subscribers</div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="link" v-on:click="onLinkClick('Settings')">
            <img src="~@/assets/images/pages/home/im-04.png" alt=""/>
            <div class="name">Settings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      onLinkClick: function (name) {
        let self = this
        self.$router.push({
          name: name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .link {
    background-color: #ffffff;
    text-align: center;
    border: 0.0625rem solid rgba(#000000, 0.1);
    border-radius: 1.25rem;
    padding: 1.25rem;
    cursor: pointer;

    img {
      width: 6.25rem;
      margin-bottom: 1.25rem;
    }

    .name {
      color: #000000;
      font-size: 1.25rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>
