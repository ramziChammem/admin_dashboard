import React from "react";
import "./User.css";
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
export default function User() {
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
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Details</h1>
      </div>
      <div className="userContainer">
        <div className="userPersonalInformation">
          <span className="userSpanPersonal">Personal Information</span>

          <div className="userPeronalTop">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="userPersonalTopImg"
            />
            <div className="userPersonalTopTitle">
              <span className="userPersonalTopUsername">Ramzi Chammem</span>
              <span className="userPersonalJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userPeronalBottom">
            <div className="userPersonalInfo">
              <PersonOutlineOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">RamziChammem69</div>
            </div>
            <div className="userPersonalInfo">
              <PhoneAndroidOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">+216 58 255 774</div>
            </div>
            <div className="userPersonalInfo">
              <EmailOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">RamziChammem69@gmail.com</div>
            </div>
            <div className="userPersonalInfo">
              <LocationOnOutlined className="userPersonalIcon" />
              <div className="userShowInfoTitle">Nabeul | Tunisia</div>
            </div>
            <hr className="breakLine"></hr>
            <div className="actvAvrgContainer">
              <FiberManualRecord className="activeIcon" />
              <span className="userActiveAverage">Active Average:</span>
              <span className="avrgUserActive">110 minutes per day</span>
            </div>
            <div className="actvAvrgContainer">
              <AccessAlarmsOutlined className="timeIcon" />
              <span className="userActiveAverage">Prefered Time Per Day:</span>
              <span className="avrgUserActive">18:00h</span>
            </div>
            <hr className="breakLine"></hr>
            <div className="actvAvrgContainer">
              <CheckBoxOutlined className="approvedIcon" />
              <span className="userActiveAverage">Approved Transactions:</span>
              <span className="avrgUserActive">15 transaction</span>
            </div>
            <div className="actvAvrgContainer">
              <CancelOutlined className="declinedIcon" />
              <span className="userActiveAverage">Declined Transactions:</span>
              <span className="avrgUserActive">7 transactions</span>
            </div>
            <div className="actvAvrgContainer">
              <HourglassEmptyOutlined className="pendingIcon" />
              <span className="userActiveAverage">Pending Transactions:</span>
              <span className="avrgUserActive">4 transactions</span>
            </div>
          </div>
        </div>
        <div className="userFinancialInformation">
          <span className="userSpanFinancial">Financial Information</span>
          <div className="requiredServicesContainer">
            <span className="requiredServicesSpan">Required Services</span>
            <ResponsiveContainer
              className="requiredServicesChart"
              width="90%"
              aspect={5 / 2}
            >
              <BarChart
                width={500}
                height={300}
                data={userServiceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="Times"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mostRequiredServiceContainer">
            <EqualizerOutlined className="mostRequiredIcon" />
            <span className="mostRequiredServiceSpan">
              Most required Service:
            </span>
            {checkMostRequired(userServiceData)}
          </div>
          <hr className="breakLineFinancial"></hr>
          <div className="userTransaction">
            <span className="userTransactionsSpan">User Transactions</span>
            <Paper className="scroll-ableTable">
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
