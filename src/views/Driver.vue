
<template>

  <CCardBody>
      
    <CDataTable
    
      :items="items"
      :fields="fields"
      hover
      sorter
      pagination
    >
          
     
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
                {{item. DriverName}}
              </h4>
              <p class="text-muted">License Number: {{item.LicenseNo}}</p>
              <p class="text-muted">Contact Number: {{item.DriverContact}}</p>
              <p class="text-muted">Whatsapp Contact: {{item.DriverWhatsapp}}</p>
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
   { DriverName: 'Estavan Lykos',LicenseNo :'6767436676', DriverContact:"98565445" ,  DriverWhatsapp: '565664454'},
  { DriverName: 'Chetan Mohamed',LicenseNo:'44524542', DriverContact:"7847474"  ,  DriverWhatsapp: '65754676'},
  { DriverName: 'Derick Maximinus',LicenseNo:'565555567', DriverContact:"77567432"  ,  DriverWhatsapp: '9787673211'},
  { DriverName: 'Friderik Dávid',LicenseNo:'565656565', DriverContact:"977367655" ,  DriverWhatsapp: '9554454433'},
 
]

const fields = [
  { key: 'DriverName', _style:'width:20%' },
   { key: 'LicenseNo', _style:'width:20%' },
 
  { key: 'DriverContact', _style:'width:20%;font-size: 100%;' },
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
   

    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>