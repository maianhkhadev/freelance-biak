<template>
  <div ref="handsontable"></div>
</template>

<script>
  if (process.browser) {
    require('handsontable/dist/handsontable.full.css')
    window.Handsontable = require('handsontable/dist/handsontable.full.js')
  }

  export default {
    data () {
      return {
        handsontable: null
      }
    },
    mounted () {
      let self = this

      var data = [
        {
          title: "<a href='http://themeforest.net/item/limitless-responsive-web-application-kit/13080328' target='_blank'>Limitless - Responsive Web Application Kit</a>",
          description: "Limitless is one of the best application templates ever built. Very flexible and clean admin template based on Bootstrap and Less. Available in 4 different layouts.",
          sales: "<strong>12930</strong>",
          comments: "<div class='text-orange mb-5'><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i></div> 35 ratings",
        }, {
          title: "<a href='http://themeforest.net/item/londinium-responsive-bootstrap-3-admin-template/6978619' target='_blank'>Londinium - responsive bootstrap 3 admin template</a>",
          description: "Londinium â€“ a new premium admin skin with lots of custom elements, plugins and very flexible content structure. Londinium is powered with Bootstrap framework.",
          sales: "<strong>8509</strong>",
          comments: "<div class='text-orange mb-5'><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i></div> 56 ratings",
        }, {
          title: "<a href='http://themeforest.net/item/its-brain-responsive-bootstrap-3-admin-template/909197' target='_blank'>It's Brain - Responsive Bootstrap 3 Admin Template</a>",
          description: "It's Brain admin template is based on Bootstrap framework and includes a lot of different features. Comes with fixed and liquid layouts in both light and dark versions.",
          sales: "<strong>3902</strong>",
          comments: "<div class='text-orange mb-5'><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i><i class='icon-star-full2'></i></div> 453 ratings",
        }
      ]


      self.handsontable = new Handsontable(self.$refs.handsontable, {
        data: data,
        colWidths: 100,
        stretchH: 'all',
        width: '100%',
        colHeaders: ["Name", "Description", "Sales", "Rating"],
        columns: [
            {data: "title", renderer: "html"},
            {data: "description", renderer: "html"},
            {data: "sales", renderer: "html"},
            {data: "comments", renderer: "html"},
        ],
        cells: function(row) {
          return {
            readOnly: true
          }
        }
      })
    }
  }
</script>
