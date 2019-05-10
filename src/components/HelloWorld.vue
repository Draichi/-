<template>
  <v-container>
    <v-layout align-start justify-center>
      <draggable v-model="columns" tag="div" group="columns" direction="vertical" style="min-height: 10px">
        <v-flex v-for="col in columnsList" v-bind:key="col" d-inline-flex style="width: 800px;">
          <column :id="col"/>
        </v-flex>
      </draggable>
    </v-layout>
    <v-btn
        @click="addColumn"
        color="indigo"
        dark
        fab
        fixed
        bottom
        right
      >
        <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
import column from '@/components/Column.vue'
import {mapGetters} from 'vuex'

  export default {
    components: {
      draggable,
      column
    },
    data: () => ({
      // numberOfColumns: 1,
      columns: []
    }),
    methods: {
      addColumn () {
        // this.numberOfColumns += 1
        // this.columnsList.push(this.numberOfColumns)
        this.$store.commit('addColumn')
      },
      // removeItem (id) {
      //   this.items.splice(id, 1)
      // }
    },
    computed: {
      ...mapGetters([
        'columnsList'
      ])
    }
  }
</script>

<style>
</style>
