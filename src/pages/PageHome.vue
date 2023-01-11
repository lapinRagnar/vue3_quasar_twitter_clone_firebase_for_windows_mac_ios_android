<template>

  <q-page class="relative-position">

    <q-scroll-area class="absolute full-width full-height">

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
            @click="addNewQweet"
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

      <q-list separator>

        <transition-group
          appear
          enter-active-class="animated zoomInUp slower"
          leave-active-class="animated zoomOutDown slower"
        >

          <q-item
          class="q-py-md"
          v-for="qweet in qweets"
          :key="qweet.id"
          >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>

              <q-item-label class="text-subtitle1">
                <strong>lapinRagnar</strong>
                <span class="text-grey-7"> @lapinRagnar <br class="lt-sm"> - {{ qweet.date}}</span>
              </q-item-label>

              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
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
                  @click="toggleLiked(qweet)"
                  :color="qweet.liked ? 'pink' : 'grey'"
                  :icon=" qweet.liked ? 'fas fa-heart' : 'far fa-heart' "
                  size="sm"
                />
                <q-btn
                  @click="deleteQtweet(qweet)"
                  flat
                  round
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                />


              </div>

            </q-item-section>

          </q-item>

        </transition-group>

      </q-list>

    </q-scroll-area>

  </q-page>

</template>

<script>

import { defineComponent } from 'vue'
import db from '../boot/firebase'
import { collection, query, onSnapshot, orderBy, doc, deleteDoc, addDoc, updateDoc  } from "firebase/firestore"




export default defineComponent({
  name: 'PageHome',

  setup() {

  },

  data() {
    return {
      newTweetContent: '',
      qweets: [
        // {
        //   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //   date: format(16732075302, 'us')
        // },
        // {
        //   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //   date: format(1673206111543)
        // },
      ]
    }
  },

  methods: {

    async addNewQweet() {
      console.log('addNewQweet')
      let newQweet = {
        content: this.newTweetContent,
        date: Date.now(),
        liked: false
      }
      // this.qweets.unshift(newQweet)

      const qweetRef = collection(db, 'qweets')

      await addDoc(qweetRef, newQweet)

      this.newTweetContent = ''
    },

    async deleteQtweet(qweet) {
      // console.log('le qweet', qweet)
      // let dateToDelete = qweet.date
      // let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      // console.log('index', index)
      // this.qweets.splice(index, 1)


      await deleteDoc(doc(db, 'qweets', qweet.id))
    },

    async toggleLiked(qweet) {

      const qweetRef = doc(db, "qweets", qweet.id);

      await updateDoc(qweetRef, {
        liked: !qweet.liked
      })
    }
  },



  filters: {

  },

  mounted() {

    const q = query(collection(db, "qweets"), orderBy("date"))
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {

        let qweetChange = change.doc.data()

        qweetChange.id = change.doc.id

        if (change.type === "added") {
          console.log("New tweet: ", qweetChange)
          this.qweets.unshift(qweetChange)
        }
        if (change.type === "modified") {
          console.log("Modified tweet: ", qweetChange)
          let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
          Object.assign(this.qweets[index], qweetChange)
        }
        if (change.type === "removed") {
          console.log("Removed tweet: ", qweetChange)
          let index = this.qweets.findIndex(qweet => qweet.id === qweetChange.id)
          this.qweets.splice(index, 1)
        }
      })
    })

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
