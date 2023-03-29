<template>
  <div class="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col">

    <h2>
      Workspace
      <span class="_icon"></span>
    </h2>

    <form
        @submit.prevent="submitForm"
        class="w-[350px] mt-4 text-[15px]"
        autocomplete="off"
    >
      <label class="block relative">
        <input
            v-model="form.email"
            type="email"
            placeholder="Email ID"
            class="w-full h-[45px] pl-11 pr-4 rounded-lg focus:outline-none bg-gray-100"
        />
        <client-only>
          <Icon class="absolute text-[22px] text-gray-600 top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2" name="line-md:email" />
        </client-only>
      </label>

      <label class="block relative mt-5">
        <input
            v-model="form.password"
            type="password"
            placeholder="********"
            class="w-full h-[45px] pl-11 pr-4 rounded-lg focus:outline-none bg-gray-100"
        />
        <client-only>
          <Icon class="absolute text-[22px] text-gray-600 top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2" name="ic:sharp-vpn-key" />
        </client-only>
      </label>

      <div class="mt-5 flex justify-end">
        <button
            type="submit"
            class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white lg:px-5 lg:py-2.5 px-4 py-2 flex justify-center items-center shadow-default shadow-primary-300 transition disabled:opacity-70"
            :disabled="!isEnable"
        >
          <span class="text-[14px] font-semibold">
            Sign In
          </span>
        </button>
      </div>

    </form>

    <div class="mt-24"></div>

  </div>
</template>

<script lang="ts" setup>
import {SignInInput} from "~/apollo/__generated__/serverTypes";
import {SIGN_IN} from "~/apollo/mutates/auth.mutate";
import {SignIn, SignInVariables} from "~/apollo/mutates/__generated__/SignIn"
import {NotifyEntity, NotifyType} from "~/entities/notify.entity";

const form = reactive<SignInInput>({
  email: 'heloo@guen.dev',
  password: 'Guen@2508',
})

const { mutate, loading, onDone } = useMutation<SignIn, SignInVariables>(SIGN_IN)
const submitForm = () => mutate({
  input: form
})

const { fire } = useNotify<NotifyEntity>()
const writeToken = async (token: string) => {
  try {
    await $fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ token })
    })

    fire({
      message: 'Welcome back!',
      type: NotifyType.SUCCESS
    })

    setTimeout(() => {
      window.location.reload()
    }, 1000)

  } catch (e) {
    fire({
      message: 'Write token failed!',
      type: NotifyType.ERROR
    })
  }
}

onDone((data) => data.data?.signIn && writeToken(data.data.signIn))

// return true if the form.email match the email format and the text length of form.password is greater than 6
const isEnable = computed(() => {
  return form.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) && form.password.length > 6 && !loading.value
})
</script>

<style scoped>
h2 {
  font-family: 'Caveat', cursive;
  font-size: 45px;
  span._icon {
    @apply w-2.5 h-2.5 bg-primary-500 inline-block rounded-full;
  }
}

form input {
  &::placeholder {
    color: #9ca3af;
  }
}
</style>
