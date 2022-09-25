import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  // fake data from mocker.com for table
  const TableData = [
    {
      id: 1,
      first_name: "Celine",
      last_name: "Blenkinsopp",
      email: "cblenkinsopp0@guardian.co.uk",
      gender: "Female",
      ip_address: "45.139.22.53",
    },
    {
      id: 2,
      first_name: "Rodney",
      last_name: "Raffan",
      email: "rraffan1@newsvine.com",
      gender: "Male",
      ip_address: "33.128.190.102",
    },
    {
      id: 3,
      first_name: "Witty",
      last_name: "Nangle",
      email: "wnangle2@toplist.cz",
      gender: "Male",
      ip_address: "107.214.219.61",
    },
    {
      id: 4,
      first_name: "Bobbette",
      last_name: "Gilberthorpe",
      email: "bgilberthorpe3@reuters.com",
      gender: "Female",
      ip_address: "159.249.194.223",
    },
    {
      id: 5,
      first_name: "Averyl",
      last_name: "Debow",
      email: "adebow4@rakuten.co.jp",
      gender: "Female",
      ip_address: "56.245.184.112",
    },
    {
      id: 6,
      first_name: "Alejandro",
      last_name: "Skylett",
      email: "askylett5@rediff.com",
      gender: "Male",
      ip_address: "37.140.226.202",
    },
    {
      id: 7,
      first_name: "Witty",
      last_name: "MacGee",
      email: "wmacgee6@businessinsider.com",
      gender: "Male",
      ip_address: "182.135.62.88",
    },
    {
      id: 8,
      first_name: "Lev",
      last_name: "Hiscoe",
      email: "lhiscoe7@weibo.com",
      gender: "Male",
      ip_address: "220.25.130.151",
    },
    {
      id: 9,
      first_name: "Harman",
      last_name: "Grayham",
      email: "hgrayham8@blinklist.com",
      gender: "Male",
      ip_address: "179.55.206.35",
    },
    {
      id: 10,
      first_name: "Adore",
      last_name: "Houlson",
      email: "ahoulson9@t.co",
      gender: "Female",
      ip_address: "173.42.80.229",
    },
  ];

  return (
    <>
      <TableContainer component={Paper}>

        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {TableData.map((row) => (
              <TableRow key={row.id} sx={{border:"2px solid"}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>

      </TableContainer>

      {/* Table 2 */}
      <TableContainer component={Paper} sx={{height:"300px",margin:"1rem 0rem 0rem 0rem"}}>

        <Table stickyHeader>

          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {TableData.map((row) => (
              <TableRow key={row.id} sx={{border:"2px solid"}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </>
  );
};

export default MuiTable;

// TABLE

// to create table in MUI first use wrapper TableContainer component , then use Table component and inside it there is first TableHead component in which Head column or row is presnt and then we have TableBody component , in both TableHead and TableBody component we have child TableRow component and every data of table must be written inside child of TableRow component which is TableCell component 

// the TableContainer component also take a prop component which we can put as Paper to get some elevation in table 

// to align content of TableCell component we can pass align prop to it 

// by default the table created by this component is always responsive in nature and will automatically give scroll to table 

// if there is scroll in table and table have limited height then we can make head row of table as sticky or position fixed by passing stickyHeader prop to Table Component 