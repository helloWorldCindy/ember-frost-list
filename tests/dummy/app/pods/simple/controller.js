/**
 * TODO
 */

import Ember from 'ember'
const {isEmpty} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {sort} from 'ember-frost-sort'

export default Ember.Controller.extend({

  // == Dependencies ==========================================================

  // == Properties ============================================================

  selectedItems: [],
  sortOrder: ['-id'],
  sortingProperties: [
    { label: 'Id', value: 'id' },
    { label: 'Label', value: 'label' }
  ],

  // == Computed Properties ===================================================

  @readOnly
  @computed('model.[]', 'sortOrder.[]')
  items (model, sortOrder) {
    if (isEmpty(model)) {
      return []
    }
    return sort(model, sortOrder) // Client side sorting
  },

  // == Functions =============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
    onSelectionChange (selectedItems) {
      this.get('selectedItems').setObjects(selectedItems)
    },

    onSortingChange (sortOrder) {
      this.get('sortOrder').setObjects(sortOrder)
    }
  }
})
