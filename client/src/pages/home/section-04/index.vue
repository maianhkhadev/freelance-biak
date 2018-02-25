<template>
  <div class="section">
    <img class="w-100" src="~@/assets/images/pages/home/section-04/wave.svg" alt=""/>
    <div class="container">
      <div class="section-content">
        <div class="row">
          <div class="col-xl-6">
            <div class="title">Beauty in a kiss</div>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus erat ultricies erat condimentum convallis. Ut mauris eros, lobortis quis velit vel, lacinia.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus erat ultricies erat condimentum convallis. Ut mauris eros, lobortis quis velit vel, lacinia.</p>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="title">Muốn nhận thông báo?</div>
            <div class="content">
              Bạn muốn có email nhận thông báo mỗi khi chúng tôi có bài viết mới. Điền thông tin vào vào bảng bên dưới.
            </div>
            <form>
              <div class="form-group">
                <label>Tên của bạn</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group">
                <label>Địa chỉ email</label>
                <input type="email" class="form-control">
              </div>

              <button type="submit" class="btn btn-brown">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section {
    position: relative;
    background-color: #fafafa;

    .container {
      padding-top: 5rem;
      padding-bottom: 5rem;
      border-bottom: 0.0625rem solid rgba(#000000, 0.1);
    }

    .section-content {

      .title {
        color: #000000;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }
      .content {
        color: #87827c;
      }
      form {
        margin-top: 1.25rem;

        label {
          color: #000000;
          font-weight: 500;
        }
        .form-control {
          background-color: transparent;
          border-color: rgba(#000000, 0.42);
          border-radius: unset;
          padding: 0.5rem 0.75rem;
          margin-bottom: 1.25rem;

          &:hover {
            border-color: rgba(#000000, 0.87);
          }
          &:focus {
            border-color: #000000;
            box-shadow: unset;
          }
        }
        button {
          color: #ffffff;
          font-weight: 500;
          text-transform: uppercase;
          border-radius: unset;
          padding: 0.75rem 1.75rem;
          margin-top: 0.5rem;
        }
      }
    }
  }
</style>
