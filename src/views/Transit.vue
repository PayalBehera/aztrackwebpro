<template>
<CCardBody>
     <template>
       <CButton size="sm" variant="outline" color="success" class="add" @click="associate">
               Add Association 
              </CButton>
     </template>
       <CDataTable 
    
      :items="items"
      :fields="fields"
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
                {{item.Vehicle_No}}
              </h4>
              <h6>Type :{{item. Type}}</h6>
              <p class="text-muted">Starting Location: {{item.Starting}}</p>
              <p class="text-muted">End Location: {{item.End}}</p>
              <CButton size="sm" variant="outline" color="success" class="">
                Continue
              </CButton>
              <CButton size="sm" variant="outline" color="danger" class="ml-1">
               Cancel
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
  { Vehicle_No: '6744756',TrackerNo:'746767', Type: 'coal',Starting: 'BBSR',End: 'Kolkata', status: 'Continue'},
  { Vehicle_No: '65635466',TrackerNo:'746767',Type: 'coal',Starting: 'BBSR',End: 'Kolkata', status: 'Continue'},
  { Vehicle_No: '64767643',TrackerNo:'746767',Type: 'coal',Starting: 'BBSR',End: 'Kolkata', status: 'Continue'},
  { Vehicle_No: '64635567',TrackerNo:'746767',Type: 'coal',Starting: 'BBSR',End: 'Kolkata', status: 'Completed'},
  { Vehicle_No: '6456577',TrackerNo:'746767',Type: 'coal',Starting: 'BBSR',End: 'Kolkata', status: 'Completed'},
 
]

const fields = [
  { key: 'Vehicle_No', _style:'width:20%' },
  
    { key: 'TrackerNo', _style:'width:20%' },
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
  name: 'VehicleList',
  data () {
    return {
      items: items.map((item, id) => { return {...item, id}}),
     
      fields,
      
      details: [],
   
      collapseDuration: 0,
     
    
    }
  },
 
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Completed': return 'success'
        case 'Continue': return 'secondary'
      
       
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.items[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    },
   associate(){
       this.$router.replace({ name: 'association'});
   }
   
  }
}
</script>
<style>
.add{
    float: right;
}
</style>