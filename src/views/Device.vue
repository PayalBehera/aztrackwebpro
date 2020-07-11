<template>

  <CCardBody>
      
    <CDataTable
    
      :items="items"
      :fields="fields"
      items-per-page-select
      :items-per-page="5"

      hover
      sorter
      pagination
    >
          
      <template #status="{item}">
          
        <td>
          <CBadge :color="getBadge(item.status)">
            {{item.status}}
          </CBadge>
        </td>
      </template>
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{Boolean(item._toggled) ? 'Hide' : 'Show'}}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody>
            <CMedia :aside-image-props="{ height: 102 }">
              <h4>
                {{item.Tracker_Model}}
              </h4>
              <p class="text-muted">Tracker Number: {{item.Tracker_Number}}</p>
              <CButton size="sm" variant="outline" color="success" class="">
                Edit
              </CButton>
              <CButton size="sm" variant="outline" color="danger" class="ml-1">
                Delete
              </CButton>
            </CMedia>
          </CCardBody>
        </CCollapse>
      </template>
    </CDataTable>
  </CCardBody>
</template>
<script>
const items = [
   { Tracker_Model: 'Estavan Lykos',Tracker_Number :'6767436676',  status: 'Banned'},
  { Tracker_Model: 'Chetan Mohamed',Tracker_Number:'44524542',   status: 'Inactive'},
  { Tracker_Model: 'Derick Maximinus',Tracker_Number:'565555567',   status: 'Pending'},
  { Tracker_Model: 'Friderik Dávid',Tracker_Number:'565656565',  status: 'Active'},
 
]

const fields = [
  { key: 'Tracker_Model', _style:'width:20%' },
   { key: 'Tracker_Number', _style:'width:20%' },
 
  { key: 'status', _style:'width:20%;font-size: 100%;' },
  { 
    key: 'show_details', 
    label: '', 
    _style: 'width:1%', 
    sorter: false, 
    filter: false
  }
]

export default {
  name: 'TrackerList',
  data () {
    return {
      items: items.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>