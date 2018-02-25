<template>
  <header>
    <div class="container">
      <div class="row">
        <!-- <div class="col-3 align-self-center d-block d-sm-none">
          <div class="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> -->
        <div class="col-xl-10">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bài viết</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >Liên hệ</a>
            </li>
          </ul>
        </div>
        <div class="col-xl-2">
          <div class="socials">
            <a href="#">
              <img class="img-fluid" width="40" src="~@/assets/images/layouts/default/header/icon-01.png" alt="" />
            </a>
            <a href="#">
              <img class="img-fluid" width="40" src="~@/assets/images/layouts/default/header/icon-02.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollTo: function (domId) {
        $('html,body').animate({
          scrollTop: $(domId).offset().top - 95
        }, 600)
      }
    },
    mounted () {
      $('.nav-icon').click(function () {
        $(this).toggleClass('shown')
        $('.nav').slideToggle('fast')
      })
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    // box-shadow: 0 0.125rem 0.75rem #e8dfd6;
    z-index: 1000;

    .nav-icon {
      float: right;
      display: none;

      @media only screen and (max-width: 600px) {
        display: block;
      }
    }

    .nav {
      justify-content: flex-end;

      @media only screen and (max-width: 1200px) {
        justify-content: flex-start;
        margin-top: 1.25rem;
      }
      @media only screen and (max-width: 600px) {
        display: none;
        flex-direction: column;
      }

      .nav-item {

        .nav-link {
          color: #000000;
          font-size: 1.25rem;
          font-weight: 700;
          padding: 2.125rem 1.25rem;

          &:hover {
            color: #cd0066;
            text-decoration: unset;
          }
        }
      }
    }

    .socials {
      text-align: right;
      padding: 1.625rem 1.25rem;

      a {
        margin-left: 0.5rem;
      }
    }
  }

  .nav-icon {
    width: 2.5rem;
    height: 1.875rem;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .nav-icon span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: #7d644b;
    border-radius: 0.5625rem;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .nav-icon span:nth-child(1) {
    top: 0;
  }

  .nav-icon span:nth-child(2),.nav-icon span:nth-child(3) {
    top: 0.75rem;
  }

  .nav-icon span:nth-child(4) {
    top: 1.5rem;
  }

  .nav-icon.shown span:nth-child(1) {
    top: 0.75rem;
    width: 0%;
    left: 50%;
  }

  .nav-icon.shown span:nth-child(2) {
    transform: rotate(45deg);
  }

  .nav-icon.shown span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .nav-icon.shown span:nth-child(4) {
    top: 0.85rem;
    width: 0%;
    left: 50%;
  }
</style>
