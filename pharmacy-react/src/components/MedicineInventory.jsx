import React, { useState, useEffect } from 'react';
import "./product.css";
import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
 
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
 
const api = axios.create({

})
 
 

function MedicineInventory() {
 
  var columns = [
    {title: "Medicine Name", field: "medicinename"},
    {title: "Product ID", field: "Pid"},
    {title: "Cost", field: "cost"},
    {title: "Manufacture date", field: "mdate"},
    {title: "Expiry Date", field: "edate"}
  ]
  var data = [
    {
      "medicinename": "Paracetamol",
      "Pid": "1023",
      "cost": "100",
      "mdate": "2020-01-01",
      "edate": "2021-03-15"
    },
    {
         "medicinename" : " Crocin",
        "Pid":"1012",
        "cost":"105",
        "mdate":"2021-07-27",
        "edate":"2022-04-08"
    },
    {
        "medicinename":"Thyroxine",
        "Pid":"2504",
        "cost":"170",
        "mdate":"2021-05-30",
        "edate":"2022-10-17"
    },
    {
        
        "medicinename":"Adenosine",
        "Pid":"3001",
        "cost":"125",
        "mdate":"2022-01-09",
        "edate":"2022-09-23"
    },
    {
        "medicinename":"Dolo",
        "Pid":"1205",
        "cost":"90",
        "mdate":"2022-01-28",
        "edate":"2022-10-10"
    }
    

    
    ]
  const [state, setState] = useState({
    columns: columns,
    data: data,
    error: null,
    loading: false,
    success: false
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, loading: true });
      try {
        const result = await api.get('/medicine');
        setState({ ...state, data: result.data, loading: false });
      } catch (error) {
        setState({ ...state, error: error, loading: false });
      }
    };
    fetchData();
  }, []);
  
  const handleAdd = (newData) => {
    setState({ ...state, loading: true });
    api.post('/medicine', newData)

    
    .then(res => {  
      setState({ ...state, loading: false, success: true });
      setTimeout(() => {
        setState({ ...state, success: false });
      }
      , 2000);
    })
    .catch(err => {
      setState({ ...state, loading: false, error: err });
      setTimeout(() => {
        setState({ ...state, error: null });
      }
      , 2000);
    });
  };

  const handleDelete = (oldData) => {
    setState({ ...state, loading: true });
    api.delete('/medicine/' + oldData.Pid)
    .then(res => {
      setState({ ...state, loading: false, success: true });
      setTimeout(() => {
        setState({ ...state, success: false });
      }
      , 2000);
    })
    .catch(err => {
      setState({ ...state, loading: false, error: err });
      setTimeout(() => {
        setState({ ...state, error: null });
      }
      , 2000);
    });
  };

  const handleUpdate = (newData, oldData) => {
    setState({ ...state, loading: true });
    api.put('/medicine/' + oldData.Pid, newData)
    .then(res => {
      setState({ ...state, loading: false, success: true });
      setTimeout(() => {
        setState({ ...state, success: false });
      }
      , 2000);
    })
    .catch(err => {
      setState({ ...state, loading: false, error: err });
      setTimeout(() => {
        setState({ ...state, error: null });
      }
      , 2000);
    });
  };


  return (
    <div className='inventory'>
        <h1 className='medical'>Medicine Inventory</h1>
      <MaterialTable

        title="You can see everything in Medicine Inventory................"
        columns={state.columns}
        data={state.data}
        icons={tableIcons}
      />
    </div>
  );
}

  export default MedicineInventory;