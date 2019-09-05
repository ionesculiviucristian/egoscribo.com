<template lang="pug">
  v-app
    v-content
      v-container(fluid fill-height)
        v-layout(align-center justify-center)
          v-flex(xs12 sm8 md6)
            v-form(@submit.prevent="sendRequest")
              v-card(class="elevation-12")
                v-toolbar(color="indigo" dark flat)
                  v-toolbar-title Autentificare
                v-card-text
                  v-text-field(
                    v-model="form.email.value"
                    v-validate="form.email.validation.rules"
                    data-vv-name="email"
                    prepend-icon="person"
                    type="email"
                    required
                    :data-vv-as="form.email.label"
                    :label="form.email.label"
                    :error-messages="errors.collect('email')"
                  )
                  v-text-field(
                    v-model="form.password.value"
                    v-validate="form.password.validation.rules"
                    data-vv-name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    :data-vv-as="form.password.label"
                    :label="form.password.label"
                    :error-messages="errors.collect('password')"
                  )
                v-card-actions
                  v-spacer
                  v-btn(color="success" type="submit") Intra
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
}
</script>
