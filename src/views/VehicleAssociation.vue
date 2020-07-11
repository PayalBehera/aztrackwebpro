<template>
  <div>
    
    <CRow>
      <CCol sm="4">
        <CSelect
          label="Vehicle number"
          :options="[ 16767765,265655,367667676,4656565,5676677,6877865]"
        />
      </CCol>
      <CCol sm="4">
        <CSelect
          label="Tracker number"
          :options="[20146767,2015434,2016434,20176765,20182344,2019877]"
        />
      </CCol>
      
    </CRow>
    <CRow>
      <CCol sm="12">
        <CInput
          label="Types"
          placeholder="Assets Details"
        />
      </CCol>
    </CRow>
     <CRow>
      <CCol sm="12">
        <CInput
          label="Starting Locations"
          placeholder="Location"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12">
        <CInput
          label="Delivery Locations"
          placeholder="Location"
        />
      </CCol>
    </CRow>
  </div>
</template>