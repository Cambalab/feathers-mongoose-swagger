<template>
<div class="panel-body">
  <form action="/submitForm">
    <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
    <input type=submit>
  </form>
</div>
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueFormGenerator from 'vue-form-generator'

Vue.use(VeeValidate)
Vue.use(VueFormGenerator)

export default {
  data: function () {
    return {
      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
      },

      schema: {
        fields: [{
          type: 'text',
          label: 'ID (disabled text field)',
          model: 'id',
          readonly: true,
          disabled: true
        }, {
          type: 'text',
          label: 'Name',
          model: 'name',
          placeholder: 'Your name',
          featured: true,
          required: true
        }, {
          type: 'password',
          label: 'Password',
          model: 'password',
          min: 6,
          required: true,
          hint: 'Minimum 6 characters'
        }, {
          type: 'select',
          label: 'skills',
          model: 'type',
          values: ['Javascript', 'VueJS', 'CSS3', 'HTML5'],
          errors: []
        }, {
          type: 'email',
          label: 'E-mail',
          model: 'email',
          placeholder: 'Users e-mail address',
          onValidated: function (model, errors, field) {
            if (errors.length > 0) {
              console.log('Validation error in Name field! Errors:', errors)
            }
          }
        }, {
          type: 'checkbox',
          label: 'Status',
          model: 'status',
          default: true
        }]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
