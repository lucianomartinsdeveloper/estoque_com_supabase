<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h4 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
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
          lazy-rules
          :rules="[val => (val.length > 0) || 'Senha é requerida']"
          type="password"
        />
        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width q-mt-md"
            outline
            rounded
            type="submit"
          />
        </div>
        <div class="full-width q-gutter-y-sm">
          <q-btn
            label="Cadastrar"
            color="primary"
            class="full-width q-mt-md"
            flat
            to="/register"
            size="sm"
          />
          <q-btn
            label="Esqueceu sua senha?"
            color="primary"
            class="full-width q-mt-md"
            flat
            :to="{name: 'forgot-password'}"
            size="sm"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()

    const { login, isLoggedIn } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'me' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login realizado com sucesso!')
        router.push({ name: 'me' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
