import React, { useState, useEffect } from "react";
import "./product.css";
import { forwardRef } from "react";
import Avatar from "react-avatar";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { Modal } from 'bootstrap';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const api = axios.create({});

var columns = [
  { title: "Medicine Name", field: "medicinename" },
  { title: "Product ID", field: "Pid" },
  { title: "Cost", field: "cost" },
  { title: "Manufacture date", field: "mdate" },
  { title: "Expiry Date", field: "edate" },
];
var data = [
  {
    medicinename: "Paracetamol",
    Pid: "1023",
    cost: "100",
    mdate: "2020-01-01",
    edate: "2022-03-23",
  },
  {
    medicinename: " Crocin",
    Pid: "1012",
    cost: "105",
    mdate: "2021-07-27",
    edate: "2022-04-25",
  },
  {
    medicinename: "Thyroxine",
    Pid: "2504",
    cost: "170",
    mdate: "2021-05-30",
    edate: "2022-10-17",
  },
  {
    medicinename: "Adenosine",
    Pid: "3001",
    cost: "125",
    mdate: "2022-01-09",
    edate: "2022-09-23",
  },
  {
    medicinename: "Dolo",
    Pid: "1205",
    cost: "90",
    mdate: "2022-01-28",
    edate: "2022-10-10",
  },
];

// Dwabzy was here
function MedicineInventory() {
  const [expiryMessage, setExpiryMessage] = useState("Medicines about to expire: \n");

  const [state, setState] = useState({
    columns: columns,
    data: data,
    error: null,
    loading: false,
    success: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, loading: true });
      try {
        const result = await api.get("/medicine");
        setState({ ...state, data: result.data, loading: false });
      } catch (error) {
        setState({ ...state, error: error, loading: false });
      }
    };
    // fetchData();
    
    // Check if medicine is about to expire in 2 days
    var myModal = new Modal(document.getElementById('medicineModal'), {})
    
    let medicinesAboutToExpire = [];
    let message = "";
    console.log("Dwabzy is still here");
    for (let i = 0; i < data.length; i++) {
      let expiryDate = new Date(data[i].edate);
      if (expiryDate < Date.now() + 10 * 24 * 60 * 60 * 1000) {
        medicinesAboutToExpire.push(data[i].medicinename);
      }
    }
    for (let i = 0; i < medicinesAboutToExpire.length; i++) {
      if (i === medicinesAboutToExpire.length - 1) {
        message += medicinesAboutToExpire[i];
      } else {
        message += medicinesAboutToExpire[i] + ", ";
      }
    }
    if(medicinesAboutToExpire.length > 0) {
      myModal.show()
      setExpiryMessage(expiryMessage + message);
    }
  }, []);

  const handleAdd = (newData) => {
    setState({ ...state, loading: true });
    api
      .post("/medicine", newData)

      .then((res) => {
        setState({ ...state, loading: false, success: true });
        setTimeout(() => {
          setState({ ...state, success: false });
        }, 2000);
      })
      .catch((err) => {
        setState({ ...state, loading: false, error: err });
        setTimeout(() => {
          setState({ ...state, error: null });
        }, 2000);
      });
  };

  const handleDelete = (oldData) => {
    setState({ ...state, loading: true });
    api
      .delete("/medicine/" + oldData.Pid)
      .then((res) => {
        setState({ ...state, loading: false, success: true });
        setTimeout(() => {
          setState({ ...state, success: false });
        }, 2000);
      })
      .catch((err) => {
        setState({ ...state, loading: false, error: err });
        setTimeout(() => {
          setState({ ...state, error: null });
        }, 2000);
      });
  };

  const handleUpdate = (newData, oldData) => {
    setState({ ...state, loading: true });
    api
      .put("/medicine/" + oldData.Pid, newData)
      .then((res) => {
        setState({ ...state, loading: false, success: true });
        setTimeout(() => {
          setState({ ...state, success: false });
        }, 2000);
      })
      .catch((err) => {
        setState({ ...state, loading: false, error: err });
        setTimeout(() => {
          setState({ ...state, error: null });
        }, 2000);
      });
  };

  return (
    <div className="inventory">
      <h1 className="medical">Medicine Inventory</h1>
      <MaterialTable
        title="Medicine Details in Inventory"
        columns={state.columns}
        data={state.data}
        icons={tableIcons}
      />
      <div
        class="modal fade"
        id="medicineModal"
        tabindex="-1"
        aria-labelledby="medicineModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="medicineModalLabel">
              Medicine Expiry Alert
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{expiryMessage}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineInventory;
