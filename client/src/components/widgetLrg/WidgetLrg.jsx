import React from "react";
import "./WidgetLrg.css";
export default function WidgetLrg() {
  const Button = ({ type }) => {
    return <button className={"widgetLrgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLrg">
      <span className="widgetLrgTitle">Latest Transactions</span>
      <table className="widgetLrgTable">
        <tr className="widgetLrgTr">
          <th className="widgetLrgTh">Customer</th>
          <th className="widgetLrgTh">Date</th>
          <th className="widgetLrgTh">Amount</th>
          <th className="widgetLrgTh">Status</th>
        </tr>
        <tr className="widgetLrgTr">
          <td className="widgetLrgUser">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="widgetLrgImg"
            />
            <span className="widgetLrgName">Ramzi Chammem</span>
          </td>
          <td className="widgetLrgDate">10 Jun 2021</td>
          <td className="widgetLrgAmount">$145.00</td>
          <td className="widgetLrgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLrgTr">
          <td className="widgetLrgUser">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="widgetLrgImg"
            />
            <span className="widgetLrgName">Ramzi Chammem</span>
          </td>
          <td className="widgetLrgDate">10 Jun 2021</td>
          <td className="widgetLrgAmount">$145.00</td>
          <td className="widgetLrgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLrgTr">
          <td className="widgetLrgUser">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="widgetLrgImg"
            />
            <span className="widgetLrgName">Ramzi Chammem</span>
          </td>
          <td className="widgetLrgDate">10 Jun 2021</td>
          <td className="widgetLrgAmount">$145.00</td>
          <td className="widgetLrgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLrgTr">
          <td className="widgetLrgUser">
            <img
              src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-9/124163136_410655650094742_5948325008979590023_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=63Xe_P0V3TsAX8QN-Jf&_nc_ht=scontent.ftun9-1.fna&oh=5f70fb5bdc446c898fc80facb264c900&oe=60EBFFB7"
              alt=""
              className="widgetLrgImg"
            />
            <span className="widgetLrgName">Ramzi Chammem</span>
          </td>
          <td className="widgetLrgDate">10 Jun 2021</td>
          <td className="widgetLrgAmount">$145.00</td>
          <td className="widgetLrgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
