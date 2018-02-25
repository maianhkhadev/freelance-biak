<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-9">
          <div class="section-header">
            <div class="breadcumb">
              <a href="#">
                Trang chủ
              </a>
              <a href="#">
                Bài viết
              </a>
            </div>
            <div class="title">Simba beauty cosmetics</div>
            <div class="date">Dec. 11, 2017</div>
            <div class="thumbnail"></div>
          </div>
          <div class="section-content">
            <p>Let us follow the logic of things from the beginning. Or, rather, from the end: modern times. We are, as I am writing these lines, witnessing a complete riot against some class of experts, in domains that are too difficult for us to understand, such as macroeconomic reality, and in which not only the expert is not an expert, but he doesn’t know it. That previous Federal Reserve bosses, Greenspan and Bernanke, had little grasp of empirical reality is something we only discovered a bit too late: one can macroBS longer than microBS, which is why we need to be careful on who to endow with centralized macro decisions.</p>
            <p>What makes it worse is that all central banks operated under the same model, making it a perfect monoculture.</p>
            <p>In the complex domain, expertise doesn’t concentrate: under organic reality, things work in a distributed way, as Hayek has convincingly demonstrated. But Hayek used the notion of distributed knowledge. Well, it looks like we do not even need that thing called knowledge for things to work well. Nor do we need individual rationality. All we need is structure.</p>
            <p>It doesn’t mean all participants have a democratic sharing of decisions. One motivated participant can disproportionately move the needle (what I have studied as the asymmetry of the minority rule). But every participant has the option to be that player.</p>
            <p>Somehow, under scale transformation, emerges a miraculous effect: rational markets do not require any individual trader to be rational. In fact they work well under zero-intelligence –a zero intelligence crowd, under the right design, works better than a Soviet-style management composed to maximally intelligent humans.</p>
            <p>Which is why Bitcoin is an excellent idea. It fulfills the needs of the complex system, not because it is a cryptocurrency, but precisely because it has no owner, no authority that can decide on its fate. It is owned by the crowd, its users. And it has now a track record of several years, enough for it to be an animal in its own right.</p>
            <p>For other cryptocurrencies to compete, they need to have such a Hayekian property.</p>
            <p>Bitcoin is a currency without a government. But, one may ask, didn’t we have gold, silver and other metals, another class of currencies without a government? Not quite. When you trade gold, you trade “loco” Hong Kong and end up receiving a claim on a stock there, which you might need to move to New Jersey. Banks control the custodian game and governments control banks (or, rather, bankers and government officials are, to be polite, tight together). So Bitcoin has a huge advantage over gold in transactions: clearance does not require a specific custodian. No government can control what code you have in your head.</p>
            <p>Finally, Bitcoin will go through hick-ups (hiccups). It may fail; but then it will be easily reinvented as we now know how it works. In its present state, it may not be convenient for transactions, not good enough to buy your decaffeinated expresso macchiato at your local virtue-signaling coffee chain. It may be too volatile to be a currency, for now. But it is the first organic currency.</p>
            <p>But its mere existence is an insurance policy that will remind governments that the last object establishment could control, namely, the currency, is no longer their monopoly. This gives us, the crowd, an insurance policy against an Orwellian future.</p>
            <div class="writer">Techtalk via Medium</div>

            <div class="row mt-5">
              <template v-for="n in 3">
                <div class="col-xl-4">
                  <post></post>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div class="test">
            <div class="title">
              <span>Có thể bạn sẽ thích</span>
            </div>
            <template v-for="n in 9">
              <div class="post">
                <a href="#">Hướng dẫn Airbnb JavaScript Style Guide | Tech Talk</a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios'
  import Post from '@/components/blocks/post/without-content'

  export default {
    components: {
      'post': Post
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .section {
    position: relative;

    .section-header {

      .breadcumb {
        margin-bottom: 0.5rem;

        a {
          color: #000000;
          font-size: 1rem;

          &::after {
            content: '\203A';
            font-size: 1.25rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }

          &:hover {
            text-decoration: unset;
          }
        }
      }
      .title {
        color: #000000;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
      }
      .date {
        color: #000000;
        font-size: 1rem;
        margin-bottom: 1.25rem;
      }
      .thumbnail {
        background-image: url('/static/images/posts/im-01.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding-top: 35%;
        margin-bottom: 1.75rem;
      }
    }
    .section-content {
      margin-bottom: 3rem;
      
      .writer {
        color: #000000;
        font-size: 1rem;
        font-style: italic;
      }
    }

    .test {
      position: sticky;
      top: 8rem;
      margin-top: 8rem;

      .title {
        border-bottom: 0.125rem solid #880e4f;

        span {
          display: inline-block;
          color: #ffffff;
          font-weight: 700;
          background-color: #880e4f;
          padding: 0.25rem 0.75rem;
        }
      }

      .post {
        border-bottom: 0.0625rem dashed #f2f2f2;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        a {
          color: #000000;
          font-size: 0.875rem;
          font-weight: 500;

          &:hover {
            color: #880e4f;
            text-decoration: unset;
          }
        }
      }
    }
  }
</style>
