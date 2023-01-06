import React from 'react'
import { useState, useEffect } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import axios from 'axios'
import Header from '../components/admin/Header'
import { DataGrid } from '@mui/x-data-grid';



function Admin() {
    const url  = 'http://localhost:5000/'

    const [data, setData] = useState()
    const columns = [
        {
          field: "_id",
          headerName: "ID",
          flex: 1,
        },
        {
          field: "name",
          headerName: "Name",
          flex: 0.5,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "phoneNumber",
          headerName: "Phone Number",
          flex: 0.5,
          renderCell: (params) => {
            return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
          },
        },
        {
          field: "country",
          headerName: "Country",
          flex: 0.4,
        },
        {
          field: "occupation",
          headerName: "Occupation",
          flex: 1,
        },
        {
          field: "role",
          headerName: "Role",
          flex: 0.5,
        },
      ];

    useEffect(() => {
        // getAllinfo().then((data) => setData(data)).catch(err => console.log(err));
        getAllinfo()
    }, [])

    const getAllinfo = async() => {
        axios.get(`${url}admin`)
        .then((res) => {
            const allInfo = res.data
            console.log(allInfo)
            return allInfo
        })
        .catch(error => console.error(`Error: ${error}`))
    }

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="CUSTOMERS" subtitle="List of Customers"/>
        <Box>
            {/* <DataGrid
            loading={!data}
            getRowId={(row) => row._id}
            rows={data || []}
            columns={columns}
            /> */}
        </Box>
    </Box>

  )
}

export default Admin