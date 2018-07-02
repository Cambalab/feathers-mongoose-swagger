<template>
  <div class=''>
    <h2>{{$t("message.contacto")}} [{{who}}]</h2>
    <div class='panel-body'>
      <form @submit.prevent @submit="saveForm" method="post">
        <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
        <date-picker :date="date" :limit="limit"></date-picker>
        <input type=submit>
      </form>

      <ul>
        <li v-for="todo in todos">{{ todo }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueFormGenerator from 'vue-form-generator'
  import validators from 'vue-form-generator'
  import myDatepicker from 'vue-datepicker'

  Vue.use(VueFormGenerator)

  export default {
  // head: {
  //   title: this.$t("message.contactTitle")
  // },
  methods: {
    saveForm: function (data) {
      let object = {
        nombre: this.model.nombre,
        apellido: this.model.apellido,
        email: this.model.email,
        mensaje: this.model.mensaje
      }
      this.$store.commit('add', object)
    }
  },
  computed: {
    todos () { return this.$store.state.todos.list }
  },
  data: function ({ req }) {
    return {
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }],
      who: (req ? 'server' : 'client'),
      model:{
        id: 1,
        nombre: 'carlos',
        apellido: 'gomez',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true,
        date: null
      },

      schema:{ fields:[{
         type: 'text',
         label: 'Nombre',
         model: 'nombre',
         placeholder: 'Tu Nombre',
         featured: true,
         required: true
      }, {
         type: 'text',
         label: 'Apellido',
         model: 'apellido',
         placeholder: 'Tu Apellido',
         featured: true,
         required: true
      }, {
         type: 'email',
         label: 'E-mail',
         model: 'email',
         placeholder: 'Users e-mail address'
      }, {
         type: 'textArea',
         label: 'Mensaje',
         model: 'mensaje',
         rows: 3,
         placeholder: 'Tu Mensaje',
         featured: true,
         required: true,
         validator: validators.string
      }]},

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  components: {
    'date-picker': myDatepicker
  }
}
</script>
