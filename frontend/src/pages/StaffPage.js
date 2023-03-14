import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage() {

    const [results, setResults] = useState([]);
    const fetchRandomuserAPI = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(response => {
                setResults(response.results);
            })
            .catch(() => {
                alert("Error occured when fetching randomuser API")
            });
    }

    return (
        <>
        <h2 className="subpage">Staff</h2>
        <article>
            <p>This page calls the Random Person API to create a staff table.</p>
            <button id="browser" onClick={fetchRandomuserAPI}>directly from the browser</button>
            <table>
                <caption>Staff List</caption>
                <thead>
                    <tr>
                        <th>Portrait</th>
                        <th>Name/Email</th>
                        <th>Telephone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody id="personTable">
                    {results.map((person, i) => <StaffRow person={person} key={i} />)}
                </tbody>
            </table>
        </article>
        </>
    );
}

export default StaffPage;
