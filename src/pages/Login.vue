<template>
  <q-page padding>
   <q-form
    class="row justify-center @submit.prevent.stop">
  <p class="col-12 text-h5 text-center">Login</p>
  <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
    <q-input
       label="Email"
      v-model="form.email"
      
    />
    <q-input
       label="Passaword"
      v-model="form.password"
    />
    <div class="full-width q-pt-md">
      <q-btn
      label="Login"
      color="primary"
      class="full-width q-mt-lg"
      @click="login"
      outline
      rounded
      size="lg"
      type="submit"
    />
    </div>
    <div class="full-width q-pt-md">
      <q-btn
      label="Register"
      color="primary"
      class="full-width q-mt-lg"
      @click="login"
      flat
      to="/register"
    />
    </div>
    
  </div>   
  </q-form> 
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'	
import useAuthUser from 'src/composables/UseAuthUser';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',


setup () { 
  const form = ref({
    email: '',
    password: '',
  })
  return{
    form
  }
}
})
</script>
