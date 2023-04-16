<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h4 text-center">Cadastrar</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Nome"
          v-model="form.name"
          lazy-rules
          :rules="[val => (val.length > 0) || 'Nome é requerido']"
        />

        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules
          :rules="[val => (val.length > 0) || 'Email é requerido']"
          type="email"
        />

        <q-input
          label="Senha"
          v-model="form.password"
          type="password"
          lazy-rules
          :rules="[val => (val.length >= 6) || 'Senha é requerida e o mínimo de 6 letras/números']"
        />
        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label="Confirmar"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
          />
          <q-btn
            label="Voltar"
            color="dark"
            class="full-width"
            flat
            rounded
            :to="{name: 'login'}"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()

    const { register } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        await router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
