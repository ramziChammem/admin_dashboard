import React from "react";
import "./ShopList.css";
import { DataGrid } from "@material-ui/data-grid";
import { shopRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Shops() {
  const [data, setData] = useState(shopRows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "shopName",
      headerName: "Shop Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="shopListUser">
            <img className="shopListUserImg" src={params.row.logo} alt="" />
            {params.row.shopName}
          </div>
        );
      },
    },
    {
      field: "shopOwner",
      headerName: "Shop Owner",
      width: 260,
      renderCell: (params) => {
        return (
          <div className="shopListUser">
            <img className="shopListUserImg" src={params.row.userImg} alt="" />
            {params.row.shopOwner}
          </div>
        );
      },
    },

    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 210,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/shops/" + params.row.id}>
              <button className="shopListEdit">View More</button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="shopList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
