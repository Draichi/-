<template>
  <v-flex xs4 class="elevation-1 pa-3 ma-2">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>
        <v-text-field
          v-model="itemName"
          label="Add new item..."
          required
        ></v-text-field>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="addItem">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn icon @click="delColumn(id)">
        <v-icon>delete_forever</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list two-line>
      <v-subheader>
        Column id: {{ id }}
      </v-subheader>
      <draggable v-model="items" group="items" style="min-height: 10px">
        <template v-for="(item, idx) in items">
          <v-list-tile :key="item.id" avatar>
            <v-list-tile-avatar color="indigo">
              <span class="white--text headline">{{ item.title.charAt(0) }}</span>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title>Item id: {{ item.id }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple @click="removeItem(idx)">
                <v-icon color="grey lighten-1">delete_forever</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </draggable>
    </v-list>
  </v-flex>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  name: 'column',
  props: ['id'],
  data: () => ({
    itemName: '',
    items: []
  }),
  methods: {
    addItem () {
      this.$store.commit('addIdCounter')
      this.items.push({id: this.idCounter, title: this.itemName})
      this.itemName = ''
    },
    removeItem (id) {
      this.items.splice(id, 1)
    },
    delColumn (id) {
      this.$store.commit('delColumn', id)
    }
  },
  computed: {
    idCounter () {
      return this.$store.getters.idCounter
    }
  },
}
</script>