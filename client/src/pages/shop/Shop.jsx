import React from "react";
import "./Shop.css";
import { userServiceData } from "../../dummyData";
import {
  PersonOutlineOutlined,
  PhoneAndroidOutlined,
  EmailOutlined,
  LocationOnOutlined,
  FiberManualRecord,
  AccessAlarmsOutlined,
  EqualizerOutlined,
  CheckBoxOutlined,
  CancelOutlined,
  HourglassEmptyOutlined,
} from "@material-ui/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { userTransactions } from "../../dummyData";
var checkMostRequired = (data) => {
  var service = "";
  var highest = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].Times > highest) {
      highest = data[i].Times;
      service = data[i].name;
    }
  }
  return (
    <span className="reqServiceMost">
      {service}, {highest} times.
    </span>
  );
};
const columns = [
  { id: "shop", label: "Shop", minWidth: 150 },
  { id: "date", label: "Date", minWidth: 120 },
  {
    id: "ammount",
    label: "Ammount",
    minWidth: 100,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
];
const rows = [];
userTransactions.map(function (transaction) {
  var trans = {};
  trans.shop = transaction.shop;
  trans.date = transaction.date;
  trans.ammount = transaction.ammount;
  trans.status = transaction.status;
  rows.push(trans);
});
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
export default function Shop() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="shop">
      <div className="shopTitleContainer">
        <h1 className="shopTitle">Shop Details</h1>
      </div>
      <div className="shopContainer">
        <div className="shopPersonalInformation">
          <span className="shopSpanPersonal">Shop Owner</span>

          <div className="shopPeronalTop">
            <img
              src="https://i.ibb.co/B6LvBJz/hiba.jpg"
              alt=""
              className="shopPersonalTopImg"
            />
            <div className="shopPersonalTopTitle">
              <span className="shopPersonalTopUsername">Hiba Mahjoub</span>
              <span className="shopPersonalJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="shopPeronalBottom">
            <div className="shopPersonalInfo">
              <PersonOutlineOutlined className="shopPersonalIcon" />
              <div className="shopShowInfoTitle">HibaMahjoub11</div>
            </div>
            <div className="shopPersonalInfo">
              <PhoneAndroidOutlined className="shopPersonalIcon" />
              <div className="shopShowInfoTitle">+216 ?? ??? ???</div>
            </div>
            <div className="shopPersonalInfo">
              <EmailOutlined className="shopPersonalIcon" />
              <div className="shopShowInfoTitle">HibaMahjoub11@gmail.com</div>
            </div>
            <div className="shopPersonalInfo">
              <LocationOnOutlined className="shopPersonalIcon" />
              <div className="shopShowInfoTitle">Tunis | Tunisia</div>
            </div>
            <hr className="breakLine"></hr>
            <div className="actvAvrgContainer">
              <CheckBoxOutlined className="approvedIcon" />
              <span className="shopActiveAverage">Approved Transactions:</span>
              <span className="avrgUserActive">15 transaction</span>
            </div>
            <div className="actvAvrgContainer">
              <CancelOutlined className="declinedIcon" />
              <span className="shopActiveAverage">Declined Transactions:</span>
              <span className="avrgUserActive">7 transactions</span>
            </div>
            <div className="actvAvrgContainer">
              <HourglassEmptyOutlined className="pendingIcon" />
              <span className="shopActiveAverage">Pending Transactions:</span>
              <span className="avrgUserActive">4 transactions</span>
            </div>
          </div>
        </div>
        <div className="shopFinancialInformation"></div>
      </div>
    </div>
  );
}
