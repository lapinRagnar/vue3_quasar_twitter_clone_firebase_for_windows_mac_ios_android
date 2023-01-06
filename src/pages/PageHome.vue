<template>
  <q-page>

    <div class="q-py-lg q-px-md row items-end q-col-gutter-lg">

      <div class="col">

        <q-input
          class="new-tweet"
          bottom-slots
          v-model="newTweetContent"
          placeholder="What's happining ?"
          counter
          maxlength="300"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </template>


        </q-input>

      </div>

      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          unelevated
          rounded
          color="orange"
          label="tweet"
          no-caps
          :disabled="!newTweetContent"
        />
      </div>


    </div>

    <q-separator
      class="divider"
      size="10px"
      color="grey-4"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newTweetContent: ''
    }
  }
})
</script>

<style lang="scss">
  .new-tweet textarea {
    font-size: 19px;
    line-height: 1.4 !important;
  }

  .divider {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: $orange-2;
  }
</style>
