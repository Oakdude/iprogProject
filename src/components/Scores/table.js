import React from 'react'
import "../css/style.css"
import "../css/scoreBoard.css"
import {Link} from "react-router-dom";



const Table = () => {
    return (
            <table className="table ">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                    <th scope="col">Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2 of 10</td>
                    <td>1 hr 20 min</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2 of 10</td>
                    <td>1 hr 20 min</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2 of 10</td>
                    <td>1 hr 20 min</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2 of 10</td>
                    <td>1 hr 20 min</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2 of 10</td>
                    <td>1 hr 20 min</td>
                </tr>
                </tbody>
            </table>
    )
}

export default Table;