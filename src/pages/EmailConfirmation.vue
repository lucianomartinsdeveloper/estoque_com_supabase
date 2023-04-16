<template>
  <q-page padding>
    <p class="text-body1">Obrigado pelo registro!</p>
    <p class="text-body1">
      Confirme seu e-mail para finalizar o cadastro: <strong> {{ $route.query.email }}</strong>
    </p>
    <div class="row justify-center">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-btn
          label="Voltar para o login"
          color="dark"
          class="full-width"
          rounded
          :to="{name: 'login'}"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
