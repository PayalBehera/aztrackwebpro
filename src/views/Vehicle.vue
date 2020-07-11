<template>

  <CCardBody>

       <template >
       <CDataTable 
     
      :items="items"
      :fields="fields"
      hover
      size="xs"
      
 
    
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
                {{item.VehicleType}}
              </h4>
              <CRow>
                 <CCol>
              <p class="text-muted">Vehicle Number: {{item.Vehicle_No}}</p>
              <p class="text-muted">Model Number: {{item.ModelNo}}</p>
                 </CCol>
                 <CCol>
               <p class="text-muted">Owner Name: {{item.OwnerName}}</p>
                <p class="text-muted">Owner Number: {{item.OwnerNo}}</p>
                 </CCol>
                </CRow>
   <CRow>
    <CButton size="sm" variant="outline" color="success" class=""
      @click="warningModal = true"
     
    >
      Edit
    </CButton>
    <CModal
      title="Edit Vehicle Details"
      color="warning"
   
     :show.sync="warningModal"
      
    >
    <div>
       <CRow>
      <CCol sm="4">
        <CInput
          label="Vehicle No"
          placeholder=" Enter Vehicle No"
        />
      </CCol>
      <CCol sm="4">
        <CSelect
          label="Vehicle Type"
          :options="[1,2,3,4]"
        />
      </CCol>

    </CRow>
     <CRow>
      <CCol sm="12">
        <CInput
          label="Owner Name"
          placeholder="Enter Owner name"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12">
        <CInput
          label="Owner Number"
          placeholder="Enter Owner Number"
        />
      </CCol>
    </CRow>
   
    </div>
    </CModal>
 
             
              <CButton size="sm" variant="outline" color="danger" class="ml-1">
                Delete
              </CButton>
   </CRow>
            </CMedia>
          </CCardBody>
        </CCollapse>
      </template>
       </CDataTable> 
       </template>
   </CCardBody>
</template>
<script>

const items = [
  { Vehicle_No: '6744756',TrackerNo:'746767',ModelNo:'746767', VehicleType: 'GTN-101',OwnerName: 'XXX' ,OwnerNo:'789322111' },
  { Vehicle_No: '65635466',TrackerNo:'746767',ModelNo:'6767767', VehicleType: 'GTN-102',OwnerName: 'XXX' ,OwnerNo:'789322111'},
  { Vehicle_No: '64767643',TrackerNo:'746767',ModelNo:'746767', VehicleType: 'GTN-103',OwnerName: 'XXX' ,OwnerNo:'789322111'},
  { Vehicle_No: '64635567',TrackerNo:'746767',ModelNo:'647767',VehicleType: 'GTN-104',OwnerName: 'XXX' ,OwnerNo:'789322111'},
  { Vehicle_No: '6456577',TrackerNo:'746767',ModelNo:'767677', VehicleType: 'GTN-105',OwnerName: 'XXX' ,OwnerNo:'789322111'},
 
]


const fields = [
  { key: 'Vehicle_No', _style:'width:10%; height:50px;' },
 
   
   
  { key: 'VehicleType', _style:'width:10%;height:50px;'},
 
  
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
     warningModal: false
    
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