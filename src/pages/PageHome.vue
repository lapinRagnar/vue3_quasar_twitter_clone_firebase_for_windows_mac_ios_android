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

    <q-list>

      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>lapinRagnar</strong>
            <span class="text-grey-7"> @lapinRagnar</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.

            Laboriosam eos provident enim quod molestias dolore perferendis consequuntur obcaecati quos alias, velit veritatis perspiciatis at aliquam suscipit nesciunt quidem tempora ad!
          </q-item-label>

          <div class="row justify-between q-mt-sm qweet-icons">
            <q-btn
              flat
              round
              color="grey"
              icon="fa-regular fa-comment"
              size="sm"
            />

            <q-btn
              flat
              round
              color="grey"
              icon="fas fa-retweet"
              size="sm"
            />

            <q-btn
              flat
              round
              color="grey"
              icon="far fa-heart"
              size="sm"
            />
            <q-btn
              flat
              round
              color="grey"
              icon="fas fa-trash"
              size="sm"
            />



          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

    </q-list>


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

  .qweet-content {
    white-space: pre-line;
  }

  .qweet-icons {
    margin-left: -5px;
  }
</style>
